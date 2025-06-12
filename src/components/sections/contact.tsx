"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Calendar,
  ArrowRight,
  CheckCircle,
  Clock,
  Zap,
  Target,
  BarChart,
} from "lucide-react";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTrackCTA } from "@/hooks/use-track-cta";

const benefits = [
  {
    title: "Personalized AI Strategy",
    description: "Get a custom plan tailored to your business needs and goals",
    icon: Target,
  },
  {
    title: "Efficiency Analysis",
    description: "Identify key areas where AI can boost your productivity",
    icon: BarChart,
  },
  {
    title: "Implementation Roadmap",
    description: "Clear steps to integrate AI solutions into your workflow",
    icon: Zap,
  },
];

export function ContactSection() {
  const { trackCTAClick } = useTrackCTA();

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "strategy" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden bg-gradient-to-b from-black via-black to-zinc-950 py-24 lg:py-48 lg:pb-56"
      id="contact"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(218,165,32,0.1),rgba(0,0,0,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(30,86,49,0.15),rgba(0,0,0,0))]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,215,0,0.05)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] bg-[size:32px_32px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8 text-center"
          >
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white lg:text-5xl">
                Ready to Transform Your Business with{" "}
                <span className="text-gradient">AI Automation</span>?
              </h2>
              <p className="text-lg text-zinc-400">
                Book a free strategy call to discover how our AI solutions can
                help you streamline operations, reduce costs, and boost
                productivity.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">
                What You'll Get:
              </h3>
              <div className="flex justify-center">
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={benefit.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="bg-primary/10 mt-1 rounded-full p-2">
                        <benefit.icon className="h-5 w-5 text-yellow-500" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-medium text-white">
                          {benefit.title}
                        </h4>
                        <p className="mt-1 text-zinc-400">
                          {benefit.description}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative mx-auto inline-flex items-center gap-3"
            >
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-yellow-500/20 via-yellow-500/10 to-yellow-500/20 blur-sm" />
              <div className="relative flex items-center gap-3 rounded-full border border-yellow-500/20 bg-black/50 px-6 py-3 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="absolute -inset-1 animate-pulse rounded-full bg-yellow-500/20" />
                    <Clock className="relative h-5 w-5 text-yellow-500" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-medium text-white">
                      Only
                    </span>
                    <span className="text-gradient text-base font-bold">
                      10 Spots
                    </span>
                    <span className="text-base font-medium text-white">
                      Available
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <Button
              data-cal
              data-cal-link="vitalijus/strategy"
              data-cal-config='{"layout":"month_view"}'
              size="lg"
              onClick={() => trackCTAClick("contact")}
              className="group bg-gradient-gold hover:shadow-primary/20 relative mx-auto h-14 cursor-pointer overflow-hidden rounded-full px-8 text-black transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <span className="relative z-10 flex cursor-pointer items-center text-base font-semibold">
                Book Your Free AI Strategy Call
                <ArrowRight className="ml-2 h-5 w-5 cursor-pointer transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 z-0 cursor-pointer bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:250%_100%] transition-transform duration-300 group-hover:translate-x-full" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
