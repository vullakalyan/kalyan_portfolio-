import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../../components/common/SectionHeading';
import GlassCard from '../../components/common/GlassCard';
import { useInView } from '../../hooks/useInView';
import { skillCategories } from '../../data/skills';
import { staggerContainer, staggerItem } from '../../utils/animations';

function SkillCard({ skill }) {
  const Icon = skill.icon;

  return (
    <GlassCard hover glowBorder padding="p-4" className="text-center group">
      <div className="flex flex-col items-center gap-3">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${skill.color}15` }}
        >
          <Icon className="w-6 h-6" style={{ color: skill.color }} />
        </div>
        <p className="text-sm font-medium text-text-secondary group-hover:text-white transition-colors">
          {skill.name}
        </p>
        {/* Proficiency bar */}
        <div className="w-full h-1.5 bg-dark rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.proficiency}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="h-full rounded-full"
            style={{
              background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
            }}
          />
        </div>
      </div>
    </GlassCard>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('Frontend');
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const activeSkills =
    skillCategories.find((c) => c.category === activeCategory)?.skills || [];

  return (
    <section id="skills" className="section-padding relative" aria-label="Skills section">
      <div className="container-custom">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Technologies I work with to build modern web applications"
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" role="tablist">
          {skillCategories.map((category) => (
            <button
              key={category.category}
              role="tab"
              aria-selected={activeCategory === category.category}
              onClick={() => setActiveCategory(category.category)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === category.category
                  ? 'bg-gradient-to-r from-primary to-primary-light text-white shadow-glow'
                  : 'bg-dark-surface/60 text-text-secondary hover:text-white hover:bg-dark-surface border border-border'
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div ref={ref}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
              role="tabpanel"
            >
              {activeSkills.map((skill) => (
                <motion.div key={skill.name} variants={staggerItem}>
                  <SkillCard skill={skill} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
