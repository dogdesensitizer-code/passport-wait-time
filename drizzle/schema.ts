// drizzle/schema.ts
import { pgTable, serial, varchar, integer, timestamp, boolean, text } from "drizzle-orm/pg-core";

export const locations = pgTable("locations", {
  id: serial("id").primaryKey(),
  slug: varchar("slug", { length: 100 }).notNull().unique(),
  name: varchar("name", { length: 200 }).notNull(),
  country: varchar("country", { length: 100 }).default("US"),
  source_ref: varchar("source_ref", { length: 200 }),
  created_at: timestamp("created_at").defaultNow(),
});

export const submissions = pgTable("submissions", {
  id: serial("id").primaryKey(),
  location_id: integer("location_id").notNull(),
  mailed_date: timestamp("mailed_date").notNull(),
  received_date: timestamp("received_date"),
  service_type: varchar("service_type", { length: 50 }).default("routine"),
  processing_days: integer("processing_days"),
  email_hash: varchar("email_hash", { length: 128 }),
  created_at: timestamp("created_at").defaultNow(),
});

export const subscribers = pgTable("subscribers", {
  id: serial("id").primaryKey(),
  email_hash: varchar("email_hash", { length: 128 }).notNull(),
  confirmed: boolean("confirmed").default(false),
  created_at: timestamp("created_at").defaultNow(),
});

export const datasets = pgTable("datasets", {
  id: serial("id").primaryKey(),
  source: varchar("source", { length: 100 }).notNull(),
  fetched_at: timestamp("fetched_at").defaultNow(),
  blob: text("blob"),
});
