import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export const Sparkle = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
  </svg>
);
export const Shield = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
    <path d="M9.5 12l1.8 1.8L15 10" />
  </svg>
);
export const Leaf = (p: P) => (
  <svg {...base} {...p}>
    <path d="M20 4S8 4 6 12c-1.2 4.8 2 7 2 7s8-1 11-9c.8-2.2 1-6 1-6z" />
    <path d="M8 19c2-5 5-8 9-10" />
  </svg>
);
export const ArrowRight = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
export const Phone = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6.5 4h3l1.5 4-2 1.5a12 12 0 005.5 5.5l1.5-2 4 1.5v3a2 2 0 01-2.2 2A16 16 0 014.5 6.2 2 2 0 016.5 4z" />
  </svg>
);
export const Pin = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);
export const Mail = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M4 7l8 6 8-6" />
  </svg>
);
export const Bolt = (p: P) => (
  <svg {...base} {...p}>
    <path d="M13 3L5 13h6l-1 8 8-10h-6l1-8z" />
  </svg>
);
export const Plane = (p: P) => (
  <svg {...base} {...p}>
    <path d="M10.5 13.5L4 12l-1 2 5 3 1.5 4 2-1-1.5-6.5L18 8c1.2-1.2 1.8-2.5 1.2-3.1s-1.9 0-3.1 1.2L9.6 12" />
  </svg>
);
export const Menu = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);
export const Close = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);
export const Star = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.8 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2z" />
  </svg>
);
export const Calendar = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="4.5" width="18" height="16" rx="2" />
    <path d="M3 9h18M8 3v3M16 3v3" />
  </svg>
);
// LINE app glyph
export const Line = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 3C6.5 3 2 6.6 2 11c0 3.9 3.5 7.2 8.3 7.9.3.07.76.22.87.5.1.26.07.66.03.92l-.14.84c-.04.25-.2.98.86.53s5.7-3.36 7.78-5.75C20.98 14.4 22 12.8 22 11c0-4.4-4.5-8-10-8zM8.1 13.3H6.1c-.3 0-.5-.24-.5-.53V9.2c0-.3.22-.53.5-.53s.5.24.5.53v3.04h1.5c.3 0 .5.24.5.53s-.22.53-.5.53zm2-.53c0 .3-.22.53-.5.53s-.5-.24-.5-.53V9.2c0-.3.22-.53.5-.53s.5.24.5.53v3.57zm4.4 0c0 .23-.14.43-.36.5a.5.5 0 0 1-.58-.18l-2.05-2.8v2.48c0 .3-.22.53-.5.53s-.5-.24-.5-.53V9.2c0-.23.15-.43.37-.5a.5.5 0 0 1 .57.18l2.05 2.8V9.2c0-.3.22-.53.5-.53s.5.24.5.53v3.57zm3.3-2.31c.3 0 .5.24.5.53s-.22.53-.5.53h-1.5v.72h1.5c.3 0 .5.24.5.53s-.22.53-.5.53h-2c-.3 0-.5-.24-.5-.53V9.2c0-.3.22-.53.5-.53h2c.3 0 .5.24.5.53s-.22.53-.5.53h-1.5v.72h1.5z" />
  </svg>
);
