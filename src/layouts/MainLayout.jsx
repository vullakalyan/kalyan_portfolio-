import { useEffect } from 'react';
import Navbar from '../sections/Navbar/Navbar';
import Hero from '../sections/Hero/Hero';
import About from '../sections/About/About';
import Skills from '../sections/Skills/Skills';
import Projects from '../sections/Projects/Projects';
import Education from '../sections/Education/Education';
import Certifications from '../sections/Certifications/Certifications';
import CareerObjective from '../sections/CareerObjective/CareerObjective';
import Contact from '../sections/Contact/Contact';
import Footer from '../sections/Footer/Footer';
import ScrollProgress from '../components/common/ScrollProgress';
import LoadingScreen from '../components/common/LoadingScreen';
import CustomCursor from '../components/common/CustomCursor';
import BackToTop from '../components/common/BackToTop';
import Toast from '../components/common/Toast';
import { initSmoothScroll } from '../utils/smoothScroll';

export default function MainLayout() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = initSmoothScroll();
    return () => {
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-dark text-text-primary selection:bg-primary/30 selection:text-white">
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <Toast />
      <BackToTop />
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <CareerObjective />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
