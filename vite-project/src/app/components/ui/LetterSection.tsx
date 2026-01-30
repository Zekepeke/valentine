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
    // CHANGE 1: Dark background for the whole section
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-1">
      
      {/* Title / Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 mb-4"
      >
        <h2 className="text-3xl md:text-5xl font-['Playfair_Display'] mb-2">
          A letter for you
        </h2>
        <p className="text-rose-500 font-['Quicksand'] text-sm md:text-base">
          Tap the card
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-[60vh] md:h-[70vh] relative"
      >
        <Canvas
          shadows
          dpr={[1, 2]}
          camera={{ position: [0, 6, 6], fov: 40 }}
          className="w-full h-full"
        >
          <color attach="background" args={['#000000']} />

          <Suspense fallback={null}>
            <ambientLight intensity={0.7} color="#ffb7b2" />

            <spotLight 
              position={[5, 8, 5]} 
              angle={0.4} 
              penumbra={1} 
              intensity={2} 
              color="#ffcdb2" 
              castShadow 
            />

            <pointLight position={[0, 0, 0]} intensity={19} color="#d44d5c" />




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

              {/* Shadows tailored for dark mode (subtle opacity) */}
              <ContactShadows
                position={[0, -0.01, 0]}
                opacity={0.5}
                scale={20}
                blur={2.5}
                far={4.5}
                color="#0A0A0A"
              />
            </group>
          </Suspense>
        </Canvas>
      </motion.div>
    </section>
  );
};