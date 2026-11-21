/**
 * Contact form handler.
 *
 * Runs as a Vercel serverless function (POST /api/send-email) and is also mounted by
 * server.js for local development, so there is one implementation of the logic.
 *
 * Env vars: EMAIL_USER, EMAIL_PASS (Gmail app password), RECIPIENT_EMAIL
 */
const nodemailer = require('nodemailer');

const LIMITS = { name: 100, email: 254, subject: 150, phone: 40, message: 5000 };
const RATE_LIMIT = { windowMs: 10 * 60 * 1000, max: 5 };
const hits = new Map(); // ip -> [timestamps]. Best effort: serverless instances do not share memory.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// Header values must never contain line breaks (header injection).
function oneLine(value) {
  return String(value).replace(/[\r\n]+/g, ' ').trim();
}

function clientIp(req) {
  const forwarded = req.headers['x-forwarded-for'];
  return (forwarded ? String(forwarded).split(',')[0].trim() : req.socket && req.socket.remoteAddress) || 'unknown';
}

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_LIMIT.windowMs);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 1000) {
    for (const [key, times] of hits) {
      if (!times.some((t) => now - t < RATE_LIMIT.windowMs)) hits.delete(key);
    }
  }
  return recent.length > RATE_LIMIT.max;
}

function parseBody(req) {
  const body = req.body;
  if (body && typeof body === 'object') return body;
  if (typeof body === 'string') {
    try {
      return JSON.parse(body);
    } catch (e) {
      return null;
    }
  }
  return null;
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  if (rateLimited(clientIp(req))) {
    return res.status(429).json({ success: false, message: 'Too many messages. Please try again later.' });
  }

  const body = parseBody(req);
  if (!body) {
    return res.status(400).json({ success: false, message: 'No data received' });
  }

  // Honeypot: bots fill this field, people never see it. Pretend success.
  if (body.website) {
    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
  }

  const fields = {};
  for (const key of Object.keys(LIMITS)) {
    fields[key] = typeof body[key] === 'string' ? body[key].trim() : '';
  }

  if (!fields.name || !fields.email || !fields.subject || !fields.message) {
    return res.status(400).json({ success: false, message: 'Missing required form data' });
  }
  if (!EMAIL_RE.test(fields.email)) {
    return res.status(400).json({ success: false, message: 'Please enter a valid email address' });
  }
  for (const key of Object.keys(LIMITS)) {
    if (fields[key].length > LIMITS[key]) {
      return res.status(400).json({ success: false, message: `The ${key} field is too long` });
    }
  }

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.RECIPIENT_EMAIL) {
    console.error('send-email: EMAIL_USER, EMAIL_PASS or RECIPIENT_EMAIL is not set');
    return res.status(500).json({ success: false, message: 'Failed to send email' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: oneLine(fields.email),
      subject: `Portfolio Contact: ${oneLine(fields.subject)} (from ${oneLine(fields.name)})`,
      text: [
        `Name: ${fields.name}`,
        `Email: ${fields.email}`,
        fields.phone ? `Phone: ${fields.phone}` : null,
        `Subject: ${fields.subject}`,
        '',
        'Message:',
        fields.message
      ]
        .filter((line) => line !== null)
        .join('\n'),
      html: `
        <h3>New contact message from the portfolio</h3>
        <p><strong>Name:</strong> ${escapeHtml(fields.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(fields.email)}</p>
        ${fields.phone ? `<p><strong>Phone:</strong> ${escapeHtml(fields.phone)}</p>` : ''}
        <p><strong>Subject:</strong> ${escapeHtml(fields.subject)}</p>
        <h4>Message</h4>
        <p style="white-space:pre-wrap">${escapeHtml(fields.message)}</p>`
    });

    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    // Log the failure reason only: never headers, request bodies or credentials.
    console.error('send-email: sendMail failed:', error && error.message);
    return res.status(500).json({ success: false, message: 'Failed to send email' });
  }
};
