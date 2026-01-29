import confetti from 'canvas-confetti';

export const triggerConfetti = () => {
  const duration = 3000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);

    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
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