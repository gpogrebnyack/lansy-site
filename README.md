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
    frames4/              MacBook opening sequence with the Summary screen: f001–f060.avif + manifest.json, scrubbed by scroll
                          at 2400px for the desktop; frames4m/: 40 frames at 1440px for phones
                          (AVIF, SVT-AV1 crf 28, 10-bit: 2.6 MB + 0.7 MB)
    frames2/, frames2m/   the MacBook in WebP (100 and 50 frames), loaded only by browsers without AVIF
    iphone1/, iphone1m/   iPhone zoom for "For employees": 60 frames at 2400px, 40 at 1440px for phones (AVIF;
                          -webp folders are the fallback). The screen is a placeholder for now
    ipad6/, ipad6m/       iPad Pro turning 180° from its back to the assistant, for "For your data": 60 frames at 2400px, 40 at 1440px (AVIF + -webp)
                          (a new folder name per export: the files are cached for a year, immutable)
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

## Arabic version

`?lang=ar` opens the same page in Arabic, right to left. The EN / AR menu in the top bar (a shadcn Dropdown Menu radio group, rebuilt in plain HTML) switches between them.

- **Translation** lives in `web/i18n/ar.js`. It loads only for Arabic and runs before the page script.
  - Each text block is matched by its English markup. If you edit English text, update its pair in `ar.js`. Otherwise that block stays in English, and the console lists it.
  - The How it works captions and the sound button labels are arrays in the same file.
- **Illustrations stay in English and left to right.** These are the product UI: the How it works scenes, the bento panels, the device mockups and the logos.
- **Font:** Struve has no Arabic letters, so Arabic falls back to IBM Plex Sans Arabic, while Latin words keep Struve.
  - To compare other Arabic fonts, add `&arfont=noto` or `&arfont=readex` to the URL.
- **RTL rules** are the `html[dir=rtl]` and `html[lang=ar]` block at the end of the styles.
- **Production:** use an `/ar/` prefix for every page (`/ar/`, `/ar/pricing`, …) with `hreflang` links between the versions. Search engines don't index a version that is switched by a script.

## Rules the design follows

The full rules are in [`DESIGN.md`](DESIGN.md): colour, spacing, the mobile type scale and the illustration system.

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

Vercel deploys from GitHub automatically:

- a push to `main` goes to production at https://lansy-prototype.vercel.app;
- any other branch or pull request gets its own preview URL.

The Vercel project is `lansy-prototype`, with its root directory set to `web`.
