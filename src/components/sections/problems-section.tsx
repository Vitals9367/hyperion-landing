"use client";

import { motion } from "framer-motion";
import {
  Search,
  MessageCircle,
  Megaphone,
  PhoneCall,
  type LucideIcon,
} from "lucide-react";

interface Problem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const problems: Problem[] = [
  {
    icon: Search,
    title: "Wasting Precious Time on Cold Prospecting?",
    description:
      "Your team spends hours on manual research and outreach, while qualified buyers wait for your attention.",
  },
  {
    icon: MessageCircle,
    title: "Losing Hot Leads to Communication Gaps?",
    description:
      "Prospects show interest, ask for pricing, then disappear. Your follow-up process is costing you deals.",
  },
  {
    icon: Megaphone,
    title: "Struggling to Scale Outreach Without Huge Costs?",
    description:
      "You need to 10x your outreach, but hiring and training more salespeople isn't financially viable.",
  },
  {
    icon: PhoneCall,
    title: "Buried Under Repetitive Customer Inquiries?",
    description:
      "Your high-value time is consumed by basic scheduling and questions, while growth opportunities wait.",
  },
];

export function ProblemsSection() {
  return (
    <div id="challenges">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Frustrated by{" "}
          <span className="text-gradient">Growth Bottlenecks</span>?
        </h2>
      </motion.div>

      <div className="mt-32 grid gap-24 lg:grid-cols-2">
        {problems.map((problem, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col gap-8"
          >
            <motion.div
              className="flex items-center gap-12"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="bg-gradient-gold flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-xl"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <problem.icon className="h-10 w-10 text-black" />
              </motion.div>
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl leading-tight font-semibold text-white">
                  {problem.title}
                </h3>
                <p className="text-lg text-zinc-400">{problem.description}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
