"use client";

import { motion } from "framer-motion";
import { speakers, type Speaker } from "@/lib/data";

const accentMap: Record<Speaker["accent"], string> = {
  amber: "var(--color-shape-amber)",
  coral: "var(--color-shape-coral)",
  emerald: "var(--color-shape-emerald)",
  blue: "var(--color-accent)",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Speakers() {
  return (
    <section id="speakers" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="max-w-xl"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent-soft">
            Our Speakers
          </p>
          <h2 className="font-display mt-4 text-4xl font-bold sm:text-5xl">
            Learn from the best
          </h2>
          <p className="mt-4 text-muted">
            Renowned experts and academics shaping the future of technology.
            Full speaker lineup for Colloquium&apos;26 coming soon.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3">
          {speakers.map((speaker, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              transition={{ delay: (i % 3) * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:-translate-y-1 hover:border-white/20"
            >
              <div
                className="absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-30"
                style={{ background: accentMap[speaker.accent] }}
              />
              <div
                className="relative flex h-14 w-14 items-center justify-center rounded-full font-display text-sm font-bold text-background"
                style={{ background: accentMap[speaker.accent] }}
              >
                {speaker.initials}
              </div>
              <h3 className="relative mt-4 font-display text-base font-bold">
                {speaker.name}
              </h3>
              <p className="relative mt-1 text-xs text-muted">{speaker.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
