import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import Button from '../components/Button';
import GeneratedVisual from '../components/GeneratedVisual';
import { personalInfo } from '../data/content';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-warm-50">
      {/* AI-Generated Hero Visual (Nano Banana) */}
      <GeneratedVisual
        visualId="hero-banner"
        as="background"
        className="absolute inset-0"
        alt="AI-generated hero banner showing data streams and cybersecurity motifs"
      >
        {/* Empty — overlay handled by GeneratedVisual */}
      </GeneratedVisual>

      {/* Layered Abstract Background (fallback / overlay) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-warm-50/60 via-white/40 to-accent-subtle/50" />

        {/* Geometric shapes */}
        <motion.div
          className="absolute top-[10%] right-[10%] w-72 h-72 sm:w-[28rem] sm:h-[28rem] rounded-full border border-accent/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-[12%] right-[12%] w-56 h-56 sm:w-80 sm:h-80 rounded-full border border-accent/5"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        />

        {/* Floating accent blobs */}
        <motion.div
          className="absolute top-1/4 left-[15%] w-48 h-48 sm:w-72 sm:h-72 bg-accent/[0.04] rounded-full blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-[15%] w-48 h-48 sm:w-64 sm:h-64 bg-accent-deep/[0.03] rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Large ghost name in background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap ghost-text text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] opacity-40">
          PMM
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-start sm:items-center text-left sm:text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            {/* Eyebrow tag */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 sm:mb-8 rounded-full border border-accent/20 bg-accent/[0.05]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-accent-deep tracking-wide">
                {personalInfo.location}
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold mb-4 sm:mb-6 text-balance text-primary-dark leading-[0.95] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {personalInfo.name}
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-secondary-dark mb-4 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {personalInfo.title}
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-start sm:justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-0 sm:px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {personalInfo.specializations.map((spec, index) => (
                <motion.span
                  key={spec}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/80 backdrop-blur-sm border border-accent/15 rounded-full text-xs sm:text-sm text-secondary-dark hover:border-accent/40 hover:bg-accent-subtle transition-all duration-300"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.05, duration: 0.4 }}
                >
                  {spec}
                </motion.span>
              ))}
            </motion.div>

            <motion.p
              className="text-base sm:text-lg text-secondary-gray mb-8 sm:mb-12 max-w-2xl sm:mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start sm:justify-center items-stretch sm:items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Button href="#projects" variant="primary" icon={ArrowDown}>
                View Projects
              </Button>
              <Button href="#contact" variant="outline" icon={Mail}>
                Contact Me
              </Button>
              <Button href="/PUOCH_MABOR_MAKUEI_CV.pdf" variant="secondary" icon={Download} target="_blank">
                Download CV
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-warm-50 to-transparent" />
    </section>
  );
}

