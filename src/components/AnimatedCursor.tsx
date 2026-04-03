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

  const animate = useCallback(() => {
    const dx = targetPos.current.x - outerPos.current.x;
    const dy = targetPos.current.y - outerPos.current.y;
    outerPos.current.x += dx * 0.15;
    outerPos.current.y += dy * 0.15;

    if (outerRef.current) {
      outerRef.current.style.left = `${outerPos.current.x}px`;
      outerRef.current.style.top = `${outerPos.current.y}px`;
    }

    rafId.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const inner = innerRef.current;
    const outer = outerRef.current;
    if (!inner || !outer) return;

    const onMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      inner.style.left = `${e.clientX}px`;
      inner.style.top = `${e.clientY}px`;
      inner.style.opacity = "1";
      outer.style.opacity = "1";

      const target = e.target as HTMLElement;
      const interactive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        window.getComputedStyle(target).cursor === "pointer";

      if (interactive && !isPointer.current) {
        isPointer.current = true;
        outer.classList.add("pointer");
      } else if (!interactive && isPointer.current) {
        isPointer.current = false;
        outer.classList.remove("pointer");
      }
    };

    const onDown = () => {
      isClicking.current = true;
      inner.classList.add("clicking");
      outer.classList.add("clicking");

      // Create ripple via DOM — no React state
      if (rippleContainer.current) {
        const ripple = document.createElement("div");
        ripple.className = "cursor-ripple";
        ripple.style.left = `${targetPos.current.x}px`;
        ripple.style.top = `${targetPos.current.y}px`;
        rippleContainer.current.appendChild(ripple);
        setTimeout(() => ripple.remove(), 700);
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
      <div ref={outerRef} className="cursor-outer-ring" style={{ opacity: 0 }}>
        <div className="cursor-glow" />
      </div>
      <div ref={innerRef} className="cursor-inner-dot" style={{ opacity: 0 }} />
    </>
  );
};

export default AnimatedCursor;
