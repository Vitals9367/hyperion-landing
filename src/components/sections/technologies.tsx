import { motion } from "framer-motion";
import { Code, Layers } from "lucide-react";

export function TechnologiesSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-xl font-medium text-gray-900">
            Technologies We Work With
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <motion.div
            className="flex flex-col items-center"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm transition-shadow hover:shadow-md">
              <Code className="h-8 w-8 text-emerald-500" />
            </div>
            <span className="text-sm font-medium text-gray-700">
              Machine Learning
            </span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm transition-shadow hover:shadow-md">
              <Layers className="h-8 w-8 text-emerald-500" />
            </div>
            <span className="text-sm font-medium text-gray-700">
              Deep Learning
            </span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm transition-shadow hover:shadow-md">
              <svg
                className="h-8 w-8 text-emerald-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-700">
              Natural Language Processing
            </span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm transition-shadow hover:shadow-md">
              <svg
                className="h-8 w-8 text-emerald-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-700">
              Computer Vision
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
