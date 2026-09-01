"use client";

import { useState } from "react";
import {
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  Row,
  Schema,
  Tag,
  Text,
} from "@once-ui-system/core";
import { baseURL, blog } from "@/resources";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function DocumentsPage() {
  const [showPreview, setShowPreview] = useState(false);

  const handleDownload = (fileUrl: string, fileName: string) => {
    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const documentsList = [
    {
      title: "Curriculum Vitae (CV / Resume Utama)",
      category: "CV Resmi",
      description: "Dokumen CV resmi Fauzi Hartanto memuat riwayat pengalaman magang programmer, proyek aplikasi Android & Web, pendidikan D3 Sistem Informasi UTY, dan keahlian teknis.",
      fileUrl: "/documents/CV_Fauzi_Hartanto.pdf",
      fileName: "CV_Fauzi_Hartanto.pdf",
      size: "123 KB",
      updatedAt: "2026",
      icon: "person",
    },
    {
      title: "Portofolio Desain & UI/UX (PDF)",
      category: "Karya & Desain",
      description: "Dokumen portofolio desain antarmuka pengguna (UI/UX), wireframe, prototyping, dan desain sistem oleh Fauzi Hartanto.",
      fileUrl: "/documents/Portofolio_Desain_Fauzi Hartanto.pdf",
      fileName: "Portofolio_Desain_Fauzi_Hartanto.pdf",
      size: "1.76 MB",
      updatedAt: "2026",
      icon: "grid",
    },
    {
      title: "Sertifikat Magang Industri PT. Indo Techno Medic",
      category: "Sertifikat Magang",
      description: "Sertifikat resmi bukti penyelesaian magang industri divisi programmer sebagai pengembang Sistem Manajemen Inventaris Web (PHP CI3 & MySQL).",
      fileUrl: "/documents/Sertifikat_Magang_Fauzi Hartanto.pdf",
      fileName: "Sertifikat_Magang_Fauzi_Hartanto.pdf",
      size: "113 KB",
      updatedAt: "Jan 2026",
      icon: "grid",
    },
    {
      title: "Sertifikat Kepengurusan HMSI UTY",
      category: "Sertifikat Organisasi",
      description: "Sertifikat resmi pengangkatan dan kontribusi aktif sebagai Anggota Hubungan Masyarakat Himpunan Mahasiswa Sistem Informasi UTY.",
      fileUrl: "/documents/Sertifikat_Kepengurusan HMSI_Fauzi Hartanto.pdf",
      fileName: "Sertifikat_Kepengurusan_HMSI_Fauzi_Hartanto.pdf",
      size: "6.26 MB",
      updatedAt: "Sep 2025",
      icon: "book",
    },
    {
      title: "Sertifikat Volunteer Festival Bahasa dan Budaya",
      category: "Sertifikat Volunteer",
      description: "Sertifikat penghargaan sebagai Volunteer Tim Logistik & Keperluan pada Festival Bahasa dan Budaya UIN Sunan Kalijaga.",
      fileUrl: "/documents/Sertifikat_Volunteer_Fauzi Hartanto.pdf",
      fileName: "Sertifikat_Volunteer_Fauzi_Hartanto.pdf",
      size: "477 KB",
      updatedAt: "Sep 2025",
      icon: "globe",
    },
    {
      title: "Sertifikat English Proficiency Test (TOEFL / EPT)",
      category: "Sertifikasi Bahasa",
      description: "Sertifikat kemampuan bahasa Inggris UTY Center dengan Total Skor 487 (Structure & Written Expression: 530, Reading: 500).",
      fileUrl: "/documents/TOEFL_3233111019_Fauzi Hartanto.pdf",
      fileName: "TOEFL_3233111019_Fauzi_Hartanto.pdf",
      size: "362 KB",
      updatedAt: "Feb 2026",
      icon: "globe",
    },
    {
      title: "Surat Keterangan (SK) Kerja Resmi",
      category: "Surat Keterangan",
      description: "Surat Keterangan (SK) Pengalaman Kerja Resmi P1602 Fauzi Hartanto.",
      fileUrl: "/documents/SK KERJA FAUZI HARTANTO P1602.pdf",
      fileName: "SK_KERJA_FAUZI_HARTANTO_P1602.pdf",
      size: "109 KB",
      updatedAt: "2026",
      icon: "book",
    },
  ];

  return (
    <Column maxWidth="m" fillWidth gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
      />

      {/* HEADER PAGE */}
      <ScrollReveal direction="zoom" duration={0.8}>
        <Column fillWidth gap="m" horizontal="center" style={{ textAlign: "center" }}>
          <Heading as="h1" variant="display-strong-l">
            {blog.title}
          </Heading>
          <Text
            variant="body-default-l"
            onBackground="neutral-medium"
            style={{ maxWidth: "600px", lineHeight: "170%" }}
          >
            {blog.description}
          </Text>

          {/* ACTION BUTTON UNDUH CV UTAMA (MANUAL CLICK DOWNLOAD ONLY) */}
          <Row paddingTop="m" gap="12" wrap horizontal="center">
            <Button
              onClick={() => handleDownload("/documents/CV_Fauzi_Hartanto.pdf", "CV_Fauzi_Hartanto.pdf")}
              prefixIcon="arrowDown"
              variant="primary"
              size="l"
            >
              Unduh Curriculum Vitae (PDF)
            </Button>
            <Button
              onClick={() => setShowPreview(!showPreview)}
              prefixIcon="eye"
              variant="secondary"
              size="l"
            >
              {showPreview ? "Sembunyikan Pratinjau CV" : "Pratinjau CV di Layar"}
            </Button>
          </Row>
        </Column>
      </ScrollReveal>

      {/* OPTIONAL INTERACTIVE LIVE PDF PREVIEW (ONLY RENDERS WHEN USER CLICKS PRATINJAU) */}
      {showPreview && (
        <ScrollReveal direction="up" duration={0.85}>
          <Column
            fillWidth
            background="surface"
            border="neutral-alpha-medium"
            radius="l"
            padding="l"
            gap="m"
            shadow="l"
          >
            <Row fillWidth horizontal="between" vertical="center" wrap gap="12">
              <Row gap="12" vertical="center">
                <Icon name="person" onBackground="brand-strong" />
                <Text variant="heading-strong-m">Pratinjau Dokumen CV Fauzi Hartanto</Text>
              </Row>
              <Button
                onClick={() => handleDownload("/documents/CV_Fauzi_Hartanto.pdf", "CV_Fauzi_Hartanto.pdf")}
                prefixIcon="arrowDown"
                size="s"
                variant="primary"
              >
                Unduh PDF CV
              </Button>
            </Row>

            <Flex
              fillWidth
              radius="m"
              border="neutral-alpha-weak"
              style={{
                overflow: "hidden",
                height: "750px",
                background: "var(--neutral-surface-dark, #0d1117)",
              }}
            >
              <iframe
                src="/documents/CV_Fauzi_Hartanto.pdf"
                title="CV Fauzi Hartanto PDF Preview"
                width="100%"
                height="100%"
                style={{ border: "none", width: "100%", height: "100%" }}
              />
            </Flex>
          </Column>
        </ScrollReveal>
      )}

      {/* DAFTAR DOKUMEN & SERTIFIKAT GRID */}
      <Column fillWidth gap="m" marginTop="l">
        <ScrollReveal direction="up">
          <Heading as="h2" variant="display-strong-s" marginBottom="s">
            Daftar Berkas & Dokumen Terkait
          </Heading>
        </ScrollReveal>

        <Column fillWidth gap="m">
          {documentsList.map((doc, idx) => (
            <ScrollReveal
              key={`doc-item-${idx}`}
              direction={idx % 2 === 0 ? "left" : "right"}
              duration={0.8}
              delay={idx * 0.08}
            >
              <Column
                fillWidth
                background="surface"
                border="neutral-alpha-weak"
                radius="l"
                padding="l"
                gap="s"
              >
                <Row fillWidth horizontal="between" vertical="center" wrap gap="12">
                  <Row gap="12" vertical="center">
                    <Icon name={doc.icon as any} onBackground="brand-strong" />
                    <Text variant="heading-strong-m">{doc.title}</Text>
                  </Row>
                  <Tag size="m">{doc.category}</Tag>
                </Row>
                <Text
                  variant="body-default-m"
                  onBackground="neutral-weak"
                  style={{ textAlign: "justify", lineHeight: "170%" }}
                >
                  {doc.description}
                </Text>
                <Row fillWidth paddingTop="s" horizontal="between" vertical="center" wrap gap="12">
                  <Text variant="body-default-xs" onBackground="neutral-medium">
                    Ukuran Berkas: {doc.size} • Diperbarui: {doc.updatedAt}
                  </Text>
                  <Button
                    onClick={() => handleDownload(doc.fileUrl, doc.fileName)}
                    prefixIcon="arrowDown"
                    size="s"
                    variant="secondary"
                  >
                    Unduh Dokumen
                  </Button>
                </Row>
              </Column>
            </ScrollReveal>
          ))}
        </Column>
      </Column>
    </Column>
  );
}
