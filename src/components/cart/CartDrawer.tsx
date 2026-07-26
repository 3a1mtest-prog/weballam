"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Loader2, Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";

import { useCart } from "./CartProvider";
import { Button, ButtonLink } from "@/components/ui/Button";
import { site, waLink } from "@/config/site";
import { cn, formatPrice, makeOrderNumber } from "@/lib/utils";
import type { OrderPayload } from "@/lib/types";

/** Builds the WhatsApp message the store receives for an order. */
function buildMessage(order: OrderPayload) {
  const lines = [
    `*طلب جديد من ${site.name}* 🛍️`,
    `رقم الطلب: *${order.order_number}*`,
    "",
    `الاسم: ${order.customer_name}`,
    `الجوال: ${order.customer_phone}`,
  ];

  if (order.customer_contact) {
    lines.push(`اليوزر / الرابط: ${order.customer_contact}`);
  }

  lines.push("", "*الطلبات:*");
  order.items.forEach((item, i) => {
    lines.push(
      `${i + 1}. ${item.title} — ${item.quantity} × ${formatPrice(item.price, item.currency)}`,
    );
  });

  lines.push("", `*الإجمالي: ${formatPrice(order.total, order.currency)}*`);
  if (order.notes) lines.push("", `ملاحظات: ${order.notes}`);

  return lines.join("\n");
}

export function CartDrawer() {
  const { items, count, total, currency, isOpen, close, setQuantity, remove, clear } =
    useCart();

  const [step, setStep] = useState<"cart" | "checkout">("cart");
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    contact: "",
    notes: "",
  });

  // Reset to the cart step whenever the drawer is reopened
  useEffect(() => {
    if (isOpen) setStep("cart");
  }, [isOpen]);

  // Escape closes the drawer
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  async function submitOrder(e: React.FormEvent) {
    e.preventDefault();
    if (submitting || items.length === 0) return;
    setSubmitting(true);

    const order: OrderPayload = {
      order_number: makeOrderNumber(),
      customer_name: form.name.trim(),
      customer_phone: form.phone.trim(),
      customer_contact: form.contact.trim() || null,
      items,
      total,
      currency,
      notes: form.notes.trim() || null,
    };

    // Record the order, but never block the WhatsApp hand-off on it — the
    // conversation is what actually closes the sale.
    try {
      await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),
      });
    } catch {
      /* offline or API unavailable — WhatsApp still carries the order */
    }

    window.open(waLink(buildMessage(order)), "_blank", "noopener,noreferrer");

    clear();
    setForm({ name: "", phone: "", contact: "", notes: "" });
    setSubmitting(false);
    close();
  }

  return (
    <>
      {/* Scrim */}
      <div
        onClick={close}
        aria-hidden
        className={cn(
          "fixed inset-0 z-60 bg-ink-950/70 backdrop-blur-sm transition-opacity duration-400",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="سلة الطلبات"
        className={cn(
          "fixed inset-y-0 start-0 z-70 flex w-full max-w-md flex-col border-e border-mint/10 bg-ink-900 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isOpen ? "translate-x-0" : "-translate-x-full rtl:translate-x-full",
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-mint/10 px-5 py-4">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="size-5 text-neon" strokeWidth={1.8} />
            <h2 className="text-base font-extrabold text-offwhite">
              {step === "cart" ? "سلة الطلبات" : "إتمام الطلب"}
            </h2>
            {count > 0 && (
              <span className="rounded-full bg-neon/15 px-2 py-0.5 text-xs font-bold text-neon">
                {count}
              </span>
            )}
          </div>
          <button
            onClick={close}
            aria-label="إغلاق"
            className="grid size-9 place-items-center rounded-full text-fg-muted transition-colors hover:bg-white/5 hover:text-offwhite"
          >
            <X className="size-5" strokeWidth={1.8} />
          </button>
        </div>

        {/* Body */}
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
            <div className="grid size-20 place-items-center rounded-full border border-mint/10 bg-white/[0.03]">
              <ShoppingBag className="size-8 text-fg-subtle" strokeWidth={1.4} />
            </div>
            <p className="font-bold text-offwhite">سلتك فاضية</p>
            <p className="text-sm text-fg-muted">
              تصفّح خدماتنا وأضف اللي بناسبك، وبنكمّل الطلب على الواتساب بثواني.
            </p>
            <ButtonLink href="/services" onClick={close} className="mt-2">
              تصفّح الخدمات
            </ButtonLink>
          </div>
        ) : step === "cart" ? (
          <>
            <ul className="flex-1 space-y-3 overflow-y-auto px-5 py-5">
              {items.map((item) => (
                <li
                  key={item.service_slug}
                  className="glass rounded-2xl p-4 transition-colors hover:border-neon/25"
                >
                  <div className="flex items-start justify-between gap-3">
                    <Link
                      href={`/services/${item.service_slug}`}
                      onClick={close}
                      className="text-sm font-bold text-offwhite transition-colors hover:text-neon"
                    >
                      {item.title}
                    </Link>
                    <button
                      onClick={() => remove(item.service_slug)}
                      aria-label={`حذف ${item.title}`}
                      className="shrink-0 text-fg-subtle transition-colors hover:text-red-400"
                    >
                      <Trash2 className="size-4" strokeWidth={1.7} />
                    </button>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-1 rounded-full border border-mint/15 bg-ink-950/60 p-1">
                      <button
                        onClick={() =>
                          setQuantity(item.service_slug, item.quantity - 1)
                        }
                        aria-label="إنقاص"
                        className="grid size-7 place-items-center rounded-full text-fg-muted transition-colors hover:bg-white/10 hover:text-offwhite"
                      >
                        <Minus className="size-3.5" strokeWidth={2.2} />
                      </button>
                      <span className="min-w-7 text-center font-display text-sm font-bold text-offwhite">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          setQuantity(item.service_slug, item.quantity + 1)
                        }
                        aria-label="زيادة"
                        className="grid size-7 place-items-center rounded-full text-fg-muted transition-colors hover:bg-white/10 hover:text-offwhite"
                      >
                        <Plus className="size-3.5" strokeWidth={2.2} />
                      </button>
                    </div>

                    <span className="font-display text-sm font-extrabold text-neon">
                      {formatPrice(item.price * item.quantity, item.currency)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-mint/10 bg-ink-950/50 px-5 py-5">
              <div className="mb-4 flex items-baseline justify-between">
                <span className="text-sm text-fg-muted">الإجمالي</span>
                <span className="font-display text-2xl font-extrabold text-neon">
                  {formatPrice(total, currency)}
                </span>
              </div>
              <Button onClick={() => setStep("checkout")} className="w-full" size="lg">
                إتمام الطلب
              </Button>
              <button
                onClick={clear}
                className="mt-3 w-full text-xs font-semibold text-fg-subtle transition-colors hover:text-red-400"
              >
                تفريغ السلة
              </button>
            </div>
          </>
        ) : (
          <form onSubmit={submitOrder} className="flex flex-1 flex-col">
            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
              <p className="rounded-2xl border border-neon/20 bg-neon/[0.06] px-4 py-3 text-xs leading-relaxed text-mint">
                عبّي بياناتك وبنحوّلك مباشرة على الواتساب مع تفاصيل طلبك جاهزة —
                ما بتحتاج تكتب إشي.
              </p>

              <Field
                label="الاسم"
                required
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                placeholder="اسمك الكامل"
              />
              <Field
                label="رقم الجوال"
                required
                type="tel"
                dir="ltr"
                value={form.phone}
                onChange={(v) => setForm({ ...form, phone: v })}
                placeholder="+970 5X XXX XXXX"
              />
              <Field
                label="اليوزر أو رابط الحساب"
                value={form.contact}
                onChange={(v) => setForm({ ...form, contact: v })}
                placeholder="@username أو رابط الحساب / الـ ID"
                hint="مطلوب لخدمات المتابعين والشحن — اتركه فارغاً لو مش لازم."
              />

              <label className="block">
                <span className="mb-2 block text-xs font-bold text-fg-muted">
                  ملاحظات إضافية
                </span>
                <textarea
                  rows={3}
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder="أي تفاصيل حابب نعرفها…"
                  className="w-full resize-none rounded-2xl border border-mint/15 bg-ink-950/60 px-4 py-3 text-sm text-offwhite placeholder:text-fg-subtle focus:border-neon/60 focus:outline-none"
                />
              </label>
            </div>

            <div className="border-t border-mint/10 bg-ink-950/50 px-5 py-5">
              <div className="mb-4 flex items-baseline justify-between">
                <span className="text-sm text-fg-muted">الإجمالي</span>
                <span className="font-display text-2xl font-extrabold text-neon">
                  {formatPrice(total, currency)}
                </span>
              </div>
              <Button
                type="submit"
                variant="whatsapp"
                size="lg"
                className="w-full"
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    جاري التأكيد…
                  </>
                ) : (
                  "تأكيد وإرسال عبر واتساب"
                )}
              </Button>
              <button
                type="button"
                onClick={() => setStep("cart")}
                className="mt-3 w-full text-xs font-semibold text-fg-subtle transition-colors hover:text-offwhite"
              >
                رجوع للسلة
              </button>
            </div>
          </form>
        )}
      </aside>
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  hint,
  required,
  type = "text",
  dir,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  hint?: string;
  required?: boolean;
  type?: string;
  dir?: "ltr" | "rtl";
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold text-fg-muted">
        {label}
        {required && <span className="text-neon"> *</span>}
      </span>
      <input
        type={type}
        dir={dir}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-mint/15 bg-ink-950/60 px-4 py-3 text-sm text-offwhite placeholder:text-fg-subtle focus:border-neon/60 focus:outline-none"
      />
      {hint && <span className="mt-1.5 block text-[0.7rem] text-fg-subtle">{hint}</span>}
    </label>
  );
}
