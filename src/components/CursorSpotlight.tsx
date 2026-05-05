import { useEffect, useRef } from "react";

const CursorSpotlight = () => {
  const spotRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -1000, y: -1000 });
  const current = useRef({ x: -1000, y: -1000 });
  const raf = useRef<number>();

  useEffect(() => {
    // Disable on touch / coarse pointers
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (spotRef.current && spotRef.current.style.opacity !== "1") {
        spotRef.current.style.opacity = "1";
      }
    };
    const onLeave = () => {
      if (spotRef.current) spotRef.current.style.opacity = "0";
    };

    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.18;
      current.current.y += (target.current.y - current.current.y) * 0.18;
      if (spotRef.current) {
        spotRef.current.style.transform = `translate3d(${current.current.x - 300}px, ${current.current.y - 300}px, 0)`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div className="cursor-spotlight-grid" aria-hidden="true" />
      <div ref={spotRef} className="cursor-spotlight" aria-hidden="true" />
    </>
  );
};

export default CursorSpotlight;
