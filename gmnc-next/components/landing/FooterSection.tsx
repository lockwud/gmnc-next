import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { TwitterIcon } from "@/components/icons/TwitterIcon";
import { FacebookIcon } from "@/components/icons/FacebookIcon";

export default function FooterSection() {
  return (
    <>
      {/* Newsletter Section */}
      <section className="bg-[#e2e8f0] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 leading-tight">
              Subscribe To Our Newsletter For Health Tips And Updates
            </h2>
            <p className="text-slate-600 mb-8 text-sm md:text-base">
              Subscribe to GmNC's newsletter and stay up to date on our services, medical advice, and more!
            </p>
            <div className="flex items-center bg-white rounded-full lg:p-2 max-w-md shadow-sm">
              <Mail className="w-5 h-5 text-slate-400 ml-3 mr-2" />
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 bg-transparent border-none focus:outline-none text-sm text-slate-700 placeholder:text-slate-400"
              />
              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer Section */}
      <footer className="bg-[#0f172a] text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Left Side (Brand & Contact) */}
            <div>
              <Link href="/" className="flex items-center gap-3 mb-8">
                <Image 
                  src="/logo.png" 
                  alt="GmNC Logo" 
                  width={60} 
                  height={60} 
                  className="w-12 h-12 object-contain bg-white rounded-sm p-1"
                />
                <span className="text-xl font-bold tracking-wide">GmNC</span>
              </Link>
              <h3 className="text-3xl font-bold mb-6 text-white leading-snug w-4/5">
                Your Health, Our Priority Anytime, Anywhere
              </h3>
              <p className="text-slate-400 text-sm mb-10">
                Reach out to us for all your healthcare needs.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors text-xs font-semibold">
                  <MessageSquare className="w-4 h-4" /> Contact Us
                </Link>
                <Link href="mailto:support@gmnc.com" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors text-xs font-semibold">
                  <Mail className="w-4 h-4" /> Email Us
                </Link>
                <Link href="tel:31012344567" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors text-xs font-semibold">
                  <Phone className="w-4 h-4" /> (310) 123-44567
                </Link>
                <Link href="#locations" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors text-xs font-semibold">
                  <MapPin className="w-4 h-4" /> Location on map
                </Link>
              </div>
            </div>

            {/* Right Side (Links) */}
            <div className="grid grid-cols-2 gap-8 lg:ml-auto w-full lg:w-4/5">
              <div>
                <h4 className="text-orange-400 font-bold mb-6 text-sm tracking-wider">Company</h4>
                <ul className="space-y-4">
                  <li><Link href="#about" className="text-slate-400 hover:text-white transition-colors text-sm">About Us</Link></li>
                  <li><Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Our Mission & Vision</Link></li>
                  <li><Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Careers</Link></li>
                  <li><Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Legal Notice</Link></li>
                  <li><Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Global Network</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-orange-400 font-bold mb-6 text-sm tracking-wider">Services</h4>
                <ul className="space-y-4">
                  <li><Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Pharmacy Services</Link></li>
                  <li><Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Medical Specialties</Link></li>
                  <li><Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Health Checkups</Link></li>
                  <li><Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Health Consultation</Link></li>
                  <li><Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Emergency Services</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-700/50 pt-8 mt-12 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-6">
              <div className="flex gap-4">
                <span className="cursor-pointer hover:text-white"><LinkedinIcon className="w-5 h-5" /></span>
                <span className="cursor-pointer hover:text-white"><FacebookIcon className="w-5 h-5" /></span>
                <span className="cursor-pointer hover:text-white"><TwitterIcon className="w-5 h-5" /></span>
              </div>
              <div className="flex gap-4">
                <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-white transition-colors">Terms & Condition</Link>
                <Link href="#" className="hover:text-white transition-colors">Do not share or sell my information</Link>
              </div>
            </div>
            <p>2026 © GmNC. All Rights Reserved.</p>
          </div>
          
        </div>
      </footer>
    </>
  );
}
