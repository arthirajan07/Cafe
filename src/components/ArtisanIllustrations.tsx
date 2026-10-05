import React from 'react';

export const HeroIllustration: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative overflow-hidden rounded-2xl bg-[#201815] text-[#F3EFEA] ${className}`}>
    <svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
      <defs>
        <linearGradient id="warmLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A3428" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#2A1C15" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#170F0C" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="sunbeam" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#F5DFB8" stopOpacity="0.25" />
          <stop offset="70%" stopColor="#D98A55" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#F5DFB8" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="steamGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F4ECE1" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#F4ECE1" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Deep cafe background */}
      <rect width="800" height="500" fill="url(#warmLight)" />

      {/* Architectural cafe windows with daylight */}
      <rect x="60" y="40" width="180" height="240" rx="90" fill="#2E211A" stroke="#5E4637" strokeWidth="2" />
      <line x1="150" y1="40" x2="150" y2="280" stroke="#5E4637" strokeWidth="2" />
      <line x1="60" y1="160" x2="240" y2="160" stroke="#5E4637" strokeWidth="2" />

      <rect x="280" y="40" width="180" height="240" rx="90" fill="#2E211A" stroke="#5E4637" strokeWidth="2" />
      <line x1="370" y1="40" x2="370" y2="280" stroke="#5E4637" strokeWidth="2" />
      <line x1="280" y1="160" x2="460" y2="160" stroke="#5E4637" strokeWidth="2" />

      {/* Morning sunbeam angle */}
      <polygon points="120,40 540,500 240,500 60,40" fill="url(#sunbeam)" />

      {/* Hanging Brass Pendant Lamp */}
      <line x1="580" y1="0" x2="580" y2="110" stroke="#CBB49C" strokeWidth="2" />
      <path d="M540 140 C540 115 620 115 620 140 Z" fill="#D39758" />
      <circle cx="580" cy="148" r="6" fill="#FCEFD8" />
      <circle cx="580" cy="148" r="30" fill="url(#steamGlow)" />

      {/* Espresso bar counter - Natural solid oak */}
      <rect x="0" y="320" width="800" height="180" fill="#3D291F" />
      <line x1="0" y1="320" x2="800" y2="320" stroke="#875E43" strokeWidth="4" />
      <line x1="0" y1="340" x2="800" y2="340" stroke="#2B1D16" strokeWidth="1" />

      {/* Matte Black La Marzocco Inspired Machine */}
      <rect x="180" y="225" width="220" height="95" rx="8" fill="#1C1816" stroke="#483B33" strokeWidth="2" />
      {/* Chrome details & portafilters */}
      <rect x="200" y="240" width="180" height="16" rx="4" fill="#362E2A" />
      <circle cx="225" cy="248" r="4" fill="#CBB49C" />
      <circle cx="265" cy="248" r="4" fill="#CBB49C" />
      <circle cx="335" cy="248" r="4" fill="#CBB49C" />
      {/* Groupheads */}
      <rect x="235" y="270" width="24" height="25" rx="3" fill="#69564B" />
      <rect x="315" y="270" width="24" height="25" rx="3" fill="#69564B" />
      <path d="M247 295 L247 318" stroke="#1C1816" strokeWidth="6" strokeLinecap="round" />
      <path d="M327 295 L327 318" stroke="#1C1816" strokeWidth="6" strokeLinecap="round" />
      <circle cx="390" cy="260" r="10" fill="#2B221D" stroke="#A77A53" strokeWidth="2" />

      {/* Pour-Over Station */}
      {/* Wooden Dripper Stand */}
      <path d="M470 320 L470 240 L540 240 L540 320" stroke="#77563F" strokeWidth="4" fill="none" />
      {/* Origami Dripper */}
      <polygon points="485,235 525,235 505,270" fill="#E28B59" stroke="#F5B288" strokeWidth="1.5" />
      {/* Glass Carafe */}
      <path d="M490 278 C480 300 480 315 505 315 C530 315 530 300 520 278 Z" fill="#4B3A31" fillOpacity="0.4" stroke="#D3C5B7" strokeWidth="1.5" />
      {/* Coffee inside carafe */}
      <path d="M486 295 C485 308 490 312 505 312 C520 312 525 308 524 295 Z" fill="#63381E" />

      {/* Ceramic Latte Mug with warm steam */}
      <rect x="620" y="275" width="45" height="45" rx="10" fill="#E6DACD" stroke="#BEAF9F" strokeWidth="2" />
      <path d="M665 285 C675 285 675 305 665 305" stroke="#BEAF9F" strokeWidth="3" fill="none" />
      {/* Latte Heart Art in Cup top */}
      <ellipse cx="642" cy="280" rx="18" ry="4" fill="#915B38" />
      <path d="M642 278 C638 276 636 280 642 282 C648 280 646 276 642 278 Z" fill="#F8F3EC" />
      {/* Gentle Steam wisps */}
      <path d="M638 268 C636 255 644 245 640 235" stroke="#F5EDE4" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5" />
      <path d="M645 264 C648 252 642 242 646 230" stroke="#F5EDE4" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4" />

      {/* Olive Tree Branch in Earth Pot */}
      <path d="M80 320 C80 300 70 290 85 280 C95 270 90 250 100 230" stroke="#5E4331" strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="75" cy="285" rx="12" ry="5" transform="rotate(-30 75 285)" fill="#687353" />
      <ellipse cx="98" cy="275" rx="14" ry="6" transform="rotate(20 98 275)" fill="#788461" />
      <ellipse cx="88" cy="255" rx="13" ry="5" transform="rotate(-40 88 255)" fill="#5D6948" />
      <ellipse cx="106" cy="235" rx="11" ry="5" transform="rotate(15 106 235)" fill="#788461" />
      {/* Terracotta pot */}
      <polygon points="65,320 95,320 90,345 70,345" fill="#A45E3E" stroke="#7A3F26" strokeWidth="1.5" />

      {/* Warm Ambient Badging inside image */}
      <rect x="36" y="430" width="230" height="34" rx="17" fill="#150E0C" fillOpacity="0.75" stroke="#453429" strokeWidth="1" />
      <circle cx="52" cy="447" r="4" fill="#65A30D" />
      <text x="64" y="452" fill="#E8DDD2" fontSize="12" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="500">
        Barista Bar Active · Slow Pour Available
      </text>
    </svg>
  </div>
);

export const ProductArt: React.FC<{ category: string; name: string; className?: string }> = ({ category, name, className = '' }) => {
  // Generates domain-authentic visual SVG art for each item category
  if (category === 'signature' || category === 'espresso') {
    return (
      <div className={`relative flex items-center justify-center bg-[#F3EFEA] rounded-xl overflow-hidden p-6 ${className}`}>
        <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-36 object-contain">
          {/* Subtle saucer */}
          <ellipse cx="100" cy="130" rx="65" ry="14" fill="#E4DDD3" stroke="#D3C9BD" strokeWidth="1.5" />
          <ellipse cx="100" cy="128" rx="45" ry="8" fill="#D3C9BD" fillOpacity="0.4" />
          {/* Ceramic Cup */}
          <path d="M60 70 C60 115 78 124 100 124 C122 124 140 115 140 70 Z" fill="#FDFBF7" stroke="#D3C9BD" strokeWidth="2" />
          {/* Cup Handle */}
          <path d="M140 80 C155 80 155 105 140 105" stroke="#D3C9BD" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          {/* Rich Crema / Coffee surface */}
          <ellipse cx="100" cy="72" rx="38" ry="12" fill={name.includes('Hojicha') ? '#596947' : name.includes('Tonic') ? '#9A633F' : '#6F432A'} />
          {/* Latte Art Pattern */}
          {name.includes('Latte') || name.includes('Flat White') || name.includes('Cortado') ? (
            <g transform="translate(100, 72) scale(0.85)">
              <ellipse cx="0" cy="0" rx="20" ry="6" fill="#F8F3EC" />
              <path d="M0 -3 C-7 -1 -9 3 0 5 C9 3 7 -1 0 -3 Z" fill="#DFC8AF" />
              <circle cx="0" cy="2" r="2.5" fill="#F8F3EC" />
            </g>
          ) : (
            <ellipse cx="100" cy="72" rx="32" ry="8" fill="#4B2C1B" fillOpacity="0.7" />
          )}
          {/* Delicate Steam */}
          <path d="M93 55 C90 44 96 35 92 24" stroke="#B05D3B" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.35" />
          <path d="M106 52 C109 42 103 32 107 20" stroke="#B05D3B" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.35" />
        </svg>
      </div>
    );
  }

  if (category === 'bakery') {
    return (
      <div className={`relative flex items-center justify-center bg-[#F5EFE7] rounded-xl overflow-hidden p-6 ${className}`}>
        <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-36 object-contain">
          {/* Parchment liner */}
          <rect x="40" y="45" width="120" height="90" rx="6" transform="rotate(3 100 90)" fill="#EDE3D5" stroke="#DCCEC0" strokeWidth="1" strokeDasharray="3 3" />
          {/* Croissant / Bun Golden Lamination */}
          <path d="M50 100 C50 65 75 55 100 55 C125 55 150 65 150 100 C140 108 120 102 100 102 C80 102 60 108 50 100 Z" fill="#D38A4B" stroke="#B97034" strokeWidth="2" />
          <path d="M65 92 C75 70 88 64 100 64 C112 64 125 70 135 92" stroke="#B97034" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M80 84 C86 74 94 71 100 71 C106 71 114 74 120 84" stroke="#F1B679" strokeWidth="2" fill="none" strokeLinecap="round" />
          {/* Sugar / Flour dust flecks */}
          <circle cx="85" cy="74" r="1.5" fill="#FAF6EE" />
          <circle cx="102" cy="67" r="1.8" fill="#FAF6EE" />
          <circle cx="115" cy="76" r="1.5" fill="#FAF6EE" />
          <circle cx="95" cy="85" r="1.5" fill="#FAF6EE" />
          {/* Butter shine */}
          <ellipse cx="98" cy="62" rx="14" ry="3" fill="#FCE5B5" fillOpacity="0.6" />
        </svg>
      </div>
    );
  }

  if (category === 'brunch') {
    return (
      <div className={`relative flex items-center justify-center bg-[#F3EFEA] rounded-xl overflow-hidden p-6 ${className}`}>
        <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-36 object-contain">
          {/* Ceramic artisan plate */}
          <circle cx="100" cy="80" r="58" fill="#FAF7F2" stroke="#D8CEBE" strokeWidth="2" />
          <circle cx="100" cy="80" r="44" fill="#F3EBE1" />
          {/* Sourdough toast slice */}
          <rect x="70" y="55" width="60" height="50" rx="8" fill="#C98F56" stroke="#9E6835" strokeWidth="2" transform="rotate(-6 100 80)" />
          {/* Avocado or egg topping */}
          {name.includes('Avocado') ? (
            <g transform="translate(80, 62)">
              <ellipse cx="12" cy="16" rx="9" ry="14" transform="rotate(-25 12 16)" fill="#789A50" />
              <ellipse cx="22" cy="18" rx="8" ry="13" transform="rotate(-15 22 18)" fill="#8EB062" />
              <circle cx="18" cy="18" r="2" fill="#E85D45" />
              <circle cx="28" cy="14" r="1.5" fill="#3D291F" />
              <circle cx="10" cy="24" r="1.5" fill="#3D291F" />
            </g>
          ) : (
            <g transform="translate(80, 64)">
              <ellipse cx="16" cy="16" rx="16" ry="12" fill="#F9CE56" />
              <path d="M8 14 C12 10 22 10 26 14 C24 22 10 22 8 14 Z" fill="#F6B828" />
              <circle cx="14" cy="14" r="1" fill="#3D291F" />
              <circle cx="20" cy="18" r="1.2" fill="#2E4A28" />
            </g>
          )}
        </svg>
      </div>
    );
  }

  // Coffee Beans (250g)
  return (
    <div className={`relative flex items-center justify-center bg-[#EDE7DD] rounded-xl overflow-hidden p-6 ${className}`}>
      <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-36 object-contain">
        {/* Kraft valve pouch */}
        <polygon points="75,25 125,25 130,135 70,135" fill="#C6A889" stroke="#9A7B5F" strokeWidth="2" />
        <rect x="73" y="22" width="54" height="6" rx="1.5" fill="#7E6047" />
        {/* Front label card */}
        <rect x="80" y="48" width="40" height="55" rx="2" fill="#FAF7F2" stroke="#C2B3A0" strokeWidth="1" />
        <line x1="85" y1="58" x2="115" y2="58" stroke="#3D2B20" strokeWidth="2" />
        <line x1="85" y1="65" x2="110" y2="65" stroke="#B05D3B" strokeWidth="1.5" />
        <line x1="85" y1="72" x2="105" y2="72" stroke="#918476" strokeWidth="1" />
        <line x1="85" y1="78" x2="112" y2="78" stroke="#918476" strokeWidth="1" />
        <line x1="85" y1="84" x2="100" y2="84" stroke="#918476" strokeWidth="1" />
        {/* Roasted coffee beans scattered near pouch */}
        <g transform="translate(132, 118)">
          <ellipse cx="6" cy="6" rx="7" ry="5" transform="rotate(25 6 6)" fill="#442817" />
          <path d="M3 6 C6 4 6 8 9 6" stroke="#2B150A" strokeWidth="1" />
        </g>
        <g transform="translate(56, 122)">
          <ellipse cx="6" cy="6" rx="6" ry="4.5" transform="rotate(-20 6 6)" fill="#4B2E1C" />
          <path d="M3 6 C6 4 6 8 9 6" stroke="#2B150A" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
};
