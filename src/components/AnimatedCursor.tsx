import { useEffect, useState, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  id: number;
  vx: number;
  vy: number;
  life: number;
}

interface Trail {
  x: number;
  y: number;
  id: number;
  opacity: number;
}

interface Ripple {
  x: number;
  y: number;
  id: number;
}

const AnimatedCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [outerPos, setOuterPos] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [trails, setTrails] = useState<Trail[]>([]);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  
  const lastPosRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();
  const particleIdRef = useRef(0);
  const trailIdRef = useRef(0);
  const rippleIdRef = useRef(0);
  const targetPosRef = useRef({ x: 0, y: 0 });

  // Smooth elastic animation for outer ring
  const animateOuterRing = useCallback(() => {
    setOuterPos((prev) => {
      const dx = targetPosRef.current.x - prev.x;
      const dy = targetPosRef.current.y - prev.y;
      const elasticity = 0.12; // Lower = smoother, more elastic
      
      return {
        x: prev.x + dx * elasticity,
        y: prev.y + dy * elasticity,
      };
    });
    
    animationFrameRef.current = requestAnimationFrame(animateOuterRing);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newX = e.clientX;
      const newY = e.clientY;
      
      // Show cursor on first move
      if (!isVisible) setIsVisible(true);
      
      // Calculate velocity
      const vx = newX - lastPosRef.current.x;
      const vy = newY - lastPosRef.current.y;
      const speed = Math.sqrt(vx * vx + vy * vy);
      
      lastPosRef.current = { x: newX, y: newY };
      targetPosRef.current = { x: newX, y: newY };
      
      // Update inner cursor immediately
      setCursorPos({ x: newX, y: newY });
      
      // Create motion trail when moving
      if (speed > 2) {
        const newTrail: Trail = {
          x: newX,
          y: newY,
          id: trailIdRef.current++,
          opacity: Math.min(speed / 20, 0.8),
        };
        setTrails((prev) => [...prev.slice(-12), newTrail]);
      }
      
      // Create particle sparks when moving quickly
      if (speed > 8) {
        const particleCount = Math.min(Math.floor(speed / 15), 4);
        const newParticles: Particle[] = Array.from({ length: particleCount }, () => ({
          x: newX + (Math.random() - 0.5) * 24,
          y: newY + (Math.random() - 0.5) * 24,
          id: particleIdRef.current++,
          vx: (Math.random() - 0.5) * 3 + vx * 0.1,
          vy: (Math.random() - 0.5) * 3 + vy * 0.1,
          life: 1,
        }));
        setParticles((prev) => [...prev.slice(-18), ...newParticles]);
      }
      
      // Check for interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[data-cursor-hover]") ||
        window.getComputedStyle(target).cursor === "pointer";
      
      setIsPointer(!!isInteractive);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
      const ripple: Ripple = { 
        x: targetPosRef.current.x, 
        y: targetPosRef.current.y, 
        id: rippleIdRef.current++ 
      };
      setRipples((prev) => [...prev, ripple]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
      }, 700);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    
    animationFrameRef.current = requestAnimationFrame(animateOuterRing);

    // Particle physics update
    const particleInterval = setInterval(() => {
      setParticles((prev) => 
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vx: p.vx * 0.92,
            vy: p.vy * 0.92,
            life: p.life - 0.05,
          }))
          .filter((p) => p.life > 0)
      );
    }, 16);

    // Trail fade out
    const trailInterval = setInterval(() => {
      setTrails((prev) => 
        prev
          .map((t) => ({ ...t, opacity: t.opacity - 0.08 }))
          .filter((t) => t.opacity > 0)
      );
    }, 25);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      clearInterval(particleInterval);
      clearInterval(trailInterval);
    };
  }, [animateOuterRing, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Motion trails */}
      {trails.map((trail) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: trail.x,
            top: trail.y,
            opacity: trail.opacity,
            transform: `translate(-50%, -50%) scale(${trail.opacity})`,
          }}
        />
      ))}

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
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="cursor-particle"
          style={{
            left: particle.x,
            top: particle.y,
            opacity: particle.life,
            transform: `translate(-50%, -50%) scale(${particle.life})`,
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
