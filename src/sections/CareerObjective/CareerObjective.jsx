import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import GlassCard from '../../components/common/GlassCard';
import { useInView } from '../../hooks/useInView';
import { personalInfo } from '../../data/personalInfo';

export default function CareerObjective() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section className="section-padding relative" aria-label="Career objective">
      <div className="container-custom max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <GlassCard
            hover={false}
            padding="p-8 sm:p-12"
            className="relative overflow-hidden text-center"
          >
            {/* Gradient border glow */}
            <div className="absolute inset-0 rounded-2xl p-[1px] pointer-events-none">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 opacity-50" style={{
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'exclude',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                padding: '1px',
              }} />
            </div>

            {/* Background gradient accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            {/* Quote icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-6"
            >
              <FaQuoteLeft className="w-6 h-6 text-accent" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-heading text-2xl sm:text-3xl font-bold text-white mb-6"
            >
              Career Objective
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-text-secondary text-lg sm:text-xl leading-relaxed italic max-w-3xl mx-auto"
            >
              &ldquo;{personalInfo.careerObjective}&rdquo;
            </motion.p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
