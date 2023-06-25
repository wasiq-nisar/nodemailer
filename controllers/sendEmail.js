const nodemailer = require('nodemailer');

const sendEmail = async(req, res) =>{
    let testAccount = await nodemailer.createTestAccount();
    
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'einar.hyatt54@ethereal.email',
            pass: 'aFA4nP43kHKVwdAEbf'
        }
    });

    let info = await transporter.sendMail({
        from: '"Codding Addict" <codingadict@gmail.com>',
        to: 'bar@example.com',
        subject: 'Hello',
        html: '<h2>Sending Emails with Node.js</h2>'
    })

    res.json(info);
}

module.exports = sendEmail;