import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AccentConfig } from '../types';
import { SKILLS } from '../data';
import { Code2, Cpu, Database, Wrench, CheckCircle2 } from 'lucide-react';

interface SkillsProps {
  accent: AccentConfig;
}

export default function Skills({ accent }: SkillsProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...SKILLS.map(group => group.category)];

  const getIconForCategory = (cat: string) => {
    switch (cat) {
      case 'Programming & Web Tech':
        return <Code2 size={16} />;
      case 'Frameworks & State Management':
        return <Cpu size={16} />;
      case 'Backend & Services':
        return <Database size={16} />;
      default:
        return <Wrench size={16} />;
    }
  };

  const filteredSkills = activeCategory === 'All'
    ? SKILLS.flatMap(group => group.skills.map(skill => ({ ...skill, category: group.category })))
    : SKILLS.find(group => group.category === activeCategory)?.skills.map(skill => ({ ...skill, category: activeCategory })) || [];

  return (
    <section id="skills" className="py-24 bg-neutral-50 dark:bg-[#181818] transition-colors relative overflow-hidden">
      {/* Background circles */}
      <div 
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full filter blur-3xl opacity-5 pointer-events-none"
        style={{ backgroundColor: accent.hex }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <p className="font-mono text-xs uppercase tracking-widest font-semibold mb-3 transition-colors" style={{ color: accent.hex }}>
            02 . TECHNICAL COMPETENCIES
          </p>
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4">
            <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tighter text-[#1a1a1a] dark:text-white">
              Syllabus & Modern Stack
            </h2>
            <span className="h-[1px] flex-grow bg-gray-200 dark:bg-neutral-800 md:ml-8 hidden md:block" />
          </div>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left: Category Navigation Cards */}
          <div className="lg:col-span-1 space-y-2">
            <p className="text-xs uppercase tracking-widest font-mono text-gray-400 dark:text-neutral-500 mb-4 font-bold block">
              Skill Categories
            </p>
            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-3 lg:pb-0 gap-2 no-scrollbar">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-left text-xs font-display tracking-wider whitespace-nowrap lg:whitespace-normal uppercase cursor-pointer transition-all duration-350 border w-full ${
                      isActive
                        ? 'bg-white dark:bg-[#1a1a1a] shadow-xs font-semibold'
                        : 'bg-transparent border-transparent text-[#666666]/70 hover:text-black dark:text-neutral-400 dark:hover:text-white'
                    }`}
                    style={{ borderColor: isActive ? accent.hex : 'transparent' }}
                  >
                    <span 
                      className="p-1.5 rounded-lg text-white" 
                      style={{ backgroundColor: isActive ? accent.hex : '#66666640' }}
                    >
                      {getIconForCategory(cat)}
                    </span>
                    <span className="truncate">{cat}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Detailed Skill Progress Grid */}
          <div className="lg:col-span-3">
            <motion.div 
              layout 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white dark:bg-[#121212]/80 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-gray-100 dark:border-neutral-800"
            >
              <AnimatePresence mode="popLayout">
                {filteredSkills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className="p-4 rounded-2xl bg-neutral-50 dark:bg-[#1a1a1a]/40 border border-gray-100 dark:border-neutral-800/60 hover:border-gray-200 dark:hover:border-neutral-700/60 transition-colors"
                  >
                    {/* Header Label inside Card */}
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <span className="text-[9px] font-mono tracking-wider font-semibold uppercase text-gray-400 dark:text-neutral-500 block">
                          {skill.category || 'Skill'}
                        </span>
                        <h4 className="font-display font-semibold text-sm text-slate-800 dark:text-white mt-0.5">
                          {skill.name}
                        </h4>
                      </div>
                      <span className="font-mono text-xs font-medium" style={{ color: accent.hex }}>
                        {skill.level}%
                      </span>
                    </div>

                    {/* Custom Animated Linear Progress bar */}
                    <div className="h-1.5 w-full bg-gray-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: accent.hex }}
                      />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Micro details of current learning stack */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-[#121212] border border-gray-100 dark:border-neutral-800 rounded-2xl flex items-center space-x-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-white" 
                  style={{ backgroundColor: accent.hex }}
                >
                  <Code2 size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-display uppercase tracking-widest text-[#1a1a1a] dark:text-white font-bold">
                    Currently Learning
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-neutral-400 mt-1">
                    TypeScript, Next.js 14, and React Query (TanStack) to build highly structured hybrid apps.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-[#121212] border border-gray-100 dark:border-neutral-800 rounded-2xl flex items-center space-x-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-white" 
                  style={{ backgroundColor: accent.hex }}
                >
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-display uppercase tracking-widest text-[#1a1a1a] dark:text-white font-bold">
                    Soft Skill Balance
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-neutral-400 mt-1">
                    Problem Solving, Agile Team collaboration (Git branching/PRs), self-discipline, and prompt debugging.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
