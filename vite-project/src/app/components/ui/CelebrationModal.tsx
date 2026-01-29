import { motion, AnimatePresence } from 'motion/react';

interface CelebrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CelebrationModal = ({ isOpen, onClose }: CelebrationModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          onClick={onClose}
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
            
            <p className="text-2xl md:text-3xl font-['Playfair_Display'] text-gray-700 mb-4 relative">
              You just made me the happiest person alive!
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-4 rounded-full shadow-lg font-['Quicksand'] text-lg font-semibold relative mt-8"
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};