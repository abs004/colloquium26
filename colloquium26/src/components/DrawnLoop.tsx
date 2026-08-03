"use client";

import { motion } from "framer-motion";

export default function DrawnLoop({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 220"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {[0, 1, 2].map((i) => (
        <motion.ellipse
          key={i}
          cx={210 - i * 3}
          cy={110 + i * 2}
          rx={200 - i * 6}
          ry={95 - i * 4}
          stroke="var(--color-accent-soft)"
          strokeWidth={1.5}
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.8 - i * 0.15 }}
          transition={{ duration: 1.8, delay: 0.3 + i * 0.15, ease: "easeInOut" }}
        />
      ))}
    </svg>
  );
}
