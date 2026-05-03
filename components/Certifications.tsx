"use client";

import { motion } from "framer-motion";
import { Award, Brain, ExternalLink, Code, Briefcase, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const certifications = [
  {
    title: "AI for Business Professionals",
    issuer: "Coursera",
    category: "ai",
    link: "/images/certs/AI for Business Professionals (1).pdf",
  },
  {
    title: "Critical Thinking in the AI Era",
    issuer: "edX",
    category: "ai",
    link: "/images/certs/Critical Thinking in the AI Era (1).pdf",
  },
  {
    title: "Business Communications",
    issuer: "Coursera",
    category: "business",
    link: "/images/certs/Business Communications (1).pdf",
  },
  {
    title: "Software Engineering Certification",
    issuer: "Institute",
    category: "tech",
    link: "/images/certs/aboubekr-sedigh-mouhamed-salih-ely-beyat-certificate (1).pdf",
  },
  {
    title: "Technical Achievement",
    issuer: "Certification Authority",
    category: "tech",
    link: "/images/certs/53xmvvyt_1774652282336 (1).pdf",
  },
  {
    title: "Specialized Training",
    issuer: "Educational Partner",
    category: "general",
    link: "/images/certs/certificate-g9thx3tyi823-1774133265 (1) (1).pdf",
  },
  {
    title: "Professional Excellence",
    issuer: "Global Institute",
    category: "business",
    link: "/images/certs/certificate-j57y73micrex-1774180460 (1).pdf",
  },
  {
    title: "Advanced Skillset",
    issuer: "Industry Leader",
    category: "tech",
    link: "/images/certs/certificate-q86hmg3t6wk9-1776471807 (3).pdf",
  },
  {
    title: "Core Competency",
    issuer: "Training Center",
    category: "general",
    link: "/images/certs/certificate-uevtobh9sxc9-1776458366.pdf",
  }
];

function getCategoryStyles(category: string) {
  switch (category) {
    case "ai":
      return { icon: <Brain size={24} />, bgIcon: <Brain size={100} />, color: "text-emerald-400", bgColor: "bg-emerald-500/10", borderColor: "border-emerald-500/20", hoverBg: "hover:bg-emerald-500/5", hoverBorder: "hover:border-emerald-500/50" };
    case "tech":
      return { icon: <Code size={24} />, bgIcon: <Code size={100} />, color: "text-blue-400", bgColor: "bg-blue-500/10", borderColor: "border-blue-500/20", hoverBg: "hover:bg-blue-500/5", hoverBorder: "hover:border-blue-500/50" };
    case "business":
      return { icon: <Briefcase size={24} />, bgIcon: <Briefcase size={100} />, color: "text-amber-400", bgColor: "bg-amber-500/10", borderColor: "border-amber-500/20", hoverBg: "hover:bg-amber-500/5", hoverBorder: "hover:border-amber-500/50" };
    default:
      return { icon: <ShieldCheck size={24} />, bgIcon: <ShieldCheck size={100} />, color: "text-purple-400", bgColor: "bg-purple-500/10", borderColor: "border-purple-500/20", hoverBg: "hover:bg-purple-500/5", hoverBorder: "hover:border-purple-500/50" };
  }
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
};

export function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-white">Validation & Growth</h2>
          <p className="text-gray-400 max-w-2xl text-lg">Continuous evolution in high-tech and artificial intelligence.</p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {certifications.map((cert, index) => {
            const styles = getCategoryStyles(cert.category);
            return (
              <motion.div 
                key={index} 
                variants={item}
                className={cn(
                  "glass-card rounded-3xl p-6 flex flex-col justify-between group relative overflow-hidden transition-all duration-300",
                  styles.hoverBg,
                  styles.hoverBorder
                )}
              >
                <div className={cn("absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500", styles.color)}>
                  {styles.bgIcon}
                </div>
                
                <div className="relative z-10">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center mb-6",
                    styles.bgColor,
                    styles.color,
                    "border",
                    styles.borderColor
                  )}>
                    {styles.icon}
                  </div>
                  
                  <h3 className="text-lg font-bold font-heading mb-2 leading-tight text-white">{cert.title}</h3>
                  <p className="text-sm text-gray-400 mb-8 font-medium">{cert.issuer}</p>
                </div>

                <Link 
                  href={cert.link} 
                  target="_blank"
                  className="relative z-10 flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-emerald-400 transition-colors w-fit group/btn"
                >
                  View Certificate
                  <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
