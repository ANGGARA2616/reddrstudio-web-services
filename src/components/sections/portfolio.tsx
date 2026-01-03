"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const categories = ["All", "Landing Page", "Company Profile", "Web App"];

const projects = [
    {
        id: 1,
        title: "TechStartup Landing",
        category: "Landing Page",
        image: "/assets/portfolio1.png",
        desc: "Modern landing page untuk startup SaaS high-growth.",
    },
    {
        id: 2,
        title: "ConstructPro Profile",
        category: "Company Profile",
        image: "/assets/portfolio-2.png",
        desc: "Profil perusahaan konstruksi dengan galeri proyek interaktif.",
    },
    {
        id: 3,
        title: "E-Health Dashboard",
        category: "Web App",
        image: "/assets/portfolio-3.png",
        desc: "Aplikasi manajemen pasien untuk klinik modern.",
    },
    {
        id: 4,
        title: "Creative Agency",
        category: "Landing Page",
        image: "/assets/portfolio-4.png",
        desc: "Portfolio kreatif dengan animasi scroll yang immersive.",
    },
];

export function Portfolio() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = projects.filter(
        (project) => activeCategory === "All" || project.category === activeCategory
    );

    return (
        <section id="portfolio" className="py-24">
            <div className="container-width">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-4">
                            Hasil Karya <span className="text-gradient">Terbaik</span>
                        </h2>
                        <p className="text-muted-foreground">
                            Beberapa project pilihan yang telah membantu klien mencapai tujuan bisnis mereka.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                                    : "glass hover:bg-white/10 text-muted-foreground"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group relative aspect-video rounded-2xl overflow-hidden glass border border-white/10"
                            >
                                {/* Image Placeholder using Next/Image with remote pattern needs config or just regular img for demo speed if domain not trusted. 
                    Using standard img tag for safety in this environment without next.config.js modification for now, 
                    but text said "Next.js" so I should probably configure next.config.js or use unoptimized. 
                    I will use unoptimized prop for simplicity.
                */}
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <span className="text-primary text-sm font-semibold mb-2 block">
                                            {project.category}
                                        </span>
                                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                        <p className="text-sm text-gray-300 mb-4 line-clamp-2">
                                            {project.desc}
                                        </p>
                                        <button className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                                            Lihat Detail <ExternalLink className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
