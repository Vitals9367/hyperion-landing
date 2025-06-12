"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ChevronRight,
  Zap,
  Rocket,
  Brain,
  Shield,
  Code,
  BarChart,
  CheckCircle2,
  AlertTriangle,
  MessageSquare,
  Users,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { InteractiveGrid } from "@/components/ui/interactive-grid";
import { GridPattern, GradientOverlay } from "@/components/ui/grid-pattern";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import Image from "next/image";
import { useTrackCTA } from "@/hooks/use-track-cta";

const services = [
  {
    id: "prometheus",
    name: "Prometheus",
    tagline: "Your AI Lead Generation Agent",
    description:
      "A dedicated AI researcher that works 24/7 to find and qualify your ideal prospects, delivering them directly to your CRM.",
    responsibilities: [
      "Research and identify ideal prospects",
      "Qualify leads based on custom criteria",
      "Deliver qualified leads to your CRM",
      "Track and optimize lead quality",
    ],
    icon: AlertTriangle,
    avatar: "/agents/prometheus.png",
    gradient: "from-yellow-500 to-amber-500",
    cta: "Learn More",
    href: "/services/prometheus",
  },
  {
    id: "automate",
    name: "Hermes",
    tagline: "Your AI Sales & Communication Agent",
    description:
      "Your tireless sales and communication specialist that handles all customer interactions, from prospecting to appointment scheduling.",
    responsibilities: [
      "Handle outbound prospecting",
      "Manage inbound inquiries",
      "Schedule appointments automatically",
      "Optimize response strategies",
    ],
    icon: MessageSquare,
    avatar: "/agents/hermes.png",
    gradient: "from-blue-500 to-indigo-500",
    cta: "Learn More",
    href: "/services/hermes",
  },
  {
    id: "secure",
    name: "Hestia",
    tagline: "Your AI Customer Success Agent",
    description:
      "A dedicated customer success manager that guides prospects through your sales funnel and ensures a seamless customer journey.",
    responsibilities: [
      "Guide prospects through sales funnel",
      "Automate client onboarding",
      "Monitor customer experience",
      "Track customer journey progress",
    ],
    icon: Users,
    avatar: "/agents/hestia.png",
    gradient: "from-green-500 to-emerald-500",
    cta: "Learn More",
    href: "/services/hestia",
  },
];

const solutions = [
  {
    title: "Custom Development",
    description:
      "Tailored AI solutions built specifically for your business needs",
    icon: Code,
  },
  {
    title: "Performance Analytics",
    description: "Comprehensive insights into your AI system's performance",
    icon: BarChart,
  },
  {
    title: "Rapid Deployment",
    description:
      "Quick implementation with minimal disruption to your operations",
    icon: Rocket,
  },
];

export default function ServicesPage() {
  const { trackCTAClick } = useTrackCTA();

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
                    <span className="text-white">
                      AI Automation Solutions to
                    </span>{" "}
                    <span className="text-gradient">
                      Accelerate Your Business Growth
                    </span>
                    <div className="animate-shimmer absolute -inset-1 hidden rounded-xl bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:200%_100%] lg:block" />
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mx-auto mt-8 max-w-3xl text-center text-xl text-zinc-400 sm:text-2xl"
                >
                  Pick the perfect AI tools for your needs or deploy our
                  full-stack system to scale faster—without expanding your team
                </motion.p>
              </motion.div>
            </div>
          </section>

          {/* Services Section */}
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/70" />
            <div className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8 lg:pb-32">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                  <div
                    key={service.id}
                    className="group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-800 bg-black/50 backdrop-blur-sm transition-all duration-300 hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(234,179,8,0.1)]"
                  >
                    <div className="relative h-80 w-full overflow-hidden">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-20`}
                      />
                      <div className="relative h-full w-full overflow-hidden">
                        <img
                          src={service.avatar}
                          alt={service.name}
                          className="relative h-full w-full origin-top object-cover object-top transition-all duration-500 group-hover:scale-[1.2] group-hover:brightness-110 before:absolute before:inset-0 before:translate-x-[-100%] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-transform before:duration-1000 before:group-hover:translate-x-[100%]"
                        />
                      </div>
                      <div className="absolute inset-0 -bottom-8 bg-gradient-to-b from-black/0 via-black/70 via-[60%] to-black to-[90%] transition-opacity duration-300 group-hover:opacity-90" />
                      <div className="absolute right-0 bottom-0 left-0 p-6">
                        <h3 className="text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-yellow-500">
                          {service.name}
                        </h3>
                        <p className="text-gradient text-lg font-medium">
                          {service.tagline}
                        </p>
                      </div>
                    </div>
                    <div className="relative p-6">
                      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
                      <div className="relative">
                        <p className="text-lg text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                          {service.description}
                        </p>
                        <ul className="mt-6 space-y-3">
                          {service.responsibilities.map(
                            (responsibility: string, idx: number) => (
                              <li
                                key={idx}
                                className="flex items-center gap-3 text-zinc-300 transition-colors duration-300 group-hover:text-white"
                              >
                                <div className="bg-gradient-gold flex h-6 w-6 flex-shrink-0 cursor-pointer items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110">
                                  <ArrowRight className="h-3 w-3 cursor-pointer text-black" />
                                </div>
                                {responsibility}
                              </li>
                            ),
                          )}
                        </ul>
                        <Link href={service.href} className="mt-8 block">
                          <Button
                            size="lg"
                            className="group w-full bg-gradient-to-r text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
                            style={{
                              backgroundImage: `linear-gradient(to right, ${service.gradient})`,
                            }}
                          >
                            <span className="relative z-10 flex items-center justify-center text-base font-semibold">
                              {service.cta}
                              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
                  Why Choose Our Services?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mt-4 text-lg text-zinc-400"
                >
                  We provide comprehensive AI solutions with guaranteed results
                  and ongoing support
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mx-auto mt-16 max-w-4xl"
              >
                <div className="grid gap-8 sm:grid-cols-2">
                  <div className="rounded-2xl bg-zinc-900/50 p-8 backdrop-blur-sm">
                    <h3 className="text-xl font-semibold text-white">
                      Tailored Solutions
                    </h3>
                    <ul className="mt-4 space-y-3">
                      <li className="flex items-start gap-3 text-zinc-400">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
                        <span>
                          AI tuning, new integrations, chatbot & voice agent
                          upgrades
                        </span>
                      </li>
                      <li className="flex items-start gap-3 text-zinc-400">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
                        <span>
                          Business process review & automation suggestions
                        </span>
                      </li>
                      <li className="flex items-start gap-3 text-zinc-400">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
                        <span>Discounts on future automations</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-zinc-900/50 p-8 backdrop-blur-sm">
                    <h3 className="text-xl font-semibold text-white">
                      Our Guarantees
                    </h3>
                    <ul className="mt-4 space-y-3">
                      <li className="flex items-start gap-3 text-zinc-400">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
                        <span>36-hour guaranteed response time</span>
                      </li>
                      <li className="flex items-start gap-3 text-zinc-400">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
                        <span>Proactive monitoring and quarterly reviews</span>
                      </li>
                      <li className="flex items-start gap-3 text-zinc-400">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
                        <span>Dedicated support team</span>
                      </li>
                    </ul>
                  </div>
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
                      Transform Your Business with{" "}
                      <span className="bg-gradient-gold bg-clip-text text-transparent">
                        AI Automation
                      </span>
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
                      Book a free strategy call to discover how our AI solutions
                      can streamline your operations, boost productivity, and
                      drive growth. Limited spots available this month.
                    </p>

                    <div className="mt-10 flex flex-col items-center justify-center gap-6">
                      <motion.button
                        data-cal
                        data-cal-link="vitalijus/strategy"
                        data-cal-config='{"layout":"month_view"}'
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => trackCTAClick("services")}
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

                    <div className="mt-12 grid gap-6 sm:grid-cols-3">
                      <div className="flex flex-col items-center gap-2 rounded-xl bg-black/20 p-4 backdrop-blur-sm">
                        <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                        <span className="text-sm text-zinc-300">
                          Free AI Strategy Assessment
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-2 rounded-xl bg-black/20 p-4 backdrop-blur-sm">
                        <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                        <span className="text-sm text-zinc-300">
                          Custom Automation Roadmap
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-2 rounded-xl bg-black/20 p-4 backdrop-blur-sm">
                        <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                        <span className="text-sm text-zinc-300">
                          Implementation Timeline
                        </span>
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
