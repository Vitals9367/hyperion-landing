import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navigationLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-10">
          <Link href="/" className="group flex items-center">
            <span className="text-xl font-bold text-black transition-colors duration-300 group-hover:text-emerald-500">
              Hyperion
            </span>
            <span className="ml-1 rounded bg-emerald-500 px-1.5 py-0.5 text-xs font-medium text-white transition-colors duration-300 group-hover:bg-emerald-600">
              AI
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm text-gray-600 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-emerald-500 after:transition-all after:duration-300 hover:text-emerald-500 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Button
            asChild
            className="hidden h-9 rounded-full bg-emerald-500 px-5 py-0 text-xs font-medium transition-all duration-300 hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/20 md:flex"
          >
            <Link href="#contact">Book Demo</Link>
          </Button>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button className="h-8 w-8 p-0 md:hidden">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px]">
              <div className="mt-8 flex flex-col gap-6">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-base transition-colors duration-300 hover:text-emerald-500"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button
                  asChild
                  className="mt-4 w-full rounded-full bg-emerald-500 text-sm transition-all duration-300 hover:bg-emerald-600"
                >
                  <Link href="#contact">Book Demo</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
