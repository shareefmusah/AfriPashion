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

// Real fashion image placeholders using Unsplash
const FASHION_IMAGES = {
  kaftan:
    "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&q=80&auto=format&fit=crop",
  jacket:
    "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600&q=80&auto=format&fit=crop",
  collectionHero:
    "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=1200&q=80&auto=format&fit=crop",
  atelier:
    "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80&auto=format&fit=crop",
  fabric:
    "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80&auto=format&fit=crop",
  craftDetail:
    "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800&q=80&auto=format&fit=crop",
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