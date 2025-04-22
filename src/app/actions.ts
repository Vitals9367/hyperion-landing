"use server";

import { env } from "@/env";
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

    // Prepare the payload for n8n webhook
    const payload = {
      name: validatedData.name,
      email: validatedData.email,
      company: validatedData.company,
      request: validatedData.message, // mapping message to request as per required format
    };

    // Create Basic Auth header
    const basicAuth = Buffer.from(
      `${env.N8N_USERNAME}:${env.N8N_PASSWORD}`,
    ).toString("base64");

    // Send to n8n webhook
    const response = await fetch(env.N8N_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${basicAuth}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Failed to send data to webhook");
    }

    return { success: true };
  } catch (error) {
    console.error("Error sending data:", error);
    if (error instanceof z.ZodError) {
      return { success: false, error: "Invalid form data" };
    }
    return { success: false, error: "Failed to send data" };
  }
}
