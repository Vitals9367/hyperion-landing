"use client";

import { motion } from "framer-motion";

export function VSLSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="my-32 text-center"
    >
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        See How We <span className="text-gradient">Transform</span> Businesses
      </h2>
      <div className="mx-auto mt-16 aspect-video w-full max-w-6xl overflow-hidden rounded-2xl border border-zinc-800 bg-black/50 backdrop-blur-sm">
        <div className="relative h-full w-full">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-gradient-gold rounded-full p-6">
              <svg
                className="h-16 w-16 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
