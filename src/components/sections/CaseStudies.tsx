import { caseStudies } from "@/config/portfolio";
import { Divider } from "@/components/Divider";

/**
 * The deep-dive slides. Each study opens with a full-width plate carrying the
 * project name in its own accent, then sets the write-up against a row of
 * supporting shots — with CASE / STUDY running down the left edge, the way
 * BRAN / DING does in the source deck.
 */
export function CaseStudies() {
  return (
    <div className="relative overflow-hidden bg-ink">
      <div className="glow-violet pointer-events-none absolute inset-0" />

      <div className="relative">
        {caseStudies.map((study) => (
          <section key={study.name} className="pt-14 sm:pt-16">
            <div className="mx-auto grid w-full max-w-7xl gap-6 px-6 md:grid-cols-[auto_minmax(0,1fr)] md:gap-8">
              <p
                aria-hidden
                className="chrome font-display text-3xl font-black leading-[0.85] tracking-tight sm:text-5xl"
              >
                CASE
                <br />
                STUDY
              </p>

              <div>
                <h3
                  className="flex h-32 items-center justify-center rounded-lg font-display text-4xl font-black tracking-tight text-black/85 sm:h-44 sm:text-6xl"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${study.accent} 0%, ${study.accent}bb 55%, #0b0118 100%)`,
                  }}
                >
                  {study.name}
                </h3>

                <div className="mt-6 grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:items-start">
                  <p className="text-xs leading-relaxed text-silver/80 sm:text-sm sm:leading-loose">
                    {study.body}
                  </p>

                  <ul className="grid grid-cols-2 gap-3 sm:gap-4">
                    {study.tiles.map((tile) => (
                      <li
                        key={tile}
                        className="frame flex aspect-[4/3] items-center justify-center p-3 text-center text-[0.7rem] font-semibold tracking-[0.16em] text-silver/75 sm:text-xs"
                      >
                        {tile}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <Divider />
          </section>
        ))}
      </div>
    </div>
  );
}
