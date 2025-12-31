import { motion } from 'framer-motion';
import { Shield, Brain, Network, Wrench } from 'lucide-react';
import { skills } from '../data/content';

const skillIcons: Record<string, typeof Shield> = {
  'Cybersecurity': Shield,
  'AI & Data Science': Brain,
  'Infrastructure & Networking': Network,
  'Tools & Technologies': Wrench,
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-primary-charcoal">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-12 sm:mb-16 text-center"
        >
          Skills & Specializations
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {Object.entries(skills).map(([category, skillList]) => {
            const Icon = skillIcons[category] || Wrench;
            return (
              <motion.div
                key={category}
                variants={itemVariants}
                className="bg-primary-dark border border-white/10 rounded-lg p-4 sm:p-6 hover:border-accent-blue/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="p-2 bg-accent-blue/20 rounded-lg flex-shrink-0">
                    <Icon className="text-accent-blue" size={20} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white break-words">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white/5 border border-white/10 rounded-md text-xs sm:text-sm text-secondary-gray hover:border-accent-emerald/50 hover:text-accent-emerald transition-colors break-words"
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

