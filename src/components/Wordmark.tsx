import { identity } from "@/config/portfolio";

/**
 * The script signature that closes every divider bar and signs the cover.
 * Renders the name in the script face with the role set small underneath,
 * mirroring the handwritten logo in the source deck.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex flex-col items-center leading-none ${className}`}>
      <span className="font-script text-xl tracking-tight text-silver sm:text-2xl">
        {identity.shortName}
      </span>
      <span className="mt-0.5 text-[0.5rem] tracking-[0.32em] text-steel">
        {identity.markSub}
      </span>
    </span>
  );
}
