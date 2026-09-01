"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/Reveal";

interface DocumentItem {
  id: string;
  category: string;
  title: string;
  description: string;
  filename: string;
  fileSize: string;
  url: string;
}

const DOCUMENTS: DocumentItem[] = [
  {
    id: "cv-pdf",
    category: "CV & RIWAYAT HIDUP",
    title: "Curriculum Vitae (CV) Fauzi Hartanto",
    description: "Berkas riwayat hidup resmi yang memuat pengalaman kerja, riwayat pendidikan S1 Sistem Informasi UTY, serta keahlian teknis.",
    filename: "CV_Fauzi_Hartanto.pdf",
    fileSize: "123 KB",
    url: "/documents/CV_Fauzi_Hartanto.pdf",
  },
  {
    id: "portofolio-desain",
    category: "PORTOFOLIO DESAIN & CAD",
    title: "Portofolio Desain Fauzi Hartanto",
    description: "Dokumentasi perancangan 3D CAD, perakitan jig & fixture, serta antarmuka perangkat lunak.",
    filename: "Portofolio_Desain_Fauzi Hartanto.pdf",
    fileSize: "1.76 MB",
    url: "/documents/Portofolio_Desain_Fauzi%20Hartanto.pdf",
  },
  {
    id: "sk-kerja",
    category: "SURAT KETERANGAN KERJA",
    title: "Surat Keterangan Kerja PT. Pola Paperindo Evaluindo",
    description: "Surat keterangan resmi pengalaman kerja profesional (No. SK P1602) pada PT. Pola Paperindo Evaluindo.",
    filename: "SK KERJA FAUZI HARTANTO P1602.pdf",
    fileSize: "109 KB",
    url: "/documents/SK%20KERJA%20FAUZI%20HARTANTO%20P1602.pdf",
  },
  {
    id: "sertifikat-hmsi",
    category: "SERTIFIKAT ORGANISASI",
    title: "Sertifikat Kepengurusan HMSI UTY",
    description: "Sertifikat pengakuan keorganisasian aktif pada Himpunan Mahasiswa Sistem Informasi Universitas Teknologi Yogyakarta.",
    filename: "Sertifikat_Kepengurusan HMSI_Fauzi Hartanto.pdf",
    fileSize: "6.26 MB",
    url: "/documents/Sertifikat_Kepengurusan%20HMSI_Fauzi%20Hartanto.pdf",
  },
  {
    id: "sertifikat-magang",
    category: "SERTIFIKAT MAGANG",
    title: "Sertifikat Magang Industri",
    description: "Sertifikat bukti penyelesaian program praktik kerja lapangan / magang industri.",
    filename: "Sertifikat_Magang_Fauzi Hartanto.pdf",
    fileSize: "113 KB",
    url: "/documents/Sertifikat_Magang_Fauzi%20Hartanto.pdf",
  },
  {
    id: "sertifikat-volunteer",
    category: "SERTIFIKAT RELAWAN",
    title: "Sertifikat Volunteer & Program Sosial",
    description: "Sertifikat partisipasi aktif dalam kegiatan sosial, pengabdian masyarakat, dan program kevolunteran.",
    filename: "Sertifikat_Volunteer_Fauzi Hartanto.pdf",
    fileSize: "477 KB",
    url: "/documents/Sertifikat_Volunteer_Fauzi%20Hartanto.pdf",
  },
  {
    id: "toefl-cert",
    category: "SERTIFIKAT BAHASA",
    title: "Sertifikat Kemampuan Bahasa Inggris (TOEFL)",
    description: "Sertifikat resmi uji kemampuan bahasa Inggris TOEFL (No. Reg. 3233111019).",
    filename: "TOEFL_3233111019_Fauzi Hartanto.pdf",
    fileSize: "362 KB",
    url: "/documents/TOEFL_3233111019_Fauzi%20Hartanto.pdf",
  },
];

export const DocumentsClient: React.FC = () => {
  const [expandedDocId, setExpandedDocId] = useState<string | null>(null);
  const [hoveredDocId, setHoveredDocId] = useState<string | null>(null);

  const handleDownload = (e: React.MouseEvent, url: string, filename: string) => {
    e.stopPropagation();
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const toggleExpand = (docId: string) => {
    if (expandedDocId === docId) {
      setExpandedDocId(null);
    } else {
      setExpandedDocId(docId);
      /* AUTOMATIC SMOOTH AUTO-SCROLL TO CENTER EXPANDED CARD ON SCREEN */
      setTimeout(() => {
        const el = document.getElementById(`doc-card-${docId}`);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 120);
    }
  };

  return (
    <div style={{ width: "100%", maxWidth: "1240px", margin: "0 auto", padding: "40px 16px 80px", display: "flex", flexDirection: "column", gap: "40px" }}>
      {/* HEADER SECTION - THEME AWARE COLORS */}
      <Reveal>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <span
            style={{
              fontSize: "11px",
              fontFamily: "'Geist Mono', monospace, sans-serif",
              fontWeight: 700,
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              color: "var(--card-desc-color, #475569)",
            }}
          >
            DOKUMEN &amp; BERKAS RESMI
          </span>

          <h1
            style={{
              fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
              fontWeight: 800,
              lineHeight: "115%",
              letterSpacing: "-1.5px",
              color: "var(--card-title-color, #0f172a)",
              margin: 0,
            }}
          >
            Arsip Dokumen
          </h1>

          <p
            style={{
              fontSize: "15px",
              color: "var(--card-desc-color, #475569)",
              maxWidth: "680px",
              margin: 0,
              lineHeight: "160%",
            }}
          >
            Daftar berkas resmi mencakup Curriculum Vitae, surat keterangan kerja, portofolio desain, sertifikat keorganisasian, magang, relawan, dan uji kemampuan bahasa.
          </p>
        </div>
      </Reveal>

      {/* DOKUMEN LIST MENURUN KE BAWAH (SOLID BACKGROUND, HIGH CONTRAST LIGHT/DARK & AUTO-SCROLL CENTER) */}
      <section style={{ width: "100%", display: "flex", flexDirection: "column", gap: "16px" }}>
        {DOCUMENTS.map((doc, index) => {
          const isExpanded = expandedDocId === doc.id;
          const isHovered = hoveredDocId === doc.id;

          return (
            <Reveal key={doc.id} delay={index * 0.05}>
              <div
                id={`doc-card-${doc.id}`}
                onMouseEnter={() => setHoveredDocId(doc.id)}
                onMouseLeave={() => setHoveredDocId(null)}
                style={{
                  width: "100%",
                  borderRadius: "20px",
                  boxSizing: "border-box",
                  /* SOLID COLOR BACKGROUND ON BOTH LIGHT & DARK MODES */
                  background: isHovered || isExpanded
                    ? "var(--card-solid-hover-bg, #161b22)"
                    : "var(--card-solid-bg, #0d1117)",
                  border: isExpanded
                    ? "2px solid #38bdf8"
                    : isHovered
                    ? "1px solid var(--card-title-color, #0f172a)"
                    : "1px solid var(--card-border, rgba(0, 0, 0, 0.1))",
                  boxShadow: isExpanded
                    ? "0 24px 48px rgba(0, 0, 0, 0.35)"
                    : isHovered
                    ? "0 10px 25px rgba(0, 0, 0, 0.12)"
                    : "0 2px 8px rgba(0, 0, 0, 0.04)",
                  transition: "background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease",
                  overflow: "hidden",
                }}
              >
                {/* CARD MAIN ROW */}
                <div
                  onClick={() => toggleExpand(doc.id)}
                  style={{
                    padding: "24px 28px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "16px",
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                >
                  {/* LEFT INFO CONTAINER */}
                  <div style={{ flex: 1, minWidth: "260px", display: "flex", flexDirection: "column", gap: "6px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span
                        style={{
                          fontSize: "10px",
                          fontFamily: "'Geist Mono', monospace, sans-serif",
                          fontWeight: 700,
                          letterSpacing: "1.5px",
                          color: "var(--card-badge-color, #0f172a)",
                          background: "var(--card-badge-bg, rgba(0,0,0,0.06))",
                          padding: "3px 9px",
                          borderRadius: "6px",
                          textTransform: "uppercase",
                        }}
                      >
                        {doc.category}
                      </span>

                      <span
                        style={{
                          fontSize: "11px",
                          fontFamily: "'Geist Mono', monospace, sans-serif",
                          color: "var(--card-desc-color, #475569)",
                        }}
                      >
                        PDF • {doc.fileSize}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: 800,
                        color: "var(--card-title-color, #0f172a)",
                        margin: "2px 0 0 0",
                        lineHeight: "140%",
                      }}
                    >
                      {doc.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "13px",
                        lineHeight: "150%",
                        color: "var(--card-desc-color, #475569)",
                        margin: 0,
                        maxWidth: "760px",
                      }}
                    >
                      {doc.description}
                    </p>
                  </div>

                  {/* RIGHT ACTION BUTTONS */}
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(doc.id);
                      }}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        background: isExpanded ? "#38bdf8" : "var(--card-badge-bg, rgba(0,0,0,0.06))",
                        color: isExpanded ? "#0f172a" : "var(--card-title-color, #0f172a)",
                        fontWeight: 700,
                        fontSize: "12px",
                        padding: "9px 18px",
                        borderRadius: "8px",
                        border: "1px solid var(--card-border, rgba(0, 0, 0, 0.12))",
                        cursor: "pointer",
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                      {isExpanded ? "Sembunyikan Preview" : "Preview Dokumen"}
                    </button>

                    <button
                      onClick={(e) => handleDownload(e, doc.url, doc.filename)}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        background: "var(--card-title-color, #0f172a)",
                        color: "var(--card-solid-bg, #ffffff)",
                        fontWeight: 800,
                        fontSize: "12px",
                        padding: "9px 18px",
                        borderRadius: "8px",
                        border: "none",
                        cursor: "pointer",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      Unduh PDF
                    </button>
                  </div>
                </div>

                {/* ACCORDION EXPANSION WRAPPER WITH AUTO-SCROLL TO CENTER */}
                <div
                  style={{
                    maxHeight: isExpanded ? "750px" : "0px",
                    opacity: isExpanded ? 1 : 0,
                    transform: isExpanded ? "translateY(0px)" : "translateY(-8px)",
                    transition: "max-height 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease, transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
                    overflow: "hidden",
                    width: "100%",
                    borderTop: isExpanded ? "1px solid var(--card-border, rgba(0, 0, 0, 0.12))" : "none",
                    background: "var(--card-solid-hover-bg, #0d1117)",
                  }}
                >
                  {/* TOOLBAR */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "14px 24px",
                      background: "var(--card-badge-bg, rgba(0,0,0,0.03))",
                      borderBottom: "1px solid var(--card-border, rgba(0,0,0,0.08))",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ fontSize: "12px", color: "#38bdf8", fontWeight: 700 }}>📖 PRATINJAU DOKUMEN PDF LANGSUNG:</span>
                      <span style={{ fontSize: "12px", color: "var(--card-title-color, #ffffff)", fontWeight: 700 }}>{doc.filename}</span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <button
                        onClick={(e) => handleDownload(e, doc.url, doc.filename)}
                        style={{
                          background: "var(--card-title-color, #0f172a)",
                          color: "var(--card-solid-bg, #ffffff)",
                          fontWeight: 700,
                          fontSize: "11px",
                          padding: "6px 12px",
                          borderRadius: "6px",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        Unduh Berkas PDF
                      </button>

                      <button
                        onClick={() => toggleExpand(doc.id)}
                        style={{
                          background: "transparent",
                          color: "var(--card-desc-color, #475569)",
                          fontWeight: 700,
                          fontSize: "11px",
                          padding: "6px 12px",
                          borderRadius: "6px",
                          border: "1px solid var(--card-border, rgba(0, 0, 0, 0.15))",
                          cursor: "pointer",
                        }}
                      >
                        ▲ Tutup Pratinjau
                      </button>
                    </div>
                  </div>

                  {/* EMBEDDED IFRAME */}
                  <div style={{ width: "100%", height: "650px", background: "#161b22" }}>
                    {isExpanded && (
                      <iframe
                        src={`${doc.url}#toolbar=0`}
                        style={{ width: "100%", height: "100%", border: "none" }}
                        title={doc.title}
                      />
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </section>
    </div>
  );
};
