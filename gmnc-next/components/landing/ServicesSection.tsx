import { Plus, Pill, UserCheck, Stethoscope, HeartPulse, ShieldCheck, PhoneCall } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Medication Tracking",
      description: "Convenient access to precise medication schedules & expert pharmaceutical advice, all in one place.",
      icon: <Pill className="w-6 h-6 text-blue-600" />,
      bg: "bg-blue-50/50",
      textMode: "light"
    },
    {
      title: "Neurologist Consult",
      description: "Consult experienced pediatric neuro specialists for accurate diagnoses & personalized treatment plans.",
      icon: <UserCheck className="w-6 h-6 text-white" />,
      bg: "bg-blue-600",
      textMode: "dark"
    },
    {
      title: "Progress Checkup",
      description: "Regular health checkups to monitor your child's well-being and track developmental milestones early.",
      icon: <Stethoscope className="w-6 h-6 text-blue-600" />,
      bg: "bg-blue-50/50",
      textMode: "light"
    },
    {
      title: "Parent Consultation",
      description: "Professional guidance on maintaining a healthy lifestyle, managing pediatric chronic conditions, and more.",
      icon: <HeartPulse className="w-6 h-6 text-blue-600" />,
      bg: "bg-blue-50/50",
      textMode: "light"
    },
    {
      title: "Therapy Planning",
      description: "Comprehensive health insurance plans offering financial protection for extensive medical treatments.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      bg: "bg-blue-50/50",
      textMode: "light"
    },
    {
      title: "Urgent Support",
      description: "Quick access to clinical experts, ensuring immediate care when you need it the most.",
      icon: <PhoneCall className="w-6 h-6 text-white" />,
      bg: "bg-[#71717a]", // zinc-500
      textMode: "dark"
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col flex-wrap items-center text-center max-w-3xl mx-auto mb-16">
        <div className="flex items-center gap-2 mb-4">
          <Plus className="w-5 h-5 text-blue-600" />
          <h4 className="text-blue-600 font-bold tracking-wider uppercase text-sm">Our Services</h4>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
          Comprehensive Healthcare Solutions
        </h2>
        <p className="text-slate-600">
          At GmNC, we offer a wide range of medical services tailored to your child's needs, from routine progress check-ups to specialized neurorehabilitation treatments.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`rounded-2xl p-8 flex flex-col items-center text-center transform transition-transform hover:-translate-y-2 cursor-pointer shadow-sm ${service.bg} border border-slate-100 object-cover`}
          >
            <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${service.textMode === "dark" ? "bg-white/20" : "bg-white shadow-sm"}`}>
              {service.icon}
            </div>
            <h3 className={`text-xl font-bold mb-3 ${service.textMode === "dark" ? "text-white" : "text-slate-900"}`}>
              {service.title}
            </h3>
            <p className={`text-sm leading-relaxed mb-6 ${service.textMode === "dark" ? "text-white/80" : "text-slate-600"}`}>
              {service.description}
            </p>

            {service.textMode === "dark" && service.title === "Urgent Support" && (
              <button className="mt-auto px-6 py-2 rounded-full border border-white/40 text-white text-sm hover:bg-white hover:text-slate-900 transition-colors">
                Contact Us {">"}
              </button>
            )}

            {/* Hover visual cue for the blue card */}
            {service.textMode === "dark" && service.title !== "Urgent Support" && (
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
