"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { CartItem, Service } from "@/lib/types";

const STORAGE_KEY = "alghazawe-cart-v1";

type CartContext = {
  items: CartItem[];
  count: number;
  total: number;
  currency: string;
  isOpen: boolean;
  /** Set for ~2s after an add, so the trigger can flash. */
  lastAdded: string | null;
  add: (service: Service, quantity?: number, note?: string) => void;
  setQuantity: (slug: string, quantity: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
  open: () => void;
  close: () => void;
};

const Ctx = createContext<CartContext | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [lastAdded, setLastAdded] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);

  // Restore on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw) as CartItem[]);
    } catch {
      /* corrupt payload — start with an empty cart */
    }
    setHydrated(true);
  }, []);

  // Persist after hydration so we never overwrite storage with the empty
  // initial state on first render.
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* storage full or blocked — cart stays in memory only */
    }
  }, [items, hydrated]);

  // Lock body scroll while the drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const add = useCallback((service: Service, quantity = 1, note?: string) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.service_slug === service.slug);
      if (existing) {
        return prev.map((i) =>
          i.service_slug === service.slug
            ? { ...i, quantity: i.quantity + quantity, note: note ?? i.note }
            : i,
        );
      }
      return [
        ...prev,
        {
          service_slug: service.slug,
          title: service.title,
          price: service.price,
          currency: service.currency,
          quantity,
          note,
        },
      ];
    });
    setLastAdded(service.slug);
    setTimeout(() => setLastAdded(null), 2000);
  }, []);

  const setQuantity = useCallback((slug: string, quantity: number) => {
    setItems((prev) =>
      quantity <= 0
        ? prev.filter((i) => i.service_slug !== slug)
        : prev.map((i) =>
            i.service_slug === slug ? { ...i, quantity } : i,
          ),
    );
  }, []);

  const remove = useCallback((slug: string) => {
    setItems((prev) => prev.filter((i) => i.service_slug !== slug));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const value = useMemo<CartContext>(() => {
    const count = items.reduce((sum, i) => sum + i.quantity, 0);
    const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    return {
      items,
      count,
      total,
      currency: items[0]?.currency ?? "₪",
      isOpen,
      lastAdded,
      add,
      setQuantity,
      remove,
      clear,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    };
  }, [items, isOpen, lastAdded, add, setQuantity, remove, clear]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
