import { createServerClient } from "./supabase/server";
import * as local from "./catalog";
import type { Category, Service, Testimonial } from "./types";

/**
 * Data access for the storefront.
 *
 * Every reader tries Supabase first and falls back to the bundled catalog when
 * Supabase is unconfigured, unreachable, or returns nothing — so the site
 * always renders and a database outage can never fail a production build.
 */

async function fromSupabase<T>(
  table: string,
  build: (
    query: ReturnType<
      NonNullable<ReturnType<typeof createServerClient>>["from"]
    >,
  ) => PromiseLike<{ data: unknown; error: unknown }>,
): Promise<T[] | null> {
  const supabase = createServerClient();
  if (!supabase) return null;

  try {
    const { data, error } = await build(supabase.from(table));
    if (error) {
      console.error(`[data] ${table} query failed:`, error);
      return null;
    }
    const rows = data as T[] | null;
    return rows?.length ? rows : null;
  } catch (error) {
    // Network failure, DNS error, timeout — anything that rejects instead of
    // returning an error payload. Never let it escape into a page render.
    console.error(`[data] ${table} unreachable:`, error);
    return null;
  }
}

export async function getCategories(): Promise<Category[]> {
  const rows = await fromSupabase<Category>("categories", (q) =>
    q.select("*").eq("is_active", true).order("sort_order"),
  );
  return rows ?? local.categories;
}

export async function getServices(): Promise<Service[]> {
  const rows = await fromSupabase<Service>("services", (q) =>
    q.select("*").eq("is_active", true).order("sort_order"),
  );
  return rows ?? local.services;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const rows = await fromSupabase<Testimonial>("testimonials", (q) =>
    q.select("*").eq("is_active", true).order("sort_order"),
  );
  return rows ?? local.testimonials;
}

export async function getFeaturedServices(): Promise<Service[]> {
  const all = await getServices();
  return all.filter((s) => s.is_featured);
}

export async function getServicesByCategory(slug: string): Promise<Service[]> {
  const all = await getServices();
  return all
    .filter((s) => s.category_slug === slug)
    .sort((a, b) => a.sort_order - b.sort_order);
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const all = await getCategories();
  return all.find((c) => c.slug === slug) ?? null;
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const all = await getServices();
  return all.find((s) => s.slug === slug) ?? null;
}
