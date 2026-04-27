import { MapPin, Mail, Phone } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-[#0f172a] text-slate-300 text-xs border-b border-white/10 hidden lg:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap justify-between items-center gap-y-1.5 gap-x-4">
        {/* Announcement */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shrink-0" />
          <p>Get priority access to our new clinical tools this month!</p>
        </div>

        {/* Contact info — wraps below announcement on small screens */}
        <div className="flex items-center flex-wrap gap-x-4 gap-y-1">
          <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span>Kumasi, AT-1143-8393</span>
          </div>
          <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
            <Mail className="w-3.5 h-3.5 shrink-0" />
            <span>getmyneurocare@info</span>
          </div>
          <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
            <Phone className="w-3.5 h-3.5 shrink-0" />
            <span>+233 54 789 4567</span>
          </div>
        </div>
      </div>
    </div>
  );
}
