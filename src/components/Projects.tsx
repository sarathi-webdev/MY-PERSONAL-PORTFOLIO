import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AccentConfig, Project } from '../types';
import { PROJECTS } from '../data';
import { Github, ExternalLink, HelpCircle, X, ChevronRight, CheckCircle2, Terminal } from 'lucide-react';

interface ProjectsProps {
  accent: AccentConfig;
}

export default function Projects({ accent }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Full-Stack' | 'Frontend'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: ('All' | 'Full-Stack' | 'Frontend')[] = ['All', 'Full-Stack', 'Frontend'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(proj => proj.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-[#121212] transition-colors relative overflow-hidden">
      {/* Background radial soft light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-gray-100 dark:bg-neutral-900/30 rounded-full filter blur-3xl opacity-3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <p className="font-mono text-xs uppercase tracking-widest font-semibold mb-3 transition-colors" style={{ color: accent.hex }}>
            03 . PORTFOLIO EXHIBIT
          </p>
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4">
            <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tighter text-[#1a1a1a] dark:text-white">
              Selected Collaborations
            </h2>
            <span className="h-[1px] flex-grow bg-gray-100 dark:bg-neutral-800 md:ml-8 hidden md:block" />
          </div>
        </div>

        {/* Categories filters */}
        <div className="flex space-x-2 md:space-x-4 mb-12 border-b border-gray-100 dark:border-neutral-800/80 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-display tracking-widest uppercase cursor-pointer transition-all duration-300 relative ${
                activeCategory === cat
                  ? 'text-white font-semibold'
                  : 'text-gray-500 hover:text-black dark:text-neutral-400 dark:hover:text-white'
              }`}
              style={{ backgroundColor: activeCategory === cat ? accent.hex : 'transparent' }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {filteredProjects.map((proj) => (
            <motion.div
              layout
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="group flex flex-col bg-neutral-50 dark:bg-[#1a1a1a] border border-gray-100 dark:border-neutral-800/80 rounded-3xl overflow-hidden hover:shadow-xl hover:border-gray-200 dark:hover:border-neutral-700/80 transition-all duration-500"
            >
              {/* Card Header Illustration / Wireframe Frame */}
              <div className="aspect-[16/10] bg-neutral-100 dark:bg-neutral-900 relative flex items-center justify-center p-6 overflow-hidden border-b border-gray-100 dark:border-neutral-800">
                {/* Visual Accent glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-4 transition-opacity duration-500 rounded-2xl" 
                  style={{ backgroundColor: accent.hex }}
                />

                {/* Simulated Minimal Browser Header Wireframe */}
                <div className="w-full h-full bg-white dark:bg-[#121212] rounded-2xl shadow-md border border-gray-200/60 dark:border-neutral-800 overflow-hidden flex flex-col relative">
                  
                  {/* Browser top-bar */}
                  <div className="h-8 bg-neutral-50 dark:bg-neutral-900/60 border-b border-gray-100 dark:border-neutral-800/80 px-4 flex items-center justify-between">
                    <div className="flex space-x-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-400 opacity-60" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400 opacity-60" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 opacity-60" />
                    </div>
                    {/* Simulated URL Bar */}
                    <div className="bg-white dark:bg-neutral-850 px-3 py-0.5 rounded-md text-[9px] font-mono text-gray-400 dark:text-neutral-500 border border-gray-100 dark:border-neutral-800 truncate max-w-xs">
                      {proj.live.replace('https://', '')}
                    </div>
                    <div className="w-4 h-4" />
                  </div>

                  {/* Browser Mock Content */}
                  <div className="p-4 flex-grow flex flex-col justify-between relative bg-linear-to-b from-white to-gray-50/50 dark:from-neutral-900 dark:to-neutral-950">
                    <div>
                      {/* Fake navigation wireframe */}
                      <div className="flex justify-between items-center mb-4">
                        <div className="w-16 h-2 bg-gray-200 dark:bg-neutral-800 rounded-full" />
                        <div className="flex space-x-2">
                          <div className="w-10 h-2 bg-gray-100 dark:bg-neutral-800 rounded-full" />
                          <div className="w-10 h-2 bg-gray-100 dark:bg-neutral-800 rounded-full" />
                        </div>
                      </div>

                      {/* Mock Interactive Components */}
                      {proj.id === 'moviealert' ? (
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accent.hex }} />
                            <div className="w-24 h-3 bg-gray-350 dark:bg-neutral-700 rounded" />
                          </div>
                          
                          {/* Simulated seat selector wireframe */}
                          <div className="grid grid-cols-8 gap-1.5 max-w-xs mx-auto pt-1">
                            {Array.from({ length: 16 }).map((_, i) => (
                              <div 
                                key={i} 
                                className={`aspect-square rounded border ${
                                  i === 3 || i === 8 || i === 12
                                    ? 'border-transparent' 
                                    : 'border-gray-200 dark:border-neutral-800'
                                }`}
                                style={{
                                  backgroundColor: i === 3 || i === 8 || i === 12 ? accent.hex : 'transparent'
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accent.hex }} />
                            <div className="w-32 h-3 bg-gray-350 dark:bg-neutral-700 rounded" />
                          </div>

                          {/* Simulated E-commerce card list grid */}
                          <div className="grid grid-cols-3 gap-2.5 pt-1">
                            {Array.from({ length: 3 }).map((_, i) => (
                              <div key={i} className="bg-gray-100 dark:bg-neutral-850 p-2 rounded-lg border border-gray-200/50 dark:border-neutral-800/50 space-y-1.5">
                                <div className="aspect-[4/3] bg-gray-200 dark:bg-neutral-800 rounded" />
                                <div className="w-full h-1.5 bg-gray-350 dark:bg-neutral-700 rounded-full" />
                                <div className="w-2/3 h-1 bg-gray-200 dark:bg-neutral-800 rounded-full" />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Meta/Stat Badge */}
                    <div className="flex justify-between items-center text-[10px] font-mono border-t border-gray-100 dark:border-neutral-800 pt-2 text-gray-400">
                      <span>{proj.role}</span>
                      <span className="flex items-center space-x-1 font-semibold" style={{ color: accent.hex }}>
                        <span>ACTIVE DEPLOY</span>
                      </span>
                    </div>

                  </div>

                </div>

                {/* Smooth Overlay button that only appears on hover */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-350">
                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="px-5 py-3.5 bg-white text-slate-900 rounded-full text-xs font-display tracking-widest uppercase font-semibold hover:shadow-md transition-transform scale-95 group-hover:scale-100 duration-300 cursor-pointer"
                  >
                    Examine Project Spec
                  </button>
                </div>
              </div>

              {/* Card Footer Content details */}
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-extrabold text-xl text-slate-800 dark:text-white transition-colors group-hover:text-black dark:group-hover:text-slate-100">
                      {proj.title}
                    </h3>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-gray-405 dark:text-neutral-500 bg-gray-100 dark:bg-neutral-800 px-2.5 py-1 rounded-full font-bold">
                      {proj.category}
                    </span>
                  </div>
                  
                  <p className="text-xs text-gray-500 dark:text-neutral-400 font-light leading-relaxed line-clamp-2">
                    {proj.longDescription || proj.description}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800 text-gray-600 dark:text-neutral-400 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions Row */}
                <div className="pt-4 border-t border-gray-100 dark:border-neutral-800 flex items-center justify-between text-xs">
                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="font-mono hover:underline font-bold transition-colors cursor-pointer flex items-center space-x-1"
                    style={{ color: accent.hex }}
                  >
                    <span>Inspect Module</span>
                    <ChevronRight size={14} />
                  </button>

                  <div className="flex space-x-4">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#666666] dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors flex items-center space-x-1"
                      title="GitHub Repository"
                    >
                      <Github size={14} />
                      <span className="font-mono text-[10px]">Repository</span>
                    </a>
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#666666] dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors flex items-center space-x-1"
                      title="Live Demo"
                    >
                      <ExternalLink size={14} />
                      <span className="font-mono text-[10px]">Launch Live</span>
                    </a>
                  </div>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Advanced Feature: Pixel-perfect dynamic Modal Popup Dialog */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop shadow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xs"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="relative w-full max-w-3xl bg-white dark:bg-[#121212] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-neutral-800 max-h-[90vh] flex flex-col z-10"
            >
              <div className="absolute top-4 right-4 z-20">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-gray-500 hover:text-black dark:hover:text-white rounded-full transition-colors cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Scroll Container */}
              <div className="overflow-y-auto p-6 md:p-10 space-y-8">
                {/* Header */}
                <div>
                  <div className="flex flex-wrap gap-2 items-center mb-1">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-gray-400 dark:text-neutral-500 font-bold">
                      {selectedProject.category} Project Specifications
                    </span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span className="text-[10px] font-mono text-gray-400 dark:text-neutral-500">{selectedProject.role}</span>
                  </div>
                  
                  <h3 className="font-display font-black text-3xl md:text-4xl text-slate-800 dark:text-white leading-tight">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Graphic Mock */}
                <div className="p-4 rounded-2xl bg-gray-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 flex items-center justify-between font-mono text-xs text-none">
                  <div className="flex items-center space-x-3 text-gray-600 dark:text-neutral-300">
                    <Terminal size={14} className="text-gray-400" />
                    <span>$ npm test --project {selectedProject.id}</span>
                  </div>
                  <span className="text-emerald-500 font-bold uppercase tracking-widest text-[10px] animate-pulse">
                    ● ALL TESTS PASSING
                  </span>
                </div>

                {/* Technical long info */}
                <div className="space-y-4">
                  <h4 className="font-display font-extrabold text-[#1a1a1a] dark:text-white text-base">Project Narrative</h4>
                  <p className="text-xs text-gray-600 dark:text-neutral-300 leading-relaxed font-light">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Core Responsibilities list */}
                <div className="space-y-4">
                  <h4 className="font-display font-extrabold text-[#1a1a1a] dark:text-white text-base">Key Technical Accomplishments</h4>
                  <div className="space-y-3">
                    {selectedProject.responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <span 
                          className="h-5 w-5 rounded-full flex items-center justify-center shrink-0 text-white mt-0.5"
                          style={{ backgroundColor: accent.hex }}
                        >
                          <CheckCircle2 size={12} />
                        </span>
                        <p className="text-xs text-gray-600 dark:text-neutral-300 leading-relaxed font-light">
                          {resp}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Specs info */}
                <div className="space-y-3 pt-2">
                  <h4 className="font-display font-extrabold text-[#1a1a1a] dark:text-white text-base">Constructed Package Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono px-3 py-1 bg-neutral-100 dark:bg-neutral-800/80 text-gray-700 dark:text-neutral-300 rounded-lg border border-neutral-150 dark:border-neutral-700/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer buttons link */}
                <div className="pt-6 border-t border-gray-100 dark:border-neutral-800 flex flex-wrap gap-4 items-center justify-between">
                  <div className="text-[11px] font-mono text-gray-400 dark:text-neutral-500">
                    sarathi.webdev / {selectedProject.id}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center space-x-2 px-5 py-2.5 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-[#1a1a1a] dark:text-white h-10 text-xs font-display font-semibold tracking-wider uppercase rounded-full transition-colors"
                    >
                      <Github size={14} />
                      <span>Code Repo</span>
                    </a>
                    
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noreferrer"
                      style={{ backgroundColor: accent.hex }}
                      className="flex items-center space-x-2 px-5 py-2.5 text-white h-10 text-xs font-display font-semibold tracking-wider uppercase rounded-full hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <ExternalLink size={14} />
                      <span>Test Live Build</span>
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
