"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Code, User, Mail } from 'lucide-react';
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
      className="relative min-h-screen w-full text-white overflow-hidden flex flex-col items-center justify-center pt-20"
    >
      
      {/* 1. LAYER 1: BOTTOM (Massive Background Text) */}
      <motion.div 
        style={mounted ? { x: textX, y: textY } : {}}
        className="absolute z-0 select-none pointer-events-none flex items-center justify-center w-full top-1/2 -translate-y-1/2"
      >
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-[11vw] md:text-[8vw] lg:text-[7.5vw] font-black leading-none flex gap-3 md:gap-6 tracking-tighter whitespace-nowrap"
        >
          <span className="text-outline uppercase">ABOUBEKRIN</span>
          <span className="text-white uppercase">SEDIGH</span>
        </motion.h1>
      </motion.div>

      {/* 2. LAYER 2: MIDDLE (Portrait Image with organic float & parallax) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full flex items-center justify-center pointer-events-none">
        <motion.div 
          style={mounted ? { x: imageX, y: imageY } : {}}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="w-full h-full relative overflow-hidden rounded-full border border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.05)] bg-[#0a0a0a]"
          >
            <Image 
              src="/images/hero/professional_headshot.png" 
              alt="Aboubekr Sedigh"
              fill
              className="object-cover object-top pointer-events-auto"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      {/* 3. LAYER 3: TOP (UI Elements) */}
      
      {/* Bottom Left Info */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-10 left-6 md:bottom-20 md:left-12 z-30 max-w-sm pointer-events-none"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading text-white pointer-events-auto drop-shadow-lg">
          Full-Stack Developer
        </h2>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 font-medium pointer-events-auto max-w-[280px]">
          Designing and architecting sovereign systems that are secure, scalable, and enterprise-focused.
        </p>
        <div className="pointer-events-auto">
          <Link 
            href="https://github.com/Sedigh26"
            target="_blank"
            className="flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 hover:scale-105 transition-all duration-300 shadow-xl group inline-flex"
          >
            Let's collaborate 
            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </motion.div>

      {/* Right Side Social Pills */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute right-4 top-1/2 -translate-y-1/2 md:right-10 z-30 flex flex-col gap-3"
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
