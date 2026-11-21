/**
 * Local development server: `npm run dev` (nodemon) or `npm start`.
 * Serves the static site and mounts the same contact handler that Vercel runs as a function.
 * In production Vercel serves the static files and runs api/send-email.js directly.
 */
const express = require('express');
const path = require('path');
require('dotenv').config();

const sendEmail = require('./api/send-email');

const app = express();
const PORT = process.env.PORT || 3000;

app.disable('x-powered-by');
app.use(express.json({ limit: '20kb' }));

// Serve only the public site, never the repo root (it contains .env and server code).
app.use('/src', express.static(path.join(__dirname, 'src')));
['favicon.svg', 'favicon.ico'].forEach((file) => {
  app.get(`/${file}`, (req, res) => res.sendFile(path.join(__dirname, file)));
});
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.post('/api/send-email', sendEmail);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
