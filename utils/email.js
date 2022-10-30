const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  // 1) Create a transporter
  const transporter = nodemailer.createTransport({
    /*service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
        // Activate in gmail "less secure app" option
        */
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,  // initial test did not work.  Changing the port to 2525 and restarting nodemon did the trick
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    logger: true,
    tls: {
      rejectUnauthorized: true,
    },
  });

  // 2) Define the email options
  const mailOptions = {
    from: 'Ronan Corr <ronan_corr@hotmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
    // html:
  };

  // 3) Actually send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
