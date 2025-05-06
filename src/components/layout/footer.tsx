"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Custom Upwork icon
function UpworkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.917 2.37 5.295 5.281 5.295 2.913 0 5.283-2.378 5.283-5.295v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
    </svg>
  );
}

type SocialLink = {
  name: string;
  href: string;
  icon?: LucideIcon | typeof UpworkIcon;
  isText?: boolean;
};

const navigation = {
  main: [
    { name: "Services", href: "#services" },
    { name: "Posts", href: "/posts" },
  ],
  social: [
    {
      name: "Twitter",
      href: "https://x.com/alsauskas_v",
      icon: Twitter,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/vitalijusalsauskas/",
      icon: Linkedin,
    },
    {
      name: "Upwork",
      href: "https://www.upwork.com/freelancers/~015382fec7ca204b13",
      icon: UpworkIcon,
    },
    {
      name: "Fiverr",
      href: "https://www.fiverr.com/sellers/vitalijus_",
      isText: true,
    },
  ] satisfies SocialLink[],
};

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-black py-16 lg:py-24">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.8))]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="xl:grid xl:grid-cols-3 xl:gap-8"
        >
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="block h-24 w-24">
              <img
                src="/color-logo.svg"
                alt="Hyperion Logo"
                className="h-full w-full"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-zinc-400">
              We're not another agency. We're your agency's invisible engine.
            </p>
            <div className="flex items-center space-x-4">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-zinc-400 transition-colors hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.isText ? (
                    <span className="text-sm font-medium">{item.name}</span>
                  ) : (
                    <>
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-5 w-5" aria-hidden="true" />
                    </>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold text-white">Navigation</h3>
              <ul role="list" className="mt-4 space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-zinc-400 transition-colors hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/#contact"
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Legal</h3>
              <ul role="list" className="mt-4 space-y-3">
                <li>
                  <Link
                    href="/privacy"
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 border-t border-white/10 pt-8"
        >
          <p className="text-center text-xs text-zinc-400">
            &copy; {new Date().getFullYear()} Hyperion Systems. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
