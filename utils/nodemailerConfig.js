import dotenv from 'dotenv'
dotenv.config()
import nodemailer from 'nodemailer'

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth:{
        user: process.env.userMail,
        pass: process.env.password,
    }
  });

  export default transporter