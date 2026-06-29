import { motion } from 'framer-motion';
import SectionHeading from '../../components/common/SectionHeading';
import GlassCard from '../../components/common/GlassCard';
import { useInView } from '../../hooks/useInView';
import { personalInfo, stats } from '../../data/personalInfo';
import { staggerContainer, staggerItem } from '../../utils/animations';

export default function About() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="section-padding relative" aria-label="About section">
      <div className="container-custom">
        <SectionHeading title="About Me" />

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-5"
          >
            {personalInfo.aboutBio.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.2, ease: 'easeOut' }}
                className="text-text-secondary leading-relaxed text-base lg:text-lg"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={staggerItem}>
                <GlassCard
                  hover
                  glowBorder
                  padding="p-4"
                  className="text-center h-full"
                >
                  <span className="text-2xl mb-2 block" role="img" aria-hidden="true">
                    {stat.icon}
                  </span>
                  <p className="text-sm font-medium text-text-secondary">
                    {stat.label}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
