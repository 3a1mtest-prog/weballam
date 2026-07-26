import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { CategoryIcon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Category, Service } from "@/lib/types";

export function CategoryGrid({
  categories,
  services,
}: {
  categories: Category[];
  services: Service[];
}) {
  return (
    <section id="categories" className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-25" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="أقسام المتجر"
          title="كل خدمة بتحتاجها، بقسم واضح"
          highlight="بقسم واضح"
          description="سبعة أقسام تغطي حضورك الرقمي من ألفه ليائه — اختار القسم وشوف كل الخدمات وأسعارها مباشرة."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, i) => {
            const count = services.filter(
              (s) => s.category_slug === category.slug,
            ).length;

            return (
              <Reveal key={category.slug} delay={i * 70}>
                <Link
                  href={`/categories/${category.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-mint/10 bg-linear-160 from-white/[0.055] via-white/[0.02] to-white/[0.008] p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-neon/35 hover:shadow-[0_28px_64px_-28px_rgba(34,255,136,0.5)]"
                >
                  <span className="pointer-events-none absolute -top-24 -end-16 size-48 rounded-full bg-neon/12 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative flex items-start justify-between">
                    <div className="grid size-14 place-items-center rounded-2xl border border-neon/20 bg-neon/[0.08] text-neon transition-all duration-500 group-hover:scale-110 group-hover:bg-neon group-hover:text-ink-950">
                      <CategoryIcon name={category.icon} className="size-6.5" />
                    </div>
                    <span className="rounded-full border border-mint/10 bg-ink-950/50 px-3 py-1 font-display text-[0.7rem] font-bold text-fg-subtle">
                      {count} خدمة
                    </span>
                  </div>

                  <h3 className="relative mt-6 text-xl font-extrabold text-offwhite transition-colors group-hover:text-neon">
                    {category.name}
                  </h3>
                  <p className="relative mt-1 text-[0.72rem] font-bold tracking-wide text-neon/70">
                    {category.tagline}
                  </p>
                  <p className="relative mt-3 flex-1 text-sm leading-relaxed text-fg-muted">
                    {category.description}
                  </p>

                  <span className="relative mt-6 inline-flex items-center gap-2 text-sm font-bold text-neon">
                    شوف الخدمات
                    <ArrowLeft
                      className="size-4 transition-transform duration-300 group-hover:-translate-x-1"
                      strokeWidth={2.4}
                    />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
