import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';

interface Scene3DProps {
  children: React.ReactNode;
  cameraPosition?: [number, number, number];
  enableControls?: boolean;
  height?: string;
}

export const Scene3D = ({ 
  children, 
  cameraPosition = [0, 0, 5], 
  enableControls = true,
  height = "100%" 
}: Scene3DProps) => {
  return (
    <div style={{ height, width: "100%" }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={cameraPosition} />
        
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4338ca" />
        
        {/* Environment */}
        <Environment preset="city" />
        
        {/* Controls */}
        {enableControls && (
          <OrbitControls 
            enablePan={false}
            enableZoom={true}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={0.5}
            maxDistance={10}
            minDistance={2}
          />
        )}
        
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </Canvas>
    </div>
  );
};