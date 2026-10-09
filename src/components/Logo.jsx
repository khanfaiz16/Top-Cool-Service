// src/components/Logo.jsx
import React from 'react';

export default function Logo({ size = 48, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Top Cool Service Emblem"
    >
      <defs>
        {/* Luxury Deep Plum Slate Gradient */}
        <linearGradient id="crestBaseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3A2847" />
          <stop offset="50%" stopColor="#2E1D3A" />
          <stop offset="100%" stopColor="#1E1226" />
        </linearGradient>

        {/* Liquid Tangerine Gradient */}
        <linearGradient id="tangerineFacet" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF855D" />
          <stop offset="60%" stopColor="#F06436" />
          <stop offset="100%" stopColor="#D9491B" />
        </linearGradient>

        {/* Frosted Platinum / Lilac Ribbon Gradient */}
        <linearGradient id="frostedRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="45%" stopColor="#EDE5F4" />
          <stop offset="100%" stopColor="#C4B0D4" />
        </linearGradient>

        {/* Ambient Backlight Glow */}
        <radialGradient id="crestGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F06436" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#F06436" stopOpacity="0" />
        </radialGradient>

        {/* Soft Shadow */}
        <filter id="crestShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#180C20" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* 1. Subtle Outer Ambient Halo */}
      <circle cx="50" cy="50" r="46" fill="url(#crestGlow)" />

      {/* 2. Soft-Curved Diamond Squircle Plaque */}
      <rect
        x="8"
        y="8"
        width="84"
        height="84"
        rx="26"
        fill="url(#crestBaseGrad)"
        stroke="rgba(217, 201, 229, 0.22)"
        strokeWidth="1.8"
        filter="url(#crestShadow)"
      />

      {/* 3. Hairline Technical Inner Inset */}
      <rect
        x="15"
        y="15"
        width="70"
        height="70"
        rx="20"
        fill="none"
        stroke="rgba(217, 201, 229, 0.08)"
        strokeWidth="1"
      />

      {/* 4. The Interlocking "C" Flow Arc (Cooling sweep) */}
      <path
        d="M68 34C63 26 53 23 44 26C32 30 25 42 27 54C29 67 40 75 53 74C63 73 70 66 73 57"
        fill="none"
        stroke="url(#frostedRibbon)"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* 5. The Interlocking "T" Apex (Precision Crossbeam & Stem) */}
      <g stroke="url(#tangerineFacet)" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Top Horizontal Bar with dynamic step */}
        <path d="M34 32H66" />
        {/* Vertical Anchor Stem */}
        <path d="M50 32V60" />
      </g>

      {/* 6. Floating Cooling Facet Spark (Bottom-Right Balance) */}
      <path
        d="M66 43L68.5 48.5L74 51L68.5 53.5L66 59L63.5 53.5L58 51L63.5 48.5L66 43Z"
        fill="url(#frostedRibbon)"
      />

      {/* 7. Center Core Amber Pivot */}
      <circle cx="50" cy="46" r="3.2" fill="#FFFFFF" />
      <circle cx="50" cy="46" r="1.5" fill="#30213A" />
    </svg>
  );
}