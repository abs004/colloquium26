"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import type { ScheduleItem } from "@/lib/data";

/* ─── Constants ──────────────────────────────────────────────────────── */
const VINE_PX  = 72;   // physical width of the vine column in px
const SWING    = 18;   // px nodes deviate L/R from vine centre
const MIN_GAP  = 56;   // minimum vertical gap between consecutive cards (px)
const PAD_T    = 32;   // padding above first card (px)
const PAD_B    = 48;   // padding below last card (px)
const CX       = VINE_PX / 2; // vine centre x in SVG coords (SVG uses px 1:1)

/* ─── Dynamic path builder ───────────────────────────────────────────── */
/** Builds the cubic-bezier vine path and places nodes centred on each card. */
function buildVine(tops: number[], heights: number[]) {
  const nodes = tops.map((top, i) => ({
    x: CX + (i % 2 === 0 ? -SWING : SWING),
    y: top + heights[i] / 2,
  }));

  const last    = nodes[nodes.length - 1];
  const totalH  = tops[tops.length - 1] + heights[heights.length - 1] + PAD_B;

  /* Start at top-centre and end at bottom-centre, weaving through nodes */
  let d = `M ${CX} 0`;
  for (let i = 0; i < nodes.length; i++) {
    const { x: nx, y: ny } = nodes[i];
    const prevX = i === 0 ? CX : nodes[i - 1].x;
    const prevY = i === 0 ? 0  : nodes[i - 1].y;
    const mid   = (prevY + ny) / 2;
    d += ` C ${prevX} ${mid}, ${nx} ${mid}, ${nx} ${ny}`;
  }
  /* Tail after last node */
  const tailMid = (last.y + totalH) / 2;
  d += ` C ${last.x} ${tailMid}, ${CX} ${tailMid}, ${CX} ${totalH}`;

  return { nodes, totalH, path: d };
}



/* ─── Glassmorphism event card ───────────────────────────────────────── */
function EventCard({
  item,
  isLeft,
  inView,
  delay,
}: {
  item: ScheduleItem;
  isLeft: boolean;
  inView: boolean;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -28 : 28 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      whileHover={{ y: -3, scale: 1.012, transition: { duration: 0.2 } }}
      className={`w-full rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-xl
        backdrop-blur-md hover:border-white/20 hover:bg-white/[0.06]
        ${isLeft ? "text-right" : "text-left"}`}
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent-soft">
        {item.time}
      </p>
      <h3 className="font-display mt-1.5 text-base font-bold leading-snug sm:text-lg">
        {item.title}
      </h3>
      <p className="mt-1 text-xs leading-relaxed text-muted sm:text-sm">{item.detail}</p>

      {item.speaker && (
        <div className="mt-3 border-t border-white/10 pt-3">
          <p className="text-xs font-semibold text-foreground">{item.speaker}</p>
          <p className="mt-0.5 text-[11px] text-muted">{item.role}</p>
        </div>
      )}

      {item.panelists && (
        <ul className="mt-3 space-y-2 border-t border-white/10 pt-3">
          {item.panelists.map((p, idx) => (
            <li key={idx}>
              <p className="text-xs font-semibold text-foreground">{p.name}</p>
              <p className="mt-0.5 text-[11px] text-muted">{p.role}</p>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

/* ─── Main VineTimeline ──────────────────────────────────────────────── */
export default function VineTimeline({ items }: { items: ScheduleItem[] }) {
  const sectionRef  = useRef<HTMLDivElement>(null);
  const inView      = useInView(sectionRef, { once: true, margin: "-80px" });

  /* One ref per card wrapper for height measurement */
  const cardRefs    = useRef<(HTMLDivElement | null)[]>([]);

  /* Measured card heights — default 120px so layout has a reasonable first render */
  const [heights, setHeights] = useState<number[]>(() => new Array(items.length).fill(120));

  /** Read offsetHeight from all card wrappers and batch-update state */
  const measureAll = useCallback(() => {
    const measured = cardRefs.current.map(el => el?.offsetHeight ?? 120);
    setHeights(prev => {
      /* Skip re-render if nothing changed */
      if (prev.every((h, i) => h === measured[i])) return prev;
      return measured;
    });
  }, []);

  useEffect(() => {
    /* Initial measurement (after paint) */
    measureAll();

    /* ResizeObserver on each card — fires when content grows/shrinks */
    const observers: ResizeObserver[] = [];
    cardRefs.current.forEach(el => {
      if (!el) return;
      const ro = new ResizeObserver(measureAll);
      ro.observe(el);
      observers.push(ro);
    });

    /* Also recalculate on viewport resize (font size, sidebar, etc.) */
    window.addEventListener("resize", measureAll, { passive: true });

    return () => {
      observers.forEach(ro => ro.disconnect());
      window.removeEventListener("resize", measureAll);
    };
  }, [measureAll, items.length]);

  /* ── Compute layout from measured heights ── */
  const tops: number[] = [];
  let cursor = PAD_T;
  for (let i = 0; i < items.length; i++) {
    tops.push(cursor);
    cursor += heights[i] + MIN_GAP;
  }
  const { nodes, totalH, path } = buildVine(tops, heights);

  /* ── Half-widths for card columns ── */
  // vine column occupies VINE_PX centred; cards sit in the remaining halves
  // expressed as: left edge of right col = 50% + VINE_PX/2 + gap
  const BRANCH_GAP = 16; // px gap between vine edge and card edge
  const half       = `calc(50% - ${CX + BRANCH_GAP}px)`; // card column width

  return (
    <div ref={sectionRef} className="relative mx-auto w-full max-w-4xl px-3 sm:px-6">

      {/* ── Container with measured total height ── */}
      <div className="relative w-full" style={{ height: totalH }}>

        {/* ── SVG vine (absolute, centred over the vine column) ── */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
          style={{ width: VINE_PX, height: totalH }}
          aria-hidden
        >
          <svg
            viewBox={`0 0 ${VINE_PX} ${totalH}`}
            width={VINE_PX}
            height={totalH}
            style={{ overflow: "visible" }}
          >
            <defs>
              <filter id="vine-glow" x="-60%" y="-10%" width="220%" height="120%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Soft glow copy */}
            <motion.path
              d={path} fill="none"
              stroke="var(--color-accent)" strokeWidth={5} opacity={0.1}
              filter="url(#vine-glow)"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 2.8, ease: "easeInOut" }}
            />

            {/* Main vine line */}
            <motion.path
              d={path} fill="none"
              stroke="var(--color-accent)" strokeWidth={1.4} strokeLinecap="round" opacity={0.65}
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 2.8, ease: "easeInOut" }}
            />



            {/* Node circles — appear staggered as vine draws past them */}
            {nodes.map((n, i) => (
              <motion.circle
                key={i}
                cx={n.x} cy={n.y} r={5}
                fill="var(--color-background)"
                stroke="var(--color-accent)" strokeWidth={1.5}
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 0.9 } : {}}
                transition={{ duration: 0.4, delay: 2.0 + i * 0.16, ease: "backOut" }}
                style={{ transformOrigin: `${n.x}px ${n.y}px` }}
              />
            ))}

            {/* Dashed branch connectors (node → card edge) */}
            {nodes.map((n, i) => {
              const isLeft = i % 2 === 0;
              // branch goes from node.x outward to the vine edge ± BRANCH_GAP
              const x2 = isLeft ? 0 : VINE_PX;
              return (
                <motion.line
                  key={`branch-${i}`}
                  x1={n.x} y1={n.y} x2={x2} y2={n.y}
                  stroke="var(--color-accent)" strokeWidth={0.8} opacity={0.35}
                  strokeDasharray="3 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 0.35 } : {}}
                  transition={{ duration: 0.35, delay: 2.1 + i * 0.16 }}
                />
              );
            })}
          </svg>
        </div>

        {/* ── Absolutely positioned cards ── */}
        {items.map((item, i) => {
          const isLeft = i % 2 === 0;
          return (
            <div
              key={i}
              ref={el => { cardRefs.current[i] = el; }}
              className="absolute"
              style={{
                top:   tops[i],
                width: half,
                /* Left cards: flush left; right cards: flush right */
                ...(isLeft
                  ? { left: 0 }
                  : { right: 0 }),
              }}
            >
              <EventCard
                item={item}
                isLeft={isLeft}
                inView={inView}
                delay={i * 0.1}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
