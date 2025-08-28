CREATE TABLE "datasets" (
	"id" serial PRIMARY KEY NOT NULL,
	"source" varchar(100) NOT NULL,
	"fetched_at" timestamp DEFAULT now(),
	"blob" text
);
--> statement-breakpoint
CREATE TABLE "locations" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" varchar(100) NOT NULL,
	"name" varchar(200) NOT NULL,
	"country" varchar(100) DEFAULT 'US',
	"source_ref" varchar(200),
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "locations_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "submissions" (
	"id" serial PRIMARY KEY NOT NULL,
	"location_id" integer NOT NULL,
	"mailed_date" timestamp NOT NULL,
	"received_date" timestamp,
	"service_type" varchar(50) DEFAULT 'routine',
	"processing_days" integer,
	"email_hash" varchar(128),
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "subscribers" (
	"id" serial PRIMARY KEY NOT NULL,
	"email_hash" varchar(128) NOT NULL,
	"confirmed" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now()
);
