// Emits dist/client/robots.txt after the build.
//
// The old /robots.txt server route derived the host from the incoming request,
// which a static deploy has no way to do — so the host is resolved at build
// time instead (see ./site-url.mjs).
import { writeFileSync } from "node:fs";

import { siteUrl } from "./site-url.mjs";

const host = siteUrl();

const body = [
  "User-agent: *",
  "Allow: /",
  "",
  // A Sitemap line must be an absolute URL, so it is only emitted when a host
  // is known. Crawlers still find /sitemap.xml at the root without it.
  ...(host ? [`Sitemap: ${host}/sitemap.xml`, ""] : []),
].join("\n");

writeFileSync("dist/client/robots.txt", body);
console.log(`[robots] wrote dist/client/robots.txt${host ? ` (host: ${host})` : " (no host configured)"}`);
