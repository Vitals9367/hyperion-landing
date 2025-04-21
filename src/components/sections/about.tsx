import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react";
import type { SectionProps } from "@/types";

export function AboutSection({ isVisible }: SectionProps) {
  return (
    <section
      className="relative overflow-hidden bg-black py-20 text-white md:py-24"
      id="about"
    >
      <div className="absolute top-0 right-0 -mr-32 h-full w-1/3 rounded-full bg-emerald-500/10 blur-3xl"></div>
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-4 inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-400">
              Meet the Founder
            </div>
            <h2 className="mb-6 text-2xl font-bold md:text-3xl">
              Vitalijus Majorovas
            </h2>
            <p className="mb-6 text-gray-300">
              With over 15 years of experience in AI and automation, Vitalijus
              has helped hundreds of businesses transform their operations
              through intelligent technology solutions.
            </p>
            <p className="mb-6 text-gray-300">
              After leading AI initiatives at several Fortune 500 companies,
              Vitalijus founded Hyperion AI with a mission to make advanced
              automation accessible to businesses of all sizes.
            </p>
            <motion.blockquote
              className="mb-6 border-l-2 border-emerald-500 pl-4 text-gray-400 italic"
              initial={{ opacity: 0, x: -10 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              "I believe that AI should work for people, not the other way
              around. Our goal is to create solutions that amplify human
              potential and create more meaningful work."
            </motion.blockquote>
            <div className="flex gap-4">
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors duration-300 hover:text-emerald-400"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors duration-300 hover:text-emerald-400"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors duration-300 hover:text-emerald-400"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.div
              className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-emerald-500 to-emerald-700 opacity-20 blur"
              animate={{ opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            ></motion.div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-gray-800">
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
