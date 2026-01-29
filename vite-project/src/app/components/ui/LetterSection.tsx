import { motion } from 'motion/react';
import { Canvas } from '@react-three/fiber';
import { Card } from '../../models/Cards';
import * as C from "../../../constants";

type AnimatedSceneProps = {
  cards: ReadonlyArray<C.CardConfig>;
  activeCardId: string | null;
  onToggleCard: (id: string) => void;
};


export function LetterSection({ cards, activeCardId, onToggleCard }: AnimatedSceneProps) {
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
            </Canvas>
            
          </div>
        </motion.div>
      </section>
  );
};