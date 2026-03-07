import { useRef, useEffect, useState } from 'react';
import blueSvg     from './bubble_blue.svg';
import darkBlueSvg from './bubble_dark_blue.svg';
import greenSvg    from './bubble_green.svg';
import purpleSvg   from './bubble_purple.svg';
import yellowSvg   from './bubble_yellow.svg';
import redSvg      from './bubble_red.svg';

// ─── BUBBLES ──────────────────────────────────────────────────────────────────────────────
function initBubbles(W, H) {
  const mkBubble = (id, img, size) => {
    const angle = Math.random() * Math.PI * 2;
    const speed = 1.2 + Math.random() * 0.8;
    return {
      id,
      img,
      size,
      x: size / 2 + Math.random() * (W - size),
      y: size / 2 + Math.random() * (H - size),
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
    };
  };

  return [
    ...Array.from({ length: 20 }, (_, i) => mkBubble(i, blueSvg, 150)),
    mkBubble(20, purpleSvg,   150),
    mkBubble(21, yellowSvg,   150),
    mkBubble(22, redSvg,      150),
    mkBubble(23, darkBlueSvg,  50),
    (() => { const b = mkBubble(24, greenSvg, 150); return { ...b, vx: b.vx * 3, vy: b.vy * 3 }; })(),
  ];
}

function Bubbles({ screenW, screenH }) {
  const [bubbles, setBubbles] = useState(() => initBubbles(screenW, screenH));
  const bubblesRef = useRef(bubbles);
  const refsMap = useRef({});
  const rafRef = useRef(null);

  useEffect(() => {
    const b = initBubbles(screenW, screenH);
    setBubbles(b);
    bubblesRef.current = b;
  }, [screenW, screenH]);

  useEffect(() => {
    const animate = () => {
      bubblesRef.current = bubblesRef.current.map(b => {
        let { x, y, vx, vy, size } = b;
        x += vx; y += vy;
        if (x - size / 2 < 0)       { x = size / 2;          vx = Math.abs(vx); }
        if (x + size / 2 > screenW) { x = screenW - size / 2; vx = -Math.abs(vx); }
        if (y - size / 2 < 0)       { y = size / 2;           vy = Math.abs(vy); }
        if (y + size / 2 > screenH) { y = screenH - size / 2; vy = -Math.abs(vy); }
        const el = refsMap.current[b.id];
        if (el) el.style.transform = `translate(${x - size / 2}px, ${y - size / 2}px)`;
        return { ...b, x, y, vx, vy };
      });
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [screenW, screenH]);

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
      {bubbles.map(b => (
        <div key={b.id} ref={el => refsMap.current[b.id] = el} style={{
          position: "absolute", top: 0, left: 0, width: b.size, height: b.size,
          willChange: "transform", transform: "translate(-200px,-200px)",
        }}>
          <img src={b.img} alt="bubble" style={{ width: b.size, height: b.size, display: "block" }} />
        </div>
      ))}
    </div>
  );
}

export default Bubbles;
