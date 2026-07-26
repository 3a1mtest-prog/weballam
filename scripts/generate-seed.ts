/**
 * Regenerates supabase/seed.sql from the catalog in src/lib/catalog.ts, so the
 * bundled fallback data and the database never drift apart.
 *
 *   npm run seed:generate
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { categories, services, testimonials } from "../src/lib/catalog.ts";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

/** Single-quote escaping for SQL string literals. */
const q = (value: string | null | undefined) =>
  value === null || value === undefined ? "NULL" : `'${value.replace(/'/g, "''")}'`;

const num = (value: number | null | undefined) =>
  value === null || value === undefined ? "NULL" : String(value);

const bool = (value: boolean) => (value ? "true" : "false");

const jsonb = (value: unknown) => `${q(JSON.stringify(value))}::jsonb`;

const lines: string[] = [
  "-- ═══════════════════════════════════════════════════════════════════════════",
  "--  AL-GHAZAWE STORE — seed data",
  "--  GENERATED FILE — edit src/lib/catalog.ts and run `npm run seed:generate`.",
  "--  Safe to re-run: every insert upserts on conflict.",
  "-- ═══════════════════════════════════════════════════════════════════════════",
  "",
  "-- ── Categories ─────────────────────────────────────────────────────────────",
  "insert into public.categories (id, slug, name, tagline, description, icon, sort_order, is_active) values",
];

lines.push(
  categories
    .map(
      (c) =>
        `  (${q(c.id)}, ${q(c.slug)}, ${q(c.name)}, ${q(c.tagline)}, ${q(c.description)}, ${q(c.icon)}, ${c.sort_order}, ${bool(c.is_active)})`,
    )
    .join(",\n"),
);

lines.push(
  "on conflict (id) do update set",
  "  slug = excluded.slug,",
  "  name = excluded.name,",
  "  tagline = excluded.tagline,",
  "  description = excluded.description,",
  "  icon = excluded.icon,",
  "  sort_order = excluded.sort_order,",
  "  is_active = excluded.is_active;",
  "",
  "-- ── Services ───────────────────────────────────────────────────────────────",
  "insert into public.services (id, category_slug, slug, title, summary, description, price, old_price, currency, unit, delivery_time, features, badge, is_featured, is_active, sort_order) values",
);

lines.push(
  services
    .map(
      (s) =>
        `  (${q(s.id)}, ${q(s.category_slug)}, ${q(s.slug)}, ${q(s.title)}, ${q(s.summary)}, ${q(s.description)}, ${num(s.price)}, ${num(s.old_price)}, ${q(s.currency)}, ${q(s.unit)}, ${q(s.delivery_time)}, ${jsonb(s.features)}, ${q(s.badge)}, ${bool(s.is_featured)}, ${bool(s.is_active)}, ${s.sort_order})`,
    )
    .join(",\n"),
);

lines.push(
  "on conflict (id) do update set",
  "  category_slug = excluded.category_slug,",
  "  slug = excluded.slug,",
  "  title = excluded.title,",
  "  summary = excluded.summary,",
  "  description = excluded.description,",
  "  price = excluded.price,",
  "  old_price = excluded.old_price,",
  "  currency = excluded.currency,",
  "  unit = excluded.unit,",
  "  delivery_time = excluded.delivery_time,",
  "  features = excluded.features,",
  "  badge = excluded.badge,",
  "  is_featured = excluded.is_featured,",
  "  is_active = excluded.is_active,",
  "  sort_order = excluded.sort_order;",
  "",
  "-- ── Testimonials ───────────────────────────────────────────────────────────",
  "insert into public.testimonials (id, name, handle, rating, body, is_active, sort_order) values",
);

lines.push(
  testimonials
    .map(
      (t, i) =>
        `  (${q(t.id)}, ${q(t.name)}, ${q(t.handle)}, ${t.rating}, ${q(t.body)}, true, ${i + 1})`,
    )
    .join(",\n"),
);

lines.push(
  "on conflict (id) do update set",
  "  name = excluded.name,",
  "  handle = excluded.handle,",
  "  rating = excluded.rating,",
  "  body = excluded.body,",
  "  is_active = excluded.is_active,",
  "  sort_order = excluded.sort_order;",
  "",
);

mkdirSync(join(root, "supabase"), { recursive: true });
writeFileSync(join(root, "supabase", "seed.sql"), lines.join("\n"), "utf8");

console.log(
  `✓ supabase/seed.sql — ${categories.length} categories, ${services.length} services, ${testimonials.length} testimonials`,
);
