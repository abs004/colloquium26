"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { event } from "@/lib/data";
import DrawnLoop from "./DrawnLoop";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-x-hidden px-6 pt-28 pb-16">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-4xl text-center"
      >
        <motion.p
          variants={item}
          className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent-soft sm:text-[11px] sm:tracking-[0.3em]"
        >
          IEEE Computer Society Kerala Chapter presents
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display mt-6 text-balance text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl"
        >
          Colloquium<span className="text-accent">&apos;26</span>
        </motion.h1>

        <motion.p variants={item} className="mt-3 font-mono text-xs uppercase tracking-[0.25em] text-muted">
          {event.tagline}
        </motion.p>

        <motion.p variants={item} className="mx-auto mt-8 max-w-xl text-balance text-base text-muted">
          {event.description}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-col items-center justify-center gap-3 xs:flex-row xs:gap-4">
          <a
            href={event.registerUrl}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105 xs:w-auto"
          >
            Register Now
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="/about"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-white/30 xs:w-auto"
          >
            Learn more
          </a>
        </motion.div>

        {/* signature drawn-loop motif, echoing the poster — kept faint and
            shifted toward the heading so it doesn't sit on top of the
            paragraph text and hurt readability */}
        <motion.div
          variants={item}
          className="pointer-events-none absolute left-1/2 top-[38%] -z-10 w-[110%] max-w-3xl -translate-x-1/2 -translate-y-1/2 opacity-30 sm:w-[140%]"
        >
          <DrawnLoop className="w-full" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}