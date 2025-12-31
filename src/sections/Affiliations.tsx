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
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export default function Affiliations() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-primary-charcoal">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-12 sm:mb-16 text-center"
        >
          Affiliations & Platforms
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
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
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-primary-dark border border-white/10 rounded-lg p-4 sm:p-6 hover:border-accent-blue/50 transition-all duration-300 group flex flex-col items-center text-center"
              >
                <div className="p-3 sm:p-4 bg-accent-blue/20 rounded-lg mb-3 sm:mb-4 group-hover:bg-accent-blue/30 transition-colors">
                  <Icon className="text-accent-blue" size={28} />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-1 group-hover:text-accent-blue transition-colors break-words">
                  {affiliation.name}
                </h3>
                <p className="text-xs sm:text-sm text-secondary-gray break-words">{affiliation.role}</p>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

