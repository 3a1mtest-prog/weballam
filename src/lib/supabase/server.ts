import { createClient as createSupabaseClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const isSupabaseConfigured = Boolean(url && anonKey);

/**
 * Server-side Supabase client for reading public catalog data.
 * Returns null when credentials are missing.
 */
export function createServerClient() {
  if (!isSupabaseConfigured) return null;
  return createSupabaseClient(url!, anonKey!, {
    auth: { persistSession: false },
  });
}

/**
 * Elevated client used by the order API route. Falls back to the anon key when
 * no service-role key is set — the `orders` table allows anonymous inserts.
 */
export function createAdminClient() {
  if (!url || !(serviceKey || anonKey)) return null;
  return createSupabaseClient(url, serviceKey ?? anonKey!, {
    auth: { persistSession: false },
  });
}
