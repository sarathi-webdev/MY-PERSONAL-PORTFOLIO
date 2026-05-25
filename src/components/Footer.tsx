import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { AccentConfig } from '../types';
import { PERSONAL_INFO } from '../data';

interface FooterProps {
  accent: AccentConfig;
}

export default function Footer({ accent }: FooterProps) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-50 dark:bg-[#0e0e0e] border-t border-gray-100 dark:border-neutral-900 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Name logo */}
        <div className="text-center md:text-left">
          <h4 className="font-display font-extrabold text-sm tracking-widest text-slate-800 dark:text-white uppercase">
            {PERSONAL_INFO.name}
          </h4>
          <p className="text-[10px] font-mono text-gray-400 dark:text-neutral-500 mt-1">
            React.js Developer • Crafting elegant digital architectures
          </p>
        </div>

        {/* Middle Quick Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-display uppercase tracking-wider">
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} 
            className="text-gray-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors cursor-pointer"
          >
            About
          </button>
          <button 
            onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })} 
            className="text-gray-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors cursor-pointer"
          >
            Skills
          </button>
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} 
            className="text-gray-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors cursor-pointer"
          >
            Projects
          </button>
          <button 
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })} 
            className="text-gray-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors cursor-pointer"
          >
            Experience
          </button>
        </div>

        {/* Right Socials & Back to Top */}
        <div className="flex items-center space-x-6">
          <div className="flex space-x-4 text-gray-400">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-black dark:hover:text-white transition-colors">
              <Github size={16} />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-black dark:hover:text-white transition-colors">
              <Linkedin size={16} />
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-black dark:hover:text-white transition-colors">
              <Mail size={16} />
            </a>
          </div>

          <button
            onClick={handleScrollToTop}
            className="p-2.5 rounded-full border border-gray-200 dark:border-neutral-800 text-gray-400 hover:text-black dark:hover:text-white hover:border-gray-300 dark:hover:border-neutral-700 transition-all cursor-pointer"
            title="Go to Top"
          >
            <ArrowUp size={14} />
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8 pt-8 border-t border-gray-100/60 dark:border-neutral-900/40 text-center flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-mono text-gray-400 dark:text-neutral-500">
        <p>© {currentYear} {PERSONAL_INFO.name}. All rights reserved.</p>
        <p>Built with React, Tailwind CSS, and Framer Motion.</p>
      </div>
    </footer>
  );
}
