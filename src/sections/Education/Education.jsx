import { motion } from 'framer-motion';
import { FaGraduationCap, FaStar, FaCalendarAlt } from 'react-icons/fa';
import SectionHeading from '../../components/common/SectionHeading';
import GlassCard from '../../components/common/GlassCard';
import { useInView } from '../../hooks/useInView';
import { education } from '../../data/education';

export default function Education() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="education" className="section-padding relative" aria-label="Education section">
      <div className="container-custom">
        <SectionHeading
          title="Education"
          subtitle="Academic journey and qualifications"
        />

        {/* Vertical Timeline */}
        <div ref={ref} className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20 origin-top"
            style={{ transform: 'translateX(-50%)' }}
          />

          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              className="relative flex items-start gap-6 md:gap-0 mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow"
                >
                  <FaGraduationCap className="w-5 h-5 text-white" />
                </motion.div>
              </div>

              {/* Card - offset to right on mobile, alternating on desktop */}
              <div className="ml-20 md:ml-0 md:w-1/2 md:pr-12 md:odd:ml-auto md:odd:pl-12 md:odd:pr-0">
                <GlassCard hover glowBorder padding="p-6">
                  {/* Date badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 text-accent text-sm font-medium mb-4">
                    <FaCalendarAlt className="w-3.5 h-3.5" />
                    {edu.duration}
                  </div>

                  <h3 className="font-heading text-xl font-bold text-white mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-accent text-sm font-medium mb-1">
                    {edu.field}
                  </p>
                  <p className="text-text-secondary text-sm mb-3">
                    {edu.institution}
                  </p>

                  {/* CGPA */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-success/10 text-success text-sm font-semibold mb-4">
                    <FaStar className="w-3.5 h-3.5" />
                    CGPA: {edu.cgpa}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-text-secondary text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
