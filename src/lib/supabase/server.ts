import { createClient as createSupabaseClient } from "@supabase/supabase-js";

/**
 * Supabase clients.
 *
 * Env is read inside the functions rather than at module scope so a serverless
 * instance picks up the current values instead of whatever was set the first
 * time this module happened to be imported.
 */

function readEnv() {
  return {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL?.trim(),
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim(),
    serviceKey: process.env.SUPABASE_SERVICE_ROLE_KEY?.trim(),
  };
}

/** True when the project has usable Supabase credentials. */
export function isSupabaseConfigured() {
  const { url, anonKey } = readEnv();
  return Boolean(url && anonKey);
}

/**
 * Read-only client for the public catalog.
 * Returns null when credentials are missing, so callers fall back to the
 * bundled catalog instead of throwing during a build.
 */
export function createServerClient() {
  const { url, anonKey } = readEnv();
  if (!url || !anonKey) return null;

  try {
    return createSupabaseClient(url, anonKey, {
      auth: { persistSession: false },
    });
  } catch (error) {
    // A malformed NEXT_PUBLIC_SUPABASE_URL throws here. Degrade rather than
    // failing the whole build.
    console.error("[supabase] invalid credentials:", error);
    return null;
  }
}

/**
 * Elevated client used by the order API route. Falls back to the anon key when
 * no service-role key is set — the `orders` table allows anonymous inserts.
 */
export function createAdminClient() {
  const { url, anonKey, serviceKey } = readEnv();
  const key = serviceKey || anonKey;
  if (!url || !key) return null;

  try {
    return createSupabaseClient(url, key, { auth: { persistSession: false } });
  } catch (error) {
    console.error("[supabase] invalid credentials:", error);
    return null;
  }
}
