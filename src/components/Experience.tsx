import React from 'react';
import { motion } from 'motion/react';
import { AccentConfig } from '../types';
import { EXPERIENCES } from '../data';
import { Briefcase, Calendar, CheckSquare, Github, ExternalLink } from 'lucide-react';

interface ExperienceProps {
  accent: AccentConfig;
}

export default function Experience({ accent }: ExperienceProps) {
  return (
    <section id="experience" className="py-24 bg-neutral-50 dark:bg-[#181818] transition-colors relative overflow-hidden">
      {/* Background graphic grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808003_1px,transparent_1px),linear-gradient(to_bottom,#80808003_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <p className="font-mono text-xs uppercase tracking-widest font-semibold mb-3 transition-colors" style={{ color: accent.hex }}>
            04 . PROFESSIONAL JOURNEY
          </p>
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4">
            <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tighter text-[#1a1a1a] dark:text-white">
              History & Milestones
            </h2>
            <span className="h-[1px] flex-grow bg-gray-200 dark:bg-neutral-800 md:ml-8 hidden md:block" />
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical minimal connecting line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-gray-200 dark:bg-neutral-850 transform -translate-x-1/2" />

          {/* Timeline Cards */}
          <div className="space-y-12 md:space-y-16">
            {EXPERIENCES.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={exp.id} 
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Glowing Node Marker */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-neutral-900 transform -translate-x-1/2 z-10 shadow-xs"
                    style={{ backgroundColor: accent.hex }}
                  />

                  {/* Left spacing for desktop (pushing element to correct column side) */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8 flex justify-end">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full bg-white dark:bg-[#121212] p-6 md:p-8 rounded-3xl border border-gray-100 dark:border-neutral-850 hover:border-gray-200 dark:hover:border-neutral-800 transition-colors shadow-xs"
                    >
                      {/* Sub-label Metadata */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <span 
                          className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest font-semibold text-white"
                          style={{ backgroundColor: accent.hex }}
                        >
                          {exp.type}
                        </span>
                        
                        <div className="flex items-center space-x-1 font-mono text-xs text-gray-400 dark:text-neutral-500">
                          <Calendar size={12} />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Header */}
                      <div className="mb-4">
                        <p className="text-xs font-mono font-semibold uppercase text-gray-405 dark:text-neutral-500 leading-none mb-1">
                          {exp.company}
                        </p>
                        <h3 className="font-display font-extrabold text-xl text-slate-800 dark:text-white leading-tight">
                          {exp.role}
                        </h3>
                      </div>

                      {/* Responsibilities */}
                      <div className="space-y-2.5 mb-6">
                        {exp.responsibilities.map((resp, idx) => (
                          <div key={idx} className="flex items-start space-x-2 text-xs">
                            <span className="mt-1 text-gray-400 shrink-0">•</span>
                            <p className="text-gray-600 dark:text-neutral-400 font-light leading-relaxed">
                              {resp}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Packaged Tools Tag row */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {exp.tech.map((t, i) => (
                          <span 
                            key={i} 
                            className="text-[10px] font-mono px-2 py-0.5 bg-neutral-100 dark:bg-neutral-850 text-gray-600 dark:text-neutral-400 rounded-md border border-neutral-150/50 dark:border-neutral-800/50"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Links Row */}
                      {(exp.github || exp.live) && (
                        <div className="pt-4 border-t border-gray-100 dark:border-neutral-850 flex items-center space-x-4 text-xs font-mono text-none">
                          {exp.github && (
                            <a 
                              href={exp.github} 
                              target="_blank" 
                              rel="noreferrer" 
                              className="text-gray-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors flex items-center space-x-1"
                            >
                              <Github size={12} />
                              <span>Github</span>
                            </a>
                          )}
                          {exp.live && (
                            <a 
                              href={exp.live} 
                              target="_blank" 
                              rel="noreferrer" 
                              className="text-gray-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors flex items-center space-x-1"
                            >
                              <ExternalLink size={12} />
                              <span>Deploy Link</span>
                            </a>
                          )}
                        </div>
                      )}

                    </motion.div>
                  </div>

                  {/* Empty Right Column item for Symmetry Layout */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
