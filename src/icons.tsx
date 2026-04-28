// Custom SVG icons — generated from svg_description fields in plano.json.
// No icon library is used (per implementation_notes_for_ai).
// Default color inherits via currentColor; each icon uses 2px strokes and transparent background.

import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (p: IconProps) => ({
  xmlns: 'http://www.w3.org/2000/svg',
  width: p.size ?? 32,
  height: p.size ?? 32,
  viewBox: '0 0 32 32',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  ...p,
});

// ── Trust badges (hero) ─────────────────────────────────────────────────────

export const ShieldThirtyDaysIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M16 3 L27 7 V15 C27 22 22 27 16 29 C10 27 5 22 5 15 V7 Z" />
    <text x="16" y="19" textAnchor="middle" fontSize="8" fontWeight="700" stroke="none" fill="currentColor" fontFamily="Inter, sans-serif">30</text>
    <path d="M25 5 L27 4 M28 8 L30 7 M4 8 L2 7" strokeWidth="1.2" />
  </svg>
);

export const FlaskClinicalIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 4 H20 M13 4 V12 L7 24 C6 26 7 28 9 28 H23 C25 28 26 26 25 24 L19 12 V4" />
    <circle cx="16" cy="22" r="1" fill="currentColor" stroke="none" />
    <path d="M14 18 C15 17 17 17 18 18" strokeWidth="1.2" />
  </svg>
);

export const DermatologistApprovedIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="13" cy="14" r="9" />
    <path d="M13 9 V19 M8 14 H18" />
    <circle cx="24" cy="22" r="5" fill="white" />
    <path d="M21.5 22 L23.2 23.6 L26.4 20.4" />
  </svg>
);

export const FifteenMinLiftIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="14" cy="16" r="10" />
    <path d="M14 10 V16 L18 18" />
    <path d="M22 10 C25 8 27 9 28 11 M28 11 L26 10.5 M28 11 L27.5 13" />
  </svg>
);

// ── Core benefits ───────────────────────────────────────────────────────────

export const DeepLayersIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 8 H29" />
    <path d="M3 16 H29" />
    <path d="M3 24 H29" />
    <path d="M16 4 C14 7 18 10 16 13 C14 16 18 19 16 22 C14 25 16 28 16 28" />
    <path d="M13 26 L16 28 L19 26" />
  </svg>
);

export const TwentyFourHourHydrationIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M14 4 C10 10 6 14 6 19 C6 24 10 27 14 27 C18 27 22 24 22 19 C22 14 18 10 14 4 Z" />
    <path d="M14 4 C12 10 8 14 8 19 C8 23 10 25 14 25" strokeWidth="1" opacity="0.5" />
    <circle cx="25" cy="25" r="5" fill="white" />
    <text x="25" y="27" textAnchor="middle" fontSize="5" fontWeight="700" stroke="none" fill="currentColor" fontFamily="Inter">24h</text>
  </svg>
);

export const GentleShieldIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M16 3 C11 5 6 6 6 6 V16 C6 22 10 26 16 29 C22 26 26 22 26 16 V6 C26 6 21 5 16 3 Z" />
    <path d="M16 12 C14 14 12 14 12 17 C12 19 14 20 16 18 C18 20 20 19 20 17 C20 14 18 14 16 12 Z" />
    <path d="M16 14 V18" strokeWidth="1" />
  </svg>
);

export const SmoothTextureIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 8 Q7 5 11 8 T19 8 T27 8" />
    <path d="M3 14 Q7 11 11 14 T19 14 T27 14" />
    <path d="M3 22 H29" />
    <path d="M3 26 H29" />
  </svg>
);

export const MoleculeIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M16 6 L24 10 V20 L16 24 L8 20 V10 Z" />
    <circle cx="16" cy="6" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="24" cy="10" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="24" cy="20" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="16" cy="24" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="8" cy="20" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="8" cy="10" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="4" cy="4" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="28" cy="4" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="28" cy="28" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="4" cy="28" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

export const AllInOneIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="7" />
    <circle cx="20" cy="12" r="7" />
    <circle cx="16" cy="20" r="7" />
    <path d="M16 14 L17 17 L20 17 L17.5 19 L18.5 22 L16 20.3 L13.5 22 L14.5 19 L12 17 L15 17 Z" fill="currentColor" strokeWidth="0.5" />
  </svg>
);

// ── Ingredients (gold) ──────────────────────────────────────────────────────

export const CollagenThreadsIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 6 Q11 10 16 6 T26 6" />
    <path d="M6 12 Q11 16 16 12 T26 12" />
    <path d="M6 18 Q11 22 16 18 T26 18" />
    <path d="M6 24 Q11 28 16 24 T26 24" />
    <path d="M9 4 L9 28" strokeWidth="1" opacity="0.4" />
    <path d="M23 4 L23 28" strokeWidth="1" opacity="0.4" />
  </svg>
);

export const NineGFIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="16" cy="6" r="2" />
    <circle cx="24" cy="10" r="2" />
    <circle cx="26" cy="18" r="2" />
    <circle cx="22" cy="25" r="2" />
    <circle cx="16" cy="27" r="2" />
    <circle cx="10" cy="25" r="2" />
    <circle cx="6" cy="18" r="2" />
    <circle cx="8" cy="10" r="2" />
    <circle cx="16" cy="16" r="2" />
    <path d="M16 8 L24 10 L26 18 L22 25 L16 27 L10 25 L6 18 L8 10 Z" opacity="0.4" />
  </svg>
);

export const ThirtyPeptidesIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 16 Q7 10 11 16 T19 16 T27 16 Q29 14 30 16" />
    <circle cx="4" cy="14" r="1.4" fill="currentColor" stroke="none" />
    <circle cx="8" cy="13" r="1.4" fill="currentColor" stroke="none" />
    <circle cx="12" cy="16" r="1.4" fill="currentColor" stroke="none" />
    <circle cx="16" cy="19" r="1.4" fill="currentColor" stroke="none" />
    <circle cx="20" cy="16" r="1.4" fill="currentColor" stroke="none" />
    <circle cx="24" cy="13" r="1.4" fill="currentColor" stroke="none" />
    <circle cx="28" cy="14" r="1.4" fill="currentColor" stroke="none" />
  </svg>
);

export const EGFIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="8" cy="16" r="5" />
    <circle cx="24" cy="16" r="5" />
    <circle cx="8" cy="16" r="1.4" fill="currentColor" stroke="none" />
    <circle cx="24" cy="16" r="1.4" fill="currentColor" stroke="none" />
    <path d="M13 16 L19 16" />
    <path d="M17 13 L19 16 L17 19" />
  </svg>
);

export const SilkPeptidesIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M16 6 C11 6 8 10 8 15 C8 21 12 25 16 25 C20 25 24 21 24 15 C24 10 21 6 16 6 Z" />
    <path d="M12 10 Q13 14 16 14 T20 10" strokeWidth="1" opacity="0.5" />
    <path d="M16 6 Q18 2 22 3 Q26 5 28 9" />
    <circle cx="28" cy="9" r="1" fill="currentColor" stroke="none" />
  </svg>
);

// ── How to use ──────────────────────────────────────────────────────────────

export const TowelIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 14 H26 L24 26 H8 Z" />
    <path d="M6 14 L8 10 H24 L26 14" />
    <path d="M10 18 V24 M14 18 V24 M18 18 V24 M22 18 V24" strokeWidth="1" opacity="0.5" />
    <circle cx="9" cy="6" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="13" cy="4" r="1" fill="currentColor" stroke="none" />
    <circle cx="17" cy="5" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

export const HandDropsIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M10 22 V18 C10 15 12 14 13 16 V12 C13 10 15 10 15 12 V11 C15 9 17 9 17 11 V12 C17 10 19 10 19 12 V18 C19 22 22 22 22 26 L11 26 C11 24 10 24 10 22 Z" />
    <path d="M8 6 L8 10 M6 8 L10 8" />
    <circle cx="14" cy="4" r="1" fill="currentColor" stroke="none" />
    <circle cx="20" cy="6" r="1" fill="currentColor" stroke="none" />
    <path d="M26 18 L28 16 M26 22 L28 22 M26 14 L28 12" />
  </svg>
);

export const FifteenMinSparkleIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="14" cy="16" r="10" />
    <path d="M14 10 V16 L18 18" />
    <path d="M26 8 L27 10 L29 11 L27 12 L26 14 L25 12 L23 11 L25 10 Z" fill="currentColor" strokeWidth="0.5" />
  </svg>
);

// ── Comparison syringe (dark green) ────────────────────────────────────────

export const SyringeIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 20 L8 16" />
    <path d="M6 22 L10 18" />
    <rect x="8" y="12" width="12" height="8" transform="rotate(-45 14 16)" />
    <path d="M18 6 L26 14" />
    <path d="M20 4 L28 12" />
    <path d="M28 12 L30 10" />
    <path d="M2 28 Q3 26 4 28" />
    <path d="M3 30 L3 27" strokeWidth="1" />
  </svg>
);

// ── Chat / social / action icons ────────────────────────────────────────────

export const StarIcon = (p: IconProps) => (
  <svg {...base(p)} fill="currentColor" stroke="none">
    <path d="M16 3 L19.5 11.5 L28.5 12.3 L21.8 18.3 L23.8 27 L16 22.5 L8.2 27 L10.2 18.3 L3.5 12.3 L12.5 11.5 Z" />
  </svg>
);

export const CheckIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 16 L13 23 L26 9" strokeWidth="2.5" />
  </svg>
);

export const XIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M8 8 L24 24 M24 8 L8 24" strokeWidth="2.5" />
  </svg>
);

export const ChevronDownIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M8 12 L16 20 L24 12" />
  </svg>
);

export const ChevronLeftIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M20 8 L12 16 L20 24" />
  </svg>
);

export const ChevronRightIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 8 L20 16 L12 24" />
  </svg>
);

export const ArrowDownIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M16 6 V26 M8 18 L16 26 L24 18" />
  </svg>
);

export const ArrowRightIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 16 H26 M18 8 L26 16 L18 24" />
  </svg>
);

export const CartIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 6 H8 L11 22 H26 L28 10 H10" />
    <circle cx="13" cy="27" r="1.5" />
    <circle cx="24" cy="27" r="1.5" />
  </svg>
);

export const MenuIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 10 H27 M5 16 H27 M5 22 H27" />
  </svg>
);

export const VerifiedCheckIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M16 3 L20 6 L25 5 L27 10 L30 13 L28 18 L29 23 L24 25 L21 29 L16 27 L11 29 L8 25 L3 23 L4 18 L2 13 L5 10 L7 5 L12 6 Z" />
    <path d="M11 16 L15 20 L22 12" strokeWidth="2.5" />
  </svg>
);

export const WarningIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M16 4 L29 26 H3 Z" />
    <path d="M16 12 V18" strokeWidth="2.5" />
    <circle cx="16" cy="22" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

export const SparkleIcon = (p: IconProps) => (
  <svg {...base(p)} fill="currentColor" stroke="none">
    <path d="M16 3 L18 13 L28 16 L18 19 L16 29 L14 19 L4 16 L14 13 Z" />
  </svg>
);

export const WaterDropIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M16 4 C12 10 8 14 8 19 C8 24 12 28 16 28 C20 28 24 24 24 19 C24 14 20 10 16 4 Z" />
  </svg>
);

export const HeartIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M16 27 C16 27 5 20 5 12 C5 8 8 5 12 5 C14 5 15 6 16 8 C17 6 18 5 20 5 C24 5 27 8 27 12 C27 20 16 27 16 27 Z" />
  </svg>
);

// ── Social icons ────────────────────────────────────────────────────────────

export const FacebookIcon = (p: IconProps) => (
  <svg {...base(p)} fill="currentColor" stroke="none">
    <path d="M18 29 V17 H22 L23 12 H18 V9 C18 7.5 18.5 6.5 21 6.5 H23 V2 C22 2 20.5 2 19 2 C15 2 13 4.5 13 9 V12 H9 V17 H13 V29 Z" />
  </svg>
);

export const InstagramIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="4" y="4" width="24" height="24" rx="6" />
    <circle cx="16" cy="16" r="6" />
    <circle cx="23" cy="9" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

export const TwitterIcon = (p: IconProps) => (
  <svg {...base(p)} fill="currentColor" stroke="none">
    <path d="M5 5 L13 16 L5 27 H8 L14.5 19.5 L19 27 H27 L18.5 14.5 L26 5 H23 L17 12.5 L12 5 Z" />
  </svg>
);

export const YoutubeIcon = (p: IconProps) => (
  <svg {...base(p)} fill="currentColor" stroke="none">
    <path d="M4 10 C4 8 6 7 7 7 H25 C26 7 28 8 28 10 V22 C28 24 26 25 25 25 H7 C6 25 4 24 4 22 Z" />
    <path d="M14 12 L21 16 L14 20 Z" fill="white" />
  </svg>
);

export const TiktokIcon = (p: IconProps) => (
  <svg {...base(p)} fill="currentColor" stroke="none">
    <path d="M20 3 V19 C20 22 17 24 14 24 C11 24 9 22 9 19 C9 17 10.5 15 13 14.5 V18 C12 18.5 11.5 19 11.5 19.5 C11.5 20.5 12.5 21 14 21 C15.5 21 16.5 20.5 16.5 19 V3 H20 C20 6 22.5 8 25 8 V11 C23 11 21 10 20 9 Z" />
  </svg>
);

export const PinterestIcon = (p: IconProps) => (
  <svg {...base(p)} fill="currentColor" stroke="none">
    <path d="M16 3 C9 3 4 8 4 14 C4 18 6 21 9 22 C9 21.5 9 21 9.5 20 L10.5 16 C10.5 16 10 15 10 14 C10 11.5 12 10 14 10 C16 10 17 11 17 13 C17 15 16 17 15 17 C14 17 13 16 13.5 15 C14 13 14.5 12 14.5 11 C14.5 10 14 10 13.5 10 C12 10 11 12 11 14 L11 15 L9.5 21 C9 22.5 9.5 24 10 25 C11 23 12 21 12 21 L13 17 C13.5 17.5 14.5 18 15.5 18 C18.5 18 21 15 21 11 C21 7 18 5 15 5 C10 5 7 8 7 12 C7 13 8 15 9 15.5 C9 16 9 16 8.5 16 C8 16.5 7 15 7 12.5 C7 8 11 4 16 4 C21 4 24 7 24 11 C24 16 21 19 17 19 C15 19 13 18 13 18 C13 18 12 22 11.5 23 C11 24.5 10 26 9 27 C11 28 13 29 16 29 C23 29 28 24 28 17 C28 10 23 3 16 3 Z" />
  </svg>
);

// ── Payment icons ──────────────────────────────────────────────────────────

export const VisaIcon = () => (
  <div className="h-6 w-12 flex items-center justify-center bg-white border border-gray-200 rounded text-[10px] font-bold text-blue-800 tracking-wider">VISA</div>
);
export const MastercardIcon = () => (
  <div className="h-6 w-12 flex items-center justify-center bg-white border border-gray-200 rounded">
    <div className="w-4 h-4 rounded-full bg-red-500 -mr-1.5 opacity-90" />
    <div className="w-4 h-4 rounded-full bg-yellow-500 opacity-90" />
  </div>
);
export const AmexIcon = () => (
  <div className="h-6 w-12 flex items-center justify-center bg-[#006FCF] text-white rounded text-[8px] font-bold">AMEX</div>
);
export const PixIcon = () => (
  <div className="h-6 w-12 flex items-center justify-center bg-white border border-gray-200 rounded text-[10px] font-bold text-[#32BCAD]">PIX</div>
);
export const BoletoIcon = () => (
  <div className="h-6 w-12 flex items-center justify-center bg-white border border-gray-200 rounded gap-0.5">
    <div className="w-0.5 h-3 bg-black" />
    <div className="w-1 h-3 bg-black" />
    <div className="w-0.5 h-3 bg-black" />
    <div className="w-1.5 h-3 bg-black" />
    <div className="w-0.5 h-3 bg-black" />
    <div className="w-1 h-3 bg-black" />
  </div>
);
export const MercadoPagoIcon = () => (
  <div className="h-6 w-16 flex items-center justify-center bg-[#00B1EA] text-white rounded text-[8px] font-bold">MERCADO PAGO</div>
);
