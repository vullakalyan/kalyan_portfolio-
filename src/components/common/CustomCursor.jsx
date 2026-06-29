import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on desktop devices that support hover
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementsHover = () => {
      const interactables = document.querySelectorAll('a, button, input, textarea, select, [role="button"], [role="tab"]');
      
      interactables.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovering(true));
        el.addEventListener('mouseleave', () => setIsHovering(false));
      });
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    
    // Slight delay to ensure DOM is ready
    const timeout = setTimeout(handleElementsHover, 500);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      clearTimeout(timeout);
    };
  }, [isVisible]);

  // Don't render on mobile/touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Main dot */}
          <motion.div
            className="fixed top-0 left-0 w-3 h-3 bg-accent rounded-full pointer-events-none z-[999] mix-blend-screen"
            animate={{
              x: mousePosition.x - 6,
              y: mousePosition.y - 6,
              scale: isHovering ? 1.5 : 1,
            }}
            transition={{
              type: 'spring',
              stiffness: 1000,
              damping: 28,
              mass: 0.1,
            }}
          />
          {/* Trailing glow */}
          <motion.div
            className="fixed top-0 left-0 w-8 h-8 border border-primary/50 rounded-full pointer-events-none z-[998] shadow-glow"
            animate={{
              x: mousePosition.x - 16,
              y: mousePosition.y - 16,
              scale: isHovering ? 1.8 : 1,
              backgroundColor: isHovering ? 'rgba(37,99,235,0.1)' : 'transparent',
            }}
            transition={{
              type: 'spring',
              stiffness: 250,
              damping: 20,
              mass: 0.5,
            }}
          />
        </>
      )}
    </AnimatePresence>
  );
}
