"use client";

import { motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const painPoints = [
  {
    title: "Manual Processes Taking Too Long?",
    description:
      "Repetitive tasks can be time-consuming and prone to human error, impacting your team's ability to focus on higher-value work.",
    solution:
      "We can help identify which processes are suitable for automation to improve efficiency.",
  },
  {
    title: "Data-Driven Decisions?",
    description:
      "Making informed decisions can be challenging when dealing with large amounts of business data using traditional analysis methods.",
    solution:
      "Our analytics tools can help organize and analyze your data to support better decision-making.",
  },
  {
    title: "Customer Service Scalability?",
    description:
      "Growing businesses often struggle to maintain consistent customer service quality while managing increasing inquiry volumes.",
    solution:
      "We can implement AI assistants to help handle common customer queries, supporting your existing service team.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function BusinessPainSection() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Common Challenges in Modern Business
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Identify the obstacles holding your business back and discover how
              our solutions can help overcome them.
            </p>
          </motion.div>

          <motion.div
            className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/[0.1]"
              >
                <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-emerald-500/10 transition-transform duration-300 group-hover:scale-150" />
                <div className="absolute top-4 right-4 rounded-full bg-red-50 p-2 text-red-600 ring-4 ring-red-50">
                  <AlertCircle className="h-5 w-5" />
                </div>

                <div className="relative">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {point.title}
                  </h3>
                  <p className="mt-4 text-gray-600">{point.description}</p>

                  <div className="mt-6 flex items-start gap-2 text-emerald-600">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0" />
                    <p className="font-medium">{point.solution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12"
          >
            <Button
              asChild
              className="group bg-emerald-600 text-white hover:bg-emerald-700"
            >
              <Link href="#services">
                Explore Our Solutions
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
