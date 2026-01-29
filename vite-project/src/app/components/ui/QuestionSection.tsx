import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

interface QuestionSectionProps {
  onYes: () => void;
  onNo: () => void;
}

export const QuestionSection = ({ onYes, onNo }: QuestionSectionProps) => {
  return (
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
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onYes}
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

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNo}
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
  );
};