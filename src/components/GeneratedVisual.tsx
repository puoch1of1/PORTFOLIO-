/**
 * GeneratedVisual component
 *
 * Renders an AI-generated image produced by the Nano Banana build script.
 * Images are served from /generated/<id>.<ext> after running
 * `npm run generate-visuals`.
 *
 * Falls back to a subtle gradient placeholder when the image hasn't been
 * generated yet, so the site never looks broken.
 */

import { useState } from 'react';
import { motion } from 'framer-motion';

interface GeneratedVisualProps {
  /** The visual ID that matches the filename stem in public/generated/ */
  visualId: string;
  /** Optional alt text for accessibility */
  alt?: string;
  /** Tailwind / CSS class names applied to the wrapper */
  className?: string;
  /** How to render: as an <img>, or as a CSS background on a <div> */
  as?: 'img' | 'background';
  /** Children rendered on top when as="background" */
  children?: React.ReactNode;
  /** File extension (default: ".png") */
  ext?: string;
}

export default function GeneratedVisual({
  visualId,
  alt = 'AI-generated portfolio visual',
  className = '',
  as = 'img',
  children,
  ext = '.png',
}: GeneratedVisualProps) {
  const [hasError, setHasError] = useState(false);
  const src = `/generated/${visualId}${ext}`;

  // -----------------------------------------------------------------------
  // Fallback gradient (shown when image is missing or hasn't been generated)
  // -----------------------------------------------------------------------
  const fallback = (
    <div
      className={`bg-gradient-to-br from-accent/5 via-warm-100 to-accent-subtle ${className}`}
      aria-hidden
    >
      {children}
    </div>
  );

  if (hasError) return fallback;

  // -----------------------------------------------------------------------
  // Render as CSS background
  // -----------------------------------------------------------------------
  if (as === 'background') {
    return (
      <div
        className={`relative bg-cover bg-center ${className}`}
        style={{ backgroundImage: `url(${src})` }}
      >
        {/* Overlay to maintain text readability */}
        <div className="absolute inset-0 bg-warm-50/70 backdrop-blur-[2px]" />
        <div className="relative z-10">{children}</div>
        {/* Hidden img to detect load errors */}
        <img
          src={src}
          alt=""
          className="sr-only"
          onError={() => setHasError(true)}
        />
      </div>
    );
  }

  // -----------------------------------------------------------------------
  // Render as <img>
  // -----------------------------------------------------------------------
  return (
    <motion.img
      src={src}
      alt={alt}
      className={`object-cover ${className}`}
      onError={() => setHasError(true)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    />
  );
}
