"use client";

import { useState } from "react";
import { Check, Minus, Plus, ShoppingBag } from "lucide-react";

import { useCart } from "@/components/cart/CartProvider";
import { Button, ButtonLink } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { site, waLink } from "@/config/site";
import { formatPrice } from "@/lib/utils";
import type { Service } from "@/lib/types";

export function ServiceOrderPanel({ service }: { service: Service }) {
  const { add, open, lastAdded } = useCart();
  const [qty, setQty] = useState(1);
  const justAdded = lastAdded === service.slug;

  const discounted = service.old_price && service.old_price > service.price;
  const saving = discounted ? service.old_price! - service.price : 0;
  const total = service.price * qty;

  return (
    <div className="sticky top-28 rounded-3xl border border-mint/12 bg-linear-160 from-white/[0.06] via-white/[0.02] to-white/[0.008] p-6 backdrop-blur-md">
      {discounted && (
        <span className="mb-4 inline-flex rounded-full bg-neon/15 px-3 py-1 text-[0.7rem] font-extrabold text-neon">
          وفّر {formatPrice(saving, service.currency)}
        </span>
      )}

      <div className="flex items-baseline gap-3">
        <span className="font-display text-4xl font-extrabold text-neon">
          {formatPrice(service.price, service.currency)}
        </span>
        {discounted && (
          <span className="font-display text-lg text-fg-subtle line-through">
            {formatPrice(service.old_price!, service.currency)}
          </span>
        )}
      </div>
      {service.unit && (
        <p className="mt-1 text-sm text-fg-muted">{service.unit}</p>
      )}

      {/* Quantity */}
      <div className="mt-6 flex items-center justify-between rounded-2xl border border-mint/12 bg-ink-950/50 p-2">
        <span className="ps-3 text-sm font-bold text-fg-muted">الكمية</span>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            aria-label="إنقاص الكمية"
            className="grid size-9 place-items-center rounded-xl text-fg-muted transition-colors hover:bg-white/10 hover:text-offwhite"
          >
            <Minus className="size-4" strokeWidth={2.4} />
          </button>
          <span className="min-w-10 text-center font-display text-lg font-extrabold text-offwhite">
            {qty}
          </span>
          <button
            onClick={() => setQty((q) => Math.min(99, q + 1))}
            aria-label="زيادة الكمية"
            className="grid size-9 place-items-center rounded-xl text-fg-muted transition-colors hover:bg-white/10 hover:text-offwhite"
          >
            <Plus className="size-4" strokeWidth={2.4} />
          </button>
        </div>
      </div>

      {qty > 1 && (
        <div className="mt-4 flex items-baseline justify-between text-sm">
          <span className="text-fg-muted">الإجمالي</span>
          <span className="font-display text-xl font-extrabold text-neon">
            {formatPrice(total, service.currency)}
          </span>
        </div>
      )}

      <div className="mt-6 flex flex-col gap-3">
        <Button
          size="lg"
          className="w-full"
          onClick={() => {
            add(service, qty);
            open();
          }}
        >
          {justAdded ? (
            <>
              <Check className="size-4.5" strokeWidth={3} />
              تمت الإضافة
            </>
          ) : (
            <>
              <ShoppingBag className="size-4.5" strokeWidth={2} />
              أضف للسلة
            </>
          )}
        </Button>

        <ButtonLink
          href={waLink(
            `مرحباً ${site.name} 👋\nبدي أطلب: *${service.title}*\nالكمية: ${qty}\nالسعر: ${formatPrice(total, service.currency)}`,
          )}
          external
          variant="whatsapp"
          size="lg"
          className="w-full"
        >
          <WhatsAppIcon className="size-4.5" />
          اطلب مباشرة على واتساب
        </ButtonLink>
      </div>

      <dl className="mt-6 space-y-3 border-t border-mint/10 pt-5 text-sm">
        <div className="flex items-center justify-between gap-3">
          <dt className="text-fg-muted">مدة التسليم</dt>
          <dd className="text-end font-bold text-offwhite">
            {service.delivery_time}
          </dd>
        </div>
        <div className="flex items-center justify-between gap-3">
          <dt className="text-fg-muted">طريقة الطلب</dt>
          <dd className="text-end font-bold text-offwhite">عبر واتساب</dd>
        </div>
        <div className="flex items-center justify-between gap-3">
          <dt className="text-fg-muted">الدعم</dt>
          <dd className="text-end font-bold text-offwhite">متابعة حتى التسليم</dd>
        </div>
      </dl>
    </div>
  );
}
