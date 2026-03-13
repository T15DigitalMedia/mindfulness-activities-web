import { useState, useEffect } from 'react';
import { SKY, DARK_NAVY, globalStyles } from './theme.js';
import { supabase } from './supabaseClient.js';
import Clouds from './components/Clouds.jsx';
import { Menu } from './components/Menu.jsx';
import BackBtn from './components/BackBtn.jsx';
import Rainbow from './activities/rainbow/Rainbow.jsx';
import Feathers from './activities/feathers/Feathers.jsx';
import Bubbles from './activities/bubbles/Bubbles.jsx';

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState("menu");
  const [size, setSize] = useState({ w: window.innerWidth, h: window.innerHeight });

  useEffect(() => {
    const onResize = () => setSize({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isBubbles = screen === "bubbles";

  return (
    <div style={{ width: "100vw", height: "100vh", background: isBubbles ? "#D8D8D8" : SKY, position: "relative", overflow: "hidden" }}>
      <style>{globalStyles}</style>
      {!isBubbles && <Clouds />}
      <button
        onClick={() => supabase.auth.signOut()}
        style={{ position: "absolute", top: 12, right: 14, zIndex: 100, background: "rgba(255,255,255,0.55)", border: "none", borderRadius: 8, padding: "4px 10px", color: DARK_NAVY, fontSize: "0.75rem", cursor: "pointer", fontFamily: "inherit" }}
      >
        Sign out
      </button>

      {screen === "menu" && <Menu onSelect={setScreen} />}

      {screen !== "menu" && <BackBtn onClick={() => setScreen("menu")} />}

      {screen === "rainbow"  && <Rainbow />}
      {screen === "feathers" && <Feathers screenW={size.w} screenH={size.h} />}
      {screen === "bubbles"  && <Bubbles  screenW={size.w} screenH={size.h} />}
    </div>
  );
}
