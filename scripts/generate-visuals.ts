/**
 * generate-visuals.ts
 *
 * Build-time script that calls the Gemini (Nano Banana) API to produce
 * portfolio section images and writes them to public/generated/.
 *
 * Usage:
 *   npx tsx scripts/generate-visuals.ts            # generate all
 *   npx tsx scripts/generate-visuals.ts hero about  # generate specific sections
 *
 * Requires GEMINI_API_KEY in the environment or in a root .env file.
 */

import 'dotenv/config';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { getClient, generateVisual } from '../src/lib/gemini';
import { allPrompts, type VisualPrompt } from '../src/prompts/portfolioPrompts';

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const OUTPUT_DIR = path.resolve(__dirname, '..', 'public', 'generated');

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function ensureDir(dir: string): void {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`📁 Created directory: ${dir}`);
  }
}

function mimeToExt(mime: string): string {
  if (mime.includes('png')) return '.png';
  if (mime.includes('jpeg') || mime.includes('jpg')) return '.jpg';
  if (mime.includes('webp')) return '.webp';
  return '.png'; // fallback
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  // Validate API key early
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('❌ GEMINI_API_KEY is not set. Add it to your .env file or export it.');
    process.exit(1);
  }

  // Initialise client
  getClient(apiKey);

  // Determine which prompts to run
  const requestedSections = process.argv.slice(2);
  let prompts: VisualPrompt[];

  if (requestedSections.length > 0) {
    prompts = allPrompts.filter((p) =>
      requestedSections.some(
        (s) => p.section === s || p.id === s,
      ),
    );
    if (prompts.length === 0) {
      console.error(
        `❌ No matching prompts for: ${requestedSections.join(', ')}\n` +
          `   Available sections: ${allPrompts.map((p) => p.section).join(', ')}`,
      );
      process.exit(1);
    }
  } else {
    prompts = allPrompts;
  }

  ensureDir(OUTPUT_DIR);

  console.log(`\n🎨 Generating ${prompts.length} visual(s) via Nano Banana…\n`);

  for (const visualPrompt of prompts) {
    const label = `[${visualPrompt.section}] ${visualPrompt.id}`;
    console.log(`⏳ ${label} — sending prompt…`);

    try {
      const result = await generateVisual({ prompt: visualPrompt.prompt });
      const ext = mimeToExt(result.mimeType);
      const outPath = path.join(OUTPUT_DIR, `${visualPrompt.id}${ext}`);

      // Write the base64 image to disk
      const buffer = Buffer.from(result.base64, 'base64');
      fs.writeFileSync(outPath, buffer);

      console.log(`✅ ${label} — saved to ${outPath} (${(buffer.length / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`❌ ${label} — failed:`, err instanceof Error ? err.message : err);
    }
  }

  console.log('\n🏁 Done.\n');
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
