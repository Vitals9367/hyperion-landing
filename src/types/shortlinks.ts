export const leadMagnets: Record<
  string,
  {
    headline: string;
    subheadline: string;
    button: string;
    modalHeadline: string;
    resource: string;
    emailCopy: string;
    subject: string;
    description: string;
    resourceName: string;
    image: string;
    name: string;
    subtitle: string;
  }
> = {
  worksheet: {
    // Webpage
    headline: "Unlock Your Potential",
    subheadline: "Get our exclusive worksheet to find your AI niche!",
    button: "DOWNLOAD FREE WORKSHEET",
    modalHeadline: "Get Instant Access",
    subtitle: "Founder, Hyperion AI",
    name: "Vitalijus Alšauskas",
    image: "/profile.png",

    // Email
    subject: "Your AI Worksheet from Hyperion AI",
    emailCopy: "Here's your requested resource: Unlock Your Potential",
    description:
      "A worksheet to help you discover your unique AI business niche.",
    resourceName: "AI Niche Worksheet",

    // Download link
    resource: "/downloads/your-file.pdf",
  },
  // Add more lead magnets here
};

export const shortLinks: Record<string, string> = {
  li: "/resource/worksheet?utm_source=linkedin&utm_medium=social&utm_campaign=lead_magnet",
  yt: "/resource/worksheet?utm_source=youtube&utm_medium=video&utm_campaign=lead_magnet",
  // Add more mappings as needed
};
