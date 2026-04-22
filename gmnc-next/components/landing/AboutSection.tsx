import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  const points = [
    "Comprehensive Patient Care",
    "Evidence-Based Treatments",
    "Specialized Rehabilitation Programs",
    "Family-Centered Approach"
  ];

  return (
    <section className="py-20 lg:py-32 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[200px] md:h-[450] lg:h-[400px] w-full">            
            {/* Image 1 */}
            <div className="w-full lg:h-40">
              <Image src="/images/he7.jpeg" alt="Patient consultation" fill className="lg:object-cover brightness-80 rounded-3xl shadow-2xl border-4 border-white" />
            </div>
          </div>

          <div>
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">About GmNC</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4 mb-6">
              Dedicated to Transforming Neurological Care
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              We focus on delivering high-quality, specialized care for children requiring neurorehabilitation. Our integrated platform bridges the gap between expert therapists, comprehensive therapies, and data-driven progress tracking.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {points.map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{point}</span>
                </div>
              ))}
            </div>
            <button className="px-8 py-3.5 rounded bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors shadow-lg">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
