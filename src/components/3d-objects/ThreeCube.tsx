"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";
import { useTheme } from "next-themes";

function RotatingCube() {
  const meshRef = useRef<Mesh>(null);
  const { theme } = useTheme();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.005;
    }
  });

  const color = theme === "dark" ? "#DFD0B8" : "#3C5B6F";

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default function ThreeCube() {
  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [2, 2, 2] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <RotatingCube />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}