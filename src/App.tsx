import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeViewer from './components/ResumeViewer';
import { AccentColor, AccentConfig } from './types';

const ACCENT_MAP: Record<AccentColor, AccentConfig> = {
  sage: { 
    name: 'sage', 
    hex: '#9BAA9D', 
    class: 'text-[#9BAA9D]',
    bgClass: 'bg-[#9BAA9D]',
    borderClass: 'border-[#9BAA9D]',
    textClass: 'hover:text-[#9BAA9D]'
  },
  blueGray: { 
    name: 'blueGray', 
    hex: '#7D8CA3', 
    class: 'text-[#7D8CA3]',
    bgClass: 'bg-[#7D8CA3]',
    borderClass: 'border-[#7D8CA3]',
    textClass: 'hover:text-[#7D8CA3]'
  },
  beige: { 
    name: 'beige', 
    hex: '#D6BFA7', 
    class: 'text-[#D6BFA7]',
    bgClass: 'bg-[#D6BFA7]',
    borderClass: 'border-[#D6BFA7]',
    textClass: 'hover:text-[#D6BFA7]'
  }
};

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [accentKey, setAccentKey] = useState<AccentColor>('sage');
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  // Sync theme wrapper class on root element
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Track viewport components via observer to reflect active navbar indexes
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
    const observers = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '-10% 0px -60% 0px', // Adjusted to catch sections accurately
      }
    );

    sections.forEach((id) => {
      const el = window.document.getElementById(id);
      if (el) observers.observe(el);
    });

    return () => observers.disconnect();
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleSetAccent = (colorKey: AccentColor) => {
    setAccentKey(colorKey);
  };

  const accent = ACCENT_MAP[accentKey];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#121212] transition-colors duration-300 font-sans selection:bg-neutral-200 dark:selection:bg-neutral-800 selection:text-[#1a1a1a] dark:selection:text-white">
      {/* Absolute layout lines behind background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="max-w-7xl mx-auto h-full w-full grid grid-cols-4 px-6 md:px-12 opacity-[0.015] dark:opacity-[0.02]">
          <div className="border-r border-slate-900 h-full" />
          <div className="border-r border-slate-900 h-full" />
          <div className="border-r border-slate-900 h-full" />
          <div className="h-full" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Layer */}
        <Navbar
          activeSection={activeSection}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          accent={accent}
          setAccentColor={handleSetAccent}
          onOpenResumeMode={() => setIsResumeOpen(true)}
        />

        {/* Content Modules */}
        <main className="flex-grow">
          {/* Hero Header */}
          <Hero accent={accent} onOpenResumeMode={() => setIsResumeOpen(true)} />

          {/* About Me Details */}
          <About accent={accent} />

          {/* Interactive Stack & Skills indicators */}
          <Skills accent={accent} />

          {/* Selected Work Exhibitions */}
          <Projects accent={accent} />

          {/* History / Timelines */}
          <Experience accent={accent} />

          {/* Contacts validated modules */}
          <Contact accent={accent} />
        </main>

        {/* Footers */}
        <Footer accent={accent} />
      </div>

      {/* Instant visual document modal previewer */}
      <ResumeViewer
        accent={accent}
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
