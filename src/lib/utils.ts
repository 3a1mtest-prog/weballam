import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Formats a price the way the storefront shows it everywhere. */
export function formatPrice(value: number, currency = "₪") {
  const n = Number.isInteger(value) ? value : value.toFixed(2);
  return `${n} ${currency}`;
}

/** Short, human order reference: AG-8F3K2Q */
export function makeOrderNumber() {
  const rand = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `AG-${rand}`;
}
