import { cn } from "@/lib/utils";

/**
 * The AG monogram from the brand identity sheet: an angular silver "A" with a
 * sharp apex and flat-cut feet, interlocked with a curved neon "G" whose ring
 * passes behind the A's right leg.
 *
 * Drawn as filled vector paths (no strokes) so the apex miter and the foot cuts
 * stay exact, and the mark stays razor-sharp at any size.
 */

/* Geometry, in the 160 × 118 viewBox:
 *   A — apex (50,6); outer feet x=6 / x=94 at y=112; counter apex (50,54.2);
 *       crossbar spans y 82→99. Outer and inner edges are parallel, so the
 *       stem weight stays even from apex to foot.
 *   G — centre (108,62); ring R=50 / r=31; opening at the upper right, closed
 *       by a bar sitting just below the centre line.
 */
const A_PATH =
  "M 50 6 L 94 112 L 74 112 L 68.60 99 L 31.40 99 L 26 112 L 6 112 Z " +
  "M 50 54.2 L 61.55 82 L 38.45 82 Z";

const G_PATH =
  "M 154.99 79.10 A 50 50 0 1 1 141.46 24.84 L 128.74 38.96 " +
  "A 31 31 0 1 0 137.13 72.60 Z M 104 53.60 H 154.99 V 72.60 H 104 Z";

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
      viewBox="0 0 160 118"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-10 w-auto", className)}
      role="img"
      aria-label="AL-GHAZAWE STORE"
    >
      {variant === "full" && (
        <defs>
          {/* soft crease down the axis: lit face left, shaded face right */}
          <linearGradient id={silverId} x1="0" y1="0" x2="1" y2="0.38">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="26%" stopColor="#F8FBFA" />
            <stop offset="43%" stopColor="#E6EDEA" />
            <stop offset="53%" stopColor="#BCC8C3" />
            <stop offset="66%" stopColor="#9DACA7" />
            <stop offset="84%" stopColor="#C6D1CD" />
            <stop offset="100%" stopColor="#EFF4F2" />
          </linearGradient>
          <linearGradient id={greenId} x1="0.12" y1="0" x2="0.92" y2="1">
            <stop offset="0%" stopColor="#7DFFC0" />
            <stop offset="28%" stopColor="#22FF88" />
            <stop offset="66%" stopColor="#15A667" />
            <stop offset="100%" stopColor="#0C6B43" />
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
