export default function StitchLine({ color = "#C9A24B", opacity = 0.55 }) {
  return (
    <svg viewBox="0 0 400 16" preserveAspectRatio="none" className="w-full h-4" aria-hidden="true">
      <line x1="0" y1="8" x2="400" y2="8" stroke={color} strokeOpacity={opacity} strokeWidth="1.5" strokeDasharray="10 8" />
      {[20, 100, 180, 260, 340].map((x, i) => (
        <g key={i} stroke={color} strokeOpacity={opacity} strokeWidth="1.5">
          <line x1={x - 3} y1={4} x2={x + 3} y2={12} />
          <line x1={x + 3} y1={4} x2={x - 3} y2={12} />
        </g>
      ))}
    </svg>
  );
}
