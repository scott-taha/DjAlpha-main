import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import alphaLogo from '../../assets/fa05f527b8e2aefc73827166bbebfa0bf1d33fef.png';
import performanceImage1 from '../../assets/2c64ff4422c8a06ab8457c4e0d28cf200316a510.png';
import performanceImage2 from '../../assets/da4d3d53a87369b705bea49cad92c7028c7a41a5.png';
import performanceImage3 from '../../assets/d0e7c53a2c402db3d8932efa8696106ff1110751.png';
import performanceImage4 from '../../assets/c2a8f6463ab32da0e56f310527899319a8b519a8.png';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="bg-black py-20">
      <div className="container mx-auto px-4">
        {/* Alpha Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex justify-center"
        >
          <img src={alphaLogo} alt="ALPHA Logo" className="h-48 w-auto" />
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2
            className="mb-6 text-5xl font-black uppercase tracking-tight text-white"
            style={{ fontFamily: 'Montserrat, Inter, system-ui, sans-serif' }}
          >
            The Sound. The Energy.
          </h2>
          <p className="text-lg leading-relaxed text-white/80">
            With over 10 years behind the decks, DJ ALPHA has mastered the art of blending Tech House
            and R&B Grooves to create unforgettable nights. From intimate venues in Agadir to the legendary
            clubs of Marrakech, every set is a journey through sound that keeps the crowd moving until dawn.
          </p>
        </motion.div>

        {/* Performance Gallery Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative aspect-[3/4] overflow-hidden"
          >
            <img
              src={performanceImage1}
              alt="DJ Alpha Portrait"
              className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              style={{ objectPosition: 'center center' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group relative aspect-[3/4] overflow-hidden"
          >
            <div className="relative h-full w-full overflow-hidden">
              <img
                src={performanceImage2}
                alt="DJ Alpha Performance"
                className="h-[120%] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                style={{
                  objectPosition: 'center 60%',
                  transform: 'translateY(-10%)'
                }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="group relative aspect-[3/4] overflow-hidden"
          >
            <img
              src={performanceImage3}
              alt="DJ Alpha Performance"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              style={{ objectPosition: 'center center' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="group relative aspect-[3/4] overflow-hidden"
          >
            <img
              src={performanceImage4}
              alt="DJ Alpha Performance"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              style={{ objectPosition: 'center center' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          <div className="text-center">
            <div className="mb-2 text-6xl font-black text-[#FF0000]">10+</div>
            <div className="text-sm font-bold uppercase tracking-widest text-white/70">Years of Sound</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-6xl font-black text-[#FF0000]">1000+</div>
            <div className="text-sm font-bold uppercase tracking-widest text-white/70">Nights Performed</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}