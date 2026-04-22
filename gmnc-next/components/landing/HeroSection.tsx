import Link from "next/link";
import Image from "next/image";
import { UserPlus, Shield, Clock, Plus } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative">
      {/* Dark Hero Background */}
      <div className="relative pt-20 pb-40 lg:pt-32 lg:pb-52 overflow-hidden">
        
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero_bg.png" 
            alt="Child with flowers" 
            fill 
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#192233]/90mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#192233] via-[#192233]/90 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-white z-10 relative">
              <div className="flex items-center gap-2 text-orange-400 mb-6">
                <Plus className="w-4 h-4" />
                <span className="text-sm font-semibold tracking-wider uppercase">Welcome to GmNC</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                We Are Here To Streamline And Elevate Neurorehabilitation Care
              </h1>
              
              <p className="text-slate-400 text-lg mb-10 max-w-xl">
                Comprehensive specialized care with expert tools, advanced data tracking, and seamless collaboration. Your child's progress, our priority.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/login"
                  className="px-8 py-3.5 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20"
                >
                  Get Started
                </Link>
                <Link
                  href="#contact"
                  className="px-8 py-3.5 rounded border border-slate-500 text-white font-medium hover:bg-slate-800 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right Stats */}
            <div className="hidden lg:flex flex-col items-end justify-center gap-6 z-10 relative">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 w-64 text-center transform hover:-translate-y-1 transition-transform">
                <h3 className="text-4xl font-bold text-white mb-2">15+</h3>
                <p className="text-slate-400 text-sm">Years of Clinical Experience</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 w-64 text-center transform hover:-translate-y-1 transition-transform mr-12">
                <h3 className="text-4xl font-bold text-white mb-2">500+</h3>
                <p className="text-slate-400 text-sm">Successful Therapy Sessions</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Overlapping Bottom Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-24 mb-16 lg:-mt-32 lg:mb-24">
        <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
          
          <div className="bg-white rounded-xl shadow-xl p-8 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-6">
              <UserPlus className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Expert Therapists</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Skilled professionals delivering top-quality neurorehabilitation care.
            </p>
          </div>

          <div className="bg-blue-600 rounded-xl shadow-xl p-8 flex flex-col items-center text-center text-white transform hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full -mr-10 -mt-10"></div>
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-6 backdrop-blur-sm">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Priority Access</h3>
            <p className="text-blue-100 text-sm leading-relaxed relative z-10">
              Fast, reliable platform access when you need to review critical patient data most.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-6">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">24/7 Full Support</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Always here for clinical system appointments and technical emergencies.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
