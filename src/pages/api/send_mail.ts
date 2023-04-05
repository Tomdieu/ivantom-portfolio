import { NextApiRequest, NextApiResponse } from "next";

import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SEND_MAIL);

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  const { name, email, message } = req.body;

  // Perform form validation here

  const msg = {
    to: "ivan.tomdieu@gmail.com",
    from: email,
    subject: "New message from your porfolio!",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await sgMail.send(msg);
    res.status(200).send({ message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error sending message." });
  }
}
