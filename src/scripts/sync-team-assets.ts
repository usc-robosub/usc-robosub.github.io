import { Client } from "@notionhq/client";
import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const DATA_SOURCE_ID = process.env.NOTION_DATA_SOURCE_ID!;
const PUBLIC_TEAM_DIR = path.join(process.cwd(), "public", "team");
const MANIFEST_PATH = path.join(process.cwd(), "src", "data", "team-images.json");

type Manifest = Record<string, string>;

function getText(property: any): string {
  if (!property) return "";
  if (property.title?.length) {
    return property.title.map((item: any) => item.plain_text).join("").trim();
  }
  if (property.rich_text?.length) {
    return property.rich_text.map((item: any) => item.plain_text).join("").trim();
  }
  if (property.select?.name) {
    return property.select.name;
  }
  return "";
}

function getImageUrl(page: any): string {
  const photo = page.properties?.Photo;
  return (
    photo?.files?.[0]?.external?.url ??
    photo?.files?.[0]?.file?.url ??
    ""
  );
}

function extensionFromContentType(contentType: string, fallbackUrl: string): string {
  const lower = contentType.toLowerCase();

  if (lower.includes("image/webp")) return "webp";
  if (lower.includes("image/png")) return "png";
  if (lower.includes("image/jpeg")) return "jpg";
  if (lower.includes("image/jpg")) return "jpg";
  if (lower.includes("image/gif")) return "gif";

  const urlPath = new URL(fallbackUrl).pathname.toLowerCase();
  if (urlPath.endsWith(".webp")) return "webp";
  if (urlPath.endsWith(".png")) return "png";
  if (urlPath.endsWith(".jpg") || urlPath.endsWith(".jpeg")) return "jpg";
  if (urlPath.endsWith(".gif")) return "gif";

  return "webp";
}

function sha256(buffer: Buffer): string {
  return crypto.createHash("sha256").update(buffer).digest("hex");
}

async function fetchAllPages(): Promise<any[]> {
  const pages: any[] = [];
  let start_cursor: string | undefined = undefined;

  while (true) {
    const response = await notion.dataSources.query({
      data_source_id: DATA_SOURCE_ID,
      page_size: 100,
      ...(start_cursor ? { start_cursor } : {}),
    });

    pages.push(...response.results);

    if (!response.has_more) break;
    start_cursor = response.next_cursor ?? undefined;
  }

  return pages;
}

async function main() {
  await fs.mkdir(PUBLIC_TEAM_DIR, { recursive: true });

  let manifest: Manifest = {};
  try {
    manifest = JSON.parse(await fs.readFile(MANIFEST_PATH, "utf8"));
  } catch {
    manifest = {};
  }

  const pages = await fetchAllPages();
  const nextManifest: Manifest = { ...manifest };

  for (const page of pages) {
    const id = page.id;
    const name = getText(page.properties?.Name);
    const imageUrl = getImageUrl(page);

    if (!imageUrl) continue;

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to download image for ${name} (${id}): ${response.status} ${response.statusText}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const contentType = response.headers.get("content-type") ?? "";
    const ext = extensionFromContentType(contentType, imageUrl);

    const filename = `${id}.${ext}`;
    const localPath = path.join(PUBLIC_TEAM_DIR, filename);
    const publicPath = `/team/${filename}`;

    let shouldWrite = true;
    try {
      const existing = await fs.readFile(localPath);
      shouldWrite = sha256(existing) !== sha256(buffer);
    } catch {
      shouldWrite = true;
    }

    if (shouldWrite) {
      await fs.writeFile(localPath, buffer);
      console.log(`Updated ${publicPath}`);
    } else {
      console.log(`Unchanged ${publicPath}`);
    }

    nextManifest[id] = publicPath;
  }

  await fs.writeFile(MANIFEST_PATH, JSON.stringify(nextManifest, null, 2) + "\n");
  console.log("Updated team image manifest");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});