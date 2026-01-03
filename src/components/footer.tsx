import Link from "next/link";
import { Code2, Instagram, Twitter, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-background border-t border-white/10 py-12">
            <div className="container-width">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <Code2 className="w-5 h-5 text-primary" />
                        <span className="font-outfit font-bold text-lg">ReddRStudio</span>
                    </div>

                    <p className="text-muted-foreground text-sm">
                        © {new Date().getFullYear()} Web Development Services. All rights reserved.
                    </p>

                    <div className="flex gap-6 justify-start md:justify-end">
                        <Link
                            href="https://www.instagram.com/alvizanggara"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                            aria-label="Instagram"
                        >
                            <Instagram className="w-5 h-5" />
                        </Link>

                        {/* Anda bisa menambah icon lain di sini, misal LinkedIn atau GitHub */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
