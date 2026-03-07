import { useState, useRef, useCallback, useEffect } from 'react';
import FallingFeather from './FallingFeather.jsx';

function Feathers({ screenW, screenH }) {
  const [wave, setWave] = useState(1);
  const [feathers, setFeathers] = useState([]);
  const landedRef = useRef(new Set());
  const waveRef = useRef(1);
  const runCountRef = useRef(0);

  const launchWave = useCallback((count) => {
    landedRef.current.clear();
    const newFeathers = Array.from({ length: count }, (_, i) => ({
      id: `${Date.now()}-${i}`,
      startX: 80 + Math.random() * (screenW - 160),
      delay: i * 200,
      featherIndex: i % 2,
    }));
    setFeathers(newFeathers);
  }, [screenW]);

  useEffect(() => { launchWave(1); }, []);

  const handleLanded = useCallback((id) => {
    landedRef.current.add(id);
    setFeathers(prev => {
      if (landedRef.current.size >= prev.length) {
        runCountRef.current += 1;
        if (runCountRef.current >= 2) {
          runCountRef.current = 0;
          const nextWave = waveRef.current + 1;
          waveRef.current = nextWave;
          setWave(nextWave);
          setTimeout(() => launchWave(nextWave), 600);
        } else {
          setTimeout(() => launchWave(waveRef.current), 600);
        }
      }
      return prev;
    });
  }, [launchWave]);

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
      {feathers.map(f => (
        <FallingFeather key={f.id} id={f.id} startX={f.startX} delay={f.delay}
          screenH={screenH} screenW={screenW} onLanded={handleLanded} featherIndex={f.featherIndex} />
      ))}
    </div>
  );
}


export default Feathers;
