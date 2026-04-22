import { Plus } from "lucide-react";
import Image from "next/image";

export default function BlogSection() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
        <div className="flex items-center gap-2 mb-4">
          <Plus className="w-5 h-5 text-blue-600" />
          <h4 className="text-blue-600 font-bold tracking-wider uppercase text-sm">Blog & News</h4>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
          Stay Informed With The Latest In
        </h2>
        <p className="text-slate-600">
          Our Blog & News section keeps you updated with the latest health tips, medical <br className="hidden md:block" /> breakthroughs, clinic news, and wellness advice.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">

        {/* Large Main Feature */}
        <div className="rounded-2xl overflow-hidden relative group cursor-pointer h-[500px]">
          <div className="absolute inset-0 bg-slate-300 transition-transform duration-500 group-hover:scale-105">
              <Image src="/images/cc1.jpg" alt="Health Checkups" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8">
            <div className="flex items-center gap-4 text-white/80 text-xs font-bold uppercase tracking-wider mb-3">
              <span>January 15, 2026</span>
              <span>•</span>
              <span>0 Comments</span>
              <span>•</span>
              <span>News</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-snug w-4/5">
              Understanding The Importance Of Regular Health Checkups
            </h3>
            <button className="self-start px-6 py-2 rounded-full bg-orange-400 text-white text-sm font-medium hover:bg-orange-500 transition-colors">
              Read More
            </button>
          </div>
        </div>

        {/* Small Features Stacked */}
        <div className="flex flex-col gap-8">

          <div className="flex flex-col sm:flex-row gap-6 group cursor-pointer h-full">
            <div className="w-full sm:w-48 aspect-video sm:aspect-square rounded-2xl bg-slate-300 overflow-hidden relative flex-shrink-0">
                <Image src="/images/cc2.jpg" alt="Stress Management" fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-4 line-clamp-2">
                How To Manage Stress And Improve Mental Well-being
              </h3>
              <p className="text-sm font-medium text-slate-500">Tuesday - January 24, 2026</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 group cursor-pointer h-full">
            <div className="w-full sm:w-48 aspect-video sm:aspect-square rounded-2xl bg-slate-300 overflow-hidden relative flex-shrink-0">
                <Image src="/images/cc3.webp" alt="Cognitive Development" fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-4 line-clamp-2">
                The Role of Nutrition In Long-Term Cognitive Development
              </h3>
              <p className="text-sm font-medium text-slate-500">Friday - February 10, 2026</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
