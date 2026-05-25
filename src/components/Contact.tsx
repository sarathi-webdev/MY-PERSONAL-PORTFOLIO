import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle, Github, Linkedin, AlertCircle } from 'lucide-react';
import { AccentConfig } from '../types';
import { PERSONAL_INFO } from '../data';

interface ContactProps {
  accent: AccentConfig;
}

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact({ accent }: ContactProps) {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!formData.name.trim()) newErrors.name = 'Please specify your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please specify your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please specify a subject';
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a brief message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error message dynamically
    if (errors[name as keyof FormState]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate form dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Clear success banner automatically after 5s
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#121212] transition-colors relative overflow-hidden">
      {/* Decorative gradients */}
      <div 
        className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full filter blur-3xl opacity-5 pointer-events-none"
        style={{ backgroundColor: accent.hex }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <p className="font-mono text-xs uppercase tracking-widest font-semibold mb-3 transition-colors" style={{ color: accent.hex }}>
            05 . INITIATE CONVERSATION
          </p>
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4">
            <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tighter text-[#1a1a1a] dark:text-white">
              Get In Touch
            </h2>
            <span className="h-[1px] flex-grow bg-gray-100 dark:bg-neutral-800 md:ml-8 hidden md:block" />
          </div>
        </div>

        {/* Form & Coordinates split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Coordinates Cards */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-[#666666] dark:text-neutral-300 font-light leading-relaxed max-w-sm">
              Whether you have a vacancy in your engineering team, or want to discuss React practices, feel free to launch a message.
            </p>

            {/* Coordinates list */}
            <div className="space-y-4 pt-4">
              {/* Mail Detail */}
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-neutral-50 dark:bg-[#1a1a1a] border border-gray-100 dark:border-neutral-850">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0"
                  style={{ backgroundColor: accent.hex }}
                >
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-gray-400 dark:text-neutral-500">Fast Mail Address</p>
                  <a 
                    href={`mailto:${PERSONAL_INFO.email}`} 
                    className="text-xs font-semibold text-slate-800 dark:text-white hover:underline"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              {/* Phone Detail */}
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-neutral-50 dark:bg-[#1a1a1a] border border-gray-100 dark:border-neutral-850">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0"
                  style={{ backgroundColor: accent.hex }}
                >
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-gray-400 dark:text-neutral-500">Contact Number</p>
                  <a 
                    href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} 
                    className="text-xs font-semibold text-slate-800 dark:text-white hover:underline"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Location Detail */}
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-neutral-50 dark:bg-[#1a1a1a] border border-gray-100 dark:border-neutral-850">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0"
                  style={{ backgroundColor: accent.hex }}
                >
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-gray-400 dark:text-neutral-500">Primary Location</p>
                  <p className="text-xs font-semibold text-slate-800 dark:text-white">
                    {PERSONAL_INFO.location}, India
                  </p>
                </div>
              </div>
            </div>

            {/* Quick social links connections cards */}
            <div className="pt-6 border-t border-gray-100 dark:border-neutral-800">
              <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 dark:text-neutral-500 font-bold block mb-4">
                Alternate Portals
              </span>
              <div className="flex space-x-4">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-neutral-50 hover:bg-neutral-100 dark:bg-[#1a1a1a] dark:hover:bg-neutral-800 border border-gray-100 dark:border-neutral-850 rounded-xl flex items-center space-x-2 text-xs font-display text-[#666666] hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
                >
                  <Github size={14} />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-neutral-50 hover:bg-neutral-100 dark:bg-[#1a1a1a] dark:hover:bg-neutral-800 border border-gray-100 dark:border-neutral-850 rounded-xl flex items-center space-x-2 text-xs font-display text-[#666666] hover:text-black dark:text-white transition-colors"
                >
                  <Linkedin size={14} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Side: Interactive validated Contact Form */}
          <div className="lg:col-span-7 bg-neutral-50 dark:bg-[#1a1a1a]/40 p-6 md:p-8 rounded-3xl border border-gray-100 dark:border-neutral-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name" className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 dark:text-neutral-500">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Sarath Kumar"
                    className={`px-4 py-3 bg-white dark:bg-[#121212]/80 border text-xs text-[#1a1a1a] dark:text-white rounded-xl focus:outline-hidden transition-all duration-300 ${
                      errors.name 
                        ? 'border-rose-400 dark:border-rose-500/50' 
                        : 'border-gray-200/80 dark:border-neutral-800/80 focus:border-slate-500'
                    }`}
                    style={{
                      borderColor: !errors.name && formData.name ? accent.hex : ''
                    }}
                  />
                  {errors.name && (
                    <span className="text-[10px] text-rose-500 dark:text-rose-400 font-mono flex items-center space-x-1">
                      <AlertCircle size={10} />
                      <span>{errors.name}</span>
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email" className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 dark:text-neutral-500">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. sarath@example.com"
                    className={`px-4 py-3 bg-white dark:bg-[#121212]/80 border text-xs text-[#1a1a1a] dark:text-white rounded-xl focus:outline-hidden transition-all duration-300 ${
                      errors.email 
                        ? 'border-rose-400 dark:border-rose-500/50' 
                        : 'border-gray-200/80 dark:border-neutral-800/80 focus:border-slate-500'
                    }`}
                    style={{
                      borderColor: !errors.email && formData.email ? accent.hex : ''
                    }}
                  />
                  {errors.email && (
                    <span className="text-[10px] text-rose-500 dark:text-rose-400 font-mono flex items-center space-x-1">
                      <AlertCircle size={10} />
                      <span>{errors.email}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="subject" className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 dark:text-neutral-500">
                  Subject Statement
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="e.g. React Developer Interview Invitation"
                  className={`px-4 py-3 bg-white dark:bg-[#121212]/80 border text-xs text-[#1a1a1a] dark:text-white rounded-xl focus:outline-hidden transition-all duration-300 ${
                    errors.subject 
                      ? 'border-rose-400 dark:border-rose-500/50' 
                      : 'border-gray-200/80 dark:border-neutral-800/80 focus:border-slate-500'
                  }`}
                  style={{
                    borderColor: !errors.subject && formData.subject ? accent.hex : ''
                  }}
                />
                {errors.subject && (
                  <span className="text-[10px] text-rose-500 dark:text-rose-400 font-mono flex items-center space-x-1">
                    <AlertCircle size={10} />
                    <span>{errors.subject}</span>
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="message" className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 dark:text-neutral-500">
                  Your Elaborate Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Tell me about your tech squad or vacancy details..."
                  className={`px-4 py-3 bg-white dark:bg-[#121212]/80 border text-xs text-[#1a1a1a] dark:text-white rounded-xl focus:outline-hidden transition-all duration-300 resize-none ${
                    errors.message 
                      ? 'border-rose-400 dark:border-rose-500/50' 
                      : 'border-gray-200/80 dark:border-neutral-800/80 focus:border-slate-500'
                  }`}
                  style={{
                    borderColor: !errors.message && formData.message ? accent.hex : ''
                  }}
                />
                {errors.message && (
                  <span className="text-[10px] text-rose-500 dark:text-rose-400 font-mono flex items-center space-x-1">
                    <AlertCircle size={10} />
                    <span>{errors.message}</span>
                  </span>
                )}
              </div>

              {/* Success Notification */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-800/60 rounded-xl flex items-center space-x-3 text-emerald-800 dark:text-emerald-400 text-xs"
                  >
                    <CheckCircle size={16} className="shrink-0" />
                    <span>Your message has been dispatched successfully! Sarathi will analyze and reply shortly.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit trigger button */}
              <button
                type="submit"
                disabled={isSubmitting}
                style={{ backgroundColor: accent.hex }}
                className="w-full flex items-center justify-center space-x-2 py-4 text-white text-xs font-display tracking-widest uppercase font-semibold rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-75 disabled:pointer-events-none cursor-pointer"
              >
                {isSubmitting ? (
                  <span className="flex items-center space-x-2">
                    <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    <span>Engine Dispatching...</span>
                  </span>
                ) : (
                  <>
                    <Send size={13} />
                    <span>Dispatch Message</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
