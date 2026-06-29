import { motion } from 'framer-motion';

export default function GlassCard({
  children,
  className = '',
  hover = true,
  glowBorder = false,
  padding = 'p-6',
  as = 'div',
  ...props
}) {
  const Component = motion[as] || motion.div;

  return (
    <Component
      className={`
        glass-card
        ${hover ? 'glass-card-hover' : ''}
        ${glowBorder ? 'glow-border' : ''}
        ${padding}
        ${className}
      `}
      {...props}
    >
      {children}
    </Component>
  );
}
