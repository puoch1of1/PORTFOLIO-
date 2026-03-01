import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, Calendar } from 'lucide-react';
import { articles } from '../data/content';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Articles() {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <section id="articles" className="relative py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 bg-warm-100 overflow-hidden">
      {/* Ghost background text */}
      <div className="ghost-text text-[5rem] sm:text-[9rem] md:text-[13rem] bottom-4 left-0 sm:-left-4 opacity-30">
        WRITE
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <div className="section-accent mb-4" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-wide-heading text-primary-dark mb-3 sm:mb-4">
            Articles
          </h2>
          <p className="text-sm sm:text-base text-secondary-gray max-w-2xl leading-relaxed">
            Thoughts on data engineering, infrastructure, and lessons from the field
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Editorial grid: featured large + smaller cards */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 sm:gap-6">
            {/* Featured article — spans 3 columns */}
            {featured && (
              <motion.a
                href={featured.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="lg:col-span-3 bg-white border border-warm-200 rounded-xl p-6 sm:p-8 hover:border-accent/25 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 group flex flex-col"
              >
                <div className="flex items-center gap-3 text-xs text-secondary-gray mb-4">
                  <span className="px-2.5 py-1 bg-accent/10 border border-accent/15 rounded-full text-accent-deep font-medium">
                    Featured
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} className="text-accent" />
                    {featured.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {featured.readTime}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary-dark mb-3 group-hover:text-accent-deep transition-colors leading-tight">
                  {featured.title}
                </h3>

                <p className="text-sm sm:text-base text-secondary-gray leading-relaxed mb-6 flex-1">
                  {featured.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {featured.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-warm-50 border border-warm-200 rounded-lg text-xs text-secondary-dark"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <ArrowUpRight size={14} className="text-accent group-hover:text-white transition-colors" />
                  </div>
                </div>
              </motion.a>
            )}

            {/* Secondary articles — stacked in 2 columns */}
            <div className="lg:col-span-2 flex flex-col gap-5 sm:gap-6">
              {rest.map((article) => (
                <motion.a
                  key={article.id}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ y: -3 }}
                  className="bg-white border border-warm-200 rounded-xl p-5 sm:p-6 hover:border-accent/25 hover:shadow-lg hover:shadow-accent/5 transition-all duration-500 group flex-1 flex flex-col"
                >
                  <div className="flex items-center gap-3 text-xs text-secondary-gray mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} className="text-accent" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold text-primary-dark mb-2 group-hover:text-accent-deep transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-sm text-secondary-gray leading-relaxed mb-4 flex-1">
                    {article.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-warm-50 border border-warm-200 rounded-lg text-xs text-secondary-gray"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-secondary-gray group-hover:text-accent transition-colors flex-shrink-0 ml-2"
                    />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
