// app/api/contact/route.js

import nodemailer from "nodemailer";

export async function POST(request: any) {
  const {
    name,
    email,
    comments,
    phone,
    communicationMethod,
    gradeLevelId,
    groupId,
    selectedSubjects,
    serviceId,
  } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Tutor Match Request from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Plan:</strong> ${communicationMethod}</p>
             <p><strong>Grade Level ID:</strong> ${gradeLevelId}</p>
             <p><strong>Group ID:</strong> ${groupId}</p>
             <p><strong>Subject ID:</strong> ${selectedSubjects}</p>
             <p><strong>Service ID:</strong> ${serviceId}</p>
             <p><strong>Comments:</strong> ${comments}</p>`,
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Failed to send email" }), {
      status: 500,
    });
  }
}
