import nodemailerConfig from './nodemailerConfig.js'

const sendEmail = async ({ email, subject, html }) => {
    return nodemailerConfig.sendMail({
      to: email,
      subject,
      html : html + '\nMy Email - ' + email,
    });
  };

export default sendEmail
//'jirehtuto71@gmail.com',