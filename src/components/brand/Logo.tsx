import { cn } from "@/lib/utils";

/**
 * The AG monogram: an angular silver "A" interlocked with a curved neon "G",
 * redrawn as vector so it stays razor-sharp at every size.
 */
export function LogoMark({
  className,
  variant = "full",
}: {
  className?: string;
  variant?: "full" | "white" | "green";
}) {
  const uid = variant; // gradient ids scoped per variant

  return (
    <svg
      viewBox="0 0 110 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-10 w-auto", className)}
      role="img"
      aria-label="AL-GHAZAWE STORE"
    >
      <defs>
        <linearGradient id={`ag-silver-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="42%" stopColor="#E3E9E7" />
          <stop offset="62%" stopColor="#A9B6B2" />
          <stop offset="100%" stopColor="#F5F7F6" />
        </linearGradient>
        <linearGradient id={`ag-green-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5BFFA9" />
          <stop offset="45%" stopColor="#22FF88" />
          <stop offset="100%" stopColor="#0F7A4D" />
        </linearGradient>
      </defs>

      {/* G — curved arc + centre bar, sits behind the A */}
      <g
        stroke={
          variant === "white"
            ? "#F5F7F6"
            : variant === "green"
              ? "#22FF88"
              : `url(#ag-green-${uid})`
        }
        strokeWidth="13"
        strokeLinecap="butt"
        fill="none"
      >
        {/* arc open toward the lower-right, mirroring the identity mark */}
        <path d="M92 68 A28 28 0 1 0 78 82" />
        <path d="M92 54 L92 69" />
        <path d="M74 54 L92 54" />
      </g>

      {/* A — angular chevron with crossbar, drawn on top */}
      <g
        stroke={
          variant === "green"
            ? "#22FF88"
            : variant === "white"
              ? "#F5F7F6"
              : `url(#ag-silver-${uid})`
        }
        strokeWidth="13"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        fill="none"
      >
        <path d="M8 92 L40 10 L72 92" />
        <path d="M25 62 L55 62" />
      </g>
    </svg>
  );
}

/** Horizontal lockup: mark + wordmark, matching the brand guide. */
export function Logo({
  className,
  showTagline = false,
}: {
  className?: string;
  showTagline?: boolean;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <LogoMark className="h-9 w-auto shrink-0 sm:h-10" />
      <div className="flex flex-col leading-none">
        <span className="brand-lockup text-[0.95rem] text-offwhite sm:text-base">
          AL-GHAZAWE
        </span>
        <span className="mt-1 flex items-center gap-1.5">
          <span className="h-px w-3 bg-neon/60" />
          <span className="brand-lockup text-[0.55rem] text-neon sm:text-[0.6rem]">
            Store
          </span>
          <span className="h-px flex-1 bg-neon/60" />
        </span>
        {showTagline && (
          <span className="mt-1.5 text-[0.7rem] text-fg-muted">
            نصنع حضورك الرقمي
          </span>
        )}
      </div>
    </div>
  );
}
