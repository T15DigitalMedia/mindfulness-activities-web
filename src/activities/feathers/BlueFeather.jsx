// ─── FEATHERS ─────────────────────────────────────────────────────────────────
// Blue feather SVG (feather 1)
function BlueFeather({ size = 80 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: "block", overflow: "visible" }}>
      <g transform="rotate(-45, 50, 50)">
        {/* Quill / spine */}
        <path d="M50 8 Q54 50 52 92" stroke="#5a7a8a" strokeWidth="4" fill="none" strokeLinecap="round"/>
        {/* Left barbs */}
        <path d="M51 18 Q30 14 18 22" stroke="#2196C4" strokeWidth="2" fill="#29ABD4" strokeLinecap="round"/>
        <path d="M51 26 Q28 20 14 30" stroke="#2196C4" strokeWidth="2" fill="#29ABD4" strokeLinecap="round"/>
        <path d="M51 34 Q26 26 12 38" stroke="#2196C4" strokeWidth="2" fill="#29ABD4" strokeLinecap="round"/>
        <path d="M51 42 Q28 34 16 46" stroke="#2196C4" strokeWidth="2" fill="#29ABD4" strokeLinecap="round"/>
        <path d="M51 50 Q30 42 20 54" stroke="#2196C4" strokeWidth="2" fill="#29ABD4" strokeLinecap="round"/>
        <path d="M51 58 Q34 52 26 62" stroke="#2196C4" strokeWidth="2" fill="#29ABD4" strokeLinecap="round"/>
        {/* Right barbs */}
        <path d="M51 18 Q70 12 80 20" stroke="#1a7fa8" strokeWidth="2" fill="#1a9fc8" strokeLinecap="round"/>
        <path d="M51 26 Q72 18 84 28" stroke="#1a7fa8" strokeWidth="2" fill="#1a9fc8" strokeLinecap="round"/>
        <path d="M51 34 Q74 26 86 36" stroke="#1a7fa8" strokeWidth="2" fill="#1a9fc8" strokeLinecap="round"/>
        <path d="M51 42 Q72 32 82 44" stroke="#1a7fa8" strokeWidth="2" fill="#1a9fc8" strokeLinecap="round"/>
        <path d="M51 50 Q70 40 78 52" stroke="#1a7fa8" strokeWidth="2" fill="#1a9fc8" strokeLinecap="round"/>
        <path d="M51 58 Q68 50 74 60" stroke="#1a7fa8" strokeWidth="2" fill="#1a9fc8" strokeLinecap="round"/>
        {/* Barb fill shapes - left */}
        <path d="M51 18 Q32 16 18 22 Q28 28 51 26 Z" fill="#29ABD4" opacity="0.9"/>
        <path d="M51 26 Q26 22 14 30 Q24 36 51 34 Z" fill="#29ABD4" opacity="0.9"/>
        <path d="M51 34 Q24 28 12 38 Q22 44 51 42 Z" fill="#2BB8E0" opacity="0.85"/>
        <path d="M51 42 Q26 36 16 46 Q24 52 51 50 Z" fill="#2BB8E0" opacity="0.85"/>
        <path d="M51 50 Q28 44 20 54 Q28 58 51 58 Z" fill="#29ABD4" opacity="0.85"/>
        <path d="M51 58 Q32 54 26 62 Q34 66 51 66 Z" fill="#29ABD4" opacity="0.8"/>
        {/* Barb fill shapes - right */}
        <path d="M51 18 Q72 14 80 20 Q72 26 51 26 Z" fill="#1a9fc8" opacity="0.9"/>
        <path d="M51 26 Q74 20 84 28 Q74 34 51 34 Z" fill="#1a9fc8" opacity="0.9"/>
        <path d="M51 34 Q76 28 86 36 Q76 42 51 42 Z" fill="#1da8d4" opacity="0.85"/>
        <path d="M51 42 Q74 34 82 44 Q72 50 51 50 Z" fill="#1da8d4" opacity="0.85"/>
        <path d="M51 50 Q72 42 78 52 Q70 58 51 58 Z" fill="#1a9fc8" opacity="0.85"/>
        <path d="M51 58 Q70 52 74 60 Q66 66 51 66 Z" fill="#1a9fc8" opacity="0.8"/>
        {/* Tip wisps */}
        <path d="M51 68 Q40 72 36 78" stroke="#29ABD4" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M51 68 Q44 74 42 82" stroke="#29ABD4" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M51 68 Q48 76 48 84" stroke="#1a9fc8" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        {/* Quill on top */}
        <path d="M50 8 Q54 50 52 92" stroke="#5a7a8a" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.8"/>
      </g>
    </svg>
  );
}

export default BlueFeather;
