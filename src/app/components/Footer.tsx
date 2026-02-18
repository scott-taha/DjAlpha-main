import { Instagram, Music, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-black py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Text */}
        <div className="mb-8 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/90">
            10 Years of Sound. Tech House & R&B Grooves.
          </p>
          <p className="mt-2 text-sm font-bold uppercase tracking-[0.2em] text-[#FF0000]">
            Current Resident at The Club Agadir.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://www.instagram.com/alphaaadj"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all hover:scale-110 hover:text-[#FF0000]"
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6 text-white" />
          </a>
          <a
            href="https://soundcloud.com/ilyas-lamkouki"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all hover:scale-110 hover:text-[#FF0000]"
            aria-label="SoundCloud"
          >
            <Music className="h-6 w-6 text-white" />
          </a>
          <a
            href="mailto:alphadj210@gmail.com"
            className="transition-all hover:scale-110 hover:text-[#FF0000]"
            aria-label="Email"
          >
            <Mail className="h-6 w-6 text-white" />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-xs uppercase tracking-widest text-white/50">
          © 2026 DJ Alpha. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}