# Portfolio — "Down the stack"

Date: 2026-10-08 · Status: approved direction, building

## Intent

A one-page portfolio for Ritesh Jha that tells one true story: he started at the
UI and kept moving down the stack — to services, then queues, then a storage
engine. The page is that descent. Scroll order ≈ depth ≈ time.

- **Audience:** engineers and EMs hiring for backend roles (2027).
- **Action:** open a repo, then email `ritesh20.jha@gmail.com`.
- **Tone:** technical, honest, quietly crafted. No marketing voice.

## Content rules (from the user)

- Only numbers that appear in a README, LinkedIn, the user's résumé or text
  they supplied, or public GitHub data. Each number's source is recorded in
  `sources` in `src/data/profile.ts` (not rendered).
- Don't list Tollgate.
- Contact: `ritesh20.jha@gmail.com`, `github.com/ritesh20jha`,
  `linkedin.com/in/ritesh20jha`.

## Structure

The page is a stack of strata. Paper gets darker the deeper you go; ink flips
from dark to light at the **waterline**.

| # | Band | Paper | Holds |
|---|------|-------|-------|
| 0 | Surface (hero) | light | Name, headline, one-paragraph lede, links, the stack map |
| 1 | Interface | light | Work: WeSee, Loomerang, Dinosys (no projects) |
| 2 | Service | light, one step down | Work: Oracle, BrowserStack · Projects: T&P automation (TCET), MemMesh |
| — | Waterline | — | "Below this line, the work is invisible until it breaks." |
| 3 | Pipeline | dark | FluxPay, EmitKit |
| 4 | Storage | darker | recache + benchmark table |
| 5 | Bedrock | darkest | Contact; it closes the page (no footer) |

- **Hero:** split diptych. Left: headline "Started at the UI. Kept digging."
  Right: the **stack map**, a vertical diagram of the four layers. Each row is
  a link to its band and is shaded like the band it points to.
- **Nav:** a fixed left side rail (desktop) that works as a depth gauge. It lists
  the layers, and a marker slides to the one in view. Hidden below 60rem. On
  small screens each band's heading names the layer.
- **Work and projects never blur.** Every band labels its groups "Work" and
  "Projects". Each job opens with its dates; each project opens with its name
  and a repo link. Job bullets come from the résumé (revised 2026-10-08).
- **No early or simple projects** (resmaker, Coffee-shop, etc.). They sit at
  the top of the page and undersell the rest.
- **Projects** are written like his READMEs: what it is, how it works, and
  **what it doesn't do**.
- **recache** gets a tabular spec sheet with real redis-benchmark rows,
  including the slow one (XRANGE).
- **Footer:** none. The colophon was removed at the user's request. Sources
  stay in `sources` in `src/data/profile.ts` as an audit trail.

## Design system (Hallmark, custom tuned)

- Genre: editorial. Macrostructure: Narrative Workflow, with layers as the
  stages and a stratum change as the divider.
- Theme: custom, vibe "daylight paper descending into bedrock".
  - Warm neutrals (hue ~70).
  - Copper accent `oklch(50% 0.15 42)`. It is lighter on dark bands (`oklch(76% 0.13 52)`).
  - Axes: light→dark / roman-serif / warm. The previous build was
    light / grotesk-heavy / cool, so all three axes differ.
- Type: Newsreader (display, roman, light weight), IBM Plex Sans (body), and
  JetBrains Mono for technical data only.
- Motion: one hero entrance stagger, the rail marker slide, and link underline
  hover. Everything respects `prefers-reduced-motion`.
- No images, no trackers, fonts self-hosted.

## Build

- Astro 7 on Node 22 (`.nvmrc`), static output.
- Content lives in `src/data/profile.ts`; components render it.
- Tokens are in `src/styles/tokens.css`. Components reference tokens only.

## Done when

- `astro build` passes and `astro check` is clean.
- No horizontal scroll and no wrapped link labels at 320, 375, 414, 768 and
  1440 px, checked with headless Chromium screenshots.
- Every number on the page is traceable to `sources` in `src/data/profile.ts`.
