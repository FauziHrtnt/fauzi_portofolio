"use client";

import React from "react";
import { Reveal } from "@/components/Reveal";
import { about } from "@/resources/content";

const ORGANIZATIONS = [
  {
    role: "Pengurus & Anggota Aktif Himpunan Mahasiswa Informatika",
    organization: "Universitas Teknologi Yogyakarta (UTY)",
    period: "2023 — Sekarang",
    description:
      "Berperan aktif dalam penyelenggaraan lokakarya teknologi, pengabdian masyarakat, serta memimpin divisi teknis dalam pengembangan platform digital internal.",
    skills: ["Leadership", "Event Management", "Public Speaking", "Public Relations"],
  },
  {
    role: "Koordinator Tim Riset & Pengembang Perangkat Lunak",
    organization: "UTY Innovation & Tech Community",
    period: "2024 — Sekarang",
    description:
      "Mengoordinasikan tim riset mahasiswa dalam membangun prototipe sistem berbasis AI dan aplikasi pemantauan inventaris terdistribusi.",
    skills: ["Team Leadership", "Project Architecture", "Code Review"],
  },
];

export const ExperienceClient: React.FC = () => {
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
              color: "#38bdf8",
              background: "rgba(56, 189, 248, 0.1)",
              border: "1px solid rgba(56, 189, 248, 0.25)",
              padding: "4px 12px",
              borderRadius: "999px",
              width: "fit-content",
            }}
          >
            CAREER &amp; LEADERSHIP
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
            Pengalaman Kerja &amp; Organisasi
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
            Rekam jejak profesional dalam industri perangkat lunak, sistem manufaktur terpadu, dan kepemimpinan organisasi teknologi.
          </p>
        </div>
      </Reveal>

      {/* SECTION 1: WORK EXPERIENCES */}
      <section style={{ width: "100%", display: "flex", flexDirection: "column", gap: "28px" }}>
        <Reveal>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span
              style={{
                fontSize: "12px",
                fontFamily: "'Geist Mono', monospace, sans-serif",
                fontWeight: 800,
                letterSpacing: "2px",
                color: "#84cc16",
                textTransform: "uppercase",
              }}
            >
              💼 PENGALAMAN KERJA PROFESIONAL
            </span>
          </div>
        </Reveal>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {about.work.experiences.map((exp: any, index: number) => (
            <Reveal key={exp.company + index} delay={index * 0.1}>
              <div
                className="megamenu-item-card"
                style={{
                  padding: "32px",
                  borderRadius: "24px",
                  background: "var(--card-bg, rgba(255, 255, 255, 0.02))",
                  border: "1px solid var(--card-border, rgba(255, 255, 255, 0.08))",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px" }}>
                  <div>
                    <h3 style={{ fontSize: "22px", fontWeight: 800, color: "var(--card-title-color, #ffffff)", margin: "0 0 6px 0" }}>
                      {exp.role}
                    </h3>
                    <div style={{ fontSize: "15px", fontWeight: 700, color: "#38bdf8" }}>{exp.company}</div>
                  </div>

                  <span
                    style={{
                      fontSize: "12px",
                      fontFamily: "'Geist Mono', monospace, sans-serif",
                      fontWeight: 700,
                      color: "var(--card-desc-color, rgba(255, 255, 255, 0.6))",
                      background: "rgba(255, 255, 255, 0.05)",
                      padding: "6px 14px",
                      borderRadius: "999px",
                    }}
                  >
                    {exp.timeframe}
                  </span>
                </div>

                <div
                  style={{
                    fontSize: "14px",
                    lineHeight: "170%",
                    color: "var(--card-desc-color, rgba(255, 255, 255, 0.75))",
                  }}
                >
                  {exp.description}
                </div>

                {exp.skills && (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "8px" }}>
                    {exp.skills.map((skill: string) => (
                      <span
                        key={skill}
                        style={{
                          fontSize: "11px",
                          fontFamily: "'Geist Mono', monospace, sans-serif",
                          fontWeight: 700,
                          color: "#84cc16",
                          background: "rgba(132, 204, 22, 0.08)",
                          border: "1px solid rgba(132, 204, 22, 0.2)",
                          padding: "4px 10px",
                          borderRadius: "8px",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 2: ORGANIZATIONS & LEADERSHIP */}
      <section style={{ width: "100%", display: "flex", flexDirection: "column", gap: "28px" }}>
        <Reveal>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span
              style={{
                fontSize: "12px",
                fontFamily: "'Geist Mono', monospace, sans-serif",
                fontWeight: 800,
                letterSpacing: "2px",
                color: "#eab308",
                textTransform: "uppercase",
              }}
            >
              🏛️ KEORGANISASIAN &amp; KEPEMIMPINAN
            </span>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px" }}>
          {ORGANIZATIONS.map((org, index) => (
            <Reveal key={org.role} delay={index * 0.1}>
              <div
                className="megamenu-item-card"
                style={{
                  padding: "28px",
                  borderRadius: "24px",
                  background: "var(--card-bg, rgba(255, 255, 255, 0.02))",
                  border: "1px solid var(--card-border, rgba(255, 255, 255, 0.08))",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "16px",
                  height: "100%",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                    <span
                      style={{
                        fontSize: "11px",
                        fontFamily: "'Geist Mono', monospace, sans-serif",
                        fontWeight: 700,
                        color: "#eab308",
                      }}
                    >
                      {org.period}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "18px", fontWeight: 800, color: "var(--card-title-color, #ffffff)", margin: "0 0 6px 0" }}>
                    {org.role}
                  </h3>

                  <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--card-desc-color, rgba(255, 255, 255, 0.6))", marginBottom: "14px" }}>
                    {org.organization}
                  </div>

                  <p style={{ fontSize: "13px", lineHeight: "160%", color: "var(--card-desc-color, rgba(255, 255, 255, 0.7))", margin: 0 }}>
                    {org.description}
                  </p>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "12px" }}>
                  {org.skills.map((s) => (
                    <span
                      key={s}
                      style={{
                        fontSize: "10px",
                        fontFamily: "'Geist Mono', monospace, sans-serif",
                        fontWeight: 700,
                        color: "#38bdf8",
                        background: "rgba(56, 189, 248, 0.08)",
                        padding: "3px 8px",
                        borderRadius: "6px",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
};
