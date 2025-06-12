"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

interface ScrollButtonProps {
  href: string;
  text: string;
}

export function ScrollButton({ href, text }: ScrollButtonProps) {
  return (
    <Link
      href={href}
      className="group inline-flex cursor-pointer flex-col items-center gap-4 transition-colors"
      onClick={(e) => {
        e.preventDefault();
        document
          .getElementById(href.slice(1))
          ?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <span className="text-gradient cursor-pointer text-lg font-semibold">
        {text}
      </span>
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="relative cursor-pointer"
      >
        <div className="bg-gradient-gold absolute inset-0 cursor-pointer rounded-full opacity-20 blur-xl" />
        <div className="relative cursor-pointer rounded-full border border-zinc-800 bg-black/50 p-4 backdrop-blur-sm">
          <ArrowDown
            className="text-gradient h-8 w-8 cursor-pointer"
            color="white"
          />
        </div>
      </motion.div>
    </Link>
  );
}
