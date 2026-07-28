// Resolves the public origin used for sitemap.xml / robots.txt at BUILD time.
//
// A static build has no incoming request to read the host from, so it has to be
// configured. Precedence:
//   1. SITE_URL — set this for a custom domain; it always wins.
//   2. VERCEL_PROJECT_PRODUCTION_URL — Vercel sets this automatically to the
//      project's production domain (bare host, no protocol).
// Returns "" when neither is set, which callers treat as "omit the absolute URL"
// rather than baking in a wrong host.
import process from "node:process";

export function siteUrl() {
  const explicit = process.env.SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/+$/, "");

  const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercelHost) return `https://${vercelHost.replace(/\/+$/, "")}`;

  return "";
}
