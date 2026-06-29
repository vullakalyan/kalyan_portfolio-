import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SectionHeading from '../../components/common/SectionHeading';
import GlassCard from '../../components/common/GlassCard';
import { useInView } from '../../hooks/useInView';
import { projects } from '../../data/projects';
import { staggerContainer, staggerItem } from '../../utils/animations';

function ProjectCard({ project, index }) {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
    >
      <GlassCard
        hover
        glowBorder
        padding="p-0"
        className="h-full flex flex-col overflow-hidden group"
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
      >
        {/* Gradient header */}
        <div
          className={`relative h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
        >
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: '24px 24px'
            }} />
          </div>

          <div className="text-center z-10">
            <h3 className="font-heading text-2xl font-bold text-white mb-1">
              {project.title}
            </h3>
            <p className="text-text-secondary text-sm">{project.subtitle}</p>
          </div>

          {/* Status badge */}
          <span
            className={`absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full ${
              project.status === 'Live'
                ? 'bg-success/20 text-success border border-success/30'
                : 'bg-primary/20 text-accent border border-primary/30'
            }`}
          >
            {project.status === 'Live' && (
              <span className="inline-block w-1.5 h-1.5 bg-success rounded-full mr-1.5 animate-pulse" />
            )}
            {project.status}
          </span>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.features.map((feature) => (
              <span
                key={feature}
                className="px-2.5 py-1 text-xs rounded-lg bg-primary/10 text-accent border border-primary/20"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Tech stack icons */}
          <div className="flex flex-wrap gap-2 mb-6 mt-auto">
            {project.techStack.map((tech) => (
              <div
                key={tech.name}
                className="w-8 h-8 rounded-lg bg-dark/50 flex items-center justify-center group/tech relative"
                title={tech.name}
              >
                <tech.icon className="w-4 h-4 text-text-muted group-hover/tech:text-white transition-colors" />
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-dark border border-border text-sm font-semibold text-text-secondary hover:text-white hover:border-primary/30 transition-all"
            >
              <FaGithub className="w-4 h-4" />
              GitHub
            </a>
            {project.liveDemo ? (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary to-primary-light text-sm font-semibold text-white shadow-glow hover:shadow-glow-lg transition-shadow"
              >
                <FaExternalLinkAlt className="w-3.5 h-3.5" />
                Live Demo
              </a>
            ) : (
              <div className="flex-1 relative group/demo">
                <button
                  disabled
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-dark-surface text-sm font-semibold text-text-muted border border-border cursor-not-allowed opacity-60"
                >
                  <FaExternalLinkAlt className="w-3.5 h-3.5" />
                  Live Demo
                </button>
                <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-3 py-1 text-xs rounded-lg bg-dark-surface border border-border text-text-secondary opacity-0 group-hover/demo:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                  Coming Soon
                </span>
              </div>
            )}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

export default function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.05 });

  return (
    <section id="projects" className="section-padding relative" aria-label="Projects section">
      <div className="container-custom">
        <SectionHeading
          title="Featured Projects"
          subtitle="Real-world applications built with modern technologies"
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
