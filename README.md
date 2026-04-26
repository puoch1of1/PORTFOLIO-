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

## Optional Gemini Setup

If you want to experiment with the image-generation scripts anyway:

1. Create a `.env` file from `.env.example`
2. Add a valid `GEMINI_API_KEY`
3. Try one of the generation commands below

```bash
npm run generate-visuals
npm run generate-visuals:hero
npm run generate-visuals:about
npm run generate-visuals:skills
npm run generate-visuals:projects
npm run generate-visuals:contact
```

By default, these commands now skip cleanly when `GEMINI_API_KEY` is missing or still set to the placeholder value, so the rest of the site can continue using built-in fallbacks.

If you want missing Gemini credentials to fail loudly, use:

```bash
npm run generate-visuals:strict
```

There is also a combined build command:

```bash
npm run build:full
```

`npm run build:full` keeps Gemini optional. If credentials are not configured, the visual-generation step is skipped and the app still builds with fallback visuals.

## Environment

`.env.example` contains the expected Gemini API key variable:

```bash
GEMINI_API_KEY=your_gemini_api_key_here
```

## License

All rights reserved.
