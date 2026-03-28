/**
 * Gemini (Nano Banana) client library
 *
 * Provides helpers to call the Gemini image-generation API and return
 * base64-encoded images that can be saved to disk at build-time or
 * displayed inline from the browser via a proxy endpoint.
 */

import { GoogleGenAI } from '@google/genai';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface GeneratedVisual {
  /** base64-encoded image data */
  base64: string;
  /** MIME type of the returned image (e.g. "image/png") */
  mimeType: string;
}

export interface VisualGenerationOptions {
  /** The descriptive prompt for image generation */
  prompt: string;
  /** The Gemini model to use (defaults to gemini-2.5-flash-preview-image-generation) */
  model?: string;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

export const DEFAULT_MODEL = 'gemini-2.5-flash-image';

// ---------------------------------------------------------------------------
// Client singleton
// ---------------------------------------------------------------------------

let _client: GoogleGenAI | null = null;

/**
 * Returns a GoogleGenAI client, creating one lazily.
 * In Node scripts the key is read from `process.env.GEMINI_API_KEY`.
 * In the browser you would call `initGeminiClient(key)` first.
 */
export function getClient(apiKey?: string): GoogleGenAI {
  if (_client) return _client;

  const key =
    apiKey ??
    (typeof process !== 'undefined' ? process.env.GEMINI_API_KEY : undefined);

  if (!key) {
    throw new Error(
      'GEMINI_API_KEY is not set. Pass it explicitly or define it in your .env file.',
    );
  }

  _client = new GoogleGenAI({ apiKey: key });
  return _client;
}

/** Allows the browser to inject an API key at runtime. */
export function initGeminiClient(apiKey: string): void {
  _client = new GoogleGenAI({ apiKey });
}

// ---------------------------------------------------------------------------
// Image generation
// ---------------------------------------------------------------------------

/**
 * Generate a single image using Gemini's Nano Banana model.
 *
 * @returns A `GeneratedVisual` containing the base64 data and its MIME type.
 */
export async function generateVisual(
  options: VisualGenerationOptions,
): Promise<GeneratedVisual> {
  const client = getClient();
  const model = options.model ?? DEFAULT_MODEL;

  const response = await client.models.generateContent({
    model,
    contents: options.prompt,
    config: {
      responseModalities: ['IMAGE', 'TEXT'],
    },
  });

  // Walk the response parts and extract the first image
  if (response.candidates && response.candidates.length > 0) {
    const parts = response.candidates[0].content?.parts ?? [];
    for (const part of parts) {
      if (part.inlineData) {
        return {
          base64: part.inlineData.data ?? '',
          mimeType: part.inlineData.mimeType ?? 'image/png',
        };
      }
    }
  }

  throw new Error('Gemini did not return any image data for the given prompt.');
}

/**
 * Batch-generate visuals for multiple prompts (runs in parallel).
 */
export async function generateVisuals(
  prompts: VisualGenerationOptions[],
): Promise<GeneratedVisual[]> {
  return Promise.all(prompts.map(generateVisual));
}
