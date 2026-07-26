import { Quote, Star } from "lucide-react";

import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Testimonial } from "@/lib/types";

export function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  // Doubled so the marquee can loop seamlessly at -50%
  const track = [...testimonials, ...testimonials];

  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute start-1/2 top-0 size-[34rem] -translate-x-1/2 rounded-full bg-emerald/12 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="آراء العملاء"
          title="الكلام لعملائنا مش إلنا"
          highlight="لعملائنا"
          description="أكثر من 8 آلاف عميل تعاملوا معنا. هاي شوية من اللي قالوه."
        />
      </div>

      <div className="fade-edges-x relative mt-14 flex overflow-hidden">
        <div className="flex w-max animate-marquee gap-5 hover:[animation-play-state:paused]">
          {track.map((t, i) => (
            <figure
              key={`${t.id}-${i}`}
              className="group relative w-[21rem] shrink-0 rounded-3xl border border-mint/10 bg-linear-160 from-white/[0.055] via-white/[0.02] to-white/[0.008] p-6 backdrop-blur-md transition-colors duration-500 hover:border-neon/30"
            >
              <Quote
                className="absolute top-5 end-5 size-8 text-neon/15 transition-colors group-hover:text-neon/30"
                strokeWidth={1.5}
              />

              <div className="flex gap-0.5" aria-label={`${t.rating} من 5`}>
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star
                    key={s}
                    className="size-4 fill-neon text-neon"
                    strokeWidth={0}
                  />
                ))}
              </div>

              <blockquote className="mt-4 text-sm leading-relaxed text-fg-muted">
                {t.body}
              </blockquote>

              <figcaption className="mt-5 flex items-center gap-3 border-t border-mint/10 pt-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-neon/25 bg-neon/10 font-display text-sm font-extrabold text-neon">
                  {t.name.charAt(0)}
                </span>
                <span className="flex flex-col">
                  <span className="text-sm font-bold text-offwhite">{t.name}</span>
                  <span className="text-xs text-fg-subtle">{t.handle}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
