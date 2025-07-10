import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, RoundedBox, Html } from '@react-three/drei';
import * as THREE from 'three';

interface ProjectCard3DProps {
  position: [number, number, number];
  title: string;
  description: string;
  technologies: string[];
  color: string;
}

export const ProjectCard3D = ({ 
  position, 
  title, 
  description, 
  technologies, 
  color 
}: ProjectCard3DProps) => {
  const cardRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state) => {
    if (cardRef.current) {
      cardRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      if (hovered) {
        cardRef.current.position.z = position[2] + 0.2;
      } else {
        cardRef.current.position.z = THREE.MathUtils.lerp(cardRef.current.position.z, position[2], 0.1);
      }
    }
  });

  return (
    <group position={position}>
      <RoundedBox
        ref={cardRef}
        args={[2, 2.5, 0.1]}
        radius={0.1}
        smoothness={4}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => setClicked(!clicked)}
      >
        <meshPhongMaterial 
          color={color}
          transparent
          opacity={hovered ? 0.9 : 0.7}
          shininess={100}
        />
      </RoundedBox>
      
      {/* Project title */}
      <Text
        position={[0, 0.8, 0.1]}
        fontSize={0.2}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        maxWidth={1.8}
        font="/fonts/inter-bold.woff"
      >
        {title}
      </Text>
      
      {/* Description */}
      <Text
        position={[0, 0.2, 0.1]}
        fontSize={0.1}
        color="#e5e5e5"
        anchorX="center"
        anchorY="middle"
        maxWidth={1.6}
        textAlign="center"
      >
        {description}
      </Text>
      
      {/* Technologies */}
      <Text
        position={[0, -0.5, 0.1]}
        fontSize={0.08}
        color="#a0a0a0"
        anchorX="center"
        anchorY="middle"
        maxWidth={1.8}
        textAlign="center"
      >
        {technologies.join(' • ')}
      </Text>
      
      {/* Interactive HTML overlay when clicked */}
      {clicked && (
        <Html
          position={[0, -1.5, 0]}
          center
          distanceFactor={10}
        >
          <div className="bg-black/80 backdrop-blur-sm rounded-lg p-4 max-w-xs">
            <h3 className="text-white font-bold mb-2">{title}</h3>
            <p className="text-gray-300 text-sm mb-3">{description}</p>
            <div className="flex flex-wrap gap-1">
              {technologies.map((tech, i) => (
                <span 
                  key={i}
                  className="px-2 py-1 bg-primary/20 text-primary text-xs rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <button 
              className="mt-3 px-4 py-2 bg-primary text-white rounded hover:bg-primary/80 transition-colors text-sm"
              onClick={(e) => {
                e.stopPropagation();
                setClicked(false);
              }}
            >
              Close
            </button>
          </div>
        </Html>
      )}
    </group>
  );
};