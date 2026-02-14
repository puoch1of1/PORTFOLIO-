import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import { about } from '../data/content';

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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-10 sm:mb-12 text-center"
          >
            About
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="space-y-6 sm:space-y-8 text-base sm:text-lg text-secondary-gray leading-relaxed"
          >
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="text-black mt-1 flex-shrink-0" size={24} />
              <div>
                <p className="text-black font-semibold mb-2">{about.name}</p>
                <p className="text-secondary-gray">{about.origin}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <GraduationCap className="text-gray-700 mt-1 flex-shrink-0" size={24} />
              <div>
                <p className="text-black font-semibold mb-2">{about.education.degree}</p>
                <p className="text-secondary-gray">{about.education.institution}</p>
              </div>
            </div>

            <div className="pt-6 border-t border-black/10">
              <p className="text-black/90 leading-relaxed whitespace-pre-line">
                {about.narrative}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

