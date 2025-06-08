"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Clock,
  Users,
  DollarSign,
  ChartBar,
  Target,
} from "lucide-react";

const painPoints = [
  {
    icon: AlertTriangle,
    title: "Scaling Requires More Headcount",
    description:
      "Traditional growth means hiring more staff, increasing overhead, and managing more complexity.",
  },
  {
    icon: Clock,
    title: "Manual Processes Slow You Down",
    description:
      "Time-consuming tasks like lead follow-up, content creation, and client onboarding limit your growth potential.",
  },
  {
    icon: Users,
    title: "Inconsistent Client Experience",
    description:
      "Manual processes lead to missed follow-ups, delayed responses, and frustrated clients.",
  },
  {
    icon: DollarSign,
    title: "High Customer Acquisition Costs",
    description:
      "Inefficient lead generation and conversion processes drive up your cost per acquisition.",
  },
  {
    icon: ChartBar,
    title: "Limited Scalability",
    description:
      "Your growth is capped by your team's capacity to handle more clients and projects.",
  },
  {
    icon: Target,
    title: "Missed Opportunities",
    description:
      "Without automation, you're losing potential clients to faster, more responsive competitors.",
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
                  For Mid-Market B2B Companies
                </span>
              </div>
              <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl">
                Scale Your Business{" "}
                <span className="text-gradient bg-clip-text">
                  Without Growing Your Team
                </span>
              </h2>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-600">
                For B2B companies with 10-500 employees and $1M-$100M in
                revenue, our AI-powered automation stack helps you scale
                operations, increase revenue, and improve client experience—all
                without hiring more staff.
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
            className="grid gap-8 sm:grid-cols-2"
          >
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex items-start gap-4"
              >
                <div className="bg-gradient-gold inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl shadow-md">
                  <point.icon className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-zinc-900">
                    {point.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-600">
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
