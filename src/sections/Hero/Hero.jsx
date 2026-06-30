import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight } from 'react-icons/fa';
import { personalInfo } from '../../data/personalInfo';
import { useMouseParallax } from '../../hooks/useMouseParallax';
import ParticleBackground from '../../components/animations/ParticleBackground';
import FloatingIcons from '../../components/animations/FloatingIcons';

const profileImg = '/profile.jpg'; // Load from public directory for runtime fallback

function HeroImage() {
  const parallax = useMouseParallax(15);
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
      className="relative flex items-center justify-center"
      style={{
        transform: `translate(${parallax.x}px, ${parallax.y}px)`,
      }}
    >
      {/* Outer glow ring */}
      <div className="absolute w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] lg:w-[360px] lg:h-[360px] rounded-full hero-glow-pulse" />

      {/* Glassmorphism frame */}
      <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] lg:w-[320px] lg:h-[320px] rounded-full hero-float">
        {/* Neon ring border */}
        <div className="absolute inset-0 rounded-full neon-ring p-[3px]">
          <div className="w-full h-full rounded-full bg-dark-surface/80 backdrop-blur-sm overflow-hidden border-2 border-primary/30">
            {!imgError ? (
              <img
                src={profileImg}
                alt={`${personalInfo.name} - ${personalInfo.title}`}
                className="w-full h-full object-cover object-top"
                onError={() => setImgError(true)}
                loading="eager"
              />
            ) : (
              /* Fallback VK Avatar */
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary via-primary-light to-accent">
                <span className="font-heading text-6xl sm:text-7xl lg:text-8xl font-bold text-white/90">
                  {personalInfo.initials}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Decorative orbiting dot */}
        <motion.div
          className="absolute w-3 h-3 bg-accent rounded-full shadow-glow-accent"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          style={{
            top: '5%',
            left: '50%',
            transformOrigin: '0 150px',
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const typedRef = useRef(null);
  const [resumeExists, setResumeExists] = useState(true);

  useEffect(() => {
    fetch('/resume.pdf', { method: 'HEAD' })
      .then((res) => { if (!res.ok) setResumeExists(false); })
      .catch(() => setResumeExists(false));
  }, []);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: personalInfo.typingStrings,
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });
    return () => typed.destroy();
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background effects */}
      <ParticleBackground />
      <FloatingIcons />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark z-[1] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      {/* Main content */}
      <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center px-4 sm:px-6 lg:px-8 py-24 lg:py-0">
        {/* Left: Text */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-accent text-sm sm:text-base font-semibold tracking-wider uppercase mb-3"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight"
          >
            <span className="gradient-text-name">{personalInfo.name}</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-heading text-xl sm:text-2xl lg:text-3xl font-semibold text-text-secondary mb-3"
          >
            {personalInfo.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-accent/80 text-lg font-medium mb-4"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* Typing animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="text-lg sm:text-xl text-glow font-medium mb-5 h-8"
          >
            <span ref={typedRef} />
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-text-secondary text-base leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScrollTo('projects')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-primary-light text-white text-sm font-semibold shadow-glow hover:shadow-glow-lg transition-shadow cursor-pointer"
            >
              View Projects
              <FaArrowRight className="w-3.5 h-3.5" />
            </motion.button>

            <div className="relative group">
              <motion.a
                whileHover={resumeExists ? { scale: 1.05 } : {}}
                whileTap={resumeExists ? { scale: 0.95 } : {}}
                href={resumeExists ? personalInfo.resumePath : undefined}
                target={resumeExists ? '_blank' : undefined}
                rel={resumeExists ? 'noopener noreferrer' : undefined}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                  resumeExists
                    ? 'border border-primary/50 text-primary hover:bg-primary/10 cursor-pointer'
                    : 'border border-border text-text-muted cursor-default'
                }`}
              >
                <FaDownload className="w-3.5 h-3.5" />
                Download Resume
              </motion.a>
              {!resumeExists && (
                <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-3 py-1 text-xs rounded-lg bg-dark-surface border border-border text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  Resume coming soon
                </span>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScrollTo('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-accent/50 text-accent text-sm font-semibold hover:bg-accent/10 transition-all cursor-pointer"
            >
              Hire Me
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScrollTo('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-text-secondary hover:text-white hover:bg-white/5 transition-all cursor-pointer"
            >
              Contact Me
            </motion.button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex gap-4 justify-center lg:justify-start"
          >
            {[
              {
                icon: FaGithub,
                href: personalInfo.social.github,
                label: 'GitHub',
              },
              {
                icon: FaLinkedin,
                href: personalInfo.social.linkedin,
                label: 'LinkedIn',
              },
              {
                icon: FaEnvelope,
                href: `mailto:${personalInfo.social.email}`,
                label: 'Email',
              },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('mailto') ? undefined : "_blank"}
                rel={social.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-11 h-11 rounded-xl bg-dark-surface/80 border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right: Hero Image */}
        <div className="order-1 lg:order-2 flex justify-center">
          <HeroImage />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-text-muted/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
