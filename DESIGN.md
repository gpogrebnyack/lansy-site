# Lansy homepage: design rules

These rules apply to the prototype in `web/index.html`. When you add or change a floor, follow them.

## Colour

- **Base:** monochrome greys.
- **Accent:** the Lansy palette only.
  - Primary Light `#9CDE45` is the lime fill.
  - Primary Dark `#33694F` is for accent text on white.
- **Neutral surfaces:** every grey surface uses the hero's neutral, never a flat grey.
  - A full floor uses `--n-floor` (`#EDEDE9` → `#F3F3F4` → `#FAFAFA`). The hero and Roles use it.
  - A card uses `--n-card` (`#EDEDE9` → `#F3F3F4`). The privacy bento and the "Your industry isn’t listed?" card use it.
  - When a card holds a picture, the warm end sits next to the picture.
- **Small UI greys** (chips, hover states, placeholders inside illustrations) stay flat.

## Spacing

| Between | Desktop | Phones (≤ 900px) |
|---|---|---|
| Floors | 160px | 96px (`--floor`) |
| The lime CTA and its neighbours | 96px | 64px |

## Mobile type scale (≤ 900px)

Every text on a phone uses one of these sizes. Don't add a new one; pick the nearest step.

| Size | Weight | Used for |
|---|---|---|
| 40 | 500 | Hero headline (the only one) |
| 34 | 600 | Floor headings (`h2`) |
| 24 | 600 / 400 | Step card titles in How it works, the manifesto, the lime CTA heading, the "Your industry isn’t listed?" card, case numbers |
| 17 | 400 / 500 / 600 | Body text, card text, quotes, FAQ, large buttons (`.btn.lg`), footer links |
| 15 | 400 / 500 | Small text: card captions, roles, badges, “Learn more”, the case button, legal |
| 12 | 500 mono | Labels (`.lbl`, `.k`, Soon pills) |

How to apply it:

- **Card titles in the bento and in roles** use the text size (17). Only the weight sets them apart.
- **Line height:** 1.15 for headings, 1.25–1.3 for 24, 1.5 for 17.
- **Line breaks for phones only** use `<br class="mb">`. Breaks for desktop only use `<br class="dk">`.
- **Exceptions:**
  - The top bar keeps its own sizes (16 for links, 11 for the language codes).
  - Product illustrations keep their own type scale.

## Illustration system

How it works and the privacy bento share one system.

- **Canvas:** each picture is drawn on a fixed canvas (600×600 for the steps, 440×300 for the bento) and scaled as a whole. Frames and masses stay identical on every screen.
- **Desktop bento:** the scale is fixed at 0.92.
- **Phones:**
  - The step illustrations stay scaled.
  - The bento interface cards are not scaled. They take the card's width and use the mobile scale: 17 body, 15 meta, 12 labels.
- **Interface cards:**
  - Look: white, radius 24, a soft shadow and a faint dot grid behind.
  - Type: 22 titles, 18 body, 15 meta, 12 mono labels.
  - Accent: lime, with Primary Dark for accent text on white.
- **Dotted pictures:** the globe, the planet and the voice line use one dot. It is 2.4px, about 7px apart on screen, in ink at 12–42% opacity.
