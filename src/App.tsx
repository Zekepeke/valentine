import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, ChevronDown } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function App() {
  const [showCelebration, setShowCelebration] = useState(false);

  const handleYesClick = () => {
    setShowCelebration(true);
    
    // Fire confetti
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);

    // Add balloons effect
    setTimeout(() => {
      const count = 15;
      for (let i = 0; i < count; i++) {
        setTimeout(() => {
          confetti({
            particleCount: 1,
            startVelocity: 0,
            ticks: 200,
            origin: {
              x: Math.random(),
              y: 1.2,
            },
            gravity: -0.5,
            shapes: ['circle'],
            scalar: 3,
            colors: ['#ffc0cb', '#ff69b4', '#dc143c'],
          });
        }, i * 100);
      }
    }, 500);
  };

  const handleNoClick = () => {
    // Fun interaction - button moves away or becomes harder to click
    alert("Are you sure? Maybe take another look at the letter... 💕");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-cream-50">
      {/* Hero Section with Video */}
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
                className="w-full h-full object-cover rounded-2xl"
                controls
                poster="https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&q=80"
              >
                <source src="" type="video/mp4" />
                {/* Placeholder for personal video */}
                <div className="flex flex-col items-center justify-center h-full text-rose-400">
                  <Heart className="w-24 h-24 mb-4 animate-pulse" />
                  <p className="text-2xl font-['Quicksand']">Your Personal Video Here</p>
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
            A Special Question
          </motion.h1>
        </motion.div>

        {/* Scroll Indicator */}
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

      {/* Letter Section */}
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

      {/* The Question Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl w-full text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="mb-12"
          >
            <Heart className="w-24 h-24 mx-auto text-rose-500 fill-rose-500 drop-shadow-lg" />
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-['Playfair_Display'] text-rose-900 mb-12">
            Be My Valentine?
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* YES Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleYesClick}
              className="group relative overflow-hidden bg-gradient-to-r from-rose-500 to-pink-600 text-white px-12 py-6 rounded-full shadow-2xl font-['Quicksand'] text-2xl font-semibold transition-all hover:shadow-rose-300 hover:shadow-2xl"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Heart className="w-7 h-7 fill-white" />
                YES!
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-700"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            {/* NO Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNoClick}
              className="bg-gray-200 text-gray-600 px-12 py-6 rounded-full shadow-lg font-['Quicksand'] text-2xl font-semibold hover:bg-gray-300 transition-all"
            >
              No
            </motion.button>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-rose-600 font-['Quicksand'] text-lg"
          >
            (But I hope you'll say yes! 💕)
          </motion.p>
        </motion.div>
      </section>

      {/* Success/Celebration Overlay */}
      <AnimatePresence>
        {showCelebration && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            onClick={() => setShowCelebration(false)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-3xl p-8 md:p-12 max-w-2xl w-full text-center shadow-2xl relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 opacity-50"></div>

              <motion.div
                animate={{ rotate: [0, 10, -10, 10, 0] }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <h2 className="text-6xl md:text-8xl font-['Playfair_Display'] text-rose-600 mb-6">
                  Yay! 🎉
                </h2>
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="mb-8"
              >
                <div className="flex justify-center gap-4 mb-6">
                  <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0 }}>
                    ❤️
                  </motion.div>
                  <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}>
                    💕
                  </motion.div>
                  <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.4 }}>
                    💖
                  </motion.div>
                  <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.6 }}>
                    💗
                  </motion.div>
                  <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.8 }}>
                    💝
                  </motion.div>
                </div>
              </motion.div>

              <p className="text-2xl md:text-3xl font-['Playfair_Display'] text-gray-700 mb-4 relative">
                You just made me the happiest person alive!
              </p>
              
              <p className="text-xl font-['Quicksand'] text-gray-600 mb-8 relative">
                I can't wait to celebrate this Valentine's Day with you and create countless beautiful memories together! 💕
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowCelebration(false)}
                className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-4 rounded-full shadow-lg font-['Quicksand'] text-lg font-semibold relative"
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
