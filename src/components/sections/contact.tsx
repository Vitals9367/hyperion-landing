"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Loader2, Sparkles, CheckCircle } from "lucide-react";
import { sendContactEmail } from "@/app/actions";
import { toast } from "sonner";

const features = [
  "Free 30-minute strategy call",
  "Custom automation roadmap",
  "ROI calculation & timeline",
  "Implementation plan",
];

export function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name");
    const email = formData.get("email");
    const company = formData.get("company");
    const message = formData.get("message");

    const response = await sendContactEmail({
      name: name as string,
      email: email as string,
      company: company as string,
      message: message as string,
    });

    setIsLoading(false);

    if (response.success) {
      toast.success(
        "Contact form submitted successfully! We'll get back to you as soon as possible.",
      );
    } else {
      toast.error("Failed to submit contact form. Please try again.");
    }
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-white py-24 lg:py-32"
      id="contact"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl lg:max-w-lg"
            >
              <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-1.5 text-sm font-medium">
                <Sparkles className="h-4 w-4 text-yellow-500" />
                <span className="bg-gradient-to-r from-yellow-500 to-green-500 bg-clip-text text-transparent">
                  Start Your Growth Journey
                </span>
              </div>
              <h2 className="font-display text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
                Ready to{" "}
                <span className="bg-gradient-to-r from-yellow-500 to-green-500 bg-clip-text text-transparent">
                  Automate Your Growth
                </span>
                ?
              </h2>
              <p className="mt-6 text-lg text-zinc-600">
                Let's talk about how we can help your agency scale without the
                stress. Book a free strategy call and get:
              </p>
              <ul className="mt-8 space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-zinc-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative rounded-2xl border border-zinc-200 bg-white p-8 shadow-xl lg:ml-auto lg:max-w-md">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-zinc-900"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      required
                      className="border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 focus:border-yellow-500 focus:ring-yellow-500/20"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-zinc-900"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 focus:border-yellow-500 focus:ring-yellow-500/20"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-zinc-900"
                    >
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      required
                      className="border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 focus:border-yellow-500 focus:ring-yellow-500/20"
                      placeholder="Your Company Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-zinc-900"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      className="min-h-[120px] border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 focus:border-yellow-500 focus:ring-yellow-500/20"
                      placeholder="Tell us about your automation needs..."
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="group relative w-full overflow-hidden bg-gradient-to-r from-yellow-500 to-green-500 text-black transition-all duration-300 hover:shadow-[0_0_2rem_-0.5rem_#eab308]"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Book Your Free Strategy Call
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
