"use client";

import { Monitor, Smartphone, Rocket, Gauge } from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        icon: Monitor,
        title: "Website Development",
        description: "Website profesional dengan tampilan modern yang merepresentasikan bisnis Anda.",
    },
    {
        icon: Smartphone,
        title: "Mobile Friendly Design",
        description: "Tampilan responsif yang sempurna diakses melalui Smartphone, Tablet, dan Laptop.",
    },
    {
        icon: Gauge,
        title: "High Performance",
        description: "Optimasi kecepatan loading website untuk pengalaman pengguna terbaik (Google Core Web Vitals).",
    },
    {
        icon: Rocket,
        title: "SEO On-Page",
        description: "Struktur website yang ramah mesin pencari agar mudah ditemukan calon pelanggan.",
    },
];

export function Services() {
    return (
        <section id="services" className="py-24 relative">
            <div className="container-width">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-4">
                        Solusi Digital <span className="text-gradient">Terlengkap</span>
                    </h2>
                    <p className="text-muted-foreground">
                        Saya menyediakan layanan pembuatan website end-to-end dengan standar kualitas tinggi.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors border border-white/5 hover:border-primary/50 group"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <service.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
