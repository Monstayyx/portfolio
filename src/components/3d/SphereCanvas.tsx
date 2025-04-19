import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface SphereProps {
  distort?: number;
  color?: string;
  scale?: number;
  position?: [number, number, number];
}

const AnimatedSphere = ({ distort = 0.3, color = "#0ea5e9", scale = 1, position = [0, 0, 0] }: SphereProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 100]} scale={scale} position={position}>
      <MeshDistortMaterial 
        color={color} 
        attach="material" 
        distort={distort} 
        speed={2} 
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

interface SphereCanvasProps {
  className?: string;
  size?: string;
  sphereProps?: SphereProps;
}

const SphereCanvas = ({ className, size = "h-32 w-32", sphereProps }: SphereCanvasProps) => {
  return (
    <div className={`${size} ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <AnimatedSphere {...(sphereProps || {})} />
      </Canvas>
    </div>
  );
};

export default SphereCanvas;