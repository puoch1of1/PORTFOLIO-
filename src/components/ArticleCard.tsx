import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  pubDate: string;
  readingTime?: string;
  link: string;
  index?: number;
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ArticleCard({
  title,
  excerpt,
  pubDate,
  readingTime,
  link,
  index = 0,
}: ArticleCardProps) {
  // Format date to readable format (e.g., "Jan 6, 2025")
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    } catch {
      return dateString;
    }
  };

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      variants={itemVariants}
      className="block group bg-primary-charcoal border-2 border-accent-blue/30 rounded-lg p-4 sm:p-6 hover:border-accent-blue/50 transition-all duration-300"
    >
      {/* Title */}
      <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-2 group-hover:text-accent-blue transition-colors duration-300 line-clamp-2">
        {title}
      </h3>

      {/* Excerpt */}
      <p className="text-sm sm:text-base text-secondary-gray mb-4 line-clamp-2 leading-relaxed">
        {excerpt}
      </p>

      {/* Metadata Row */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-4 border-b border-white/10">
        <div className="flex flex-wrap items-center gap-3 text-xs text-secondary-gray">
          <span>{formatDate(pubDate)}</span>
          {readingTime && (
            <>
              <span className="text-white/20">·</span>
              <span>{readingTime}</span>
            </>
          )}
        </div>
      </div>

      {/* CTA */}
      <div className="flex items-center gap-2 text-accent-blue font-medium text-sm group-hover:gap-3 transition-all duration-300">
        <span>Read on Medium</span>
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
      </div>
    </motion.a>
  );
}
