"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, Users } from "lucide-react";

const painPoints = [
  {
    icon: AlertTriangle,
    title: "Leads Falling Through the Cracks",
    description:
      "Manual follow-ups mean missed opportunities and lost revenue potential.",
  },
  {
    icon: Clock,
    title: "Client Onboarding Chaos",
    description:
      "Inconsistent processes leading to delays and poor first impressions.",
  },
  {
    icon: Users,
    title: "Manual Follow-ups Draining Your Team",
    description:
      "Hours spent on repetitive tasks instead of strategic growth activities.",
  },
];

export default function BusinessPainSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-24 lg:py-32">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(218,165,32,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(218,165,32,0.1)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,white_50%,transparent_80%)] bg-[size:64px_64px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div>
              <div className="bg-gradient-gold/[0.08] ring-primary/10 mb-8 inline-flex items-center rounded-full px-6 py-2.5 shadow-sm ring-1">
                <span className="bg-gradient-gold bg-clip-text text-sm font-semibold text-transparent">
                  Common Agency Challenges
                </span>
              </div>
              <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl">
                Broken Processes Are{" "}
                <span className="text-gradient bg-clip-text">
                  Killing Your Agency Deals
                </span>
              </h2>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-600">
                Don't let manual tasks and inconsistent processes hold back your
                agency's growth potential.
              </p>

              {/* Decorative line */}
              <div className="bg-gradient-gold mt-12 h-1 w-24 rounded-full opacity-80" />
            </div>
          </motion.div>

          {/* Right Column - Pain Points */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-12"
          >
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex items-start gap-6"
              >
                <div className="bg-gradient-gold inline-flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl shadow-md">
                  <point.icon className="h-7 w-7 text-black" />
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-zinc-900">
                    {point.title}
                  </h3>
                  <p className="text-base leading-relaxed text-zinc-600">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
