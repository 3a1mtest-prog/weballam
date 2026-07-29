import { stack } from "@/config/portfolio";

/**
 * The stack wall — the deck's logofolio, set as monochrome wordmarks so it
 * reads as one plate rather than a pile of mismatched vendor logos.
 */
export function TechStack() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-20 sm:py-24">
      <div className="glow-violet pointer-events-none absolute inset-0" />

      <h2 className="sr-only">Tools I build with</h2>

      <ul className="relative mx-auto grid w-full max-w-6xl grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 sm:gap-y-14">
        {stack.map((tool) => (
          <li
            key={tool}
            className="text-center font-display text-lg font-black tracking-tight text-silver/85 transition hover:text-white sm:text-2xl"
          >
            {tool}
          </li>
        ))}
      </ul>
    </section>
  );
}
