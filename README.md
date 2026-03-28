# Portfolio

Personal portfolio website with **AI-generated visuals** powered by Google Gemini (Nano Banana).

## Tech Stack

React · TypeScript · Vite · Tailwind CSS · Framer Motion · **Gemini / Nano Banana (image generation)**

## Quick Start

```bash
npm install
npm run dev
```

## AI Visual Generation (Nano Banana)

The site uses **Google Gemini's image-generation model** (Nano Banana) to produce section-specific visuals at build time — hero banners, about illustrations, skill backgrounds, and project art.

### Setup

1. Get a Gemini API key at [Google AI Studio](https://aistudio.google.com/apikey).
2. Copy the example env file and add your key:
   ```bash
   cp .env.example .env
   # Edit .env and paste your key
   ```
3. Generate all visuals:
   ```bash
   npm run generate-visuals
   ```
   Or generate for a specific section:
   ```bash
   npm run generate-visuals:hero
   npm run generate-visuals:about
   npm run generate-visuals:skills
   npm run generate-visuals:projects
   npm run generate-visuals:contact
   ```
4. Start the dev server as usual — generated images are served from `public/generated/`.

### Full Build (generate + compile)

```bash
npm run build:full
```

### How It Works

| File / Folder | Purpose |
|---|---|
| `src/lib/gemini.ts` | Gemini SDK client wrapper |
| `src/prompts/portfolioPrompts.ts` | Rich narrative prompt templates per section |
| `scripts/generate-visuals.ts` | CLI script that calls the API and writes images to `public/generated/` |
| `src/components/GeneratedVisual.tsx` | React component that renders the generated images (with graceful fallback) |

The `GeneratedVisual` component **falls back to a subtle gradient** when images haven't been generated yet, so the site is never broken.

### Customizing Prompts

Edit [src/prompts/portfolioPrompts.ts](src/prompts/portfolioPrompts.ts) to change the visual style, color palette, or composition of any section. Re-run `npm run generate-visuals` afterward.

## License

All rights reserved.