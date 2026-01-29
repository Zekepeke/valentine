import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export const LetterSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl w-full"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl transform rotate-1"></div>
          
          <div className="relative bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl shadow-xl p-6 md:p-12 border border-amber-100">
            <div className="absolute top-4 right-4">
              <Heart className="w-6 h-6 md:w-8 md:h-8 text-rose-300 fill-rose-300" />
            </div>
            <div className="absolute bottom-4 left-4">
              <Heart className="w-5 h-5 md:w-6 md:h-6 text-pink-300 fill-pink-300" />
            </div>

            <div className="space-y-4 md:space-y-6 font-['Playfair_Display'] text-gray-800">
              <h2 className="text-2xl md:text-4xl text-rose-900 mb-4 md:mb-8">My Dearest,</h2>
              
              <div className="text-base md:text-lg leading-relaxed space-y-4">
                <p>
                  From the moment we met, you've brought so much joy, laughter, and love into my life. 
                  Every day with you feels like a beautiful adventure.
                </p>
                <p>
                  You are my sunshine on cloudy days, my laughter in quiet moments, and my favorite person in the entire world.
                </p>
              </div>

              <div className="mt-8 md:mt-12 text-right">
                <p className="text-lg md:text-xl italic">With all my love,</p>
                <p className="text-xl md:text-2xl mt-2 text-rose-700">Your Forever Admirer 💕</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};