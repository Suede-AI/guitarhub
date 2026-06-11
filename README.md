# GuitarHub

The open guitar hub: rig rundowns, gear and rights explainers, and a directory
to free guitar tools. The public front door to **Suede Social**, the guitar
community grounded in real rigs. A Suede Labs project.

- **Live:** https://guitarhub.org
- **Community:** https://suede.social (Suede Social — join, post your rig, talk gear)
- **Tools:** https://guitarchords.info (free chord library, scales, tuner, metronome)
- **By:** [Jason Colapietro](https://suedeai.ai/founder), founder of [Suede Labs](https://suedeai.ai)

## What it is

GuitarHub is open to read. The community is yours to join. The hub hosts
editorial (the `Reads` section) and a directory to the rest of the guitar
surface; the actual community — posting rigs, talking gear — lives on Suede
Social. GuitarHub is words and directory; guitarchords.info is interactive
tools. They cross-link and never duplicate each other.

## Stack

Next.js (App Router), Tailwind v4 via `@theme` in `app/globals.css`. Dark
editorial design system shared with guitarchords.info.

## Develop

```bash
pnpm install
node_modules/.bin/next dev
node_modules/.bin/next build
```

`sharp`'s post-install build script is gated by pnpm; it is not needed for the
static build and can stay un-approved.

## Routes

- `/` — hub homepage (hero, spoke directory, featured read, manifesto)
- `/reads` — editorial index
- `/fender-stratocaster-lawsuit` — first read
- `/rigs` — Real Rigs intro + Suede Social join CTA

## Deploy

Vercel project on the `suede-ai` team, domain `guitarhub.org`. Ships from `main`.
