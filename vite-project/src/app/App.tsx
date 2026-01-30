import { useState } from 'react';
import { HeroSection } from './components/ui/HeroSection';
import { LetterSection } from './components/ui/LetterSection';
import { QuestionSection } from './components/ui/QuestionSection';
import { CelebrationModal } from './components/ui/CelebrationModal';
import { triggerConfetti } from '../utils/celebration';
import { CARDS } from '../constants';

export default function App() {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const [showCelebration, setShowCelebration] = useState(false);

  const handleYesClick = () => {
    setShowCelebration(true);
    triggerConfetti();
  };

  const handleNoClick = () => {
    alert("Are you sure? Maybe take another look at the letter... 💕");
  };

  return (
   <div className="min-h-screen bg-gradient-to-br from-[#080808] via-[#220011] to-[#432133] text-foreground overflow-x-hidden">
      
      <HeroSection />
      
      <LetterSection 
        cards={CARDS}
        activeCardId={activeCardId}
        onToggleCard={(id) => setActiveCardId((prev) => (prev === id ? null : id))}
      />
      
      <QuestionSection 
        onYes={handleYesClick} 
        onNo={handleNoClick} 
      />
    </div>
  );
}