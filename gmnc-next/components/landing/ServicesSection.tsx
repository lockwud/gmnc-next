import Link from "next/link";
import {
  Pill,
  UserCheck,
  Stethoscope,
  HeartPulse,
  ShieldCheck,
  PhoneCall,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  featured?: boolean;
  cta?: { label: string; href: string };
}

const SERVICES: Service[] = [
  {
    title: "Medication Tracking",
    description:
      "Convenient access to precise medication schedules and expert pharmaceutical guidance, all in one place.",
    icon: Pill,
  },
  {
    title: "Neurologist Consult",
    description:
      "Consult experienced pediatric neuro specialists for accurate diagnoses and personalized treatment plans.",
    icon: UserCheck,
    featured: true,
  },
  {
    title: "Progress Checkup",
    description:
      "Regular health checkups to monitor your child's well-being and track developmental milestones early.",
    icon: Stethoscope,
  },
  {
    title: "Parent Consultation",
    description:
      "Professional guidance on maintaining a healthy lifestyle, managing pediatric chronic conditions, and more.",
    icon: HeartPulse,
  },
  {
    title: "Therapy Planning",
    description:
      "Structured rehabilitation plans tailored to your child's neurological goals, with milestones tracked across every therapy session.",
    icon: ShieldCheck,
  },
  {
    title: "Urgent Support",
    description:
      "Quick access to clinical experts, ensuring immediate care when you need it the most.",
    icon: PhoneCall,
    cta: { label: "Contact Us", href: "#contact" },
  },
];

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <div
      className={cn(
        "group flex flex-col items-center rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2",
        service.featured
          ? "relative overflow-hidden bg-blue-600 text-white shadow-xl shadow-blue-600/20"
          : "border border-slate-100 bg-white shadow-sm hover:border-slate-200 hover:shadow-xl"
      )}
    >
      {service.featured && (
        <div className="absolute top-0 right-0 -mr-10 -mt-10 h-32 w-32 rounded-bl-full bg-white/10" />
      )}

      <div
        className={cn(
          "relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-full",
          service.featured ? "bg-white/20 backdrop-blur-sm" : "bg-blue-50"
        )}
      >
        <Icon
          className={cn("h-6 w-6", service.featured ? "text-white" : "text-blue-600")}
        />
      </div>

      <h3
        className={cn(
          "relative z-10 mb-3 text-xl font-bold",
          service.featured ? "text-white" : "text-slate-900"
        )}
      >
        {service.title}
      </h3>

      <p
        className={cn(
          "relative z-10 text-sm leading-relaxed",
          service.featured ? "text-blue-100" : "text-slate-600",
          service.cta && "mb-6"
        )}
      >
        {service.description}
      </p>

      {service.cta && (
        <Link
          href={service.cta.href}
          className={cn(
            "relative z-10 mt-auto inline-flex items-center gap-1.5 rounded-full px-6 py-2 text-sm font-medium transition-colors",
            service.featured
              ? "border border-white/40 text-white hover:bg-white hover:text-slate-900"
              : "bg-blue-600 text-white hover:bg-blue-700"
          )}
        >
          {service.cta.label}
          <ChevronRight className="h-4 w-4" />
        </Link>
      )}

      {service.featured && (
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      )}
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 flex max-w-3xl flex-col items-center text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Our Services
          </span>
          <h2 className="mb-6 mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-slate-600">
            At GmNC, we offer a wide range of medical services tailored to your child&apos;s needs,
            from routine progress check-ups to specialized neurorehabilitation treatments.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
