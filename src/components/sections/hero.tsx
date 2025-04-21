import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-32 pb-20 sm:px-6 md:pt-40 md:pb-24">
      <div className="relative">
        {/* Decorative elements */}
        <div className="absolute -top-8 left-1/2 h-px w-1/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
        <div className="absolute -top-8 left-1/2 h-16 w-px -translate-x-1/2 bg-gradient-to-b from-emerald-500/20 to-transparent" />

        {/* Main content */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <h1 className="relative mx-auto max-w-4xl bg-gradient-to-b from-gray-900 to-gray-600 bg-clip-text text-center text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl">
              Transform Your Business with Intelligent Automation
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-600">
              Harness the power of AI to streamline operations, boost
              efficiency, and drive innovation. Our intelligent automation
              solutions adapt to your unique business needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 flex items-center justify-center gap-6"
          >
            <Button
              asChild
              className="h-12 rounded-full bg-black px-8 text-sm font-medium text-white transition-all hover:bg-gray-900"
            >
              <Link href="#contact">Schedule Demo</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full border-gray-200 px-8 text-sm font-medium text-gray-600 transition-all hover:bg-gray-50 hover:text-gray-900"
            >
              <Link href="#services">View Services</Link>
            </Button>
          </motion.div>

          {/* Stats */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">40%</div>
              <div className="mt-1 text-sm text-gray-600">
                Efficiency Increase
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">500+</div>
              <div className="mt-1 text-sm text-gray-600">
                Clients Worldwide
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">95%</div>
              <div className="mt-1 text-sm text-gray-600">
                Client Satisfaction
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">24/7</div>
              <div className="mt-1 text-sm text-gray-600">AI Support</div>
            </div>
          </motion.div> */}
        </div>
      </div>
    </div>
  );
}
