import type { MetadataRoute } from "next";

import { site } from "@/config/site";
import { getCategories, getServices } from "@/lib/data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [categories, services] = await Promise.all([
    getCategories(),
    getServices(),
  ]);

  const now = new Date();

  return [
    { url: site.url, lastModified: now, priority: 1 },
    { url: `${site.url}/services`, lastModified: now, priority: 0.9 },
    { url: `${site.url}/about`, lastModified: now, priority: 0.6 },
    { url: `${site.url}/contact`, lastModified: now, priority: 0.6 },
    ...categories.map((c) => ({
      url: `${site.url}/categories/${c.slug}`,
      lastModified: now,
      priority: 0.8,
    })),
    ...services.map((s) => ({
      url: `${site.url}/services/${s.slug}`,
      lastModified: now,
      priority: 0.7,
    })),
  ];
}
