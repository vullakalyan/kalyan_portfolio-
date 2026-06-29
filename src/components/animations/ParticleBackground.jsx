import { useCallback, useMemo } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: false,
      fpsLimit: 60,
      particles: {
        color: { value: '#2563EB' },
        links: {
          color: '#2563EB',
          distance: 150,
          enable: true,
          opacity: 0.15,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.8,
          direction: 'none',
          outModes: { default: 'bounce' },
        },
        number: {
          value: 40,
          density: { enable: true, area: 800 },
        },
        opacity: { value: 0.3 },
        shape: { type: 'circle' },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
      interactivity: {
        events: {
          onHover: { enable: true, mode: 'grab' },
        },
        modes: {
          grab: {
            distance: 140,
            links: { opacity: 0.3 },
          },
        },
      },
    }),
    []
  );

  return (
    <Particles
      id="hero-particles"
      init={particlesInit}
      options={options}
      className="absolute inset-0 z-0"
    />
  );
}
