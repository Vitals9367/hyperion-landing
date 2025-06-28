"use server";

export async function submitLeadMagnetForm({
  firstName,
  email,
  resource,
  emailCopy,
  subject,
  description,
  resourceName,
}: {
  firstName: string;
  email: string;
  resource: string;
  emailCopy: string;
  subject: string;
  description: string;
  resourceName: string;
}) {
  try {
    const res = await fetch(
      "https://hyperionaiagency.app.n8n.cloud/webhook/subscribe",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          email,
          resource,
          emailCopy,
          subject,
          description,
          resourceName,
        }),
      },
    );
    return { ok: res.ok };
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
