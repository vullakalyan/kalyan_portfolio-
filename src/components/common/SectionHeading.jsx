import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';

export default function SectionHeading({ title, subtitle, className = '' }) {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <div ref={ref} className={`text-center mb-16 ${className}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="text-text-secondary text-lg max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        className="mt-4 mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-primary to-accent origin-left"
      />
    </div>
  );
}
