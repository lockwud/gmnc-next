import { MapPin, Mail, Phone, Clock } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-[#0f172a] text-slate-300 py-2 text-xs border-b border-white/10 hidden lg:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          <p>Get priority access to our new clinical tools this month!</p>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
            <MapPin className="w-3.5 h-3.5" />
            <span>Kumasi, AT-1143-8393</span>
          </div>
          <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
            <Mail className="w-3.5 h-3.5" />
            <span>getmyneurocare@info</span>
          </div>
          <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
            <Phone className="w-3.5 h-3.5" />
            <span>+233 54 789 4567</span>
          </div>
        </div>
      </div>
    </div>
  );
}
