"use client";

import { useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, animate } from "framer-motion";

export default function DrawnLoop({ className = "" }: { className?: string }) {
  const { scrollY } = useScroll();
  // Smooth out the scroll value for a buttery un-drawing effect
  const smoothY = useSpring(scrollY, { stiffness: 100, damping: 20 });
  // Map 0-300px of scroll to a 0-1 "loss" factor
  const scrollLoss = useTransform(smoothY, [0, 250], [0, 1]);

  return (
    <svg
      viewBox="0 0 420 220"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {[0, 1, 2].map((i) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const drawProgress = useMotionValue(0);

        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
          animate(drawProgress, 1, { duration: 1.8, delay: 0.3 + i * 0.15, ease: "easeInOut" });
        }, [drawProgress, i]);

        // Combined transform: entry animation minus scroll progress
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const pathLength = useTransform(() => Math.max(0, drawProgress.get() - scrollLoss.get()));

        const maxOp = 0.8 - i * 0.15;
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const opacity = useTransform(() => Math.max(0, (drawProgress.get() - scrollLoss.get()) * maxOp));

        return (
          <motion.ellipse
            key={i}
            cx={210 - i * 3}
            cy={110 + i * 2}
            rx={200 - i * 6}
            ry={95 - i * 4}
            stroke="var(--color-accent-soft)"
            strokeWidth={1.5}
            strokeLinecap="round"
            style={{ pathLength, opacity }}
          />
        );
      })}
    </svg>
  );
}
