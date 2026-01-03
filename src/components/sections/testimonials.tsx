"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Bagus Al",
        role: "Mahasiswa, Universitas Muhammadiyyah Malang",
        text: "Website yang dibuat sangat cepat dan desainnya premium. Konversi leads kami meningkat 30% sejak redesign.",
    },
    {
        name: "Zidane Amir",
        role: "Mahasiswa, Universitas Muhammadiyyah Malang",
        text: "Sangat puas dengan pelayanannya. Komunikatif dan hasil akhirnya melebihi ekspektasi. Recommended!",
    },
    {
        name: "Evan Alfredio Pratama",
        role: "Mahasiswa, Universitas Muhammadiyyah Malang",
        text: "Proses kerjanya jelas, on-time, dan after-sales support-nya sangat membantu kami yang awam teknis.",
    },
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-24 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="container-width">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-4">
                        Kata Mereka Tentang <span className="text-gradient">Kami</span>
                    </h2>
                    <p className="text-muted-foreground">
                        Kepuasan klien adalah prioritas utama. Berikut adalah apa yang mereka katakan.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass p-8 rounded-2xl border border-white/5 relative"
                        >
                            <Quote className="w-10 h-10 text-primary/20 mb-4" />
                            <p className="text-lg text-foreground/90 italic mb-6">
                                "{item.text}"
                            </p>
                            <div>
                                <h4 className="font-bold text-foreground">{item.name}</h4>
                                <p className="text-sm text-muted-foreground">{item.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Signals / Logos (Placeholder) */}
                <div className="mt-20 pt-10 border-t border-white/5">
                    <p className="text-center text-sm text-muted-foreground mb-8">Dipercaya oleh berbagai perusahaan</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
                        {/* Simulated Logo Placeholders using Text for now as specific logos weren't provided */}
                        {['TechCorp', 'IndoDigital', 'StartUpHub', 'CreativeMinds', 'FutureTech'].map((logo) => (
                            <span key={logo} className="font-outfit font-bold text-xl">{logo}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
