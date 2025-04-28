"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Twitter, Github } from "lucide-react";

export function FounderSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-24 lg:py-32">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,215,0,0.05)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] bg-[size:32px_32px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(218,165,32,0.1),rgba(0,0,0,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(30,86,49,0.15),rgba(0,0,0,0))]" />
      </div>

      <div className="relative z-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div>
              <div className="bg-gradient-gold/[0.08] ring-primary/10 mb-8 inline-flex items-center rounded-full px-6 py-2.5 shadow-sm ring-1">
                <span className="bg-gradient-gold bg-clip-text text-sm font-semibold text-transparent">
                  Meet the Founder
                </span>
              </div>
              <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Vitalijus Majorovas
              </h2>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
                With over 15 years of experience in AI and automation, I've
                helped hundreds of businesses transform their operations through
                intelligent technology solutions.
              </p>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-400">
                After leading AI initiatives at several Fortune 500 companies, I
                founded Hyperion AI with a mission to make advanced automation
                accessible to businesses of all sizes.
              </p>

              <motion.blockquote
                className="mt-8 border-l-2 border-yellow-500 pl-4 text-zinc-400 italic"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                "I believe that AI should work for people, not the other way
                around. Our goal is to create solutions that amplify human
                potential and create more meaningful work."
              </motion.blockquote>

              <div className="mt-8 flex gap-4">
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 transition-colors duration-300 hover:text-yellow-500"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 transition-colors duration-300 hover:text-yellow-500"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Twitter className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 transition-colors duration-300 hover:text-yellow-500"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="h-5 w-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.div
              className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-yellow-500 to-green-500 opacity-20 blur"
              animate={{ opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            ></motion.div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-zinc-800">
              <Image
                src="/images/founder.jpg"
                alt="Vitalijus Majorovas - Founder of Hyperion AI"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
