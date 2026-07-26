import { createServerClient } from "./supabase/server";
import * as local from "./catalog";
import type { Category, Service, Testimonial } from "./types";

/**
 * Data access for the storefront.
 *
 * Every reader tries Supabase first and falls back to the bundled catalog when
 * Supabase is unconfigured or the query fails, so the site always renders.
 */

export async function getCategories(): Promise<Category[]> {
  const supabase = createServerClient();
  if (!supabase) return local.categories;

  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .eq("is_active", true)
    .order("sort_order");

  if (error || !data?.length) return local.categories;
  return data as Category[];
}

export async function getServices(): Promise<Service[]> {
  const supabase = createServerClient();
  if (!supabase) return local.services;

  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("is_active", true)
    .order("sort_order");

  if (error || !data?.length) return local.services;
  return data as Service[];
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

export async function getTestimonials(): Promise<Testimonial[]> {
  const supabase = createServerClient();
  if (!supabase) return local.testimonials;

  const { data, error } = await supabase
    .from("testimonials")
    .select("*")
    .eq("is_active", true)
    .order("sort_order");

  if (error || !data?.length) return local.testimonials;
  return data as Testimonial[];
}
