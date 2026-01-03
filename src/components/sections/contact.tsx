"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Send, Mail, MapPin, Phone, CheckCircle, AlertCircle } from "lucide-react";
import { useForm, ValidationError } from '@formspree/react';

const faqs = [
    {
        question: "Berapa lama proses pengerjaan website?",
        answer: "Tergantung kompleksitas. Untuk landing page standar biasanya 3-5 hari kerja. Website company profile sekitar 1-2 minggu.",
    },
    {
        question: "Apakah saya mendapatkan akses untuk edit konten?",
        answer: "Ya, Anda akan mendapatkan akses ke CMS (Content Management System) untuk mengubah teks dan gambar dengan mudah.",
    },
    {
        question: "Apakah sudah termasuk domain dan hosting?",
        answer: "Paket kami fleksibel. Bisa termasuk (All-in) atau hanya jasa pembuatan saja jika Anda sudah memiliki domain & hosting.",
    },
    {
        question: "Bagaimana jika ada error setelah website jadi?",
        answer: "Kami memberikan garansi maintenance selama 30 hari setelah website rilis untuk memastikan semuanya berjalan lancar.",
    },
];

export function Contact() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [state, handleSubmit] = useForm("mwvpnkan"); // Formspree project ID

    if (state.succeeded) {
        return (
            <section id="contact" className="py-24 bg-gradient-to-b from-transparent to-background/50">
                <div className="container-width text-center py-16">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="inline-flex flex-col items-center justify-center p-8 rounded-2xl glass border border-green-500/20"
                    >
                        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                            <CheckCircle className="w-8 h-8 text-green-500" />
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Pesan Terkirim!</h2>
                        <p className="text-muted-foreground mb-8 max-w-md">
                            Terima kasih telah menghubungi kami. Tim kami akan segera membalas pesan Anda melalui email atau WhatsApp dalam waktu 1x24 jam.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-6 py-2 bg-secondary hover:bg-secondary/80 rounded-lg text-sm font-medium transition-colors"
                        >
                            Kembali ke Form
                        </button>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="py-24 bg-gradient-to-b from-transparent to-background/50">
            <div className="container-width grid lg:grid-cols-2 gap-16">

                {/* Contact Info & Form */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-4">
                            Mulai Project <span className="text-gradient">Anda</span>
                        </h2>
                        <p className="text-muted-foreground">
                            Jangan ragu untuk berdiskusi. Konsultasi gratis untuk menemukan solusi terbaik bagi bisnis Anda.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                            <Mail className="w-5 h-5" />
                            <span>anggaclasher55@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                            <Phone className="w-5 h-5" />
                            <span>+62 813-4072-4341</span>
                        </div>
                        <div className="flex items-center gap-4 text-muted-foreground">
                            <MapPin className="w-5 h-5" />
                            <span>Malang, Jawa Timur, Indonesia</span>
                        </div>
                    </div>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="Nama"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                                />
                                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs" />
                            </div>
                            <div className="space-y-1">
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                                />
                                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs" />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Pesan atau Detail Project"
                                rows={4}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                            />
                            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs" />
                        </div>

                        <button
                            type="submit"
                            disabled={state.submitting}
                            className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {state.submitting ? "Mengirim..." : "Kirim Pesan"}
                            {!state.submitting && <Send className="w-4 h-4" />}
                        </button>
                        {state.errors && (
                            <div className="flex items-center gap-2 text-red-400 text-sm mt-2">
                                <AlertCircle className="w-4 h-4" />
                                <span>Gagal mengirim pesan. Silakan coba lagi.</span>
                            </div>
                        )}
                    </form>
                </div>

                {/* FAQ Accordion */}
                <div>
                    <h3 className="text-2xl font-bold mb-8">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="glass rounded-xl border border-white/5 overflow-hidden">
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                                >
                                    <span className="font-medium text-lg">{faq.question}</span>
                                    {openFaq === index ? <Minus className="w-5 h-5 text-primary" /> : <Plus className="w-5 h-5 text-muted-foreground" />}
                                </button>
                                <AnimatePresence>
                                    {openFaq === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="px-6 pb-6 text-muted-foreground"
                                        >
                                            {faq.answer}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
