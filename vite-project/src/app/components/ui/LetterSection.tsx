import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { Canvas } from '@react-three/fiber';

export const LetterSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl w-full"
        >
          <div className="relative">
            {/* Paper texture effect */}
            <Canvas
              gl={{ alpha: true }}
              style={{ background: "transparent" }}
              onCreated={({ gl }) => gl.setClearColor("#000000", 0)}
            >
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 5, 5]} />
              <mesh>
                <planeGeometry args={[10, 14, 32, 32]} />
                <meshStandardMaterial 
                  color="#fff0f6" 
                  roughness={1} 
                  metalness={0} 
                  side={2} 
                />
              </mesh>
            </Canvas>
            
          </div>
        </motion.div>
      </section>
  );
};