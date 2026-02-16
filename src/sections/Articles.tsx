import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, Calendar } from 'lucide-react';
import { articles } from '../data/content';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Articles() {
  return (
    <section id="articles" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-3 sm:mb-4 text-center"
        >
          Articles
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm sm:text-base text-secondary-gray mb-12 sm:mb-16 max-w-2xl mx-auto px-4"
        >
          Thoughts on data engineering, infrastructure, and lessons from the field
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {articles.map((article) => (
            <motion.a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-gray-50 border border-black/10 rounded-lg p-4 sm:p-6 hover:border-black/30 transition-all duration-300 group flex flex-col"
            >
              <div className="flex items-center gap-3 text-xs text-secondary-gray mb-3">
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {article.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {article.readTime}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-black mb-2 group-hover:text-gray-700 transition-colors">
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
                      className="px-2 py-0.5 bg-black/5 border border-black/10 rounded-full text-xs text-secondary-gray"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-secondary-gray group-hover:text-black transition-colors flex-shrink-0 ml-2"
                />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
