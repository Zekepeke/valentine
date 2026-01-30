import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md z-10" 
      >
        {/* FIX 1: Changed 'max-w-xs' to 'w-full max-w-md'. 
           This allows it to grow up to ~450px but shrink on smaller phones.
        */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white p-2 md:p-4 mx-auto w-full">
          
          {/* FIX 2: Actually added 'aspect-[9/16]' here.
             This forces the container to keep the vertical phone shape.
          */}
          <div className="bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden relative aspect-[9/16]">
            <video
              className="w-full h-full object-cover rounded-xl"
              controls
              playsInline
              preload="metadata"
            >
              <source src="/timeline.mp4" type="video/mp4" />
              <div className="flex flex-col items-center justify-center h-full text-rose-400">
                <p>Your browser does not support the video tag.</p>
              </div>
            </video>

          </div>
        </div>

        {/* Title */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center mt-12 text-5xl md:text-7xl font-['Playfair_Display'] text-rose-900"
          >
            ♥︎♥︎♥︎♥︎♥︎♥︎
          </motion.h1>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absoluteleft-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-rose-400"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </section>
  );
};