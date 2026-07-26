import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-neon/25 bg-neon/[0.07] px-4 py-1.5 text-[0.7rem] font-bold tracking-[0.14em] text-neon",
        className,
      )}
    >
      <span className="size-1.5 animate-pulse rounded-full bg-neon" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  /** Substring of `title` rendered in the neon gradient. */
  highlight?: string;
  description?: string;
  align?: "center" | "start";
  className?: string;
}) {
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <Reveal
      className={cn(
        "flex max-w-2xl flex-col gap-4",
        align === "center" ? "mx-auto items-center text-center" : "items-start text-start",
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}

      <h2 className="text-3xl leading-[1.25] font-extrabold text-balance text-offwhite sm:text-4xl md:text-[2.75rem]">
        {parts[0]}
        {highlight && <span className="text-gradient-neon">{highlight}</span>}
        {parts[1]}
      </h2>

      {description && (
        <p className="text-[0.95rem] leading-relaxed text-pretty text-fg-muted sm:text-base">
          {description}
        </p>
      )}
    </Reveal>
  );
}
