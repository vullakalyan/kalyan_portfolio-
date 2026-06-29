import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJsSquare, FaPython, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';

const icons = [
  { Icon: FaReact, x: '10%', y: '15%', delay: 0, size: 24 },
  { Icon: FaNodeJs, x: '85%', y: '20%', delay: 0.5, size: 22 },
  { Icon: FaJsSquare, x: '75%', y: '70%', delay: 1, size: 20 },
  { Icon: FaPython, x: '15%', y: '75%', delay: 1.5, size: 22 },
  { Icon: SiMongodb, x: '90%', y: '50%', delay: 2, size: 20 },
  { Icon: FaGitAlt, x: '5%', y: '45%', delay: 0.8, size: 18 },
  { Icon: SiExpress, x: '50%', y: '85%', delay: 1.2, size: 18 },
  { Icon: FaDatabase, x: '70%', y: '10%', delay: 0.3, size: 16 },
];

export default function FloatingIcons() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {icons.map(({ Icon, x, y, delay, size }, index) => (
        <motion.div
          key={index}
          className="absolute text-primary/10"
          style={{ left: x, top: y }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4 + index * 0.5,
            repeat: Infinity,
            delay,
            ease: 'easeInOut',
          }}
        >
          <Icon size={size} />
        </motion.div>
      ))}
    </div>
  );
}
