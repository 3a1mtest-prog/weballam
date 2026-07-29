/**
 * Every word and link on the site lives here.
 *
 * The layout is fixed; the content is not. Swap the strings below and the
 * whole deck re-renders — nothing else needs touching.
 */

export const identity = {
  /** Shown large on the cover, in the divider bars, and on the closing slide. */
  name: "ALLAM GHABEN",
  /** The short form used by the signature wordmark. */
  shortName: "allam",
  /** Small caps set under the signature. */
  markSub: "AI · WEB",
  role: "AI & WEB DEVELOPER",
  year: "2026",
  /**
   * The cover figure — a cut-out on transparency, standing through the
   * wordmark. Set src to null to fall back to the lit violet column the
   * type is composed around.
   *
   * `filter` walks a photo's lighting round to the deck's hue; the cut-out
   * is neutral white so it needs none.
   */
  portrait: {
    src: "/assets/hero-cutout.webp" as string | null,
    filter: null as string | null,
  },
  /**
   * The about slide's studio shot. This one is lit with a hard blue rim
   * light that fights the violet stage, so it gets the hue correction.
   */
  portraitPoster: {
    src: "/assets/portrait-poster.webp" as string | null,
    filter: "hue-rotate(38deg) saturate(1.08)" as string | null,
  },
  email: "hello@example.com",
  phone: "+970 000 000 000",
  location: "Remote — working worldwide",
  links: {
    github: "https://github.com/3a1mtest-prog",
    instagram: "https://www.instagram.com/_3a1m/",
    site: "https://allam.qd.je",
  },
} as const;

/**
 * The four numbered entries on the INDEX slide, and the labels on the lit
 * plates that announce each one. These follow the reference deck exactly —
 * rename them here and both the index and the plates follow.
 */
export const index = [
  { no: "01", label: "ABOUT ME", href: "#about" },
  { no: "02", label: "SOCIAL MEDIA", href: "#social-media" },
  { no: "03", label: "LOGOFOLIO", href: "#logofolio" },
  { no: "04", label: "BRANDING", href: "#branding" },
] as const;

export const about = {
  heading: "WHO AM I ?",
  paragraphs: [
    "Hello, I'm Allam — a software engineer working on intelligent systems, end to end. Generative media, machine learning, automation and agent systems, plus the web apps that put all of it in front of a person. I work across the whole stack, from the dataset to the last pixel.",
    "I believe good software is more than working code — it's about clarity, speed, and removing friction between a person and what they came to do. Applied well, a model removes a whole class of that friction. My goal is to turn ideas into systems that feel obvious to use. I'd be happy to collaborate and bring your vision to life.",
  ],
} as const;

export const services = [
  {
    title: "WEB\nDEVELOPMENT",
    blurb:
      "Fast, responsive sites and web apps — built to convert, built to last.",
  },
  {
    title: "MACHINE\nLEARNING",
    blurb:
      "Training and fine-tuning, datasets to deployment. Weights that behave in the real world.",
  },
  {
    title: "AGENTS &\nAUTOMATION",
    blurb:
      "Tools, memory, guardrails. Pipelines that plan, act, report back — and erase manual work.",
  },
] as const;

/** The three promise cards that follow the services grid. */
export const guarantees = [
  {
    figure: "98+",
    kicker: "Lighthouse Performance",
    line: "On every project shipped",
  },
  {
    figure: "2×",
    kicker: "Faster Load Times",
    line: "Measured against the old build",
  },
  {
    figure: "0%",
    kicker: "Zero Lock-In",
    line: "You own the code and the repo",
  },
] as const;

export type Project = {
  name: string;
  tag: string;
  summary: string;
  /** Optional screenshot in `public/`; falls back to a violet plate. */
  image?: string;
  href?: string;
};

export type ProjectGroup = {
  client: string;
  projects: Project[];
};

/**
 * PROJECTS — grids of three, one group per field, each group closed by a
 * divider bar. Add or remove groups freely; the layout absorbs it.
 */
export const projectGroups: ProjectGroup[] = [
  {
    client: "AI PRODUCTS",
    projects: [
      {
        name: "ASK THE DOCS",
        tag: "RAG · pgvector",
        summary:
          "Retrieval assistant over a 12,000-page manual set — answers cite the exact page they came from.",
      },
      {
        name: "TRIAGE AGENT",
        tag: "Tool use · Queues",
        summary:
          "Support agent that reads a ticket, pulls the account record, and drafts the reply for a human to send.",
      },
      {
        name: "VISION SORT",
        tag: "PyTorch · ONNX",
        summary:
          "On-device image classifier for a warehouse line, quantised to run on the hardware already installed.",
      },
    ],
  },
  {
    client: "WEB PLATFORMS",
    projects: [
      {
        name: "STOREFRONT",
        tag: "Next.js · Stripe",
        summary:
          "A headless storefront with instant search, cart persistence and a checkout that survives a dropped connection.",
      },
      {
        name: "DOCS PORTAL",
        tag: "MDX · Algolia",
        summary:
          "Versioned documentation site with typed code samples and search that lands on the exact heading.",
      },
      {
        name: "USAGE METRICS",
        tag: "ClickHouse · D3",
        summary:
          "Customer-facing analytics — billions of events rolled up into charts that render under a second.",
      },
    ],
  },
  {
    client: "AUTOMATION",
    projects: [
      {
        name: "ORDER DESK",
        tag: "React · Postgres",
        summary:
          "Internal fulfilment dashboard replacing a spreadsheet — live order state for a team of twelve.",
      },
      {
        name: "REPORT ENGINE",
        tag: "Python · Cron",
        summary:
          "Nightly pipeline that assembles, renders and delivers what used to be a two-day manual report.",
      },
      {
        name: "INBOX ROUTER",
        tag: "LLM · Webhooks",
        summary:
          "Classifies inbound mail and routes it to the right queue, with a confidence floor that defers to a human.",
      },
    ],
  },
];

/**
 * TECH STACK — rendered as a wordmark wall, the way the original deck
 * displays its logofolio.
 */
export const stack = [
  "TypeScript",
  "React",
  "Next.js",
  "Node",
  "Tailwind",
  "Python",
  "PyTorch",
  "LangChain",
  "Postgres",
  "pgvector",
  "Supabase",
  "Playwright",
  "Docker",
  "AWS",
  "Vercel",
  "Git",
] as const;

export type CaseStudy = {
  name: string;
  /** Accent used for the hero plate — any CSS color. */
  accent: string;
  body: string;
  /** Short labels for the mockup tiles beside the write-up. */
  tiles: string[];
};

/**
 * CASE STUDIES — the deep-dive slides. Each one is a full-bleed plate, a
 * paragraph of context, and a row of supporting shots.
 */
export const caseStudies: CaseStudy[] = [
  {
    name: "ASK THE DOCS",
    accent: "#a855f7",
    body: "A retrieval assistant built over a manufacturer's manual set — twelve thousand pages across four languages. Chunks are embedded on ingest and reranked at query time, and every answer carries the page it was drawn from, so a technician can verify it before acting. Questions the index cannot support are refused rather than guessed at.",
    tiles: ["Query", "Citations", "Ingest", "Eval harness"],
  },
  {
    name: "STOREFRONT",
    accent: "#22c55e",
    body: "A headless commerce build for a retailer moving off a hosted platform. The catalogue is statically generated and revalidated on write, so pages are served from the edge while stock stays accurate. Checkout was rebuilt around resumable sessions — an interrupted purchase picks up exactly where it stopped.",
    tiles: ["Catalogue", "Product page", "Checkout", "Mobile"],
  },
  {
    name: "USAGE METRICS",
    accent: "#38bdf8",
    body: "Customer-facing analytics layered over an event pipeline handling billions of rows. Queries are pre-aggregated on ingest and streamed to the client progressively, keeping the first meaningful chart under a second even on the widest date ranges.",
    tiles: ["Overview", "Drill-down", "Export", "Alerts"],
  },
];

export const closing = {
  heading: "THANK\nYOU",
  line: "Have something in mind? Let's build it.",
  cta: "Start a project",
} as const;
