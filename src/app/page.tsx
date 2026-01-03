import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingWA } from "@/components/floating-wa";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Portfolio } from "@/components/sections/portfolio";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <Contact />

      <Footer />
      <FloatingWA />
    </main>
  );
}
