import Image from "next/image";
import { about, identity } from "@/config/portfolio";

/**
 * WHO AM I — portrait on the left, the bio on the right under a highlighted
 * heading. The heading sits on a violet plate rather than being knocked out
 * of one, which is how the source deck marks it.
 */
export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-ink">
      <div className="glow-violet pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:items-center md:gap-14 md:py-28">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-lg md:max-w-none">
          {identity.portrait ? (
            <Image
              src={identity.portrait}
              alt={`${identity.name}, ${identity.role.toLowerCase()}`}
              fill
              sizes="(min-width: 768px) 32vw, 80vw"
              className="object-cover object-top"
              style={
                identity.portraitFilter
                  ? { filter: identity.portraitFilter }
                  : undefined
              }
            />
          ) : (
            <div
              aria-hidden
              className="h-full w-full bg-[radial-gradient(70%_60%_at_50%_25%,#a855f7_0%,#4c1d95_45%,#0b0118_100%)]"
            />
          )}
        </div>

        <div>
          <h2 className="inline-block bg-gradient-to-r from-violet-mid to-violet-bright px-4 py-1.5 font-display text-2xl font-black tracking-[0.08em] text-white sm:text-4xl">
            {about.heading}
          </h2>

          <div className="mt-6 space-y-4 text-sm leading-relaxed text-silver/85 sm:text-base sm:leading-loose">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
