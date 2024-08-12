import nodemailer from "nodemailer";
import dotenv from 'dotenv';
dotenv.config();

const emailConfig = {
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  };
  
  async function sendMail(to,userName,subject="Verify You Acount", message = "") {
    const transporter = nodemailer.createTransport({
      service: emailConfig.service,
      auth: {
        user: emailConfig.auth.user,
        pass: emailConfig.auth.pass,
      },
    });
  
    const mailOptions = {
      from: emailConfig.auth.user,
      to,
      subject,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h1 style="color: #4CAF50;">Hey ${userName} Welcome to <b>Daily Progress</b>!</h1>
          <p>Hi there,</p>
          <p>Thank you for registering with <b>Daily Progress</b>. We're excited to have you on board!</p>
          <p>Best regards,</p>
          <p>The <b>Daily Progress</b> Team</p>
        </div>
      `,
    };
    // <p>To get started, click the link below to verify your email address:</p>
    // <p>If you did not sign up for this account, you can safely ignore this email.</p>
    // <p><a href=${verificationLink} style="color: #4CAF50; text-decoration: none;">Verify Email</a></p>

  
    // Send email
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent: " + info.response);
    } catch (error) {
      console.error("Error sending email: " + error);
    }
  }
  
// sendMail(email);

export default sendMail;

  