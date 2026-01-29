import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

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
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl transform rotate-1"></div>
          <div className="relative bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl shadow-xl p-8 md:p-12 border border-amber-100">
            <div className="absolute top-4 right-4">
              <Heart className="w-8 h-8 text-rose-300 fill-rose-300" />
            </div>
            <div className="absolute bottom-4 left-4">
              <Heart className="w-6 h-6 text-pink-300 fill-pink-300" />
            </div>

            <div className="space-y-6 font-['Playfair_Display'] text-gray-800">
              <h2 className="text-3xl md:text-4xl text-rose-900 mb-8">My Dearest,</h2>
              <p className="text-lg leading-relaxed">
                From the moment we met, you've brought so much joy, laughter, and love into my life...
                {/* You can truncate the text here for brevity in the component, or keep full text */}
              </p>
              <div className="mt-12 text-right">
                <p className="text-xl italic">With all my love,</p>
                <p className="text-2xl mt-2 text-rose-700">Your Forever Admirer 💕</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};