import { motion } from 'framer-motion';
import { Shield, Brain, Network, Wrench, Database, BarChart3 } from 'lucide-react';
import { skills } from '../data/content';

const skillIcons: Record<string, typeof Shield> = {
  'Data Engineering & ETL': Database,
  'Data Science & Analytics': BarChart3,
  'Infrastructure & Security': Shield,
  'Tools & Technologies': Wrench,
  'Cybersecurity': Shield,
  'AI & Data Science': Brain,
  'Infrastructure & Networking': Network,
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
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 bg-warm-100 overflow-hidden">
      {/* Ghost background text */}
      <div className="ghost-text text-[5rem] sm:text-[9rem] md:text-[13rem] bottom-4 -right-4 sm:right-8 opacity-30">
        SKILLS
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <div className="section-accent mb-4" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-wide-heading text-primary-dark">
            Skills & Specializations
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6"
        >
          {Object.entries(skills).map(([category, skillList], index) => {
            const Icon = skillIcons[category] || Wrench;
            return (
              <motion.div
                key={category}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className={`bg-white/80 backdrop-blur-sm border border-warm-200 rounded-xl p-5 sm:p-6 hover:border-accent/25 hover:shadow-lg hover:shadow-accent/5 transition-all duration-500 ${
                  index === 0 ? 'md:row-span-1' : ''
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/15 to-accent/5 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-accent" size={18} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-primary-dark break-words">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-warm-50 border border-warm-200 rounded-lg text-xs sm:text-sm text-secondary-dark hover:border-accent/30 hover:text-accent-deep hover:bg-accent-subtle transition-all duration-300 break-words cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

