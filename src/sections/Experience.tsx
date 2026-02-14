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

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-12 sm:mb-16 text-center"
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line - hidden on mobile, visible on desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-black/10 transform -translate-x-1/2" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative flex items-start gap-6 md:gap-8"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-black rounded-full border-4 border-white transform md:-translate-x-1/2 z-10" />

                {/* Content card */}
                <div
                  className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div className="bg-gray-50 border border-black/10 rounded-lg p-4 sm:p-6 hover:border-black/30 transition-all duration-300">
                    <div className="flex items-start gap-3 mb-4">
                      <Briefcase className="text-black flex-shrink-0 mt-1" size={20} />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl font-semibold text-black mb-1 break-words">
                          {exp.title}
                        </h3>
                        <p className="text-gray-700 font-medium mb-2 break-words">
                          {exp.organization}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-secondary-gray mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="flex-shrink-0" />
                        <span className="break-words">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="flex-shrink-0" />
                        <span className="break-words">{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-secondary-gray mb-4 leading-relaxed break-words">
                      {exp.description}
                    </p>

                    {exp.highlights && exp.highlights.length > 0 && (
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-secondary-gray flex items-start gap-2"
                          >
                            <span className="text-gray-700 mt-1">▸</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

