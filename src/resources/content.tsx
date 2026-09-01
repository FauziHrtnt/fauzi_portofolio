import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Fauzi",
  lastName: "Hartanto",
  name: `Fauzi Hartanto`,
  role: "Software Developer",
  avatar: "/images/avatar.jpg",
  email: "hartantofauzi14@gmail.com",
  location: "Asia/Jakarta", // Expecting IANA time zone, e.g., 'Asia/Jakarta'
  languages: ["Indonesian (Native)", "English (EPT Score: 487)"],
  locale: "id",
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Catatan berkala tentang pengembangan perangkat lunak dan arsitektur sistem</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/FauziHrtnt",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/fauzihartanto14",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} – Software Developer`,
  description: `Portofolio profesional ${person.name} sebagai ${person.role}`,
  headline: <>Software Developer & System Architect</>,
  subline: (
    <>
      Saya {person.name}, mahasiswa Sistem Informasi UTY (IPK 3.73) dengan pola pikir keteknikan yang berfokus pada pemecahan masalah secara presisi, perancangan arsitektur sistem, pengembangan aplikasi Web (PHP CodeIgniter 3 & MySQL), serta Aplikasi Mobile Android Native (Java & Jetpack Compose).
    </>
  ),
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">My Asset</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Tugas Akhir Android Native Java &amp; RESTful API
        </Text>
      </Row>
    ),
    href: "/work/my-asset-aplikasi-pelacak-aset",
  },
};

const about: About = {
  path: "/about",
  label: "Tentang",
  title: `Tentang – ${person.name}`,
  description: `Mengenal ${person.name}, ${person.role} dari DI Yogyakarta, Indonesia`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Ringkasan Profil",
    description: (
      <>
        Mahasiswa program studi Sistem Informasi di Universitas Teknologi Yogyakarta dengan pola pikir keteknikan yang berfokus pada pemecahan masalah secara presisi dan perancangan arsitektur sistem. Memiliki pengalaman dalam merancang dan mengimplementasikan aplikasi web menggunakan CodeIgniter 3 (PHP) dan MySQL, di samping aktif mendalami pengembangan aplikasi Android. Terbiasa bekerja secara terstruktur mengikuti prosedur operasi standar (SOP) dan analisis efisiensi alur kerja. Mahir dalam PHP, Java, dan SQL, saya siap memanfaatkan kombinasi logika teknis dan keahlian pengembangan perangkat lunak untuk menghasilkan solusi digital yang andal dan berdampak.
      </>
    ),
  },
  work: {
    display: true,
    title: "Pengalaman Kerja & Organisasi",
    experiences: [
      {
        company: "PT. Indo Techno Medic",
        timeframe: "Sep 2025 – Jan 2026",
        role: "Magang Industri – Programmer Division",
        documentUrl: "/documents/Sertifikat_Magang_Fauzi Hartanto.pdf",
        documentName: "Sertifikat Magang (PDF)",
        achievements: [
          "Merancang dan mengimplementasikan sistem manajemen inventaris berbasis web yang berdiri sendiri menggunakan PHP CodeIgniter 3 (CI3) dan MySQL untuk melacak lebih dari 50 aset perusahaan (kendaraan, laptop, dan elektronik).",
          "Merumuskan skema database relasional (ERD) dan alur pengguna (user flow) yang intuitif dari tahap analisis kebutuhan awal hingga implementasi akhir, sehingga mampu meningkatkan efisiensi pencatatan aset sebesar 30%.",
          "Memastikan kelancaran integrasi di seluruh modul aplikasi agar mematuhi protokol keamanan perusahaan dan standar struktur kode.",
        ],
        images: [
          {
            src: "/images/gallery/Magang-1.jpeg",
            alt: "Dokumentasi Magang Industri PT. Indo Techno Medic 1",
            width: 16,
            height: 9,
          },
          {
            src: "/images/gallery/Magang-2.jpeg",
            alt: "Dokumentasi Magang Industri PT. Indo Techno Medic 2",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/web-inventory/cover.jpg",
            alt: "Inventory Management System",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Puskesmas Wates, Kulon Progo",
        timeframe: "Feb 2026",
        role: "Freelance Data Entry – Investigasi Kontak Tuberkulosis (TBC)",
        achievements: [
          "Bertanggung jawab melakukan input data rekam medis pasien terkait penelusuran Tuberkulosis (TBC) langsung ke dalam sistem basis data (web) terpusat Puskesmas Wates.",
          "Memvalidasi puluhan entri Nomor Induk Kependudukan (NIK) dan detail alamat berdasarkan formulir fisik untuk memastikan keakuratan data kesehatan pasien sebelum diunggah ke portal.",
          "Bekerja secara mandiri mengikuti prosedur operasi standar (SOP) dan panduan digitalisasi data yang ditetapkan oleh pihak Puskesmas Wates, menjaga kerahasiaan dan integritas data pasien.",
        ],
        images: [],
      },
      {
        company: "Himpunan Mahasiswa Sistem Informasi (HMSI UTY)",
        timeframe: "Sep 2024 – Sep 2025",
        role: "Anggota Hubungan Masyarakat",
        documentUrl: "/documents/Sertifikat_Kepengurusan HMSI_Fauzi Hartanto.pdf",
        documentName: "Sertifikat HMSI (PDF)",
        achievements: [
          "Memfasilitasi lebih dari 3 lokakarya dan seminar teknologi internal, mendorong keterlibatan aktif serta kegiatan berbagi pengetahuan di kalangan mahasiswa.",
          "Mengoordinasikan saluran komunikasi strategis antara peserta, pembicara utama, dan alumni untuk memperluas peluang jaringan bagi mahasiswa.",
        ],
        images: [
          {
            src: "/images/gallery/HMSI-1.jpeg",
            alt: "Kegiatan Workshop HMSI UTY 1",
            width: 16,
            height: 9,
          },
          {
            src: "/images/gallery/HMSI-2.jpeg",
            alt: "Kegiatan Workshop HMSI UTY 2",
            width: 16,
            height: 9,
          },
          {
            src: "/images/gallery/pengabdian_1.jpg",
            alt: "Kegiatan Pengabdian HMSI UTY",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Festival Bahasa dan Budaya (FBB UIN Sunan Kalijaga)",
        timeframe: "Sep 2025",
        role: "Volunteer Logistik & Keperluan",
        documentUrl: "/documents/Sertifikat_Volunteer_Fauzi Hartanto.pdf",
        documentName: "Sertifikat Volunteer (PDF)",
        achievements: [
          "Mengelola inventaris peralatan dan persiapan tata letak lokasi untuk acara skala universitas yang dihadiri lebih dari 100 peserta, serta memenuhi 100% kebutuhan operasional lapangan sesuai jadwal.",
          "Menangani mobilisasi logistik dan alokasi tata letak peralatan guna memastikan kelancaran operasional acara tanpa hambatan.",
        ],
        images: [
          {
            src: "/images/gallery/FBB-1.jpg",
            alt: "Dokumentasi Volunteer FBB UIN Sunan Kalijaga 1",
            width: 16,
            height: 9,
          },
          {
            src: "/images/gallery/FBB-2.jpg",
            alt: "Dokumentasi Volunteer FBB UIN Sunan Kalijaga 2",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Puskesmas Wates, Kulon Progo",
        timeframe: "Des 2024",
        role: "Freelance Data Entry – Proyek STBM (Sanitasi Total Berbasis Masyarakat)",
        achievements: [
          "Mentranskripsikan ratusan lembar data survei lapangan (formulir ceklis) milik petugas lapangan ke dalam format matriks Excel untuk rekapitulasi tahunan STBM.",
          "Mengklasifikasikan data warga (ratusan KK dan NIK) ke dalam 5 Pilar STBM (Stop BABS, Cuci Tangan Pakai Sabun, Pengelolaan Air Minum, Pengelolaan Sampah, dan Pengelolaan Limbah Cair).",
          "Menjaga konsistensi entri data indikator fasilitas sanitasi dan kondisi rumah (sumber air bersih, SPAL, ventilasi) guna mempermudah petugas medis dalam menganalisis peta sanitasi masyarakat di wilayah kerja Puskesmas.",
        ],
        images: [],
      },
      {
        company: "Puskesmas Wates, Kulon Progo",
        timeframe: "Jun 2023 – Jan 2024",
        role: "Freelance Data Entry – Proyek PHBS (Perilaku Hidup Bersih dan Sehat)",
        achievements: [
          "Melakukan digitalisasi dan pemrosesan data survei lapangan dari format kertas (kuesioner) ke dalam format spreadsheet Excel (ratusan baris data per kalurahan).",
          "Mengevaluasi dan mengklasifikasikan data warga (ratusan NIK) berdasarkan 13 parameter indikator PHBS (sarana air bersih, kepemilikan jamban sehat, pengelolaan limbah, hingga kebiasaan merokok) untuk menentukan kategori kelayakan (Ber-PHBS / Belum Ber-PHBS).",
          "Menyusun laporan rekapitulasi data demografi dan indikator kesehatan lingkungan (Kondisi Rumah, Sarana Air Bersih, Pembuangan Sampah) dengan tingkat akurasi tinggi guna mendukung program intervensi kesehatan Puskesmas.",
        ],
        images: [],
      },
      {
        company: "CV. Karya Hidup Sentosa",
        timeframe: "Agu 2022 – Okt 2022",
        role: "Production Engineering Staff",
        documentUrl: "/documents/SK KERJA FAUZI HARTANTO P1602.pdf",
        documentName: "SK Kerja Resmi (PDF)",
        achievements: [
          "Menyusun dan menerbitkan lebih dari 15 dokumen Prosedur Operasi Standar (SOP) untuk lini perakitan traktor guna menjaga standar kualitas manufaktur yang konsisten.",
          "Merancang model 3D untuk alat perakitan (jigs & fixtures) menggunakan perangkat lunak Solid Edge, yang berhasil memangkas waktu persiapan produksi.",
          "Melakukan audit dokumentasi teknis secara berkala untuk memverifikasi tingkat presisi alat sesuai dengan standar ISO manufaktur perusahaan.",
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Pendidikan & Sertifikasi",
    institutions: [
      {
        name: "Universitas Teknologi Yogyakarta (UTY)",
        description: "Diploma (D3) Sistem Informasi | IPK: 3.73 / 4.00 (Sep 2023 – Aug 2026). Mata Kuliah Relevan: Desain Antarmuka Pengguna, Interaksi Manusia-Komputer, Analisis & Perancangan Sistem, Manajemen Basis Data.",
      },
      {
        name: "SMK Negeri 2 Pengasih",
        description: "Teknik Mesin | Nilai Akhir: 92.41 / 100 (Jun 2019 – Jun 2022). Mata Kuliah Relevan: Desain Berbantuan Komputer (CAD/Solid Edge), Gambar Teknik, Proses Manufaktur, Pemesinan Presisi, Kontrol Kualitas & Prosedur Operasi Standar (SOP).",
      },
      {
        name: "English Proficiency Test (EPT / TOEFL)",
        description: "Sertifikasi Bahasa Inggris UTY Center (Feb 2026 – Feb 2028). Total Skor: 487 (Structure: 530, Reading: 500).",
        documentUrl: "/documents/TOEFL_3233111019_Fauzi Hartanto.pdf",
        documentName: "Sertifikat EPT TOEFL (PDF)",
      },
    ],
  },
  technical: {
    display: true,
    title: "Keahlian Teknis & Spesifikasi",
    skills: [
      {
        title: "Programming & Tech Stack",
        description: "PHP, CodeIgniter 3 (CI3), Java (Android), SQL, HTML, CSS, JavaScript, dan Android Studio.",
        tags: [
          { name: "PHP", icon: "javascript" },
          { name: "CodeIgniter 3", icon: "nextjs" },
          { name: "Java (Android)", icon: "javascript" },
          { name: "SQL", icon: "supabase" },
          { name: "Android Studio", icon: "figma" },
        ],
        images: [
          {
            src: "/images/projects/web-inventory/cover.jpg",
            alt: "Inventory System",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Database & Architecture",
        description: "MySQL, Relational Database Schema (ERD), RESTful API Integration, User Flow Mapping, Clean Architecture, dan MVVM Pattern.",
        tags: [
          { name: "MySQL ERD", icon: "supabase" },
          { name: "RESTful API", icon: "nextjs" },
          { name: "Clean & MVVM", icon: "figma" },
        ],
        images: [
          {
            src: "/images/projects/kasgo/kasgo_cover.png",
            alt: "KasGo Clean Architecture",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Design & UI/UX",
        description: "Figma, Canva, Wireframing, Prototyping, Jetpack Compose Material Design 3, dan penerapan Design System.",
        tags: [
          { name: "Figma", icon: "figma" },
          { name: "Jetpack Compose", icon: "figma" },
          { name: "Wireframing", icon: "figma" },
        ],
        images: [
          {
            src: "/images/projects/android-tracker/android_cover.png",
            alt: "Android UI Design",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Engineering & Tools",
        description: "Git/GitHub, Solid Edge (3D Jig & Fixture Design), Microsoft Excel (Data Management), dan Prosedur Operasi Standar (SOP).",
        tags: [
          { name: "Git / GitHub", icon: "github" },
          { name: "Solid Edge 3D", icon: "figma" },
          { name: "MS Excel", icon: "threads" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Dokumen",
  title: `Dokumen Resmi & CV – ${person.name}`,
  description: `Berkas dokumen resmi, Curriculum Vitae (CV), sertifikasi profesional, dan transkrip akademis oleh ${person.name}`,
};

const work: Work = {
  path: "/work",
  label: "Karya",
  title: `Proyek & Karya – ${person.name}`,
  description: `Koleksi proyek pengembangan web dan mobile oleh ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galeri",
  title: `Galeri Kegiatan – ${person.name}`,
  description: `Dokumentasi kegiatan magang industri, organisasi HMSI, volunteer FBB, dan pengabdian masyarakat oleh ${person.name}`,
  images: [
    {
      src: "/images/gallery/Magang-1.jpeg",
      alt: "Magang Industri PT. Indo Techno Medic – Programmer Division",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Magang-2.jpeg",
      alt: "Pengembangan & Diskusi Sistem Inventaris Web (PHP CI3 & MySQL)",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/HMSI-1.jpeg",
      alt: "Himpunan Mahasiswa Sistem Informasi (HMSI UTY) – Workshop & Kegiatan Humas",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/HMSI-2.jpeg",
      alt: "HMSI UTY – Kolaborasi Seminar & Lokakarya Mahasiswa",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/FBB-1.jpg",
      alt: "Festival Bahasa dan Budaya (FBB UIN Sunan Kalijaga) – Panitia Logistik & Keperluan",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/FBB-2.jpg",
      alt: "FBB UIN Sunan Kalijaga – Operasional Lapangan & Manajemen Inventaris Acara",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/pengabdian_1.jpg",
      alt: "Pengabdian Masyarakat HMSI IMPACT – Edukasi Teknologi Dusun",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/pengabdian_2.jpg",
      alt: "Pemberdayaan Dusun Melalui Digitalisasi Data",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
