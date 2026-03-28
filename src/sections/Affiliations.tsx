import { motion } from 'framer-motion';
import {
  BarChart3,
  Database,
  Github,
  Code,
  Linkedin,
  ExternalLink,
} from 'lucide-react';
import { affiliations } from '../data/content';

const iconMap: Record<string, typeof BarChart3> = {
  'chart-bar': BarChart3,
  'database': Database,
  'github': Github,
  'code': Code,
  'linkedin': Linkedin,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Affiliations() {
  return (
    <section className="relative py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <div className="section-accent mb-4" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-wide-heading text-primary-dark">
            Affiliations & Platforms
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5"
        >
          {affiliations.map((affiliation) => {
            const Icon = iconMap[affiliation.icon] || ExternalLink;
            return (
              <motion.a
                key={affiliation.name}
                href={affiliation.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-warm-50 border border-warm-200 rounded-xl p-4 sm:p-5 hover:border-accent/25 hover:shadow-lg hover:shadow-accent/5 transition-all duration-500 group flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors duration-300">
                  <Icon className="text-accent" size={22} />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-primary-dark mb-0.5 group-hover:text-accent-deep transition-colors break-words">
                  {affiliation.name}
                </h3>
                <p className="text-xs text-secondary-gray break-words">{affiliation.role}</p>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

