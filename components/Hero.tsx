"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Code, User, Mail, Download } from 'lucide-react';
import Link from 'next/link';

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth) * 2 - 1);
    mouseY.set((clientY / innerHeight) * 2 - 1);
  };

  const springConfig = { damping: 50, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Background Text moves slightly
  const textX = useTransform(smoothX, [-1, 1], [30, -30]);
  const textY = useTransform(smoothY, [-1, 1], [15, -15]);

  // Image moves in opposite direction to create depth
  const imageX = useTransform(smoothX, [-1, 1], [-40, 40]);
  const imageY = useTransform(smoothY, [-1, 1], [-20, 20]);

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full text-white overflow-hidden flex flex-col items-center justify-center py-20 md:py-0"
    >
      
      {/* 1. VISUAL LAYER (Background Text + Image) */}
      <div className="relative md:absolute inset-0 flex items-center justify-center z-10 w-full mb-12 md:mb-0">
        
        {/* Background Name (Layer 0) */}
        <motion.div 
          style={mounted ? { x: textX, y: textY } : {}}
          className="absolute z-0 select-none pointer-events-none flex items-center justify-center w-full top-1/2 -translate-y-1/2 overflow-hidden"
        >
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-[15vw] md:text-[8vw] lg:text-[7.5vw] font-black leading-none flex flex-col md:flex-row gap-0 md:gap-6 tracking-tighter whitespace-nowrap opacity-10 md:opacity-100"
          >
            <span className="text-outline uppercase">ABOUBEKRIN</span>
            <span className="text-white uppercase">SEDIGH</span>
          </motion.h1>
        </motion.div>

        {/* Profile Image (Layer 1) */}
        <motion.div 
          style={mounted ? { x: imageX, y: imageY } : {}}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="relative z-10 w-[260px] h-[260px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="w-full h-full relative overflow-hidden rounded-full border border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.05)] bg-[#0a0a0a]"
          >
            <Image 
              src="/images/hero/hero.jpeg" 
              alt="Aboubekr Sedigh"
              fill
              className="object-cover object-top pointer-events-auto"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      {/* 2. UI LAYER (Info + Socials) */}
      
      {/* Info Section (Stacks under image on mobile, Absolute bottom-left on desktop) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative md:absolute md:bottom-10 md:left-12 z-30 flex flex-col items-center md:items-start text-center md:text-left px-6 md:px-0"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-white drop-shadow-lg">
          Full-Stack Developer
        </h2>
        <p className="text-gray-400 text-base md:text-base leading-relaxed mb-8 font-medium max-w-[300px] md:max-w-md">
          Designing and architecting sovereign systems that are secure, scalable, and enterprise-focused.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link 
            href="https://github.com/Sedigh26"
            target="_blank"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 hover:scale-105 transition-all duration-300 shadow-xl group"
          >
            Let's collaborate 
            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <a 
            href="/images/CV_Aboubekrin_Sedigh.docx"
            download
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-full font-bold hover:bg-white/10 hover:scale-105 transition-all duration-300 shadow-xl group"
          >
            Download CV
            <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>
      </motion.div>

      {/* Social Pills */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative md:absolute md:right-10 md:top-1/2 md:-translate-y-1/2 z-30 flex flex-row md:flex-col flex-wrap justify-center gap-3 mt-12 md:mt-0 px-6 md:px-0"
      >
        <SocialButton icon={<Code size={18}/>} label="GitHub" href="https://github.com/Sedigh26" />
        <SocialButton icon={<User size={18}/>} label="LinkedIn" href="https://www.linkedin.com/in/aboubekrin-sedigh-ba6415369/" />
        <SocialButton icon={<Mail size={18}/>} label="Email" href="mailto:sedighmedsalih@gmail.com" />
        <SocialButton icon={<WhatsAppIcon size={18}/>} label="WhatsApp" href="https://wa.me/22226626250" />
      </motion.div>

      {/* Removed bottom fade gradient to blend into next section seamlessly */}
    </section>
  );
}

function SocialButton({ icon, label, href }: { icon: React.ReactNode, label: string, href: string }) {
  return (
    <a 
      href={href} 
      target="_blank"
      className="flex items-center gap-3 px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm hover:bg-white hover:text-black transition-all duration-300 group min-w-[50px] md:min-w-[150px] shadow-lg"
    >
      <span className="text-gray-400 group-hover:text-black transition-colors flex items-center justify-center w-5 h-5">{icon}</span>
      <span className="hidden md:inline font-semibold text-gray-300 group-hover:text-black transition-colors">{label}</span>
    </a>
  );
}
