import { Client } from "@notionhq/client";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

async function main() {
  const dbId = process.env.NOTION_DATABASE_ID!;

  console.log("DATABASE ID:", dbId);

  const db = await notion.databases.retrieve({
    database_id: dbId,
  });

  console.log(JSON.stringify(db, null, 2));
}

main().catch(console.error);