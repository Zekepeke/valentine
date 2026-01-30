import { useState } from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

interface QuestionSectionProps {
  onYes: () => void;
  onNo: () => void;
}

export const QuestionSection = ({ onYes, onNo }: QuestionSectionProps) => {
  const [noCount, setNoCount] = useState(0);
  const [isAccepted, setIsAccepted] = useState(false);

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const handleYesClick = () => {
    setIsAccepted(true); // ADDED: Remove the giant button immediately
    onYes(); // Trigger the parent's confetti/modal
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Plsss? :( You're breaking my heart",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12 md:py-20 relative overflow-hidde">
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full text-center z-10"
      >
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="mb-8 md:mb-12"
        >
          <Heart className="w-16 h-16 md:w-24 md:h-24 mx-auto text-rose-500 fill-rose-500 drop-shadow-[0_0_15px_rgba(244,63,94,0.5)]" />
        </motion.div>

        <h2 className="text-4xl md:text-7xl font-['Playfair_Display'] text-white mb-8 md:mb-12 drop-shadow-lg">
          {isAccepted ?  
          <img className="center mx-auto w-64 md:w-96 rounded-xl shadow-lg"
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXd2OWZsbGNudDJ3NGJrajlzYjVibmVmdjZqbmFkbXFrMWV6aHkyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/W1hd3uXRIbddu/giphy.gif" /> 
          
          : "Be My Valentine?"}
        </h2>

        {/* Buttons Container */}
        {/* ADDED: Only render buttons if NOT accepted yet */}
        {!isAccepted && (
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center w-full relative">
            
            {/* YES Button - Grows freely */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleYesClick}
              style={{ 
                fontSize: `${noCount * 20 + 16}px`, // No limit on growth
              }}
              // If noCount > 10, the button becomes fixed and covers the whole screen
              className={`group bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-full shadow-[0_0_30px_rgba(244,63,94,0.4)] font-['Quicksand'] font-semibold transition-all duration-300 ease-in-out z-50
                ${noCount > 10 ? 'fixed inset-0 w-screen h-screen flex items-center justify-center rounded-none' : 'relative px-8 py-4'}
              `}
            >
              <span className="relative z-10 flex items-center justify-center gap-3 whitespace-nowrap">
                <Heart className={`${noCount > 10 ? 'w-32 h-32' : 'w-6 h-6'} fill-white animate-pulse`} />
                YES!
              </span>
            </motion.button>

            {/* NO Button - Visible only until YES takes over */}
            {noCount <= 10 && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNoClick}
                className="bg-gray-800/80 text-gray-300 hover:text-white px-8 py-4 rounded-full font-['Quicksand'] text-xl font-medium border border-gray-700 hover:bg-gray-700 transition-all shrink-0 min-w-[120px] relative z-10"
              >
                {getNoButtonText()}
              </motion.button>
            )}
          </div>
        )}
      </motion.div>
    </section>
  );
};