# ritesh-jha-portfolio

One-page portfolio. The page descends through the stack (interface, service,
pipeline, storage) and the paper darkens as you go down.

Needs Node 22 or newer (`nvm use` reads `.nvmrc`).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
npm run check    # astro check
```

- Content: `src/data/profile.ts`. Only add numbers you can source; list the
  source in `sources` at the bottom of that file.
- Design tokens: `src/styles/tokens.css`.
- Design spec: `docs/superpowers/specs/2026-10-08-portfolio-design.md`.
