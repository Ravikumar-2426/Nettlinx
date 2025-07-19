import React from 'react';

type Tool = {
  name: string;
  logoUrl: string;
};

const tools: Tool[] = [
  { name: 'Google Docs', logoUrl: 'https://d2iyl9s54la9ej.cloudfront.net/heizen-landing-page/logos/logo-sq-white.svg' },
  { name: 'Notion', logoUrl: 'https://d2iyl9s54la9ej.cloudfront.net/heizen-landing-page/tools/1.svg' },
  { name: 'Whatsapp', logoUrl: 'https://d2iyl9s54la9ej.cloudfront.net/heizen-landing-page/tools/2.svg' },
  { name: 'Google Drive', logoUrl: 'https://d2iyl9s54la9ej.cloudfront.net/heizen-landing-page/tools/3.svg' },
  { name: 'Razorpay', logoUrl: 'https://d2iyl9s54la9ej.cloudfront.net/heizen-landing-page/tools/razorpay.png' },
  { name: 'Zapier', logoUrl: 'https://d2iyl9s54la9ej.cloudfront.net/heizen-landing-page/tools/5.svg' },
  { name: 'OpenAI', logoUrl: 'https://d2iyl9s54la9ej.cloudfront.net/heizen-landing-page/tools/6.svg' },
  { name: 'Notion Alt', logoUrl: 'https://d2iyl9s54la9ej.cloudfront.net/heizen-landing-page/tools/7.svg' },
];

const WideNetwork: React.FC = () => {
  const width = 600;
  const height = 600;
  const hubX = 100;
  const hubY = height / 2;

  const toolPositions = tools.map((_, idx) => {
    const spacing = height / (tools.length + 1);
    const y = spacing * (idx + 1);
    const x = width - 80;
    return { x, y };
  });

  return (
    <div className="relative w-full max-w-5xl mx-auto p-6 bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl border border-white/10 overflow-hidden">
      {/* SVG Lines */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="10%" stopColor="white" />
            <stop offset="40%" stopColor="#a8a8a8" />
            <stop offset="100%" stopColor="#a8a8a8" stopOpacity="0" />
          </linearGradient>
        </defs>

        {toolPositions.map((pos, idx) => {
          const controlX = (hubX + pos.x) / 2;
          const controlY = (hubY + pos.y) / 2 + (idx - tools.length / 2) * 20;
          return (
            <path
              key={idx}
              d={`M ${pos.x},${pos.y} Q ${controlX},${controlY} ${hubX},${hubY}`}
              stroke="url(#lineGrad)"
              strokeWidth="2"
              strokeLinecap="round"
              className="animate-draw"
              fill="none"
            />
          );
        })}
      </svg>

      {/* Hub */}
      <div className="absolute left-[40px] top-1/2 -translate-y-1/2 z-10">
        <div className="w-20 h-20 rounded-full border-2 border-neutral-700 bg-gradient-to-br from-[#424242] to-[#2D2D2D] flex items-center justify-center shadow-[0_0_20px_-8px_rgba(0,0,0,0.7)]">
          <img src="/cube.svg" alt="Hub" className="w-8 h-8" />
        </div>
      </div>

      {/* Tool Icons */}
      <div className="absolute right-0 top-0 h-full flex flex-col justify-around items-center pr-4 z-10">
        {tools.map((tool, idx) => (
          <div
            key={tool.name}
            className="w-14 h-14 rounded-full border-2 border-neutral-700 bg-gradient-to-br from-[#424242] to-[#2D2D2D] flex items-center justify-center shadow-[0_0_20px_-10px_rgba(0,0,0,0.8)] grayscale hover:grayscale-0 transition"
          >
            <img src={tool.logoUrl} alt={tool.name} className="w-8 h-8 object-contain p-1" />
          </div>
        ))}
      </div>

      {/* Glow Blob */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-[#38519C] blur-[80px] rounded-full opacity-40 -translate-x-20 -translate-y-20 z-0"></div>

      <style jsx>{`
        @keyframes draw {
          from {
            stroke-dasharray: 400;
            stroke-dashoffset: 400;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        .animate-draw {
          animation: draw 2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default WideNetwork;
