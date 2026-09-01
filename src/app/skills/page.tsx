import React from "react";
import { SkillsClient } from "@/components/skills/SkillsClient";
import { Schema } from "@once-ui-system/core";
import { person } from "@/resources/content";
import { baseURL } from "@/resources/once-ui.config";

export async function generateMetadata() {
  const title = `Keahlian & Tech Stack – ${person.name}`;
  const description = "Layanan pengembangan web, aplikasi mobile Android native, CAD 3D, dan bahasa pemrograman utama Fauzi Hartanto.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `${baseURL}/skills`,
      images: [
        {
          url: `${baseURL}/og?title=${encodeURIComponent(title)}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseURL}/og?title=${encodeURIComponent(title)}`],
    },
  };
}

export default function SkillsPage() {
  return (
    <>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={`Keahlian & Tech Stack – ${person.name}`}
        description="Layanan pengembangan web, aplikasi mobile Android native, CAD 3D, dan bahasa pemrograman utama Fauzi Hartanto."
        path="/skills"
      />
      <SkillsClient />
    </>
  );
}
