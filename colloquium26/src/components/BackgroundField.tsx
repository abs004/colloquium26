export default function BackgroundField() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-background bg-grid">
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