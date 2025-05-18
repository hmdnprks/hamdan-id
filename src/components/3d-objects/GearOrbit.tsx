"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Html } from "@react-three/drei";
import { Suspense } from "react";

function GearItem({
  position,
  label,
}: {
  position: [number, number, number];
  label: string;
}) {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#3C5B6F" />
        <Html distanceFactor={10}>
          <div className="text-xs text-white mt-2">{label}</div>
        </Html>
      </mesh>
    </Float>
  );
}

export default function GearOrbit() {
  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <Suspense fallback={null}>
          <GearItem position={[1.5, 0, 0]} label="DJI Osmo" />
          <GearItem position={[-1.5, 0, 0]} label="Insta360" />
          <GearItem position={[0, 1.5, 0]} label="iPhone 16 Pro" />
          <GearItem position={[0, -1.5, 0]} label="Fujifilm" />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}