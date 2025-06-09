"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { getCalApi } from "@calcom/embed-react";

const navigation = [
  { name: "Explore Our Solutions", href: "/#solutions" },
  {
    name: "Book Your Free Strategy Call",
    href: "#",
    isButton: true,
    isCal: true,
  },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isPostsPage = pathname?.startsWith("/posts");

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "strategy" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  const handleNavigationClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const id = href.replace(/^\/?#/, ""); // Remove leading /# or # from the href
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`absolute top-0 left-0 z-50 w-full ${isPostsPage ? "h-16" : "h-20"}`}
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
            {navigation.map((item) =>
              item.isButton ? (
                <Button
                  key={item.name}
                  size="sm"
                  data-cal={item.isCal ? "" : undefined}
                  data-cal-link={item.isCal ? "vitalijus/strategy" : undefined}
                  data-cal-config={
                    item.isCal ? '{"layout":"month_view"}' : undefined
                  }
                  className="group bg-gradient-gold hover:shadow-primary/20 relative h-10 cursor-pointer overflow-hidden rounded-full px-6 text-black transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <span className="relative z-10 flex cursor-pointer items-center text-sm font-semibold">
                    {item.name}
                    <ArrowRight className="ml-2 h-4 w-4 cursor-pointer transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 z-0 cursor-pointer bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:250%_100%] transition-transform duration-300 group-hover:translate-x-full" />
                </Button>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavigationClick(e, item.href)}
                  className="cursor-pointer text-sm font-medium text-zinc-200 transition-colors hover:text-white"
                >
                  {item.name}
                </Link>
              ),
            )}
          </div>
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
            className="absolute right-0 left-0 border-b border-zinc-800/50 bg-black/95 backdrop-blur-lg md:hidden"
          >
            <div className="container mx-auto space-y-4 px-4 py-6 sm:px-6">
              {navigation.map((item) =>
                item.isButton ? (
                  <Button
                    key={item.name}
                    size="sm"
                    data-cal={item.isCal ? "" : undefined}
                    data-cal-link={
                      item.isCal ? "vitalijus/strategy" : undefined
                    }
                    data-cal-config={
                      item.isCal ? '{"layout":"month_view"}' : undefined
                    }
                    className="group bg-gradient-gold hover:shadow-primary/20 relative h-10 w-full cursor-pointer overflow-hidden rounded-full px-6 text-black transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <span className="relative z-10 flex cursor-pointer items-center justify-center text-sm font-semibold">
                      {item.name}
                      <ArrowRight className="ml-2 h-4 w-4 cursor-pointer transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 z-0 cursor-pointer bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:250%_100%] transition-transform duration-300 group-hover:translate-x-full" />
                  </Button>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavigationClick(e, item.href)}
                    className="block cursor-pointer text-sm font-medium text-zinc-200 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                ),
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
