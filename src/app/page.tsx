import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Problem from "@/components/problem";
import Features from "@/components/features";
import HowItWorks from "@/components/how-it-works";
import Designed from "@/components/designed";
import Philosophy from "@/components/philosophy";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <HowItWorks />
      <Designed />
      <Philosophy />
      <CTA />
      <Footer />
    </main>
  );
}
