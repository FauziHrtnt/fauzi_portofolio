"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "left" | "right" | "zoom";
  delay?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
  fillWidth?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.75,
  className = "",
  style = {},
  fillWidth = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle visibility bi-directionally on scroll
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const getInitialTransform = () => {
    switch (direction) {
      case "left":
        return "translate3d(-32px, 0, 0)";
      case "right":
        return "translate3d(32px, 0, 0)";
      case "zoom":
        return "translate3d(0, 0, 0) scale(0.93)";
      case "up":
      default:
        return "translate3d(0, 28px, 0) scale(0.97)";
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        width: fillWidth ? "100%" : "auto",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate3d(0, 0, 0) scale(1)" : getInitialTransform(),
        transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${isVisible ? delay : 0}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${isVisible ? delay : 0}s`,
        willChange: "opacity, transform",
        ...style,
      }}
    >
      {children}
    </div>
  );
};
