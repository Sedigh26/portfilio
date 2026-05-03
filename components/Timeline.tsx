"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, PlayCircle, Rocket } from "lucide-react";

const timelineItems = [
  {
    year: "Present",
    title: "Professional Freelancing & Institutional Projects",
    description: "Building sovereign systems, enterprise-grade architectures, and high-security web applications.",
    icon: <Rocket size={20} className="text-emerald-400" />
  },
  {
    year: "Recent",
    title: "Central Bank (BCM) Project",
    description: "Architected the BCM-AEMS platform, implementing advanced Maker-Checker Logic and financial data management systems.",
    icon: <Briefcase size={20} className="text-emerald-400" />
  },
  {
    year: "Graduation",
    title: "SNIM Graduation Project",
    description: "Developed comprehensive industrial automation and business modeling via object-oriented architecture and UML.",
    icon: <PlayCircle size={20} className="text-emerald-400" />
  },
  {
    year: "Foundation",
    title: "Education & Early Development",
    description: "Built strong foundations in Computer Science, full-stack web technologies, and software engineering methodologies.",
    icon: <GraduationCap size={20} className="text-emerald-400" />
  }
];

export function Timeline() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-white">Growth Journey</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">A timeline of institutional projects and continuous learning.</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[27px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/10" />

          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot/icon */}
                <div className="absolute left-0 md:left-1/2 -translate-x-[2px] md:-translate-x-1/2 w-14 h-14 bg-black rounded-full border border-white/20 flex items-center justify-center z-10 shadow-lg">
                  {item.icon}
                </div>

                {/* Content */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pl-16" : "md:pr-16 text-left md:text-right"
                }`}>
                  <div className="glass-card rounded-3xl p-6 relative group hover:border-emerald-500/50 hover:bg-white/5 transition-all">
                    <span className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded-full mb-3 uppercase tracking-wider border border-emerald-500/20">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold font-heading mb-2 text-white">{item.title}</h3>
                    <p className="text-gray-400 text-sm font-medium leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
