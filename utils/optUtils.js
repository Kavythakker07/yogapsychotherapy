 const nodemailer = require('nodemailer');

// Create a transporter using Ethereal's SMTP server


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'thakkerkavy8@gmail.com',
        pass: 'youq zmqt erxj eboe'
    },
    port: 587,
    secure: false,
    logger: true,
    debug: true
});

// Generate a 6-digit OTP
const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};

// Send an OTP email
const sendOtpEmail = (email, otp) => {
    const mailOptions = {
        from: 'thakkerkavy8@gmail.com', // Use your Ethereal email address
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is ${otp}`
    };

    return transporter.sendMail(mailOptions)
        .then(info => console.log('Email sent:', info.response))
        .catch(err => {
            console.error('Error sending email:', err);
            throw err;  // Re-throw the error for further handling
        });
};

module.exports = { generateOtp, sendOtpEmail };
