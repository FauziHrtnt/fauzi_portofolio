"use client";

import React, { useEffect, useRef, useState } from "react";
import { Icon, SmartLink } from "@once-ui-system/core";
import { Reveal } from "@/components/Reveal";

/* ==========================================================================
   DATA STATISTIK & TECH STACK MARQUEE
   ========================================================================== */

const STATS: { label: string; value: number | string; suffix: string; isNumeric: boolean }[] = [
  { label: "IPK SAAT INI", value: "3.73", suffix: "/4.0", isNumeric: false },
  { label: "PROYEK SELESAI", value: 10, suffix: "+", isNumeric: true },
  { label: "PENGALAMAN", value: 1, suffix: " Tahun+", isNumeric: true },
  { label: "TEKNOLOGI & TOOLS", value: 15, suffix: "+", isNumeric: true },
];

const TECH_ROW_1 = ["PHP", "CodeIgniter 3", "MySQL", "Java", "Jetpack Compose", "Android Native"];
const TECH_ROW_2 = ["Next.js", "Node.js", "TypeScript", "Python", "Git", "VS Code", "Docker"];

const StatNumber: React.FC<{ value: number; suffix: string }> = ({ value, suffix }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          const duration = 1200;
          const startTime = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [started, value]);

  return (
    <div ref={ref} className="stat-number" style={{ fontSize: "32px", fontWeight: 800, color: "var(--card-title-color, #ffffff)" }}>
      {display}
      {suffix}
    </div>
  );
};

const MarqueeRow: React.FC<{ items: string[]; reverse?: boolean }> = ({ items, reverse }) => {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-row">
      <div className={`marquee-track${reverse ? " marquee-reverse" : ""}`}>
        {doubled.map((item, i) => (
          <div className="marquee-item" key={`${item}-${i}`}>
            <span className="marquee-dot" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export const HomeClient: React.FC = () => {
  const [isHoveredResume, setIsHoveredResume] = useState(false);

  const scrollToFocus = () => {
    const el = document.getElementById("focus-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = (e: React.MouseEvent<HTMLElement>) => {
    const a = document.createElement("a");
    a.href = "/documents/CV_Fauzi_Hartanto.pdf";
    a.download = "CV_Fauzi_Hartanto.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "0px" }}>
      {/* ======================================================================
          SECTION 1: HERO (STICKY UNTIL COVERED BY PEEL CONTENT PANEL)
          ====================================================================== */}
      <section
        className="hero-sticky-section"
        style={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "20px",
          paddingBottom: "100px",
          boxSizing: "border-box",
          position: "sticky",
          top: "0",
          zIndex: 1,
        }}
      >
        {/* INTRO TAGLINE (TOP LEFT) */}
        <div
          className="hero-fade hero-fade-d1"
          style={{
            position: "absolute",
            top: "95px",
            left: "20px",
            maxWidth: "200px",
            zIndex: 10,
          }}
        >
          <p
            style={{
              fontSize: "11px",
              fontFamily: "'Geist Mono', monospace, sans-serif",
              fontWeight: 600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              lineHeight: "160%",
              color: "var(--card-desc-color, rgba(255, 255, 255, 0.75))",
              margin: 0,
            }}
          >
            Hi, I'm Fauzi Hartanto. I build scalable systems powered by intelligence.
          </p>
        </div>

        {/* OPEN COLLABORATION SUBTITLE (BOTTOM RIGHT - RAISED UP ABOVE FOOTER BAR) */}
        <div
          className="hero-fade hero-fade-d2"
          style={{
            position: "absolute",
            bottom: "165px",
            right: "20px",
            maxWidth: "200px",
            textAlign: "right",
            zIndex: 10,
          }}
        >
          <p
            style={{
              fontSize: "11px",
              fontFamily: "'Geist Mono', monospace, sans-serif",
              fontWeight: 600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              lineHeight: "160%",
              color: "var(--card-desc-color, rgba(255, 255, 255, 0.75))",
              margin: 0,
            }}
          >
            Open to all forms of collaboration, regardless of location and language.
          </p>
        </div>

        {/* CENTERED HERO TYPOGRAPHY CONTAINER */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            maxWidth: "1240px",
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
            userSelect: "none",
          }}
        >
          {/* GITHUB FLOATING ICON */}
          <div
            className="hero-fade hero-fade-d3 hero-float"
            style={{
              position: "absolute",
              top: "-28px",
              right: "4%",
              zIndex: 20,
            }}
          >
            <SmartLink
              href="https://github.com/hartantofauzi"
              style={{
                color: "var(--card-desc-color, rgba(255, 255, 255, 0.8))",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              className="hero-social-link"
            >
              <Icon name="github" size="l" />
            </SmartLink>
          </div>

          {/* LINKEDIN FLOATING ICON */}
          <div
            className="hero-fade hero-fade-d3 hero-float-slow"
            style={{
              position: "absolute",
              top: "32%",
              left: "10px",
              zIndex: 20,
            }}
          >
            <SmartLink
              href="https://linkedin.com/in/fauzi-hartanto"
              style={{
                color: "var(--card-desc-color, rgba(255, 255, 255, 0.8))",
                textDecoration: "none",
              }}
              className="hero-social-link"
            >
              <Icon name="linkedin" size="l" />
            </SmartLink>
          </div>

          {/* INSTAGRAM FLOATING ICON */}
          <div
            className="hero-fade hero-fade-d3 hero-float"
            style={{
              position: "absolute",
              bottom: "24%",
              right: "10px",
              zIndex: 20,
            }}
          >
            <SmartLink
              href="https://instagram.com"
              style={{
                color: "var(--card-desc-color, rgba(255, 255, 255, 0.8))",
                textDecoration: "none",
                display: "inline-flex",
              }}
              className="hero-social-link"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </SmartLink>
          </div>

          {/* ROW 1: AI & DATA */}
          <h1
            className="hero-line hero-line-1"
            style={{
              fontSize: "clamp(2.8rem, 8.2vw, 8.5rem)",
              fontWeight: 900,
              lineHeight: "0.85",
              letterSpacing: "-3px",
              color: "var(--card-title-color, #ffffff)",
              fontFamily: "var(--font-heading), 'Inter', sans-serif",
              margin: 0,
              textAlign: "center",
              whiteSpace: "nowrap",
            }}
          >
            AI &amp; DATA
          </h1>

          {/* ROW 2: SOFT⚡WARE */}
          <h1
            className="hero-line hero-line-2"
            style={{
              fontSize: "clamp(2.8rem, 8.2vw, 8.5rem)",
              fontWeight: 900,
              lineHeight: "0.85",
              letterSpacing: "-3px",
              color: "var(--card-title-color, #ffffff)",
              fontFamily: "var(--font-heading), 'Inter', sans-serif",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: 0,
              whiteSpace: "nowrap",
            }}
          >
            <span>SOFT</span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 0.04em",
              }}
            >
              <svg
                width="0.8em"
                height="0.8em"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  filter: "drop-shadow(0 0 18px rgba(56, 189, 248, 0.85))",
                }}
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </span>
            <span>WARE</span>
          </h1>

          {/* ROW 3: EN🤖GINEER */}
          <h1
            className="hero-line hero-line-3"
            style={{
              fontSize: "clamp(2.8rem, 8.2vw, 8.5rem)",
              fontWeight: 900,
              lineHeight: "0.85",
              letterSpacing: "-3px",
              color: "var(--card-title-color, #ffffff)",
              fontFamily: "var(--font-heading), 'Inter', sans-serif",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: 0,
              whiteSpace: "nowrap",
            }}
          >
            <span>EN</span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 0.04em",
              }}
            >
              <svg
                width="0.85em"
                height="0.85em"
                viewBox="0 0 24 24"
                fill="rgba(234, 179, 8, 0.18)"
                stroke="#eab308"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  filter: "drop-shadow(0 0 22px rgba(234, 179, 8, 0.75))",
                }}
              >
                <path d="M12 8V4H8" />
                <rect width="16" height="12" x="4" y="8" rx="2" />
                <path d="M2 14h2" />
                <path d="M20 14h2" />
                <path d="M15 13v2" />
                <path d="M9 13v2" />
              </svg>
            </span>
            <span>GINEER</span>
          </h1>
        </div>

        {/* BOTTOM FOOTER BAR RAISED UP HIGH (BOTTOM 95PX) TO SIT CLEARLY INSIDE VIEWPORT */}
        <div
          className="hero-fade hero-fade-d4"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            width: "100%",
            maxWidth: "1240px",
            padding: "0 20px",
            boxSizing: "border-box",
            position: "absolute",
            bottom: "95px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {/* SEPARATOR LINE */}
          <div
            style={{
              flex: 1,
              height: "1px",
              background: "var(--card-border, rgba(255, 255, 255, 0.12))",
            }}
          />

          {/* LOCATION & YEAR */}
          <div
            style={{
              fontSize: "11px",
              fontFamily: "'Geist Mono', monospace, sans-serif",
              fontWeight: 800,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--card-desc-color, rgba(255, 255, 255, 0.65))",
              whiteSpace: "nowrap",
            }}
          >
            YOGYAKARTA, ID — 2026
          </div>

          {/* INTERACTIVE EXPANDABLE RESUME / CV BUTTON */}
          <div
            onClick={handleDownloadCV}
            onMouseEnter={() => setIsHoveredResume(true)}
            onMouseLeave={() => setIsHoveredResume(false)}
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              background: "#ffffff",
              color: "#0f172a",
              height: "48px",
              width: isHoveredResume ? "180px" : "48px",
              borderRadius: "999px",
              transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
              overflow: "hidden",
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
            }}
          >
            <span
              style={{
                whiteSpace: "nowrap",
                opacity: isHoveredResume ? 1 : 0,
                transition: "opacity 0.2s ease 0.1s",
                fontSize: "10px",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "2.5px",
                paddingLeft: "24px",
                paddingRight: "48px",
                color: "#0f172a",
                userSelect: "none",
              }}
            >
              Unduh CV
            </span>
            <div
              style={{
                position: "absolute",
                right: "0",
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#0f172a",
                transform: isHoveredResume ? "rotate(45deg)" : "rotate(0deg)",
                transition: "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="7" x2="17" y2="17" />
                <polyline points="17 7 17 17 7 17" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          KONTEN DI BAWAH HERO (PEEL PANEL SOLID WITH CENTERED MAX-WIDTH 1240PX)
          ====================================================================== */}
      <div
        className="content-peel-section"
        style={{
          paddingTop: "70px",
          paddingBottom: "40px",
        }}
      >
        <div
          className="content-peel-inner"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "90px",
          }}
        >
          {/* SECTION 2A: PROFESSIONAL STATISTICS */}
          <Reveal as="section" style={{ width: "100%" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "20px" }}>
              <span
                style={{
                  fontSize: "11px",
                  fontFamily: "'Geist Mono', monospace, sans-serif",
                  fontWeight: 800,
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  color: "#84cc16",
                  background: "rgba(132, 204, 22, 0.1)",
                  border: "1px solid rgba(132, 204, 22, 0.25)",
                  padding: "4px 12px",
                  borderRadius: "999px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span className="green-active-dot">●</span> STATISTIK PROFESIONAL
              </span>

              <h2
                style={{
                  fontSize: "clamp(1.6rem, 3.4vw, 2.7rem)",
                  fontWeight: 800,
                  lineHeight: "130%",
                  color: "var(--card-title-color, #ffffff)",
                  maxWidth: "820px",
                  margin: 0,
                }}
              >
                Data yang bicara. AI yang bernalar. Software yang rilis.
                <br />
                Tiga disiplin, satu engineer — dan angka di baliknya.
              </h2>

              <div
                className="megamenu-item-card"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                  width: "100%",
                  maxWidth: "820px",
                  marginTop: "12px",
                  borderRadius: "24px",
                  overflow: "hidden",
                }}
              >
                {STATS.map((stat, i) => (
                  <div
                    key={stat.label}
                    className="stat-card"
                    style={{
                      padding: "24px 16px",
                      borderRight: i < STATS.length - 1 ? "1px solid var(--card-border, rgba(255,255,255,0.08))" : "none",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "10px",
                        fontFamily: "'Geist Mono', monospace, sans-serif",
                        fontWeight: 700,
                        letterSpacing: "1.5px",
                        textTransform: "uppercase",
                        color: "var(--card-desc-color, rgba(255,255,255,0.6))",
                      }}
                    >
                      {stat.label}
                    </div>
                    {stat.isNumeric ? (
                      <StatNumber value={stat.value as number} suffix={stat.suffix} />
                    ) : (
                      <div style={{ fontSize: "32px", fontWeight: 800, color: "var(--card-title-color, #ffffff)" }}>
                        {stat.value}
                        <span style={{ fontSize: "16px", opacity: 0.6 }}>{stat.suffix}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* SECTION 2B: TECH STACK MARQUEE (dua baris, arah berlawanan) */}
          <Reveal as="section" style={{ width: "100%" }}>
            <div style={{ textAlign: "center", marginBottom: "24px" }}>
              <span
                style={{
                  fontSize: "11px",
                  fontFamily: "'Geist Mono', monospace, sans-serif",
                  fontWeight: 800,
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  color: "var(--card-desc-color, rgba(255,255,255,0.55))",
                }}
              >
                TECH STACK &amp; ECOSYSTEM
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <MarqueeRow items={TECH_ROW_1} />
              <MarqueeRow items={TECH_ROW_2} reverse />
            </div>
          </Reveal>

          {/* SECTION 2C: CORE FOCUS & PLATFORM GRID */}
          <section
            id="focus-section"
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "40px",
              scrollMarginTop: "100px",
            }}
          >
            {/* FOCUS BADGE */}
            <Reveal>
              <span
                style={{
                  fontSize: "11px",
                  fontFamily: "'Geist Mono', monospace, sans-serif",
                  fontWeight: 800,
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  color: "#84cc16",
                  background: "rgba(132, 204, 22, 0.1)",
                  border: "1px solid rgba(132, 204, 22, 0.25)",
                  padding: "4px 12px",
                  borderRadius: "999px",
                }}
              >
                FOKUS INTI
              </span>
            </Reveal>

            {/* GIANT QUOTE TITLE */}
            <Reveal delay={0.1} style={{ maxWidth: "880px" }}>
              <h2
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
                  fontWeight: 800,
                  lineHeight: "120%",
                  color: "var(--card-title-color, #ffffff)",
                  letterSpacing: "-1px",
                  fontFamily: "var(--font-heading), 'Inter', sans-serif",
                  margin: 0,
                }}
              >
                " AI Terapan. Data Skalabel. Rekayasa Perangkat Lunak Tangguh. "
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  color: "var(--card-desc-color, rgba(255, 255, 255, 0.7))",
                  marginTop: "16px",
                  lineHeight: "160%",
                }}
              >
                Saya membangun sistem cerdas dan <span style={{ fontStyle: "italic", color: "#84cc16" }}>infrastruktur data</span> yang membuatnya handal dalam skala besar.
              </p>
            </Reveal>

            {/* 3 GRID CARDS: SCOPE & PLATFORM, INTEGRATION, TECHNICAL STACK */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "20px",
                marginTop: "10px",
              }}
            >
              {/* CARD 1: SCOPE & PLATFORM */}
              <Reveal delay={0.05}>
                <div
                  className="megamenu-item-card"
                  style={{
                    padding: "28px",
                    borderRadius: "24px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "20px",
                    height: "100%",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: "11px",
                        fontFamily: "'Geist Mono', monospace, sans-serif",
                        fontWeight: 800,
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        color: "#94a3b8",
                      }}
                    >
                      SCOPE &amp; PLATFORM
                    </div>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "var(--card-desc-color, rgba(255, 255, 255, 0.8))",
                        marginTop: "14px",
                        lineHeight: "160%",
                      }}
                    >
                      Berfokus pada model prediktif, pemrosesan data yang dioptimalkan, dan pipeline RAG yang dirancang untuk lingkungan produksi dan performa terukur.
                    </p>
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#84cc16",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    ● Menghubungkan lab dan sistem langsung
                  </div>
                </div>
              </Reveal>

              {/* CARD 2: INTEGRATION */}
              <Reveal delay={0.15}>
                <div
                  className="megamenu-item-card"
                  style={{
                    padding: "28px",
                    borderRadius: "24px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "20px",
                    height: "100%",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: "11px",
                        fontFamily: "'Geist Mono', monospace, sans-serif",
                        fontWeight: 800,
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        color: "#94a3b8",
                      }}
                    >
                      INTEGRATION
                    </div>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "var(--card-desc-color, rgba(255, 255, 255, 0.8))",
                        marginTop: "14px",
                        lineHeight: "160%",
                      }}
                    >
                      Selain model, saya merancang ekosistem full-stack: backend yang aman, arsitektur data yang kuat, dan pipeline yang skalabel.
                    </p>
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#84cc16",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    ● Arsitektur data yang kuat &amp; aman
                  </div>
                </div>
              </Reveal>

              {/* CARD 3: CORE TECH STACK */}
              <Reveal delay={0.25}>
                <div
                  className="megamenu-item-card"
                  style={{
                    padding: "28px",
                    borderRadius: "24px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "20px",
                    height: "100%",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: "11px",
                        fontFamily: "'Geist Mono', monospace, sans-serif",
                        fontWeight: 800,
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        color: "#94a3b8",
                      }}
                    >
                      TECH STACK &amp; CORE
                    </div>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "var(--card-desc-color, rgba(255, 255, 255, 0.8))",
                        marginTop: "14px",
                        lineHeight: "160%",
                      }}
                    >
                      Penguasaan mendalam pada PHP (CodeIgniter 3), Java &amp; Jetpack Compose (Android Native), Next.js, Node.js, Python Data Analytics, dan Manajemen Server.
                    </p>
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#84cc16",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    ● Fullstack Web &amp; Native Mobile
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};