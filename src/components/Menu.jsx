import { DARK_NAVY } from '../theme.js';
import bubbleImg from '../activities/bubbles/bubble_blue.svg';
import featherImg from '../activities/feathers/feather.svg';

const RainbowIcon = () => (
  <svg viewBox="0 0 40 24" width="26" height="26" aria-hidden="true">
    <path d="M2 24 A18 18 0 0 1 38 24" fill="none" stroke="#FF0000" strokeWidth="3"/>
    <path d="M6 24 A14 14 0 0 1 34 24" fill="none" stroke="#FF9900" strokeWidth="3"/>
    <path d="M10 24 A10 10 0 0 1 30 24" fill="none" stroke="#FFDD00" strokeWidth="3"/>
    <path d="M13 24 A7 7 0 0 1 27 24" fill="none" stroke="#33CC33" strokeWidth="3"/>
    <path d="M16 24 A4 4 0 0 1 24 24" fill="none" stroke="#3355FF" strokeWidth="3"/>
  </svg>
);

// ─── MENU ─────────────────────────────────────────────────────────────────────
function MenuBtn({ icon, label, onClick, delay }) {
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
      <span style={{ width: 26, height: 26, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{icon}</span>
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
      <MenuBtn icon={<RainbowIcon />}                                              label="Rainbow"  onClick={() => onSelect("rainbow")}  delay={0.1} />
      <MenuBtn icon={<img src={bubbleImg} width="26" height="26" alt="" />}        label="Bubbles"  onClick={() => onSelect("bubbles")}  delay={0.2} />
      <MenuBtn icon={<img src={featherImg} width="26" height="26" alt="" />}       label="Feathers" onClick={() => onSelect("feathers")} delay={0.3} />
    </div>
  );
}

export { MenuBtn, Menu };
