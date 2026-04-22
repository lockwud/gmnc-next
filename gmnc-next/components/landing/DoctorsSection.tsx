import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { TwitterIcon } from "@/components/icons/TwitterIcon";
import Image from "next/image";

export default function DoctorsSection() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Jenkins",
      role: "Lead Neurologist",
      image: "/images/he1.jpg",
    },
    {
      id: 2,
      name: "Dr. Emily Taylor",
      role: "Pediatric Specialist",
      image: "/images/he2.jpg",
    },
    {
      id: 3,
      name: "Dr. Michael Chen ",
      role: "Rehabilitation Director",
      image: "/images/he4.jpeg",
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-slate-50" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Our Specialists</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4 mb-6">
            Meet Our Exceptional Team
          </h2>
          <p className="text-slate-600 text-lg">
            Our team of dedicated specialists is committed to providing the highest standard of neurorehabilitation care to support your child's journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] bg-gradient-to-br from-indigo-50 to-blue-50 relative flex items-center justify-center overflow-hidden">
                <Image src={doctor.image} alt={doctor.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                
                <div className="absolute bottom-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                    <LinkedinIcon className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-sky-500 hover:bg-sky-500 hover:text-white transition-colors">
                    <TwitterIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{doctor.name}</h3>
                <p className="text-blue-600 font-medium text-sm mb-4">{doctor.role}</p>
                <div className="w-12 h-1 bg-blue-100 mx-auto rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
