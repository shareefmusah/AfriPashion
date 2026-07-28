export default function Monogram({ size = 40, color = "#C9A24B" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <path d="M20 8 C 32 8, 34 20, 44 28 C 52 34, 58 26, 66 18" stroke={color} strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <path d="M44 28 C 40 40, 30 46, 30 58 C 30 70, 40 76, 40 86" stroke={color} strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <circle cx="70" cy="30" r="16" stroke={color} strokeWidth="3.5" fill="none" />
      <path d="M64 24 L76 36 M76 24 L64 36" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}
