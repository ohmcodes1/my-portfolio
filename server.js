const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');  // To allow cross-origin requests
require('dotenv').config();

// Initialize Express app
const app = express();
const port = 5000;

// Enable CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// POST endpoint for sending emails
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields (name, email, message) are required.' });
  }

  // Set up Nodemailer transport using Gmail SMTP (can be changed to any SMTP provider)
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Replace with your SMTP host
    port: 465, // Or the appropriate port for your provider
    secure: true, // Use true if you are using port 465 or secure connection
    auth: {
      user: process.env.EMAIL_USER,  // Use environment variables for security
      pass: process.env.EMAIL_PASS,  // Your email password
      
    },
    authMethod: 'PLAIN', // or 'LOGIN'
  });

  // Email options
  const mailOptions = {
    from: email,  // Sender's email address
    to: 'soham.tandale.1@gmail.com',  // Your email address
    subject: `Message from ${name}`,  // Subject
    text: `You have received a new message from ${name} (${email}):\n\n${message}`,  // Message body
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error); // Log the error
      return res.status(500).json({ error: 'Error sending email' }); // Send the error response
    }
    console.log('Email sent: ' + info.response); // Log the response from Nodemailer
    res.status(200).json({ message: 'Email sent successfully' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});