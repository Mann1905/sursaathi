import nodemailer from "nodemailer";

async function testMail() {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "gvccha@gmail.com",
      pass: "siea auyt tnsl wzcy", // your app password here
    },
  });

  const mailOptions = {
    from: "gvccha@gmail.com",
    to: "your-email@example.com", // use your email here for test
    subject: "Test email",
    text: "This is a test email",
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

testMail();
