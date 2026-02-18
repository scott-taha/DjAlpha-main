import { motion } from 'motion/react';
import { Download } from 'lucide-react';

export function PressKitSection() {
    return (
        <section id="press-kit" className="bg-[#0A0A0A] py-24">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-4xl rounded-2xl border border-white/5 bg-white/5 p-12 text-center backdrop-blur-xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="mb-6 text-4xl font-black uppercase tracking-tight text-white sm:text-6xl">
                            Press Kit
                        </h2>
                        <p className="mx-auto mb-12 max-w-2xl text-lg text-white/60">
                            Download high-resolution photos, professional biographies, logos, and technical riders for promotion and event planning.
                        </p>

                        <a
                            href="./assets/press-kit.zip"
                            download
                            className="group relative inline-flex items-center gap-4 overflow-hidden bg-white px-10 py-5 text-xl font-black uppercase tracking-wider text-black transition-all hover:scale-105 active:scale-95"
                        >
                            <Download className="h-6 w-6" />
                            <span>Download Press Kit</span>
                            <div className="absolute inset-0 -translate-x-full bg-[#FF0000] transition-transform duration-300 group-hover:translate-x-0" />
                            <span className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <Download className="h-6 w-6 text-white" />
                                <span className="text-white">Download Now</span>
                            </span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
