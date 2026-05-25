import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowUpRight, Award, ChevronRight } from 'lucide-react';
import { AccentConfig } from '../types';
import { PERSONAL_INFO } from '../data';

// Import our generated portrait
const PORTRAIT_SRC = new URL('../assets/images/programmer_portrait_1779692583050.png', import.meta.url).href;

interface HeroProps {
  accent: AccentConfig;
  onOpenResumeMode: () => void;
}

export default function Hero({ accent, onOpenResumeMode }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20
      }
    }
  };

  const handleScrollToProjects = () => {
    const projSection = document.getElementById('projects');
    if (projSection) {
      const offset = 80;
      const pos = projSection.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-radial from-slate-50 to-neutral-50 dark:from-[#111111] dark:to-[#181818]"
    >
      {/* Soft abstract graphic background blobs */}
      <div className="absolute top-1/4 left-1/10 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-pulse bg-current" style={{ color: accent.hex }} />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-15 dark:opacity-5 animate-pulse delay-700 bg-gray-300 dark:bg-neutral-800" />
      
      {/* Subtle architectural lines grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 py-12">
        
        {/* Left Side: Typography */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center space-y-6 md:space-y-8"
        >
          {/* Label Tag */}
          <motion.div variants={itemVariants} className="flex items-center space-x-2">
            <span className="h-[1px] w-8 bg-gray-400 dark:bg-neutral-600" />
            <span
              className="font-mono text-xs tracking-widest uppercase font-semibold transition-colors"
              style={{ color: accent.hex }}
            >
              Ready to Contribute
            </span>
          </motion.div>

          {/* Greeting Statement */}
          <div className="space-y-3">
            <motion.h3
              variants={itemVariants}
              className="font-display font-light text-2xl md:text-3xl tracking-wide text-[#666666] dark:text-neutral-400"
            >
              Hello, I’m
            </motion.h3>
            <motion.h1
              variants={itemVariants}
              className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tighter text-[#1a1a1a] dark:text-white leading-[1.05]"
            >
              {PERSONAL_INFO.name}
            </motion.h1>
            <motion.h2
              variants={itemVariants}
              className="font-display font-medium text-xl md:text-2xl lg:text-3xl tracking-tight text-[#666666] dark:text-neutral-400"
            >
              Creative <span className="underline decoration-1 underline-offset-4" style={{ decorationColor: accent.hex }}>{PERSONAL_INFO.title}</span>
            </motion.h2>
          </div>

          {/* Subtitle / Narrative */}
          <motion.p
            variants={itemVariants}
            className="text-[#666666] dark:text-neutral-300 text-base md:text-lg max-w-xl font-light leading-relaxed"
          >
            A Chennai-based developer delivering production-grade single page applications (SPAs) with meticulous clean code and polished user interactions. Specialized in building seamless React frontends, robust state lifecycles and highly responsive interfaces.
          </motion.p>

          {/* Actions & Links Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
            {/* CTA 1: Projects */}
            <button
              onClick={handleScrollToProjects}
              style={{ backgroundColor: accent.hex }}
              className="group flex items-center space-x-2 px-6 py-3.5 text-white rounded-full text-xs font-display tracking-widest uppercase font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-0.5"
            >
              <span>Explore Works</span>
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* CTA 2: Visual Resume */}
            <button
              onClick={onOpenResumeMode}
              className="group flex items-center space-x-2 px-6 py-3.5 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-neutral-800 text-[#1a1a1a] dark:text-white rounded-full text-xs font-display tracking-widest uppercase font-semibold hover:bg-gray-50 dark:hover:bg-neutral-850 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              <span>Review Resume</span>
              <ArrowUpRight size={14} className="text-gray-400 group-hover:text-black dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </button>
          </motion.div>

          {/* Quick Stats & Social Integration Links */}
          <motion.div
            variants={itemVariants}
            className="pt-6 border-t border-gray-100 dark:border-neutral-800/80 flex flex-wrap items-center justify-between gap-6 max-w-xl"
          >
            {/* Socials Link Icons */}
            <div className="flex items-center space-x-5 text-gray-500 dark:text-neutral-400">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-black dark:hover:text-white transition-colors"
                title="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-black dark:hover:text-white transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="hover:text-black dark:hover:text-white transition-colors"
                title="Email Me"
              >
                <Mail size={20} />
              </a>
            </div>

            {/* Fast Metric Label */}
            <div className="flex items-center space-x-3 text-xs font-mono text-gray-400 dark:text-neutral-500">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: accent.hex }} />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: accent.hex }} />
              </span>
              <span> चेन्नई, भारत (Chennai, India)</span>
            </div>
          </motion.div>

        </motion.div>

        {/* Right Side: Portrait Portrait Mask & Creative Background blob layout */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          {/* Framed Graphic behind image */}
          <div className="absolute inset-0 scale-[1.08] pointer-events-none z-0">
            {/* Rounded geometric blurred wireframe rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-neutral-200 dark:border-neutral-800 rounded-full opacity-40 animate-[spin_40s_linear_infinite]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-neutral-100 dark:border-neutral-900 rounded-full opacity-20 animate-[spin_60s_linear_infinite]" />
            <div 
              className="absolute -top-6 -right-6 w-32 h-32 rounded-full opacity-8 filter blur-xl transition-all"
              style={{ backgroundColor: accent.hex }}
            />
          </div>

          {/* Grayscale portrait frame */}
          <div className="relative z-10 w-full max-w-[360px] md:max-w-[400px] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-neutral-200 dark:bg-neutral-800 border border-white dark:border-neutral-700/50">
            <motion.img
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              src={PORTRAIT_SRC}
              alt="Sarathi R - React Developer Portrait"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale brightness-[0.98] contrast-[1.05] hover:grayscale-0 hover:scale-105 transition-all duration-700"
            />
            {/* Muted graphic overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            
            {/* Float Label 1: Project count */}
            <div className="absolute bottom-6 -left-4 bg-white/90 dark:bg-[#1a1a1a]/90 backdrop-blur-xs py-2.5 px-4 rounded-xl border border-gray-100 dark:border-neutral-800 shadow-md flex items-center space-x-3 pointer-events-none">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: accent.hex }}>
                <Award size={16} />
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-wider text-gray-400 dark:text-neutral-500 leading-none">Delivered</p>
                <p className="text-sm font-display font-black text-slate-800 dark:text-white">Prod-Grade SPAs</p>
              </div>
            </div>

            {/* Float label 2: Status */}
            <div className="absolute top-6 right-4 bg-white/90 dark:bg-[#1a1a1a]/90 backdrop-blur-xs py-2 px-3 rounded-lg border border-gray-100 dark:border-neutral-800 shadow-xs pointer-events-none">
              <span className="font-mono text-[9px] font-bold tracking-widest text-slate-800 dark:text-white block">
                ROLE: FRESHER RX.JS
              </span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
