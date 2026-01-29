import { useState } from 'react';
import { HeroSection } from './components/ui/HeroSection';
import { LetterSection } from './components/ui/LetterSection';
import { QuestionSection } from './components/ui/QuestionSection';
import { CelebrationModal } from './components/ui/CelebrationModal';
import { triggerConfetti } from '../utils/celebration';

export default function App() {
  const [showCelebration, setShowCelebration] = useState(false);

  const handleYesClick = () => {
    setShowCelebration(true);
    triggerConfetti();
  };

  const handleNoClick = () => {
    alert("Are you sure? Maybe take another look at the letter... 💕");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-cream-50">
      
      <HeroSection />
      
      <LetterSection />
      
      <QuestionSection 
        onYes={handleYesClick} 
        onNo={handleNoClick} 
      />

      <CelebrationModal 
        isOpen={showCelebration} 
        onClose={() => setShowCelebration(false)} 
      />
      
    </div>
  );
}