import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), "src", "data", "portfolio.json");

export async function GET() {
  try {
    if (!fs.existsSync(dataFilePath)) {
      return NextResponse.json({ error: "Data file not found" }, { status: 404 });
    }
    const fileData = fs.readFileSync(dataFilePath, "utf8");
    const json = JSON.parse(fileData);
    return NextResponse.json(json, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to read portfolio data" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Check auth cookie or simple validation
    const cookieHeader = request.headers.get("cookie") || "";
    if (!cookieHeader.includes("authToken=authenticated")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    fs.writeFileSync(dataFilePath, JSON.stringify(body, null, 2), "utf8");
    return NextResponse.json({ success: true, message: "Data updated successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update portfolio data" }, { status: 500 });
  }
}
