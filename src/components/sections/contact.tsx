"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Calendar,
  ArrowRight,
  CheckCircle,
  Clock,
} from "lucide-react";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "strategy" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden bg-black py-24 lg:py-48 lg:pb-56"
      id="contact"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(218,165,32,0.1),rgba(0,0,0,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(30,86,49,0.15),rgba(0,0,0,0))]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,215,0,0.05)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] bg-[size:32px_32px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="border-primary/10 bg-primary/5 mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-sm">
              <Clock className="h-4 w-4 text-yellow-500" />
              <span className="text-gradient text-base font-medium">
                Only 10 Spots Available This Month!
              </span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Eliminate Your <span className="text-gradient">Bottlenecks</span>{" "}
              with AI
            </h2>
            <p className="mx-auto mt-6 text-lg text-zinc-400">
              Discover how a personalized AI strategy can revolutionize your
              efficiency and drive sustainable growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12"
          >
            <ul className="mt-6 space-y-3">
              {[
                "Automate tedious tasks",
                "Free up hours lost to manual processes",
                "Gain a competitive edge with personalized AI strategies",
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-center gap-3 pl-32 text-zinc-300 transition-colors duration-300 group-hover:text-white"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <motion.div
                    className="bg-gradient-gold flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle className="h-3 w-3 text-black" />
                  </motion.div>
                  <span className="whitespace-nowrap">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex flex-col items-center gap-4"
          >
            <Button
              data-cal
              data-cal-link="vitalijus/strategy"
              data-cal-config='{"layout":"month_view"}'
              size="lg"
              className="group bg-gradient-gold hover:shadow-primary/20 relative h-14 cursor-pointer overflow-hidden rounded-full px-8 text-black transition-all duration-300 hover:scale-105 hover:shadow-xl"
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
