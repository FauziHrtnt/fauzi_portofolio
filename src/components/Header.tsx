"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { Avatar, Icon, SmartLink } from "@once-ui-system/core";
import { person } from "@/resources";
import { ThemeToggle } from "./ThemeToggle";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string;
};

// ─────────────────────────────────────────────────────────
// MEGA-MENU ICONS (monochrome outline, replaces emoji icons)
// Consistent stroke-based icon set matching the dark portfolio theme.
// ─────────────────────────────────────────────────────────
type MegaIconProps = { size?: number; style?: React.CSSProperties };

const iconBaseStyle: React.CSSProperties = {
  color: "var(--megamenu-icon, currentColor)",
  opacity: 0.85,
  flexShrink: 0,
};

const RocketIcon = ({ size = 20, style }: MegaIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ ...iconBaseStyle, ...style }}>
    <path d="M12 2c2.6 2.1 4.2 5.6 4.2 9.1 0 2.1-.6 3.9-1.4 5.4l-2.8 3.2-2.8-3.2c-.8-1.5-1.4-3.3-1.4-5.4C7.8 7.6 9.4 4.1 12 2z" />
    <circle cx="12" cy="10.2" r="1.6" />
    <path d="M8.6 15.6c-1.6-.1-3 .9-3.5 3.4 1.9.6 3.4-.2 3.9-1.7" />
    <path d="M15.4 15.6c1.6-.1 3 .9 3.5 3.4-1.9.6-3.4-.2-3.9-1.7" />
  </svg>
);

const BriefcaseIcon = ({ size = 20, style }: MegaIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ ...iconBaseStyle, ...style }}>
    <rect x="2.5" y="7" width="19" height="13" rx="2.2" />
    <path d="M8.3 7V5.3A1.8 1.8 0 0 1 10.1 3.5h3.8a1.8 1.8 0 0 1 1.8 1.8V7" />
    <line x1="2.5" y1="12.3" x2="21.5" y2="12.3" />
  </svg>
);

const PaperPlaneIcon = ({ size = 16, style }: MegaIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ ...iconBaseStyle, ...style }}>
    <line x1="21.5" y1="2.5" x2="10.8" y2="13.2" />
    <polygon points="21.5 2.5 14.6 21.5 10.8 13.2 2.5 9.4 21.5 2.5" />
  </svg>
);

const TrophyIcon = ({ size = 16, style }: MegaIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ ...iconBaseStyle, ...style }}>
    <path d="M7.5 4h9v4.5a4.5 4.5 0 0 1-9 0V4z" />
    <path d="M16.5 5.2H19a2.3 2.3 0 0 1 0 4.6h-2.5" />
    <path d="M7.5 5.2H5a2.3 2.3 0 0 0 0 4.6h2.5" />
    <path d="M12 13v3.2" />
    <path d="M8.5 20h7" />
    <path d="M9.8 16.8h4.4l.6 3.2H9.2z" />
  </svg>
);

const BookOpenIcon = ({ size = 16, style }: MegaIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ ...iconBaseStyle, ...style }}>
    <path d="M2 4.5h5.7a3.6 3.6 0 0 1 3.6 3.6V21a2.8 2.8 0 0 0-2.8-2.8H2z" />
    <path d="M22 4.5h-5.7a3.6 3.6 0 0 0-3.6 3.6V21a2.8 2.8 0 0 1 2.8-2.8H22z" />
  </svg>
);

const GalleryIcon = ({ size = 20, style }: MegaIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ ...iconBaseStyle, ...style }}>
    <rect x="3" y="3" width="18" height="18" rx="2.5" />
    <circle cx="8.7" cy="8.7" r="1.5" />
    <path d="M21 15.5l-5.3-5.3a1.6 1.6 0 0 0-2.3 0L4 19" />
  </svg>
);

const ResumeIcon = ({ size = 20, style }: MegaIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ ...iconBaseStyle, ...style }}>
    <path d="M14 2.5H6.7a2.2 2.2 0 0 0-2.2 2.2v14.6a2.2 2.2 0 0 0 2.2 2.2h10.6a2.2 2.2 0 0 0 2.2-2.2V8z" />
    <polyline points="14 2.5 14 8 19.5 8" />
    <line x1="8.3" y1="13" x2="15.7" y2="13" />
    <line x1="8.3" y1="16.6" x2="15.7" y2="16.6" />
  </svg>
);

const ChatIcon = ({ size = 20, style }: MegaIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ ...iconBaseStyle, ...style }}>
    <path d="M21 11.6a8.4 8.4 0 0 1-8.4 8.4 8.3 8.3 0 0 1-3.8-.9L3 21l1.9-5.8a8.3 8.3 0 0 1-.9-3.8A8.4 8.4 0 0 1 12.5 3a8.4 8.4 0 0 1 8.4 8.4z" />
  </svg>
);

const UserIcon = ({ size = 20, style }: MegaIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ ...iconBaseStyle, ...style }}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const FileTextIcon = ({ size = 16, style }: MegaIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ ...iconBaseStyle, ...style }}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
);

const triggerCircleRipple = (e: React.MouseEvent<HTMLElement>) => {
  const element = e.currentTarget;
  const rect = element.getBoundingClientRect();
  const circle = document.createElement("span");
  const diameter = Math.max(rect.width, rect.height) * 2.5;
  const radius = diameter / 2;

  circle.style.width = `${diameter}px`;
  circle.style.height = `${diameter}px`;
  circle.style.left = `${e.clientX - rect.left - radius}px`;
  circle.style.top = `${e.clientY - rect.top - radius}px`;
  circle.classList.add("circle-ripple");

  const existingRipple = element.getElementsByClassName("circle-ripple")[0];
  if (existingRipple) {
    existingRipple.remove();
  }

  element.appendChild(circle);
  setTimeout(() => circle.remove(), 700);
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = "en-GB" }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return (
    <div
      className="clock-timbul-pill"
      onClick={triggerCircleRipple}
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "4px 10px",
        borderRadius: "10px",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <span
        style={{
          fontFamily: "'Geist Mono', monospace, 'Courier New'",
          fontWeight: 700,
          fontSize: "14px",
          letterSpacing: "1.5px",
        }}
      >
        {currentTime || "00:00:00"}
      </span>
    </div>
  );
};

export const Header = () => {
  const pathname = usePathname() ?? "";
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Smart Scroll Navbar States
  const [isAtTop, setIsAtTop] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Smart Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setIsAtTop(true);
        setIsVisible(true);
      } else {
        setIsAtTop(false);
        if (currentScrollY > lastScrollY.current + 10) {
          setIsVisible(false);
          setIsAboutOpen(false);
        } else if (currentScrollY < lastScrollY.current - 10) {
          setIsVisible(true);
        }
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsAboutOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fullscreen toggle
  const toggleFullscreen = (e: React.MouseEvent<HTMLElement>) => {
    triggerCircleRipple(e);
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => { });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => { });
        setIsFullscreen(false);
      }
    }
  };

  const handleDownloadCV = (e: React.MouseEvent<HTMLElement>) => {
    triggerCircleRipple(e);
    const a = document.createElement("a");
    a.href = "/documents/CV_Fauzi_Hartanto.pdf";
    a.download = "CV_Fauzi_Hartanto.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // Active state logic: Border & Active Pill ONLY activate when route/menu is actually being used
  const isHomeActive = pathname === "/";
  const isAboutTopActive =
    pathname.startsWith("/about") ||
    pathname === "/work" ||
    pathname.startsWith("/work/") ||
    pathname === "/skills" ||
    pathname === "/experience" ||
    pathname === "/documents" ||
    pathname === "/gallery" ||
    pathname === "/blog";

  // Sub-card active checks for Mega-Menu
  const isWorkActive = pathname === "/work" || pathname.startsWith("/work/");
  const isAboutActive = pathname === "/about";
  const isExperienceActive = pathname === "/experience";
  const isSkillsActive = pathname === "/skills";
  const isDocumentsActive = pathname === "/documents";
  const isGalleryActive = pathname === "/gallery";
  const isBlogActive = pathname === "/blog";

  return (
    <header
      ref={dropdownRef}
      style={{
        position: "fixed",
        top: isAtTop ? "0" : "12px",
        left: "50%",
        transform: `translateX(-50%) translateY(${isVisible ? "0%" : "-150%"})`,
        width: "100%",
        maxWidth: isAtTop ? "1240px" : "1020px",
        zIndex: 1000,
        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), top 0.4s cubic-bezier(0.16, 1, 0.3, 1), width 0.4s cubic-bezier(0.16, 1, 0.3, 1), max-width 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* SEAMLESS TOP NAVBAR CONTAINER */}
      <div
        className={`header-pill-container ${isAtTop ? "at-top" : "is-scrolled"}`}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          padding: isAtTop ? "20px 40px" : "8px 20px",
          borderRadius: isAtTop ? "0px" : "999px",
          backdropFilter: isAtTop ? "none" : "blur(20px)",
          WebkitBackdropFilter: isAtTop ? "none" : "blur(20px)",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* LEFT SECTION: CLOCK & AVATAR */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <SmartLink
            href="/"
            onClick={triggerCircleRipple}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
              position: "relative",
              overflow: "hidden",
              borderRadius: "50%",
            }}
          >
            <Avatar src={person.avatar} size="s" />
          </SmartLink>
          <TimeDisplay timeZone={person.location} />
        </div>

        {/* CENTER SECTION: NAVIGATION TOGGLE PILLS */}
        <div
          className="header-center-nav"
          style={{
            position: isAtTop ? "absolute" : "relative",
            left: isAtTop ? "50%" : "auto",
            transform: isAtTop ? "translateX(-50%)" : "none",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "transparent",
          }}
        >
          {/* BERANDA */}
          <SmartLink
            href="/"
            onClick={triggerCircleRipple}
            className={`nav-glow-link ${isHomeActive ? "active-pill" : ""}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: isHomeActive ? "6px 16px" : "6px 14px",
              fontSize: "14px",
              fontWeight: 600,
              textDecoration: "none",
              position: "relative",
            }}
          >
            {isHomeActive && (
              <span className="green-active-dot">●</span>
            )}
            Beranda
          </SmartLink>

          {/* ABOUT DROPDOWN TOGGLE */}
          <button
            type="button"
            onClick={(e) => {
              triggerCircleRipple(e);
              setIsAboutOpen(!isAboutOpen);
            }}
            onMouseEnter={() => setIsAboutOpen(true)}
            className={`nav-glow-link ${isAboutTopActive ? "active-pill" : ""}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: isAboutTopActive ? "6px 16px" : "6px 14px",
              fontSize: "14px",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              outline: "none",
              position: "relative",
            }}
          >
            {isAboutTopActive && (
              <span className="green-active-dot">●</span>
            )}
            About
            <span
              style={{
                fontSize: "10px",
                transform: isAboutOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                display: "inline-block",
                marginLeft: "2px",
              }}
            >
              ▲
            </span>
          </button>

          {/* KONTAK */}
          <SmartLink
            href="mailto:hartantofauzi14@gmail.com"
            onClick={triggerCircleRipple}
            className="nav-glow-link"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 14px",
              fontSize: "14px",
              fontWeight: 600,
              textDecoration: "none",
              position: "relative",
            }}
          >
            Kontak
          </SmartLink>
        </div>

        {/* RIGHT SECTION: 3 ACTION BUTTONS */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {/* FULLSCREEN BUTTON */}
          <button
            type="button"
            onClick={toggleFullscreen}
            title="Toggle Fullscreen"
            className="header-action-btn"
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              border: "none",
              background: "var(--header-btn-bg, rgba(255, 255, 255, 0.08))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "inherit",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.25s ease",
            }}
          >
            <Icon name="grid" size="s" />
          </button>

          {/* GLOBE LOCALE BUTTON */}
          <button
            type="button"
            onClick={triggerCircleRipple}
            title="Bahasa Indonesia (ID)"
            className="header-action-btn"
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              border: "none",
              background: "var(--header-btn-bg, rgba(255, 255, 255, 0.08))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "inherit",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.25s ease",
            }}
          >
            <Icon name="globe" size="s" />
          </button>

          {/* THEME TOGGLE BUTTON */}
          <div
            onClick={triggerCircleRipple}
            className="header-action-btn"
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              border: "none",
              background: "var(--header-btn-bg, rgba(255, 255, 255, 0.08))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.25s ease",
            }}
          >
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* FLOATING ABOUT MEGA-MENU CARD (monochrome icon set, compact reference layout) */}
      <div
        onMouseLeave={() => setIsAboutOpen(false)}
        className="header-megamenu-card"
        style={{
          position: "absolute",
          top: "calc(100% + 10px)",
          left: "50%",
          transform: `translateX(-50%) translateY(${isAboutOpen ? "0px" : "-16px"}) scale(${isAboutOpen ? "1" : "0.97"})`,
          opacity: isAboutOpen ? 1 : 0,
          pointerEvents: isAboutOpen ? "auto" : "none",
          transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease",
          width: "100%",
          maxWidth: "900px",
          borderRadius: "20px",
          padding: "18px",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          boxShadow: "0 28px 60px -15px rgba(0, 0, 0, 0.28)",
          zIndex: 999,
        }}
      >
        {/* 2 MAIN COLUMNS: LEFT SIDE & RIGHT SIDE DIVIDED BY LINE */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.65fr 1fr",
            gap: "18px",
            width: "100%",
          }}
        >
          {/* LEFT SIDE */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              paddingRight: "18px",
              borderRight: "1px solid var(--card-border, rgba(255, 255, 255, 0.08))",
              width: "100%",
            }}
          >
            {/* TOP ROW: ABOUT & EXPERIENCE (50-50 EQUAL SIZED HERO CARDS) */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", width: "100%" }}>
              <SmartLink
                href="/about"
                onClick={(e) => {
                  triggerCircleRipple(e);
                  setIsAboutOpen(false);
                }}
                style={{ textDecoration: "none", width: "100%", display: "block" }}
              >
                <div className={`megamenu-item-card hero-style ${isAboutActive ? "active-card" : ""}`}>
                  <UserIcon size={20} />
                  <div>
                    <div className="card-title">
                      About {isAboutActive && <span className="green-active-dot" style={{ marginLeft: "4px" }}>●</span>}
                    </div>
                    <div className="card-desc">Personal bio & background</div>
                  </div>
                </div>
              </SmartLink>

              <SmartLink
                href="/experience"
                onClick={(e) => {
                  triggerCircleRipple(e);
                  setIsAboutOpen(false);
                }}
                style={{ textDecoration: "none", width: "100%", display: "block" }}
              >
                <div className={`megamenu-item-card hero-style ${isExperienceActive ? "active-card" : ""}`}>
                  <BriefcaseIcon size={20} />
                  <div>
                    <div className="card-title">
                      Experience {isExperienceActive && <span className="green-active-dot" style={{ marginLeft: "4px" }}>●</span>}
                    </div>
                    <div className="card-desc">Work & organization journey</div>
                  </div>
                </div>
              </SmartLink>
            </div>

            {/* BOTTOM ROW: DOCUMENT, SKILL, PROJECT */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", width: "100%" }}>
              {/* DOCUMENT (Membuka Rute Halaman Khusus /documents) */}
              <SmartLink
                href="/documents"
                onClick={(e) => {
                  triggerCircleRipple(e);
                  setIsAboutOpen(false);
                }}
                style={{ textDecoration: "none", width: "100%", display: "block" }}
              >
                <div className={`megamenu-item-card compact-style ${isDocumentsActive ? "active-card" : ""}`}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div className="card-title">
                      Document {isDocumentsActive && <span className="green-active-dot" style={{ marginLeft: "4px" }}>●</span>}
                    </div>
                    <FileTextIcon size={15} />
                  </div>
                  <div className="card-desc" style={{ marginTop: "4px" }}>CV &amp; documents</div>
                </div>
              </SmartLink>

              {/* SKILL (Ganti posisi Achievement, Rute Baru /skills) */}
              <SmartLink
                href="/skills"
                onClick={(e) => {
                  triggerCircleRipple(e);
                  setIsAboutOpen(false);
                }}
                style={{ textDecoration: "none", width: "100%", display: "block" }}
              >
                <div className={`megamenu-item-card compact-style ${isSkillsActive ? "active-card" : ""}`}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div className="card-title">
                      Skill {isSkillsActive && <span className="green-active-dot" style={{ marginLeft: "4px" }}>●</span>}
                    </div>
                    <PaperPlaneIcon size={15} />
                  </div>
                  <div className="card-desc" style={{ marginTop: "4px" }}>Technical expertise</div>
                </div>
              </SmartLink>

              {/* PROJECT (Ganti posisi Blog, Rute /work) */}
              <SmartLink
                href="/work"
                onClick={(e) => {
                  triggerCircleRipple(e);
                  setIsAboutOpen(false);
                }}
                style={{ textDecoration: "none", width: "100%", display: "block" }}
              >
                <div className={`megamenu-item-card compact-style ${isWorkActive ? "active-card" : ""}`}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div className="card-title">
                      Project {isWorkActive && <span className="green-active-dot" style={{ marginLeft: "4px" }}>●</span>}
                    </div>
                    <RocketIcon size={15} />
                  </div>
                  <div className="card-desc" style={{ marginTop: "4px" }}>Discover my builds</div>
                </div>
              </SmartLink>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", justifyContent: "space-between", width: "100%" }}>
            <SmartLink
              href="/gallery"
              onClick={(e) => {
                triggerCircleRipple(e);
                setIsAboutOpen(false);
              }}
              style={{ textDecoration: "none", width: "100%", display: "block" }}
            >
              <div className={`megamenu-item-card side-style ${isGalleryActive ? "active-card" : ""}`}>
                <div>
                  <div className="card-title">
                    Gallery {isGalleryActive && <span className="green-active-dot" style={{ marginLeft: "4px" }}>●</span>}
                  </div>
                  <div className="card-desc">Visual portfolio & moments</div>
                </div>
                <GalleryIcon size={19} />
              </div>
            </SmartLink>

            <div
              onClick={(e) => {
                setIsAboutOpen(false);
                handleDownloadCV(e);
              }}
              className="megamenu-item-card side-style"
              style={{ cursor: "pointer", width: "100%" }}
            >
              <div>
                <div className="card-title">Resume</div>
                <div className="card-desc">View or download my CV</div>
              </div>
              <ResumeIcon size={19} />
            </div>

            <SmartLink
              href="mailto:hartantofauzi14@gmail.com"
              onClick={(e) => {
                triggerCircleRipple(e);
                setIsAboutOpen(false);
              }}
              style={{ textDecoration: "none", width: "100%", display: "block" }}
            >
              <div className="megamenu-item-card side-style" style={{ opacity: 0.6 }}>
                <div>
                  <div className="card-title">Chat</div>
                  <div className="card-desc">Coming soon to connect</div>
                </div>
                <ChatIcon size={19} />
              </div>
            </SmartLink>
          </div>
        </div>
      </div>
    </header>
  );
};