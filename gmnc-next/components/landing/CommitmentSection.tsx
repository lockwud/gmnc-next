import { Plus } from "lucide-react";
import Image from "next/image";

export default function CommitmentSection() {
  return (
    <section className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="relative rounded-2xl overflow-hidden p-10 md:p-16">
        <Image src="/images/he6.jfif" alt="Medical team banner" fill className="lg:object-cover object-center" />
        <div className="absolute inset-0 bg-[#2b3a55]/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#192233]/90 to-transparent"></div>
        <div className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
          
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Plus className="w-5 h-5 text-orange-400" />
              <h4 className="text-orange-400 font-bold tracking-wider uppercase text-sm">Our Commitment</h4>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">
              Dedicated To Excellence In Healthcare Through Trusted Partnerships
            </h2>
          </div>
          
          <div>
            <p className="text-white/90 text-sm md:text-base leading-relaxed">
              We are committed to providing exceptional care by working with leading healthcare professionals, technology providers, and trusted medical partners in the field of pediatric neurorehabilitation.
            </p>
          </div>
          
        </div>

        {/* Logos Row */}
        <div className="grid grid-cols-2 flex-wrap md:flex items-center justify-between gap-8 pt-8 border-t border-white/20">
        </div>
        </div>
      </div>
    </section>
  );
}
