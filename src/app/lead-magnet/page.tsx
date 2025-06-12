"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ExternalLink,
  ChevronRight,
  CheckCircle2,
  Zap,
  Rocket,
  Clock,
  Shield,
  Play,
  FileText,
  Code,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { InteractiveGrid } from "@/components/ui/interactive-grid";
import { GridPattern, GradientOverlay } from "@/components/ui/grid-pattern";
import { Footer } from "@/components/layout/footer";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { useTrackCTA } from "@/hooks/use-track-cta";

export default function LeadMagnetPage() {
  const { trackCTAClick } = useTrackCTA();

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "strategy" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <>
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
            <div className="relative mx-auto max-w-7xl px-4 py-32 pb-12 sm:px-6 lg:px-8 lg:py-40">
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
                    <span className="text-white">Simple AI Automation</span>{" "}
                    <span className="text-gradient">Tutorial</span>
                    <div className="animate-shimmer absolute -inset-1 hidden rounded-xl bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:200%_100%] lg:block" />
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mx-auto mt-8 max-w-3xl text-center text-xl text-zinc-400 sm:text-2xl"
                >
                  Learn how to implement a simple AI automation solution in your
                  business with our step-by-step video guide
                </motion.p>
              </motion.div>
            </div>
          </section>

          {/* Video Tutorial Section */}
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/70" />
            <div className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8 lg:pb-32">
              <div className="mx-auto max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-black/50 shadow-2xl backdrop-blur-sm"
                >
                  <div className="aspect-video w-full">
                    <iframe
                      src="https://www.youtube.com/embed/your-video-id"
                      title="AI Automation Tutorial"
                      className="h-full w-full"
                      allowFullScreen
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Implementation Steps Section */}
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
                  Implementation Steps
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mt-4 text-lg text-zinc-400"
                >
                  Follow these simple steps to implement the solution in your
                  business
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mx-auto mt-16 max-w-4xl"
              >
                <div className="space-y-8">
                  {[
                    {
                      title: "Setup & Configuration",
                      description:
                        "Learn how to set up the necessary tools and configure your environment",
                      icon: Settings,
                    },
                    {
                      title: "Implementation",
                      description:
                        "Step-by-step guide to implementing the automation solution",
                      icon: Code,
                    },
                    {
                      title: "Testing & Deployment",
                      description:
                        "How to test your implementation and deploy it to production",
                      icon: Rocket,
                    },
                  ].map((step, index) => (
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
                        <div className="flex items-start gap-6">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-500/10">
                            <step.icon className="h-6 w-6 text-yellow-500" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-white">
                              {step.title}
                            </h3>
                            <p className="mt-2 text-zinc-400">
                              {step.description}
                            </p>
                          </div>
                        </div>
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
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                      Ready for More{" "}
                      <span className="bg-gradient-gold bg-clip-text text-transparent">
                        Advanced Solutions
                      </span>
                      ?
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
                      If you're interested in implementing more sophisticated AI
                      automation solutions, we can help you build custom systems
                      that scale with your business needs.
                    </p>

                    <div className="mt-10 flex flex-col items-center justify-center gap-6">
                      <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                        <Button
                          data-cal
                          data-cal-link="vitalijus/strategy"
                          data-cal-config='{"layout":"month_view"}'
                          size="lg"
                          onClick={() => trackCTAClick("lead-magnet")}
                          className="group bg-gradient-gold hover:shadow-primary/20 relative h-14 cursor-pointer overflow-hidden rounded-full px-8 text-black transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        >
                          <span className="relative z-10 flex cursor-pointer items-center text-base font-semibold">
                            Book Your Free Strategy Call
                            <ArrowRight className="ml-2 h-5 w-5 cursor-pointer transition-transform duration-300 group-hover:translate-x-1" />
                          </span>
                          <div className="absolute inset-0 z-0 cursor-pointer bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:250%_100%] transition-transform duration-300 group-hover:translate-x-full" />
                        </Button>
                        <Link href="/services">
                          <Button
                            variant="outline"
                            size="lg"
                            className="group h-14 cursor-pointer overflow-hidden rounded-full border-zinc-800 px-8 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white/5"
                          >
                            <span className="relative z-10 flex cursor-pointer items-center">
                              Explore Our Services
                              <ArrowRight className="ml-2 h-5 w-5 cursor-pointer transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                          </Button>
                        </Link>
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
