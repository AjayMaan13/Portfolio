const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
// Load environment variables
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, '/')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


// Handle form submissions
// Handle form submissions
app.post('/send-email', async (req, res) => {
    console.log('=== FORM SUBMISSION RECEIVED ===');
    console.log('Request headers:', req.headers);
    console.log('Request body (raw):', req.body);
    console.log('Request body type:', typeof req.body);
    
    // Check if body is empty
    if (!req.body || Object.keys(req.body).length === 0) {
      console.error('ERROR: Empty request body');
      return res.status(400).json({ success: false, message: 'No data received' });
    }
    
    // Extract form data
    const { name, email, message } = req.body;
    
    console.log('Extracted data:');
    console.log('- name:', name, typeof name);
    console.log('- email:', email, typeof email);
    console.log('- message:', message, typeof message);
    
    // Check if required fields are missing
    if (!name || !email || !message) {
      console.error('ERROR: Missing required fields');
      console.error('- name exists:', !!name);
      console.error('- email exists:', !!email);
      console.error('- message exists:', !!message);
      return res.status(400).json({ success: false, message: 'Missing required form data' });
    }
    
    try {
      // Create email transporter using environment variables
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });
      
      // Mail options using form data
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.RECIPIENT_EMAIL,
        subject: `Portfolio Contact: Message from ${name}`,
        text: `
          Name: ${name}
          Email: ${email}
          
          Message:
          ${message}
        `,
        html: `
          <h3>New Contact Message from Portfolio</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <h4>Message:</h4>
          <p>${message}</p>
        `
      };
      
      console.log('Sending email with options:', mailOptions);
      
      // Send mail
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully!');
      console.log('Message ID:', info.messageId);
      
      res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
      console.error('ERROR sending email:', error);
      res.status(500).json({ success: false, message: 'Failed to send email' });
    }
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});