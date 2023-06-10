import nodemailer from "nodemailer";
import cryptojs from "crypto-js";
import Users from "../../models/userModel";
import { deleteCookie } from "cookies-next";
import connectMongo from "../../utils/functions/connectMongo";

const handler = async (req, res) => {
  try {
    await connectMongo();
    // decrypting code
    const bytes = cryptojs.AES.decrypt(req.body.code, process.env.CJS_KEY);
    const decryptedCode = bytes.toString(cryptojs.enc.Utf8);
    let transport = nodemailer.createTransport({
      host: 'smtp.titan.email',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: { rejectUnauthorized: false }
    });
    const mailOptions = {
      from: `Morpi <info@turpio.com>`,
      to: req.body.email,
      subject: "Your single-use code",
      html: `
      <p>Hi <span style="color: blue;" >${req.body.email},</span></p>
      <p>We received your request for a single-use code to use with your Morpi account.</P>
      <p>Your single-use code is: ${decryptedCode}</P>
      <p>If you didn't request this code, you can safely ignore this email. Someone else might have typed your email address by mistake.</P>
      <p>Thanks, <br/>The Morpi account team</P>
      `
    };

    const user = await Users.findOne({ email: req.body.email });
    if (!user) {
      await transport.sendMail(mailOptions);
      return res.status(200).json({ success: true, message: "Code has been sent to your mail!" });
    } else {
      deleteCookie("signupUser");
      return res.status(406).json({ success: false, message: "The user with the same email already existing!" });
    }
  } catch (err) {
    deleteCookie("signupUser");
    return res.status(500).json({ success: false, message: err.message })
  }
}

export default handler
