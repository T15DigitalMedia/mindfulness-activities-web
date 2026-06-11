import { useState, useEffect, useCallback } from 'react';
import cloudImg from './cloud.png';

// ─── TIMINGS (ms) ─────────────────────────────────────────────────────────────
const START_DELAY = 8000;  // pause after spacebar before first arc begins
const ARC_DRAW    = 6000;  // CSS transition duration for each arc
const ARC_PAUSE   = 14000; // pause after each arc finishes before the next starts
const INTER_ARC   = ARC_DRAW + ARC_PAUSE; // total gap between arc starts

// ─── RAINBOW ──────────────────────────────────────────────────────────────────
const RAINBOW_COLORS = [
  { color: "#FF0000", label: "Red" },
  { color: "#FF7F00", label: "Orange" },
  { color: "#FFFF00", label: "Yellow" },
  { color: "#00AA00", label: "Green" },
  { color: "#0000FF", label: "Blue" },
  { color: "#4B0082", label: "Indigo" },
  { color: "#8B00FF", label: "Violet" },
];

function Rainbow() {
  const [visibleBands, setVisibleBands] = useState(0);
  const [animating, setAnimating] = useState(false);

  const startRainbow = useCallback(() => {
    setVisibleBands(0);
    setAnimating(true);
  }, []);

  useEffect(() => {
    const onKey = e => {
      if (e.code === "Space" && !animating) startRainbow();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [animating, startRainbow]);

  useEffect(() => {
    if (!animating) return;
    if (visibleBands >= RAINBOW_COLORS.length) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setAnimating(false);
      return;
    }
    const delay = visibleBands === 0 ? START_DELAY : INTER_ARC;
    const t = setTimeout(() => setVisibleBands(v => v + 1), delay);
    return () => clearTimeout(t);
  }, [animating, visibleBands]);

  const W = 700,
    H = 420;
  const cx = W / 2,
    cy = H + 20;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        width={W}
        height={H}
        viewBox={`0 0 ${W} ${H}`}
        style={{ overflow: "visible" }}
      >
        {RAINBOW_COLORS.map((band, i) => {
          const radius = 130 + (RAINBOW_COLORS.length - 1 - i) * 30;
          const quarterCirc = (Math.PI * radius) / 2;
          const isVisible = i < visibleBands;
          // Right foot → top (counterclockwise quarter arc)
          const rightPath = `M ${cx + radius} ${cy} A ${radius} ${radius} 0 0 0 ${cx} ${cy - radius}`;
          // Left foot → top (clockwise quarter arc)
          const leftPath = `M ${cx - radius} ${cy} A ${radius} ${radius} 0 0 1 ${cx} ${cy - radius}`;
          const pathStyle = {
            fill: "none",
            stroke: band.color,
            strokeWidth: 34,
            strokeLinecap: "round",
            strokeDasharray: quarterCirc,
            strokeDashoffset: isVisible ? 0 : quarterCirc,
            transition: isVisible ? `stroke-dashoffset ${ARC_DRAW / 1000}s ease-out` : "none",
          };
          return (
            <g key={i}>
              <path d={rightPath} style={pathStyle} />
              <path d={leftPath} style={pathStyle} />
            </g>
          );
        })}
        {/* Clouds — right feet span x=480–660 (center ~570), left x=40–220 (center ~130) */}
        <image href={cloudImg} x={330} y={310} width={480} height={260} />
        <image
          href={cloudImg}
          x={-110}
          y={310}
          width={480}
          height={260}
          transform="translate(260, 0) scale(-1, 1)"
        />
      </svg>
    </div>
  );
}

export default Rainbow;
