import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Line, Text } from '@react-three/drei';
import * as THREE from 'three';
import indiaGeo from './india.geo.json';
import { Geometry } from 'three-stdlib';
// client/src/components/svgs/NetworkGlobe.tsx
/* ---------- Helper: animated gradient background ---------- */
function GradientBackground() {
  const ref = useRef<THREE.Mesh>(null!);
  const topColor = new THREE.Color('#ff5e00'); // orange
  const bottomColor = new THREE.Color('#0066ff'); // blue

  useFrame(({ clock }) => {
    const t = Math.sin(clock.elapsedTime * 0.2) * 0.5 + 0.5;
    ref.current.material.color.lerpColors(topColor, bottomColor, t);
  });

  return (
    <mesh ref={ref} position={[0, 0, -20]}>
      <planeGeometry args={[100, 100]} />
      <meshBasicMaterial side={THREE.BackSide} />
    </mesh>
  );
}

/* ---------- Helper: pulsing node ---------- */
function CityNode({
  position,
  name,
}: {
  position: [number, number, number];
  name: string;
}) {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = React.useState(false);

  useFrame(({ clock }) => {
    const s = 1 + Math.sin(clock.elapsedTime * 3) * 0.15;
    ref.current.scale.set(s, s, s);
  });

  return (
    <group position={position}>
      <mesh
        ref={ref}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshBasicMaterial color={hovered ? '#ff5e00' : '#ffffff'} />
      </mesh>
      {hovered && (
        <Text
          position={[0, 0.3, 0]}
          fontSize={0.2}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          {name}
        </Text>
      )}
    </group>
  );
}

/* ---------- Helper: animated link ---------- */
function Link({ start, end }: { start: THREE.Vector3; end: THREE.Vector3 }) {
  const ref = useRef<THREE.Mesh>(null!);
  const curve = useMemo(
    () =>
      new THREE.QuadraticBezierCurve3(
        start,
        start.clone().lerp(end, 0.5).add(new THREE.Vector3(0, 0.5, 0)),
        end
      ),
    [start, end]
  );

  useFrame(({ clock }) => {
    const t = (clock.elapsedTime * 0.5) % 1;
    const pos = curve.getPoint(t);
    ref.current.position.copy(pos);
  });

  return (
    <>
      <Line
        points={curve.getPoints(50)}
        color="#ffffff"
        lineWidth={0.5}
        transparent
        opacity={0.3}
      />
      <mesh ref={ref}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshBasicMaterial color="#ff5e00" />
      </mesh>
    </>
  );
}

/* ---------- Main component ---------- */
export default function NetworkGlobe() {
  // Simplified city list – lon/lat → x,y,z on a flat map
  const cities = useMemo(
    () => [
      { name: 'Mumbai', pos: [2, 0, 0] as [number, number, number] },
      { name: 'Delhi', pos: [0.7, 1.2, 0] },
      { name: 'Bangalore', pos: [1.2, -1.2, 0] },
      { name: 'Kolkata', pos: [2.3, 1.3, 0] },
      { name: 'Chennai', pos: [2.2, -1.5, 0] },
      { name: 'Hyderabad', pos: [1.4, -0.5, 0] },
    ],
    []
  );

  // Build links
  const links = useMemo(() => {
    const result: { start: THREE.Vector3; end: THREE.Vector3 }[] = [];
    for (let i = 0; i < cities.length; i++) {
      for (let j = i + 1; j < cities.length; j++) {
        result.push({
          start: new THREE.Vector3(...cities[i].pos),
          end: new THREE.Vector3(...cities[j].pos),
        });
      }
    }
    return result;
  }, [cities]);

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#000' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <GradientBackground />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ff5e00" />
        <pointLight position={[-5, -5, -5]} intensity={0.8} color="#0066ff" />

        {/* India outline (extruded plane as placeholder) */}
        <mesh position={[0, 0, -0.01]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[4, 4]} />
          <meshStandardMaterial color="#003366" transparent opacity={0.15} />
        </mesh>

        {/* Cities */}
        {cities.map((c) => (
          <CityNode key={c.name} position={c.pos} name={c.name} />
        ))}

        {/* Links */}
        {links.map((l, idx) => (
          <Link key={idx} start={l.start} end={l.end} />
        ))}

        <OrbitControls enablePan enableZoom enableRotate />
      </Canvas>

      <div
        style={{
          position: 'absolute',
          top: 20,
          left: 20,
          color: '#fff',
          fontFamily: 'sans-serif',
        }}
      >
        <h1>India Internet Network Map</h1>
        <p>Drag to rotate • Scroll to zoom</p>
      </div>
    </div>
  );
}