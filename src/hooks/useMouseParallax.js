import { useState, useEffect, useCallback } from 'react';

export function useMouseParallax(intensity = 20) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = ((clientX - innerWidth / 2) / innerWidth) * intensity;
      const y = ((clientY - innerHeight / 2) / innerHeight) * intensity;
      setPosition({ x, y });
    },
    [intensity]
  );

  useEffect(() => {
    // Only on desktop
    if (window.innerWidth < 768) return;

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return position;
}
