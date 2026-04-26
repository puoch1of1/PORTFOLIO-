/**
 * Build-time script that calls the Gemini image-generation API and writes
 * portfolio visuals to public/generated/.
 *
 * The workflow is intentionally optional:
 * - If GEMINI_API_KEY is missing or still set to the placeholder value,
 *   the script logs a warning and exits successfully.
 * - Pass --require-gemini to make missing credentials a hard failure.
 */

import 'dotenv/config';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { generateVisual, getClient } from '../src/lib/gemini';
import { allPrompts, type VisualPrompt } from '../src/prompts/portfolioPrompts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const OUTPUT_DIR = path.resolve(__dirname, '..', 'public', 'generated');

const MAX_RETRIES = 3;
const BASE_DELAY_MS = 40_000;
const PLACEHOLDER_API_KEYS = new Set(['', 'your_gemini_api_key_here']);

function ensureDir(dir: string): void {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`[generate-visuals] Created directory: ${dir}`);
  }
}

function mimeToExt(mime: string): string {
  if (mime.includes('png')) return '.png';
  if (mime.includes('jpeg') || mime.includes('jpg')) return '.jpg';
  if (mime.includes('webp')) return '.webp';
  return '.png';
}

function hasConfiguredApiKey(apiKey: string | undefined): apiKey is string {
  if (!apiKey) {
    return false;
  }

  return !PLACEHOLDER_API_KEYS.has(apiKey.trim());
}

async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function generateWithRetry(prompt: string, label: string): Promise<Awaited<ReturnType<typeof generateVisual>>> {
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt += 1) {
    try {
      return await generateVisual({ prompt });
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      const isRateLimited = message.includes('429') || message.includes('RESOURCE_EXHAUSTED');

      if (!isRateLimited || attempt === MAX_RETRIES) {
        throw error;
      }

      const delay = BASE_DELAY_MS * attempt;
      console.log(
        `[generate-visuals] ${label} - rate limited, retrying in ${delay / 1000}s (attempt ${attempt}/${MAX_RETRIES})...`,
      );
      await sleep(delay);
    }
  }

  throw new Error('Unreachable retry state.');
}

function getRequestedPrompts(args: string[]): VisualPrompt[] {
  if (args.length === 0) {
    return allPrompts;
  }

  const prompts = allPrompts.filter((prompt) =>
    args.some((section) => prompt.section === section || prompt.id === section),
  );

  if (prompts.length === 0) {
    throw new Error(
      `No matching prompts for: ${args.join(', ')}. Available sections: ${allPrompts
        .map((prompt) => prompt.section)
        .join(', ')}`,
    );
  }

  return prompts;
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const requireGemini = args.includes('--require-gemini');
  const requestedSections = args.filter((arg) => arg !== '--require-gemini');
  const prompts = getRequestedPrompts(requestedSections);
  const apiKey = process.env.GEMINI_API_KEY;

  if (!hasConfiguredApiKey(apiKey)) {
    const message =
      '[generate-visuals] Skipping Gemini visual generation because GEMINI_API_KEY is missing or still set to the placeholder value. The site will use built-in visual fallbacks.';

    if (requireGemini) {
      throw new Error(message);
    }

    console.warn(message);
    return;
  }

  getClient(apiKey);
  ensureDir(OUTPUT_DIR);

  console.log(`\n[generate-visuals] Generating ${prompts.length} visual(s) via Nano Banana...\n`);

  let successCount = 0;

  for (const [index, visualPrompt] of prompts.entries()) {
    const label = `[${visualPrompt.section}] ${visualPrompt.id}`;
    console.log(`[generate-visuals] ${label} - sending prompt...`);

    try {
      const result = await generateWithRetry(visualPrompt.prompt, label);
      const ext = mimeToExt(result.mimeType);
      const outPath = path.join(OUTPUT_DIR, `${visualPrompt.id}${ext}`);
      const buffer = Buffer.from(result.base64, 'base64');

      fs.writeFileSync(outPath, buffer);
      successCount += 1;

      console.log(
        `[generate-visuals] ${label} - saved to ${outPath} (${(buffer.length / 1024).toFixed(1)} KB)`,
      );
    } catch (error) {
      console.error(
        `[generate-visuals] ${label} - failed:`,
        error instanceof Error ? error.message : error,
      );
    }

    if (index < prompts.length - 1) {
      console.log('[generate-visuals] Waiting 10s between requests...');
      await sleep(10_000);
    }
  }

  console.log(`\n[generate-visuals] Done - ${successCount}/${prompts.length} visuals generated.\n`);
}

main().catch((error) => {
  console.error(
    '[generate-visuals] Fatal error:',
    error instanceof Error ? error.message : error,
  );
  process.exit(1);
});
