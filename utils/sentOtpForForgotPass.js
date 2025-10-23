const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: 'ritikaitgeeks@gmail.com',
        pass: 'aidjurpjtdkusccu'
    }
});

const sentOtpForForgotPass = async (toEmail, otp) => {

    const mailOptions = {
        from: "<ritikaitgeeks@gmail.com",
        to: toEmail,
        subject: "Email verification for forgot password",
        text: `your otp is ${otp}`
    }
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        return true;
    } 
    catch (error) {
        console.error('Error sending email:', error);
        return false;
    }

}

module.exports = sentOtpForForgotPass;
