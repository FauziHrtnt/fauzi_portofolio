"use client";

import React, { useEffect, useState } from "react";

export const CursorGlow: React.FC = () => {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let animationFrameId: number;
    let targetX = -500;
    let targetY = -500;
    let currentX = -500;
    let currentY = -500;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const updatePosition = () => {
      // Smooth lerp easing for elegant movement
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;

      setPos({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9999,
        overflow: "hidden",
      }}
    >
      {/* ULTRA-ELEGAN SPOTLIGHT AMBIENT RADIAL GLOW (NO BUBBLES, NO STARS) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "360px",
          height: "360px",
          borderRadius: "50%",
          transform: `translate3d(${pos.x - 180}px, ${pos.y - 180}px, 0)`,
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.14) 0%, rgba(59, 130, 246, 0.05) 45%, transparent 70%)",
          filter: "blur(20px)",
          willChange: "transform",
          transition: "opacity 0.3s ease",
        }}
      />
    </div>
  );
};
