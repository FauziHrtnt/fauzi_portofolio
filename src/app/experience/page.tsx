import React from "react";
import { ExperienceClient } from "@/components/experience/ExperienceClient";
import { Schema } from "@once-ui-system/core";
import { person } from "@/resources/content";
import { baseURL } from "@/resources/once-ui.config";

export async function generateMetadata() {
  const title = `Pengalaman Kerja & Organisasi – ${person.name}`;
  const description = "Riwayat karir profesional, pengalaman proyek industri, dan keorganisasian Fauzi Hartanto.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `${baseURL}/experience`,
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

export default function ExperiencePage() {
  return (
    <>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={`Pengalaman Kerja & Organisasi – ${person.name}`}
        description="Riwayat karir profesional, pengalaman proyek industri, dan keorganisasian Fauzi Hartanto."
        path="/experience"
      />
      <ExperienceClient />
    </>
  );
}
