import LandingNavbar from "@/components/landing/LandingNavbar";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import CommitmentSection from "@/components/landing/CommitmentSection";
import ServicesSection from "@/components/landing/ServicesSection";
import DutiesSection from "@/components/landing/DutiesSection";
import DoctorsSection from "@/components/landing/DoctorsSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FooterSection from "@/components/landing/FooterSection";

export default function RootPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <LandingNavbar />
      <HeroSection />
      <AboutSection />
      <CommitmentSection />
      <ServicesSection />
      <DutiesSection />
      <DoctorsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FooterSection />
    </main>
  );
}

