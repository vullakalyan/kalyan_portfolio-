import { motion } from 'framer-motion';
import { buttonHover } from '../../utils/animations';

const variants = {
  primary:
    'bg-gradient-to-r from-primary to-primary-light text-white shadow-glow hover:shadow-glow-lg',
  outline:
    'bg-transparent border border-primary/50 text-primary hover:bg-primary/10 hover:border-primary',
  ghost: 'bg-transparent text-text-secondary hover:text-white hover:bg-white/5',
  accent:
    'bg-gradient-to-r from-accent to-accent-light text-dark font-semibold hover:shadow-glow-accent',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-3.5 text-base',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  disabled = false,
  onClick,
  className = '',
  icon: Icon,
  tooltip,
  ...props
}) {
  const baseClasses = `
    relative inline-flex items-center justify-center gap-2
    font-body font-semibold rounded-xl
    transition-all duration-300 cursor-pointer
    disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
    ${variants[variant]} ${sizes[size]} ${className}
  `;

  const content = (
    <>
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </>
  );

  const motionProps = disabled
    ? {}
    : {
        variants: buttonHover,
        initial: 'rest',
        whileHover: 'hover',
        whileTap: 'tap',
      };

  if (href) {
    return (
      <div className="relative group inline-block">
        <motion.a
          href={disabled ? undefined : href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className={baseClasses}
          aria-disabled={disabled}
          {...motionProps}
          {...props}
        >
          {content}
        </motion.a>
        {tooltip && disabled && (
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 text-xs rounded-lg bg-dark-surface border border-border text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
            {tooltip}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="relative group inline-block">
      <motion.button
        onClick={disabled ? undefined : onClick}
        className={baseClasses}
        disabled={disabled}
        {...motionProps}
        {...props}
      >
        {content}
      </motion.button>
      {tooltip && disabled && (
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 text-xs rounded-lg bg-dark-surface border border-border text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
          {tooltip}
        </span>
      )}
    </div>
  );
}
