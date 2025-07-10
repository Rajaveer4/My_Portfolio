import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingGeometryProps {
  position: [number, number, number];
  color: string;
  text?: string;
  shape?: 'box' | 'sphere' | 'torus' | 'cone';
}

export const FloatingGeometry = ({ 
  position, 
  color, 
  text, 
  shape = 'box' 
}: FloatingGeometryProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const geometry = useMemo(() => {
    switch (shape) {
      case 'sphere':
        return new THREE.SphereGeometry(0.5, 32, 32);
      case 'torus':
        return new THREE.TorusGeometry(0.4, 0.2, 16, 32);
      case 'cone':
        return new THREE.ConeGeometry(0.5, 1, 8);
      default:
        return new THREE.BoxGeometry(1, 1, 1);
    }
  }, [shape]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh
        ref={meshRef}
        position={position}
        geometry={geometry}
        onPointerOver={(e) => {
          e.stopPropagation();
          if (meshRef.current) {
            meshRef.current.scale.setScalar(1.2);
          }
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          if (meshRef.current) {
            meshRef.current.scale.setScalar(1);
          }
        }}
      >
        <meshStandardMaterial 
          color={color} 
          transparent 
          opacity={0.8}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      {text && (
        <Text
          position={[position[0], position[1] - 1, position[2]]}
          fontSize={0.3}
          color={color}
          anchorX="center"
          anchorY="middle"
        >
          {text}
        </Text>
      )}
    </Float>
  );
};