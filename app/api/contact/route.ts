import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log(body);
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "nikolozgelenidze9@gmail.com",
        pass: process.env.PASSWORD,
      },
    });
    const mailForMe = {
      from: `${body.name}<${body.email}>`,
      to: "nikolozgelenidze9@gmail.com",
      subject: `Mail from ${body.email}`,
      text: `${body.message}`,
    };
    await transporter.sendMail(mailForMe);

    const mailForUser = {
      from: `nikolozgelenidze9@gmail.com`,
      to: `${body.email}`,
      subject: `Thank you for your Response`,
      text: `Hi ${body.name}, thanks for your Response. i will contact you as soon as i can.`,
    };

    await transporter.sendMail(mailForUser);

    return Response.json({
      message: "Email Sent successfully",
    });
  } catch (error) {
    return Response.json({
      error: "Error sending email",
    });
  }
}
