import React from "react";
import { DocumentsClient } from "@/components/documents/DocumentsClient";
import { Schema } from "@once-ui-system/core";
import { person } from "@/resources/content";
import { baseURL } from "@/resources/once-ui.config";

export async function generateMetadata() {
  const title = `Dokumen & Berkas Resmi – ${person.name}`;
  const description = "Pusat berkas resmi, Curriculum Vitae (CV), artikel panduan teknis, dan sertifikasi kompetensi Fauzi Hartanto.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `${baseURL}/documents`,
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

export default function DocumentsPage() {
  return (
    <>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={`Dokumen & Berkas Resmi – ${person.name}`}
        description="Pusat berkas resmi, Curriculum Vitae (CV), artikel panduan teknis, dan sertifikasi kompetensi Fauzi Hartanto."
        path="/documents"
      />
      <DocumentsClient />
    </>
  );
}
