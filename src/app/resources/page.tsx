"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  FileText,
  Video,
  Code,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { InteractiveGrid } from "@/components/ui/interactive-grid";
import { GridPattern, GradientOverlay } from "@/components/ui/grid-pattern";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const resources = [
  {
    title: "Simple AI Automation Tutorial",
    description:
      "A step-by-step guide to implementing a simple AI automation solution into your business.",
    icon: Video,
    href: "/resources/lead-magnet",
  },
  {
    title: "AI Lead Generation Guide",
    description:
      "Learn how to leverage AI for effective lead generation and qualification.",
    icon: FileText,
    href: "/resources/lead-generation-guide",
  },
  {
    title: "AI Sales & Communication Guide",
    description:
      "Discover strategies for automating sales and communication with AI.",
    icon: BookOpen,
    href: "/resources/sales-communication-guide",
  },
  {
    title: "AI Customer Success Guide",
    description:
      "Explore how AI can enhance customer success and onboarding processes.",
    icon: Settings,
    href: "/resources/customer-success-guide",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen w-full overflow-hidden bg-black">
        {/* Background Effects */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <InteractiveGrid />
          <GridPattern />
          <GradientOverlay />
          <GradientOverlay color1="rgba(30,86,49,0.3)" position="80% 50%" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(218,165,32,0.15),rgba(0,0,0,0))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(30,86,49,0.25),rgba(0,0,0,0))]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(255,215,0,0.1)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] bg-[size:32px_32px]" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Hero Section */}
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/70" />
            <div className="relative mx-auto max-w-7xl px-4 py-32 pb-4 sm:px-6 lg:px-8 lg:py-40">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mx-auto max-w-3xl text-center"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mx-auto max-w-4xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
                >
                  <span className="relative inline-block">
                    <span className="text-white">Guides</span>{" "}
                    <span className="text-gradient">& Templates</span>
                    <div className="animate-shimmer absolute -inset-1 hidden rounded-xl bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:200%_100%] lg:block" />
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mx-auto mt-8 max-w-3xl text-center text-xl text-zinc-400 sm:text-2xl"
                >
                  Explore our collection of guides and templates designed to
                  help you implement AI solutions into your business.
                </motion.p>
              </motion.div>
            </div>
          </section>

          {/* Resources Section */}
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/70" />
            <div className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8 lg:pb-32">
              <div className="mx-auto max-w-3xl text-center">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                >
                  Available Resources
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mt-4 text-lg text-zinc-400"
                >
                  Browse our guides and lead magnets to get started with AI
                  automation.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mx-auto mt-16 max-w-4xl"
              >
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {resources.map((resource, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group relative"
                    >
                      <div className="bg-gradient-gold absolute -inset-0.5 rounded-xl opacity-0 transition-opacity group-hover:opacity-20" />
                      <div className="relative rounded-xl border border-zinc-800 bg-black/50 p-8 backdrop-blur-sm">
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-500/10">
                          <resource.icon className="h-6 w-6 text-yellow-500" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">
                          {resource.title}
                        </h3>
                        <p className="mt-2 text-zinc-400">
                          {resource.description}
                        </p>
                        <Link href={resource.href}>
                          <Button className="mt-4 w-full">View Resource</Button>
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
