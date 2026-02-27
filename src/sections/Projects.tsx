import { motion } from 'framer-motion';
import { Code, Users, Github } from 'lucide-react';
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
  const collaborativeProjects = projects.filter(p => !p.isFeatured && p.isCollaborative && !p.isPrivate);
  const personalProjects = projects.filter(p => !p.isFeatured && !p.isCollaborative && !p.isPrivate);
  const privateProjects = projects.filter(p => !p.isFeatured && p.isPrivate);

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white"
    >
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
              className="bg-gray-50 border-2 border-black/20 rounded-lg p-4 sm:p-6 md:p-8 hover:border-black/40 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4 sm:mb-5">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-black break-words">
                  {featuredProject.title}
                </h3>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2 sm:px-3 py-1 bg-gray-200 border border-gray-400 rounded-full text-xs text-gray-700 font-medium whitespace-nowrap">
                    {featuredProject.status}
                  </span>

                  {featuredProject.expectedCompletion && (
                    <span className="text-xs text-secondary-gray">
                      (Expected: {featuredProject.expectedCompletion})
                    </span>
                  )}

                  {featuredProject.isCollaborative && (
                    <span className="text-xs text-secondary-gray flex items-center gap-1">
                      <Users size={12} />
                      Collaborative project
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-black mb-2">Overview</h4>
                  <p className="text-sm sm:text-base text-secondary-gray leading-relaxed">
                    {featuredProject.overview}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-black mb-2 flex items-center gap-2">
                    <Code size={16} className="text-gray-700" />
                    Focus
                  </h4>
                  <p className="text-sm sm:text-base text-secondary-gray">
                    {featuredProject.technicalFocus.join(' · ')}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-black mb-2">My Role</h4>
                  <p className="text-sm sm:text-base text-secondary-gray">
                    {featuredProject.role.join(' · ')}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Collaborative Projects */}
          {collaborativeProjects.length > 0 && (
            <div>
              <motion.h3
                variants={itemVariants}
                className="text-2xl sm:text-3xl font-semibold mb-4 flex items-center gap-2 text-black"
              >
                <Users size={28} className="text-gray-700" />
                Collaborative Projects
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
                {collaborativeProjects.map(project => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    className="bg-gray-50 border border-black/10 rounded-lg p-4 sm:p-6 hover:border-black/30 transition-all duration-300"
                  >
                    <div className="mb-3 sm:mb-4">
                      <div className="flex items-start justify-between gap-2 sm:gap-3 mb-2">
                        <h3 className="text-lg sm:text-xl font-semibold text-black flex-1">
                          {project.title}
                        </h3>

                        <div className="flex flex-col items-end gap-1">
                          <span className="px-2 py-1 bg-gray-200 border border-gray-400 rounded text-xs text-gray-700 font-medium whitespace-nowrap">
                            {project.status}
                          </span>
                          {project.expectedCompletion && (
                            <span className="text-xs text-secondary-gray">
                              (Expected: {project.expectedCompletion})
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 hover:underline mb-2"
                        >
                          <Github size={14} />
                          View on GitHub
                        </a>
                      )}
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-black/80 mb-1">
                          Overview
                        </h4>
                        <p className="text-sm text-secondary-gray leading-relaxed">
                          {project.overview}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-black/80 mb-1 flex items-center gap-2">
                          <Code size={14} className="text-gray-700" />
                          Focus
                        </h4>
                        <p className="text-sm text-secondary-gray">
                          {project.technicalFocus.join(' · ')}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-black/80 mb-1">
                          My Role
                        </h4>
                        <p className="text-sm text-secondary-gray">
                          {project.role.join(' · ')}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Personal Projects */}
          {personalProjects.length > 0 && (
            <div>
              <motion.h3
                variants={itemVariants}
                className="text-2xl sm:text-3xl font-semibold mb-4 text-black"
              >
                Personal Projects
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
                {personalProjects.map(project => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    className="bg-gray-50 border border-black/10 rounded-lg p-4 sm:p-6 hover:border-black/30 transition-all duration-300"
                  >
                    <div className="mb-3 sm:mb-4">
                      <div className="flex items-start justify-between gap-2 sm:gap-3 mb-2">
                        <h3 className="text-lg sm:text-xl font-semibold text-black flex-1">
                          {project.title}
                        </h3>

                        <span className="px-2 py-1 bg-gray-200 border border-gray-400 rounded text-xs text-gray-700 font-medium whitespace-nowrap">
                          {project.status}
                        </span>
                      </div>
                      
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 hover:underline mb-2"
                        >
                          <Github size={14} />
                          View on GitHub
                        </a>
                      )}
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-black/80 mb-1">
                          Overview
                        </h4>
                        <p className="text-sm text-secondary-gray leading-relaxed">
                          {project.overview}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-black/80 mb-1 flex items-center gap-2">
                          <Code size={14} className="text-gray-700" />
                          Focus
                        </h4>
                        <p className="text-sm text-secondary-gray">
                          {project.technicalFocus.join(' · ')}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-black/80 mb-1">
                          My Role
                        </h4>
                        <p className="text-sm text-secondary-gray">
                          {project.role.join(' · ')}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Private Projects */}
          {privateProjects.length > 0 && (
            <div>
              <motion.h3
                variants={itemVariants}
                className="text-2xl sm:text-3xl font-semibold mb-4 text-black"
              >
                Private Projects
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {privateProjects.map(project => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    className="relative bg-gray-50 border border-black/10 rounded-lg p-4 sm:p-6 overflow-hidden transition-all duration-300"
                  >
                    {/* Blur content if private */}
                    <div className="blur-sm pointer-events-none select-none">
                      <div className="mb-3 sm:mb-4">
                        <div className="flex items-start justify-between gap-2 sm:gap-3 mb-2">
                          <h3 className="text-lg sm:text-xl font-semibold text-black flex-1">
                            {project.title}
                          </h3>

                          <span className="px-2 py-1 bg-gray-200 border border-gray-400 rounded text-xs text-gray-700 font-medium">
                            {project.status}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3 sm:space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-black/80 mb-1">
                            Overview
                          </h4>
                          <p className="text-sm text-secondary-gray leading-relaxed">
                            {project.overview}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-black/80 mb-1 flex items-center gap-2">
                            <Code size={14} className="text-gray-700" />
                            Focus
                          </h4>
                          <p className="text-sm text-secondary-gray">
                            {project.technicalFocus.join(' · ')}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-black/80 mb-1">
                            My Role
                          </h4>
                          <p className="text-sm text-secondary-gray">
                            {project.role.join(' · ')}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Private overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="bg-black/70 text-white text-xs sm:text-sm px-4 py-2 rounded-full backdrop-blur">
                        Private Project
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
