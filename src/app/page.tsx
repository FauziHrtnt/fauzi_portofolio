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

      {/* SECTION 4: LATEST BLOG INSIGHTS (Server Component) */}
      {routes["/blog"] && (
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
                  ARTIKEL & BLOG
                </span>
                <h3
                  style={{
                    fontSize: "28px",
                    fontWeight: 800,
                    marginTop: "12px",
                    color: "var(--card-title-color, #ffffff)",
                  }}
                >
                  Wawasan & Dokumentasi Teknis
                </h3>
              </div>

              <SmartLink
                href="/blog"
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#84cc16",
                  textDecoration: "none",
                }}
              >
                Lihat Semua Blog →
              </SmartLink>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Posts range={[1, 2]} columns="2" />
          </Reveal>
        </section>
      )}

      {/* SECTION 5: MAILCHIMP NEWSLETTER / CONTACT CTA */}
      <Reveal>
        <Mailchimp />
      </Reveal>
    </div>
  );
}
