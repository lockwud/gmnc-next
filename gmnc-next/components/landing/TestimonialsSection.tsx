import { Plus, Quote, Star } from "lucide-react";
import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Samantha Elizabeth",
      location: "New York, NY",
      text: "I had an excellent experience at GmNC during my child's recent therapy session. The team was incredibly supportive and attentive. I felt cared for and reassured throughout the entire process.",
      img: "/images/pp1.jfif"
    },
    {
      name: "Olivia Marie",
      location: "Los Angeles, CA",
      text: "GmNC has been my go-to for my son's health consultations, and I am always impressed by the professionalism and genuine care from the doctors. They take the time to listen and explain things.",
      img: "/images/pp2.jpg"
    },
    {
      name: "Jessica Claire",
      location: "Chicago, IL",
      text: "The specialists at GmNC provided me with the guidance I needed to manage my daughter's health condition. Their expertise and timely support made a huge difference in her recovery, and I'm grateful.",
      img: "/images/pp3.jpg"
    }
  ];

  return (
    <section id="testimonials" className="bg-[#0f54ff] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 text-white">
          <div className="flex items-center gap-2 mb-4">
            <Plus className="w-5 h-5 text-orange-400" />
            <h4 className="text-orange-400 font-bold tracking-wider uppercase text-sm">Patient Testimonials</h4>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Hear From Those Who Trust GmNC
          </h2>
          <p className="text-white/80">
            Our patients' experiences speak volumes. Read how GmNC has provided compassionate, <br className="hidden md:block" />
            expert care and made a difference in their lives.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="flex flex-col text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded overflow-hidden relative shadow-sm border border-white/10">
                  <Image src={testimonial.img} alt={testimonial.name} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-white/70">{testimonial.location}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center flex-shrink-0 relative">
                  <Quote className="w-5 h-5 text-white fill-white absolute" />
                </div>
              </div>
              
              <p className="text-white/90 text-sm leading-relaxed mb-6 flex-1">
                {testimonial.text}
              </p>
              
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-orange-400 fill-orange-400" />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
