"use client";

import { useEffect, useRef } from "react";

export const InteractiveGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    const grid = gridRef.current;
    if (!container || !grid) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mousePosition.current = { x, y };

      // Calculate the distance from mouse to center of the container
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const deltaX = (x - centerX) / centerX;
      const deltaY = (y - centerY) / centerY;

      // Apply transform to the grid based on mouse position
      grid.style.transform = `perspective(1000px) rotateX(${deltaY * 2}deg) rotateY(${-deltaX * 2}deg)`;
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden [perspective:1000px]"
    >
      <div
        ref={gridRef}
        className="absolute inset-0 transition-transform duration-100 ease-out"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,215,0,0.05)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] bg-[size:32px_32px]" />
      </div>
    </div>
  );
};
