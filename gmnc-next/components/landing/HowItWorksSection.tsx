import { Plus } from "lucide-react";
import Image from "next/image";

export default function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "Book An Appointment",
      desc: "Schedule your visit through our easy-to-use online platform or by calling our friendly support team. Choose the time that works best for you.",
    },
    {
      num: "02",
      title: "Consult Our Experts",
      desc: "Meet with our highly skilled doctors and medical specialists who will listen to your concerns, provide an accurate diagnosis, and recommend options.",
    },
    {
      num: "03",
      title: "Begin Therapy",
      desc: "Once a treatment plan is established, our team ensures you receive the necessary medical services, whether it's therapy or specialized care.",
    },
    {
      num: "04",
      title: "Follow-Up",
      desc: "After your treatment, we stay connected for follow-up consultations, ensuring your recovery is progressing smoothly and addressing any questions.",
    }
  ];

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-12 gap-12 items-start mb-12">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-2 mb-4">
            <Plus className="w-5 h-5 text-blue-600" />
            <h4 className="text-blue-600 font-bold tracking-wider uppercase text-sm">How It Works</h4>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
            Trusted Care With A <br /> Focus On Your Child's Progress
          </h2>
        </div>
        <div className="lg:col-span-5 flex flex-col justify-end h-full">
          <p className="text-slate-600 text-sm md:text-base leading-relaxed lg:pb-6">
            At GmNC, we've streamlined the healthcare process to ensure you receive the best pediatric care with ease and convenience.
          </p>
          <div className="w-full h-60 mt-4 rounded-2xl overflow-hidden relative shadow-lg hidden lg:block">
            <Image src="/images/he7.jpeg" alt="Medical facility" fill className="object-cover" />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-blue-50/50 rounded-2xl p-8 flex gap-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-blue-600/30">
                {step.num}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
