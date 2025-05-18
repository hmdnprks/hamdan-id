"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import DJIOsmoModel from "./DJIOsmo";

export default function Gears() {
  return (
    <div className="h-[400px] w-full">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} />
        <DJIOsmoModel position={[0, 0, 0]} />
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}