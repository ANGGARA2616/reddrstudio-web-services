"use client";

import { motion } from "framer-motion";
import { MessageSquare, Layout, Palette, Code, CheckSquare, Rocket } from "lucide-react";

const processes = [
    {
        icon: MessageSquare,
        title: "1. Konsultasi & Strategi",
        description: "Diskusi mendalam untuk memahami bisnis Anda, target audiens, dan tujuan utama website.",
    },
    {
        icon: Layout,
        title: "2. Perencanaan & Sitemap",
        description: "Penyusunan struktur halaman (wireframe) agar navigasi efisien dan alur informasi tepat sasaran.",
    },
    {
        icon: Palette,
        title: "3. Desain Visual",
        description: "Pembuatan mockup desain yang modern dan sesuai dengan identitas brand Anda.",
    },
    {
        icon: Code,
        title: "4. Development",
        description: "Proses koding dengan fokus pada kecepatan load, keamanan, dan performa stabil.",
    },
    {
        icon: CheckSquare,
        title: "5. Uji Coba (Testing)",
        description: "Pengecekan menyeluruh di berbagai perangkat (Mobile/Desktop) dan perbaikan bug.",
    },
    {
        icon: Rocket,
        title: "6. Peluncuran",
        description: "Website resmi mengudara! Dilengkapi panduan cara mengelola konten website Anda.",
    },
];

export function Process() {
    return (
        <section id="process" className="py-24 bg-secondary/20">
            <div className="container-width">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-4">
                        Alur Kerja <span className="text-gradient">Profesional</span>
                    </h2>
                    <p className="text-muted-foreground">
                        6 Langkah sistematis menuju website impian Anda. Transparan dan terstruktur.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                    {/* Connector Line (Desktop Only) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 -z-10" />

                    {processes.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative glass p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors"
                        >
                            <div className="absolute -top-6 left-8 bg-background p-2 rounded-xl border border-white/10 shadow-xl">
                                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                                    <step.icon className="w-6 h-6 text-primary" />
                                </div>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
