"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Button,
  Column,
  Heading,
  Input,
  Text,
  Badge,
  Row,
  Spinner,
  Flex,
  Line,
  IconButton,
} from "@once-ui-system/core";

export default function AdminDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"profile" | "new-project" | "experiences" | "gallery">("profile");
  
  // Data States
  const [portfolioData, setPortfolioData] = useState<any>(null);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  // New Project Form State
  const [projectForm, setProjectForm] = useState({
    title: "",
    slug: "",
    summary: "",
    publishedAt: new Date().toISOString().split("T")[0],
    role: "Fullstack Developer",
    coverImage: "",
    link: "",
    content: "",
  });

  useEffect(() => {
    const checkAuthAndLoad = async () => {
      try {
        const authRes = await fetch("/api/check-auth");
        if (!authRes.ok) {
          router.push("/admin/login");
          return;
        }

        const dataRes = await fetch("/api/admin/data");
        if (dataRes.ok) {
          const json = await dataRes.json();
          setPortfolioData(json);
        }
      } catch (err) {
        console.error("Failed to load admin data", err);
      } finally {
        setLoading(false);
      }
    };

    checkAuthAndLoad();
  }, [router]);

  const handleSavePortfolioData = async () => {
    setSaving(true);
    setMessage(null);
    try {
      const res = await fetch("/api/admin/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(portfolioData),
      });

      if (res.ok) {
        setMessage({ text: "Data portofolio berhasil disimpan dan ter-update!", type: "success" });
      } else {
        setMessage({ text: "Gagal menyimpan data", type: "error" });
      }
    } catch (err) {
      setMessage({ text: "Terjadi kesalahan koneksi", type: "error" });
    } finally {
      setSaving(false);
    }
  };

  const handleAddProject = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage(null);

    try {
      const res = await fetch("/api/admin/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: projectForm.title,
          slug: projectForm.slug || projectForm.title.toLowerCase().replace(/[^a-z0-9-]/g, "-"),
          publishedAt: projectForm.publishedAt,
          summary: projectForm.summary,
          images: projectForm.coverImage ? [projectForm.coverImage] : ["/images/projects/web-inventory/cover.jpg"],
          role: projectForm.role,
          link: projectForm.link,
          content: projectForm.content,
        }),
      });

      if (res.ok) {
        setMessage({ text: `Proyek "${projectForm.title}" berhasil dibuat dan otomatis tayang!`, type: "success" });
        setProjectForm({
          title: "",
          slug: "",
          summary: "",
          publishedAt: new Date().toISOString().split("T")[0],
          role: "Fullstack Developer",
          coverImage: "",
          link: "",
          content: "",
        });
      } else {
        setMessage({ text: "Gagal membuat proyek baru", type: "error" });
      }
    } catch (err) {
      setMessage({ text: "Terjadi kesalahan koneksi", type: "error" });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <Flex fillWidth fillHeight paddingY="128" horizontal="center" align="center">
        <Spinner />
      </Flex>
    );
  }

  return (
    <Column maxWidth="m" fillWidth gap="l" paddingY="24" horizontal="center">
      {/* Header Admin */}
      <Row fillWidth horizontal="between" vertical="center" background="surface" border="neutral-alpha-medium" radius="l" padding="l">
        <Column gap="4">
          <Row gap="8" vertical="center">
            <Heading variant="display-strong-xs">Dashboard Administrator</Heading>
            <Badge background="brand-alpha-weak" textVariant="label-default-s">Dynamic Mode</Badge>
          </Row>
          <Text variant="body-default-xs" onBackground="neutral-weak">
            Kelola data profil, karya proyek, dan galeri yang terhubung langsung secara real-time
          </Text>
        </Column>
        <Button variant="secondary" size="s" href="/">
          Lihat Website Utama
        </Button>
      </Row>

      {/* Message Banner */}
      {message && (
        <Row fillWidth padding="m" radius="m" background={message.type === "success" ? "brand-alpha-weak" : "accent-alpha-weak"} border="neutral-alpha-medium">
          <Text variant="body-default-s" onBackground={message.type === "success" ? "brand-strong" : "accent-strong"}>
            {message.text}
          </Text>
        </Row>
      )}

      {/* Tabs */}
      <Row gap="8" fillWidth wrap>
        <Button
          variant={activeTab === "profile" ? "primary" : "secondary"}
          size="s"
          onClick={() => setActiveTab("profile")}
        >
          Profil & Identitas
        </Button>
        <Button
          variant={activeTab === "new-project" ? "primary" : "secondary"}
          size="s"
          onClick={() => setActiveTab("new-project")}
        >
          + Tambah Karya / Proyek
        </Button>
        <Button
          variant={activeTab === "experiences" ? "primary" : "secondary"}
          size="s"
          onClick={() => setActiveTab("experiences")}
        >
          Pengalaman Kerja
        </Button>
        <Button
          variant={activeTab === "gallery" ? "primary" : "secondary"}
          size="s"
          onClick={() => setActiveTab("gallery")}
        >
          Galeri Foto
        </Button>
      </Row>

      <Line fillWidth />

      {/* TAB 1: PROFIL & IDENTITAS */}
      {activeTab === "profile" && portfolioData && (
        <Column fillWidth gap="l" background="surface" border="neutral-alpha-medium" radius="l" padding="xl">
          <Heading variant="heading-strong-l">Edit Profil & Identitas Diri</Heading>
          
          <Column gap="m" fillWidth>
            <Input
              id="name"
              label="Nama Lengkap"
              value={portfolioData.person.name}
              onChange={(e) =>
                setPortfolioData({
                  ...portfolioData,
                  person: { ...portfolioData.person, name: e.target.value },
                })
              }
            />
            <Input
              id="role"
              label="Profesi / Role Utama"
              value={portfolioData.person.role}
              onChange={(e) =>
                setPortfolioData({
                  ...portfolioData,
                  person: { ...portfolioData.person, role: e.target.value },
                })
              }
            />
            <Input
              id="email"
              label="Email"
              value={portfolioData.person.email}
              onChange={(e) =>
                setPortfolioData({
                  ...portfolioData,
                  person: { ...portfolioData.person, email: e.target.value },
                })
              }
            />
            <Input
              id="headline"
              label="Headline Utama (Home Page)"
              value={portfolioData.home.headline}
              onChange={(e) =>
                setPortfolioData({
                  ...portfolioData,
                  home: { ...portfolioData.home, headline: e.target.value },
                })
              }
            />
            <Column gap="4">
              <Text variant="label-default-s">Subline Deskripsi (Home Page)</Text>
              <textarea
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  background: "var(--neutral-surface-dark, rgba(0,0,0,0.3))",
                  border: "1px solid var(--neutral-alpha-medium)",
                  color: "white",
                  minHeight: "100px",
                  fontSize: "14px",
                }}
                value={portfolioData.home.subline}
                onChange={(e) =>
                  setPortfolioData({
                    ...portfolioData,
                    home: { ...portfolioData.home, subline: e.target.value },
                  })
                }
              />
            </Column>
          </Column>

          <Button variant="primary" size="m" onClick={handleSavePortfolioData} disabled={saving}>
            {saving ? "Menyimpan..." : "Simpan Perubahan Profil"}
          </Button>
        </Column>
      )}

      {/* TAB 2: TAMBAH PROYEK BARU */}
      {activeTab === "new-project" && (
        <form onSubmit={handleAddProject} style={{ width: "100%" }}>
          <Column fillWidth gap="l" background="surface" border="neutral-alpha-medium" radius="l" padding="xl">
            <Heading variant="heading-strong-l">Tambah Karya Proyek Baru</Heading>
            <Text variant="body-default-s" onBackground="neutral-weak">
              Proyek yang Anda tambahkan akan otomatis dibuatkan file MDX baru dan tayang di halaman /work
            </Text>

            <Column gap="m" fillWidth>
              <Input
                id="title"
                label="Judul Proyek"
                placeholder="Contoh: Sistem Kasir Minimarket"
                value={projectForm.title}
                onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                required
              />
              <Input
                id="slug"
                label="URL Slug (opsional)"
                placeholder="contoh: sistem-kasir-minimarket"
                value={projectForm.slug}
                onChange={(e) => setProjectForm({ ...projectForm, slug: e.target.value })}
              />
              <Input
                id="summary"
                label="Ringkasan Singkat Proyek"
                placeholder="Deskripsi singkat proyek untuk kartu tampilan"
                value={projectForm.summary}
                onChange={(e) => setProjectForm({ ...projectForm, summary: e.target.value })}
                required
              />
              <Input
                id="role"
                label="Peran / Role Anda dalam Proyek"
                placeholder="Contoh: Fullstack Mobile Developer"
                value={projectForm.role}
                onChange={(e) => setProjectForm({ ...projectForm, role: e.target.value })}
              />
              <Input
                id="coverImage"
                label="URL / Path Gambar Sampul"
                placeholder="/images/projects/web-inventory/cover.jpg"
                value={projectForm.coverImage}
                onChange={(e) => setProjectForm({ ...projectForm, coverImage: e.target.value })}
              />
              <Input
                id="link"
                label="Link Demo / Repositori GitHub"
                placeholder="https://github.com/FauziHrtnt/proyek-anda"
                value={projectForm.link}
                onChange={(e) => setProjectForm({ ...projectForm, link: e.target.value })}
              />
              <Column gap="4">
                <Text variant="label-default-s">Konten Detail Proyek (Markdown / MDX)</Text>
                <textarea
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "8px",
                    background: "var(--neutral-surface-dark, rgba(0,0,0,0.3))",
                    border: "1px solid var(--neutral-alpha-medium)",
                    color: "white",
                    minHeight: "160px",
                    fontSize: "14px",
                    fontFamily: "monospace",
                  }}
                  placeholder="## Overview Proyek&#10;&#10;Tuliskan penjelasan lengkap proyek di sini..."
                  value={projectForm.content}
                  onChange={(e) => setProjectForm({ ...projectForm, content: e.target.value })}
                />
              </Column>
            </Column>

            <Button variant="primary" size="m" disabled={saving}>
              {saving ? "Membuat..." : "+ Publikasikan Proyek Baru"}
            </Button>
          </Column>
        </form>
      )}

      {/* TAB 3: PENGALAMAN KERJA */}
      {activeTab === "experiences" && portfolioData && (
        <Column fillWidth gap="l" background="surface" border="neutral-alpha-medium" radius="l" padding="xl">
          <Heading variant="heading-strong-l">Kelola Pengalaman Kerja</Heading>
          
          {portfolioData.experiences.map((exp: any, idx: number) => (
            <Column key={idx} gap="s" padding="m" background="page" radius="m" border="neutral-alpha-weak">
              <Row horizontal="between">
                <Text variant="heading-strong-m">{exp.company}</Text>
                <Text variant="body-default-xs" onBackground="neutral-weak">{exp.timeframe}</Text>
              </Row>
              <Text variant="label-default-s" onBackground="brand-strong">{exp.role}</Text>
              <Column gap="4" marginTop="4">
                {exp.achievements.map((ach: string, aIdx: number) => (
                  <Text key={aIdx} variant="body-default-xs" onBackground="neutral-medium">
                    • {ach}
                  </Text>
                ))}
              </Column>
            </Column>
          ))}

          <Button variant="primary" size="m" onClick={handleSavePortfolioData} disabled={saving}>
            {saving ? "Menyimpan..." : "Simpan Perubahan"}
          </Button>
        </Column>
      )}

      {/* TAB 4: GALERI FOTO */}
      {activeTab === "gallery" && portfolioData && (
        <Column fillWidth gap="l" background="surface" border="neutral-alpha-medium" radius="l" padding="xl">
          <Heading variant="heading-strong-l">Kelola Galeri Foto</Heading>
          
          <Row gap="m" wrap fillWidth>
            {portfolioData.gallery.map((img: any, idx: number) => (
              <Column key={idx} maxWidth={16} padding="s" background="page" radius="m" border="neutral-alpha-weak">
                <Text variant="body-default-xs" weight="strong">{img.alt}</Text>
                <Text variant="body-default-xs" onBackground="neutral-weak">{img.src}</Text>
              </Column>
            ))}
          </Row>

          <Button variant="primary" size="m" onClick={handleSavePortfolioData} disabled={saving}>
            {saving ? "Menyimpan..." : "Simpan Perubahan Galeri"}
          </Button>
        </Column>
      )}
    </Column>
  );
}
