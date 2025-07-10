import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

interface InteractiveSkillSphereProps {
  position: [number, number, number];
  skill: string;
  color: string;
  proficiency: number; // 0-1
}

export const InteractiveSkillSphere = ({ 
  position, 
  skill, 
  color, 
  proficiency 
}: InteractiveSkillSphereProps) => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.005;
    }
  });

  const radius = 0.3 + proficiency * 0.3;

  return (
    <group position={position}>
      <mesh
        ref={sphereRef}
        onClick={() => setClicked(!clicked)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.2 : 1}
      >
        <sphereGeometry args={[radius, 16, 16]} />
        <meshPhongMaterial 
          color={color}
          transparent
          opacity={hovered ? 0.9 : 0.7}
        />
      </mesh>
      
      {/* Skill text */}
      <Text
        position={[0, -radius - 0.4, 0]}
        fontSize={0.15}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {skill}
      </Text>
      
      {/* Proficiency indicator */}
      {clicked && (
        <Text
          position={[0, radius + 0.3, 0]}
          fontSize={0.12}
          color="#00ff00"
          anchorX="center"
          anchorY="middle"
        >
          {`${Math.round(proficiency * 100)}%`}
        </Text>
      )}
    </group>
  );
};