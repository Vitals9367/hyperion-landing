"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Building2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Custom Upwork icon
function UpworkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.917 2.37 5.295 5.281 5.295 2.913 0 5.283-2.378 5.283-5.295v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
    </svg>
  );
}

// Custom Fiverr icon
function FiverrIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22.004 5.838a.733.733 0 0 0-.52-.209h-3.145a.733.733 0 0 0-.52.209l-2.01 2.01a.733.733 0 0 0-.209.52v3.145c0 .195.078.382.209.52l2.01 2.01c.138.131.325.209.52.209h3.145c.195 0 .382-.078.52-.209l2.01-2.01a.733.733 0 0 0 .209-.52V8.368a.733.733 0 0 0-.209-.52l-2.01-2.01zm-7.563 0a.733.733 0 0 0-.52-.209H10.776a.733.733 0 0 0-.52.209l-2.01 2.01a.733.733 0 0 0-.209.52v3.145c0 .195.078.382.209.52l2.01 2.01c.138.131.325.209.52.209h3.145c.195 0 .382-.078.52-.209l2.01-2.01a.733.733 0 0 0 .209-.52V8.368a.733.733 0 0 0-.209-.52l-2.01-2.01zm-7.563 0a.733.733 0 0 0-.52-.209H3.213a.733.733 0 0 0-.52.209L.683 7.848a.733.733 0 0 0-.209.52v3.145c0 .195.078.382.209.52l2.01 2.01c.138.131.325.209.52.209h3.145c.195 0 .382-.078.52-.209l2.01-2.01a.733.733 0 0 0 .209-.52V8.368a.733.733 0 0 0-.209-.52l-2.01-2.01z" />
    </svg>
  );
}

type SocialLink = {
  name: string;
  href: string;
  icon?: LucideIcon | typeof UpworkIcon | typeof FiverrIcon;
  isText?: boolean;
};

const navigation = {
  main: [
    { name: "What We're Solving", href: "/#challenges" },
    { name: "Solutions", href: "/services" },
    { name: "Free Strategy Call", href: "/#contact" },
    // { name: "Resources", href: "/resources" },
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
    // {
    //   name: "Upwork",
    //   href: "https://www.upwork.com/freelancers/~015382fec7ca204b13",
    //   icon: UpworkIcon,
    // },
    // {
    //   name: "Fiverr",
    //   href: "https://www.fiverr.com/sellers/vitalijus_",
    //   icon: FiverrIcon,
    // },
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
          className="grid gap-12 lg:grid-cols-4"
        >
          {/* Brand */}
          <div>
            <Link href="/" className="-mt-12 block h-32 w-32">
              <img
                src="/color-logo.svg"
                alt="Hyperion Logo"
                className="h-full w-full"
              />
            </Link>
            <p className="mt-4 text-base font-medium text-zinc-400">
              Powering your business success with intelligent AI
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white">Navigation</h3>
            <ul role="list" className="mt-4 space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                    style={{ scrollBehavior: "auto" }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:vitalijus@hyperionaiagency.com"
                className="group flex items-center gap-3 text-zinc-400 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 text-yellow-500" />
                <span>vitalijus@hyperionaiagency.com</span>
              </a>
              <a
                href="tel:+37062876550"
                className="group flex items-center gap-3 text-zinc-400 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 text-yellow-500" />
                <span>+370 628 76550</span>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Chemijos+g.+27C-62+Kaunas+LT-51332"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-zinc-400 transition-colors hover:text-white"
              >
                <MapPin className="h-4 w-4 text-yellow-500" />
                <span>Chemijos g. 27C-62, LT-51332 Kaunas</span>
              </a>
              <a
                href="https://rekvizitai.vz.lt/en/company/hyperion_ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-zinc-400 transition-colors hover:text-white"
              >
                <Building2 className="h-4 w-4 text-yellow-500" />
                <span>Company code: 307011251</span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold text-white">Connect</h3>
            <ul role="list" className="mt-4 space-y-3">
              {navigation.social.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <item.icon className="h-4 w-4" aria-hidden="true" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 border-t border-white/10 pt-8"
        >
          <p className="text-center text-sm text-zinc-400">
            &copy; {new Date().getFullYear()} Hyperion AI MB. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
