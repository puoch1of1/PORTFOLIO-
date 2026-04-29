# Portfolio

Personal portfolio website built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Quick Start

```bash
npm install
npm run dev
```

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Project Structure

| Path | Purpose |
|---|---|
| `src/App.tsx` | Main app composition |
| `src/sections/` | Portfolio page sections |
| `src/components/` | Reusable UI components |
| `src/data/` | Portfolio content and structured data |
| `src/styles/index.css` | Global styling |
| `public/` | Static assets such as the CV, sitemap, and robots file |

## AI Visual Generation Status

This repository includes an experimental Gemini-based image generation setup, but it should be treated as optional and not as a guaranteed part of the normal development workflow.

What exists in the codebase:

- `scripts/generate-visuals.ts` attempts to generate section visuals into `public/generated/`
- `src/lib/gemini.ts` wraps the Google GenAI client
- `src/prompts/portfolioPrompts.ts` stores the text prompts
- `src/components/GeneratedVisual.tsx` renders generated images and falls back gracefully if they are missing

What to assume:

- The portfolio itself does not depend on Gemini output to run
- If visual generation fails, the site should still work without generated images
- The Gemini workflow may require fixes or API adjustments before it can be relied on

