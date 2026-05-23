import React from 'react';
import { PageId } from '../types';
import { Sparkles, PhoneCall, Mail, MapPin, Shield } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
  setActivePage: (page: PageId) => void;
  onBookClick: () => void;
}

export default function Footer({
  isDarkMode,
  setActivePage,
  onBookClick,
}: FooterProps) {
  
  const handleNavClick = (pageId: PageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const treatments = [
    { label: 'Cosmetic Dentistry', id: 'cosmetic' as PageId },
    { label: 'Dental Implants', id: 'implants' as PageId },
    { label: 'Teeth Whitening', id: 'whitening' as PageId },
    { label: 'Invisalign Alignment', id: 'invisalign' as PageId },
    { label: 'Same day Emergency Dentist', id: 'emergency' as PageId },
    { label: 'Routine General Dentist', id: 'general' as PageId },
  ];

  const quickLinks = [
    { label: 'Home Page', id: 'home' as PageId },
    { label: 'About Our Clinic', id: 'about' as PageId },
    { label: 'Interactive Gallery', id: 'gallery' as PageId },
    { label: 'Patient Testimonials', id: 'reviews' as PageId },
    { label: 'Book Consult', id: 'contact' as PageId },
  ];

  return (
    <footer className={`border-t transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-slate-950 border-slate-900 text-slate-300' 
        : 'bg-white border-gold-100 text-slate-700'
    }`}>
      
      {/* Top Banner: Immediate Anxiety De-escalation & Direct Line */}
      <div className={`py-6 border-b ${
        isDarkMode ? 'bg-slate-900/40 border-slate-900' : 'bg-gold-50/10 border-gold-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-left">
            <span className="h-2 w-2 rounded-full bg-red-500 animate-ping shrink-0" />
            <p className="text-xs sm:text-sm font-mono text-slate-550 dark:text-slate-400">
              <span className="font-bold text-red-550 dark:text-red-400 uppercase">Emergency Availability:</span> Same-day dental pain rescue spaces open for booking now.
            </p>
          </div>
          <div className="flex gap-4">
            <a 
              href="tel:+442079460192" 
              className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-red-650 dark:text-red-400 hover:opacity-80 transition-opacity"
            >
              <PhoneCall className="h-4 w-4 text-red-500" />
              <span>020 7946 0192</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Brand & Credentials */}
          <div className="lg:col-span-4 text-left space-y-4">
            <div className="flex items-center gap-2 group cursor-pointer" onClick={() => handleNavClick('home')}>
              <div className="p-2 bg-gold-500/10 rounded-xl">
                <Sparkles className="h-5 w-5 text-gold-500" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  SmileCraft
                </span>
                <p className="text-[10px] tracking-widest text-[#d4af37] font-bold uppercase -mt-0.5 font-mono">
                  LONDON
                </p>
              </div>
            </div>

            <p className="text-xs leading-relaxed font-light text-slate-500 dark:text-slate-400">
              We provide Harley Street standards of private cosmetic and restorative dentistry in a comforting, boutique-spa environment, focused on dismissing dental anxiety entirely.
            </p>

            {/* Regulatory compliance info required for medical sites */}
            <div className={`p-4 rounded-xl border flex gap-3 text-left ${
              isDarkMode ? 'bg-slate-900/30 border-slate-900' : 'bg-slate-50 border-gold-50'
            }`}>
              <Shield className="h-5 w-5 text-gold-500 shrink-0" />
              <p className="text-[10px] leading-relaxed text-slate-400 pointer-events-none">
                SmileCraft Dental Clinic is regulated by the Care Quality Commission (CQC) and all practitioners are registered with the General Dental Council (GDC), UK.
              </p>
            </div>
          </div>

          {/* Column 2: Treatments internal mapping */}
          <div className="lg:col-span-3 text-left space-y-4">
            <p className="text-xs font-mono font-bold tracking-widest text-[#d4af37] uppercase">
              Specialist Treatments
            </p>
            <ul className="space-y-2">
              {treatments.map((tr) => (
                <li key={tr.id}>
                  <button
                    onClick={() => handleNavClick(tr.id)}
                    className="text-xs text-slate-500 hover:text-gold-505 dark:text-slate-400 dark:hover:text-gold-400 font-light transition-all cursor-pointer"
                  >
                    {tr.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation links */}
          <div className="lg:col-span-2 text-left space-y-4">
            <p className="text-xs font-mono font-bold tracking-widest text-[#d4af37] uppercase">
              Clinic Links
            </p>
            <ul className="space-y-2">
              {quickLinks.map((ql) => (
                <li key={ql.id}>
                  <button
                    onClick={() => handleNavClick(ql.id)}
                    className="text-xs text-slate-500 hover:text-gold-505 dark:text-slate-400 dark:hover:text-gold-400 font-light transition-all cursor-pointer"
                  >
                    {ql.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Location coordinates */}
          <div className="lg:col-span-3 text-left space-y-4">
            <p className="text-xs font-mono font-bold tracking-widest text-[#d4af37] uppercase">
              Kensington Clinic
            </p>
            <div className="space-y-3.5 text-xs text-slate-500 dark:text-slate-400 font-light">
              <div className="flex items-start gap-2 leading-relaxed">
                <MapPin className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" />
                <span>42A Kensington High Street,<br />London, W8 4PE</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="h-4 w-4 text-gold-500 shrink-0" />
                <a href="tel:+442079460192" className="hover:text-gold-500 font-mono">020 7946 0192</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold-500 shrink-0" />
                <a href="mailto:abubakerkhattak833@gmail.com" className="hover:text-gold-500">abubakerkhattak833@gmail.com</a>
              </div>
            </div>
          </div>

        </div>

        <hr className={`my-12 border-t ${isDarkMode ? 'border-slate-900' : 'border-gold-100'}`} />

        {/* Bottom Rights Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 dark:text-slate-505 font-light">
          <p>© {new Date().getFullYear()} SmileCraft Dental Clinic London. All rights reserved.</p>
          <div className="flex gap-4">
            <button className="hover:text-gold-500 transition-colors">Privacy Policy</button>
            <span>•</span>
            <button className="hover:text-gold-500 transition-colors">GDC Guidelines</button>
            <span>•</span>
            <button className="hover:text-gold-500 transition-colors">CQC Rules</button>
          </div>
        </div>

      </div>
    </footer>
  );
}
