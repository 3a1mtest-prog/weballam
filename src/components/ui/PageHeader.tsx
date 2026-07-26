import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import { Eyebrow } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  highlight,
  description,
  breadcrumbs,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  breadcrumbs?: { href: string; label: string }[];
}) {
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <section className="relative isolate overflow-hidden pt-32 pb-14 sm:pt-40 sm:pb-16">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-aurora" />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-grid opacity-30" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-20 h-40 bg-linear-to-t from-ink-950 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {breadcrumbs && (
          <Reveal>
            <nav aria-label="مسار التصفح" className="mb-6">
              <ol className="flex flex-wrap items-center gap-1 text-xs text-fg-subtle">
                {breadcrumbs.map((crumb, i) => (
                  <li key={crumb.href} className="flex items-center gap-1">
                    {i > 0 && <ChevronLeft className="size-3.5" strokeWidth={2} />}
                    {i === breadcrumbs.length - 1 ? (
                      <span className="text-neon">{crumb.label}</span>
                    ) : (
                      <Link
                        href={crumb.href}
                        className="transition-colors hover:text-offwhite"
                      >
                        {crumb.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </Reveal>
        )}

        <Reveal delay={60} className="max-w-3xl">
          {eyebrow && <Eyebrow className="mb-5">{eyebrow}</Eyebrow>}
          <h1 className="text-4xl leading-[1.2] font-extrabold text-balance text-offwhite sm:text-5xl">
            {parts[0]}
            {highlight && <span className="text-gradient-neon">{highlight}</span>}
            {parts[1]}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-pretty text-fg-muted">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
