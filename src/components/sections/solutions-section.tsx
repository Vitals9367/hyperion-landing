"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  AlertTriangle,
  MessageSquare,
  Users,
  type LucideIcon,
} from "lucide-react";

interface Solution {
  icon: LucideIcon;
  title: string;
  description: string;
  copy: string;
  responsibilities: string[];
  avatar: string;
  href: string;
}

const solutions: Solution[] = [
  {
    icon: AlertTriangle,
    title: "Prometheus",
    description: "Your AI Lead Generation Agent",
    copy: "A dedicated AI researcher that works 24/7 to find and qualify your ideal prospects, delivering them directly to your CRM.",
    responsibilities: [
      "Research and identify ideal prospects",
      "Qualify leads based on custom criteria",
      "Deliver qualified leads to your CRM",
      "Track and optimize lead quality",
    ],
    avatar: "/agents/prometheus.png",
    href: "/services/prometheus",
  },
  {
    icon: MessageSquare,
    title: "Hermes",
    description: "Your AI Sales & Communication Agent",
    copy: "Your tireless sales and communication specialist that handles all customer interactions, from prospecting to appointment scheduling.",
    responsibilities: [
      "Handle outbound prospecting",
      "Manage inbound inquiries",
      "Schedule appointments automatically",
      "Optimize response strategies",
    ],
    avatar: "/agents/hermes.png",
    href: "/services/hermes",
  },
  {
    icon: Users,
    title: "Hestia",
    description: "Your AI Customer Success Agent",
    copy: "A dedicated customer success manager that guides prospects through your sales funnel and ensures a seamless customer journey.",
    responsibilities: [
      "Guide prospects through sales funnel",
      "Automate client onboarding",
      "Monitor customer experience",
      "Track customer journey progress",
    ],
    avatar: "/agents/hestia.png",
    href: "/services/hestia",
  },
];

export function SolutionsSection() {
  return (
    <div id="solutions">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="mx-auto max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          The AI Workforce That <span className="text-gradient">Scales</span>{" "}
          Your Revenue
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-400">
          Unlock triple the productivity with AI agents expertly handling lead
          generation, outreach, and client management, allowing your business to
          scale without increasing headcount
        </p>
      </motion.div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map((solution, index) => (
          <Link
            key={index}
            href={solution.href}
            className="group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-800 bg-black/50 backdrop-blur-sm transition-all duration-300 hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(234,179,8,0.1)]"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                transition: { duration: 0.2 },
              }}
              className="relative"
            >
              <div className="relative h-80 w-full overflow-hidden">
                <div className="bg-gradient-gold absolute inset-0 opacity-20" />
                <div className="relative h-full w-full overflow-hidden">
                  <motion.img
                    src={solution.avatar}
                    alt={solution.title}
                    className="relative h-full w-full origin-top object-cover object-top transition-all duration-500 group-hover:scale-[1.2] group-hover:brightness-110 before:absolute before:inset-0 before:translate-x-[-100%] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-transform before:duration-1000 before:group-hover:translate-x-[100%]"
                  />
                </div>
                <motion.div
                  className="absolute inset-0 -bottom-8 bg-gradient-to-b from-black/0 via-black/70 via-[60%] to-black to-[90%] transition-opacity duration-300 group-hover:opacity-90"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
                <motion.div
                  className="absolute right-0 bottom-0 left-0 p-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h3 className="text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-yellow-500">
                    {solution.title}
                  </h3>
                  <p className="text-gradient text-lg font-medium">
                    {solution.description}
                  </p>
                </motion.div>
              </div>
              <div className="relative p-6">
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
                <div className="relative">
                  <motion.p
                    className="text-lg text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    {solution.copy}
                  </motion.p>
                  <ul className="mt-6 space-y-3">
                    {solution.responsibilities.map((responsibility, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-center gap-3 text-zinc-300 transition-colors duration-300 group-hover:text-white"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                      >
                        <motion.div
                          className="bg-gradient-gold flex h-6 w-6 flex-shrink-0 cursor-pointer items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowRight className="h-3 w-3 cursor-pointer text-black" />
                        </motion.div>
                        {responsibility}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
