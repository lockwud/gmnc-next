"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Clock, Menu, X } from "lucide-react";

export default function LandingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-4" : "bg-[#192233] py-5 border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="GmNC Logo" 
            width={100} 
            height={100} 
            className="w-12 h-12 md:w-14 md:h-14 object-cover"
          />
          <span className={`text-xl font-bold ${scrolled ? "text-slate-900" : "text-white"}`}>
            GmNC
          </span>
        </Link>
        
        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className={`text-sm font-medium ${scrolled ? "text-slate-600 hover:text-blue-600" : "text-slate-300 hover:text-white"} transition-colors`}>Home</Link>
          <Link href="#about" className={`text-sm font-medium ${scrolled ? "text-slate-600 hover:text-blue-600" : "text-slate-300 hover:text-white"} transition-colors`}>About Us</Link>
          <Link href="#services" className={`text-sm font-medium ${scrolled ? "text-slate-600 hover:text-blue-600" : "text-slate-300 hover:text-white"} transition-colors`}>Services</Link>
          <Link href="#locations" className={`text-sm font-medium ${scrolled ? "text-slate-600 hover:text-blue-600" : "text-slate-300 hover:text-white"} transition-colors`}>Our Locations</Link>
          <Link href="#contact" className={`text-sm font-medium ${scrolled ? "text-slate-600 hover:text-blue-600" : "text-slate-300 hover:text-white"} transition-colors`}>Contact</Link>
          
          <div className="relative group">
            <button className={`flex items-center gap-1 text-sm font-medium ${scrolled ? "text-slate-600 hover:text-blue-600" : "text-slate-300 hover:text-white"} transition-colors`}>
              Pages <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top translate-y-2 group-hover:translate-y-0">
              <div className="py-2 flex flex-col">
                <Link href="#testimonials" className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600">Testimonials</Link>
                <Link href="#doctors" className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600">Our Team</Link>
                <Link href="#faq" className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600">FAQ</Link>
              </div>
            </div>
          </div>
        </nav>
        
        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <div className={`flex items-center gap-2 ${scrolled ? "text-slate-600" : "text-slate-300"}`}>
            <Clock className={`w-8 h-8 ${scrolled ? "text-slate-400" : "text-slate-500"}`} />
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold tracking-wider">Open Hours</span>
              <span className="text-xs font-medium">Mon-Sat: 9AM - 5PM</span>
            </div>
          </div>
          
          <Link
            href="/login"
            className={`px-6 py-2.5 rounded border text-sm font-medium transition-colors ${
              scrolled 
                ? "border-slate-400 text-slate-900 hover:text-blue-600 hover:border-blue-600" 
                : "border-slate-400 text-white hover:border-blue-500 hover:text-blue-500"
            }`}
          >
            Provider Sign In
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button 
            className={`p-2 rounded-md ${scrolled ? "text-slate-900" : "text-white"}`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Navigation */}
      <div className={`fixed inset-0 z-[100] transition-opacity duration-300 lg:hidden ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100" : "opacity-0"}`} 
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Sidebar */}
        <div className={`absolute top-0 right-0 w-4/5 max-w-sm bg-white h-full shadow-2xl flex flex-col pt-6 pb-8 transition-transform duration-300 ease-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex justify-between items-center px-6 mb-8 border-b border-slate-100 pb-4">
            <span className="text-2xl font-bold text-slate-900">GmNC</span>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 bg-slate-100 rounded-full text-slate-600 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <nav className="flex flex-col gap-6 px-8 overflow-y-auto overflow-x-hidden">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-slate-700 hover:text-blue-600">Home</Link>
            <Link href="#about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-slate-700 hover:text-blue-600">About Us</Link>
            <Link href="#services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-slate-700 hover:text-blue-600">Services</Link>
            <Link href="#locations" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-slate-700 hover:text-blue-600">Our Locations</Link>
            <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-slate-700 hover:text-blue-600">Contact</Link>
            
            <div className="flex flex-col mt-4 pt-6 border-t border-slate-100 gap-4">
              <span className="text-xs uppercase tracking-wider font-bold text-slate-400">Pages</span>
              <Link href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-slate-600 hover:text-blue-600">Testimonials</Link>
              <Link href="#doctors" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-slate-600 hover:text-blue-600">Our Team</Link>
              <Link href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-slate-600 hover:text-blue-600">FAQ</Link>
            </div>
            
            <div className="mt-8">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center w-full px-6 py-3 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 shadow-lg shadow-blue-600/30 transition-colors"
              >
                Provider Sign In
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
