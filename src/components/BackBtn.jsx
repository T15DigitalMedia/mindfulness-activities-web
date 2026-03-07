import { DARK_NAVY } from '../theme.js';

// ─── BACK BUTTON ──────────────────────────────────────────────────────────────
function BackBtn({ onClick }) {
  return (
    <button onClick={onClick} style={{
      position: "absolute", top: 20, left: 20, zIndex: 100,
      background: "white", border: "none", borderRadius: 50,
      padding: "10px 22px", cursor: "pointer",
      fontFamily: "Verdana, Geneva, sans-serif", fontSize: 18, color: DARK_NAVY,
      boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
      transition: "transform 0.15s",
    }}
      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
      onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
    >
      ← Menu
    </button>
  );
}

export default BackBtn;
