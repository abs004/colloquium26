"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Calendar, Clock } from "lucide-react";
import { event } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function Venue() {
  return (
    <section className="relative isolate px-6 py-20 sm:py-28">
      {/* subtle mask to reduce background shape interference on mobile */}
      <div 
        className="pointer-events-none absolute inset-0 -z-10 bg-background/80 backdrop-blur-[4px] md:hidden"
        style={{
          maskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
        }}
      />

      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2 md:items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent-soft text-balance">
            Our Venue
          </p>
          <h2 className="font-display mt-4 text-3xl font-bold text-balance sm:text-4xl md:text-5xl">
            {event.venue}
          </h2>
          <p className="mt-5 max-w-md text-balance text-muted">{event.venueBlurb}</p>

          <dl className="mt-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 text-accent-soft">
                <Calendar size={16} />
              </span>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-widest text-muted">Date</dt>
                <dd className="text-sm text-balance">{event.date}</dd>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 text-accent-soft">
                <Clock size={16} />
              </span>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-widest text-muted">Time</dt>
                <dd className="text-sm text-balance">{event.time}</dd>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 text-accent-soft">
                <MapPin size={16} />
              </span>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-widest text-muted">Venue</dt>
                <dd className="text-sm text-balance">{event.venue}</dd>
              </div>
            </div>
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10"
        >
          <Image
            src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=80"
            alt="Conference venue"
            fill
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(180deg, transparent 40%, rgba(8,9,12,0.7) 100%)",
            }}
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-accent/20 rounded-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
