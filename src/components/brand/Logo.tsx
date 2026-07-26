"use client";

import { useState } from "react";

import { brandMark } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * The AG monogram.
 *
 * Renders the real artwork when `brandMark.src` points at a file in `public/`,
 * and otherwise falls back to the vector approximation below — which is also
 * what the monochrome variants always use, since a raster cannot be recoloured.
 */

/* Geometry, traced from the supplied artwork in a 1024-unit square.
 *
 * The A is not a conventional letter: it is two interlocking chevrons. The
 * large one carries the apex, a long left arm and a short right shoulder; the
 * small one nests inside and throws a long arm down over the G. The gap left
 * between the big chevron's shoulder and the small one's arm is where the G's
 * ring weaves through — that break is what makes the two letters interlock.
 *
 * The left arm stops short inside the foot so its angled cap stays hidden and
 * the foot supplies a clean horizontal base; the foot's left edge sits exactly
 * on the arm's outer diagonal, so the silhouette reads as one continuous edge.
 */
const CHEVRON_OUTER = "M 196 736 L 497 127 L 645 392";
const CHEVRON_INNER = "M 300 730 L 452 470 L 640 812";
const FOOT = "M 130 772 L 384 772 L 384 700 L 166 700 Z";
const STROKE = 86;

/* G — centre (598,612), ring R 207 / 129, opening on the right closed by the
 * bar. Drawn as an explicit filled ring: arc flags alone pick the wrong centre
 * for a sweep this large. */
const G_PATH =
  "M 801.9 647.9 A 207 207 0 1 1 751.8 473.5 L 693.9 525.7 " +
  "A 129 129 0 1 0 725.0 634.4 Z M 640 573 H 801.9 V 651 H 640 Z";

type Variant = "full" | "white" | "green";

export function LogoMark({
  className,
  variant = "full",
}: {
  className?: string;
  variant?: Variant;
}) {
  // Falls back to the vector if the file 404s, so a missing drop-in never
  // leaves a broken image in the header.
  const [artworkFailed, setArtworkFailed] = useState(false);

  if (variant === "full" && brandMark.src && !artworkFailed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- fixed-size brand
      // asset sized purely by CSS; next/image adds no value here.
      <img
        src={brandMark.src}
        alt="AL-GHAZAWE STORE"
        onError={() => setArtworkFailed(true)}
        className={cn("h-10 w-auto object-contain", className)}
      />
    );
  }

  // Gradient ids are stable per variant — identical variants render identically,
  // so sharing the definition across instances is safe.
  const silverId = `ag-silver-${variant}`;
  const greenId = `ag-green-${variant}`;

  const aFill =
    variant === "white"
      ? "#F5F7F6"
      : variant === "green"
        ? "#22FF88"
        : `url(#${silverId})`;

  const gFill =
    variant === "white"
      ? "#F5F7F6"
      : variant === "green"
        ? "#0F7A4D"
        : `url(#${greenId})`;

  return (
    <svg
      viewBox="110 20 715 835"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-10 w-auto", className)}
      role="img"
      aria-label="AL-GHAZAWE STORE"
    >
      {variant === "full" && (
        <defs>
          <linearGradient id={silverId} x1="0.15" y1="0" x2="0.85" y2="0.9">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#EFF3F1" />
            <stop offset="70%" stopColor="#C4CFCB" />
            <stop offset="100%" stopColor="#A3B1AC" />
          </linearGradient>
          <linearGradient id={greenId} x1="0.1" y1="0" x2="0.85" y2="1">
            <stop offset="0%" stopColor="#5FD46E" />
            <stop offset="45%" stopColor="#35B24C" />
            <stop offset="100%" stopColor="#1B7A33" />
          </linearGradient>
        </defs>
      )}

      {/* G sits behind, so the A reads on top where they cross */}
      <path d={G_PATH} fill={gFill} />

      <g
        fill="none"
        stroke={aFill}
        strokeWidth={STROKE}
        strokeLinejoin="miter"
        strokeMiterlimit={14}
      >
        <path d={CHEVRON_OUTER} />
        <path d={CHEVRON_INNER} />
      </g>
      <path d={FOOT} fill={aFill} />
    </svg>
  );
}

/**
 * Wordmark: AL-GHAZAWE over a rule-flanked STORE, matching the brand sheet.
 * Kept LTR so the Latin lockup keeps its designed order inside the RTL page.
 */
export function Wordmark({
  className,
  size = "sm",
}: {
  className?: string;
  size?: "sm" | "lg";
}) {
  return (
    <div dir="ltr" className={cn("flex flex-col leading-none", className)}>
      <span
        className={cn(
          "brand-lockup text-offwhite",
          size === "lg" ? "text-xl sm:text-2xl" : "text-[0.95rem] sm:text-base",
        )}
      >
        AL-GHAZAWE
      </span>
      <span className="mt-1.5 flex items-center gap-1.5">
        <span className="h-px w-3 bg-neon/60" />
        <span
          className={cn(
            "brand-lockup text-neon",
            size === "lg" ? "text-[0.7rem]" : "text-[0.55rem] sm:text-[0.6rem]",
          )}
        >
          Store
        </span>
        <span className="h-px flex-1 bg-neon/60" />
      </span>
    </div>
  );
}

/** Horizontal lockup: mark on the left, wordmark on the right. */
export function Logo({
  className,
  showTagline = false,
}: {
  className?: string;
  showTagline?: boolean;
}) {
  return (
    <div dir="ltr" className={cn("flex items-center gap-3", className)}>
      <LogoMark className="h-9 w-auto shrink-0 sm:h-10" />
      <div className="flex flex-col">
        <Wordmark />
        {showTagline && (
          <span dir="rtl" className="mt-1.5 text-[0.7rem] text-fg-muted">
            نصنع حضورك الرقمي
          </span>
        )}
      </div>
    </div>
  );
}

/** Stacked lockup: mark above a centred wordmark. */
export function LogoStacked({
  className,
  markClassName,
}: {
  className?: string;
  markClassName?: string;
}) {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <LogoMark className={cn("h-auto w-32", markClassName)} />
      <Wordmark size="lg" className="mt-5 items-center text-center" />
    </div>
  );
}
