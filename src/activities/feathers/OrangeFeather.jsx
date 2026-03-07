// Orange feather SVG (feather 2)
function OrangeFeather({ size = 80 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: "block", overflow: "visible" }}>
      <g transform="rotate(-40, 50, 50)">
        {/* Quill / spine */}
        <path d="M50 6 Q56 48 54 94" stroke="#e8d5a0" strokeWidth="5" fill="none" strokeLinecap="round"/>
        {/* Left barb fills */}
        <path d="M52 16 Q30 10 16 20 Q26 30 52 28 Z" fill="#E85C0D" opacity="0.95"/>
        <path d="M52 28 Q26 20 12 32 Q22 42 52 38 Z" fill="#F4720A" opacity="0.95"/>
        <path d="M52 38 Q24 30 10 42 Q20 52 52 48 Z" fill="#E85C0D" opacity="0.9"/>
        <path d="M52 48 Q26 40 14 52 Q22 62 52 58 Z" fill="#F4720A" opacity="0.9"/>
        <path d="M52 58 Q30 50 20 60 Q28 68 52 66 Z" fill="#E85C0D" opacity="0.88"/>
        <path d="M52 66 Q34 60 28 70 Q36 76 52 74 Z" fill="#F4720A" opacity="0.85"/>
        {/* Right barb fills */}
        <path d="M52 16 Q74 8 84 18 Q74 28 52 28 Z" fill="#F4A20A" opacity="0.95"/>
        <path d="M52 28 Q76 18 88 30 Q76 40 52 38 Z" fill="#F4A20A" opacity="0.95"/>
        <path d="M52 38 Q78 28 88 40 Q78 50 52 48 Z" fill="#E85C0D" opacity="0.9"/>
        <path d="M52 48 Q76 36 86 48 Q76 58 52 58 Z" fill="#F4A20A" opacity="0.9"/>
        <path d="M52 58 Q74 46 82 56 Q72 66 52 66 Z" fill="#F4A20A" opacity="0.88"/>
        <path d="M52 66 Q70 56 76 66 Q68 74 52 74 Z" fill="#E85C0D" opacity="0.85"/>
        {/* Outline strokes for crispness */}
        <path d="M52 16 Q30 10 16 20" stroke="#C44A08" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M52 28 Q26 20 12 32" stroke="#C44A08" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M52 38 Q24 30 10 42" stroke="#C44A08" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M52 16 Q74 8 84 18" stroke="#C44A08" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M52 28 Q76 18 88 30" stroke="#C44A08" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M52 38 Q78 28 88 40" stroke="#C44A08" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        {/* Tip wisps */}
        <path d="M53 76 Q42 80 38 88" stroke="#E85C0D" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M53 76 Q46 82 44 90" stroke="#F4720A" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M53 76 Q50 84 50 92" stroke="#F4A20A" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        {/* Quill on top */}
        <path d="M50 6 Q56 48 54 94" stroke="#f0e0b0" strokeWidth="3.5" fill="none" strokeLinecap="round" opacity="0.85"/>
      </g>
    </svg>
  );
}


export default OrangeFeather;
