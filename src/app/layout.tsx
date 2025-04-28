import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hyperion AI | Intelligent Automation Solutions",
  description:
    "Transform your business with cutting-edge AI automation solutions. Hyperion AI helps companies increase efficiency, reduce costs, and drive innovation through intelligent automation.",
  keywords: [
    "AI Automation",
    "Business Intelligence",
    "Process Automation",
    "Machine Learning",
    "Digital Transformation",
    "Enterprise AI",
    "Workflow Automation",
    "AI Solutions",
  ],
  authors: [{ name: "Vitalijus Majorovas" }],
  creator: "Hyperion AI",
  publisher: "Hyperion AI",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hyperion-ai.com",
    siteName: "Hyperion AI",
    title: "Hyperion AI | Intelligent Automation Solutions",
    description:
      "Transform your business with cutting-edge AI automation solutions",
    images: [
      {
        url: "og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hyperion AI | Intelligent Automation Solutions",
    description:
      "Transform your business with cutting-edge AI automation solutions",
    creator: "@HyperionAI",
    images: [
      {
        url: "og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          inter.className,
          "min-h-screen bg-white font-sans antialiased",
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
