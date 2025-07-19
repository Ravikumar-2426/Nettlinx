import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface NetworkNode {
  id: string;
  name: string;
  x: number;
  y: number;
  type: 'primary' | 'secondary' | 'tertiary';
}

interface NetworkLink {
  source: string;
  target: string;
  strength: number;
}

const NetworkVisualization: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  // Network nodes representing major cities in Telangana and Andhra Pradesh
  // Coordinates based on India map projection (scaled to canvas)
  const nodes: NetworkNode[] = [
    // Telangana
    { id: 'hyd', name: 'Hyderabad', x: 320, y: 180, type: 'primary' },
    { id: 'sec', name: 'Secunderabad', x: 325, y: 175, type: 'secondary' },
    { id: 'wgl', name: 'Warangal', x: 380, y: 160, type: 'tertiary' },
    { id: 'nzb', name: 'Nizamabad', x: 280, y: 140, type: 'tertiary' },
    { id: 'khm', name: 'Khammam', x: 420, y: 180, type: 'tertiary' },
    { id: 'kar', name: 'Karimnagar', x: 300, y: 120, type: 'tertiary' },
    
    // Andhra Pradesh
    { id: 'vij', name: 'Vijayawada', x: 400, y: 220, type: 'primary' },
    { id: 'viz', name: 'Visakhapatnam', x: 480, y: 160, type: 'primary' },
    { id: 'tir', name: 'Tirupati', x: 340, y: 320, type: 'secondary' },
    { id: 'gun', name: 'Guntur', x: 380, y: 240, type: 'secondary' },
    { id: 'raj', name: 'Rajahmundry', x: 450, y: 200, type: 'tertiary' },
    { id: 'nel', name: 'Nellore', x: 360, y: 280, type: 'tertiary' },
    { id: 'kur', name: 'Kurnool', x: 290, y: 260, type: 'tertiary' },
    { id: 'ana', name: 'Anantapur', x: 250, y: 240, type: 'tertiary' },
  ];

  // Network connections
  const links: NetworkLink[] = [
    // Primary hub connections
    { source: 'hyd', target: 'vij', strength: 0.9 },
    { source: 'hyd', target: 'viz', strength: 0.8 },
    { source: 'vij', target: 'viz', strength: 0.7 },
    
    // Secondary connections
    { source: 'hyd', target: 'sec', strength: 0.9 },
    { source: 'hyd', target: 'wgl', strength: 0.6 },
    { source: 'hyd', target: 'nzb', strength: 0.5 },
    { source: 'hyd', target: 'kar', strength: 0.5 },
    { source: 'vij', target: 'gun', strength: 0.7 },
    { source: 'vij', target: 'raj', strength: 0.6 },
    { source: 'viz', target: 'raj', strength: 0.6 },
    
    // Tertiary connections
    { source: 'hyd', target: 'khm', strength: 0.4 },
    { source: 'vij', target: 'tir', strength: 0.6 },
    { source: 'vij', target: 'nel', strength: 0.5 },
    { source: 'tir', target: 'nel', strength: 0.4 },
    { source: 'gun', target: 'kur', strength: 0.4 },
    { source: 'hyd', target: 'ana', strength: 0.3 },
    { source: 'kur', target: 'ana', strength: 0.3 },
  ];

  // Simplified India map outline path (scaled for canvas)
  const drawIndiaMap = (ctx: CanvasRenderingContext2D) => {
    ctx.beginPath();
    
    // India outline (simplified)
    ctx.moveTo(200, 50);   // Kashmir
    ctx.lineTo(180, 80);   // Northwest
    ctx.lineTo(160, 120);  // Pakistan border
    ctx.lineTo(170, 160);  // Gujarat
    ctx.lineTo(190, 200);  // Maharashtra
    ctx.lineTo(200, 240);  // Goa
    ctx.lineTo(220, 280);  // Karnataka
    ctx.lineTo(260, 320);  // Kerala
    ctx.lineTo(280, 340);  // Tamil Nadu
    ctx.lineTo(320, 350);  // Tamil Nadu east
    ctx.lineTo(360, 320);  // Andhra Pradesh south
    ctx.lineTo(400, 290);  // Andhra Pradesh
    ctx.lineTo(440, 260);  // Odisha
    ctx.lineTo(480, 220);  // Coastal AP
    ctx.lineTo(500, 180);  // Bay of Bengal
    ctx.lineTo(520, 140);  // West Bengal
    ctx.lineTo(500, 100);  // Bangladesh border
    ctx.lineTo(480, 80);   // Assam
    ctx.lineTo(460, 60);   // Arunachal Pradesh
    ctx.lineTo(440, 40);   // China border
    ctx.lineTo(400, 30);   // Himachal
    ctx.lineTo(360, 35);   // Uttarakhand
    ctx.lineTo(320, 40);   // UP
    ctx.lineTo(280, 45);   // Haryana
    ctx.lineTo(240, 48);   // Punjab
    ctx.closePath();
    
    // Fill with subtle background
    ctx.fillStyle = 'rgba(25, 76, 178, 0.08)';
    ctx.fill();
    
    // Draw border
    ctx.strokeStyle = 'rgba(25, 76, 178, 0.3)';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Highlight Telangana and Andhra Pradesh regions
    ctx.beginPath();
    ctx.moveTo(280, 160);  // Telangana outline
    ctx.lineTo(320, 150);
    ctx.lineTo(360, 170);
    ctx.lineTo(400, 180);
    ctx.lineTo(420, 200);
    ctx.lineTo(440, 240);
    ctx.lineTo(400, 280);
    ctx.lineTo(360, 290);
    ctx.lineTo(320, 300);
    ctx.lineTo(280, 280);
    ctx.lineTo(260, 240);
    ctx.lineTo(270, 200);
    ctx.closePath();
    
    ctx.fillStyle = 'rgba(255, 142, 0, 0.15)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 142, 0, 0.5)';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    
    // Add state labels
    ctx.fillStyle = 'rgba(25, 76, 178, 0.7)';
    ctx.font = 'bold 14px system-ui';
    ctx.textAlign = 'center';
    
    // Telangana label
    ctx.fillText('TELANGANA', 320, 180);
    
    // Andhra Pradesh label
    ctx.fillText('ANDHRA PRADESH', 380, 250);
    
    // Other major states (subtle)
    ctx.fillStyle = 'rgba(25, 76, 178, 0.4)';
    ctx.font = '10px system-ui';
    ctx.fillText('Karnataka', 240, 280);
    ctx.fillText('Tamil Nadu', 300, 330);
    ctx.fillText('Maharashtra', 200, 200);
    ctx.fillText('Odisha', 460, 200);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;
    let pulsePhase = 0;

    const animate = () => {
      time += 0.016;
      pulsePhase += 0.02;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, 'rgba(25, 76, 178, 0.1)');
      gradient.addColorStop(1, 'rgba(25, 76, 178, 0.05)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw India map
      drawIndiaMap(ctx);

      // Draw animated network links
      links.forEach((link, index) => {
        const sourceNode = nodes.find(n => n.id === link.source);
        const targetNode = nodes.find(n => n.id === link.target);
        
        if (sourceNode && targetNode) {
          // Animated data flow
          const flowPhase = (time * 2 + index * 0.5) % (Math.PI * 2);
          const flowIntensity = (Math.sin(flowPhase) + 1) * 0.5;
          
          // Draw connection line
          ctx.beginPath();
          ctx.moveTo(sourceNode.x, sourceNode.y);
          ctx.lineTo(targetNode.x, targetNode.y);
          ctx.strokeStyle = `rgba(255, 142, 0, ${0.3 + flowIntensity * 0.4})`;
          ctx.lineWidth = 1 + flowIntensity * 2;
          ctx.stroke();
          
          // Draw animated data packet
          const packetProgress = (time * 0.5 + index * 0.3) % 1;
          const packetX = sourceNode.x + (targetNode.x - sourceNode.x) * packetProgress;
          const packetY = sourceNode.y + (targetNode.y - sourceNode.y) * packetProgress;
          
          ctx.beginPath();
          ctx.arc(packetX, packetY, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 142, 0, ${0.7 + flowIntensity * 0.3})`;
          ctx.fill();
        }
      });

      // Draw network nodes
      nodes.forEach((node, index) => {
        const pulse = Math.sin(pulsePhase + index * 0.2) * 0.3 + 0.7;
        
        // Node colors based on type
        const colors = {
          primary: '#194cb2',
          secondary: '#ff8e00',
          tertiary: '#4f46e5'
        };
        
        const sizes = {
          primary: 12,
          secondary: 8,
          tertiary: 6
        };
        
        // Draw node glow
        const glowGradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, sizes[node.type] * 2
        );
        glowGradient.addColorStop(0, `${colors[node.type]}80`);
        glowGradient.addColorStop(1, `${colors[node.type]}00`);
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, sizes[node.type] * 2 * pulse, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.fill();
        
        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, sizes[node.type] * pulse, 0, Math.PI * 2);
        ctx.fillStyle = colors[node.type];
        ctx.fill();
        
        // Draw node border
        ctx.beginPath();
        ctx.arc(node.x, node.y, sizes[node.type] * pulse, 0, Math.PI * 2);
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Draw city names for primary nodes
        if (node.type === 'primary') {
          ctx.fillStyle = '#1f2937';
          ctx.font = 'bold 12px system-ui';
          ctx.textAlign = 'center';
          ctx.fillText(node.name, node.x, node.y - 20);
        }
        
        // Draw city names for secondary nodes (smaller)
        if (node.type === 'secondary') {
          ctx.fillStyle = '#374151';
          ctx.font = '10px system-ui';
          ctx.textAlign = 'center';
          ctx.fillText(node.name, node.x, node.y - 15);
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl overflow-hidden">
      <canvas
        ref={canvasRef}
        width={600}
        height={400}
        className="w-full h-full"
        style={{ imageRendering: 'pixelated' }}
      />
      
      {/* Overlay info */}
      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-gray-200">
        <h3 className="font-semibold text-gray-800 mb-2">Network Coverage Map</h3>
        <div className="space-y-1 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <span>Primary Hubs (Hyderabad, Vijayawada, Visakhapatnam)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
            <span>Secondary Nodes (Tier-2 Cities)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
            <span>Distribution Points (Tier-3 Cities)</span>
          </div>
        </div>
      </div>
      
      {/* Stats overlay */}
      <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-gray-200">
        <div className="text-xs text-gray-600">
          <div className="font-semibold text-gray-800 mb-1">Network Status</div>
          <div className="text-green-600 font-medium">● All systems operational</div>
          <div className="text-gray-600">Average latency: &lt;5ms</div>
          <div className="text-gray-600">Uptime: 99.9%</div>
        </div>
      </div>
      
      {/* Interactive hint */}
      <div className="absolute top-4 right-4 bg-primary/90 text-white rounded-lg p-2 shadow-lg">
        <div className="text-xs font-medium">Live Network Activity</div>
        <div className="text-xs opacity-80">Real-time data flow visualization</div>
      </div>
    </div>
  );
};

export default NetworkVisualization;