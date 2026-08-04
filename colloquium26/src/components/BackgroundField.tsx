"use client";

import { motion } from "framer-motion";

export default function BackgroundField() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background bg-grid">
      
      {/* Ambient Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -60, 40, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-[10%] -top-[10%] h-[50vh] w-[50vw] rounded-full bg-accent opacity-20 blur-[100px] sm:blur-[140px]"
        />
        <motion.div
          animate={{
            x: [0, -70, 40, 0],
            y: [0, 80, -50, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{ duration: 32, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute top-[20%] right-[-5%] h-[40vh] w-[40vw] rounded-full bg-shape-emerald opacity-[0.12] blur-[100px] sm:blur-[140px]"
        />
        <motion.div
          animate={{
            x: [0, 90, -60, 0],
            y: [0, -40, 70, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 12 }}
          className="absolute -bottom-[10%] left-[20%] h-[60vh] w-[60vw] rounded-full bg-accent-soft opacity-20 blur-[100px] sm:blur-[140px]"
        />
      </div>

      {/* radial fade so the grid recedes toward the edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 20%, transparent 0%, var(--color-background) 85%)",
        }}
      />
    </div>
  );
}