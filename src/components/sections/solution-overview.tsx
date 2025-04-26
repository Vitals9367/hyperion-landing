"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Bot, Gauge, LineChart, Settings } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Automation",
    description:
      "Smart systems that learn and adapt to your agency's unique workflow.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description:
      "Real-time analytics and optimization to keep your operations at peak efficiency.",
  },
  {
    icon: LineChart,
    title: "Growth Metrics",
    description:
      "Comprehensive tracking of key performance indicators and growth metrics.",
  },
  {
    icon: Settings,
    title: "Custom Integration",
    description:
      "Seamless integration with your existing tools and workflow systems.",
  },
];

export default function SolutionOverviewSection() {
  return (
    <section className="relative w-full overflow-hidden py-24 lg:py-32">
      {/* Diagonal gradient lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="from-primary/50 via-primary/5 absolute top-0 left-0 h-[1000px] w-[2px] -translate-x-1/2 rotate-45 bg-gradient-to-b to-transparent" />
        <div className="from-secondary/50 via-secondary/5 absolute top-0 right-1/4 h-[800px] w-[2px] translate-x-1/2 rotate-45 bg-gradient-to-b to-transparent" />
        <div className="from-primary/30 via-primary/5 absolute top-1/4 right-0 h-[600px] w-[2px] translate-x-1/2 rotate-45 bg-gradient-to-b to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="font-display text-foreground text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              The{" "}
              <span className="from-primary to-primary/50 bg-gradient-to-r bg-clip-text text-transparent">
                Future
              </span>{" "}
              of Agency Operations
            </h2>
            <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg">
              Streamline your workflow, automate repetitive tasks, and focus on
              what matters most - growing your agency.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="mt-24 grid gap-8 lg:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div
                  className={`hover:bg-primary/5 relative flex items-start gap-6 rounded-2xl p-8 transition-colors duration-300 ${
                    index % 2 === 0 ? "lg:translate-y-12" : ""
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${
                      index % 2 === 0
                        ? "from-primary/20 to-secondary/20"
                        : "from-secondary/20 to-primary/20"
                    }`}
                  >
                    <feature.icon className="text-primary h-7 w-7" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-foreground flex items-center gap-2 text-xl font-semibold">
                      {feature.title}
                      <ArrowUpRight className="h-5 w-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </h3>
                    <p className="text-muted-foreground mt-2">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover gradient border */}
                  <div
                    className="from-primary/20 to-secondary/20 absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ padding: "1px" }}
                  >
                    <div className="bg-background h-full w-full rounded-2xl" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="from-primary/10 via-background to-secondary/10 mt-32 grid gap-8 rounded-2xl bg-gradient-to-br p-8 md:grid-cols-3"
          >
            {[
              { value: "300%", label: "Average ROI" },
              { value: "85%", label: "Time Saved" },
              { value: "24/7", label: "Automation Uptime" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-primary text-4xl font-bold">
                  {stat.value}
                </div>
                <div className="text-muted-foreground mt-2 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
