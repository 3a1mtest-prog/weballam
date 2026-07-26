"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";

import { Logo } from "@/components/brand/Logo";
import { useCart } from "@/components/cart/CartProvider";
import { ButtonLink } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { site, waLink } from "@/config/site";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/", label: "الرئيسية" },
  { href: "/services", label: "الخدمات" },
  { href: "/#categories", label: "الأقسام" },
  { href: "/about", label: "من نحن" },
  { href: "/contact", label: "تواصل معنا" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { count, open, lastAdded } = useCart();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile sheet whenever the route changes
  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-mint/10 bg-ink-950/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label={site.name} className="shrink-0">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href.split("#")[0]) &&
                  item.href !== "/#categories";
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                  active
                    ? "text-neon"
                    : "text-fg-muted hover:text-offwhite",
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-4 -bottom-0.5 h-px bg-linear-to-l from-transparent via-neon to-transparent" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          {/* Cart */}
          <button
            onClick={open}
            aria-label={`السلة — ${count} عنصر`}
            className={cn(
              "relative grid size-11 place-items-center rounded-full border border-mint/15 bg-white/[0.03] text-offwhite transition-all hover:border-neon/50 hover:text-neon",
              lastAdded && "border-neon/70 text-neon",
            )}
          >
            <ShoppingBag className="size-5" strokeWidth={1.7} />
            {count > 0 && (
              <span className="absolute -top-1 -left-1 grid min-w-5 place-items-center rounded-full bg-neon px-1 text-[0.65rem] leading-5 font-extrabold text-ink-950">
                {count}
              </span>
            )}
          </button>

          <ButtonLink
            href={waLink(`مرحباً ${site.name} 👋 بدي أستفسر عن الخدمات`)}
            external
            variant="whatsapp"
            size="md"
            className="hidden sm:inline-flex"
          >
            <WhatsAppIcon className="size-4" />
            اطلب عبر واتساب
          </ButtonLink>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="القائمة"
            aria-expanded={menuOpen}
            className="grid size-11 place-items-center rounded-full border border-mint/15 bg-white/[0.03] text-offwhite lg:hidden"
          >
            {menuOpen ? (
              <X className="size-5" strokeWidth={1.8} />
            ) : (
              <Menu className="size-5" strokeWidth={1.8} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        className={cn(
          "overflow-hidden border-t border-mint/10 bg-ink-950/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 lg:hidden",
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-fg-muted transition-colors hover:bg-white/5 hover:text-neon"
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink
            href={waLink(`مرحباً ${site.name} 👋 بدي أستفسر عن الخدمات`)}
            external
            variant="whatsapp"
            className="mt-2 w-full"
          >
            <WhatsAppIcon className="size-4" />
            اطلب عبر واتساب
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
