"use client";

import { useMemo, useState } from "react";
import { LayoutGrid, Search, SlidersHorizontal, X } from "lucide-react";

import { ServiceCard } from "@/components/ui/ServiceCard";
import { CategoryIcon } from "@/components/ui/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { site, waLink } from "@/config/site";
import { cn } from "@/lib/utils";
import type { Category, Service } from "@/lib/types";

type Sort = "featured" | "price-asc" | "price-desc";

const sortLabels: Record<Sort, string> = {
  featured: "الأكثر طلباً",
  "price-asc": "السعر: الأقل أولاً",
  "price-desc": "السعر: الأعلى أولاً",
};

export function ServicesBrowser({
  categories,
  services,
  initialCategory = "all",
}: {
  categories: Category[];
  services: Service[];
  initialCategory?: string;
}) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(initialCategory);
  const [sort, setSort] = useState<Sort>("featured");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();

    const filtered = services.filter((s) => {
      const matchesCategory = active === "all" || s.category_slug === active;
      if (!matchesCategory) return false;
      if (!q) return true;
      return (
        s.title.toLowerCase().includes(q) ||
        s.summary.toLowerCase().includes(q) ||
        s.features.some((f) => f.toLowerCase().includes(q))
      );
    });

    return [...filtered].sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      // featured first, then the catalog's own ordering
      if (a.is_featured !== b.is_featured) return a.is_featured ? -1 : 1;
      return a.sort_order - b.sort_order;
    });
  }, [services, query, active, sort]);

  const filters = [
    { slug: "all", name: "كل الخدمات", icon: "LayoutGrid" },
    ...categories.map((c) => ({ slug: c.slug, name: c.name, icon: c.icon })),
  ];

  return (
    <section className="relative pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Controls ── */}
        <div className="sticky top-18 z-30 -mx-4 mb-10 border-y border-mint/10 bg-ink-950/85 px-4 py-4 backdrop-blur-xl sm:-mx-6 sm:px-6 lg:rounded-3xl lg:border">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            {/* Search */}
            <div className="relative flex-1">
              <Search
                className="pointer-events-none absolute top-1/2 start-4 size-4.5 -translate-y-1/2 text-fg-subtle"
                strokeWidth={1.8}
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="دوّر على خدمة… متابعين، يوزر، شدات، اشتراك"
                aria-label="ابحث في الخدمات"
                className="h-12 w-full rounded-full border border-mint/15 bg-ink-900/70 ps-11 pe-11 text-sm text-offwhite placeholder:text-fg-subtle focus:border-neon/60 focus:outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  aria-label="مسح البحث"
                  className="absolute top-1/2 end-3.5 -translate-y-1/2 text-fg-subtle transition-colors hover:text-neon"
                >
                  <X className="size-4.5" strokeWidth={2} />
                </button>
              )}
            </div>

            {/* Sort */}
            <div className="relative">
              <SlidersHorizontal
                className="pointer-events-none absolute top-1/2 start-4 size-4 -translate-y-1/2 text-fg-subtle"
                strokeWidth={1.8}
              />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as Sort)}
                aria-label="ترتيب النتائج"
                className="h-12 w-full cursor-pointer appearance-none rounded-full border border-mint/15 bg-ink-900/70 ps-11 pe-6 text-sm font-semibold text-offwhite focus:border-neon/60 focus:outline-none lg:w-56"
              >
                {(Object.keys(sortLabels) as Sort[]).map((key) => (
                  <option key={key} value={key} className="bg-ink-900">
                    {sortLabels[key]}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category chips */}
          <div className="mt-4 -mx-1 flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {filters.map((f) => (
              <button
                key={f.slug}
                onClick={() => setActive(f.slug)}
                className={cn(
                  "inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-[0.8rem] font-bold transition-all",
                  active === f.slug
                    ? "border-neon bg-neon text-ink-950 shadow-[0_8px_24px_-10px_rgba(34,255,136,0.9)]"
                    : "border-mint/15 bg-white/[0.03] text-fg-muted hover:border-neon/40 hover:text-neon",
                )}
              >
                {f.slug === "all" ? (
                  <LayoutGrid className="size-4" strokeWidth={1.8} />
                ) : (
                  <CategoryIcon name={f.icon} className="size-4" />
                )}
                {f.name}
              </button>
            ))}
          </div>
        </div>

        {/* ── Results ── */}
        <p className="mb-6 text-sm text-fg-subtle">
          <span className="font-display font-bold text-neon">{results.length}</span>{" "}
          خدمة متاحة
        </p>

        {results.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((service) => (
              <ServiceCard key={service.slug} service={service} className="h-full" />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 rounded-3xl border border-mint/10 bg-white/[0.02] px-8 py-20 text-center">
            <div className="grid size-16 place-items-center rounded-full border border-mint/10 bg-ink-900">
              <Search className="size-7 text-fg-subtle" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-extrabold text-offwhite">
              ما لقينا نتائج لبحثك
            </h3>
            <p className="max-w-sm text-sm text-fg-muted">
              جرّب كلمة تانية أو قسم مختلف — أو احكيلنا شو بدك بالضبط وبنوفرهولك.
            </p>
            <ButtonLink
              href={waLink(
                `مرحباً ${site.name} 👋 بدوّر على خدمة "${query}" ومش لاقيها بالموقع`,
              )}
              external
              variant="whatsapp"
              className="mt-2"
            >
              اطلبها منا على واتساب
            </ButtonLink>
          </div>
        )}
      </div>
    </section>
  );
}
