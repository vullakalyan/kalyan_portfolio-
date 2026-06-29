import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { personalInfo } from '../../data/personalInfo';
import { navItems } from '../../data/navigation';
import { useInView } from '../../hooks/useInView';

export default function Footer() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="relative bg-dark-surface/30 backdrop-blur-md border-t border-border pt-16 pb-8" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
        >
          {/* Brand & Bio */}
          <div className="lg:col-span-2">
            <a 
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="inline-flex items-center gap-3 mb-6 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow">
                <span className="font-heading text-lg font-bold text-white">
                  {personalInfo.initials}
                </span>
              </div>
              <span className="font-heading text-xl font-bold text-white group-hover:text-accent transition-colors">
                {personalInfo.name}
              </span>
            </a>
            <p className="text-text-secondary text-sm leading-relaxed max-w-sm mb-6">
              {personalInfo.tagline} {personalInfo.careerObjective.substring(0, 100)}...
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: FaGithub, href: personalInfo.social.github, label: 'GitHub' },
                { icon: FaLinkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
                { icon: FaEnvelope, href: `mailto:${personalInfo.social.email}`, label: 'Email' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : "_blank"}
                  rel={social.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-text-secondary hover:bg-primary/20 hover:text-accent transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navItems.slice(0, 4).map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-text-secondary hover:text-accent transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-6 invisible md:visible">More</h3>
            <ul className="space-y-3">
              {navItems.slice(4).map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-text-secondary hover:text-accent transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={personalInfo.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent transition-colors text-sm font-medium"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-text-muted text-sm">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-text-muted text-sm flex items-center gap-1.5">
            Built with <FaHeart className="text-red-500 w-3.5 h-3.5" /> using React, Tailwind CSS, & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
