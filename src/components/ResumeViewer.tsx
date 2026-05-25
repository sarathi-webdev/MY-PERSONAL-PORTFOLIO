import React from 'react';
import { motion } from 'motion/react';
import { X, Printer, Copy, Check, Mail, Phone, MapPin, Github, Linkedin, ArrowLeft, Download } from 'lucide-react';
import { AccentConfig } from '../types';
import { PERSONAL_INFO, PROJECTS, EXPERIENCES, EDUCATION, SKILLS, CERTIFICATIONS } from '../data';

interface ResumeViewerProps {
  accent: AccentConfig;
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeViewer({ accent, isOpen, onClose }: ResumeViewerProps) {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-neutral-900/60 backdrop-blur-md flex flex-col overflow-y-auto p-4 md:p-8 prints-auto">
      {/* Control Navigation Menu Banner */}
      <div className="max-w-4xl mx-auto w-full mb-4 flex items-center justify-between bg-white dark:bg-[#1a1a1a] p-4 rounded-2xl shadow-md border border-gray-100 dark:border-neutral-800 print:hidden shrink-0">
        <button
          onClick={onClose}
          className="flex items-center space-x-2 text-xs font-display uppercase tracking-widest text-[#666666] hover:text-black dark:text-neutral-400 dark:hover:text-white cursor-pointer"
        >
          <ArrowLeft size={14} />
          <span>Exit Document Mode</span>
        </button>

        <div className="flex items-center space-x-2">
          {/* Copy Email Action */}
          <button
            onClick={handleCopyEmail}
            className="flex items-center space-x-1.5 px-3.5 py-2 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-[#1a1a1a] dark:text-white rounded-lg text-xs font-display font-medium transition-colors cursor-pointer"
            title="Copy Email to Clipboard"
          >
            {copied ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
            <span>{copied ? 'Copied' : 'Copy Mail'}</span>
          </button>

          {/* Print Trigger Action */}
          <button
            onClick={handlePrint}
            className="flex items-center space-x-1.5 px-4 py-2 text-white rounded-lg text-xs font-display font-semibold tracking-wider uppercase transition-colors cursor-pointer"
            style={{ backgroundColor: accent.hex }}
            title="Print Resume (PDF)"
          >
            <Printer size={13} />
            <span>Print / Save PDF</span>
          </button>

          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 rounded-full cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Visual Resume Sheet card */}
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto w-full bg-white dark:bg-[#151515] p-8 md:p-12 rounded-3xl border border-gray-150 dark:border-neutral-800 shadow-2xl flex-grow font-sans text-neutral-800 dark:text-neutral-200 overflow-y-auto mb-12 relative print:m-0 print:p-0 print:border-0 print:shadow-none print:rounded-none"
      >
        {/* Absolute branding tag in webview, hidden on print */}
        <div className="absolute top-8 right-8 text-right font-mono text-[9px] uppercase tracking-widest text-gray-400 dark:text-neutral-500 print:hidden">
          Official CV Document Rendering
        </div>

        {/* 1. Header Details row */}
        <div className="text-center md:text-left border-b border-neutral-200 dark:border-neutral-800 pb-6 print:pb-4">
          <h1 className="font-display font-extrabold text-3xl md:text-4.5xl tracking-tight text-slate-900 dark:text-white leading-none">
            {PERSONAL_INFO.name}
          </h1>
          <p className="text-sm font-mono tracking-widest uppercase mt-2.5 font-bold" style={{ color: accent.hex }}>
            React.js Developer • Chennai, TN
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-5 gap-y-1.5 text-xs text-gray-500 dark:text-neutral-400 mt-4 font-mono">
            <span className="flex items-center space-x-1">
              <Phone size={11} style={{ color: accent.hex }} />
              <span>{PERSONAL_INFO.phone}</span>
            </span>
            <span className="hidden md:inline text-gray-300">•</span>
            <span className="flex items-center space-x-1">
              <Mail size={11} style={{ color: accent.hex }} />
              <span>{PERSONAL_INFO.email}</span>
            </span>
            <span className="hidden md:inline text-gray-300">•</span>
            <span className="flex items-center space-x-1">
              <Github size={11} style={{ color: accent.hex }} />
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:underline">github.com/sarathi-webdev</a>
            </span>
            <span className="hidden md:inline text-gray-300">•</span>
            <span className="flex items-center space-x-1">
              <Linkedin size={11} style={{ color: accent.hex }} />
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:underline">linkedin.com/in/sarathi-r-19328a365</a>
            </span>
          </div>
        </div>

        {/* 2. Executive Summary */}
        <div className="py-6 border-b border-gray-100 dark:border-neutral-900">
          <h2 className="text-xs font-mono font-black uppercase tracking-widest text-slate-800 dark:text-white mb-3">
            EXECUTIVE SUMMARY
          </h2>
          <p className="text-xs text-gray-650 dark:text-neutral-300 leading-relaxed font-light">
            {PERSONAL_INFO.summary}
          </p>
        </div>

        {/* 3. Technical Skills lists */}
        <div className="py-6 border-b border-gray-100 dark:border-neutral-900">
          <h2 className="text-xs font-mono font-black uppercase tracking-widest text-slate-800 dark:text-white mb-4">
            TECHNICAL SKILLS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5 text-xs">
            {SKILLS.map((skillGroup, index) => (
              <div key={index} className="space-y-1.5">
                <h3 className="font-display font-extrabold text-[11px] text-gray-500 dark:text-neutral-400 uppercase tracking-wider">
                  {skillGroup.category}
                </h3>
                <p className="text-xs font-light text-slate-700 dark:text-neutral-300">
                  {skillGroup.skills.map(s => s.name).join(', ')}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Professional & Academic Projects */}
        <div className="py-6 border-b border-gray-100 dark:border-neutral-900">
          <h2 className="text-xs font-mono font-black uppercase tracking-widest text-slate-800 dark:text-white mb-4">
            PROFESSIONAL EXPERIENCE / SELECTED PROJECTS
          </h2>
          <div className="space-y-6">
            {PROJECTS.map((proj) => (
              <div key={proj.id} className="space-y-2">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display font-extrabold text-sm text-slate-900 dark:text-white">
                    {proj.title} <span className="text-xs font-light text-gray-400">— {proj.description}</span>
                  </h3>
                  <span className="text-[10px] font-mono text-gray-405 dark:text-neutral-500 uppercase pb-1 border-b" style={{ borderColor: accent.hex }}>
                    React Developer
                  </span>
                </div>
                
                <p className="text-[10px] font-mono text-gray-400 dark:text-neutral-500">
                  Tech: {proj.tech.join(' • ')}
                </p>

                <div className="space-y-1.5 pl-3">
                  {proj.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs">
                      <span className="text-gray-400 mt-1 shrink-0">•</span>
                      <p className="text-gray-650 dark:text-neutral-400 font-light leading-relaxed">
                        {resp}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Education timeline */}
        <div className="py-6 border-b border-gray-100 dark:border-neutral-900">
          <h2 className="text-xs font-mono font-black uppercase tracking-widest text-slate-800 dark:text-white mb-4">
            EDUCATION HIGHLIGHTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="space-y-1 relative pl-4 border-l-2" style={{ borderColor: accent.hex }}>
                <div className="flex justify-between items-baseline gap-2">
                  <h3 className="font-display font-extrabold text-[13px] text-slate-800 dark:text-white">
                    {edu.degree}
                  </h3>
                  <span className="text-[10px] font-mono text-gray-400 dark:text-neutral-500 font-bold">
                    {edu.period}
                  </span>
                </div>
                <p className="text-xs font-medium text-gray-550 dark:text-neutral-400">
                  {edu.institution}
                </p>
                <p className="text-[11px] font-mono font-semibold" style={{ color: accent.hex }}>
                  {edu.score}
                </p>
                {edu.coursework && (
                  <p className="text-[10px] text-gray-400 dark:text-neutral-500 pt-0.5 leading-snug">
                    Coursework: {edu.coursework.join(', ')}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 6. Certifications */}
        <div className="pt-6">
          <h2 className="text-xs font-mono font-black uppercase tracking-widest text-slate-800 dark:text-white mb-3">
            CERTIFICATIONS & LEARNING ENRICHMENT
          </h2>
          <ul className="list-disc list-inside space-y-1 pl-1 text-xs text-gray-650 dark:text-neutral-300 font-light">
            {CERTIFICATIONS.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </div>

      </motion.article>
    </div>
  );
}
