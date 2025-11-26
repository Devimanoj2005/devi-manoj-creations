import { useEffect, useState, useRef } from "react";

const AnimatedCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [outerPos, setOuterPos] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [particles, setParticles] = useState<{ x: number; y: number; id: number; vx: number; vy: number }[]>([]);
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
  const lastPosRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();
  const velocityRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let particleId = 0;
    let rippleId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const newX = e.clientX;
      const newY = e.clientY;
      
      // Calculate velocity
      const vx = newX - lastPosRef.current.x;
      const vy = newY - lastPosRef.current.y;
      const speed = Math.sqrt(vx * vx + vy * vy);
      
      velocityRef.current = { x: vx, y: vy };
      lastPosRef.current = { x: newX, y: newY };
      
      // Update inner cursor immediately
      setCursorPos({ x: newX, y: newY });
      
      // Create particle sparks when moving quickly
      if (speed > 3) {
        const particleCount = Math.min(Math.floor(speed / 10), 3);
        const newParticles = Array.from({ length: particleCount }, (_, i) => ({
          x: newX + (Math.random() - 0.5) * 20,
          y: newY + (Math.random() - 0.5) * 20,
          id: particleId++,
          vx: (Math.random() - 0.5) * 4,
          vy: (Math.random() - 0.5) * 4,
        }));
        setParticles((prev) => [...prev.slice(-20), ...newParticles]);
      }
      
      // Check for interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.style.cursor === "pointer" ||
        window.getComputedStyle(target).cursor === "pointer";
      
      setIsPointer(!!isInteractive);
    };

    // Elastic motion for outer ring
    const animateOuterRing = () => {
      setOuterPos((prev) => {
        const dx = cursorPos.x - prev.x;
        const dy = cursorPos.y - prev.y;
        const elasticity = 0.15;
        
        return {
          x: prev.x + dx * elasticity,
          y: prev.y + dy * elasticity,
        };
      });
      
      animationFrameRef.current = requestAnimationFrame(animateOuterRing);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
      const ripple = { x: cursorPos.x, y: cursorPos.y, id: rippleId++ };
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
    animationFrameRef.current = requestAnimationFrame(animateOuterRing);

    // Cleanup particles
    const particleCleanup = setInterval(() => {
      setParticles((prev) => 
        prev.slice(-20).map((p) => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
          vx: p.vx * 0.95,
          vy: p.vy * 0.95,
        }))
      );
    }, 16);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      clearInterval(particleCleanup);
    };
  }, [cursorPos.x, cursorPos.y]);

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

      {/* Particle sparks */}
      {particles.map((particle, index) => (
        <div
          key={particle.id}
          className="cursor-particle"
          style={{
            left: particle.x,
            top: particle.y,
            opacity: Math.max(0, 1 - index / particles.length),
          }}
        />
      ))}

      {/* Outer ring with elastic motion */}
      <div
        className={`cursor-outer-ring ${isPointer ? "pointer" : ""} ${isClicking ? "clicking" : ""}`}
        style={{
          left: outerPos.x,
          top: outerPos.y,
        }}
      >
        <div className="cursor-glow" />
      </div>

      {/* Inner dot */}
      <div
        className={`cursor-inner-dot ${isClicking ? "clicking" : ""}`}
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
        }}
      />
    </>
  );
};

export default AnimatedCursor;
