import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ArticleCard from '../components/ArticleCard';
import { Article, mockArticles, mediumUsername } from '../data/content';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        setError(null);

        // RSS feed approach: Convert Medium RSS to JSON using rss2json API
        // Replace MEDIUM_USERNAME with your Medium handle
        // Example: https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@puoch1of1
        const rssUrl = `https://medium.com/feed/@${mediumUsername}`;
        const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
          rssUrl
        )}`;

        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error('Failed to fetch articles from Medium');
        }

        const data = await response.json();

        if (data.items && Array.isArray(data.items)) {
          // Transform RSS items to Article format
          const transformedArticles: Article[] = data.items
            .slice(0, 5) // Get only 5 most recent
            .map((item: any, index: number) => {
              // Extract plain text excerpt from HTML content
              const htmlContent = item.content || item.description || '';
              const plainTextExcerpt = htmlContent
                .replace(/<[^>]*>/g, '') // Remove HTML tags
                .replace(/&nbsp;/g, ' ')
                .replace(/&amp;/g, '&')
                .replace(/&quot;/g, '"')
                .replace(/&#x27;/g, "'")
                .replace(/&lt;/g, '<')
                .replace(/&gt;/g, '>')
                .trim()
                .substring(0, 160) // First ~160 characters
                .concat('...');

              // Estimate reading time (assume ~200 words per minute)
              const wordCount = htmlContent.split(/\s+/).length;
              const readingMinutes = Math.ceil(wordCount / 200);
              const readingTime =
                readingMinutes < 1 ? '< 1 min read' : `${readingMinutes} min read`;

              return {
                id: item.guid || `article-${index}`,
                title: item.title || 'Untitled',
                excerpt: plainTextExcerpt,
                pubDate: item.pubDate || new Date().toISOString(),
                readingTime,
                link: item.link || '#',
                author: item.author || 'Puoch Mabor Makuei',
              };
            });

          setArticles(transformedArticles);
        } else {
          throw new Error('Invalid response format from Medium');
        }
      } catch (err) {
        console.error('Error fetching articles:', err);
        // Fail gracefully: use mock articles as fallback
        setError(null);
        setArticles(mockArticles);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <section
      id="articles"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-primary-dark"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-3 sm:mb-4 text-center"
        >
          Writing
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm sm:text-base text-secondary-gray mb-12 sm:mb-16 max-w-2xl mx-auto px-4"
        >
          Technical thinking, long-form reasoning, and infrastructure insights
        </motion.p>

        {/* Loading State */}
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-12"
          >
            <p className="text-secondary-gray">Loading articles…</p>
          </motion.div>
        )}

        {/* Error State */}
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-12"
          >
            <p className="text-secondary-gray mb-4">{error}</p>
            <p className="text-xs text-secondary-gray">
              Using recent writing samples
            </p>
          </motion.div>
        )}

        {/* Articles Grid */}
        {articles.length > 0 && !loading && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12"
          >
            {articles.map((article) => (
              <ArticleCard
                key={article.id}
                title={article.title}
                excerpt={article.excerpt}
                pubDate={article.pubDate}
                readingTime={article.readingTime}
                link={article.link}
              />
            ))}
          </motion.div>
        )}

        {/* No Articles Fallback */}
        {articles.length === 0 && !loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-12"
          >
            <p className="text-secondary-gray">
              No articles available at the moment.
            </p>
          </motion.div>
        )}

        {/* View All Link */}
        {articles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <a
              href={`https://medium.com/@${mediumUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-accent-blue/30 rounded-lg text-accent-blue font-medium transition-all duration-300 hover:border-accent-blue/50 hover:bg-accent-blue/5"
            >
              <span>View all articles</span>
              <span>→</span>
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
