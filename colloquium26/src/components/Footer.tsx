"use client";

import { ArrowUp } from "lucide-react";
import { socials } from "@/lib/data";
import { FacebookIcon, InstagramIcon, XIcon, LinkedinIcon } from "./icons/SocialIcons";



export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mx-auto mb-12 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted transition-colors hover:text-foreground"
        >
          <ArrowUp size={14} /> Back to top
        </button>

        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <span className="font-display text-lg font-bold">
              COLLOQUIUM<span className="text-accent">26</span>
            </span>
            <p className="mt-4 max-w-md text-sm text-muted">
              COLLOQUIUM&apos;26 — For Professionals. By Professionals. Where ideas spark innovation, conversations
              create opportunities, and the future of technology comes to life.
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted">Connect with us</p>
            <div className="mt-4 flex items-center gap-4">
              <a href={socials.facebook} aria-label="Facebook" className="text-muted hover:text-foreground">
                <FacebookIcon size={16} />
              </a>
              <a href={socials.instagram} aria-label="Instagram" className="text-muted hover:text-foreground">
                <InstagramIcon size={16} />
              </a>
              <a href={socials.twitter} aria-label="X" className="text-muted hover:text-foreground">
                <XIcon size={16} />
              </a>
              <a href={socials.linkedin} aria-label="LinkedIn" className="text-muted hover:text-foreground">
                <LinkedinIcon size={16} />
              </a>
            </div>
          </div>
        </div>

        <p className="mt-14 border-t border-white/10 pt-6 text-xs text-muted text-center">
          Copyright © 2026 IEEE Computer Society Kerala Chapter. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
