import { cn } from "@/lib/utils";

/**
 * The AG monogram from the brand identity sheet: an angular silver "A" with a
 * sharp apex and flat-cut feet, interlocked with a curved neon "G" whose ring
 * passes behind the A's right leg.
 *
 * Drawn as filled vector paths (no strokes) so the apex miter and the foot cuts
 * stay exact, and the mark stays razor-sharp at any size.
 */

/* Geometry, in the 150 × 112 viewBox:
 *   A — apex (50,6); outer feet x=2 / x=98 at y=106; counter apex (50,49.75);
 *       crossbar spans y 74→89.
 *   G — centre (104,58); ring R=44 / r=25; opening at the upper right,
 *       closed by a bar sitting just below the centre line.
 */
const A_PATH =
  "M 50 6 L 98 106 L 77 106 L 68.84 89 L 31.16 89 L 23 106 L 2 106 Z " +
  "M 50 49.75 L 61.64 74 L 38.36 74 Z";

const G_PATH =
  "M 144.80 74.48 A 44 44 0 1 1 131.09 23.33 L 119.39 38.30 " +
  "A 25 25 0 1 0 127.18 67.37 Z M 100 48.37 H 144.80 V 67.37 H 100 Z";

type Variant = "full" | "white" | "green";

export function LogoMark({
  className,
  variant = "full",
}: {
  className?: string;
  variant?: Variant;
}) {
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
      viewBox="0 0 150 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-10 w-auto", className)}
      role="img"
      aria-label="AL-GHAZAWE STORE"
    >
      {variant === "full" && (
        <defs>
          <linearGradient id={silverId} x1="0.12" y1="0" x2="0.82" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="26%" stopColor="#F3F7F5" />
            <stop offset="48%" stopColor="#D2DCD8" />
            <stop offset="68%" stopColor="#AEBCB7" />
            <stop offset="88%" stopColor="#E4EAE8" />
            <stop offset="100%" stopColor="#FBFDFC" />
          </linearGradient>
          <linearGradient id={greenId} x1="0.15" y1="0" x2="0.9" y2="1">
            <stop offset="0%" stopColor="#6BFFB4" />
            <stop offset="32%" stopColor="#22FF88" />
            <stop offset="72%" stopColor="#17AE6C" />
            <stop offset="100%" stopColor="#0F7A4D" />
          </linearGradient>
        </defs>
      )}

      {/* G sits behind, so the A's right leg reads on top */}
      <path d={G_PATH} fill={gFill} />
      <path d={A_PATH} fill={aFill} fillRule="evenodd" />
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
