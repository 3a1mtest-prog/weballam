import { useEffect, useRef } from "react";

/**
 * Client-only site effects: Lenis smooth scroll bridged to GSAP ScrollTrigger,
 * plus the custom spotlight cursor. Renders the cursor DOM; all browser APIs
 * live inside useEffect (SSR-safe).
 */
export function SiteEffects() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    void (async () => {
      const [{ default: Lenis }, gsapModule, stModule] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;
      const gsap = gsapModule.gsap;
      const ScrollTrigger = stModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis({ autoRaf: false, lerp: 0.1 });
      lenis.on("scroll", ScrollTrigger.update);
      const tick = (time: number) => {
        lenis.raf(time * 1000);
      };
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);

      // Parallax rig: hero layers travel at different rates on scroll.
      const parallax = gsap.utils.toArray<HTMLElement>("[data-parallax]");
      for (const el of parallax) {
        const speed = Number(el.dataset.parallax ?? "0.2");
        gsap.to(el, {
          yPercent: speed * 100,
          ease: "none",
          scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      }

      // Cursor-follow tilt on the hero layers (springy quickTo).
      const followers = gsap.utils.toArray<HTMLElement>("[data-follow]").map((el) => ({
        el,
        depth: Number(el.dataset.follow ?? "10"),
        x: gsap.quickTo(el, "x", { duration: 0.8, ease: "power3" }),
        y: gsap.quickTo(el, "y", { duration: 0.8, ease: "power3" }),
      }));
      const onMove = (e: MouseEvent) => {
        const nx = e.clientX / window.innerWidth - 0.5;
        const ny = e.clientY / window.innerHeight - 0.5;
        for (const f of followers) {
          f.x(nx * f.depth);
          f.y(ny * f.depth * 0.6);
        }
      };
      window.addEventListener("mousemove", onMove, { passive: true });

      // Custom cursor.
      const cursor = cursorRef.current;
      let onCursorMove: ((e: MouseEvent) => void) | undefined;
      let onOver: ((e: MouseEvent) => void) | undefined;
      if (cursor) {
        const cx = gsap.quickTo(cursor, "x", { duration: 0.35, ease: "power3" });
        const cy = gsap.quickTo(cursor, "y", { duration: 0.35, ease: "power3" });
        onCursorMove = (e: MouseEvent) => {
          cx(e.clientX);
          cy(e.clientY);
        };
        onOver = (e: MouseEvent) => {
          const t = e.target as HTMLElement | null;
          cursor.dataset.hover = t?.closest("a, button, [data-cursor]") ? "true" : "false";
        };
        window.addEventListener("mousemove", onCursorMove, { passive: true });
        window.addEventListener("mouseover", onOver, { passive: true });
      }

      cleanup = () => {
        window.removeEventListener("mousemove", onMove);
        if (onCursorMove) window.removeEventListener("mousemove", onCursorMove);
        if (onOver) window.removeEventListener("mouseover", onOver);
        gsap.ticker.remove(tick);
        ScrollTrigger.getAll().forEach((t) => t.kill());
        lenis.destroy();
      };
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return (
    <div ref={cursorRef} className="site-cursor hidden md:block" aria-hidden="true">
      <div className="ring" />
      <div className="dot" />
    </div>
  );
}
