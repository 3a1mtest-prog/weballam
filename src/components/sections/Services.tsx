import { services } from "@/config/portfolio";

/**
 * The three-up services grid — framed tiles with the discipline set in
 * display caps over its one-line explanation.
 */
export function Services() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-16 sm:py-20">
      <div className="glow-violet pointer-events-none absolute inset-0" />

      <h2 className="sr-only">What I do</h2>

      <ul className="relative mx-auto grid w-full max-w-7xl gap-5 sm:grid-cols-3 sm:gap-6">
        {services.map((service) => (
          <li
            key={service.title}
            className="frame flex aspect-[3/4] flex-col justify-end p-6"
          >
            <h3 className="whitespace-pre-line font-display text-xl font-black leading-tight tracking-tight text-white sm:text-2xl">
              {service.title}
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-silver/70 sm:text-sm">
              {service.blurb}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
