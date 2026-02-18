import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import heroImage from '../../assets/b83ec7a4a4919fad0faeb4aa19895e4e653968ef.png';
import alphaLogo from '../../assets/fa05f527b8e2aefc73827166bbebfa0bf1d33fef.png';

interface IntroSequenceProps {
  onComplete: () => void;
  onBooking: () => void;
}

export function IntroSequence({ onComplete, onBooking }: IntroSequenceProps) {
  const [showFlash, setShowFlash] = useState(false);
  const [showHero, setShowHero] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    // Flash appears after text meets
    const flashTimer = setTimeout(() => {
      setShowFlash(true);
    }, 1200);

    // Flash disappears after 0.5s
    const flashEndTimer = setTimeout(() => {
      setShowFlash(false);
      setShowHero(true);
    }, 1700);

    // Show buttons after hero appears
    const buttonsTimer = setTimeout(() => {
      setShowButtons(true);
      onComplete();
    }, 2200);

    return () => {
      clearTimeout(flashTimer);
      clearTimeout(flashEndTimer);
      clearTimeout(buttonsTimer);
    };
  }, [onComplete]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Hero Background Image - Fades in */}
      {showHero && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={heroImage}
            alt="DJ Alpha"
            className="h-full w-full object-cover object-top"
            style={{ imageRendering: 'high-quality', objectPosition: 'center 20%' }}
            loading="eager"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      )}

      {/* Red Flash */}
      {showFlash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 z-10 flex items-center justify-center"
        >
          <div className="h-32 w-[600px] bg-[#FF0000]" />
        </motion.div>
      )}

      {/* Text Animation Container */}
      <div className="relative z-20 flex h-full items-center justify-center">
        <div className="relative flex items-center justify-center">
          {/* "DJ" slides from right */}
          <motion.div
            initial={{ x: 400, opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[80px] font-black uppercase tracking-tight text-white md:text-[100px] lg:text-[120px]"
            style={{ fontFamily: 'Montserrat, Inter, system-ui, sans-serif' }}
          >
            DJ
          </motion.div>

          {/* Space between */}
          <div className="w-4 md:w-6 lg:w-8" />

          {/* "ALPHA" slides from left */}
          <motion.div
            initial={{ x: -400, opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[80px] font-black uppercase tracking-tight text-white md:text-[100px] lg:text-[120px]"
            style={{ fontFamily: 'Montserrat, Inter, system-ui, sans-serif' }}
          >
            ALPHA
          </motion.div>
        </div>
      </div>

      {/* Call to Action Buttons */}
      {showButtons && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute bottom-20 left-0 right-0 z-30 flex flex-col items-center gap-6"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="bg-white px-8 py-4 text-lg font-black uppercase tracking-wide text-black transition-all hover:scale-105"
            >
              Contact Us
            </button>
            <button
              onClick={onBooking}
              className="group relative overflow-hidden bg-[#FF0000] px-8 py-4 text-lg font-black uppercase tracking-wide text-white transition-all hover:scale-105"
            >
              <span className="relative z-10">Book for Events</span>
              {/* Red Glow Effect */}
              <div className="absolute inset-0 opacity-0 shadow-[0_0_30px_10px_rgba(255,0,0,0.8)] transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          </div>
          <button
            onClick={() => {
              const element = document.getElementById('gallery');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="group relative text-lg font-bold uppercase tracking-wide text-white"
          >
            Know About Me
            <div className="mt-1 h-[2px] w-full bg-[#FF0000] transition-all group-hover:shadow-[0_0_10px_rgba(255,0,0,0.8)]" />
          </button>
        </motion.div>
      )}
    </div>
  );
}