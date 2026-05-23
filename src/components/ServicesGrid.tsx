import React from 'react';
import { PageId } from '../types';
import { 
  Sparkles, 
  Crown, 
  Smile, 
  Sun, 
  ShieldAlert, 
  HeartPulse,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesGridProps {
  isDarkMode: boolean;
  setActivePage: (page: PageId) => void;
}

export default function ServicesGrid({
  isDarkMode,
  setActivePage,
}: ServicesGridProps) {
  
  const services = [
    {
      id: 'cosmetic' as PageId,
      icon: <Sparkles className="h-6 w-6 text-gold-500" />,
      title: 'Cosmetic Dentistry',
      subtitle: 'Premium Veneers & Bonding',
      description: 'Transform your smile and facial harmony using handcrafted porcelain veneers, custom composite bonding, and full smile makeovers.',
      benefit: 'Completely bespoke shading matching facial structure',
      price: 'From £950 / tooth',
      color: 'border-amber-200 dark:border-amber-950/40 bg-amber-500/5'
    },
    {
      id: 'implants' as PageId,
      icon: <Crown className="h-6 w-6 text-gold-500" />,
      title: 'Dental Implants',
      subtitle: 'Permanent Arch Reconstructions',
      description: 'Restore missing teeth permanently and prevent jaw bone decay utilizing computer-guided precision placement. Pain-conscious sedation options.',
      benefit: 'Returns 100% genuine chewing force',
      price: 'From £1,950 / implant',
      color: 'border-blue-200 dark:border-blue-950/40 bg-blue-500/5'
    },
    {
      id: 'invisalign' as PageId,
      icon: <Smile className="h-6 w-6 text-gold-500" />,
      title: 'Invisalign Treatment',
      subtitle: 'Invisible Clear Alignerships',
      description: 'Straighten your teeth discreetly and comfortably. Removable, crystal-clear smart aligners custom-made for professionals.',
      benefit: 'Virtually unnoticeable alignment tracks',
      price: 'From £1,800 (Or £49 / month)',
      color: 'border-teal-200 dark:border-teal-950/40 bg-teal-500/5'
    },
    {
      id: 'whitening' as PageId,
      icon: <Sun className="h-6 w-6 text-gold-500" />,
      title: 'Teeth Whitening',
      subtitle: 'Scientific Deep Brightening',
      description: 'Brighten safely up to 8 shades in a single hour with safe, cold-laser clinical systems or custom gold-trays at home.',
      benefit: 'Desensitized active-oxygen formula',
      price: 'Full Dual Package £495',
      color: 'border-yellow-250 dark:border-yellow-950/40 bg-yellow-500/5'
    },
    {
      id: 'emergency' as PageId,
      icon: <ShieldAlert className="h-6 w-6 text-red-500 dark:text-red-400" />,
      title: 'Emergency Dentistry',
      subtitle: 'Immediate Sameday Pain Erasure',
      description: 'Immediate compassionate relief for toothaches, structural cracks, or facial swelling. Prioritized same-day London slots.',
      benefit: 'Seen within 2 hours of emergency calling',
      price: 'Diagnosis & Relief £95',
      color: 'border-red-250 dark:border-red-950/50 bg-red-500/5',
      isUrgent: true
    },
    {
      id: 'general' as PageId,
      icon: <HeartPulse className="h-6 w-6 text-gold-500" />,
      title: 'General Dentistry',
      subtitle: 'Ultra-Gentle Preventive Care',
      description: 'Checkups, painless ultrasonic hygiene, and biocompatible tooth fillings matching your exact enamel shading.',
      benefit: 'Eliminates plaque without sharp scrapers',
      price: 'Examinations from £115',
      color: 'border-emerald-200 dark:border-emerald-900/40 bg-emerald-500/5'
    }
  ];

  const handleCardClick = (id: PageId) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-24 relative" id="services-grid-section">
      
      {/* Visual luxury backgrounds */}
      <div className="absolute top-1/2 left-3/4 w-80 h-80 rounded-full bg-gold-400/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-sea-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content with strong SEO references */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16" id="services-header">
          <span className="font-mono text-xs text-gold-500 font-bold uppercase tracking-widest block">
            ELITE PRIVATE SPECIALITIES OVERVIEW
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-slate-900 dark:text-white">
            World-Class Treatments <br />
            <span className="text-gold-500 italic">Crafted with Pain-Conscious Excellence</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Choose a treatment below to view procedure steps, twilight sedation details, transparent financial monthly rates, and anxiety-reduction guarantees.
          </p>
        </div>

        {/* Dynamic Responsive Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-cards-grid">
          {services.map((ser) => (
            <div
              key={ser.id}
              onClick={() => handleCardClick(ser.id)}
              className={`group relative p-8 rounded-3xl border text-left cursor-pointer transition-all duration-300 transform hover:-translate-y-1.5 ${
                isDarkMode 
                  ? 'bg-slate-900/40 hover:bg-slate-900 border-slate-800/80 hover:border-gold-500/30' 
                  : 'bg-white hover:bg-gold-50/10 border-gold-100 shadow-sm hover:shadow-xl hover:border-gold-400/30'
              } flex flex-col justify-between`}
              id={`service-card-${ser.id}`}
            >
              
              {/* Card Header */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-2.5xl transition-all duration-300 ${
                    isDarkMode ? 'bg-slate-800 group-hover:bg-gold-500/10' : 'bg-gold-50 group-hover:bg-gold-100'
                  }`}>
                    {ser.icon}
                  </div>
                  {ser.isUrgent && (
                    <span className="text-[9px] font-mono font-bold tracking-wider px-2 py-1 rounded-full bg-red-500/10 text-red-500 animate-pulse border border-red-500/20">
                      SAME-DAY RELIEF
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white group-hover:text-gold-500 dark:group-hover:text-gold-400 transition-colors">
                    {ser.title}
                  </h3>
                  <p className="text-[10px] font-mono tracking-widest text-slate-400 dark:text-slate-500 uppercase font-bold mt-0.5">
                    {ser.subtitle}
                  </p>
                </div>

                <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed font-light mt-2 line-clamp-3">
                  {ser.description}
                </p>
              </div>

              {/* Unique selling points inside card to maximize conversions */}
              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-655 dark:text-slate-355 font-light">
                  <ShieldCheck className="h-3.5 w-3.5 text-gold-500 shrink-0" />
                  <span className="truncate">{ser.benefit}</span>
                </div>
                
                <div className="flex items-center justify-between text-xs pt-1">
                  <div>
                    <span className="text-[9px] font-mono tracking-wider font-semibold text-slate-400 dark:text-slate-500 uppercase block">INDICATIVE COST</span>
                    <span className="font-serif text-sm font-semibold text-gold-600 dark:text-gold-400">{ser.price}</span>
                  </div>
                  <div className="text-xs font-mono text-gold-500 group-hover:text-gold-600 flex items-center gap-1 group-hover:translate-x-1 transition-all">
                    <span>Procedure Details</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>

              {/* Delicate top overlay indicator */}
              <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none rounded-tr-3xl overflow-hidden">
                <div className="absolute top-[-20px] right-[-20px] w-10 h-10 bg-gold-400/10 rotate-45 group-hover:scale-150 transition-all" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
