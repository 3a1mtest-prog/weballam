import { guarantees } from "@/config/portfolio";

/**
 * The promise cards that follow the services grid — one oversized figure per
 * tile, captioned twice: what it measures, and against what.
 */
export function Guarantees() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-16 sm:py-20">
      <div className="glow-violet pointer-events-none absolute inset-0" />

      <h2 className="sr-only">What you get</h2>

      <ul className="relative mx-auto grid w-full max-w-7xl gap-5 sm:grid-cols-3 sm:gap-6">
        {guarantees.map((item) => (
          <li
            key={item.figure}
            className="frame flex aspect-[3/4] flex-col items-center justify-center gap-3 p-6 text-center"
          >
            <span className="rounded-md bg-black/55 px-4 py-1.5 text-xs font-bold tracking-[0.12em] text-white ring-1 ring-silver/30 sm:text-sm">
              {item.kicker}
            </span>
            <span
              aria-hidden
              className="font-display text-6xl font-black leading-none text-white/95 drop-shadow-[0_0_35px_rgba(168,85,247,0.85)] sm:text-8xl"
            >
              {item.figure}
            </span>
            <span className="text-xs text-silver/70 sm:text-sm">{item.line}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
