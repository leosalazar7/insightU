// app/api/contact/route.js

import nodemailer from "nodemailer";

export async function POST(request: any) {
  const { name, email, message, phone, communicationMethod } =
    await request.json();

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  console.log(process.env.EMAIL_USER, process.env.EMAIL_PASS);

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Contact form submission from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Preferred Communication:</strong> ${communicationMethod}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    return new Response(
      JSON.stringify({ message: "Message sent successfully" }),
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error(error);
    console.log(error);
    return new Response(
      JSON.stringify({
        message:
          "Failed to send Message, please try again later or send us an email!",
      }),
      {
        status: 500,
      },
    );
  }
}
