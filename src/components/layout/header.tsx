"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Services", href: "#services" },
  { name: "Posts", href: "/posts" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isPostsPage = pathname?.startsWith("/posts");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled || isPostsPage
          ? "bg-black/80 backdrop-blur-lg"
          : "bg-transparent"
      } ${isPostsPage ? "h-16" : "h-20"}`}
    >
      <nav className="container mx-auto flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className={`${isPostsPage ? "h-16 w-16" : "h-24 w-24"}`}>
          <img
            src="/color-logo.svg"
            alt="Hyperion Logo"
            className="h-full w-full"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-zinc-200 transition-colors hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <Link href="#contact">
            <Button
              size="sm"
              className="bg-gradient-gold text-black transition-all duration-300 hover:shadow-xl"
            >
              Reach Out
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="rounded-lg p-2 text-zinc-200 hover:bg-white/10 hover:text-white md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="border-b border-zinc-800/50 bg-black/95 backdrop-blur-lg md:hidden"
          >
            <div className="container mx-auto space-y-4 px-4 py-6 sm:px-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-sm font-medium text-zinc-200 transition-colors hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button
                  size="sm"
                  className="bg-gradient-gold w-full text-black transition-all duration-300 hover:shadow-xl"
                >
                  Reach Out
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
