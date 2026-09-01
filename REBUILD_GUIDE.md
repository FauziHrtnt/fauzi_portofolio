# Panduan & Breakdown Langkah Rebuild Portofolio Magic Portfolio (Versi Kustom)

Dokumen ini berisi hasil scan menyeluruh terhadap projek **Magic Portfolio**, daftar komponen/file yang mencurigakan atau tidak diperlukan, persiapan *tools/software*, serta panduan langkah demi langkah untuk membangun ulang (*rebuild*) portofolio ini sesuai dengan data, identitas, dan kebutuhan Anda sendiri.

---

## 1. Hasil Scan Projek & Ringkasan Arsitektur

Projek ini dikembangkan menggunakan stack modern web development:
- **Framework Core**: [Next.js 16](https://nextjs.org/) (App Router) & [React 19](https://react.dev/).
- **Bahasa**: [TypeScript](https://www.typescriptlang.org/).
- **Design System & UI Library**: `@once-ui-system/core` (Once UI) — sistem komponen semantik & token warna/layout.
- **Content Management System (CMS)**: MDX (`@next/mdx`, `next-mdx-remote`, `gray-matter`) — berbasis file `.mdx` lokal.
- **Styling**: SCSS/SASS + Custom CSS Tokens (`src/resources/custom.css`).
- **Code Formatter & Linter**: Biome (`@biomejs/biome`) dan ESLint.

---

## 2. Temuan Hal Mencurigakan & Komponen yang Tidak Diperlukan (Bloat Checklist)

Dalam hasil scan menyeluruh, ditemukan beberapa file, konfigurasi, dan komponen bawaan template yang **harus dibersihkan atau diganti** agar tidak menggangu portofolio asli Anda:

### ⚠️ A. Data Diri & Karir Dummy (Placeholder Data)
- **Lokasi**: [content.tsx](file:///d:/00.%20Dokumen%20Penting/Portofolio/magic-portfolio-main/src/resources/content.tsx)
- **Temuan**: Berisi nama `Selene Yu`, email `example@gmail.com`, perusahaan dummy (`FLY`, `Creativ3`), riwayat pendidikan dummy (`University of Jakarta`, `Build the Future`), dan link sosial media bawaan Once UI.
- **Tindakan**: Wajib diisi dengan identitas pribadi, foto, sosial media, dan riwayat karir Anda.

### ⚠️ B. File MDX Dokumentasi yang Menyamar sebagai Post Blog
- **Lokasi**: [src/app/blog/posts/](file:///d:/00.%20Dokumen%20Penting/Portofolio/magic-portfolio-main/src/app/blog/posts)
- **Temuan**: Terdapat 11 file `.mdx` (`components.mdx`, `content.mdx`, `localization.mdx`, `mailchimp.mdx`, `pages.mdx`, `password.mdx`, `quick-start.mdx`, `seo.mdx`, `styling.mdx`, `work.mdx`, `blog.mdx`). File-file ini sebenarnya adalah **dokumentasi template Once UI** yang dimasukkan ke dalam daftar postingan blog.
- **Tindakan**: Hapus semua file `.mdx` dokumentasi ini dan ganti dengan artikel/blog tulisan Anda sendiri.

### ⚠️ C. Sample Project Bawaan
- **Lokasi**: [src/app/work/projects/](file:///d:/00.%20Dokumen%20Penting/Portofolio/magic-portfolio-main/src/app/work/projects)
- **Temuan**: Terdapat 3 file project bawaan (`automate-design-handovers...`, `building-once-ui...`, `simple-portfolio-builder.mdx`).
- **Tindakan**: Hapus atau ganti dengan portofolio proyek/karya asli Anda.

### ⚠️ D. Komponen Form Mailchimp Newsletter
- **Lokasi**: [Mailchimp.tsx](file:///d:/00.%20Dokumen%20Penting/Portofolio/magic-portfolio-main/src/components/Mailchimp.tsx) & [once-ui.config.ts](file:///d:/00.%20Dokumen%20Penting/Portofolio/magic-portfolio-main/src/resources/once-ui.config.ts#L143)
- **Temuan**: Berisi kode form embed Mailchimp dengan URL action dummy (`https://url/subscribe/post?parameters`) dan kode hidden input dummy.
- **Tindakan**: Jika Anda **tidak menggunakan Mailchimp**, nonaktifkan tampilan newsletter pada `src/resources/content.tsx` (`display: false`) atau hapus pemanggilan komponen `<Mailchimp />` dari [page.tsx](file:///d:/00.%20Dokumen%20Penting/Portofolio/magic-portfolio-main/src/app/page.tsx).

### ⚠️ E. Domain & OpenGraph URL Meta Dummy
- **Lokasi**: [once-ui.config.ts](file:///d:/00.%20Dokumen%20Penting/Portofolio/magic-portfolio-main/src/resources/once-ui.config.ts#L17)
- **Temuan**: `baseURL` di-set ke `https://demo.magic-portfolio.com`.
- **Tindakan**: Ubah ke domain asli portofolio Anda (misal `https://namaanda.vercel.app` atau domain kustom Anda) agar metadata SEO dan bagikan link sosial media (OpenGraph) bekerja dengan benar.

### ⚠️ F. Proteksi Halaman (Password Protection) Dummy
- **Lokasi**: [once-ui.config.ts](file:///d:/00.%20Dokumen%20Penting/Portofolio/magic-portfolio-main/src/resources/once-ui.config.ts#L35) & [.env.example](file:///d:/00.%20Dokumen%20Penting/Portofolio/magic-portfolio-main/.env.example)
- **Temuan**: Route `/work/automate-design-handovers...` dikunci dengan kata sandi bawaan `PAGE_ACCESS_PASSWORD=password`.
- **Tindakan**: Nonaktifkan `protectedRoutes` jika tidak ada halaman rahasia, atau atur password di file `.env.local`.

### ⚠️ G. Lisensi & Attribution Link pada Footer
- **Lokasi**: [Footer.tsx](file:///d:/00.%20Dokumen%20Penting/Portofolio/magic-portfolio-main/src/components/Footer.tsx#L30) & [LICENSE](file:///d:/00.%20Dokumen%20Penting/Portofolio/magic-portfolio-main/LICENSE)
- **Temuan**: Lisensi projek ini adalah **CC BY-NC 4.0** (Attribution wajib & Non-Komersial). Terdapat link kredit ke `Once UI` di footer.
- **Tindakan**: Tetap pertahankan kredit attribution di footer kecuali jika Anda membeli lisensi Once UI Pro.

### ⚠️ H. File Gambar Aset Bawaan (Gambar Galeri & Og Image)
- **Lokasi**: [public/images/](file:///d:/00.%20Dokumen%20Penting/Portofolio/magic-portfolio-main/public/images)
- **Temuan**: Berisi banyak foto stok (`avatar.jpg`, `gallery/`, `projects/`, `og/home.jpg`).
- **Tindakan**: Ganti foto avatar, foto galeri, dan gambar banner OG dengan milik Anda.

---

## 3. Program, Tools, & Software yang Perlu Disiapkan

Untuk membangun dan mengedit projek portofolio ini di komputer Anda, siapkan tools berikut:

### 🛠️ A. Software Utama & Runtime Environment
1. **Node.js (v18.17.0 atau lebih baru)**
   - *Rekomendasi*: Node.js v20 LTS atau v22 LTS.
   - *Fungsi*: Runtime JavaScript untuk menjalankan Next.js server lokal & build project.
   - *Cek Versi*: Buka terminal/PowerShell, ketik `node -v`.
2. **Package Manager (`npm` atau `pnpm`)**
   - Terinstall otomatis bersama Node.js (`npm -v`).
3. **Git**
   - *Fungsi*: Version control untuk mengelola histori kode dan melakukan push ke GitHub.
   - *Cek Versi*: Ketik `git --version`.

### 🛠️ B. Code Editor & Ekstensi Direkomendasikan
1. **Visual Studio Code (VS Code) / Cursor**
2. **Ekstensi VS Code Penting**:
   - **MDX**: Sintaks highlighting untuk file `.mdx`.
   - **TypeScript and JavaScript Language Features**: Bawaan VS Code.
   - **Biome**: Untuk format kode otomatis sesuai konfigurasi `biome.json`.
   - **ESLint**: Untuk memeriksa error sintaks JavaScript/React.
   - **SCSS IntelliSense**: Untuk pengeditan file `.scss`.

### 🛠️ C. Layanan Hosting & Platform Deployment (Free Tier Available)
1. **GitHub Account**: Tempat menyimpan repositori portofolio Anda.
2. **Vercel Account**: Platform hosting gratis terbaik untuk Next.js (otomatis me-deploy setiap Anda push kode ke GitHub).

---

## 4. Panduan Langkah demi Langkah Rebuild Portofolio Versi Anda

### 📌 Langkah 1: Persiapan Server Lokal (Running Dev)
1. Buka terminal pada folder projek ini:
   ```bash
   npm install
   ```
2. Jalankan development server:
   ```bash
   npm run dev
   ```
3. Akses via browser di `http://localhost:3000`.

---

### 📌 Langkah 2: Pembersihan File Sampah (Cleansing Phase)
1. Buka folder [src/app/blog/posts](file:///d:/00.%20Dokumen%20Penting/Portofolio/magic-portfolio-main/src/app/blog/posts). Hapus file `.mdx` dokumentasi bawaan yang tidak Anda perlukan.
2. Buka folder [src/app/work/projects](file:///d:/00.%20Dokumen%20Penting/Portofolio/magic-portfolio-main/src/app/work/projects). Hapus contoh project bawaan atau edit isinya sesuai proyek Anda.
3. Hapus foto sampel di `public/images/gallery/` dan `public/images/projects/`.

---

### 📌 Langkah 3: Konfigurasi Identitas Diri ([content.tsx](file:///d:/00.%20Dokumen%20Penting/Portofolio/magic-portfolio-main/src/resources/content.tsx))
Buka file `src/resources/content.tsx` dan ubah variabel berikut:

1. **Objek `person`**:
   - `firstName`, `lastName`, `name`: Nama lengkap Anda.
   - `role`: Profesi / Peran (misal: *Full Stack Developer*, *UI/UX Designer*, *Software Engineer*).
   - `avatar`: Path foto diri Anda di folder `public/images/` (misal `/images/my-photo.png`).
   - `email`: Email pribadi/profesional Anda.
   - `location`: Zona waktu IANA (misal `'Asia/Jakarta'`).
   - `languages`: Bahasa yang dikuasai (misal `["Indonesian", "English"]`).

2. **Objek `social`**:
   - Masukkan link GitHub, LinkedIn, Instagram, Twitter/X, Discord, atau Email Anda sendiri.

3. **Objek `home`**:
   - Ubah `headline` dan `subline` sesuai kata-kata sambutan (*tagline*) Anda.

4. **Objek `about`**:
   - Edit bagian `intro` (perkenalan singkat).
   - Edit `work.experiences` dengan pengalaman kerja/organisasi Anda.
   - Edit `studies.institutions` dengan latar belakang pendidikan Anda.
   - Edit `technical.skills` dengan keahlian teknis (tools/bahasa pemrograman yang Anda kuasai).

5. **Objek `gallery`**:
   - Atur `images` dengan foto-foto kegiatan/karya Anda yang disimpan di `public/images/gallery/`.

---

### 📌 Langkah 4: Konfigurasi Sistem & SEO ([once-ui.config.ts](file:///d:/00.%20Dokumen%20Penting/Portofolio/magic-portfolio-main/src/resources/once-ui.config.ts))
Buka file `src/resources/once-ui.config.ts`:

1. **`baseURL`**: Ganti `"https://demo.magic-portfolio.com"` menjadi URL portofolio Anda.
2. **`routes`**: Aktifkan/nonaktifkan menu halaman (`/about`, `/work`, `/blog`, `/gallery`). Contoh: Jika belum mau menggunakan fitur blog, ubah `"/blog": false`.
3. **`style`**: Sesuaikan skema warna portofolio Anda:
   - `theme`: `"system"`, `"dark"`, atau `"light"`.
   - `brand`: Skema warna utama (pilihan: `"cyan"`, `"blue"`, `"indigo"`, `"violet"`, `"emerald"`, `"orange"`, dll).
   - `neutral`: Warna latar (pilihan: `"gray"`, `"slate"`, `"sand"`, dll).
   - `border`: Bentuk sudut elemen (`"rounded"`, `"playful"`, `"sharp"`).
4. **`mailchimp`**: Ubah `newsletter.display = false` di `content.tsx` jika tidak memakai newsletter.

---

### 📌 Langkah 5: Membuat Konten Project & Blog Baru (MDX)
Projek ini menggunakan format **MDX** (Markdown with JSX/React components).

#### A. Menambah Project Baru:
Buat file baru di `src/app/work/projects/nama-proyek-anda.mdx` dengan struktur Frontmatter seperti berikut:

```markdown
---
title: "Aplikasi E-Commerce Kustom"
publishedAt: "2026-08-30"
summary: "Membangun platform belanja online modern dengan Next.js dan TailwindCSS."
images:
  - "/images/projects/project-01/cover.jpg"
team:
  - name: "Nama Anda"
    role: "Full Stack Developer"
    avatar: "/images/avatar.jpg"
    linkedIn: "https://linkedin.com/in/username"
link: "https://proyek-anda.com"
---

## Gambaran Proyek

Tuliskan deskripsi lengkap proyek Anda di sini menggunakan format Markdown standar.

### Fitur Utama
- Fitur 1
- Fitur 2

```

#### B. Menambah Post Blog Baru:
Buat file baru di `src/app/blog/posts/judul-artikel-anda.mdx` dengan struktur Frontmatter:

```markdown
---
title: "Tips Membangun Portofolio Web Modern"
publishedAt: "2026-08-31"
summary: "Panduan praktis memilih tech stack dan desain untuk portofolio developer."
image: "/images/blog/cover.jpg"
tag: "Web Development"
---

Tulis isi artikel Anda di sini...
```

---

### 📌 Langkah 6: Verifikasi & Build Testing
Sebelum melakukan publikasi (*deploy*), jalankan perintah berikut di terminal untuk memastikan tidak ada error pada TypeScript atau build Next.js:

1. **Jalankan Linter & Formatter**:
   ```bash
   npm run lint
   ```
2. **Uji Build Production**:
   ```bash
   npm run build
   ```
   *Jika berhasil tanpa error merah, portofolio Anda siap di-deploy!*

---

### 📌 Langkah 7: Deploy ke Production (Vercel)
1. **Push kode ke GitHub**:
   ```bash
   git add .
   git commit -m "Rebuild portfolio dengan data dan konten pribadi"
   git push origin main
   ```
2. **Hubungkan ke Vercel**:
   - Buka [vercel.com](https://vercel.com) dan buat akun/login.
   - Klik **"Add New"** -> **"Project"**.
   - Pilih repositori GitHub portofolio Anda.
   - Klik **"Deploy"**.
3. Dalam hitungan detik, portofolio Anda akan tayang secara online dengan HTTPS gratis!

---

## 5. Ringkasan File Kunci yang Wajib Diubah

| Nama File | Path | Deskripsi & Tugas |
| :--- | :--- | :--- |
| `content.tsx` | `src/resources/content.tsx` | **UTAMA**: Isi nama, bio, karir, pendidikan, keahlian, dan link sosmed |
| `once-ui.config.ts` | `src/resources/once-ui.config.ts` | **KONFIG**: Atur baseURL domain, tema warna, dan aktif/nonaktif halaman |
| `custom.css` | `src/resources/custom.css` | **CSS**: Styling khusus/override jika ingin mengubah gaya dasar |
| `Footer.tsx` | `src/components/Footer.tsx` | **FOOTER**: Kustomisasi bagian hak cipta dan sosial media footer |
| Folder `posts/` | `src/app/blog/posts/` | **BLOG**: Hapus doc bawaan, isi artikel `.mdx` buatan Anda |
| Folder `projects/` | `src/app/work/projects/` | **KARYA**: Isi detail proyek `.mdx` milik Anda |
| Folder `images/` | `public/images/` | **ASET**: Ganti foto avatar, gallery, dan preview proyek |

---
*Dokumen ini dibuat otomatis sebagai panduan lengkap pengembangan portofolio Anda.*
