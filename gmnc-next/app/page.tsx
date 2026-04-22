import TopBar from "@/components/landing/TopBar";
import LandingNavbar from "@/components/landing/LandingNavbar";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import CommitmentSection from "@/components/landing/CommitmentSection";
import ServicesSection from "@/components/landing/ServicesSection";
import DoctorsSection from "@/components/landing/DoctorsSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import BlogSection from "@/components/landing/BlogSection";
import FooterSection from "@/components/landing/FooterSection";

export default function RootPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <TopBar />
      <LandingNavbar />
      <HeroSection />
      <AboutSection />
      <CommitmentSection />
      <ServicesSection />
      <DoctorsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <BlogSection />
      <FooterSection />
    </main>
  );
}

