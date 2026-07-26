import { NextResponse } from "next/server";

import { createAdminClient } from "@/lib/supabase/server";
import type { OrderPayload } from "@/lib/types";

export const runtime = "nodejs";

/**
 * Records a checkout in Supabase.
 *
 * The WhatsApp hand-off is what actually closes the sale, so this endpoint
 * never fails the customer: if Supabase is unconfigured or errors, it still
 * responds 200 with `stored: false` and the client carries on.
 */
export async function POST(request: Request) {
  let payload: OrderPayload;

  try {
    payload = (await request.json()) as OrderPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid_json" },
      { status: 400 },
    );
  }

  if (
    !payload?.order_number ||
    !payload.customer_name?.trim() ||
    !payload.customer_phone?.trim() ||
    !Array.isArray(payload.items) ||
    payload.items.length === 0
  ) {
    return NextResponse.json(
      { ok: false, error: "missing_fields" },
      { status: 400 },
    );
  }

  const supabase = createAdminClient();
  if (!supabase) {
    console.info(`[order:${payload.order_number}] Supabase not configured`);
    return NextResponse.json({ ok: true, stored: false });
  }

  const { error } = await supabase.from("orders").insert({
    order_number: payload.order_number,
    customer_name: payload.customer_name.trim().slice(0, 120),
    customer_phone: payload.customer_phone.trim().slice(0, 40),
    customer_contact: payload.customer_contact?.trim().slice(0, 200) ?? null,
    items: payload.items,
    total: payload.total,
    currency: payload.currency,
    notes: payload.notes?.trim().slice(0, 1000) ?? null,
    status: "new",
  });

  if (error) {
    console.error(`[order:${payload.order_number}] insert failed`, error.message);
    return NextResponse.json({ ok: true, stored: false });
  }

  return NextResponse.json({ ok: true, stored: true });
}
