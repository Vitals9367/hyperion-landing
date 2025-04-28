"use client";

import { motion } from "framer-motion";
import { Brain, Zap, Shield, Users } from "lucide-react";

const features = [
  {
    name: "Advanced AI",
    description:
      "State-of-the-art machine learning models that understand and adapt to your business needs.",
    icon: Brain,
  },
  {
    name: "Lightning Fast",
    description:
      "Optimized performance that delivers results in milliseconds, not minutes.",
    icon: Zap,
  },
  {
    name: "Enterprise Security",
    description:
      "Bank-grade encryption and security protocols to protect your data.",
    icon: Shield,
  },
  {
    name: "Team Collaboration",
    description:
      "Built-in tools for seamless team collaboration and workflow management.",
    icon: Users,
  },
];

export function AboutSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-24 lg:py-32">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,215,0,0.05)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] bg-[size:32px_32px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(218,165,32,0.1),rgba(0,0,0,0))]" />
      </div>

      <div className="relative z-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-gold/[0.08] ring-primary/10 mb-8 inline-flex items-center rounded-full px-6 py-2.5 shadow-sm ring-1">
              <span className="bg-gradient-gold bg-clip-text text-sm font-semibold text-transparent">
                About Hyperion AI
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Transforming Business Through AI
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              We're on a mission to democratize AI technology and make it
              accessible to businesses of all sizes. Our platform combines
              cutting-edge artificial intelligence with intuitive design to help
              you automate, optimize, and innovate.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <dt className="flex items-center gap-x-3 text-base leading-7 font-semibold text-white">
                  <feature.icon
                    className="h-5 w-5 flex-none text-yellow-500"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-zinc-400">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-500 to-green-500 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
}
