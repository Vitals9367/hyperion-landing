"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Target,
  Search,
  Filter,
  BarChart,
  CheckCircle2,
  Clock,
  Shield,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { InteractiveGrid } from "@/components/ui/interactive-grid";
import { GridPattern, GradientOverlay } from "@/components/ui/grid-pattern";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const features = [
  {
    title: "AI-Powered Lead Research",
    description:
      "Our AI agent continuously scans the web to identify your ideal prospects based on custom criteria and industry-specific signals.",
    icon: Search,
  },
  {
    title: "Smart Lead Qualification",
    description:
      "Automatically qualify leads using advanced algorithms that analyze company data, decision-maker profiles, and engagement signals.",
    icon: Filter,
  },
  {
    title: "Real-time Analytics",
    description:
      "Track lead quality, conversion rates, and ROI with comprehensive dashboards and AI-powered insights.",
    icon: BarChart,
  },
];

const benefits = [
  "Generate 2x more qualified leads",
  "Reduce lead response time by 80%",
  "Increase conversion rates by 40%",
  "Automate lead scoring and qualification",
  "Personalize outreach at scale",
  "Track and optimize your pipeline",
];

export default function PrometheusPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "strategy" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

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
                    <span className="text-white">Prometheus</span>{" "}
                    <span className="text-gradient">AI Lead Research</span>
                    <div className="animate-shimmer absolute -inset-1 hidden rounded-xl bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:200%_100%] lg:block" />
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mx-auto mt-8 max-w-3xl text-center text-xl text-zinc-400 sm:text-2xl"
                >
                  Your dedicated AI researcher that works 24/7 to find and
                  qualify your ideal prospects, delivering them directly to your
                  CRM. Prometheus does not perform outreach or communication—its
                  sole focus is on research, qualification, and data delivery.
                </motion.p>
              </motion.div>
            </div>
          </section>

          {/* Benefits Section */}
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
                  Key Benefits
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mt-4 text-lg text-zinc-400"
                >
                  Transform your lead generation process with AI-powered
                  research and qualification—no outreach or communication
                  included.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mx-auto mt-16 max-w-4xl"
              >
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group relative"
                    >
                      <div className="bg-gradient-gold absolute -inset-0.5 rounded-xl opacity-0 transition-opacity group-hover:opacity-20" />
                      <div className="relative flex items-center gap-4 rounded-xl border border-zinc-800 bg-black/50 p-6 backdrop-blur-sm">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-500/10">
                          <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                        </div>
                        <span className="text-zinc-300">{benefit}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative overflow-hidden py-24">
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/70" />
            <div className="relative mx-auto max-w-7xl px-4 pb-32 sm:px-6 lg:px-8 lg:pb-40">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-yellow-500/10 via-yellow-500/5 to-transparent p-8 backdrop-blur-sm sm:p-12">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500/20 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(255,215,0,0.1)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] bg-[size:32px_32px]" />

                <div className="relative mx-auto max-w-3xl text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="border-primary/10 bg-primary/5 mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-sm">
                      <span className="text-sm font-medium text-yellow-500">
                        Limited Time Offer
                      </span>
                      <div className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                      <span className="text-sm font-medium text-yellow-500">
                        Book Now
                      </span>
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                      Ready to Scale Your{" "}
                      <span className="bg-gradient-gold bg-clip-text text-transparent">
                        Lead Generation
                      </span>
                      ?
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
                      Book a free strategy call to discover how Prometheus can
                      help you generate more qualified leads and grow your
                      business.
                    </p>

                    <div className="mt-10 flex flex-col items-center justify-center gap-6">
                      <motion.button
                        data-cal
                        data-cal-link="vitalijus/strategy"
                        data-cal-config='{"layout":"month_view"}'
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 px-8 py-4 text-base font-semibold text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(234,179,8,0.3)]"
                      >
                        <span className="relative z-10">
                          Book Your Free Strategy Call
                        </span>
                        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </motion.button>

                      <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
                        <div className="flex items-center gap-2 text-sm text-zinc-400">
                          <Clock className="h-4 w-4 text-yellow-500" />
                          <span>30-minute call</span>
                        </div>
                        <div className="hidden h-1 w-1 rounded-full bg-zinc-500 sm:block" />
                        <div className="flex items-center gap-2 text-sm text-zinc-400">
                          <Shield className="h-4 w-4 text-yellow-500" />
                          <span>No obligation</span>
                        </div>
                        <div className="hidden h-1 w-1 rounded-full bg-zinc-500 sm:block" />
                        <div className="flex items-center gap-2 text-sm text-zinc-400">
                          <Zap className="h-4 w-4 text-yellow-500" />
                          <span>Instant booking</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
