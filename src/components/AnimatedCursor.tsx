import { useEffect, useState, useRef } from "react";

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
  const magneticRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    let trailId = 0;
    let rippleId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.style.cursor === "pointer" ||
        window.getComputedStyle(target).cursor === "pointer";
      
      // Magnetic effect for interactive elements
      if (isInteractive) {
        const rect = target.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.sqrt(
          Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
        );
        
        if (distance < 80) {
          const strength = 0.3;
          const pullX = centerX + (e.clientX - centerX) * strength;
          const pullY = centerY + (e.clientY - centerY) * strength;
          magneticRef.current = { x: pullX, y: pullY };
          setPosition({ x: pullX, y: pullY });
        } else {
          magneticRef.current = null;
          setPosition({ x: e.clientX, y: e.clientY });
        }
      } else {
        magneticRef.current = null;
        setPosition({ x: e.clientX, y: e.clientY });
      }

      // Enhanced trail effect
      const newTrail = { x: e.clientX, y: e.clientY, id: trailId++ };
      setTrail((prev) => [...prev.slice(-12), newTrail]);
      
      setIsPointer(!!isInteractive);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
      // Create ripple effect on click
      const ripple = { x: position.x, y: position.y, id: rippleId++ };
      setRipples((prev) => [...prev, ripple]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
      }, 800);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    const trailCleanup = setInterval(() => {
      setTrail((prev) => prev.slice(-12));
    }, 50);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      clearInterval(trailCleanup);
    };
  }, [position.x, position.y]);

  return (
    <>
      {/* Ripple effects on click */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="cursor-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
          }}
        />
      ))}

      {/* Enhanced trail effect */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="cursor-trail"
          style={{
            left: point.x,
            top: point.y,
            opacity: (index + 1) / trail.length * 0.6,
            transform: `translate(-50%, -50%) scale(${(index + 1) / trail.length * 0.8})`,
          }}
        />
      ))}

      {/* Main cursor with morphing */}
      <div
        className={`custom-cursor ${isPointer ? "pointer" : ""} ${isClicking ? "clicking" : ""}`}
        style={{
          left: position.x,
          top: position.y,
        }}
      >
        <div className="cursor-glow" />
        <div className="cursor-dot" />
      </div>
    </>
  );
};

export default AnimatedCursor;
