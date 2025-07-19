import React from "react";

const HeroServicesSVG: React.FC = () => {
  return (
    <svg
      viewBox="0 0 1440 600"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-0 w-full h-full z-0"
    >
      <defs>
        {/* Gradient */}
        <linearGradient id="servicesGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f0fdfa" />
          <stop offset="100%" stopColor="#ccfbf1" />
        </linearGradient>

        {/* Abstract Pattern - Hexagonal Network */}
        <pattern
          id="servicesPattern"
          x="0"
          y="0"
          width="80"
          height="80"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="10" cy="10" r="3" fill="#0e7490" />
          <line x1="10" y1="10" x2="60" y2="40" stroke="#5eead4" strokeWidth="1" />
          <circle cx="60" cy="40" r="3" fill="#0e7490" />
        </pattern>
      </defs>

      {/* Background Fill */}
      <rect width="100%" height="100%" fill="url(#servicesGradient)" />

      {/* Pattern Overlay */}
      <rect width="100%" height="100%" fill="url(#servicesPattern)" opacity="0.05" />

      {/* Decorative Waves */}
      <path
        d="M0,300 C400,250 1040,400 1440,320 L1440,600 L0,600 Z"
        fill="#14b8a6"
        opacity="0.2"
      />
      <path
        d="M0,380 C500,450 900,300 1440,380 L1440,600 L0,600 Z"
        fill="#2dd4bf"
        opacity="0.15"
      />
    </svg>
  );
};

export default HeroServicesSVG;
