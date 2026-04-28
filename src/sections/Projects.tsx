import { motion } from 'framer-motion';
import { Code, Users, Github, Lock, ArrowUpRight } from 'lucide-react';
import GeneratedVisual from '../components/GeneratedVisual';
import { projects } from '../data/content';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Projects() {
  const featuredProject = projects.find(p => p.isFeatured);
  const collaborativeProjects = projects.filter(p => !p.isFeatured && p.isCollaborative && !p.isPrivate);
  const personalProjects = projects.filter(p => !p.isFeatured && !p.isCollaborative && !p.isPrivate);
  const privateProjects = projects.filter(p => !p.isFeatured && p.isPrivate);

  return (
    <section
      id="projects"
      className="relative py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
    >
      {/* AI-Generated Projects Visual (Nano Banana) */}
      <div className="absolute top-12 right-8 w-64 h-64 md:w-80 md:h-80 opacity-20 pointer-events-none hidden lg:block">
        <GeneratedVisual
          visualId="projects-visual"
          alt="AI-generated abstract project cards"
          className="w-full h-full rounded-2xl"
        />
      </div>

      {/* Ghost background text */}
      <div className="ghost-text text-[5rem] sm:text-[9rem] md:text-[14rem] top-8 left-0 sm:-left-4 opacity-30">
        BUILD
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <div className="section-accent mb-4" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-wide-heading text-primary-dark mb-3 sm:mb-4">
            Projects
          </h2>
          <p className="text-sm sm:text-base text-secondary-gray max-w-2xl leading-relaxed">
            Real-world problem solving, systems thinking, and engineering work in progress
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-10"
        >
          {/* Featured Project - full-width split layout */}
          {featuredProject && (
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-accent-subtle via-white to-warm-50 border border-accent/15 rounded-2xl p-6 sm:p-8 md:p-10 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500"
            >
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-10">
                {/* Left - Info */}
                <div className="md:col-span-3">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-xs font-medium text-accent-deep">
                      {featuredProject.status}
                    </span>
                    {featuredProject.expectedCompletion && (
                      <span className="text-xs text-secondary-gray">
                        Expected: {featuredProject.expectedCompletion}
                      </span>
                    )}
                    {featuredProject.isCollaborative && (
                      <span className="text-xs text-secondary-gray flex items-center gap-1">
                        <Users size={12} className="text-accent" />
                        Collaborative
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-primary-dark mb-4 leading-tight">
                    {featuredProject.title}
                  </h3>

                  <p className="text-sm sm:text-base text-secondary-gray leading-relaxed mb-6">
                    {featuredProject.overview}
                  </p>

                  {featuredProject.github && (
                    <a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-deep transition-colors font-medium"
                    >
                      <Github size={16} />
                      View on GitHub
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>

                {/* Right - Technical details */}
                <div className="md:col-span-2 space-y-5">
                  <div>
                    <h4 className="text-xs font-semibold text-accent uppercase tracking-editorial mb-2 flex items-center gap-2">
                      <Code size={14} />
                      Technical Focus
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {featuredProject.technicalFocus.map((item) => (
                        <span key={item} className="px-2.5 py-1 bg-white border border-warm-200 rounded-lg text-xs text-secondary-dark">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-accent uppercase tracking-editorial mb-2">
                      My Role
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {featuredProject.role.map((item) => (
                        <span key={item} className="px-2.5 py-1 bg-accent/5 border border-accent/10 rounded-lg text-xs text-accent-deep">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Collaborative Projects */}
          {collaborativeProjects.length > 0 && (
            <div>
              <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Users size={16} className="text-accent" />
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-semibold text-primary-dark">
                  Collaborative Projects
                </h3>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {collaborativeProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                    className={`bg-white border border-warm-200 rounded-xl p-5 sm:p-6 hover:border-accent/25 hover:shadow-lg hover:shadow-accent/5 transition-all duration-500 ${
                      index === 0 && collaborativeProjects.length > 2 ? 'md:col-span-2' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h4 className="text-lg sm:text-xl font-semibold text-primary-dark flex-1">
                        {project.title}
                      </h4>
                      <span className="px-2.5 py-1 bg-warm-100 border border-warm-200 rounded-full text-xs text-secondary-dark font-medium whitespace-nowrap">
                        {project.status}
                      </span>
                    </div>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-accent-deep transition-colors mb-3 font-medium"
                      >
                        <Github size={13} />
                        View on GitHub
                      </a>
                    )}

                    <p className="text-sm text-secondary-gray leading-relaxed mb-4">
                      {project.overview}
                    </p>

                    <div className="space-y-3">
                      <div>
                        <h5 className="text-xs font-semibold text-accent uppercase tracking-editorial mb-1.5 flex items-center gap-1.5">
                          <Code size={12} />
                          Focus
                        </h5>
                        <p className="text-xs text-secondary-gray">
                          {project.technicalFocus.join(' / ')}
                        </p>
                      </div>
                      <div>
                        <h5 className="text-xs font-semibold text-secondary-dark mb-1.5">My Role</h5>
                        <p className="text-xs text-secondary-gray">
                          {project.role.join(' / ')}
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
              <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Code size={16} className="text-accent" />
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-semibold text-primary-dark">
                  Personal Projects
                </h3>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {personalProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                    className="bg-white border border-warm-200 rounded-xl p-5 sm:p-6 hover:border-accent/25 hover:shadow-lg hover:shadow-accent/5 transition-all duration-500"
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h4 className="text-lg sm:text-xl font-semibold text-primary-dark flex-1">
                        {project.title}
                      </h4>
                      <span className="px-2.5 py-1 bg-warm-100 border border-warm-200 rounded-full text-xs text-secondary-dark font-medium whitespace-nowrap">
                        {project.status}
                      </span>
                    </div>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-accent-deep transition-colors mb-3 font-medium"
                      >
                        <Github size={13} />
                        View on GitHub
                      </a>
                    )}

                    <p className="text-sm text-secondary-gray leading-relaxed mb-4">
                      {project.overview}
                    </p>

                    <div className="space-y-3">
                      <div>
                        <h5 className="text-xs font-semibold text-accent uppercase tracking-editorial mb-1.5 flex items-center gap-1.5">
                          <Code size={12} />
                          Focus
                        </h5>
                        <p className="text-xs text-secondary-gray">
                          {project.technicalFocus.join(' / ')}
                        </p>
                      </div>
                      <div>
                        <h5 className="text-xs font-semibold text-secondary-dark mb-1.5">My Role</h5>
                        <p className="text-xs text-secondary-gray">
                          {project.role.join(' / ')}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Private Projects - stylized locked overlay */}
          {privateProjects.length > 0 && (
            <div>
              <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-warm-200 flex items-center justify-center">
                  <Lock size={16} className="text-secondary-gray" />
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-semibold text-primary-dark">
                  Private Projects
                </h3>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {privateProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    className="relative bg-warm-50 border border-warm-200 rounded-xl p-5 sm:p-6 overflow-hidden"
                  >
                    {/* Blurred content */}
                    <div className="blur-[6px] opacity-40 pointer-events-none select-none">
                      <h4 className="text-lg font-semibold text-primary-dark mb-2">{project.title}</h4>
                      <p className="text-sm text-secondary-gray mb-3">{project.overview}</p>
                      <p className="text-xs text-secondary-gray">{project.technicalFocus.join(' / ')}</p>
                    </div>

                    {/* Stylized locked overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-warm-100/80 via-transparent to-warm-100/80 backdrop-blur-[1px] flex flex-col items-center justify-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-white border border-warm-200 flex items-center justify-center shadow-sm">
                        <Lock size={20} className="text-secondary-gray" />
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-medium text-primary-dark">Private Project</p>
                        <p className="text-xs text-secondary-gray mt-1">Details available upon request</p>
                      </div>
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
