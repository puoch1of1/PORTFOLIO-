/**
 * Renders an AI-generated image produced by the optional Gemini build script.
 *
 * The component tries several common file extensions before falling back to a
 * built-in gradient, so the site still looks intentional even when generation
 * has not been run or the API returned a different image format.
 */

import { useEffect, useMemo, useState } from 'react';
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
  /** Preferred file extension to try first */
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
  const [candidateIndex, setCandidateIndex] = useState(0);

  const candidateExtensions = useMemo(() => {
    const preferredExtension = ext.startsWith('.') ? ext : `.${ext}`;
    const orderedExtensions = [preferredExtension, '.png', '.jpg', '.jpeg', '.webp'];

    return orderedExtensions.filter((value, index) => orderedExtensions.indexOf(value) === index);
  }, [ext]);

  useEffect(() => {
    setHasError(false);
    setCandidateIndex(0);
  }, [candidateExtensions, visualId]);

  const handleAssetError = () => {
    if (candidateIndex < candidateExtensions.length - 1) {
      setCandidateIndex((current) => current + 1);
      return;
    }

    setHasError(true);
  };

  const src = `/generated/${visualId}${candidateExtensions[candidateIndex]}`;

  const fallback = (
    <div
      className={`bg-gradient-to-br from-accent/5 via-warm-100 to-accent-subtle ${className}`}
      aria-hidden
    >
      {children}
    </div>
  );

  if (hasError) {
    return fallback;
  }

  if (as === 'background') {
    return (
      <div
        className={`relative bg-cover bg-center ${className}`}
        style={{ backgroundImage: `url(${src})` }}
      >
        <div className="absolute inset-0 bg-warm-50/70 backdrop-blur-[2px]" />
        <div className="relative z-10">{children}</div>
        <img
          src={src}
          alt=""
          className="sr-only"
          onError={handleAssetError}
        />
      </div>
    );
  }

  return (
    <motion.img
      src={src}
      alt={alt}
      className={`object-cover ${className}`}
      onError={handleAssetError}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    />
  );
}
