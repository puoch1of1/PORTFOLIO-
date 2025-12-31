import { motion } from 'framer-motion';
import { Code, Users } from 'lucide-react';
import { projects } from '../data/content';

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

export default function Projects() {
  const featuredProject = projects.find(p => p.isFeatured);
  const otherProjects = projects.filter(p => !p.isFeatured);

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-primary-dark">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-3 sm:mb-4 text-center"
        >
          Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm sm:text-base text-secondary-gray mb-12 sm:mb-16 max-w-2xl mx-auto px-4"
        >
          Real-world problem solving, systems thinking, and engineering work in progress
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8"
        >
          {/* Featured Project */}
          {featuredProject && (
            <motion.div
              variants={itemVariants}
              className="bg-primary-charcoal border-2 border-accent-blue/30 rounded-lg p-4 sm:p-6 md:p-8 hover:border-accent-blue/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4 sm:mb-5">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-white break-words">
                  {featuredProject.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2 sm:px-3 py-1 bg-accent-emerald/20 border border-accent-emerald/40 rounded-full text-xs text-accent-emerald font-medium whitespace-nowrap">
                    {featuredProject.status}
                  </span>
                  {featuredProject.expectedCompletion && (
                    <span className="text-xs text-secondary-gray break-words">
                      (Expected: {featuredProject.expectedCompletion})
                    </span>
                  )}
                  {featuredProject.isCollaborative && (
                    <span className="text-xs text-secondary-gray flex items-center gap-1 whitespace-nowrap">
                      <Users size={12} className="flex-shrink-0" />
                      Collaborative project
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Overview</h4>
                  <p className="text-sm sm:text-base text-secondary-gray leading-relaxed break-words">{featuredProject.overview}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                    <Code size={16} className="text-accent-emerald flex-shrink-0" />
                    Focus
                  </h4>
                  <p className="text-sm sm:text-base text-secondary-gray break-words">
                    {featuredProject.technicalFocus.join(' · ')}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">My Role</h4>
                  <p className="text-sm sm:text-base text-secondary-gray break-words">
                    {featuredProject.role.join(' · ')}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Other Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {otherProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-primary-charcoal border border-white/10 rounded-lg p-4 sm:p-6 hover:border-accent-blue/50 transition-all duration-300"
              >
                <div className="mb-3 sm:mb-4">
                  <div className="flex items-start justify-between gap-2 sm:gap-3 mb-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-white break-words flex-1 min-w-0">
                      {project.title}
                    </h3>
                    <span className="px-2 py-1 bg-accent-emerald/20 border border-accent-emerald/40 rounded text-xs text-accent-emerald font-medium whitespace-nowrap flex-shrink-0">
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-white/80 mb-1">Overview</h4>
                    <p className="text-sm text-secondary-gray leading-relaxed break-words">{project.overview}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-white/80 mb-1 flex items-center gap-2">
                      <Code size={14} className="text-accent-emerald flex-shrink-0" />
                      Focus
                    </h4>
                    <p className="text-sm text-secondary-gray break-words">
                      {project.technicalFocus.join(' · ')}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-white/80 mb-1">My Role</h4>
                    <p className="text-sm text-secondary-gray break-words">
                      {project.role.join(' · ')}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
