import React from "react";

const AboutSectionBackground: React.FC = () => {
  return (
    <svg
      viewBox="0 0 1440 600"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-0 w-full h-full z-0"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>

        <pattern
          id="circuit"
          x="0"
          y="0"
          width="60"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="5" cy="5" r="2" fill="#38bdf8" />
          <line x1="5" y1="5" x2="30" y2="30" stroke="#94a3b8" strokeWidth="1" />
          <circle cx="30" cy="30" r="2" fill="#38bdf8" />
        </pattern>
      </defs>

      {/* Gradient Background */}
      <rect width="100%" height="100%" fill="url(#gradient)" />

      {/* Pattern Overlay */}
      <rect width="100%" height="100%" fill="url(#circuit)" opacity="0.05" />

      {/* Decorative Waves */}
      <path
        d="M0,320 C360,400 1080,200 1440,300 L1440,600 L0,600 Z"
        fill="#0ea5e9"
        opacity="0.15"
      />
      <path
        d="M0,400 C400,500 1040,300 1440,400 L1440,600 L0,600 Z"
        fill="#0284c7"
        opacity="0.1"
      />
    </svg>
  );
};

export default AboutSectionBackground;
