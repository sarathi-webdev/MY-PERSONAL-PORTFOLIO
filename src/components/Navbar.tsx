import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { AccentColor, AccentConfig } from '../types';
import { PERSONAL_INFO } from '../data';

interface NavbarProps {
  activeSection: string;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  accent: AccentConfig;
  setAccentColor: (color: AccentColor) => void;
  onOpenResumeMode: () => void;
}

const ACCENTS: { name: AccentColor; label: string; hex: string; bgClass: string }[] = [
  { name: 'sage', label: 'Sage', hex: '#9BAA9D', bgClass: 'bg-[#9BAA9D]' },
  { name: 'blueGray', label: 'Blue', hex: '#7D8CA3', bgClass: 'bg-[#7D8CA3]' },
  { name: 'beige', label: 'Beige', hex: '#D6BFA7', bgClass: 'bg-[#D6BFA7]' }
];

export default function Navbar({
  activeSection,
  isDarkMode,
  toggleDarkMode,
  accent,
  setAccentColor,
  onOpenResumeMode
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky navbar
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-[#121212]/80 backdrop-blur-md shadow-xs border-b border-gray-100 dark:border-neutral-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="font-display font-extrabold text-xl tracking-widest text-[#1a1a1a] dark:text-white cursor-pointer relative group"
        >
          SARATHI R.
          <span 
            className="absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-300"
            style={{ backgroundColor: accent.hex }}
          />
        </button>

        {/* Desktop Navigation Items */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`font-display text-xs tracking-widest uppercase transition-all duration-300 relative py-2 cursor-pointer ${
                activeSection === item.id
                  ? 'text-[#1a1a1a] dark:text-white font-semibold'
                  : 'text-[#666666]/80 hover:text-[#1a1a1a] dark:text-neutral-400 dark:hover:text-white'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.span
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 w-full h-[1.5px]"
                  style={{ backgroundColor: accent.hex }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Dynamic Theme & Accent Selection Controls + Socials */}
        <div className="hidden lg:flex items-center space-x-6 border-l border-gray-200 dark:border-neutral-800 pl-6">
          {/* Accent Pickers */}
          <div className="flex items-center space-x-2">
            <span className="text-[10px] font-display uppercase tracking-wider text-gray-400 dark:text-neutral-500">Accent:</span>
            <div className="flex space-x-1.5 p-1 bg-gray-100 dark:bg-neutral-800 rounded-full border border-gray-200 dark:border-neutral-700">
              {ACCENTS.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setAccentColor(item.name)}
                  title={`${item.label} Accent`}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-transform duration-200 hover:scale-125 relative ${item.bgClass}`}
                >
                  {accent.name === item.name && (
                    <span className="absolute -inset-1 rounded-full border border-gray-400 dark:border-neutral-500 scale-125" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="text-[#666666] dark:text-neutral-400 hover:text-[#1a1a1a] dark:hover:text-white transition-colors cursor-pointer p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800"
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Resume Viewer Trigger Button */}
          <button
            onClick={onOpenResumeMode}
            className="flex items-center space-x-1 px-4 py-2 border rounded-full text-xs uppercase tracking-widest font-display font-medium transition-all duration-300 cursor-pointer"
            style={{
              borderColor: accent.hex,
              color: accent.hex
            }}
          >
            <FileText size={13} />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile controls inside Navbar (Hamburger & Quick mode) */}
        <div className="flex lg:hidden items-center space-x-3">
          <button
            onClick={toggleDarkMode}
            className="text-[#666666] dark:text-neutral-400 hover:text-[#1a1a1a] dark:hover:text-white transition-colors cursor-pointer p-1.5 rounded-full bg-gray-100 dark:bg-neutral-850"
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          
          <button
            onClick={onOpenResumeMode}
            className="p-1.5 rounded-full border text-neutral-600 dark:text-neutral-300 cursor-pointer"
            style={{ borderColor: accent.hex }}
            title="Resume View"
          >
            <FileText size={16} style={{ color: accent.hex }} />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#1a1a1a] dark:text-white cursor-pointer p-1.5"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-[#121212] border-b border-gray-100 dark:border-neutral-800 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-5 flex flex-col">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left font-display text-sm tracking-widest uppercase py-1 cursor-pointer ${
                    activeSection === item.id
                      ? 'font-bold'
                      : 'text-gray-500'
                  }`}
                  style={{ color: activeSection === item.id ? accent.hex : '' }}
                >
                  {item.label}
                </button>
              ))}
              
              <div className="pt-4 border-t border-gray-100 dark:border-neutral-800 flex items-center justify-between">
                <span className="text-xs font-display tracking-wider text-gray-400 uppercase">Accent Style</span>
                <div className="flex space-x-2">
                  {ACCENTS.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => setAccentColor(item.name)}
                      className={`px-3 py-1 rounded-full text-[10px] font-display uppercase tracking-widest transition-all ${
                        accent.name === item.name
                          ? 'text-white'
                          : 'bg-gray-100 dark:bg-neutral-800 text-gray-500'
                      }`}
                      style={{ backgroundColor: accent.name === item.name ? accent.hex : '' }}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Social Row */}
              <div className="pt-4 border-t border-gray-100 dark:border-neutral-800 flex items-center justify-center space-x-6 text-[#666666] dark:text-neutral-400">
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer">
                  <Github size={18} className="hover:text-black dark:hover:text-white transition-colors" />
                </a>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin size={18} className="hover:text-black dark:hover:text-white transition-colors" />
                </a>
                <a href={`mailto:${PERSONAL_INFO.email}`}>
                  <Mail size={18} className="hover:text-black dark:hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
