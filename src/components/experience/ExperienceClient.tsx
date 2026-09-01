"use client";

import React from "react";
import { Reveal } from "@/components/Reveal";
import { about } from "@/resources/content";
import { SmartLink } from "@once-ui-system/core";

const PROJECT_EXPERIENCES = [
  {
    title: "KasGo – Proyek Mandiri",
    role: "Mobile Development (Fullstack Developer)",
    period: "Jun 2026 – Jul 2026",
    description:
      "Mengembangkan aplikasi keuangan Android local-first menggunakan Jetpack Compose (Material Design 3) dan Room Database untuk mengelola simpanan komunitas, pinjaman, dan arisan. Merancang arsitektur aplikasi Clean Architecture & MVVM, injeksi dependensi Dagger Hilt, autentikasi BiometricPrompt API (sidik jari/wajah), serta ekspor laporan keuangan dinamis berformat PDF dan Excel.",
    skills: ["Jetpack Compose", "Room Database", "Clean Architecture", "Biometric Security", "Data Export (PDF/Excel)"],
    link: "/work/kasgo-simpan-pinjam-rt05",
  },
  {
    title: "My Asset – Proyek Tugas Akhir",
    role: "Mobile Development (Fullstack Developer)",
    period: "Feb 2026 – Mei 2026",
    description:
      "Mengembangkan aplikasi Android native menggunakan Java dan Android SDK terintegrasi database MySQL via RESTful API asinkron (format JSON). Mengimplementasikan pemindaian QR Code berbasis kamera untuk stok opname audit ruangan fisik, sistem pelacakan pemeliharaan berbasis tiket dengan Kontrol Akses Berbasis Peran (RBAC), serta unduh laporan PDF lokal via Android Download Manager API.",
    skills: ["Android SDK (Java)", "QR Code Scanning", "REST API Integration", "RBAC Access Control", "Mobile UI"],
    link: "/work/my-asset-aplikasi-pelacak-aset",
  },
  {
    title: "Inventory Management System – Magang",
    role: "Web Development (Fullstack Developer)",
    period: "Sep 2025 – Jan 2026",
    description:
      "Merancang dan mengembangkan sistem administrasi web terpusat beserta backend RESTful API menggunakan PHP (framework CodeIgniter 3) dan database MySQL. Merumuskan skema database relasional (ERD) yang dioptimalkan untuk data master aset, kredensial pegawai, lokasi, dan log riwayat layanan.",
    skills: ["Web System Admin", "PHP CodeIgniter 3", "REST API Development", "Relational Database (MySQL)"],
    link: "/work/web-inventory-management-system",
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
            Pengalaman Kerja &amp; Keorganisasian
          </h1>

          <p
            style={{
              fontSize: "16px",
              color: "var(--card-desc-color, rgba(255, 255, 255, 0.75))",
              maxWidth: "780px",
              margin: 0,
              lineHeight: "160%",
            }}
          >
            Rekam jejak profesional pengembangan perangkat lunak web/mobile, digitalisasi data kesehatan masyarakat, perancangan manufaktur presisi, serta kepemimpinan organisasi.
          </p>
        </div>
      </Reveal>

      {/* SECTION 1: PENGALAMAN KERJA & ORGANISASI */}
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
              💼 PENGALAMAN KERJA &amp; ORGANISASI RESMI
            </span>
          </div>
        </Reveal>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {about.work.experiences.map((exp: any, index: number) => (
            <Reveal key={exp.company + index} delay={index * 0.08}>
              <div
                className="megamenu-item-card"
                style={{
                  padding: "32px",
                  borderRadius: "24px",
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

                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
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

                    {exp.documentUrl && (
                      <a
                        href={exp.documentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: "12px",
                          fontWeight: 700,
                          color: "#84cc16",
                          background: "rgba(132, 204, 22, 0.12)",
                          border: "1px solid rgba(132, 204, 22, 0.3)",
                          padding: "6px 14px",
                          borderRadius: "999px",
                          textDecoration: "none",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        📄 {exp.documentName || "Cek Berkas PDF"}
                      </a>
                    )}
                  </div>
                </div>

                <ul
                  style={{
                    fontSize: "14px",
                    lineHeight: "170%",
                    color: "var(--card-desc-color, rgba(255, 255, 255, 0.78))",
                    margin: 0,
                    paddingLeft: "20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  {exp.achievements.map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 2: PENGALAMAN PROYEK */}
      <section style={{ width: "100%", display: "flex", flexDirection: "column", gap: "28px" }}>
        <Reveal>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span
              style={{
                fontSize: "12px",
                fontFamily: "'Geist Mono', monospace, sans-serif",
                fontWeight: 800,
                letterSpacing: "2px",
                color: "#38bdf8",
                textTransform: "uppercase",
              }}
            >
              🚀 PENGALAMAN PROYEK
            </span>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "20px" }}>
          {PROJECT_EXPERIENCES.map((proj, index) => (
            <Reveal key={proj.title} delay={index * 0.1}>
              <SmartLink href={proj.link} style={{ textDecoration: "none", width: "100%", display: "block" }}>
                <div
                  className="megamenu-item-card"
                  style={{
                    padding: "28px",
                    borderRadius: "24px",
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
                          fontWeight: 800,
                          color: "#38bdf8",
                          background: "rgba(56, 189, 248, 0.1)",
                          padding: "3px 8px",
                          borderRadius: "999px",
                        }}
                      >
                        {proj.period}
                      </span>
                    </div>

                    <h3 style={{ fontSize: "20px", fontWeight: 800, color: "var(--card-title-color, #ffffff)", margin: "0 0 6px 0" }}>
                      {proj.title}
                    </h3>

                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#84cc16", marginBottom: "12px" }}>
                      {proj.role}
                    </div>

                    <p style={{ fontSize: "13px", lineHeight: "160%", color: "var(--card-desc-color, rgba(255, 255, 255, 0.75))", margin: 0 }}>
                      {proj.description}
                    </p>
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "12px" }}>
                    {proj.skills.map((s) => (
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
              </SmartLink>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 3: PENDIDIKAN & KURSUS / SERTIFIKASI */}
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
              🎓 PENDIDIKAN, KURSUS &amp; SERTIFIKASI
            </span>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px" }}>
          {about.studies.institutions.map((edu, idx) => (
            <Reveal key={edu.name} delay={idx * 0.1}>
              <div
                className="megamenu-item-card"
                style={{
                  padding: "28px",
                  borderRadius: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  height: "100%",
                }}
              >
                <h3 style={{ fontSize: "18px", fontWeight: 800, color: "var(--card-title-color, #ffffff)", margin: 0 }}>
                  {edu.name}
                </h3>
                <p style={{ fontSize: "13px", lineHeight: "160%", color: "var(--card-desc-color, rgba(255, 255, 255, 0.75))", margin: 0 }}>
                  {edu.description}
                </p>

                {edu.documentUrl && (
                  <a
                    href={edu.documentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#84cc16",
                      textDecoration: "none",
                      marginTop: "auto",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    📄 {edu.documentName || "Cek Berkas Sertifikat"}
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
};
