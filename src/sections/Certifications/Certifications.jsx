import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaCertificate } from 'react-icons/fa';
import SectionHeading from '../../components/common/SectionHeading';
import GlassCard from '../../components/common/GlassCard';
import { useInView } from '../../hooks/useInView';
import { certifications } from '../../data/certifications';
import { staggerContainer, staggerItem } from '../../utils/animations';

function CertCard({ cert }) {
  return (
    <GlassCard hover glowBorder padding="p-6" className="h-full flex flex-col group">
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${cert.color}15` }}
      >
        <FaCertificate className="w-5 h-5" style={{ color: cert.color }} />
      </div>

      {/* Content */}
      <h3 className="font-heading text-lg font-bold text-white mb-1">
        {cert.name}
      </h3>
      {cert.subtitle && (
        <p className="text-accent text-xs font-medium mb-2">{cert.subtitle}</p>
      )}
      <p className="text-text-secondary text-sm mb-2">{cert.organization}</p>
      <p className="text-text-muted text-xs mb-4 mt-auto">
        ID: <span className="font-mono text-text-secondary">{cert.certificateId}</span>
      </p>

      {/* View button */}
      <a
        href={cert.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary/10 text-accent text-sm font-semibold border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all"
      >
        <FaExternalLinkAlt className="w-3.5 h-3.5" />
        View Certificate
      </a>
    </GlassCard>
  );
}

export default function Certifications() {
  const [ref, isInView] = useInView({ threshold: 0.05 });

  return (
    <section
      id="certifications"
      className="section-padding relative"
      aria-label="Certifications section"
    >
      <div className="container-custom">
        <SectionHeading
          title="Certifications"
          subtitle="Professional certifications and credentials"
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert) => (
            <motion.div key={cert.id} variants={staggerItem}>
              <CertCard cert={cert} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
