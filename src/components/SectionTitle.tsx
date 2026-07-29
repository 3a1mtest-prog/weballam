/**
 * The full-bleed lit plate that announces each major section — a huge
 * chrome word on a violet wash, exactly like the SOCIAL MEDIA / LOGOFOLIO /
 * BRANDING breaks in the source deck.
 */
export function SectionTitle({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section
      id={id}
      className="panel-violet relative flex min-h-[42vh] items-center justify-center overflow-hidden px-6 py-24 sm:min-h-[55vh]"
    >
      <h2 className="chrome-on-violet text-center font-display text-[clamp(2.75rem,11vw,8rem)] font-black leading-[0.85] tracking-tight">
        {children}
      </h2>
    </section>
  );
}
