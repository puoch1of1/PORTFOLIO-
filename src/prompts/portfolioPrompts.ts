/**
 * Nano Banana prompt templates for each portfolio section.
 *
 * Each prompt is crafted with rich narrative detail — style, mood, composition,
 * palette, and context — so Nano Banana produces high-quality, site-ready visuals
 * that reflect Puoch's identity as a data engineer, cybersecurity practitioner,
 * and AI enthusiast.
 */

export interface VisualPrompt {
  /** Human-readable identifier (used as the output filename stem) */
  id: string;
  /** Section this visual belongs to */
  section: 'hero' | 'about' | 'skills' | 'projects' | 'contact';
  /** The full descriptive prompt sent to Gemini */
  prompt: string;
  /** Suggested aspect ratio hint (for prompt context, not enforced) */
  aspect?: string;
}

// ---------------------------------------------------------------------------
// Base style tokens common to every prompt
// ---------------------------------------------------------------------------
const STYLE_TOKENS = `
Use a modern, elegant aesthetic. Color palette: deep blues (#0F0F0F charcoal base),
teal circuits (#4338CA indigo accent), bright neon highlights (#6366F1 indigo-light),
and warm off-white (#FAFAF8) negative space. Smooth gradients, subtle noise textures,
and soft shadows for depth. Minimalist, editorial quality — suitable for a premium
developer portfolio. No text or watermarks in the image.
`.trim();

// ---------------------------------------------------------------------------
// Section prompts
// ---------------------------------------------------------------------------

export const heroPrompt: VisualPrompt = {
  id: 'hero-banner',
  section: 'hero',
  aspect: '16:9',
  prompt: `
Create a wide cinematic hero banner for a data engineer's portfolio website.
Show luminous data streams weaving through a 3D grid of interconnected nodes, with
lines of Python and SQL code floating subtly in the translucent foreground. Abstract
AI neuron connections glow along blue-teal gradient paths. In the background, a
stylized secure-network lattice dissolves into flowing particle trails — evoking
data pipelines, cybersecurity, and machine-learning inference. The composition
feels vast and aspirational.
${STYLE_TOKENS}
`.trim(),
};

export const aboutPrompt: VisualPrompt = {
  id: 'about-visual',
  section: 'about',
  aspect: '4:3',
  prompt: `
Generate an elegant side illustration for an "About Me" section of a tech portfolio.
Show a silhouette of a person merging into flowing data streams, circuit-board
patterns, and abstract globe connections that represent South Sudan, East Africa,
and the global tech community. Incorporate subtle graduation-cap and university
iconography woven into digital pathways. The mood is reflective yet forward-looking.
${STYLE_TOKENS}
`.trim(),
};

export const skillsPrompt: VisualPrompt = {
  id: 'skills-background',
  section: 'skills',
  aspect: '16:9',
  prompt: `
Create a layered background illustration showing interconnected skill domains.
Visualize four quadrants blending into each other: (1) database cylinders and ETL
pipeline arrows, (2) scatter-plot charts and neural-network diagrams for data
science, (3) shield icons, firewall grids, and lock symbols for cybersecurity,
(4) server racks, cloud icons, and infrastructure schematics. Each quadrant glows
with its own accent color but they all blend seamlessly at the center into a unified
radial burst. Minimal decorative style.
${STYLE_TOKENS}
`.trim(),
};

export const projectsPrompt: VisualPrompt = {
  id: 'projects-visual',
  section: 'projects',
  aspect: '3:2',
  prompt: `
Generate an abstract visual representing software projects in progress. Show
multiple floating translucent cards arranged in a perspective grid — each card
displays stylized icons: a medicine-pill + chart for a healthcare data pipeline,
a brain-circuit for an AI debate engine, a compass for a travel site, and a
dumbbell for a gym app. Behind the cards, faint Git branch lines and code diffs
fade into the background. The feeling is creative energy, building, and iteration.
${STYLE_TOKENS}
`.trim(),
};

export const contactPrompt: VisualPrompt = {
  id: 'contact-visual',
  section: 'contact',
  aspect: '1:1',
  prompt: `
Create an inviting square visual for a "Contact" section. Show a glowing digital
envelope dissolving into a network of connection nodes — symbolizing communication,
collaboration, and global reach. Lines extend outward like sending signals across
the world. Keep it warm, approachable, and elegant. Subtle data-stream motifs
appear in the background.
${STYLE_TOKENS}
`.trim(),
};

// ---------------------------------------------------------------------------
// All prompts as an iterable array
// ---------------------------------------------------------------------------

export const allPrompts: VisualPrompt[] = [
  heroPrompt,
  aboutPrompt,
  skillsPrompt,
  projectsPrompt,
  contactPrompt,
];
