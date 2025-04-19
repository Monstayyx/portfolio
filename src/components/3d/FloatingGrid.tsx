import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Grid } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedGrid = () => {
  const gridRef = useRef<THREE.Object3D>(null);

  useFrame(({ clock }) => {
    if (gridRef.current) {
      gridRef.current.rotation.x = Math.PI / 2 + Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
      gridRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <group ref={gridRef}>
      <Grid
        cellSize={0.5}
        cellThickness={0.5}
        cellColor="#0ea5e9"
        sectionSize={2}
        sectionThickness={1}
        sectionColor="#06b6d4"
        fadeDistance={30}
        infiniteGrid
      />
    </group>
  );
};

interface FloatingGridProps {
  className?: string;
}

const FloatingGrid = ({ className }: FloatingGridProps) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 5, 10], fov: 75 }}>
        <color attach="background" args={['#0f172a']} />
        <fog attach="fog" args={['#0f172a', 5, 20]} />
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <AnimatedGrid />
      </Canvas>
    </div>
  );
};

export default FloatingGrid;