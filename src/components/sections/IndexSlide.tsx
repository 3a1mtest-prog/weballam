import { index } from "@/config/portfolio";

/**
 * The contents slide — INDEX set huge in chrome on the left, and the four
 * numbered destinations stacked on the right as violet pills.
 */
export function IndexSlide() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-20 sm:py-28">
      <div className="glow-violet pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="chrome font-display text-[clamp(3.5rem,13vw,9rem)] font-black leading-none tracking-tight">
            INDEX
          </h2>
          <span
            aria-hidden
            className="mt-4 block h-2 w-full max-w-xs rounded-full bg-gradient-to-r from-violet-mid to-violet-bright"
          />
        </div>

        <ol className="space-y-4 sm:space-y-5">
          {index.map((entry) => (
            <li key={entry.no} className="flex items-center gap-4 sm:gap-6">
              <span
                aria-hidden
                className="chrome shrink-0 font-display text-3xl font-black leading-none sm:text-5xl"
              >
                {entry.no}
              </span>
              <a
                href={entry.href}
                className="pill-violet group flex-1 rounded-md px-5 py-3 text-center font-display text-lg font-bold tracking-wide text-white transition hover:brightness-115 sm:py-4 sm:text-2xl"
              >
                <span className="sr-only">{entry.no}. </span>
                {entry.label}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
