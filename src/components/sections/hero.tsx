"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] opacity-50 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] opacity-30" />
            </div>

            <div className="container-width grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Available for New Projects
                    </div>

                    <h1 className="text-4xl md:text-6xl font-outfit font-bold leading-tight">
                        Solusi Digital Premium untuk <span className="text-gradient">Pertumbuhan Bisnis Anda</span>
                    </h1>

                    <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                        Kami menghadirkan website berperforma tinggi dengan desain modern yang strategis untuk mengubah pengunjung menjadi pelanggan setia.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="https://wa.me/6281340724341"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all hover:scale-105"
                        >
                            Konsultasi Gratis via WhatsApp
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            href="#portfolio"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 glass border-white/10 hover:bg-white/5 font-medium rounded-lg transition-colors"
                        >
                            Lihat Portfolio
                        </Link>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground pt-4">
                        {["Gratis Konsultasi", "Garansi Kecepatan", "Mobile Friendly"].map((item) => (
                            <div key={item} className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                {item}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Hero Visual/Image Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative lg:h-[600px] flex items-center justify-center font-outfit"
                >
                    <div className="relative w-full aspect-square max-w-[500px] glass rounded-3xl border border-white/10 p-4 shadow-2xl shadow-primary/20 bg-gradient-to-br from-white/5 to-transparent overflow-hidden">
                        {/* Abstract Code/UI Representation */}
                        <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] rounded-2xl" />
                        <div className="h-full w-full bg-background/50 rounded-2xl border border-white/5 overflow-hidden relative">
                            <div className="absolute top-0 w-full h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2 z-10 glass">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            </div>

                            {/* Main Hero Image */}
                            <Image
                                src="/images/hero-bg.png"
                                alt="ReddRStudio Portfolio"
                                fill
                                className="object-cover mt-0"
                                priority
                            />

                            {/* Overlay decoration to keep it premium look even before image is uploaded */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
