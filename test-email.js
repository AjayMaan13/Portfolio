require('dotenv').config();
const nodemailer = require('nodemailer');

// Function to test email sending
async function testEmail() {
  try {
    // Create a test transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Test mail content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: 'Test Email from Portfolio Server',
      text: `
        This is a test email to verify email functionality.
        
        Name: Test User
        Email: test@example.com
        Message: This is a test message to verify email functionality is working correctly.
      `,
      html: `
        <h3>Test Email from Portfolio Server</h3>
        <p>This is a test email to verify email functionality.</p>
        <p><strong>Name:</strong> Test User</p>
        <p><strong>Email:</strong> test@example.com</p>
        <h4>Message:</h4>
        <p>This is a test message to verify email functionality is working correctly.</p>
      `
    };

    // Send mail
    const info = await transporter.sendMail(mailOptions);
    console.log('Test email sent successfully!');
    console.log('MessageID:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending test email:', error);
    return false;
  }
}

// Run the test
testEmail()
  .then(result => {
    console.log('Test completed, success:', result);
    process.exit(0);
  })
  .catch(err => {
    console.error('Test failed with error:', err);
    process.exit(1);
  });