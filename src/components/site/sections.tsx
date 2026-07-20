import { useEffect, useRef } from "react";

/* ---------------------------------------------------------------- nav */

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between px-6 md:px-10">
      <a href="#hero" className="flex items-center gap-3" aria-label="Allam Ghaben, top of page">
        <span className="font-arabic text-2xl leading-none text-ink">ع</span>
        <span className="font-mono-site text-xs tracking-[0.22em] text-ink">ALLAM GHABEN</span>
      </a>
      <a
        href="#profile"
        className="font-mono-site border-b border-hairline pb-1 text-xs tracking-[0.22em] text-ink-dim transition-colors hover:border-b-[#f03e22] hover:text-ink"
      >
        PROFILE
      </a>
    </header>
  );
}

/* ---------------------------------------------------------------- hero (approved, unchanged) */

export function Hero() {
  return (
    <section id="hero" className="relative min-h-dvh overflow-hidden">
      {/* L0: stage plate */}
      <div data-parallax="0.12" className="absolute inset-[-8%]">
        <img
          src="/assets/stage-plate.webp"
          alt=""
          className="h-full w-full object-cover"
          draggable={false}
        />
      </div>

      {/* L1: giant name behind the subject */}
      <div
        data-parallax="0.3"
        data-follow="14"
        className="absolute inset-0 flex flex-col items-center justify-center pt-10"
        aria-hidden="true"
      >
        <div className="rise-1 hero-name text-center text-[21vw] md:text-[17.5vw]">Allam</div>
        <div className="rise-2 hero-name text-center text-[21vw] md:text-[17.5vw]">Ghaben</div>
      </div>

      {/* L2: haze, screen-blended */}
      <div data-parallax="0.42" className="absolute inset-[-6%] mix-blend-screen opacity-60">
        <img src="/assets/haze.webp" alt="" className="h-full w-full object-cover" draggable={false} />
      </div>

      {/* L3: the subject cutout */}
      <div data-follow="-22" className="rise-3 absolute inset-x-0 bottom-0 flex justify-center">
        <img
          src="/assets/hero-cutout.webp"
          alt="Allam Ghaben standing in a stage spotlight"
          className="max-h-[110dvh] w-auto select-none drop-shadow-[0_40px_80px_rgba(0,0,0,0.55)]"
          draggable={false}
        />
      </div>

      {/* Seamless blend into the next section */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[15] h-[32dvh]"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,15,51,0) 0%, rgba(10,15,51,0.4) 50%, rgba(10,15,51,0.85) 78%, #0a0f33 100%)",
        }}
      />

      {/* L4: foreground chrome */}
      <div className="absolute inset-x-0 top-20 z-10 flex items-center justify-between px-6 md:px-10">
        <div className="flex items-center gap-4">
          <span className="font-mono-site text-[11px] tracking-[0.3em] text-ink-dim">SOFTWARE ENGINEER</span>
          <span className="hidden h-px w-24 bg-[rgba(239,237,226,0.25)] md:block" />
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- profile */

const FACTS = [
  { k: "NAME", v: "Allam Ghaben · علام غبن" },
  { k: "ROLE", v: "Software Engineer" },
  { k: "FIELD", v: "Intelligent systems, end to end" },
  { k: "REACH", v: "@_3a1m, everywhere" },
];

const EXPERIENCE = [
  {
    n: "01",
    title: "Generative Media",
    body: "Cinematic images, video, and sound. Full visual worlds, consistent characters, film-grade color.",
  },
  {
    n: "02",
    title: "Machine Learning",
    body: "Training and fine-tuning, datasets to deployment. Weights that behave in the real world.",
  },
  {
    n: "03",
    title: "Automation",
    body: "Pipelines and bots that erase manual work while you sleep.",
  },
  {
    n: "04",
    title: "Agent Systems",
    body: "Tools, memory, guardrails. Systems that plan, act, and report back.",
  },
];

export function Profile() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const card = cardRef.current;
    if (reduced || !card) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      const r = card.getBoundingClientRect();
      const inX = e.clientX > r.left - 220 && e.clientX < r.right + 220;
      const inY = e.clientY > r.top - 220 && e.clientY < r.bottom + 220;
      if (!inX || !inY) return;
      const nx = (e.clientX - (r.left + r.width / 2)) / r.width;
      const ny = (e.clientY - (r.top + r.height / 2)) / r.height;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        card.style.transform = `perspective(950px) rotateY(${nx * 7}deg) rotateX(${ny * -7}deg)`;
      });
    };
    const onLeave = () => {
      card.style.transform = "perspective(950px) rotateY(0deg) rotateX(0deg)";
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseout", onLeave, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
    };
  }, []);

  return (
    <section id="profile" className="relative overflow-hidden bg-stage-deep">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 62% 58% at 27% 45%, rgba(38, 68, 255, 0.32), transparent 68%), radial-gradient(ellipse 45% 40% at 75% 80%, rgba(38, 68, 255, 0.1), transparent 70%)",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-28 md:grid-cols-12 md:px-10 md:py-44">
        {/* Living portrait blended into the page */}
        <div className="md:col-span-5">
          <div
            ref={cardRef}
            className="video-blend relative transition-transform duration-200 ease-out will-change-transform"
            data-cursor
          >
            <video
              src="/assets/portrait-loop.mp4"
              poster="/assets/portrait-poster.webp"
              autoPlay
              muted
              loop
              playsInline
              aria-label="Portrait of Allam Ghaben"
            />
          </div>
        </div>

        {/* Identity + experience */}
        <div className="flex flex-col gap-12 md:col-span-7">
          <div>
            <h2 className="font-display text-5xl font-bold leading-[0.9] tracking-tighter md:text-7xl">
              Allam <span className="name-gradient">Ghaben</span>
            </h2>
            <div className="mt-6 flex items-center gap-4">
              <span className="h-px w-16 bg-gold" aria-hidden="true" />
              <span className="font-mono-site text-[11px] tracking-[0.32em] text-ink">
                SOFTWARE ENGINEER
              </span>
            </div>
          </div>

          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {FACTS.map((f) => (
              <div key={f.k} className="glass-tile">
                <dt className="font-mono-site text-[10px] tracking-[0.28em] text-gold">{f.k}</dt>
                <dd className="mt-2 text-[15px] text-ink">{f.v}</dd>
              </div>
            ))}
          </dl>

          <div>
            {EXPERIENCE.map((x) => (
              <div key={x.n} className="xp-row group relative border-t border-hairline py-6 last:border-b">
                <span className="xp-num" aria-hidden="true">
                  {x.n}
                </span>
                <div className="relative flex flex-col gap-2 pl-24 transition-transform duration-300 group-hover:translate-x-2 md:flex-row md:items-baseline md:gap-8 md:pl-32">
                  <h3 className="font-display w-56 shrink-0 text-2xl font-bold tracking-tight">
                    {x.title}
                  </h3>
                  <p className="max-w-[46ch] text-sm leading-relaxed text-ink-dim">{x.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- reels */

const REELS = [
  { src: "/assets/reels/reel-1.mp4", n: "01" },
  { src: "/assets/reels/reel-2.mp4", n: "02" },
  { src: "/assets/reels/reel-3.mp4", n: "03" },
];

export function Reels() {
  return (
    <section id="reels" className="relative overflow-hidden bg-stage-deep">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 50% 45% at 50% 0%, rgba(42,72,255,0.18), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-4">
            <span className="h-px w-16 bg-gold" aria-hidden="true" />
            <span className="font-mono-site text-sm tracking-[0.32em] text-ink">REELS</span>
            <span className="h-px w-16 bg-gold" aria-hidden="true" />
          </div>
          <h2 className="font-display text-5xl font-bold leading-[0.95] tracking-tighter md:text-7xl">
            Built <span className="name-gradient">in motion.</span>
          </h2>
        </div>

        <div className="reels-bento mt-16">
          <div key={REELS[0].src} className="reel-card reel-hero group relative">
            <video src={REELS[0].src} autoPlay muted loop playsInline aria-label={`Reel ${REELS[0].n}`} />
            <span className="reel-num font-mono-site" aria-hidden="true">
              {REELS[0].n}
            </span>
          </div>
          <div className="reel-side-stack">
            {REELS.slice(1).map((reel) => (
              <div key={reel.src} className="reel-card reel-side group relative">
                <video src={reel.src} autoPlay muted loop playsInline aria-label={`Reel ${reel.n}`} />
                <span className="reel-num font-mono-site" aria-hidden="true">
                  {reel.n}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- instagram section */

const IG_BIO = ["Gaza · PS", "AI agents & automation Developer", "Hyper-Automation Catalyst", "Software Engineer"];

export function Playground() {
  const igRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const card = igRef.current;
    if (reduced || !card) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      const r = card.getBoundingClientRect();
      const inX = e.clientX > r.left - 260 && e.clientX < r.right + 260;
      const inY = e.clientY > r.top - 260 && e.clientY < r.bottom + 260;
      if (!inX || !inY) return;
      const nx = (e.clientX - (r.left + r.width / 2)) / r.width;
      const ny = (e.clientY - (r.top + r.height / 2)) / r.height;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        card.style.transform = `perspective(900px) rotateY(${nx * 10}deg) rotateX(${ny * -10}deg) translateZ(0)`;
      });
    };
    const onLeave = () => {
      card.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg)";
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseout", onLeave, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
    };
  }, []);

  return (
    <section id="playground" className="relative overflow-hidden bg-stage-deep">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 72% 55%, rgba(42,72,255,0.22), transparent 70%)",
        }}
      />
      <div className="relative mx-auto grid min-h-dvh max-w-7xl grid-cols-1 items-center gap-10 px-6 py-28 md:grid-cols-12 md:gap-8 md:px-10">
        {/* Modern copy beside the card */}
        <div className="flex flex-col gap-9 md:col-span-7">
          <div className="flex items-center gap-4">
            <span className="h-px w-16 bg-gold" aria-hidden="true" />
            <span className="font-mono-site text-sm tracking-[0.32em] text-ink">INSTAGRAM</span>
          </div>
          <h2 className="font-display text-6xl font-bold leading-[0.95] tracking-tighter md:text-8xl">
            Off the stage,
            <br />
            <span className="name-gradient">on the feed.</span>
          </h2>
          <p className="max-w-[40ch] text-xl leading-relaxed text-ink-dim md:text-2xl">
            The builds, the drops, and the behind the scenes. One tap on the card and you are in.
          </p>
          <div className="flex items-center gap-6">
            <span className="glass-tile font-mono-site text-sm tracking-[0.25em] text-ink">2,444 FOLLOWERS</span>
          </div>
        </div>

        {/* 3D Instagram card */}
        <div className="flex justify-center md:col-span-5 md:justify-start">
          <a
            ref={igRef}
            href="https://www.instagram.com/_3a1m/"
            target="_blank"
            rel="noreferrer"
            className="ig-card transition-transform duration-200 ease-out"
            data-cursor
            aria-label="Allam on Instagram, @_3a1m"
          >
            <div className="flex items-center gap-5">
              <img src="/assets/ig-avatar.jpg" alt="" className="ig-avatar" draggable={false} />
              <div>
                <p className="font-display text-2xl font-bold tracking-tight">_3a1m</p>
                <p className="font-mono-site mt-1 text-[10px] tracking-[0.25em] text-ink-dim">ALLAM · INSTAGRAM</p>
              </div>
            </div>
            <div className="mt-6 flex gap-8 border-y border-hairline py-4">
              <div>
                <p className="font-display text-xl font-bold">2,444</p>
                <p className="font-mono-site mt-1 text-[10px] tracking-[0.2em] text-ink-dim">FOLLOWERS</p>
              </div>
              <div>
                <p className="font-display text-xl font-bold">309</p>
                <p className="font-mono-site mt-1 text-[10px] tracking-[0.2em] text-ink-dim">FOLLOWING</p>
              </div>
            </div>
            <ul className="mt-5 flex flex-col gap-1.5">
              {IG_BIO.map((line) => (
                <li key={line} className="text-sm leading-relaxed text-ink-dim">
                  {line}
                </li>
              ))}
            </ul>
            <p className="font-mono-site mt-6 text-[11px] tracking-[0.25em] text-[#7f9bff]">
              TAP TO OPEN PROFILE ↗
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}

