import { useEffect, useState } from "react";

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => setExiting(true), 2600);
    const doneTimer = setTimeout(() => onComplete(), 3400);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  // Generate sparkle positions once
  const sparkles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: 20 + Math.random() * 60,
    top: 30 + Math.random() * 40,
    delay: 0.8 + Math.random() * 1.2,
    duration: 1.5 + Math.random() * 1.5,
    size: 2 + Math.random() * 3,
  }));

  return (
    <div
      className={`fixed inset-0 z-[10001] bg-black flex items-center justify-center overflow-hidden ${
        exiting ? "intro-exit" : ""
      }`}
      aria-hidden="true"
    >
      {/* Light streak sweep */}
      <div className="intro-streak" />

      {/* Sparkle particles */}
      <div className="absolute inset-0 pointer-events-none">
        {sparkles.map((s) => (
          <span
            key={s.id}
            className="intro-sparkle"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Text block */}
      <div className="relative z-10 text-center px-4">
        <p className="intro-greeting text-base md:text-xl tracking-[0.3em] uppercase text-white/70 mb-4 md:mb-6">
          Hi, I'm
        </p>
        <h1 className="intro-name text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight">
          Devi Manoj
        </h1>
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.8)_100%)]" />
    </div>
  );
};

export default IntroAnimation;
