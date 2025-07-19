import React from 'react';

type Tool = {
  name: string;
  logoUrl: string;
};

const tools: Tool[] = [
  { name: 'Stripe', logoUrl: '/logos/stripe.svg' },
  { name: 'Twilio', logoUrl: '/logos/twilio.svg' },
  { name: 'Razorpay', logoUrl: '/logos/razorpay.svg' },
  { name: 'OpenAI', logoUrl: '/logos/openai.svg' },
  { name: 'Netlify', logoUrl: '/logos/netlify.svg' },
  // ...add more logos as needed
];

// Optional: Shuffle tools randomly
const shuffledTools = [...tools].sort(() => 0.5 - Math.random());

const WideNetworkCoverageSVG: React.FC = () => {
  const width = 1000;
  const height = 500;
  const hubX = 150;
  const hubY = height / 2;
  const radius = 300;

  const calculatePath = (idx: number) => {
    const t = idx / (shuffledTools.length - 1);
    const angle = t * Math.PI - Math.PI / 2;
    const toX = hubX + radius;
    const toY = hubY + Math.sin(angle) * radius * 0.8;
    const cpX = hubX + radius * 0.4;
    const cpY = hubY + Math.sin(angle) * radius * 1.1;
    return { toX, toY, cpX, cpY };
  };

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <style>{`
          .spoke {
            fill: none;
            stroke: #7890a0;
            stroke-width: 2;
            stroke-dasharray: 200;
            stroke-dashoffset: 200;
            animation: draw 2s ease-out forwards;
          }
          .hub {
            fill: #333;
            stroke: #555;
            stroke-width: 2;
          }
          .tool-logo {
            opacity: 0;
            transform-origin: center;
            animation: fadeIn 0.5s ease-out forwards;
          }
          @keyframes draw {
            to {
              stroke-dashoffset: 0;
            }
          }
          @keyframes fadeIn {
            to {
              opacity: 1;
            }
          }
        `}</style>
      </defs>

      <rect width="100%" height="100%" fill="#111827" rx="8" />
      <circle cx={hubX} cy={hubY} r="40" className="hub" />

      {shuffledTools.map((tool, idx) => {
        const { toX, toY, cpX, cpY } = calculatePath(idx);
        return (
          <g key={tool.name}>
            <path
              d={`M${hubX},${hubY} Q${cpX},${cpY} ${toX},${toY}`}
              className="spoke"
              filter="url(#glow)"
              style={{ animationDelay: `${idx * 0.08}s` }}
            />
            <image
              href={tool.logoUrl}
              x={toX - 20}
              y={toY - 20}
              width={40}
              height={40}
              className="tool-logo"
              style={{ animationDelay: `${idx * 0.1 + 0.5}s` }}
            />
          </g>
        );
      })}
    </svg>
  );
};

export default WideNetworkCoverageSVG;
