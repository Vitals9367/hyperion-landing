"use server";

import { env } from "@/env";
import { z } from "zod";

// Contact form schema
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company name is required"),
  message: z.string().optional(),
  leadMagnet: z.string().min(1, "Please select a free resource"),
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
      company_name: validatedData.company,
      request: validatedData.message || "",
      lead_magnet: validatedData.leadMagnet,
    };
    // Send to n8n webhook
    const response = await fetch(env.FORM_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
