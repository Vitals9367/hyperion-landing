"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  MessageSquare,
  FileText,
  Phone,
  Workflow,
  Users,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Sparkles,
    title: "Prometheus Lead Flow Automation",
    description:
      "Generate 2x more qualified leads with AI-powered automation. Reduce response time by 80% and increase conversion rates.",
    benefits: [
      "AI-powered lead scoring",
      "Automated qualification",
      "Real-time lead tracking",
    ],
    leadMagnet: "AI Lead Flow Audit",
    href: "/services/lead-generation",
  },
  {
    icon: MessageSquare,
    title: "Hermes Omnichannel Outreach",
    description:
      "Engage prospects across all channels with personalized, AI-driven messaging that converts 40% more leads into clients.",
    benefits: [
      "Multi-channel automation",
      "Personalized messaging",
      "Response optimization",
    ],
    leadMagnet: "Omnichannel Outreach Playbook",
    href: "/services/omnichannel-outreach",
  },
  {
    icon: FileText,
    title: "Athena Content Repurposing & Trend AI",
    description:
      "Transform your content into engaging assets across platforms with AI-powered trend analysis and optimization.",
    benefits: [
      "Content optimization",
      "Trend analysis",
      "Multi-platform distribution",
    ],
    leadMagnet: "Content Calendar Generator",
    href: "/services/content-repurposing",
  },
  {
    icon: Phone,
    title: "Orpheus AI Voice Agent & Call Automation",
    description:
      "Handle customer calls 24/7 with AI voice agents that sound human and convert 35% more calls into appointments.",
    benefits: ["24/7 availability", "Natural conversations", "Call analytics"],
    leadMagnet: "Voice Agent ROI Calculator",
    href: "/services/voice-automation",
  },
  {
    icon: Workflow,
    title: "Hephaestus Sales Funnel Automation",
    description:
      "Convert 40% more leads into clients with personalized follow-ups and perfectly timed touchpoints.",
    benefits: [
      "Automated nurturing",
      "Smart follow-ups",
      "Conversion tracking",
    ],
    leadMagnet: "Sales Funnel Audit",
    href: "/services/sales-funnel",
  },
  {
    icon: Users,
    title: "Hestia Client Intake & Onboarding",
    description:
      "Reduce onboarding time by 60% with automated workflows while improving client satisfaction.",
    benefits: ["Automated onboarding", "Client portal", "Progress tracking"],
    leadMagnet: "Onboarding Time Calculator",
    href: "/services/client-onboarding",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative w-full overflow-hidden bg-zinc-950 py-32 lg:py-40">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(218,165,32,0.1),rgba(0,0,0,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(30,86,49,0.15),rgba(0,0,0,0))]" />
      </div>

      <div className="relative z-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="border-primary/10 bg-primary/5 mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2">
            <span className="text-gradient text-sm font-medium">
              Our Solutions
            </span>
          </div>
          <h2 className="mx-auto max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Complete <span className="text-gradient">AI Growth Stack</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-400 sm:text-xl">
            Choose individual solutions or implement our full stack to scale
            your business without hiring.
          </p>
        </motion.div>

        {/* Services */}
        <div className="mt-32 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="group relative rounded-2xl border border-zinc-800 bg-black/50 p-8 backdrop-blur-sm"
            >
              <div className="bg-gradient-gold mb-8 inline-flex h-16 w-16 items-center justify-center rounded-xl">
                <service.icon className="h-8 w-8 text-black" />
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mb-6 text-base leading-relaxed text-zinc-400">
                {service.description}
              </p>
              <div className="mb-6">
                <h4 className="mb-3 text-sm font-semibold text-white">
                  Key Benefits:
                </h4>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-zinc-400"
                    >
                      <span className="text-primary mr-2">•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <Link href={service.href}>
                  <Button
                    variant="outline"
                    className="w-full justify-between border-zinc-800 text-white hover:bg-white/5"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/#contact">
                  <Button className="bg-gradient-gold hover:shadow-primary/20 w-full text-black">
                    Get Free {service.leadMagnet}
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
