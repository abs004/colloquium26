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
          In Collaboration With
        </motion.p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-16">
          {sponsors.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-center justify-center p-2 sm:p-4 font-mono text-xs uppercase tracking-widest text-muted"
            >
              {s.logo ? (
                <Image src={s.logo} alt={s.name} width={240} height={80} className="h-12 w-auto object-contain sm:h-16" />
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
