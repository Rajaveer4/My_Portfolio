import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera, Stars } from '@react-three/drei';
import { Suspense, useRef, useState } from 'react';
import * as THREE from 'three';

interface Scene3DProps {
  children: React.ReactNode;
  cameraPosition?: [number, number, number];
  enableControls?: boolean;
  height?: string;
  enableStars?: boolean;
  enableGrid?: boolean;
}

// Interactive background component with animated particles
const InteractiveBackground = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const [hovered, setHovered] = useState(false);
  
  // Create particles
  const particleCount = 500;
  const positions = useRef<Float32Array>(new Float32Array(particleCount * 3));
  
  // Initialize particle positions
  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    positions.current[i3] = (Math.random() - 0.5) * 10;
    positions.current[i3 + 1] = (Math.random() - 0.5) * 10;
    positions.current[i3 + 2] = (Math.random() - 0.5) * 10;
  }
  
  // Animate particles
  useFrame((state) => {
    if (particlesRef.current) {
      const time = state.clock.getElapsedTime();
      const particles = particlesRef.current;
      
      // Rotate the entire particle system
      particles.rotation.y = time * 0.05;
      
      // Update individual particles
      const positions = particles.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        // Add subtle movement to particles
        positions[i3 + 1] += Math.sin(time + i * 0.1) * 0.01;
      }
      
      particles.geometry.attributes.position.needsUpdate = true;
    }
  });
  
  return (
    <points
      ref={particlesRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions.current}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.1} 
        color={hovered ? "#8b5cf6" : "#6366f1"}
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
};

// Grid component
const Grid = () => {
  return (
    <gridHelper 
      args={[20, 20, "#4338ca", "#6366f1"]} 
      position={[0, -3, 0]} 
      rotation={[0, 0, 0]}
    />
  );
};

export const Scene3D = ({ 
  children, 
  cameraPosition = [0, 0, 5], 
  enableControls = true,
  height = "100%",
  enableStars = true,
  enableGrid = true
}: Scene3DProps) => {
  return (
    <div style={{ height, width: "100%" }}>
      <Canvas dpr={[1, 2]} camera={{ position: cameraPosition }}>
        <PerspectiveCamera makeDefault position={cameraPosition} />
        
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4338ca" />
        <spotLight position={[0, 10, 0]} intensity={0.8} castShadow />
        
        {/* Environment */}
        <Environment preset="night" />
        
        {/* Interactive Background Elements */}
        <InteractiveBackground />
        {enableStars && <Stars radius={50} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
        }
        {enableGrid && <Grid />}
        
        {/* Controls */}
        {enableControls && (
          <OrbitControls 
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={0.3}
            maxDistance={20}
            minDistance={2}
            zoomSpeed={0.5}
          />
        )}
        
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </Canvas>
    </div>
  );
};
