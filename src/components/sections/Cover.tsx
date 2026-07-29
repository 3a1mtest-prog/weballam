import Image from "next/image";
import { identity } from "@/config/portfolio";

/**
 * The cover slide: PORTFOLIO set as wide as the viewport allows, the year
 * spread beneath it, and the portrait standing through the middle of the
 * word. Without a portrait the column stays as a lit violet shaft, which is
 * what the type is composed around anyway.
 */
export function Cover() {
  const [y1, y2, y3, y4] = identity.year.split("");

  return (
    <header className="panel-violet relative flex min-h-[92vh] flex-col justify-center overflow-hidden px-6 pb-14 pt-24">
      {/* The figure, standing on the baseline through the middle of the word.
          Sized off the section's height rather than its width, so on a narrow
          viewport it still rises into the wordmark instead of stranding
          itself below the type. */}
      <div
        aria-hidden={!identity.portrait.src}
        className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-[68%] w-full max-w-[22rem] -translate-x-1/2 sm:h-[82%] sm:max-w-[30rem]"
      >
        {identity.portrait.src ? (
          <Image
            src={identity.portrait.src}
            alt={`${identity.name}, ${identity.role.toLowerCase()}`}
            fill
            priority
            sizes="(min-width: 640px) 30rem, 22rem"
            className="object-contain object-bottom"
            style={
              identity.portrait.filter
                ? { filter: identity.portrait.filter }
                : undefined
            }
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-b from-violet-bright/70 via-violet-core/60 to-transparent [mask-image:radial-gradient(60%_70%_at_50%_45%,#000_35%,transparent_75%)]" />
        )}
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        <h1 className="sr-only">
          {identity.name} — {identity.role}, portfolio {identity.year}
        </h1>

        <p
          aria-hidden
          className="chrome-on-violet text-center font-display text-[clamp(2.5rem,14.2vw,13rem)] font-black leading-[0.8] tracking-[-0.045em]"
        >
          PORTFOLIO
        </p>

        {/* The year, split to the four corners of the measure. */}
        <p
          aria-hidden
          className="relative z-20 mt-2 flex justify-between font-display text-[clamp(1.75rem,7vw,5rem)] font-black leading-none text-white/95"
        >
          <span>{y1}</span>
          <span className="opacity-90">{y2}</span>
          <span className="opacity-90">{y3}</span>
          <span>{y4}</span>
        </p>

        <div className="relative z-20 mt-8 flex items-end justify-between gap-4 text-[0.6rem] font-bold tracking-[0.22em] text-white sm:text-sm sm:tracking-[0.3em]">
          <span>{identity.name}</span>
          <span className="text-right">{identity.role}</span>
        </div>
      </div>
    </header>
  );
}
