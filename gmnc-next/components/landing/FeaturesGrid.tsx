import { Activity, Brain, Shield, UserPlus } from "lucide-react";

export default function FeaturesGrid() {
  const features = [
    {
      icon: <Activity className="w-6 h-6 text-emerald-500" />,
      title: "Precision Tracking",
      description: "Multidisciplinary data capture enabling accurate monitoring of CP patient metrics and rehabilitation milestones over time.",
      gradient: "from-emerald-500/10 to-teal-500/10",
      border: "hover:border-emerald-500/30",
    },
    {
      icon: <Brain className="w-6 h-6 text-indigo-500" />,
      title: "Smart Insights",
      description: "Advanced patient progress visualization that translates complex clinical data into actionable treatment pathways.",
      gradient: "from-indigo-500/10 to-purple-500/10",
      border: "hover:border-indigo-500/30",
    },
    {
      icon: <UserPlus className="w-6 h-6 text-amber-500" />,
      title: "Seamless Collaboration",
      description: "Connecting therapists, neurologists, and caregivers on a single, secure platform for unified patient care.",
      gradient: "from-amber-500/10 to-orange-500/10",
      border: "hover:border-amber-500/30",
    },
  ];

  return (
    <section id="features" className="py-24 relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">
          Reimagining Neurorehabilitation Care
        </h2>
        <p className="text-lg text-slate-600">
          A dedicated suite of tools specifically engineered for pediatric cerebral palsy case management, 
          bridging the gap between clinical appointments.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={`glass p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 border border-slate-200/50 ${feature.border} shadow-premium flex flex-col items-start`}
          >
            <div className={`p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 shadow-inner`}>
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
