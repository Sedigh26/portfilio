"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Work", href: "#experience" },
  { name: "Experience", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      <div className="flex items-center gap-2 md:gap-6 px-3 py-2.5 md:px-6 md:py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-2xl pointer-events-auto">
        
        {/* Availability Badge (Inside Nav) */}
        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
          <span className="text-[11px] md:text-xs font-medium text-white/90 whitespace-nowrap">Available for Projects</span>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: CTA Button */}
        <div className="hidden md:block ml-2">
          <Link 
            href="https://wa.me/22226626250"
            target="_blank"
            className="flex items-center gap-1.5 bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors shadow-lg"
          >
            Let's Talk <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white/80 p-1.5 hover:bg-white/10 rounded-full transition-colors ml-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 10 }}
          className="absolute top-full mt-4 left-4 right-4 p-4 md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl pointer-events-auto"
        >
          <div className="flex flex-col space-y-4 px-2 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-white/80 hover:text-white flex items-center justify-between"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="https://wa.me/22226626250"
              target="_blank"
              className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full text-base font-bold mt-4"
              onClick={() => setIsOpen(false)}
            >
              Let's Talk <ArrowUpRight size={18} />
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
