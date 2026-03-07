import { useRef, useEffect } from 'react';
import { FEATHER_IMGS } from './featherAssets.js';

function FallingFeather({ id, startX, delay, screenH, screenW, onLanded, featherIndex }) {
  const ref = useRef(null);
  const posRef = useRef({ y: -80, x: startX });
  const swayRef = useRef(0);
  const rafRef = useRef(null);
  const speed = 0.6 + Math.random() * 0.4;

  useEffect(() => {
    let startTime = null;
    const SWAY_AMP = 28 + Math.random() * 18;
    const SWAY_FREQ = 0.00018 + Math.random() * 0.0001;

    const animate = (ts) => {
      if (!startTime) startTime = ts;
      const elapsed = ts - startTime;
      posRef.current.y += speed;
      const swayX = startX + Math.sin(elapsed * SWAY_FREQ * Math.PI * 2) * SWAY_AMP;
      const clampedX = Math.max(0, Math.min(screenW - 30, swayX));
      if (ref.current) {
        ref.current.style.transform = `translate(${clampedX}px, ${posRef.current.y}px) rotate(${Math.sin(elapsed * SWAY_FREQ * Math.PI * 2) * 15}deg)`;
      }
      if (posRef.current.y > screenH) {
        onLanded(id);
        return;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const t = setTimeout(() => { rafRef.current = requestAnimationFrame(animate); }, delay);
    return () => { clearTimeout(t); cancelAnimationFrame(rafRef.current); };
  }, []);

  const imgSrc = FEATHER_IMGS[featherIndex % 2];
  return (
    <div ref={ref} style={{
      position: "absolute", top: 0, left: 0, willChange: "transform",
      transform: `translate(-200px, -200px)`,
    }}>
      <img src={imgSrc} alt="feather" style={{ width: 72, height: 72, display: "block" }} />
    </div>
  );
}

export default FallingFeather;
