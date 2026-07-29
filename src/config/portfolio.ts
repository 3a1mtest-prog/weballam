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
  role: "WEB DEVELOPER",
  year: "2026",
  /**
   * Drop a cut-out portrait (transparent PNG) in `public/` and point here —
   * e.g. "/portrait.png". While this is null the cover renders the violet
   * column that the photo would otherwise sit in.
   */
  portrait: null as string | null,
  email: "hello@example.com",
  phone: "+970 000 000 000",
  location: "Remote — working worldwide",
  links: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
    x: "https://x.com/",
  },
} as const;

/** The four numbered entries on the INDEX slide. Each links to its section. */
export const index = [
  { no: "01", label: "ABOUT ME", href: "#about" },
  { no: "02", label: "PROJECTS", href: "#projects" },
  { no: "03", label: "TECH STACK", href: "#stack" },
  { no: "04", label: "CASE STUDIES", href: "#case-studies" },
] as const;

export const about = {
  heading: "WHO AM I ?",
  paragraphs: [
    "Hello, I'm Allam, a web developer with over 4 years of experience building fast, accessible products for the browser. I work across the whole stack — from the data model to the last pixel — and I care about how a thing feels to use, not just whether it ships.",
    "I believe good software is more than working code — it's about clarity, speed, and removing friction between a person and what they came to do. My goal is to turn ideas into interfaces that feel obvious. I'd be happy to collaborate and bring your vision to life.",
  ],
} as const;

export const services = [
  {
    title: "WEB\nDEVELOPMENT",
    blurb:
      "Building fast, responsive sites and web apps that convert visitors into customers.",
  },
  {
    title: "FRONTEND\nENGINEERING",
    blurb:
      "Design systems, component libraries and interfaces that stay consistent as a product grows.",
  },
  {
    title: "PERFORMANCE\n& SEO",
    blurb:
      "Core Web Vitals, structured data and rendering strategy — so the work actually gets found.",
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
 * PROJECTS — grids of three, one group per client, each group closed by a
 * divider bar. Add or remove groups freely; the layout absorbs it.
 */
export const projectGroups: ProjectGroup[] = [
  {
    client: "COMMERCE",
    projects: [
      {
        name: "STOREFRONT",
        tag: "Next.js · Stripe",
        summary:
          "A headless storefront with instant search, cart persistence and a checkout that survives a dropped connection.",
      },
      {
        name: "ORDER DESK",
        tag: "React · Postgres",
        summary:
          "Internal fulfilment dashboard replacing a spreadsheet — live order state for a team of twelve.",
      },
      {
        name: "PRICE ENGINE",
        tag: "TypeScript · Redis",
        summary:
          "Rules-driven pricing service with per-region overrides and an audit trail on every change.",
      },
    ],
  },
  {
    client: "PLATFORM",
    projects: [
      {
        name: "DOCS PORTAL",
        tag: "MDX · Algolia",
        summary:
          "Versioned documentation site with typed code samples and search that lands on the exact heading.",
      },
      {
        name: "AUTH GATEWAY",
        tag: "Node · OAuth",
        summary:
          "Single sign-on across four internal tools, with session revocation that propagates in seconds.",
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
    client: "BRAND SITES",
    projects: [
      {
        name: "LAUNCH PAGE",
        tag: "Motion · SSG",
        summary:
          "A launch campaign that held 40k concurrent visitors on static hosting without a single error.",
      },
      {
        name: "EDITORIAL",
        tag: "CMS · ISR",
        summary:
          "Magazine build where editors publish in one click and the page is live before they close the tab.",
      },
      {
        name: "BOOKING FLOW",
        tag: "Forms · A11y",
        summary:
          "Four-step reservation flow, keyboard-complete and screen-reader tested end to end.",
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
  "Postgres",
  "Supabase",
  "Prisma",
  "GraphQL",
  "Vitest",
  "Playwright",
  "Docker",
  "AWS",
  "Vercel",
  "Figma",
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
    name: "STOREFRONT",
    accent: "#22c55e",
    body: "Storefront is a headless commerce build for a retailer moving off a hosted platform. The catalogue is statically generated and revalidated on write, so pages are served from the edge while stock stays accurate. Checkout was rebuilt around resumable sessions — an interrupted purchase picks up exactly where it stopped.",
    tiles: ["Catalogue", "Product page", "Checkout", "Mobile"],
  },
  {
    name: "DOCS PORTAL",
    accent: "#38bdf8",
    body: "A documentation platform for a developer tool with four supported versions. Content is authored in MDX, type-checked against the live SDK, and indexed per heading — so search returns the paragraph that answers the question rather than the page that mentions it.",
    tiles: ["Search", "Versioning", "Code samples", "Dark mode"],
  },
  {
    name: "USAGE METRICS",
    accent: "#f97316",
    body: "Customer-facing analytics layered over an event pipeline handling billions of rows. Queries are pre-aggregated on ingest and streamed to the client progressively, keeping the first meaningful chart under a second even on the widest date ranges.",
    tiles: ["Overview", "Drill-down", "Export", "Alerts"],
  },
];

export const closing = {
  heading: "THANK\nYOU",
  line: "Have something in mind? Let's build it.",
  cta: "Start a project",
} as const;
