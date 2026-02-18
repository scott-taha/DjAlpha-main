import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import theClubImage from '../../assets/c670e19affd11d89b2a30af534ed2017dc03d526.png';
import epicurienImage from '../../assets/166feaea51cd1dc56dd473abd49e3e28d8743b76.png';
import lotusClubImage from '../../assets/fdc0ef717e3c851e60011ed5b3d4d01dfd0152e1.png';
import backstageImage from '../../assets/114f76c06face0526fa7e83d996812c19f3d4048.png';
import leComptoirImage from '../../assets/8e3e14f80b4ab327c324f082c6fa96aef14c67de.png';

interface Venue {
  name: string;
  location: string;
  image: string;
  logo: string;
}

const venues: Venue[] = [
  {
    name: 'THE CLUB',
    location: 'AGADIR',
    image: theClubImage,
    logo: 'THE CLUB'
  },
  {
    name: 'EPICURIEN',
    location: 'MARRAKECH',
    image: epicurienImage,
    logo: 'EPICURIEN'
  },
  {
    name: 'LOTUS CLUB',
    location: 'MARRAKECH',
    image: lotusClubImage,
    logo: 'LOTUS CLUB'
  },
  {
    name: 'BACKSTAGE',
    location: 'MARRAKECH',
    image: backstageImage,
    logo: 'BCKSTG'
  },
  {
    name: 'LE COMPTOIR ELECTRONIK',
    location: 'AGADIR',
    image: leComptoirImage,
    logo: 'LE COMPTOIR'
  }
];

interface VenueSquareProps {
  venue: Venue;
  index: number;
  isInView: boolean;
}

function VenueSquare({ venue, index, isInView }: VenueSquareProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.2,
        ease: "easeOut" 
      }}
      className="group relative aspect-square w-full overflow-hidden bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Venue Image */}
      <motion.img
        src={venue.image}
        alt={venue.name}
        className="h-full w-full object-cover"
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Dark Overlay */}
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: isHovered ? 0 : 0.5 }}
        transition={{ duration: 0.3 }}
      />

      {/* Bottom Info Section - Fixed Height and Visible */}
      <div className="absolute bottom-0 left-0 right-0 flex min-h-[35%] flex-col items-center justify-center bg-black/90 px-4 py-6">
        {/* Venue Logo */}
        <motion.div
          className="mb-3 text-center text-xl font-black uppercase tracking-wider md:text-2xl"
          animate={{ color: isHovered ? '#FF0000' : '#FFFFFF' }}
          transition={{ duration: 0.3 }}
          style={{ fontFamily: 'Montserrat, Inter, system-ui, sans-serif' }}
        >
          {venue.logo}
        </motion.div>

        {/* Venue Name & Location - More visible */}
        <div className="text-center text-[10px] font-bold uppercase tracking-widest text-white md:text-xs">
          {venue.name}
        </div>
        <div className="mt-1 text-center text-[10px] font-bold uppercase tracking-widest text-[#FF0000] md:text-xs">
          {venue.location}
        </div>
      </div>
    </motion.div>
  );
}

export function VenueGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="bg-black py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="mb-12 text-center text-5xl font-black uppercase tracking-tight text-white"
          style={{ fontFamily: 'Montserrat, Inter, system-ui, sans-serif' }}
        >
          Residency & Legacy
        </motion.h2>

        {/* 5-Square Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {venues.map((venue, index) => (
            <VenueSquare
              key={venue.name}
              venue={venue}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}