import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const projectsDir = path.join(process.cwd(), "src", "app", "work", "projects");

export async function POST(request: NextRequest) {
  try {
    const cookieHeader = request.headers.get("cookie") || "";
    if (!cookieHeader.includes("authToken=authenticated")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { title, slug, publishedAt, summary, images, role, content, link } = body;

    if (!title || !slug || !summary) {
      return NextResponse.json({ error: "Title, slug, and summary are required" }, { status: 400 });
    }

    const sanitizedSlug = slug.toLowerCase().replace(/[^a-z0-9-]/g, "-");
    const filePath = path.join(projectsDir, `${sanitizedSlug}.mdx`);

    const imageList = Array.isArray(images) && images.length > 0
      ? images.map((img: string) => `  - "${img}"`).join("\n")
      : `  - "/images/projects/web-inventory/cover.jpg"`;

    const mdxContent = `---
title: "${title}"
publishedAt: "${publishedAt || new Date().toISOString().split("T")[0]}"
summary: "${summary}"
images:
${imageList}
team:
  - name: "Fauzi Hartanto"
    role: "${role || "Software Developer"}"
    avatar: "/images/avatar.jpg"
    linkedIn: "https://linkedin.com/in/fauzihartanto14"
link: "${link || "https://github.com/FauziHrtnt"}"
---

${content || "## Overview Projek\n\nTulis deskripsi proyek Anda di sini."}
`;

    if (!fs.existsSync(projectsDir)) {
      fs.mkdirSync(projectsDir, { recursive: true });
    }

    fs.writeFileSync(filePath, mdxContent, "utf8");
    return NextResponse.json({ success: true, slug: sanitizedSlug }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to save project" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const cookieHeader = request.headers.get("cookie") || "";
    if (!cookieHeader.includes("authToken=authenticated")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    if (!slug) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 });
    }

    const filePath = path.join(projectsDir, `${slug}.mdx`);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      return NextResponse.json({ success: true, message: "Project deleted" }, { status: 200 });
    } else {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete project" }, { status: 500 });
  }
}
