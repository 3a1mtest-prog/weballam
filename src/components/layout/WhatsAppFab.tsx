"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { site, waLink } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * Floating WhatsApp button — the store's main conversion path.
 * Appears after a short scroll and expands into a labelled pill on hover.
 */
export function WhatsAppFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={waLink(`مرحباً ${site.name} 👋 حابب أستفسر عن خدماتكم`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل معنا على واتساب"
      className={cn(
        "group fixed bottom-5 left-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] py-3 ps-4 pe-4 text-[#03110A] shadow-[0_16px_44px_-12px_rgba(37,211,102,0.85)] transition-all duration-500 hover:bg-[#3ce97c] sm:bottom-7 sm:left-7",
        visible
          ? "translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-6 scale-90 opacity-0",
      )}
    >
      {/* pulse halo */}
      <span className="absolute inset-0 -z-10 animate-pulse-glow rounded-full bg-[#25D366]/60 blur-lg" />

      <WhatsAppIcon className="size-6 shrink-0" />

      <span className="max-w-0 overflow-hidden text-sm font-extrabold whitespace-nowrap opacity-0 transition-all duration-400 group-hover:max-w-[12rem] group-hover:opacity-100">
        تواصل معنا الآن
      </span>
    </a>
  );
}
