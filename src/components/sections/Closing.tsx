import { closing, identity } from "@/config/portfolio";
import { Wordmark } from "@/components/Wordmark";

/**
 * The closing slide — signature, THANK YOU in chrome, and the ways to reach
 * me, all on the same lit violet plate the deck opens with.
 */
export function Closing() {
  const socials = [
    { label: "GitHub", href: identity.links.github },
    { label: "LinkedIn", href: identity.links.linkedin },
    { label: "X", href: identity.links.x },
  ];

  return (
    <footer
      id="contact"
      className="panel-violet relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center"
    >
      <Wordmark className="mb-8" />

      <h2 className="chrome-on-violet whitespace-pre-line font-display text-[clamp(3rem,15vw,10rem)] font-black leading-[0.82] tracking-tight">
        {closing.heading}
      </h2>

      <p className="mt-8 max-w-md text-sm text-white/85 sm:text-base">
        {closing.line}
      </p>

      <a
        href={`mailto:${identity.email}`}
        className="mt-6 rounded-full bg-black/70 px-8 py-3 text-sm font-bold tracking-[0.16em] text-white ring-1 ring-white/40 transition hover:bg-black"
      >
        {closing.cta}
      </a>

      <address className="mt-10 space-y-1 text-xs not-italic text-white/75 sm:text-sm">
        <p>
          <a className="hover:underline" href={`mailto:${identity.email}`}>
            {identity.email}
          </a>
        </p>
        <p>{identity.phone}</p>
        <p>{identity.location}</p>
      </address>

      <ul className="mt-6 flex gap-6 text-xs font-semibold tracking-[0.2em] text-white/85">
        {socials.map((social) => (
          <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              {social.label.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-12 text-[0.65rem] tracking-[0.2em] text-white/50">
        © {identity.year} {identity.name}
      </p>
    </footer>
  );
}
