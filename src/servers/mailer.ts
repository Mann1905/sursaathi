import { Router, Request, Response } from "express";
import nodemailer from "nodemailer";
import multer from "multer";

const router = Router();

// Multer setup for file upload
const upload = multer({ storage: multer.memoryStorage() });

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gvccha@gmail.com',
    pass: 'xlcm bwli enld hcaj', // Replace with your Gmail app password
  },
});

// =======================
// 1. Newsletter Route
// =======================
router.post("/newsletter", async (req: Request, res: Response) => {
  const { email } = req.body;

  const mailOptions = {
    from: 'gvccha@gmail.com',
    to: email,
    subject: 'Newsletter Signup',
    text: 'Thanks for signing up!',
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('MAIL ERROR (newsletter):', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// =======================
// 2. Contact Route
// =======================
router.post("/contact", upload.single("attachment"), async (req: Request, res: Response) => {
  const { name, email, phone, message } = req.body;
  const file = req.file;

  const mailOptions: any = {
    from: 'gvccha@gmail.com',
    to: 'gvccha@gmail.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  if (file) {
    mailOptions.attachments = [{
      filename: file.originalname,
      content: file.buffer,
    }];
  }

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Contact form sent successfully!' });
  } catch (error) {
    console.error('MAIL ERROR (contact):', error);
    res.status(500).json({ error: 'Failed to send contact form' });
  }
});

// =======================
// 3. Donation Route
// =======================
router.post("/donation", upload.single("attachment"), async (req: Request, res: Response) => {
  const { name, email, phone, message } = req.body;
  const file = req.file;

  const mailOptions: any = {
    from: 'gvccha@gmail.com',
    to: 'gvccha@gmail.com',
    subject: 'New Donation Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  if (file) {
    mailOptions.attachments = [{
      filename: file.originalname,
      content: file.buffer,
    }];
  }

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Donation submitted successfully!' });
  } catch (error) {
    console.error('MAIL ERROR (donation):', error);
    res.status(500).json({ error: 'Failed to send donation form' });
  }
});


export default router;
