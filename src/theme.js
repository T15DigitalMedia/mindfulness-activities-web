// ─── THEME ────────────────────────────────────────────────────────────────────
export const SKY = "#7EC8E3";
export const DARK_NAVY = "#1a2a4a";

export const globalStyles = `

  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: Verdana, Geneva, sans-serif; background: ${SKY}; overflow: hidden; }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes cloudDrift {
    0%   { transform: translateX(0); }
    50%  { transform: translateX(30px); }
    100% { transform: translateX(0); }
  }
  @keyframes featherSway {
    0%   { transform: rotate(-12deg); }
    50%  { transform: rotate(12deg); }
    100% { transform: rotate(-12deg); }
  }
  @keyframes rainbowArc {
    from { clip-path: inset(0 100% 0 0); }
    to   { clip-path: inset(0 0% 0 0); }
  }
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50%       { transform: scale(1.04); }
  }
`;
