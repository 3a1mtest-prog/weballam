import type { Metadata } from "next";
import { Clock, Mail } from "lucide-react";

import {
  InstagramIcon,
  TelegramIcon,
  WhatsAppIcon,
} from "@/components/ui/BrandIcons";
import { PageHeader } from "@/components/ui/PageHeader";
import { Faq } from "@/components/home/Faq";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site, waLink } from "@/config/site";

export const metadata: Metadata = {
  title: "تواصل معنا",
  description: `تواصل مع غزاوي ستور عبر واتساب ${site.contact.phoneDisplay} أو البريد ${site.contact.email}. رد سريع طوال اليوم.`,
};

const channels: {
  icon: (props: { className?: string }) => React.ReactNode;
  title: string;
  body: string;
  value: string;
  href: string;
  cta: string;
  featured: boolean;
}[] = [
  {
    icon: WhatsAppIcon,
    title: "واتساب",
    body: "أسرع طريقة للوصول إلنا — رد خلال دقائق",
    value: site.contact.phoneDisplay,
    href: waLink(`مرحباً ${site.name} 👋 حابب أستفسر`),
    cta: "افتح المحادثة",
    featured: true,
  },
  {
    icon: (p) => <Mail {...p} strokeWidth={1.8} />,
    title: "البريد الإلكتروني",
    body: "للعروض والشراكات والطلبات الكبيرة",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
    cta: "أرسل إيميل",
    featured: false,
  },
  {
    icon: InstagramIcon,
    title: "إنستقرام",
    body: "شوف آخر أعمالنا وعروضنا أول بأول",
    value: "@alghazawe.store",
    href: site.social.instagram,
    cta: "تابعنا",
    featured: false,
  },
  {
    icon: TelegramIcon,
    title: "تليجرام",
    body: "قناتنا للعروض والتحديثات اليومية",
    value: "@alghazawe_store",
    href: site.social.telegram,
    cta: "انضم للقناة",
    featured: false,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="تواصل معنا"
        title="احكيلنا شو بدك ونحنا منكمّل"
        highlight="ونحنا منكمّل"
        description="ما في نماذج طويلة ولا انتظار. اختار القناة اللي بتريحك وبنكون معك خلال دقائق."
        breadcrumbs={[
          { href: "/", label: "الرئيسية" },
          { href: "/contact", label: "تواصل معنا" },
        ]}
      />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2">
            {channels.map(
              ({ icon: Icon, title, body, value, href, cta, featured }, i) => (
                <Reveal key={title} delay={i * 70}>
                  <div
                    className={`group flex h-full flex-col rounded-3xl border p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 ${
                      featured
                        ? "border-neon/35 bg-neon/[0.06] shadow-[0_24px_60px_-30px_rgba(34,255,136,0.6)]"
                        : "border-mint/10 bg-white/[0.025] hover:border-neon/30"
                    }`}
                  >
                    <span
                      className={`grid size-13 place-items-center rounded-2xl transition-all duration-500 ${
                        featured
                          ? "bg-neon text-ink-950"
                          : "border border-neon/20 bg-neon/[0.08] text-neon group-hover:bg-neon group-hover:text-ink-950"
                      }`}
                    >
                      <Icon className="size-6" />
                    </span>

                    <h2 className="mt-5 text-lg font-extrabold text-offwhite">
                      {title}
                    </h2>
                    <p className="mt-1.5 text-sm text-fg-muted">{body}</p>
                    <p
                      dir="ltr"
                      className="mt-4 font-display text-sm font-bold text-neon"
                    >
                      {value}
                    </p>

                    <ButtonLink
                      href={href}
                      external
                      variant={featured ? "whatsapp" : "outline"}
                      className="mt-6 self-start"
                    >
                      {cta}
                    </ButtonLink>
                  </div>
                </Reveal>
              ),
            )}
          </div>

          <Reveal delay={300} className="mt-6">
            <div className="flex flex-col items-center gap-3 rounded-3xl border border-mint/10 bg-white/[0.02] px-6 py-8 text-center sm:flex-row sm:justify-center sm:gap-4 sm:text-start">
              <Clock className="size-6 shrink-0 text-neon" strokeWidth={1.7} />
              <div>
                <p className="text-sm font-extrabold text-offwhite">
                  أوقات العمل
                </p>
                <p className="mt-1 text-sm text-fg-muted">
                  {site.contact.hours} — وبنحاول نرد خارج الأوقات كمان.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Faq />
    </>
  );
}
