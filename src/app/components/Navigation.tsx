import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface NavigationProps {
  showNav: boolean;
}

export function Navigation({ showNav }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!showNav) return null;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed left-0 right-0 top-0 z-50 bg-black/90 backdrop-blur-sm"
      style={{
        backgroundColor: scrolled ? 'rgba(0,0,0,0.95)' : 'rgba(0,0,0,0.90)',
        transition: 'background-color 0.3s'
      }}
    >
      <div className="container mx-auto flex items-center justify-center px-4 py-4">
        <div className="flex gap-8">
          <button
            onClick={() => smoothScroll('home')}
            className="text-sm font-black uppercase tracking-widest text-white transition-colors hover:text-[#FF0000]"
            style={{ fontFamily: 'Montserrat, Inter, system-ui, sans-serif' }}
          >
            Home
          </button>
          <button
            onClick={() => smoothScroll('residencies')}
            className="text-sm font-black uppercase tracking-widest text-white transition-colors hover:text-[#FF0000]"
            style={{ fontFamily: 'Montserrat, Inter, system-ui, sans-serif' }}
          >
            Residencies
          </button>
          <button
            onClick={() => smoothScroll('gallery')}
            className="text-sm font-black uppercase tracking-widest text-white transition-colors hover:text-[#FF0000]"
            style={{ fontFamily: 'Montserrat, Inter, system-ui, sans-serif' }}
          >
            Gallery
          </button>
          <button
            onClick={() => smoothScroll('highlights')}
            className="text-sm font-black uppercase tracking-widest text-white transition-colors hover:text-[#FF0000]"
            style={{ fontFamily: 'Montserrat, Inter, system-ui, sans-serif' }}
          >
            Highlights
          </button>
          <button
            onClick={() => smoothScroll('press-kit')}
            className="text-sm font-black uppercase tracking-widest text-white transition-colors hover:text-[#FF0000]"
            style={{ fontFamily: 'Montserrat, Inter, system-ui, sans-serif' }}
          >
            Press Kit
          </button>
          <button
            onClick={() => smoothScroll('contact')}
            className="text-sm font-black uppercase tracking-widest text-white transition-colors hover:text-[#FF0000]"
            style={{ fontFamily: 'Montserrat, Inter, system-ui, sans-serif' }}
          >
            Contact
          </button>
        </div>
      </div>
    </motion.nav>
  );
}