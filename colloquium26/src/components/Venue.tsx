"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Clock } from "lucide-react";
import { event } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function Venue() {
  return (
    <section className="relative px-6 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2 md:items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent-soft">
            Our Venue
          </p>
          <h2 className="font-display mt-4 text-4xl font-bold sm:text-5xl">
            {event.venue}
          </h2>
          <p className="mt-5 max-w-md text-muted">{event.venueBlurb}</p>

          <dl className="mt-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-accent-soft">
                <Calendar size={16} />
              </span>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-widest text-muted">Date</dt>
                <dd className="text-sm">{event.date}</dd>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-accent-soft">
                <Clock size={16} />
              </span>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-widest text-muted">Time</dt>
                <dd className="text-sm">{event.time}</dd>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-accent-soft">
                <MapPin size={16} />
              </span>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-widest text-muted">Venue</dt>
                <dd className="text-sm">{event.venue}</dd>
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
          <img
            src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=80"
            alt="Conference venue"
            className="h-full w-full object-cover"
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
