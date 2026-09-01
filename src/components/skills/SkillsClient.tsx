"use client";

import React from "react";
import { Reveal } from "@/components/Reveal";
import { SmartLink } from "@once-ui-system/core";

const SERVICES = [
  {
    category: "WEB DEVELOPER",
    title: "Web Applications",
    description:
      "Membangun sistem web responsif dengan PHP, CodeIgniter 3, dan database relasional. Merancang dan mengoptimalkan alat manajemen inventaris serta solusi kustom perusahaan.",
    badgeColor: "#38bdf8",
    badgeBg: "rgba(56, 189, 248, 0.1)",
    borderColor: "rgba(56, 189, 248, 0.25)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    category: "MOBILE DEVELOPER",
    title: "Pengembangan Android",
    description:
      "Merancang dan mengembangkan aplikasi Android native menggunakan Java dan Android Studio, berfokus pada performa, tata letak modular, dan pengalaman pengguna yang bersih.",
    badgeColor: "#84cc16",
    badgeBg: "rgba(132, 204, 22, 0.1)",
    borderColor: "rgba(132, 204, 22, 0.25)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#84cc16" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="3" ry="3" />
        <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    category: "CAD ENGINEER",
    title: "CAD 3D & Dokumentasi",
    description:
      "Membuat desain 3D yang sangat akurat untuk perakitan (jig & fixture) dengan Solid Edge serta menyusun Prosedur Operasional Standar (SOP) profesional.",
    badgeColor: "#38bdf8",
    badgeBg: "rgba(56, 189, 248, 0.1)",
    borderColor: "rgba(56, 189, 248, 0.25)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
];

const MAIN_LANGUAGES = [
  {
    name: "PHP",
    role: "Web Development / CI3",
    iconBg: "rgba(137, 147, 190, 0.15)",
    iconColor: "#8993be",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-3 13V9h2.5a2.5 2.5 0 0 1 0 5H9zm6 0V9h2.5a2.5 2.5 0 0 1 0 5H15z" />
      </svg>
    ),
  },
  {
    name: "Java",
    role: "Android / Enterprise",
    iconBg: "rgba(234, 88, 12, 0.15)",
    iconColor: "#ea580c",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M8 4v2M16 4v2" />
        <path d="M6 10a6 6 0 0 0 12 0V9H6v1z" />
        <path d="M18 11a3 3 0 0 0 3-3V7h-3v4z" />
        <path d="M4 19c4 2 12 2 16 0" />
      </svg>
    ),
  },
  {
    name: "Python",
    role: "Data & Scripting",
    iconBg: "rgba(234, 179, 8, 0.15)",
    iconColor: "#eab308",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c-4 0-5 2-5 4v2h6v1H6C4 9 2 10 2 14s2 5 6 5h1v-2c0-2 1-3 3-3h4c2 0 3-1 3-3V6c0-2-2-4-7-4z" />
        <circle cx="9.5" cy="5.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "MySQL / SQL",
    role: "Database Architecture",
    iconBg: "rgba(56, 189, 248, 0.15)",
    iconColor: "#38bdf8",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
];

export const SkillsClient: React.FC = () => {
  return (
    <div style={{ width: "100%", maxWidth: "1240px", margin: "0 auto", padding: "40px 16px 80px", display: "flex", flexDirection: "column", gap: "60px" }}>
      {/* HEADER SECTION */}
      <Reveal>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
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
              width: "fit-content",
            }}
          >
            TECHNICAL EXPERTISE
          </span>

          <h1
            style={{
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              fontWeight: 900,
              lineHeight: "110%",
              letterSpacing: "-2px",
              color: "var(--card-title-color, #ffffff)",
              margin: 0,
            }}
          >
            Keahlian &amp; Layanan Spesialis
          </h1>

          <p
            style={{
              fontSize: "16px",
              color: "var(--card-desc-color, rgba(255, 255, 255, 0.75))",
              maxWidth: "720px",
              margin: 0,
              lineHeight: "160%",
            }}
          >
            Penguasaan mendalam dalam rekayasa perangkat lunak fullstack, pengaplikasian Android native, pemodelan CAD 3D presisi tinggi, dan arsitektur database terstruktur.
          </p>
        </div>
      </Reveal>

      {/* SECTION 1: 3 SERVICE CARDS (WEB, MOBILE, CAD) */}
      <section style={{ width: "100%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {SERVICES.map((serv, index) => (
            <Reveal key={serv.title} delay={index * 0.1}>
              <div
                className="megamenu-item-card"
                style={{
                  padding: "32px 28px",
                  borderRadius: "24px",
                  minHeight: "260px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  background: "var(--card-bg, rgba(255, 255, 255, 0.02))",
                  backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                  border: "1px solid var(--card-border, rgba(255, 255, 255, 0.08))",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "14px",
                        background: serv.badgeBg,
                        border: `1px solid ${serv.borderColor}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {serv.icon}
                    </div>

                    <span
                      style={{
                        fontSize: "10px",
                        fontFamily: "'Geist Mono', monospace, sans-serif",
                        fontWeight: 800,
                        letterSpacing: "2px",
                        color: serv.badgeColor,
                        textTransform: "uppercase",
                      }}
                    >
                      {serv.category}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: 800,
                      color: "var(--card-title-color, #ffffff)",
                      margin: "0 0 12px 0",
                    }}
                  >
                    {serv.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: "160%",
                      color: "var(--card-desc-color, rgba(255, 255, 255, 0.7))",
                      margin: 0,
                    }}
                  >
                    {serv.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 2: BAHASA PEMROGRAMAN UTAMA */}
      <section style={{ width: "100%", display: "flex", flexDirection: "column", gap: "28px" }}>
        <Reveal>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "22px", color: "#38bdf8", fontWeight: 900 }}>&lt;/&gt;</span>
            <h2
              style={{
                fontSize: "26px",
                fontWeight: 800,
                color: "var(--card-title-color, #ffffff)",
                margin: 0,
              }}
            >
              Bahasa Pemrograman Utama
            </h2>
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
          }}
        >
          {MAIN_LANGUAGES.map((lang, index) => (
            <Reveal key={lang.name} delay={index * 0.08}>
              <div
                className="megamenu-item-card"
                style={{
                  padding: "24px",
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "18px",
                  background: "var(--card-bg, rgba(255, 255, 255, 0.03))",
                  border: "1px solid var(--card-border, rgba(255, 255, 255, 0.08))",
                }}
              >
                <div
                  style={{
                    width: "54px",
                    height: "54px",
                    borderRadius: "16px",
                    background: lang.iconBg,
                    color: lang.iconColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {lang.icon}
                </div>

                <div>
                  <h4
                    style={{
                      fontSize: "18px",
                      fontWeight: 800,
                      color: "var(--card-title-color, #ffffff)",
                      margin: "0 0 4px 0",
                    }}
                  >
                    {lang.name}
                  </h4>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "var(--card-desc-color, rgba(255, 255, 255, 0.6))",
                      fontFamily: "'Geist Mono', monospace, sans-serif",
                    }}
                  >
                    {lang.role}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
};
