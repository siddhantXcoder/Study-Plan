const nodemailer = require('nodemailer');

const mailSender = async (email, title, content) => {
    try {
        // Create a transporter object using the default SMTP transport
        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'delfina.feeney@ethereal.email',
                pass: 'K6N81yf7B3PBYFKBEe',
            },
        });

        // Send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"Siddhant Salve" <delfina.feeney@ethereal.email>', // sender address
            to: email, // list of receivers
            subject: title, // Subject line
            html: content, // html body
        });

        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        return info;

    } catch (error) {
        console.error('Error sending email:', error);
        throw error; // Rethrow the error for further handling if needed
    }
};

module.exports = mailSender;
