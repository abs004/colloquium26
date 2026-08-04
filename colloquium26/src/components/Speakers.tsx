"use client";

import Image from "next/image";
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
    <section id="speakers" className="relative isolate px-6 py-20 sm:py-28">
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
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
          {speakers.map((speaker, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              transition={{ delay: (i % 3) * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all hover:-translate-y-1 hover:border-white/20"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                {speaker.image ? (
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    sizes="(min-width: 640px) 33vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: speaker.imagePosition || "center" }}
                  />
                ) : (
                  <div
                    className="flex h-full w-full items-center justify-center font-display text-2xl font-bold text-background sm:text-3xl"
                    style={{ background: accentMap[speaker.accent] }}
                  >
                    {speaker.initials}
                  </div>
                )}
              </div>
              <div className="border-t border-white/10 p-3.5 sm:p-4">
                <h3 className="font-display text-sm font-bold leading-tight sm:text-base">
                  {speaker.name}
                </h3>
                <p className="mt-1 text-xs text-muted">{speaker.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}