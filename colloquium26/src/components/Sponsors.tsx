"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { sponsors } from "@/lib/data";

export default function Sponsors() {
  return (
    <section className="relative isolate px-6 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center font-mono text-[11px] uppercase tracking-[0.3em] text-muted"
        >
          In Association With
        </motion.p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {sponsors.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] px-8 py-5 font-mono text-xs uppercase tracking-widest text-muted"
            >
              {s.logo ? (
                <Image src={s.logo} alt={s.name} width={160} height={40} className="h-10 w-auto object-contain" />
              ) : (
                s.name
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
