import { motion } from 'motion/react';
import { Canvas } from '@react-three/fiber';
import { Card } from '../../models/Cards';
import * as C from "../../../constants";
import { Suspense } from 'react';
import { Environment, ContactShadows } from '@react-three/drei';
import Table from '../../models/Table';
import Thing from '../../models/Things';
import Rose from '../../models/Rose';

type AnimatedSceneProps = {
  cards: ReadonlyArray<C.CardConfig>;
  activeCardId: string | null;
  onToggleCard: (id: string) => void;
};

export function LetterSection({ cards, activeCardId, onToggleCard }: AnimatedSceneProps) {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-10 bg-gradient-to-b from-transparent to-pink-50/50">
      
      {/* Title / Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 mb-4"
      >
        <h2 className="text-3xl md:text-5xl font-['Playfair_Display'] text-rose-900 mb-2">
          Little Moments
        </h2>
        <p className="text-rose-400 font-['Quicksand'] text-sm md:text-base">
          Tap a photo to remember
        </p>
      </motion.div>

      {/* 3D Scene Container */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-[60vh] md:h-[70vh] relative"
      >
        <Canvas
          shadows
          dpr={[1, 2]}
          // FIXED CAMERA: 
          // position: [x=0, y=6, z=6] -> Centered, 6 units up, 6 units back
          // fov: 40 -> Slightly zoomed in for a cinematic look
          camera={{ position: [0, 6, 6], fov: 40 }}
          className="w-full h-full"
        >
          <Suspense fallback={null}>
            {/* Lighting */}
            <Environment preset="city" />
            <ambientLight intensity={0.4} />
            <spotLight 
              position={[10, 15, 10]} 
              angle={0.3} 
              penumbra={1} 
              intensity={1} 
              castShadow 
            />
            <Rose 
              position={[-1, 1.3, 1]}
              rotation={[0, 1.5, 1.5]}
              scale={1.3}
            />

            <Thing 
              position={[0, 0, -1]}
              rotation={[0, 1.6, 0]}
              scale={10}
            />
            <Table 
              position={[0.7, -1.3, 1]}
              rotation={[0, 0, 0]}
              scale={28}
            />


            <group position={[0, -1, 0]}>
              {cards.map((card) => (
                <Card
                  key={card.id}
                  id={card.id}
                  image={card.image}
                  tablePosition={card.position}
                  tableRotation={card.rotation}
                  isActive={activeCardId === card.id}
                  onToggle={onToggleCard}
                />
              ))}

              <ContactShadows
                position={[0, -0.01, 0]}
                opacity={0.4}
                scale={20}
                blur={2}
                far={4.5}
                color="#8a4b5e"
              />
            </group>
          </Suspense>
        </Canvas>
      </motion.div>
    </section>
  );
};