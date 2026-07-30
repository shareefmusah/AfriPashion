export function KaftanArt({ stroke = "#F3ECE0", className = "" }) {
  return (
    <svg viewBox="0 0 220 420" className={className} fill="none" aria-hidden="true">
      <ellipse cx="110" cy="34" rx="26" ry="30" stroke={stroke} strokeWidth="2" />
      <path
        d="M84 60 C 60 78, 40 96, 34 140 L 30 210 L 46 214 L 54 150
           C 56 260, 56 330, 62 404 L 158 404 C 164 330, 164 260, 166 150
           L 174 214 L 190 210 L 186 140 C 180 96, 160 78, 136 60"
        stroke={stroke} strokeWidth="2" strokeLinejoin="round"
      />
      <path d="M110 64 L110 130" stroke={stroke} strokeWidth="1.4" strokeDasharray="3 5" />
      <path d="M96 64 C 96 78, 124 78, 124 64" stroke={stroke} strokeWidth="1.6" />
    </svg>
  );
}

export function JacketArt({ stroke = "#F3ECE0", className = "" }) {
  return (
    <svg viewBox="0 0 220 420" className={className} fill="none" aria-hidden="true">
      <ellipse cx="110" cy="34" rx="24" ry="28" stroke={stroke} strokeWidth="2" />
      <path
        d="M78 58 L142 58 C 150 58, 156 66, 156 76 L166 190 L150 196
           L142 116 L146 300 C 146 340, 138 360, 130 388 L90 388
           C 82 360, 74 340, 74 300 L78 116 L70 196 L54 190 L64 76
           C 64 66, 70 58, 78 58 Z"
        stroke={stroke} strokeWidth="2" strokeLinejoin="round"
      />
      <path d="M96 56 C 100 66, 120 66, 124 56" stroke={stroke} strokeWidth="1.8" />
      {[86, 116, 146, 176, 206].map((y, i) => (
        <circle key={i} cx="110" cy={y} r="2.4" fill={stroke} />
      ))}
    </svg>
  );
}

// Local image assets replaced as requested
const FASHION_IMAGES = {
  heroVideo: "/tailor3.png",
  kaftan: "/tailor1.jpg",
  jacket: "/tailor2.jpg",
  collectionHero: "/tailor3.png",
  atelier: "/tailor1.jpg",
  fabric: "/african wear.jpg",
  craftDetail: "/african wear1.jpg",
  processDetail: "/african wear3.jpg",
  contactAtelier: "/tailor2.jpg",
  tailor1: "/tailor1.jpg",
  tailor2: "/tailor2.jpg",
  tailor3: "/tailor3.png",
  africanWear: "/african wear.jpg",
  africanWear1: "/african wear1.jpg",
  africanWear3: "/african wear3.jpg",
};

export function GarmentImage({ src, alt = "", className = "" }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`object-cover ${className}`}
      onError={(e) => {
        e.target.style.display = "none";
      }}
    />
  );
}

export { FASHION_IMAGES };