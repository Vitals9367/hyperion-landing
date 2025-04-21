import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

const navigation = {
  main: [
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ],
  social: [
    {
      name: "Twitter",
      href: "https://x.com/alsauskas_v",
      icon: Twitter,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/hyperion-ai-agency",
      icon: Linkedin,
    },
  ],
} as const;

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.href} className="pb-6">
              <Link
                href={item.href}
                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{item.name}</span>
                <Icon className="h-6 w-6" aria-hidden="true" />
              </Link>
            );
          })}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; {new Date().getFullYear()} Hyperion. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
