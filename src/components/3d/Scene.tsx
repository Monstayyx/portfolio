import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface ParticleProps {
  position: [number, number, number];
  color: string;
}

const Particle = ({ position, color }: ParticleProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <dodecahedronGeometry args={[0.2, 0]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 100]} scale={2}>
      <MeshDistortMaterial 
        color="#0ea5e9" 
        attach="material" 
        distort={0.5} 
        speed={1.5} 
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

const FloatingParticles = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  const particles = Array.from({ length: 20 }).map((_, i) => {
    const theta = Math.random() * Math.PI * 2;
    const radius = 3 + Math.random() * 2;
    const y = (Math.random() - 0.5) * 4;
    
    return {
      position: [
        radius * Math.cos(theta),
        y,
        radius * Math.sin(theta)
      ] as [number, number, number],
      color: i % 3 === 0 ? '#0ea5e9' : i % 3 === 1 ? '#0891b2' : '#06b6d4'
    };
  });

  return (
    <group ref={groupRef}>
      {particles.map((props, i) => (
        <Particle key={i} {...props} />
      ))}
    </group>
  );
};

interface SceneProps {
  className?: string;
}

const Scene = ({ className }: SceneProps) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <AnimatedSphere />
        <FloatingParticles />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default Scene;