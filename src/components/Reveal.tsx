"use client";

/**
 * LOKASI DISARANKAN: src/components/Reveal.tsx
 * (sesuaikan path import "@/..." di file lain jika Anda taruh di lokasi lain)
 *
 * Komponen pembungkus (wrapper) untuk animasi "scroll reveal" — elemen akan
 * fade-up + sedikit scale begitu masuk ke viewport, meniru gaya animasi
 * gulir pada video referensi. Menggunakan IntersectionObserver, ringan,
 * tanpa library tambahan.
 *
 * Contoh pemakaian:
 *   <Reveal><h2>Judul Section</h2></Reveal>
 *   <Reveal delay={0.15} as="li">Item bertahap</Reveal>
 */

import React, { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  /** delay tambahan dalam detik, untuk efek stagger antar elemen */
  delay?: number;
  /** elemen HTML pembungkus, default "div" */
  as?: React.ElementType;
  /** className tambahan yang digabung dengan class "reveal" */
  className?: string;
  style?: React.CSSProperties;
  /** ambang batas kemunculan elemen (0-1), default 0.15 */
  threshold?: number;
  /** jika true, animasi hanya berjalan sekali (default true) */
  once?: boolean;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  as = "div",
  className = "",
  style = {},
  threshold = 0.15,
  once = true,
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(node);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, once]);

  const Tag = as as any;

  return (
    <Tag
      ref={ref}
      className={`reveal${isVisible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
      style={{ transitionDelay: `${delay}s`, ...style }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
