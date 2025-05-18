"use client";

import { useGLTF } from "@react-three/drei";

export default function DJIOsmoModel(props: any) {
  const { scene } = useGLTF("models/dji_osmo_pocket_3.glb"); // adjust filename

  return <primitive object={scene} scale={1.2} {...props} />;
}