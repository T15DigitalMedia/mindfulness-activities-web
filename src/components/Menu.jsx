import { DARK_NAVY } from '../theme.js';

// ─── MENU ─────────────────────────────────────────────────────────────────────
function MenuBtn({ emoji, label, onClick, delay }) {
  return (
    <button onClick={onClick} style={{
      display: "flex", alignItems: "center", gap: 14,
      background: "white", border: "none", borderRadius: 50,
      padding: "14px 32px", cursor: "pointer", width: 240,
      fontFamily: "Verdana, Geneva, sans-serif", fontSize: 22, color: DARK_NAVY,
      boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
      animation: `fadeIn 0.5s ease both`,
      animationDelay: `${delay}s`,
      transition: "transform 0.15s, box-shadow 0.15s",
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.06)"; e.currentTarget.style.boxShadow = "0 10px 28px rgba(0,0,0,0.2)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)"; }}
    >
      <span style={{ fontSize: 26 }}>{emoji}</span>
      {label}
    </button>
  );
}

function Menu({ onSelect }) {
  return (
    <div style={{
      position: "absolute", inset: 0, display: "flex",
      flexDirection: "column", alignItems: "center", justifyContent: "center",
      gap: 18,
    }}>
      <h1 style={{
        fontFamily: "Verdana, Geneva, sans-serif", fontSize: 70, color: "white",
        textShadow: "0 3px 12px rgba(0,0,0,0.2)",
        animation: "fadeIn 0.4s ease both",
        marginBottom: 24,
      }}>Mindfulness</h1>
      <MenuBtn emoji="🌈" label="Rainbow"  onClick={() => onSelect("rainbow")}  delay={0.1} />
      <MenuBtn emoji="🫧" label="Bubbles"  onClick={() => onSelect("bubbles")}  delay={0.2} />
      <MenuBtn emoji="🪶" label="Feathers" onClick={() => onSelect("feathers")} delay={0.3} />
    </div>
  );
}

export { MenuBtn, Menu };
