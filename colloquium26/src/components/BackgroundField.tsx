type Shape = {
  kind: "diamond" | "half" | "dot";
  color: string;
  top: string;
  left: string;
  size: number;
  duration: number;
  delay: number;
  rotate?: number;
};

const shapes: Shape[] = [
  { kind: "half", color: "var(--color-accent)", top: "12%", left: "9%", size: 34, duration: 9, delay: 0 },
  { kind: "diamond", color: "var(--color-shape-coral)", top: "16%", left: "68%", size: 16, duration: 7, delay: 0.4 },
  { kind: "diamond", color: "var(--color-shape-amber)", top: "34%", left: "5%", size: 14, duration: 8, delay: 1 },
  { kind: "half", color: "var(--color-shape-amber)", top: "30%", left: "72%", size: 26, duration: 10, delay: 0.6 },
  { kind: "dot", color: "var(--color-shape-white)", top: "42%", left: "15%", size: 10, duration: 6, delay: 0.2 },
  { kind: "diamond", color: "var(--color-accent-soft)", top: "46%", left: "40%", size: 12, duration: 7.5, delay: 1.2 },
  { kind: "dot", color: "var(--color-shape-emerald)", top: "52%", left: "48%", size: 10, duration: 6.5, delay: 0.8 },
  { kind: "diamond", color: "var(--color-shape-coral)", top: "58%", left: "78%", size: 14, duration: 8.5, delay: 0.3 },
  { kind: "half", color: "var(--color-accent)", top: "70%", left: "6%", size: 22, duration: 9.5, delay: 0.9 },
  { kind: "diamond", color: "var(--color-shape-amber)", top: "78%", left: "58%", size: 14, duration: 7, delay: 1.4 },
  { kind: "half", color: "var(--color-shape-white)", top: "84%", left: "88%", size: 18, duration: 8, delay: 0.5, rotate: 180 },
  { kind: "diamond", color: "var(--color-accent-soft)", top: "90%", left: "22%", size: 12, duration: 6.8, delay: 1.1 },
];

function ShapeGlyph({ shape }: { shape: Shape }) {
  const base = { width: shape.size, height: shape.size };

  if (shape.kind === "diamond") {
    return (
      <div
        style={{
          ...base,
          background: shape.color,
          transform: `rotate(45deg)`,
        }}
      />
    );
  }

  if (shape.kind === "half") {
    return (
      <div
        style={{
          width: shape.size,
          height: shape.size / 2,
          background: shape.color,
          borderRadius: `${shape.size}px ${shape.size}px 0 0`,
          transform: shape.rotate ? `rotate(${shape.rotate}deg)` : undefined,
        }}
      />
    );
  }

  return (
    <div
      style={{
        ...base,
        background: shape.color,
        borderRadius: "9999px",
      }}
    />
  );
}

export default function BackgroundField() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden bg-background bg-grid"
      style={{
        transform: "translateZ(0)",
        WebkitTransform: "translateZ(0)",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        willChange: "transform",
      }}
    >
      {/* radial fade so the grid recedes toward the edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 20%, transparent 0%, var(--color-background) 85%)",
        }}
      />
      {shapes.map((shape, i) => (
        <div
          key={i}
          className="drift-shape absolute opacity-60"
          style={{
            top: shape.top,
            left: shape.left,
            animationDuration: `${shape.duration}s`,
            animationDelay: `${shape.delay}s`,
          }}
        >
          <ShapeGlyph shape={shape} />
        </div>
      ))}
    </div>
  );
}