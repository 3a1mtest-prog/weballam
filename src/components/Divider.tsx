import { Wordmark } from "./Wordmark";

/**
 * The rule that separates every slide in the deck: the word PORTFOLIO on the
 * left, a double hairline running the full width, and the signature on the
 * right.
 */
export function Divider() {
  return (
    <div className="mx-auto flex w-full max-w-7xl items-center gap-5 px-6 py-8 sm:gap-8">
      <span className="shrink-0 text-[0.65rem] font-semibold tracking-[0.3em] text-silver sm:text-xs">
        PORTFOLIO
      </span>
      <span
        aria-hidden
        className="h-[3px] flex-1 border-y border-silver/60"
      />
      <Wordmark className="shrink-0" />
    </div>
  );
}
