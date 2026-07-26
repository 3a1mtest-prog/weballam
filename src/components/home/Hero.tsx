import { CreditCard, ShieldCheck, Zap } from "lucide-react";

import { LogoMark } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { site, waLink } from "@/config/site";

const trust = [
  { icon: Zap, label: "تسليم فوري" },
  { icon: ShieldCheck, label: "نقل آمن ومضمون" },
  { icon: CreditCard, label: "طرق دفع متعددة" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* ambience */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-aurora" />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-grid opacity-40" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-20 h-64 bg-linear-to-t from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute -top-20 start-[-10%] -z-10 size-[32rem] animate-pulse-glow rounded-full bg-emerald/25 blur-[140px]" />
      <div className="pointer-events-none absolute top-40 end-[-8%] -z-10 size-96 rounded-full bg-neon/10 blur-[130px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        {/* ── Copy ── */}
        <div className="lg:col-span-7">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-neon/25 bg-neon/[0.07] px-4 py-2 text-xs font-bold text-neon">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-neon opacity-70" />
                <span className="relative inline-flex size-2 rounded-full bg-neon" />
              </span>
              يوزرات وحسابات وباقات — متاحون الآن
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl leading-[1.18] font-extrabold text-balance text-offwhite sm:text-5xl lg:text-6xl">
              يوزرك المميز
              <br />
              على بُعد <span className="text-gradient-neon">رسالة واتساب</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-fg-muted sm:text-lg">
              يوزرات إنستقرام رباعية ومميزة، يوزرات سناب شات وتيك توك، حسابات
              جاهزة بمتابعين، نقل يوزرات وزيادة متابعين، باقات سوا وتطبيقات بلس
              — نقل ملكية آمن، طرق دفع متعددة، وتسليم بيبدأ خلال دقائق.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/services" size="lg">
                تصفّح الخدمات
              </ButtonLink>
              <ButtonLink
                href={waLink(`مرحباً ${site.name} 👋 بدي أستفسر عن الخدمات`)}
                external
                variant="whatsapp"
                size="lg"
              >
                <WhatsAppIcon className="size-4.5" />
                اطلب عبر واتساب
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-3">
              {trust.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 text-sm font-semibold text-fg-muted"
                >
                  <Icon className="size-4 text-neon" strokeWidth={2} />
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* ── Brand mark ── */}
        <Reveal delay={200} className="lg:col-span-5">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            {/* orbit rings */}
            <div className="absolute inset-0 rounded-full border border-mint/10" />
            <div className="absolute inset-[12%] rounded-full border border-mint/[0.07]" />
            <div className="absolute inset-[24%] rounded-full border border-mint/5" />

            {/* halo */}
            <div className="absolute inset-[18%] animate-pulse-glow rounded-full bg-neon/20 blur-[70px]" />

            {/* mark */}
            <div className="absolute inset-0 grid animate-float place-items-center">
              <LogoMark className="h-auto w-[46%] drop-shadow-[0_0_50px_rgba(34,255,136,0.45)]" />
            </div>

            {/* wordmark under the mark */}
            <div className="absolute inset-x-0 bottom-[8%] text-center">
              <p className="brand-lockup text-lg text-offwhite sm:text-xl">
                AL-GHAZAWE
              </p>
              <p className="brand-lockup mt-1.5 text-[0.6rem] text-neon">
                — Store —
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* ── Stats strip ── */}
      <Reveal delay={360}>
        <div className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
          <dl className="glass grid grid-cols-2 gap-px overflow-hidden rounded-3xl md:grid-cols-4">
            {site.stats.map((stat) => (
              <div
                key={stat.label}
                className="group flex flex-col items-center gap-1.5 px-4 py-7 transition-colors hover:bg-neon/[0.05]"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-3xl font-extrabold text-neon transition-transform duration-300 group-hover:scale-110 sm:text-4xl">
                  {stat.value}
                </dd>
                <p className="text-xs font-semibold text-fg-muted sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </section>
  );
}
