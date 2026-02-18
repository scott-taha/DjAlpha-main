import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export function HighlightsSection() {
    const highlights = [
        {
            id: 1,
            title: "Main Stage Performance",
            duration: "20s",
            placeholder: "https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "Nightclub Experience",
            duration: "20s",
            placeholder: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "Production Teaser",
            duration: "20s",
            placeholder: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    return (
        <section id="highlights" className="bg-black py-24">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-5xl font-black uppercase tracking-tighter text-white sm:text-7xl">
                        Highlights
                    </h2>
                    <div className="mx-auto mt-4 h-1 w-24 bg-[#FF0000]" />
                </motion.div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {highlights.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: item.id * 0.1 }}
                            className="group relative aspect-video cursor-pointer overflow-hidden rounded-lg bg-white/5 transition-all hover:ring-2 hover:ring-[#FF0000]"
                        >
                            {/* Video Placeholder Content */}
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-40 transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundImage: `url(${item.placeholder})` }}
                            />

                            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FF0000]/20 text-[#FF0000] backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#FF0000] group-hover:text-white">
                                    <Play className="h-8 w-8 fill-current" />
                                </div>
                                <h3 className="mt-6 text-xl font-bold uppercase tracking-wider text-white">
                                    {item.title}
                                </h3>
                                <p className="mt-1 text-sm font-bold text-white/50">{item.duration} CLIP</p>
                            </div>

                            {/* Player UI Overlay Placeholder */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                                <div className="h-full w-0 bg-[#FF0000] transition-all duration-300 group-hover:w-full" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
