"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Icon, SmartLink } from "@once-ui-system/core";
import { person } from "@/resources";

export const ProfileClip: React.FC = () => {
  const pathname = usePathname() ?? "";
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolledPast, setIsScrolledPast] = useState(false);
  const clipRef = useRef<HTMLDivElement>(null);

  // Scroll listener: Hide ProfileClip when scrolling down past hero section (scrollY > 200)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolledPast(true);
        setIsOpen(false);
      } else {
        setIsScrolledPast(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (clipRef.current && !clipRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ONLY render ProfileClip on the home page (pathname === "/")
  if (pathname !== "/") {
    return null;
  }

  return (
    <div
      ref={clipRef}
      onMouseEnter={() => !isScrolledPast && setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      style={{
        position: "fixed",
        left: "0",
        top: "50%",
        transform: `translateY(-50%) translateX(${isScrolledPast ? "-150%" : "0%"})`,
        opacity: isScrolledPast ? 0 : 1,
        pointerEvents: isScrolledPast ? "none" : "auto",
        zIndex: 990,
        transition: "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease",
      }}
    >
      {/* VERTICAL WHITE TAB BUTTON WITH POP & SCALE HOVER ANIMATION */}
      <div
        onClick={() => !isScrolledPast && setIsOpen(!isOpen)}
        className="profile-clip-tab"
        style={{
          position: "relative",
          zIndex: 2,
          background: "var(--profile-clip-bg, #ffffff)",
          color: "var(--profile-clip-color, #0f172a)",
          padding: "24px 12px",
          borderRadius: "0 20px 20px 0",
          boxShadow: "0 14px 40px rgba(0, 0, 0, 0.35)",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
          transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, opacity 0.3s ease",
          transform: isOpen ? "translateX(0)" : "translateX(0)",
          opacity: 1,
        }}
      >
        <span
          style={{
            width: "9px",
            height: "9px",
            borderRadius: "50%",
            background: "#84cc16",
            boxShadow: "0 0 12px #84cc16",
            display: "inline-block",
          }}
        />
        <span
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            fontSize: "11px",
            fontWeight: 800,
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            fontFamily: "'Geist Mono', monospace, sans-serif",
            whiteSpace: "nowrap",
          }}
        >
          Available For Opportunity
        </span>
      </div>

      {/* EXPANDED OVERLAPPING CARD LAYOUT (LARGER SIZE WITH AVATAR IMAGE) */}
      <div
        className="profile-clip-popout-container"
        style={{
          position: "absolute",
          top: "50%",
          left: "24px",
          transform: `translateY(-50%) translateX(${isOpen ? "0px" : "-110%"})`,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease",
          width: "640px",
          height: "340px",
          display: "flex",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        {/* LARGE AVATAR PHOTO IMAGE ON THE LEFT */}
        <div
          style={{
            position: "relative",
            width: "360px",
            height: "340px",
            borderRadius: "28px",
            overflow: "hidden",
            boxShadow: "0 24px 50px rgba(0, 0, 0, 0.45)",
            flexShrink: 0,
            background: "#000",
          }}
        >
          <Image
            src={person.avatar}
            alt={person.name}
            fill
            style={{ objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "12px",
              left: "12px",
              background: "rgba(0, 0, 0, 0.7)",
              backdropFilter: "blur(8px)",
              padding: "5px 12px",
              borderRadius: "999px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "11px",
              color: "#fff",
              fontWeight: 600,
            }}
          >
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#84cc16" }} />
            Open for Hire
          </div>
        </div>

        {/* OVERLAPPING FLOATING DARK BIO CARD ON THE RIGHT */}
        <div
          style={{
            position: "relative",
            marginLeft: "-70px",
            width: "350px",
            height: "290px",
            borderRadius: "28px",
            padding: "22px 24px",
            background: "var(--megamenu-bg, rgba(18, 22, 29, 0.96))",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid var(--megamenu-border, rgba(255, 255, 255, 0.12))",
            boxShadow: "0 28px 70px -10px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(255, 255, 255, 0.1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            zIndex: 2,
          }}
        >
          <div>
            <div
              style={{
                fontWeight: 800,
                fontSize: "20px",
                color: "var(--card-title-color, #ffffff)",
                lineHeight: "120%",
              }}
            >
              {person.name}
            </div>
            <div
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "#94a3b8",
                marginTop: "3px",
              }}
            >
              Software Developer & System Architect
            </div>
            <div
              style={{
                fontSize: "12px",
                color: "var(--card-desc-color, rgba(255, 255, 255, 0.7))",
                marginTop: "12px",
                lineHeight: "155%",
              }}
            >
              Mahasiswa Sistem Informasi UTY (IPK 3.73) berfokus pada pemecahan masalah secara presisi, arsitektur sistem, Web (PHP CodeIgniter 3 & MySQL), serta Mobile Android Native (Java & Compose).
            </div>
          </div>

          {/* 3 WHITE CIRCULAR ACTION BUTTONS AT BOTTOM */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginTop: "14px",
            }}
          >
            <SmartLink
              href="https://github.com/hartantofauzi"
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                background: "#ffffff",
                color: "#0f172a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.25)",
                transition: "transform 0.2s ease",
              }}
              className="social-clip-btn"
            >
              <Icon name="github" size="s" />
            </SmartLink>

            <SmartLink
              href="https://linkedin.com/in/fauzi-hartanto"
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                background: "#ffffff",
                color: "#0f172a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.25)",
                transition: "transform 0.2s ease",
              }}
              className="social-clip-btn"
            >
              <Icon name="linkedin" size="s" />
            </SmartLink>

            <SmartLink
              href="mailto:hartantofauzi14@gmail.com"
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                background: "#ffffff",
                color: "#0f172a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.25)",
                transition: "transform 0.2s ease",
              }}
              className="social-clip-btn"
            >
              <Icon name="email" size="s" />
            </SmartLink>
          </div>
        </div>
      </div>
    </div>
  );
};
