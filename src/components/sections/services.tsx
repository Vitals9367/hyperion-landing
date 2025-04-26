"use client";

import { motion } from "framer-motion";
import { Sparkles, Workflow, Users } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Smart Lead Generation",
    description:
      "Double your qualified leads while cutting acquisition costs in half. Our AI identifies and engages your ideal clients 24/7.",
  },
  {
    icon: Workflow,
    title: "Automated Sales Pipelines",
    description:
      "Convert 40% more leads into clients with personalized follow-ups and perfectly timed touchpoints that never miss an opportunity.",
  },
  {
    icon: Users,
    title: "Seamless Client Management",
    description:
      "Boost client satisfaction by 60% with automated onboarding, instant responses, and proactive project updates that wow your clients.",
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
              Our Services
            </span>
          </div>
          <h2 className="mx-auto max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Introducing{" "}
            <span className="text-gradient">Next-Gen Agency Automation</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-400 sm:text-xl">
            Your agency's invisible engine for growth and efficiency.
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
              <p className="text-base leading-relaxed text-zinc-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
