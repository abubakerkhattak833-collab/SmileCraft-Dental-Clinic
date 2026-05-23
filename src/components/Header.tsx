import React, { useState } from 'react';
import { PageId } from '../types';
import { Sun, Moon, Menu, X, Sparkles, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  activePage: PageId;
  setActivePage: (page: PageId) => void;
  isDarkMode: boolean;
  setIsDarkMode: (dark: boolean) => void;
  onBookClick: () => void;
}

export default function Header({
  activePage,
  setActivePage,
  isDarkMode,
  setIsDarkMode,
  onBookClick,
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' as PageId },
    { label: 'About', id: 'about' as PageId },
    { label: 'Smile Gallery', id: 'gallery' as PageId },
    { label: 'Reviews', id: 'reviews' as PageId },
    { label: 'Contact', id: 'contact' as PageId },
  ];

  const servicesList = [
    { label: 'Cosmetic Dentistry', id: 'cosmetic' as PageId },
    { label: 'Dental Implants', id: 'implants' as PageId },
    { label: 'Teeth Whitening', id: 'whitening' as PageId },
    { label: 'Invisalign Treatment', id: 'invisalign' as PageId },
    { label: 'Emergency Care', id: 'emergency' as PageId, isUrgent: true },
  ];

  const handleNavClick = (pageId: PageId) => {
    setActivePage(pageId);
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isDarkMode 
        ? 'bg-slate-950/80 border-b border-slate-800/60 text-slate-100' 
        : 'bg-white/80 border-b border-gold-100/60 text-slate-800'
    } backdrop-blur-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo with clean elegance */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-2 cursor-pointer group"
            id="header-logo-container"
          >
            <div className={`p-2 rounded-xl transition-all duration-300 ${
              isDarkMode ? 'bg-slate-900 group-hover:bg-gold-500/10' : 'bg-gold-50 group-hover:bg-gold-100'
            }`}>
              <Sparkles className="h-6 w-6 text-gold-500 animate-pulse" />
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-gold-600 to-slate-900 dark:from-white dark:via-gold-400 dark:to-white bg-clip-text text-transparent">
                  SmileCraft
                </span>
                <span className="text-[9px] font-mono tracking-widest text-gold-500 font-bold uppercase hidden sm:inline">
                  LONDON
                </span>
              </div>
              <p className="text-[10px] tracking-wide text-slate-400 dark:text-slate-500 font-medium -mt-1 font-sans">
                Luxury Private Dentistry
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6" id="desktop-nav">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-sm font-medium transition-all ${
                activePage === 'home' 
                  ? 'text-gold-500 font-semibold' 
                  : 'text-slate-600 hover:text-gold-500 dark:text-slate-300 dark:hover:text-gold-400'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`text-sm font-medium transition-all ${
                activePage === 'about' 
                  ? 'text-gold-500 font-semibold' 
                  : 'text-slate-600 hover:text-gold-500 dark:text-slate-300 dark:hover:text-gold-400'
              }`}
            >
              About Clinic
            </button>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <button
                className={`text-sm font-medium flex items-center gap-1 transition-all ${
                  ['cosmetic', 'implants', 'whitening', 'invisalign', 'emergency'].includes(activePage)
                    ? 'text-gold-500 font-semibold'
                    : 'text-slate-600 hover:text-gold-500 dark:text-slate-300 dark:hover:text-gold-400'
                }`}
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
              >
                Treatments
                <span className="text-[10px] opacity-75">▼</span>
              </button>

              <AnimatePresence>
                {isServicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className={`absolute left-0 mt-2 w-64 rounded-2xl shadow-xl overflow-hidden border ${
                      isDarkMode 
                        ? 'bg-slate-900 border-slate-800 text-slate-100' 
                        : 'bg-white border-gold-100 text-slate-800'
                    }`}
                  >
                    <div className="p-3 grid gap-1">
                      <p className="text-[10px] font-mono font-bold tracking-widest text-slate-400 dark:text-slate-500 px-3 py-1 uppercase">
                        Our Specialties
                      </p>
                      {servicesList.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => handleNavClick(service.id)}
                          className={`w-full text-left px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium flex items-center justify-between transition-all ${
                            activePage === service.id
                              ? 'bg-gold-500/10 text-gold-500'
                              : isDarkMode
                                ? 'hover:bg-slate-800/80 text-slate-300'
                                : 'hover:bg-slate-50 text-slate-700'
                          }`}
                        >
                          <span>{service.label}</span>
                          {service.isUrgent && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-100 text-red-600 dark:bg-red-950/60 dark:text-red-400 font-bold uppercase animate-pulse">
                              Urgent Relief
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navItems.filter(item => item.id !== 'home' && item.id !== 'about').map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-all ${
                  activePage === item.id 
                    ? 'text-gold-500 font-semibold' 
                    : 'text-slate-600 hover:text-gold-500 dark:text-slate-300 dark:hover:text-gold-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Zone: Theme toggler, Emergency Link, and Book Callout */}
          <div className="flex items-center gap-3">
            
            {/* Urgent Phone Trigger (SEO and extreme reassurance for panic callers) */}
            <a 
              href="tel:+442079460192" 
              className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-red-600 dark:text-red-400 hover:opacity-85 transition-opacity"
            >
              <PhoneCall className="h-3.5 w-3.5" />
              <span>020 7946 0192</span>
            </a>

            {/* REQUIRED: Dark/Light Mode toggle buttons */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2.5 rounded-xl border transition-all ${
                isDarkMode 
                  ? 'bg-slate-900 border-slate-800 hover:bg-slate-800 text-amber-400' 
                  : 'bg-gold-50/50 border-gold-100 hover:bg-gold-50 text-slate-700'
              }`}
              title="Toggle Dark/Light Mode"
              id="theme-toggle-button"
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            {/* Booking Trigger */}
            <button
              onClick={onBookClick}
              className="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-medium bg-gold-500 text-white hover:bg-gold-600 transition-all shadow-md hover:shadow-gold-500/20 active:scale-95 duration-200 uppercase tracking-widest font-sans"
              id="header-book-cta"
            >
              Book Appointment
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-xl lg:hidden ${
                isDarkMode ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100 text-slate-600'
              }`}
              id="mobile-menu-trigger"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden border-t ${
              isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-gold-50'
            }`}
          >
            <div className="px-4 py-6 space-y-4">
              <div className="grid gap-2">
                <p className="text-[10px] font-mono tracking-widest text-[#d4af37] font-bold uppercase mb-1">
                  Primary Links
                </p>
                <button
                  onClick={() => handleNavClick('home')}
                  className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium ${
                    activePage === 'home' ? 'bg-gold-500 text-white' : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => handleNavClick('about')}
                  className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium ${
                    activePage === 'about' ? 'bg-gold-500 text-white' : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  About Clinic
                </button>
                <button
                  onClick={() => handleNavClick('gallery')}
                  className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium ${
                    activePage === 'gallery' ? 'bg-gold-500 text-white' : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  Smile Gallery
                </button>
                <button
                  onClick={() => handleNavClick('reviews')}
                  className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium ${
                    activePage === 'reviews' ? 'bg-gold-500 text-white' : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  Patient Reviews
                </button>
                <button
                  onClick={() => handleNavClick('contact')}
                  className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium ${
                    activePage === 'contact' ? 'bg-gold-500 text-white' : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  Contact Clinic
                </button>
              </div>

              <div className="grid gap-2">
                <p className="text-[10px] font-mono tracking-widest text-red-500 font-bold uppercase mb-1">
                  Dental Specialities
                </p>
                {servicesList.map(ser => (
                  <button
                    key={ser.id}
                    onClick={() => handleNavClick(ser.id)}
                    className={`w-full text-left py-2 px-3 rounded-lg text-xs font-medium flex justify-between items-center ${
                      activePage === ser.id 
                        ? 'bg-gold-500/15 text-gold-500' 
                        : 'text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    <span>{ser.label}</span>
                    {ser.isUrgent && (
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-300 font-bold">
                        AGONY RELIEF
                      </span>
                    )}
                  </button>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-200 dark:border-slate-850 flex flex-col gap-3">
                <a 
                  href="tel:+442079460192" 
                  className="flex items-center justify-center gap-2 py-3 rounded-xl border border-red-500/30 text-red-600 bg-red-500/5 hover:bg-red-500/10 font-bold text-sm tracking-wide"
                >
                  <PhoneCall className="h-4 w-4" />
                  <span>Call Emergency: 020 7946 0192</span>
                </a>
                
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onBookClick();
                  }}
                  className="w-full py-3 bg-gold-500 text-white rounded-xl text-center font-bold text-sm uppercase tracking-wider shadow-md"
                >
                  Book Instant Consultation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
