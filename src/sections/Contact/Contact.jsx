import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane, FaSpinner } from 'react-icons/fa';
import SectionHeading from '../../components/common/SectionHeading';
import GlassCard from '../../components/common/GlassCard';
import Button from '../../components/common/Button';
import { useInView } from '../../hooks/useInView';
import { personalInfo } from '../../data/personalInfo';
import { showToast } from '../../components/common/Toast';

export default function Contact() {
  const formRef = useRef(null);
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate env vars
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS credentials are not configured.');
      }

      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey: publicKey,
      });

      showToast('Message sent successfully! I\'ll reply soon.', 'success');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      showToast(
        error.message || 'Something went wrong. Please try again.',
        'error'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative" aria-label="Contact section">
      <div className="container-custom">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
        />

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-start max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-2 space-y-8"
          >
            <GlassCard hover={false} padding="p-8">
              <h3 className="font-heading text-2xl font-bold text-white mb-6">
                Let&apos;s Connect
              </h3>
              
              <div className="space-y-6">
                <a
                  href={`mailto:${personalInfo.social.email}`}
                  className="flex items-center gap-4 text-text-secondary hover:text-accent transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-dark-surface border border-border flex items-center justify-center group-hover:border-accent/30 transition-colors">
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-muted mb-0.5">Email</p>
                    <p className="font-medium">{personalInfo.social.email}</p>
                  </div>
                </a>

                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-text-secondary hover:text-accent transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-dark-surface border border-border flex items-center justify-center group-hover:border-accent/30 transition-colors">
                    <FaLinkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-muted mb-0.5">LinkedIn</p>
                    <p className="font-medium">Connect on LinkedIn</p>
                  </div>
                </a>

                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-text-secondary hover:text-accent transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-dark-surface border border-border flex items-center justify-center group-hover:border-accent/30 transition-colors">
                    <FaGithub className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-muted mb-0.5">GitHub</p>
                    <p className="font-medium">View my repositories</p>
                  </div>
                </a>
              </div>

              {/* Decorative gradient line */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent my-8" />
              
              <p className="text-text-muted text-sm text-center">
                Available for freelance opportunities and full-time roles.
              </p>
            </GlassCard>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-3"
          >
            <GlassCard hover={false} glowBorder padding="p-8 sm:p-10">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="user_name" className="text-sm font-medium text-text-secondary ml-1">
                      Full Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="user_name"
                      name="user_name"
                      required
                      placeholder="John Doe"
                      className="w-full px-5 py-3.5 bg-dark-surface/50 border border-border rounded-xl text-white placeholder:text-text-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label htmlFor="user_email" className="text-sm font-medium text-text-secondary ml-1">
                      Email Address <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      id="user_email"
                      name="user_email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-5 py-3.5 bg-dark-surface/50 border border-border rounded-xl text-white placeholder:text-text-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-text-secondary ml-1">
                    Subject <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="Project inquiry"
                    className="w-full px-5 py-3.5 bg-dark-surface/50 border border-border rounded-xl text-white placeholder:text-text-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-text-secondary ml-1">
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    placeholder="Hello, I'd like to talk about..."
                    className="w-full px-5 py-3.5 bg-dark-surface/50 border border-border rounded-xl text-white placeholder:text-text-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="w-4 h-4 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
