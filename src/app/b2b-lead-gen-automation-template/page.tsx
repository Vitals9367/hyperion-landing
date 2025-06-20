"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  ArrowDown,
  Download,
  Settings,
  Play,
  FileText,
  ChevronDown,
  AlertTriangle,
  TrendingUp,
  Calendar,
  XCircle,
  CheckCircle,
  ArrowRight,
  Target,
  Cog,
  Bot,
  Puzzle,
  Repeat,
  Plug,
  Brain,
} from "lucide-react";
import { useTrackCTA } from "@/hooks/use-track-cta";
import { Card } from "@/components/ui/card";
import { InteractiveGrid } from "@/components/ui/interactive-grid";
import { GridPattern, GradientOverlay } from "@/components/ui/grid-pattern";
import { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function LeadGenTemplatePage() {
  const { trackCTAClick } = useTrackCTA();
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        styles: { branding: { brandColor: "#EAB308" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  const handleDownload = () => {
    // Track the download
    trackCTAClick("lead-magnet");

    // Trigger file download
    const link = document.createElement("a");
    link.href = "/resources/B2B Lead generation template.zip";
    link.download = "B2B Lead generation template.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show thank you modal
    setIsThankYouModalOpen(true);
  };

  return (
    <main className="relative min-h-screen bg-black">
      {/* Global Background Effects */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,86,49,0.08),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(218,165,32,0.08),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,215,0,0.02)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)] bg-[size:32px_32px]" />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-32">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Generate{" "}
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 bg-clip-text text-transparent">
                100+ qualified B2B leads
              </span>{" "}
              with this template
            </h1>
            <p className="mt-6 text-xl text-zinc-300">
              Use the exact no-code system I use to scrape, enrich, and store
              100+ qualified leads per day using Apollo, Apify, n8n & Google
              Sheets.
            </p>
          </motion.div>

          {/* Video Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mx-auto mt-16 max-w-5xl"
          >
            <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-black/50 shadow-2xl backdrop-blur-sm">
              <div className="aspect-video">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/DghfNJTXRb4?si=LsvjIXjLKCfGoxco"
                  title="Lead Generation Workflow Preview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex justify-center"
          >
            <button
              onClick={() => {
                document
                  .getElementById("value-stack")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group flex cursor-pointer flex-col items-center gap-2 text-yellow-500/90 transition-colors hover:text-yellow-400"
            >
              <span className="text-base font-medium">
                Get Your Free Template
              </span>
              <ChevronDown className="h-7 w-7 transition-transform duration-300 group-hover:translate-y-1" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Before & After Section */}
      <section id="differences" className="relative overflow-hidden py-32">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              The{" "}
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 bg-clip-text text-transparent">
                Difference
              </span>{" "}
              Between Manual & Automated Lead Generation
            </h2>
            <p className="mt-6 text-xl text-zinc-300">
              Most founders try to scale manually. Here's why that doesn't work,
              and what happens when you automate it right.
            </p>

            <div className="mt-16 grid gap-8 sm:grid-cols-2">
              {/* Before Column */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative rounded-2xl border border-red-500/20 bg-black/20 p-8"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-red-500/10 px-4 py-1 text-sm font-medium text-red-400">
                  Manual Approach
                </div>
                <ul className="mt-6 space-y-4 text-left">
                  {[
                    "Spending hours on manual research",
                    "Generic outreach that gets ignored",
                    "Inconsistent follow-up process",
                    "No way to track what works",
                    "Scaling means hiring more people",
                    "High cost per lead",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-3 text-zinc-300"
                    >
                      <AlertTriangle className="mt-1 h-5 w-5 flex-shrink-0 text-red-400" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* After Column */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative rounded-2xl border border-green-500/20 bg-black/20 p-8"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green-500/10 px-4 py-1 text-sm font-medium text-green-400">
                  Automated System
                </div>
                <ul className="mt-6 space-y-4 text-left">
                  {[
                    "AI-powered lead research & scoring",
                    "Personalized outreach at scale",
                    "Automated multi-channel follow-up",
                    "Data-driven optimization",
                    "Scale without adding headcount",
                    "Fraction of the cost per lead",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-3 text-zinc-300"
                    >
                      <TrendingUp className="mt-1 h-5 w-5 flex-shrink-0 text-green-400" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12 rounded-xl border border-zinc-800/30 bg-black/20 p-8 text-center"
            >
              <p className="text-lg text-zinc-200">
                The template gives a head start to build this automated system —
                no coding required.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Value Stack Section */}
      <section id="value-stack" className="relative overflow-hidden py-32">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Download the{" "}
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 bg-clip-text text-transparent">
                Entire Lead Gen System
              </span>{" "}
              — Instantly
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              You're getting everything I use to generate leads for clients —
              100% free.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-16 max-w-3xl"
          >
            <div className="space-y-6">
              {[
                {
                  icon: Settings,
                  title: "Pre-Built n8n Workflow Template",
                  description: "Plug & Play setup",
                  value: "$697 value",
                },
                {
                  icon: FileText,
                  title: "Setup Instructions",
                  description: "Step-by-step guide",
                  value: "$197 value",
                },
                {
                  icon: FileText,
                  title: "Cold Email Guide",
                  description: "Proven to get replies",
                  value: "$697 value",
                },
                {
                  icon: Settings,
                  title: "AI Prompt Pack for Personalization",
                  description: "Make your outreach stand out",
                  value: "$397 value",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex items-start gap-6 rounded-xl border border-zinc-800/50 bg-black/30 p-6 transition-all hover:border-yellow-500/50 hover:bg-yellow-500/5"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 text-2xl text-white shadow-lg shadow-yellow-500/25 transition-transform group-hover:scale-110">
                    <item.icon className="h-7 w-7 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-zinc-400">{item.description}</p>
                    <p className="mt-2 text-lg font-semibold text-yellow-500">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 rounded-xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 p-8 text-center shadow-lg shadow-yellow-500/10"
            >
              <p className="text-2xl font-bold text-white">
                Total Value: <span className="text-yellow-500">$1,988</span> —
                Yours Free
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 flex flex-col items-center justify-center"
            >
              <p className="mb-4 text-zinc-400">No email required.</p>
              <Button
                onClick={handleDownload}
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-yellow-500/90 via-yellow-400/90 to-yellow-500/90 px-8 py-4 text-base font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(234,179,8,0.2)]"
              >
                <span className="relative z-10 flex cursor-pointer items-center">
                  Download Your Free Template
                  <Download className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/90 via-yellow-500/90 to-yellow-400/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex justify-center"
        >
          <button
            onClick={() => {
              document
                .getElementById("final-cta")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group flex cursor-pointer flex-col items-center gap-2 text-yellow-500/90 transition-colors hover:text-yellow-400"
          >
            <span className="text-base font-medium">
              Let's Build Your Lead Engine
            </span>
            <ChevronDown className="h-7 w-7 transition-transform duration-300 group-hover:translate-y-1" />
          </button>
        </motion.div>
      </section>

      {/* Final CTA Section */}
      <section id="final-cta" className="relative overflow-hidden pb-32">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Want an{" "}
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 bg-clip-text text-transparent">
                  Automated Lead Gen System
                </span>{" "}
                Built Around Your Business?
              </h2>
              <p className="mt-6 text-xl text-zinc-300">
                On this free call, I'll help you plan a personalized outbound
                automation flow — so you can generate, enrich, and store
                qualified leads on autopilot.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2"
            >
              {[
                {
                  icon: Repeat,
                  text: "Consistent daily flow of qualified B2B leads",
                },
                {
                  icon: Bot,
                  text: "AI-driven personalization for higher reply rates",
                },
                {
                  icon: Plug,
                  text: "Fully automated with tools like Apify, Apollo & n8n",
                },
                {
                  icon: Brain,
                  text: "No coding or tech headaches — just plug & play",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 rounded-xl border border-zinc-800/50 bg-black/30 p-4"
                >
                  <item.icon className="h-6 w-6 shrink-0 text-yellow-500" />
                  <p className="text-sm text-zinc-300">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mx-auto mt-12 max-w-2xl text-center"
            >
              <div className="mt-8">
                <p className="mb-4 text-sm font-medium text-yellow-500/90">
                  Only 10 spots available this week
                </p>
                <Button
                  data-cal
                  data-cal-link="vitalijus/strategy-lead-gen"
                  data-cal-config='{"layout":"month_view"}'
                  onClick={() => trackCTAClick("lead-magnet")}
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-yellow-500/90 via-yellow-400/90 to-yellow-500/90 px-8 py-4 text-base font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(234,179,8,0.2)]"
                >
                  <span className="relative z-10 flex cursor-pointer items-center">
                    Book Your Free Automation Strategy Call
                    <Calendar className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/90 via-yellow-500/90 to-yellow-400/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Button>
              </div>
              <p className="mt-4 text-sm text-zinc-400">
                20 minutes. No pitch. Just a tailored plan to automate your
                outbound and scale with less effort.
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex justify-center"
          >
            <Link
              href="/"
              className="text-sm text-zinc-400 transition-colors hover:text-yellow-500/90"
            >
              Learn more about Hyperion →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Thank You Modal */}
      <Dialog open={isThankYouModalOpen} onOpenChange={setIsThankYouModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Thank You!</DialogTitle>
            <DialogDescription className="mt-4">
              Your template is downloading. Check your email for additional
              resources and setup instructions.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6 flex justify-end">
            <Button
              onClick={() => setIsThankYouModalOpen(false)}
              variant="secondary"
              className="rounded-full"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
