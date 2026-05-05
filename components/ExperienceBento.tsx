"use client";

import { motion } from "framer-motion";
import { Building2, Settings, Code, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function ExperienceBento() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-white">Enterprise Experience</h2>
          <p className="text-gray-400 max-w-2xl text-lg">Delivering mission-critical architecture for sovereign institutions.</p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 md:auto-rows-[300px]"
        >
          {/* Large Card: BCM Project */}
          <motion.div variants={item} className="md:col-span-2 md:row-span-2 glass-card rounded-3xl p-8 relative overflow-hidden group flex flex-col justify-between">
            <Image
              src="/images/projcts/scrnshot BCM/Capture d'écran 2026-04-06 121132.png"
              alt="BCM Project Screenshot"
              fill
              className="object-cover opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 z-0"
            />
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-500/20 transition-colors duration-500 z-0" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                <Building2 className="text-emerald-400" size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold font-heading mb-2 text-white">Central Bank (BCM)</h3>
              <p className="text-xl font-medium text-emerald-400 mb-4">Sovereign Budgeting & AEMS</p>
              <p className="text-gray-400 mb-6 max-w-md font-medium leading-relaxed">
                Architected and developed the BCM-AEMS financial platform featuring Maker-Checker Logic, non-obligatory budget allocation models, and robust PDF export systems.
              </p>
            </div>
            <Link 
              href="https://github.com/Sedigh26" 
              target="_blank"
              className="mt-auto inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-emerald-400 hover:bg-white/10 transition-colors z-10"
            >
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>

          {/* Medium Card: SNIM */}
          <motion.div variants={item} className="md:col-span-1 md:row-span-1 glass-card rounded-3xl p-8 relative overflow-hidden group flex flex-col justify-between">
            <Image
              src="/images/projcts/scrnshot SNIM/Capture d'écran 2026-05-03 213614.png"
              alt="SNIM Project Screenshot"
              fill
              className="object-cover opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 z-0"
            />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 border border-white/10">
                <Settings className="text-emerald-400" size={24} />
              </div>
              <h3 className="text-xl font-bold font-heading mb-1 text-white">SNIM Project</h3>
              <p className="text-sm font-semibold text-emerald-400 mb-3">Industrial Automation</p>
              <p className="text-sm text-gray-400 mb-4 line-clamp-3 font-medium leading-relaxed">
                Developed an industrial automation system modeling complex workflows using advanced UML and object-oriented principles.
              </p>
            </div>
            <Link 
              href="https://github.com/Sedigh26/snim-industrial-system-case-study" 
              target="_blank"
              className="mt-auto inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-emerald-400 hover:bg-white/10 transition-colors z-10"
            >
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>

          {/* Medium Card: École El-Emal */}
          <motion.div variants={item} className="md:col-span-1 md:row-span-1 glass-card rounded-3xl p-8 relative overflow-hidden group flex flex-col justify-between">
            <Image
              src="/images/projcts/scrnshot ecole elemal/WhatsApp Image 2026-05-01 at 21.57.38.jpeg"
              alt="Ecole El-Emal Screenshot"
              fill
              className="object-cover opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 z-0"
            />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 border border-white/10">
                <Code className="text-emerald-400" size={24} />
              </div>
              <h3 className="text-xl font-bold font-heading mb-1 text-white">École El-Emal</h3>
              <p className="text-sm font-semibold text-emerald-400 mb-3">Headless CMS</p>
              <p className="text-sm text-gray-400 mb-4 line-clamp-3 font-medium leading-relaxed">
                Led production deployment and implemented a scalable headless CMS architecture for dynamic content management.
              </p>
            </div>
            <Link 
              href="https://ecoleelemel.com" 
              target="_blank"
              className="mt-auto inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-emerald-400 hover:bg-white/10 transition-colors z-10"
            >
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
