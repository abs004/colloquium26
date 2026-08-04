"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { event } from "@/lib/data";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/schedule", label: "Schedule" },
  { href: "/#speakers", label: "Speakers" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-display text-sm font-bold tracking-tight text-foreground">
              COLLOQUIUM<span className="text-accent">26</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-mono text-[11px] tracking-widest uppercase text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={event.registerUrl}
              className="hidden md:inline-flex items-center rounded-full bg-accent px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-widest text-white transition-transform hover:scale-105"
            >
              Register
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden text-foreground"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-white/10 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col gap-1 py-4">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-mono text-xs tracking-widest uppercase text-muted py-2.5 hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={event.registerUrl}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 font-mono text-xs font-medium uppercase tracking-widest text-white"
              >
                Register
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}