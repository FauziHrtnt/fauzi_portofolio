"use client";

import { useEffect, useRef } from "react";

interface StardustParticle {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  alpha: number;
  decay: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
  shape: "star" | "circle" | "sparkle";
}

export const CursorGlow = () => {
  const bgCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const fgCanvasRef = useRef<HTMLCanvasElement | null>(null);

  const targetPos = useRef({ x: -1000, y: -1000 });
  const currentPos = useRef({ x: -1000, y: -1000 });
  const lastScrollY = useRef(0);

  useEffect(() => {
    const bgCanvas = bgCanvasRef.current;
    const fgCanvas = fgCanvasRef.current;
    if (!bgCanvas || !fgCanvas) return;

    const bgCtx = bgCanvas.getContext("2d");
    const fgCtx = fgCanvas.getContext("2d");
    if (!bgCtx || !fgCtx) return;

    let width = (bgCanvas.width = fgCanvas.width = window.innerWidth);
    let height = (bgCanvas.height = fgCanvas.height = window.innerHeight);

    const handleResize = () => {
      width = bgCanvas.width = fgCanvas.width = window.innerWidth;
      height = bgCanvas.height = fgCanvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const particles: StardustParticle[] = [];
    const colors = [
      "rgba(59, 130, 246, 0.8)",   // Electric Cyan Blue
      "rgba(168, 85, 247, 0.8)",   // Glowing Violet
      "rgba(56, 189, 248, 0.85)",  // Sky Sparkle
      "rgba(255, 255, 255, 0.9)",  // White Diamond
      "rgba(244, 114, 182, 0.75)", // Soft Rose
    ];

    const spawnParticles = (x: number, y: number, count = 2) => {
      for (let i = 0; i < count; i++) {
        const shapes: ("star" | "circle" | "sparkle")[] = ["star", "sparkle", "circle"];
        particles.push({
          x: x + (Math.random() * 30 - 15),
          y: y + (Math.random() * 30 - 15),
          size: Math.random() * 6 + 3,
          vx: (Math.random() - 0.5) * 1.6,
          vy: (Math.random() - 0.5) * 1.6 - 0.4,
          alpha: 0.85,
          decay: Math.random() * 0.015 + 0.012,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.08,
          shape: shapes[Math.floor(Math.random() * shapes.length)],
        });
      }
    };

    let lastMoveSpawn = 0;
    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      const now = performance.now();
      if (now - lastMoveSpawn > 18) {
        lastMoveSpawn = now;
        spawnParticles(e.clientX, e.clientY, 2);
      }
    };

    let lastScrollSpawn = 0;
    const handleScroll = () => {
      const now = performance.now();
      if (now - lastScrollSpawn > 25) {
        lastScrollSpawn = now;
        const scrollDelta = window.scrollY - lastScrollY.current;
        lastScrollY.current = window.scrollY;

        // Spawn stardust particles across active viewport during scroll
        const spawnX = currentPos.current.x > 0 ? currentPos.current.x : width / 2;
        const spawnY = currentPos.current.y > 0 ? currentPos.current.y : height / 2;
        
        spawnParticles(
          spawnX + (Math.random() * 120 - 60),
          spawnY + (scrollDelta > 0 ? 40 : -40) + (Math.random() * 40 - 20),
          3
        );
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    const draw4PointStar = (
      ctx: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      r: number,
      color: string,
      alpha: number,
      rot: number
    ) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rot);
      ctx.beginPath();
      for (let i = 0; i < 4; i++) {
        ctx.lineTo(Math.cos((i * Math.PI) / 2) * r, Math.sin((i * Math.PI) / 2) * r);
        ctx.lineTo(
          Math.cos((i * Math.PI) / 2 + Math.PI / 4) * (r * 0.3),
          Math.sin((i * Math.PI) / 2 + Math.PI / 4) * (r * 0.3)
        );
      }
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.globalAlpha = Math.max(0, alpha);
      ctx.shadowBlur = 10;
      ctx.shadowColor = color;
      ctx.fill();
      ctx.restore();
    };

    let animId: number;
    const render = () => {
      // 1. Lerp cursor position
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.15;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.15;

      const px = currentPos.current.x;
      const py = currentPos.current.y;

      bgCtx.clearRect(0, 0, width, height);
      fgCtx.clearRect(0, 0, width, height);

      // 2. BACKGROUND GLOW SPOTLIGHT (Belakang card / zIndex 0, radius 280px)
      if (px > 0 && py > 0) {
        const glowGrad = bgCtx.createRadialGradient(px, py, 0, px, py, 280);
        glowGrad.addColorStop(0, "rgba(59, 130, 246, 0.14)");
        glowGrad.addColorStop(0.5, "rgba(168, 85, 247, 0.04)");
        glowGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

        bgCtx.fillStyle = glowGrad;
        bgCtx.fillRect(0, 0, width, height);
      }

      // 3. FOREGROUND GLOWING STARDUST PARTICLES (Di atas card / zIndex 100)
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;
        p.rotation += p.rotationSpeed;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        if (p.shape === "star" || p.shape === "sparkle") {
          draw4PointStar(fgCtx, p.x, p.y, p.size, p.color, p.alpha, p.rotation);
        } else {
          fgCtx.save();
          fgCtx.beginPath();
          fgCtx.arc(p.x, p.y, p.size * 0.6, 0, Math.PI * 2);
          fgCtx.fillStyle = p.color;
          fgCtx.globalAlpha = Math.max(0, p.alpha);
          fgCtx.shadowBlur = 8;
          fgCtx.shadowColor = p.color;
          fgCtx.fill();
          fgCtx.restore();
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* Background Glow Layer (100% Di Bawah Semua Card / zIndex: -1) */}
      <canvas
        ref={bgCanvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: -1,
        }}
      />
      {/* Foreground Glowing Stardust Sparkles (Di Atas Card / zIndex: 100, Aktif Mouse & Scroll) */}
      <canvas
        ref={fgCanvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 100,
        }}
      />
    </>
  );
};
