"use client";

import { Media, MasonryGrid } from "@once-ui-system/core";
import { gallery } from "@/resources";
import { Reveal } from "@/components/Reveal";

export default function GalleryView() {
  return (
    <MasonryGrid columns={2} s={{ columns: 1 }}>
      {gallery.images.map((image, index) => (
        <Reveal key={index} delay={index * 0.05}>
          <Media
            enlarge
            priority={index < 10}
            sizes="(max-width: 560px) 100vw, 50vw"
            radius="m"
            aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "3 / 4"}
            src={image.src}
            alt={image.alt}
          />
        </Reveal>
      ))}
    </MasonryGrid>
  );
}
