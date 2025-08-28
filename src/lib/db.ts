// lib/db.ts
import { env } from "./env";
import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";

let db: ReturnType<typeof drizzle> | null = null;

export function getDb() {
  if (!env.DATABASE_URL) throw new Error("DATABASE_URL not set");
  if (!db) {
    const pool = new pg.Pool({ connectionString: env.DATABASE_URL, max: 5 });
    db = drizzle(pool);
  }
  return db;
}

