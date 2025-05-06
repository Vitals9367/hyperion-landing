"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { InteractiveGrid } from "@/components/ui/interactive-grid";
import { GridPattern, GradientOverlay } from "@/components/ui/grid-pattern";

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <InteractiveGrid />
        <GridPattern />
        <GradientOverlay />
        <GradientOverlay color1="rgba(30,86,49,0.15)" position="80% 50%" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-screen-xl flex-col items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border-primary/10 bg-primary/5 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-sm"
          >
            <span className="text-gradient relative text-sm font-medium">
              Transform Your Agency's Growth
              <div className="animate-shimmer absolute -inset-px rounded-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:200%_100%]" />
            </span>
          </motion.div>

          <h1 className="mx-auto max-w-4xl text-center text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gradient relative inline-block"
            >
              80%+ of Your Tasks
              <div className="animate-shimmer absolute -inset-1 hidden rounded-xl bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:200%_100%] lg:block" />
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Automated with AI
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mx-auto mt-8 max-w-2xl text-center text-lg text-zinc-400 sm:text-xl"
          >
            Our AI-powered systems handle your outreach, sales, and client
            management, so you can focus on what truly matters - growing your
            business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
          >
            <Link href="/#contact">
              <Button
                size="lg"
                className="group bg-gradient-gold hover:shadow-primary/20 relative h-12 overflow-hidden rounded-full px-8 text-black transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10 flex items-center text-base font-semibold">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 z-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:250%_100%] transition-transform duration-300 group-hover:translate-x-full" />
              </Button>
            </Link>
            <Link href="#services">
              <Button
                variant="outline"
                size="lg"
                className="h-12 rounded-full border-zinc-800 px-8 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white/5"
              >
                View Services
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-24 grid w-full max-w-4xl grid-cols-1 gap-8 rounded-2xl border border-zinc-800/50 bg-black/30 p-8 backdrop-blur-sm sm:grid-cols-3"
        >
          {[
            { value: "40%", label: "Faster Lead Response" },
            { value: "2x", label: "Client Onboarding" },
            { value: "10h+", label: "Saved Weekly" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="group relative text-center"
            >
              <div className="text-gradient relative mb-2 text-4xl font-bold sm:text-5xl">
                {stat.value}
                <div className="animate-shimmer absolute -inset-2 hidden rounded-xl bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:200%_100%] group-hover:block" />
              </div>
              <div className="text-sm font-medium text-zinc-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
