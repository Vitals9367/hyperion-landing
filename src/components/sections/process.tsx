import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { SectionProps } from "@/types";

export function ProcessSection({ isVisible }: SectionProps) {
  return (
    <section
      className="relative bg-black py-20 text-white md:py-24"
      id="process"
    >
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="white"
              strokeWidth="1"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-4 inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-400">
            Our Process
          </div>
          <h2 className="text-2xl font-bold md:text-3xl">
            How We Transform Your Business
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-gray-400">
            Our proven methodology for implementing AI solutions that deliver
            real results
          </p>
        </motion.div>

        <div className="space-y-16 md:grid md:grid-cols-3 md:gap-12 md:space-y-0">
          {isVisible && (
            <>
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="mb-6 flex items-center justify-center">
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
                    <span className="text-2xl font-bold text-emerald-400">
                      1
                    </span>
                    <motion.div
                      className="absolute -inset-1 rounded-full border border-emerald-500/30"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                    ></motion.div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="mb-3 text-xl font-medium">Discovery</h3>
                  <p className="text-sm text-gray-400">
                    We analyze your business processes, identify automation
                    opportunities, and define clear objectives.
                  </p>
                </div>
                <motion.div
                  className="absolute top-8 left-full hidden h-0.5 w-full bg-gradient-to-r from-emerald-500/50 to-transparent md:block"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                ></motion.div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="mb-6 flex items-center justify-center">
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
                    <span className="text-2xl font-bold text-emerald-400">
                      2
                    </span>
                    <motion.div
                      className="absolute -inset-1 rounded-full border border-emerald-500/30"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        delay: 0.7,
                      }}
                    ></motion.div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="mb-3 text-xl font-medium">Development</h3>
                  <p className="text-sm text-gray-400">
                    Our team builds custom AI solutions tailored to your
                    specific business needs and integrates them seamlessly.
                  </p>
                </div>
                <motion.div
                  className="absolute top-8 left-full hidden h-0.5 w-full bg-gradient-to-r from-emerald-500/50 to-transparent md:block"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                ></motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <div className="mb-6 flex items-center justify-center">
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
                    <span className="text-2xl font-bold text-emerald-400">
                      3
                    </span>
                    <motion.div
                      className="absolute -inset-1 rounded-full border border-emerald-500/30"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        delay: 1.4,
                      }}
                    ></motion.div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="mb-3 text-xl font-medium">Optimization</h3>
                  <p className="text-sm text-gray-400">
                    We continuously monitor, refine, and enhance your AI
                    solutions to maximize ROI and business impact.
                  </p>
                </div>
              </motion.div>
            </>
          )}
        </div>

        <div className="mt-16 text-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="h-12 rounded-full bg-emerald-500 px-6 py-2 text-sm transition-all duration-300 hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/20">
              Start Your AI Journey
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
