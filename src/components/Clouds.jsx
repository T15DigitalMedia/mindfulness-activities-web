// ─── CLOUDS ───────────────────────────────────────────────────────────────────
function Clouds() {
  const clouds = [
    { top: "8%",  left: "5%",  w: 120, opacity: 0.7, delay: 0 },
    { top: "15%", left: "60%", w: 180, opacity: 0.6, delay: 2 },
    { top: "5%",  left: "35%", w: 90,  opacity: 0.5, delay: 4 },
    { top: "22%", left: "80%", w: 140, opacity: 0.65, delay: 1 },
  ];
  return (
    <>
      {clouds.map((c, i) => (
        <div key={i} style={{
          position: "absolute", top: c.top, left: c.left, width: c.w,
          animation: `cloudDrift ${6 + i}s ease-in-out infinite`,
          animationDelay: `${c.delay}s`, opacity: c.opacity, pointerEvents: "none",
        }}>
          <svg viewBox="0 0 120 60" fill="white">
            <ellipse cx="60" cy="40" rx="55" ry="22" />
            <ellipse cx="40" cy="32" rx="30" ry="22" />
            <ellipse cx="80" cy="30" rx="28" ry="20" />
          </svg>
        </div>
      ))}
    </>
  );
}

export default Clouds;
