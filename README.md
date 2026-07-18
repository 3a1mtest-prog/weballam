# Allam Ghaben — Portfolio

Personal portfolio of Allam Ghaben (علام غبن). React 19 + TanStack Start, server-rendered, built to run as a Cloudflare Worker. Tailwind CSS v4, GSAP + Lenis smooth scrolling, custom cursor, layered parallax hero, and a living video portrait.

## Stack

- React 19 + TanStack Start (SSR, file-based routing under `src/routes/`)
- Vite 7 + Bun
- Tailwind CSS v4 (`src/styles.css`)
- GSAP ScrollTrigger + Lenis (scroll effects), three.js available
- Deploys as a single Cloudflare Worker (`dist/server/server.js` + `dist/client`)

## Local development

```bash
bun install
bun run dev        # dev server at http://localhost:3000
```

## Build

```bash
bun run build      # typecheck + production build (dist/)
```

## Deploy to Cloudflare (your own domain)

1. Install wrangler: `bun add -g wrangler` then `wrangler login`.
2. Edit `wrangler.jsonc`: set your worker `name`.
3. Deploy:

```bash
bun run build
wrangler deploy
```

4. In the Cloudflare dashboard, add your custom domain to the Worker
   (Workers & Pages → your worker → Settings → Domains & Routes → Add custom domain).

## Project layout

- `src/routes/index.tsx` — the page (Hero, Profile, Instagram sections)
- `src/components/site/` — all site components + effects
- `src/styles.css` — theme tokens + custom styles
- `public/assets/` — images and the portrait video
- `src/app-meta.json` — title, description, favicon, social share image
