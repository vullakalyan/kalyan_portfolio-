import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaDownload } from 'react-icons/fa';
import { navItems } from '../../data/navigation';
import { personalInfo } from '../../data/personalInfo';
import { useScrollSpy } from '../../hooks/useScrollSpy';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [resumeExists, setResumeExists] = useState(true);
  const activeSection = useScrollSpy(
    navItems.map((item) => item.id),
    120
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if resume exists
  useEffect(() => {
    fetch('/resume.pdf', { method: 'HEAD' })
      .then((res) => {
        if (!res.ok) setResumeExists(false);
      })
      .catch(() => setResumeExists(false));
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-300 ${
        isScrolled
          ? 'bg-dark/80 backdrop-blur-xl border-b border-border shadow-glass'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container-custom flex items-center justify-between h-16 lg:h-20 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="relative flex items-center gap-2 group"
          aria-label="Go to home"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:shadow-glow transition-shadow duration-300">
            <span className="font-heading text-lg font-bold text-white">
              {personalInfo.initials}
            </span>
          </div>
          <span className="font-heading text-lg font-semibold text-white hidden sm:block">
            {personalInfo.name}
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-accent'
                    : 'text-text-secondary hover:text-white'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-accent"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Resume Button */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="relative group">
            <a
              href={resumeExists ? personalInfo.resumePath : undefined}
              target={resumeExists ? '_blank' : undefined}
              rel={resumeExists ? 'noopener noreferrer' : undefined}
              className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
                resumeExists
                  ? 'bg-gradient-to-r from-primary to-primary-light text-white shadow-glow hover:shadow-glow-lg cursor-pointer'
                  : 'bg-dark-surface text-text-muted border border-border cursor-default'
              }`}
              aria-disabled={!resumeExists}
            >
              <FaDownload className="w-3.5 h-3.5" />
              Resume
            </a>
            {!resumeExists && (
              <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 px-3 py-1 text-xs rounded-lg bg-dark-surface border border-border text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Resume coming soon
              </span>
            )}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden w-10 h-10 flex items-center justify-center text-white hover:text-accent transition-colors cursor-pointer"
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-dark-surface/95 backdrop-blur-xl border-t border-border overflow-hidden"
          >
            <ul className="flex flex-col p-4 gap-1">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      activeSection === item.id
                        ? 'text-accent bg-primary/10'
                        : 'text-text-secondary hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-2 border-t border-border mt-2">
                <a
                  href={resumeExists ? personalInfo.resumePath : undefined}
                  target={resumeExists ? '_blank' : undefined}
                  rel={resumeExists ? 'noopener noreferrer' : undefined}
                  className={`block text-center px-4 py-3 rounded-xl text-sm font-semibold ${
                    resumeExists
                      ? 'bg-gradient-to-r from-primary to-primary-light text-white'
                      : 'bg-dark-surface text-text-muted border border-border'
                  }`}
                  onClick={() => setIsMobileOpen(false)}
                >
                  <FaDownload className="inline w-3.5 h-3.5 mr-2" />
                  {resumeExists ? 'Download Resume' : 'Resume Coming Soon'}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
