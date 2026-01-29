import { motion } from 'motion/react';
import { Heart, ChevronDown } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full"
      >
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white p-6">
          <div className="aspect-video bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl flex items-center justify-center">
            <video
              className="w-full h-full object-cover rounded-2xl"
              controls
              poster="https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&q=80"
            >
              <source src="" type="video/mp4" />
              <div className="flex flex-col items-center justify-center h-full text-rose-400">
                <Heart className="w-24 h-24 mb-4 animate-pulse" />
                <p className="text-2xl font-['Quicksand']">Your Personal Video Here</p>
              </div>
            </video>
          </div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-12 text-5xl md:text-7xl font-['Playfair_Display'] text-rose-900"
        >
          A Special Question
        </motion.h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-rose-400"
      >
        <p className="font-['Quicksand'] text-sm">Scroll for more</p>
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