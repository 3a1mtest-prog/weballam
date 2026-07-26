

import { LogoMark } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { site, waLink } from "@/config/site";

export function CtaBanner() {
  return (
    <section className="relative px-4 py-16 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-7xl">
        <div className="relative isolate overflow-hidden rounded-[2rem] border border-neon/20 bg-ink-800 px-6 py-16 text-center sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-brand-pattern opacity-60" />
          <div className="pointer-events-none absolute -top-24 start-1/2 -z-10 size-96 -translate-x-1/2 animate-pulse-glow rounded-full bg-neon/20 blur-[110px]" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-t from-ink-950/80 via-transparent to-transparent" />

          <LogoMark className="mx-auto h-16 w-auto drop-shadow-[0_0_36px_rgba(34,255,136,0.5)]" />

          <h2 className="mt-8 text-3xl leading-tight font-extrabold text-balance text-offwhite sm:text-4xl md:text-[2.75rem]">
            جاهز تبدأ؟ <span className="text-gradient-neon">نموّ أعمالك بيبدأ من هنا</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-pretty text-fg-muted">
            احكيلنا عن مشروعك وبنرجعلك بخطة واضحة وسعر صريح — الاستشارة الأولى
            مجانية بالكامل.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <ButtonLink
              href={waLink(
                `مرحباً ${site.name} 👋 حابب أبدأ مشروع وأحكي معكم عن التفاصيل`,
              )}
              external
              variant="whatsapp"
              size="lg"
            >
              <WhatsAppIcon className="size-4.5" />
              احكي معنا على واتساب
            </ButtonLink>
            <ButtonLink href="/services" variant="outline" size="lg">
              تصفّح الخدمات
            </ButtonLink>
          </div>

          <p className="mt-7 text-xs text-fg-subtle">
            {site.contact.hours}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
