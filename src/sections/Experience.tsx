import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { experiences } from '../data/content';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Ghost background text */}
      <div className="ghost-text text-[5rem] sm:text-[9rem] md:text-[13rem] top-6 right-0 sm:-right-4 opacity-30">
        WORK
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <div className="section-accent mb-4" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-wide-heading text-primary-dark">
            Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-8 sm:space-y-10"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? -30 : 30 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
                }}
                className="relative flex items-start"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-8 w-3 h-3 bg-accent rounded-full border-[3px] border-white shadow-sm shadow-accent/30 transform -translate-x-1/2 mt-6 z-10" />

                {/* Content card */}
                <div className="ml-14 md:ml-16 flex-1">
                  <motion.div
                    className="bg-white border border-warm-200 rounded-xl p-5 sm:p-6 hover:border-accent/25 hover:shadow-lg hover:shadow-accent/5 transition-all duration-500 group"
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/15 transition-colors">
                        <Briefcase className="text-accent" size={16} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl font-semibold text-primary-dark mb-1 break-words">
                          {exp.title}
                        </h3>
                        <p className="text-secondary-dark font-medium break-words">
                          {exp.organization}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-secondary-gray mb-4">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 bg-warm-100 rounded-full">
                        <Calendar size={12} className="text-accent" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 px-2.5 py-1 bg-warm-100 rounded-full">
                        <MapPin size={12} className="text-accent" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-secondary-gray mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {exp.highlights && exp.highlights.length > 0 && (
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-secondary-gray flex items-start gap-2"
                          >
                            <span className="text-accent mt-1 text-xs">◆</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

