"use server";

import { env } from "@/env";
import nodemailer from "nodemailer";
import { z } from "zod";

// Contact form schema
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company name is required"),
  message: z.string().min(1, "Message is required"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export async function sendContactEmail(data: ContactFormData) {
  try {
    // Validate input
    const validatedData = contactSchema.parse(data);

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: env.SMTP_USER,
        pass: env.SMTP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: env.SMTP_USER,
      to: "vitalijus@hyperionaiagency.com",
      subject: `New Contact Form Submission from ${validatedData.name} - ${validatedData.company}`,
      text: `
Name: ${validatedData.name}
Email: ${validatedData.email}
Company: ${validatedData.company}

Message:
${validatedData.message}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${validatedData.name}</p>
<p><strong>Email:</strong> ${validatedData.email}</p>
<p><strong>Company:</strong> ${validatedData.company}</p>
<h3>Message:</h3>
<p>${validatedData.message.replace(/\n/g, "<br>")}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    if (error instanceof z.ZodError) {
      return { success: false, error: "Invalid form data" };
    }
    return { success: false, error: "Failed to send email" };
  }
}
