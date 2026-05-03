"use client";

import { motion } from "framer-motion";
import { Server, Layout, Sparkles } from "lucide-react";

const stackGroups = [
  {
    title: "Backend Core",
    icon: <Server size={24} className="text-emerald-400" />,
    items: ["Laravel 11", "PHP 8.2", "MySQL", "PostgreSQL", "Redis"],
  },
  {
    title: "Frontend Architecture",
    icon: <Layout size={24} className="text-emerald-400" />,
    items: ["React 18", "Next.js 14", "Tailwind CSS", "Framer Motion", "TypeScript"],
  },
  {
    title: "AI & Tooling",
    icon: <Sparkles size={24} className="text-emerald-400" />,
    items: ["Python", "FastAPI", "Vercel", "Docker", "Git Actions"],
  }
];

export function TechStack() {
  return (
    <section id="tech-stack" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-white">Technical Arsenal</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Battle-tested technologies for building scalable and sovereign platforms.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stackGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="glass-card rounded-3xl p-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold font-heading text-white">{group.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {group.items.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: groupIndex * 0.1 + index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-semibold text-gray-300 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-300 transition-colors cursor-default"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
