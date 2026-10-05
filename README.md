# Lansy — homepage prototype

Scroll prototype of the redesigned lansy.ai homepage. It's a single static page. There's no build step and no dependencies.

**Live:** https://lansy-prototype.vercel.app

## Run locally

```bash
python3 -m http.server 8765 --directory web
```

Then open http://localhost:8765. In Claude Code the same server is in `.claude/launch.json` under the name `web-prototypes`.

## Structure

```
web/
  index.html              the whole page: markup, CSS and JS in one file, floors in page order
  mckp/                   device renders for the "roles" floor (exported from mckp.live Pro)
    frames/               MacBook opening sequence: f001–f100.webp + manifest.json, scrubbed by scroll
    employees.webp        iPhone · data.webp — iPad in a frame · counter.webp — iPad on a grille
  logos/                  messenger / calling app logos for "Connects to your stack" (Simple Icons)
  labs/
    hero-shader-lab.html  approved hero background shader (React Bits "Threads", Lansy greens),
                          with tuning knobs; parked, not on the page yet (too heavy)
  vercel.json             clean URLs + cache headers
```

## Floors in `index.html`

The floors are, in page order:

1. Hero (glass product window).
2. The problem + live counter.
3. Globe.
4. Video.
5. How it works (pinned, 4 steps).
6. Industries.
7. Roles (pinned, MacBook frame sequence + stills).
8. Cases.
9. Privacy bento.
10. FAQ.
11. Final CTA.
12. Footer.

The "Live in 2 weeks" floor is in the markup but hidden (`#launchFloor`).

## Rules the design follows

- **Colour:** monochrome greys. The only accent is the Lansy palette: Primary Light `#9CDE45`, Primary Dark `#33694F`.
- **Spacing:** 160px between floors.
- **Motion:** soft rise on scroll, no blur. Pinned floors are driven by scroll progress in JS.
- **Text:** English on the page. Text in parallel blocks is balanced to the same number of lines.

## Media

Heavy media (videos, photos) live in Cloudflare R2, bucket `lansy-media`, public URL `https://pub-f554743e343b4157afc5fa154f4ba787.r2.dev`. Upload with:

```bash
npx wrangler r2 object put lansy-media/<path> --file <file> --content-type <type> \
  --cache-control "public, max-age=31536000, immutable" --remote
```

File names are versioned (`-v2`), so long caching is safe. When you replace a file, give it a new name.

Optimisation in place:

- the café video is AV1 (2.6 MB) with an H.264 fallback;
- images are WebP;
- the icon video loads only near the final CTA;
- the MacBook frames preload two screens before their floor.

## Deploy

```bash
cd web && vercel deploy --prod --yes
```

The Vercel project is `lansy-prototype`.
