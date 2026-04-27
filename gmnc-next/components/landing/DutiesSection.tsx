"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const DUTIES = [
  {
    title: "Clinical Consultation",
    description: "High-fidelity clinical assessments for children with neurological conditions.",
    image: "/images/ne1.jpg",
    color: "bg-emerald-500"
  },
  {
    title: "Therapeutic Sessions",
    description: "Interactive and multidisciplinary therapy sessions tailored for growth.",
    image: "/images/ne2.jpg",
    color: "bg-blue-500"
  },
  {
    title: "Telehealth Support",
    description: "Remote monitoring and consultation to ensure continuous care.",
    image: "/images/ne3.webp",
    color: "bg-amber-500"
  },
  {
    title: "Outcome Tracking",
    description: "Data-driven progress monitoring to achieve the best clinical results.",
    image: "/images/ne4.png",
    color: "bg-rose-500"
  },
  {
    title: "Rehabilitation Care",
    description: "Specialized rehabilitation protocols designed for neuro-motor development.",
    image: "/images/ne5.jpg",
    color: "bg-indigo-500"
  },
  {
    title: "Family Engagement",
    description: "Empowering caregivers with the tools and knowledge for home-based support.",
    image: "/images/ne6.jpg",
    color: "bg-teal-500"
  },
  {
    title: "Community Growth",
    description: "Integrating children into supportive community environments for social health.",
    image: "/images/ne7.webp",
    color: "bg-violet-500"
  }
];

export default function DutiesSection() {
  return (
    <section className="py-24 bg-white overflow-hidden" id="duties">
      <div className="container mx-auto md:px-2 px-6 lg:px-10">
        <div className="max-w-3\xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4"
          >
            Clinical <span className="text-emerald-600">Duties</span> in Action
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 font-medium text-lg"
          >
            Experience the multidisciplinary approach we take to provide the highest fidelity rehabilitation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {DUTIES.map((duty, i) => (
            <motion.div
              key={duty.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-6 shadow-2xl shadow-slate-200/50">
                <img 
                  src={duty.image} 
                  alt={duty.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-6 left-6 right-6">
                   <div className={cn("w-12 h-1 bg-white rounded-full mb-3 transition-all duration-500 group-hover:w-full", duty.color)} />
                   <h3 className="text-xl font-bold text-white mb-1">{duty.title}</h3>
                </div>
              </div>
              <p className="text-slate-500 text-sm font-medium leading-relaxed px-4">
                {duty.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
