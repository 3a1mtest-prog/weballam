"use client";

import Link from "next/link";
import { ArrowLeft, Check, Clock, Plus } from "lucide-react";

import { useCart } from "@/components/cart/CartProvider";
import { cn, formatPrice } from "@/lib/utils";
import type { Service } from "@/lib/types";

export function ServiceCard({
  service,
  className,
}: {
  service: Service;
  className?: string;
}) {
  const { add, lastAdded, open } = useCart();
  const justAdded = lastAdded === service.slug;
  const discounted = service.old_price && service.old_price > service.price;

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border border-mint/10 bg-linear-160 from-white/[0.055] via-white/[0.02] to-white/[0.008] p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-neon/35 hover:shadow-[0_28px_64px_-28px_rgba(34,255,136,0.5)]",
        className,
      )}
    >
      {/* hover sheen along the top edge */}
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-l from-transparent via-neon/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      {/* corner glow */}
      <span className="pointer-events-none absolute -top-20 -start-20 size-40 rounded-full bg-neon/12 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      {service.badge && (
        <span className="absolute top-5 end-5 rounded-full border border-neon/30 bg-neon/12 px-3 py-1 text-[0.65rem] font-extrabold text-neon">
          {service.badge}
        </span>
      )}

      <div className="relative flex-1">
        <h3 className="pe-20 text-lg leading-snug font-extrabold text-offwhite transition-colors group-hover:text-neon">
          <Link href={`/services/${service.slug}`} className="after:absolute after:inset-0">
            {service.title}
          </Link>
        </h3>

        <p className="mt-2.5 text-sm leading-relaxed text-fg-muted">
          {service.summary}
        </p>

        <ul className="mt-4 space-y-2">
          {service.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-[0.8rem] text-fg-muted">
              <Check className="mt-0.5 size-3.5 shrink-0 text-neon" strokeWidth={2.6} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-mint/10 bg-ink-950/50 px-3 py-1.5 text-[0.7rem] text-fg-subtle">
          <Clock className="size-3.5" strokeWidth={1.8} />
          {service.delivery_time}
        </div>
      </div>

      <div className="relative mt-6 flex items-end justify-between gap-3 border-t border-mint/10 pt-5">
        <div className="flex flex-col">
          {service.unit && (
            <span className="text-[0.68rem] text-fg-subtle">{service.unit}</span>
          )}
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-extrabold text-neon">
              {formatPrice(service.price, service.currency)}
            </span>
            {discounted && (
              <span className="font-display text-sm text-fg-subtle line-through">
                {formatPrice(service.old_price!, service.currency)}
              </span>
            )}
          </div>
        </div>

        <div className="relative z-10 flex items-center gap-2">
          <Link
            href={`/services/${service.slug}`}
            aria-label={`تفاصيل ${service.title}`}
            className="grid size-10 place-items-center rounded-full border border-mint/15 text-fg-muted transition-all hover:border-neon/50 hover:text-neon"
          >
            <ArrowLeft className="size-4" strokeWidth={2} />
          </Link>

          <button
            onClick={() => {
              add(service);
              open();
            }}
            aria-label={`أضف ${service.title} للسلة`}
            className={cn(
              "grid size-10 place-items-center rounded-full font-bold transition-all",
              justAdded
                ? "bg-mint text-ink-950"
                : "bg-neon text-ink-950 hover:bg-mint hover:shadow-[0_8px_24px_-8px_rgba(34,255,136,0.9)]",
            )}
          >
            {justAdded ? (
              <Check className="size-4" strokeWidth={3} />
            ) : (
              <Plus className="size-4" strokeWidth={3} />
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
