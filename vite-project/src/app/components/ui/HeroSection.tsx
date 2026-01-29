import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Heart } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl w-full"
        >
          {/* Video Container */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white p-6">
            <div className="aspect-video bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl flex items-center justify-center">
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
          className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-rose-400"
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