import { Schema, Meta, SmartLink } from "@once-ui-system/core";
import { home, about, person, baseURL, routes } from "@/resources";
import { HomeClient } from "@/components/home/HomeClient";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";
import { Mailchimp } from "@/components";
import { Reveal } from "@/components/Reveal"; // sesuaikan path sesuai lokasi file Reveal.tsx Anda

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <div style={{ width: "100%", maxWidth: "1240px", margin: "0 auto", padding: "0 16px", display: "flex", flexDirection: "column", gap: "90px" }}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Interactive Hero & Core Focus Section */}
      <HomeClient />

      {/* SECTION 3: FEATURED PROJECTS & WORKS (Server Component) */}
      <section style={{ width: "100%", display: "flex", flexDirection: "column", gap: "30px" }}>
        <Reveal>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
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
                PROYEK PILIHAN
              </span>
              <h3
                style={{
                  fontSize: "28px",
                  fontWeight: 800,
                  marginTop: "12px",
                  color: "var(--card-title-color, #ffffff)",
                }}
              >
                Karya Terbaru & Sistem Berjalan
              </h3>
            </div>

            <SmartLink
              href="/work"
              style={{
                fontSize: "13px",
                fontWeight: 700,
                color: "#84cc16",
                textDecoration: "none",
              }}
            >
              Lihat Semua Proyek →
            </SmartLink>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Projects range={[1, 3]} />
        </Reveal>
      </section>

      {/* SECTION 4: PENGALAMAN KERJA & KEGIATAN (Server Component) */}
      <section style={{ width: "100%", display: "flex", flexDirection: "column", gap: "24px" }}>
        <Reveal>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "16px" }}>
            <div>
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
                PENGALAMAN &amp; KEGIATAN
              </span>
              <h3
                style={{
                  fontSize: "28px",
                  fontWeight: 800,
                  marginTop: "12px",
                  color: "var(--card-title-color, #ffffff)",
                  margin: "12px 0 0 0",
                }}
              >
                Jejak Pengalaman Kerja &amp; Keorganisasian
              </h3>
            </div>

            <SmartLink
              href="/experience"
              style={{
                fontSize: "13px",
                fontWeight: 700,
                color: "#84cc16",
                textDecoration: "none",
              }}
            >
              Lihat Semua Pengalaman →
            </SmartLink>
          </div>
        </Reveal>

        {/* 2 HIGHLIGHT CARDS: PENGALAMAN KERJA & KEORGANISASIAN */}
        <Reveal delay={0.1}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "20px",
              width: "100%",
            }}
          >
            {/* CARD 1: PENGALAMAN KERJA */}
            <SmartLink href="/experience" style={{ textDecoration: "none", width: "100%", display: "block" }}>
              <div
                className="megamenu-item-card"
                style={{
                  padding: "28px",
                  borderRadius: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "220px",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                    <span
                      style={{
                        fontSize: "10px",
                        fontFamily: "'Geist Mono', monospace, sans-serif",
                        fontWeight: 800,
                        letterSpacing: "1.5px",
                        color: "#84cc16",
                        background: "rgba(132, 204, 22, 0.1)",
                        border: "1px solid rgba(132, 204, 22, 0.25)",
                        padding: "3px 8px",
                        borderRadius: "999px",
                        textTransform: "uppercase",
                      }}
                    >
                      PENGALAMAN KERJA
                    </span>

                    <span
                      style={{
                        fontSize: "11px",
                        fontFamily: "'Geist Mono', monospace, sans-serif",
                        color: "var(--card-desc-color, rgba(255, 255, 255, 0.5))",
                      }}
                    >
                      2022 – 2026
                    </span>
                  </div>

                  <h4
                    style={{
                      fontSize: "18px",
                      fontWeight: 800,
                      color: "var(--card-title-color, #ffffff)",
                      margin: "0 0 8px 0",
                      lineHeight: "135%",
                    }}
                  >
                    Production Engineering KHS &amp; Programmer PT. Indo Techno Medic
                  </h4>

                  <p
                    style={{
                      fontSize: "13px",
                      lineHeight: "155%",
                      color: "var(--card-desc-color, rgba(255, 255, 255, 0.7))",
                      margin: 0,
                    }}
                  >
                    Pengembangan sistem inventaris berbasis web (CodeIgniter 3 &amp; MySQL), perancangan CAD 3D (Jig &amp; Fixture), serta penyusunan 15+ dokumen SOP manufaktur.
                  </p>
                </div>

                <div
                  style={{
                    marginTop: "20px",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#84cc16",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  Lihat Pengalaman Lengkap →
                </div>
              </div>
            </SmartLink>

            {/* CARD 2: KEORGANISASIAN & RELAWAN */}
            <SmartLink href="/experience" style={{ textDecoration: "none", width: "100%", display: "block" }}>
              <div
                className="megamenu-item-card"
                style={{
                  padding: "28px",
                  borderRadius: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "220px",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                    <span
                      style={{
                        fontSize: "10px",
                        fontFamily: "'Geist Mono', monospace, sans-serif",
                        fontWeight: 800,
                        letterSpacing: "1.5px",
                        color: "#38bdf8",
                        background: "rgba(56, 189, 248, 0.1)",
                        border: "1px solid rgba(56, 189, 248, 0.25)",
                        padding: "3px 8px",
                        borderRadius: "999px",
                        textTransform: "uppercase",
                      }}
                    >
                      KEORGANISASIAN &amp; RELAWAN
                    </span>

                    <span
                      style={{
                        fontSize: "11px",
                        fontFamily: "'Geist Mono', monospace, sans-serif",
                        color: "var(--card-desc-color, rgba(255, 255, 255, 0.5))",
                      }}
                    >
                      HMSI UTY &amp; FBB
                    </span>
                  </div>

                  <h4
                    style={{
                      fontSize: "18px",
                      fontWeight: 800,
                      color: "var(--card-title-color, #ffffff)",
                      margin: "0 0 8px 0",
                      lineHeight: "135%",
                    }}
                  >
                    Pengurus HMSI UTY &amp; Panitia Logistik FBB
                  </h4>

                  <p
                    style={{
                      fontSize: "13px",
                      lineHeight: "155%",
                      color: "var(--card-desc-color, rgba(255, 255, 255, 0.7))",
                      margin: 0,
                    }}
                  >
                    Kepemimpinan di bidang Humas &amp; Hubungan Luar HMSI UTY, panitia operasional logistik Festival Bahasa dan Budaya, serta pengabdian masyarakat.
                  </p>
                </div>

                <div
                  style={{
                    marginTop: "20px",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#38bdf8",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  Lihat Detail Keorganisasian →
                </div>
              </div>
            </SmartLink>
          </div>
        </Reveal>
      </section>

      {/* SECTION 5: MAILCHIMP NEWSLETTER / CONTACT CTA */}
      <Reveal>
        <Mailchimp />
      </Reveal>
    </div>
  );
}
