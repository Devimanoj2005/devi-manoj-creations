import { useEffect, useRef, useCallback } from "react";

const AnimatedCursor = () => {
  const innerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const outerPos = useRef({ x: -100, y: -100 });
  const targetPos = useRef({ x: -100, y: -100 });
  const isPointer = useRef(false);
  const isClicking = useRef(false);
  const rafId = useRef<number>();
  const rippleContainer = useRef<HTMLDivElement>(null);
  const lastTrailTime = useRef(0);
  const lastPos = useRef({ x: -100, y: -100 });
  const audioCtx = useRef<AudioContext | null>(null);

  const playClickSound = useCallback(() => {
    try {
      if (!audioCtx.current) {
        const Ctx =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtx.current = new Ctx();
      }
      const ctx = audioCtx.current;
      if (ctx.state === "suspended") ctx.resume();
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(440, now + 0.08);
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.08, now + 0.005);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);
      osc.connect(gain).connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.13);
    } catch {
      // no-op
    }
  }, []);

  const animate = useCallback(() => {
    const dx = targetPos.current.x - outerPos.current.x;
    const dy = targetPos.current.y - outerPos.current.y;
    // Smoother, more elastic follow
    outerPos.current.x += dx * 0.18;
    outerPos.current.y += dy * 0.18;

    if (outerRef.current) {
      outerRef.current.style.left = `${outerPos.current.x}px`;
      outerRef.current.style.top = `${outerPos.current.y}px`;

      // Stretch outer ring based on velocity for elegant flowing effect
      const speed = Math.min(Math.sqrt(dx * dx + dy * dy), 60);
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);
      const stretch = 1 + speed * 0.008;
      const squish = 1 - speed * 0.004;
      outerRef.current.style.transform = `translate(-50%, -50%) rotate(${angle}deg) scale(${stretch}, ${squish})`;
    }

    rafId.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const inner = innerRef.current;
    const outer = outerRef.current;
    if (!inner || !outer) return;

    const onMove = (e: MouseEvent) => {
      // Magnetic snap toward hovered interactive elements
      const target = e.target as HTMLElement;
      const magnet =
        (target.closest("button, a, [role='button']") as HTMLElement | null) ||
        (window.getComputedStyle(target).cursor === "pointer" ? target : null);

      let tx = e.clientX;
      let ty = e.clientY;
      if (magnet) {
        const r = magnet.getBoundingClientRect();
        if (r.width < 320 && r.height < 160) {
          const cx = r.left + r.width / 2;
          const cy = r.top + r.height / 2;
          tx = e.clientX + (cx - e.clientX) * 0.25;
          ty = e.clientY + (cy - e.clientY) * 0.25;
        }
      }

      targetPos.current = { x: tx, y: ty };
      inner.style.left = `${e.clientX}px`;
      inner.style.top = `${e.clientY}px`;
      inner.style.opacity = "1";
      outer.style.opacity = "1";

      // Emit trail particles based on velocity (throttled)
      const now = performance.now();
      const vx = e.clientX - lastPos.current.x;
      const vy = e.clientY - lastPos.current.y;
      const velocity = Math.sqrt(vx * vx + vy * vy);
      if (velocity > 3 && now - lastTrailTime.current > 18 && rippleContainer.current) {
        lastTrailTime.current = now;
        const trail = document.createElement("div");
        trail.className = "cursor-trail-dot";
        // Slight perpendicular jitter for a flowing comet feel
        const perpX = -vy / (velocity || 1);
        const perpY = vx / (velocity || 1);
        const jitter = (Math.random() - 0.5) * Math.min(velocity * 0.4, 6);
        trail.style.left = `${e.clientX + perpX * jitter}px`;
        trail.style.top = `${e.clientY + perpY * jitter}px`;
        const size = Math.min(4 + velocity * 0.18, 12);
        trail.style.width = `${size}px`;
        trail.style.height = `${size}px`;
        rippleContainer.current.appendChild(trail);
        setTimeout(() => trail.remove(), 700);
      }
      lastPos.current = { x: e.clientX, y: e.clientY };

      const interactive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        window.getComputedStyle(target).cursor === "pointer";

      if (interactive && !isPointer.current) {
        isPointer.current = true;
        outer.classList.add("pointer");

        // Sparkle burst on interactive element enter
        if (rippleContainer.current) {
          for (let i = 0; i < 6; i++) {
            const sparkle = document.createElement("div");
            sparkle.className = "cursor-sparkle";
            const angle = (Math.PI * 2 * i) / 6;
            const distance = 25 + Math.random() * 15;
            sparkle.style.left = `${e.clientX}px`;
            sparkle.style.top = `${e.clientY}px`;
            sparkle.style.setProperty("--tx", `${Math.cos(angle) * distance}px`);
            sparkle.style.setProperty("--ty", `${Math.sin(angle) * distance}px`);
            rippleContainer.current.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 800);
          }
        }
      } else if (!interactive && isPointer.current) {
        isPointer.current = false;
        outer.classList.remove("pointer");
      }
    };

    const onDown = (e: MouseEvent) => {
      isClicking.current = true;
      inner.classList.add("clicking");
      outer.classList.add("clicking");

      // Play subtle click sound only on interactive elements
      const target = e.target as HTMLElement;
      const interactive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        window.getComputedStyle(target).cursor === "pointer";
      if (interactive) playClickSound();

      // Create ripple via DOM — no React state
      if (rippleContainer.current) {
        const ripple = document.createElement("div");
        ripple.className = "cursor-ripple";
        ripple.style.left = `${targetPos.current.x}px`;
        ripple.style.top = `${targetPos.current.y}px`;
        rippleContainer.current.appendChild(ripple);
        setTimeout(() => ripple.remove(), 700);

        // Star burst on click
        for (let i = 0; i < 8; i++) {
          const star = document.createElement("div");
          star.className = "cursor-star";
          const angle = (Math.PI * 2 * i) / 8 + Math.random() * 0.3;
          const distance = 30 + Math.random() * 20;
          star.style.left = `${targetPos.current.x}px`;
          star.style.top = `${targetPos.current.y}px`;
          star.style.setProperty("--tx", `${Math.cos(angle) * distance}px`);
          star.style.setProperty("--ty", `${Math.sin(angle) * distance}px`);
          rippleContainer.current.appendChild(star);
          setTimeout(() => star.remove(), 700);
        }
      }
    };

    const onUp = () => {
      isClicking.current = false;
      inner.classList.remove("clicking");
      outer.classList.remove("clicking");
    };

    const onLeave = () => {
      inner.style.opacity = "0";
      outer.style.opacity = "0";
    };

    const onEnter = () => {
      inner.style.opacity = "1";
      outer.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [animate]);

  return (
    <>
      <div ref={rippleContainer} />
      <div ref={outerRef} className="cursor-outer-ring" style={{ opacity: 0 }}>
        <div className="cursor-glow" />
      </div>
      <div ref={innerRef} className="cursor-inner-dot" style={{ opacity: 0 }} />
    </>
  );
};

export default AnimatedCursor;
