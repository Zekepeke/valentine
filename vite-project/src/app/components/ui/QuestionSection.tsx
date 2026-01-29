import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

interface QuestionSectionProps {
  onYes: () => void;
  onNo: () => void;
}

export const QuestionSection = ({ onYes, onNo }: QuestionSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12 md:py-20">
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
          className="mb-8 md:mb-12"
        >
          <Heart className="w-16 h-16 md:w-24 md:h-24 mx-auto text-rose-500 fill-rose-500 drop-shadow-lg" />
        </motion.div>

        <h2 className="text-4xl md:text-7xl font-['Playfair_Display'] text-rose-900 mb-8 md:mb-12">
          Be My Valentine?
        </h2>

        {/* Flex Col for Mobile, Flex Row for Desktop */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onYes}
            className="group relative overflow-hidden bg-gradient-to-r from-rose-500 to-pink-600 text-white w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 rounded-full shadow-2xl font-['Quicksand'] text-xl md:text-2xl font-semibold transition-all"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <Heart className="w-6 h-6 fill-white" />
              YES!
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-700"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNo}
            className="bg-gray-200 text-gray-600 w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 rounded-full shadow-lg font-['Quicksand'] text-xl md:text-2xl font-semibold hover:bg-gray-300 transition-all"
          >
            No
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};