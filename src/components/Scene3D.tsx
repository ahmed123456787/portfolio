"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment } from "@react-three/drei";
import { useRef, Suspense } from "react";
import type { Mesh } from "three";

function MorphingBlob() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.15;
    meshRef.current.rotation.y = t * 0.2;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={meshRef} scale={2.2}>
        <icosahedronGeometry args={[1, 12]} />
        <MeshDistortMaterial
          color="#7c5cff"
          distort={0.45}
          speed={1.6}
          roughness={0.15}
          metalness={0.85}
        />
      </mesh>
    </Float>
  );
}

function SmallOrb({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position} scale={0.35}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} />
      </mesh>
    </Float>
  );
}

export function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#a78bfa" />
        <directionalLight position={[-5, -2, -5]} intensity={0.6} color="#00e6ff" />
        <pointLight position={[0, 0, 4]} intensity={0.8} color="#ffffff" />

        <MorphingBlob />
        <SmallOrb position={[-3, 1.5, -1]} color="#00e6ff" />
        <SmallOrb position={[3, -1.2, -1]} color="#ff6ec7" />
        <SmallOrb position={[2.5, 2, 0]} color="#7c5cff" />

        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
