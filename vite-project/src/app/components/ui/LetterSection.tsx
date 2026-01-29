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
            {/* Paper texture effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl transform rotate-1"></div>
            <div className="relative bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl shadow-xl p-8 md:p-12 border border-amber-100">
              {/* Decorative hearts */}
              <div className="absolute top-4 right-4">
                <Heart className="w-8 h-8 text-rose-300 fill-rose-300" />
              </div>
              <div className="absolute bottom-4 left-4">
                <Heart className="w-6 h-6 text-pink-300 fill-pink-300" />
              </div>

              {/* Letter content */}
              <div className="space-y-6 font-['Playfair_Display'] text-gray-800">
                <h2 className="text-3xl md:text-4xl text-rose-900 mb-8">My Dearest,</h2>
                
                <p className="text-lg leading-relaxed">
                  From the moment we met, you've brought so much joy, laughter, and love into my life. 
                  Every day with you feels like a beautiful adventure, and I cherish every moment we spend together.
                </p>

                <p className="text-lg leading-relaxed">
                  You make my heart skip a beat with your smile, and your kindness inspires me to be a better person. 
                  The way you light up a room, the way you care for others, and the way you make me feel special - 
                  these are just a few of the countless reasons I adore you.
                </p>

                <p className="text-lg leading-relaxed">
                  This Valentine's Day, I want to make our bond official. I want to celebrate this day and every day 
                  knowing that we're together, that we're choosing each other, and that our love story continues to unfold 
                  in the most beautiful way.
                </p>

                <p className="text-lg leading-relaxed">
                  You are my sunshine on cloudy days, my laughter in quiet moments, and my favorite person in the entire world. 
                  I can't imagine my life without you in it.
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