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
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white p-2 md:p-4 mx-auto w-full">
          

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
          className="text-center mt-8 text-4xl md:text-6xl font-['Playfair_Display'] text-rose-900 leading-tight"
        >
          A Special Question
        </motion.h1>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-rose-400"
      >
        <p className="font-['Quicksand'] text-xs md:text-sm">Scroll for more</p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};