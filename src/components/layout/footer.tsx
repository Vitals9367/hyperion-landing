import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black py-12 text-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center">
              <span className="text-xl font-bold text-white">Hyperion</span>
              <span className="ml-1 rounded bg-emerald-500 px-1.5 py-0.5 text-xs font-medium text-white">
                AI
              </span>
            </div>
            <p className="mt-3 text-xs text-gray-400">
              Intelligent automation solutions for forward-thinking businesses.
            </p>
            <div className="mt-4 flex gap-3">
              <motion.a
                href="#"
                className="text-gray-400 transition-colors duration-300 hover:text-emerald-400"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 transition-colors duration-300 hover:text-emerald-400"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 transition-colors duration-300 hover:text-emerald-400"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="h-4 w-4" />
              </motion.a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-medium">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#about"
                  className="group flex items-center text-gray-400 transition-colors duration-300 hover:text-emerald-400"
                >
                  <ChevronRight className="mr-1 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />{" "}
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="group flex items-center text-gray-400 transition-colors duration-300 hover:text-emerald-400"
                >
                  <ChevronRight className="mr-1 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />{" "}
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="group flex items-center text-gray-400 transition-colors duration-300 hover:text-emerald-400"
                >
                  <ChevronRight className="mr-1 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />{" "}
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-medium">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="group flex items-center text-gray-400 transition-colors duration-300 hover:text-emerald-400"
                >
                  <ChevronRight className="mr-1 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />{" "}
                  Process Automation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="group flex items-center text-gray-400 transition-colors duration-300 hover:text-emerald-400"
                >
                  <ChevronRight className="mr-1 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />{" "}
                  Intelligent Analytics
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="group flex items-center text-gray-400 transition-colors duration-300 hover:text-emerald-400"
                >
                  <ChevronRight className="mr-1 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />{" "}
                  Customer Engagement
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-medium">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="group flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400 transition-colors duration-300 group-hover:text-emerald-400" />
                <span className="text-gray-400 transition-colors duration-300 group-hover:text-emerald-400">
                  hello@hyperionai.com
                </span>
              </li>
              <li className="group flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400 transition-colors duration-300 group-hover:text-emerald-400" />
                <span className="text-gray-400 transition-colors duration-300 group-hover:text-emerald-400">
                  (555) 123-4567
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Hyperion AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
