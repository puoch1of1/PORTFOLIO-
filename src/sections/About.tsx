import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import GeneratedVisual from '../components/GeneratedVisual';
import { about } from '../data/content';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 bg-warm-100 overflow-hidden">
      {/* Ghost background text */}
      <div className="ghost-text text-[6rem] sm:text-[10rem] md:text-[14rem] top-8 -left-4 sm:left-8 opacity-30">
        ABOUT
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={itemVariants} className="mb-10 sm:mb-14">
            <div className="section-accent mb-4" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-wide-heading text-primary-dark">
              About
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
            <motion.div
              variants={itemVariants}
              className="bg-white/70 backdrop-blur-sm border border-warm-200 rounded-xl p-5 sm:p-6 hover:border-accent/20 hover:shadow-md hover:shadow-accent/5 transition-all duration-500"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <MapPin className="text-accent" size={20} />
              </div>
              <p className="text-primary-dark font-semibold mb-1">{about.name}</p>
              <p className="text-secondary-gray text-sm">{about.origin}</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white/70 backdrop-blur-sm border border-warm-200 rounded-xl p-5 sm:p-6 hover:border-accent/20 hover:shadow-md hover:shadow-accent/5 transition-all duration-500"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <GraduationCap className="text-accent" size={20} />
              </div>
              <p className="text-primary-dark font-semibold mb-1">{about.education.degree}</p>
              <p className="text-secondary-gray text-sm">{about.education.institution}</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-accent to-accent-deep rounded-xl p-5 sm:p-6 text-white flex flex-col justify-center"
            >
              <p className="text-sm font-medium leading-relaxed opacity-90">
                {about.philosophy}
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
              <div className="md:col-span-3">
                <div className="absolute -left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/40 via-accent/10 to-transparent hidden sm:block" />
                <div className="sm:pl-8">
                  <p className="text-base sm:text-lg text-secondary-dark leading-relaxed whitespace-pre-line">
                    {about.narrative}
                  </p>
                </div>
              </div>
              <div className="md:col-span-2">
                <GeneratedVisual
                  visualId="about-visual"
                  alt="AI-generated visual representing data engineering and global connectivity"
                  className="w-full rounded-xl shadow-lg border border-warm-200"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

