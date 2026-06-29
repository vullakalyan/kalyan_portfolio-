import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-dark"
        >
          {/* Animated VK Logo */}
          <div className="relative">
            {/* Glow ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                boxShadow:
                  '0 0 40px rgba(37,99,235,0.4), 0 0 80px rgba(37,99,235,0.2)',
              }}
              animate={{
                boxShadow: [
                  '0 0 40px rgba(37,99,235,0.4), 0 0 80px rgba(37,99,235,0.2)',
                  '0 0 60px rgba(37,99,235,0.6), 0 0 120px rgba(37,99,235,0.3)',
                  '0 0 40px rgba(37,99,235,0.4), 0 0 80px rgba(37,99,235,0.2)',
                ],
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* VK initials */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center"
            >
              <span className="font-heading text-3xl font-bold text-white">
                VK
              </span>
            </motion.div>

            {/* Loading dots */}
            <div className="flex gap-1.5 mt-6 justify-center">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-primary"
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
