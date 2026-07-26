import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { Logo } from "@/components/brand/Logo";
import {
  InstagramIcon,
  TelegramIcon,
  TikTokIcon,
  WhatsAppIcon,
} from "@/components/ui/BrandIcons";
import { site, waLink } from "@/config/site";
import { categories } from "@/lib/catalog";

const quickLinks = [
  { href: "/services", label: "كل الخدمات" },
  { href: "/about", label: "من نحن" },
  { href: "/contact", label: "تواصل معنا" },
  { href: "/#faq", label: "الأسئلة الشائعة" },
];

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-mint/10 bg-ink-950">
      <div className="pointer-events-none absolute inset-0 bg-brand-pattern opacity-[0.35]" />
      <div className="pointer-events-none absolute -top-40 start-1/4 size-96 rounded-full bg-emerald/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-fg-muted">
              {site.tagline}. خدمات رقمية متكاملة بجودة مضمونة، تسليم سريع ودعم
              لا ينام.
            </p>

            <div className="mt-6 flex gap-2.5">
              <Social href={site.social.instagram} label="إنستقرام">
                <InstagramIcon className="size-4.5" />
              </Social>
              <Social href={site.social.telegram} label="تليجرام">
                <TelegramIcon className="size-4.5" />
              </Social>
              <Social href={site.social.tiktok} label="تيك توك">
                <TikTokIcon className="size-4.5" />
              </Social>
              <Social href={waLink()} label="واتساب">
                <WhatsAppIcon className="size-4.5" />
              </Social>
            </div>
          </div>

          {/* Categories */}
          <div className="lg:col-span-3">
            <h3 className="mb-4 text-sm font-extrabold text-offwhite">الأقسام</h3>
            <ul className="space-y-2.5">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/categories/${c.slug}`}
                    className="text-sm text-fg-muted transition-colors hover:text-neon"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-extrabold text-offwhite">روابط</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-fg-muted transition-colors hover:text-neon"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="mb-4 text-sm font-extrabold text-offwhite">تواصل معنا</h3>
            <ul className="space-y-3.5 text-sm text-fg-muted">
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 transition-colors hover:text-neon"
                >
                  <Phone className="size-4 shrink-0 text-neon" strokeWidth={1.8} />
                  <span dir="ltr">{site.contact.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-neon"
                >
                  <Mail className="size-4 shrink-0 text-neon" strokeWidth={1.8} />
                  <span dir="ltr">{site.contact.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-neon" strokeWidth={1.8} />
                <span>{site.contact.address}</span>
              </li>
            </ul>

            <p className="mt-5 rounded-2xl border border-neon/15 bg-neon/[0.05] px-4 py-3 text-xs leading-relaxed text-mint">
              {site.contact.hours}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-mint/10 pt-6 sm:flex-row">
          <p className="text-xs text-fg-subtle">
            © {new Date().getFullYear()} {site.nameEn} — جميع الحقوق محفوظة.
          </p>
          <p className="brand-lockup text-[0.6rem] text-fg-subtle">
            {site.taglineEn}
          </p>
        </div>
      </div>
    </footer>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid size-10 place-items-center rounded-full border border-mint/15 bg-white/[0.03] text-fg-muted transition-all hover:-translate-y-0.5 hover:border-neon/50 hover:text-neon"
    >
      {children}
    </a>
  );
}
