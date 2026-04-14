"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark/95 backdrop-blur-md border-b border-border-dark"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#" className="font-heading font-bold text-xl text-white">
          OPTIMA
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-text-secondary hover:text-white transition text-sm font-medium border-b-2 border-transparent hover:border-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="[YOUR_CALENDLY_URL]"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants(), "bg-primary text-white btn-glow hidden sm:inline-flex")}
          >
            Book a Demo
          </a>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-dark border-b border-border-dark py-4 px-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-center text-text-secondary hover:text-white transition"
            >
              {link.label}
            </a>
          ))}
          <a
            href="[YOUR_CALENDLY_URL]"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants(), "w-full bg-primary text-white btn-glow mt-4")}
          >
            Book a Demo
          </a>
        </div>
      )}
    </nav>
  );
}
