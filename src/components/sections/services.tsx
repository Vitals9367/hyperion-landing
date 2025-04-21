"use client";

import { motion } from "framer-motion";
import { Bot, Workflow, LineChart } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "AI Process Automation",
    description:
      "Transform manual workflows into intelligent automated processes. Our AI solutions learn and adapt to your business needs, reducing errors and increasing efficiency.",
    icon: Workflow,
  },
  {
    title: "Intelligent Virtual Assistants",
    description:
      "Deploy AI-powered virtual assistants that handle customer inquiries, schedule meetings, and manage routine tasks with human-like understanding.",
    icon: Bot,
  },
  {
    title: "Predictive Analytics",
    description:
      "Leverage machine learning algorithms to analyze trends, forecast outcomes, and make data-driven decisions with unprecedented accuracy.",
    icon: LineChart,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
      ease: "easeOut",
    },
  },
};

interface ServicesProps {
  className?: string;
}

export default function Services() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer a comprehensive suite of solutions designed to transform
            your business operations and drive growth through technology.
          </p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card text-card-foreground relative rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex items-center">
                <div className="bg-primary/10 rounded-lg p-2">
                  <service.icon className="text-primary h-6 w-6" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
