import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen, ClipboardCheck, Code, Compass } from 'lucide-react';
import { AccentConfig } from '../types';
import { PERSONAL_INFO, EDUCATION } from '../data';

interface AboutProps {
  accent: AccentConfig;
}

export default function About({ accent }: AboutProps) {
  const values = [
    {
      icon: Code,
      title: 'Meticulous Clean Code',
      desc: 'Developing frontends with declarative, modular patterns that scale seamlessly.'
    },
    {
      icon: ClipboardCheck,
      title: 'Real-World Validation',
      desc: 'Tested logic guarding clean API pipelines, reducing layout leaks and form issues.'
    },
    {
      icon: Compass,
      title: 'Rapid Adaptability',
      desc: 'Learns frameworks such as TypeScript and Next.js quickly to match squad speed.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-[#121212] transition-colors relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-slate-100 dark:bg-neutral-900/40 filter blur-3xl opacity-6 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <p className="font-mono text-xs uppercase tracking-widest font-semibold mb-3 transition-colors" style={{ color: accent.hex }}>
            01 . GET TO KNOW ME
          </p>
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4">
            <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tighter text-[#1a1a1a] dark:text-white">
              Creative Craft & Purpose
            </h2>
            <span className="h-[1px] flex-grow bg-gray-100 dark:bg-neutral-800 md:ml-8 hidden md:block" />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Summary and Objective */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-slate-800 dark:text-neutral-200 font-light leading-relaxed">
                As a React Developer completed with comprehensive training, I am committed to engineering clean, efficient, and accessible user interfaces. I bridge backend endpoints smoothly with polished state architectures.
              </p>
              
              <div className="h-[1px] w-20" style={{ backgroundColor: accent.hex }} />
              
              <p className="text-gray-600 dark:text-neutral-300 font-light leading-relaxed">
                Alongside my academic computer science studies at SRM University, I designed and shipped full-featured SPA models including a complete e-commerce application (Flipkart Clone) and an authentic movie ticketing program (MovieAlert). I am comfortable establishing full-auth sessions, modularizing Redux hierarchies, and operating in cooperative pipelines.
              </p>
            </div>

            {/* Core Values / Working Philosophy Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              {values.map((v, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-neutral-50 dark:bg-[#1a1a1a] border border-gray-100 dark:border-neutral-800/80 hover:shadow-xs transition-shadow"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-white"
                    style={{ backgroundColor: accent.hex }}
                  >
                    <v.icon size={18} />
                  </div>
                  <h4 className="font-display font-bold text-sm text-slate-800 dark:text-white mb-2">{v.title}</h4>
                  <p className="text-xs text-gray-500 dark:text-neutral-400 font-light leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>

            {/* Stylized Modern Signature Drawer Mockup */}
            <div className="pt-6 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-gray-400 dark:text-neutral-500">Design Signature</p>
                <div className="mt-2 font-display italic text-2xl font-light text-slate-800 dark:text-neutral-300 tracking-wider">
                  sarathi_r.ts
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs font-mono font-medium" style={{ color: accent.hex }}>SRM CSC ’26</p>
                <p className="text-[10px] text-gray-400 dark:text-neutral-500">Bachelor of Computer Science</p>
              </div>
            </div>
          </div>

          {/* Right: Personal highlights & Education Records */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            {/* Soft highlight card */}
            <div className="bg-neutral-50 dark:bg-[#1a1a1a] border border-gray-100 dark:border-neutral-800/80 rounded-2xl p-6 md:p-8 space-y-6">
              <h3 className="font-display font-bold text-lg text-slate-800 dark:text-white flex items-center space-x-2">
                <GraduationCap className="text-neutral-500" style={{ color: accent.hex }} size={20} />
                <span>Academic Timeline</span>
              </h3>

              <div className="space-y-6">
                {EDUCATION.map((edu, index) => (
                  <div key={index} className="relative pl-6 border-l border-gray-200 dark:border-neutral-800 last:border-0 pb-1 last:pb-0">
                    {/* Small bullets */}
                    <span 
                      className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border border-white dark:border-neutral-900"
                      style={{ backgroundColor: accent.hex }}
                    />
                    
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-display font-bold text-sm text-slate-800 dark:text-white group-hover:text-primary leading-snug">
                        {edu.degree}
                      </h4>
                      <span className="text-[10px] font-mono text-gray-400 dark:text-neutral-500 whitespace-nowrap bg-gray-100 dark:bg-neutral-800 px-2 py-0.5 rounded">
                        {edu.period}
                      </span>
                    </div>
                    
                    <p className="text-xs font-medium text-gray-500 dark:text-neutral-400 mt-1 mb-2">
                      {edu.institution}
                    </p>

                    <div className="flex items-center space-x-1.5 text-xs font-mono">
                      <span className="font-semibold text-slate-800 dark:text-white">{edu.score}</span>
                    </div>

                    {edu.coursework && (
                      <div className="flex flex-wrap gap-1 mt-3">
                        {edu.coursework.map((course, i) => (
                          <span 
                            key={i} 
                            className="text-[9px] font-mono bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 text-gray-400 px-2 py-0.5 rounded-full"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Micro certification callout */}
            <div className="bg-linear-to-r from-neutral-50 to-white dark:from-[#1a1a1a] dark:to-[#121212] border border-gray-100 dark:border-neutral-800/80 rounded-2xl p-6 flex items-start space-x-4">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border mt-1"
                style={{ borderColor: accent.hex + '3a', color: accent.hex }}
              >
                <Award size={18} />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 dark:text-neutral-500">Continuous Enrichment</span>
                <p className="text-xs font-bold text-slate-800 dark:text-white mt-0.5">
                  Meta Front-End Developer Certificate
                </p>
                <p className="text-[11px] text-gray-400 dark:text-neutral-500 mt-1">
                  Actively verifying engineering practices via Coursera (Priscilla, 2026).
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
