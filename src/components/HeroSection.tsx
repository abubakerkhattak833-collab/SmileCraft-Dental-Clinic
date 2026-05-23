import React from 'react';
import { Star, ShieldAlert, Sparkles, CheckCircle, Clock } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  isDarkMode: boolean;
  onBookClick: () => void;
  onEmergencyClick: () => void;
}

export default function HeroSection({
  isDarkMode,
  onBookClick,
  onEmergencyClick,
}: HeroSectionProps) {
  const trustPoints = [
    'Gentle Dentistry',
    'Advanced Technology',
    'Same Day Appointments',
    'Patient Focused Care',
  ];

  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:py-32" id="hero-section">
      
      {/* Decorative luxury glowing backgrounds */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-gold-400/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/10 w-96 h-96 rounded-full bg-sea-300/15 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Positioning & Anxiety-Reduction Strategy */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left" id="hero-text-content">
            
            {/* Ambient luxury tag */}
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono tracking-wider transition-all uppercase ${
              isDarkMode 
                ? 'bg-slate-900 border border-slate-800 text-gold-300' 
                : 'bg-gold-50 border border-gold-100 text-gold-700'
            }`}>
              <Sparkles className="h-3.5 w-3.5 text-gold-500" />
              <span>Harley Street Standards • London, UK</span>
            </div>

            {/* Main SEO & Emotional Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-slate-900 dark:text-white">
              Premium Dental Care <br />
              <span className="text-gold-500 italic block mt-1">Designed Around Your Comfort</span>
            </h1>

            {/* Reassuring Subtext */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl font-light leading-relaxed">
              Experience modern dentistry in London with pain-conscious treatments, advanced technology, and personalised smile care. We operate under a strict non-judgment guarantee to help every anxious patient feel relaxed and deeply cared for.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-2">
              <button
                onClick={onBookClick}
                className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 rounded-xl hover:from-gold-400 hover:to-gold-600 shadow-lg hover:shadow-gold-500/20 active:scale-98 transition-all duration-200 text-center"
                id="hero-book-button"
              >
                Book Appointment
              </button>
              
              <button
                onClick={onEmergencyClick}
                className={`px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-200 border text-center flex items-center justify-center gap-2 ${
                  isDarkMode 
                    ? 'border-red-500/30 text-red-400 hover:bg-red-950/20 bg-slate-900/40' 
                    : 'border-red-200 text-red-650 hover:bg-red-50 bg-white'
                }`}
                id="hero-emergency-button"
              >
                <ShieldAlert className="h-4 w-4 animate-bounce text-red-500" />
                <span>Emergency Consultation</span>
              </button>
            </div>

            {/* Quick Emergency availability line */}
            <div className="flex items-center gap-1.5 text-xs text-red-500 font-mono">
              <Clock className="h-3.5 w-3.5 text-red-500 animate-pulse" />
              <span>Sameday emergency slots guaranteed today</span>
            </div>

            <hr className={`w-full my-4 border-t ${isDarkMode ? 'border-slate-800' : 'border-gold-100'}`} />

            {/* Mini Trust Points (✓ Gentle Dentistry, etc.) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              {trustPoints.map((pt, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-gold-500 shrink-0" />
                  <span className="text-xs font-medium text-slate-755 dark:text-slate-355">
                    {pt}
                  </span>
                </div>
              ))}
            </div>

            {/* Reviews Preview */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((_, starIdx) => (
                  <Star key={starIdx} className="h-3.5 w-3.5 fill-gold-500 text-gold-500" />
                ))}
                <span className="ml-1 text-xs font-mono font-bold text-slate-800 dark:text-slate-200">4.9/5</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-serif italic">
                “Over 750+ luxury clinical reviews in London Kensington”
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Image Slider Showcase with Glassmorphism badges */}
          <div className="lg:col-span-5 relative flex justify-center" id="hero-image-visual">
            
            {/* Visual Frame */}
            <div className="relative w-full max-w-md aspect-square sm:aspect-[4/3] lg:aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-gold-200/20 group">
              
              {/* Main Gorgeous Smile Transformation image generated */}
              <img
                src="/src/assets/images/smile_transformation_1_1779526799748.png"
                alt="Radiant confident smile transformation in London clinic"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                id="hero-main-smile-image"
              />
              
              {/* Premium Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Float Glassmorphism Card 1: 5-Star satisfaction guarantee */}
              <div className="absolute top-4 left-4 p-3 bg-white/75 dark:bg-slate-950/75 backdrop-blur-md rounded-2xl border border-white/40 dark:border-white/10 shadow-lg text-left max-w-[150px]">
                <div className="flex items-center gap-0.5 text-gold-500 mb-0.5">
                  <Star className="h-3 w-3 fill-gold-500" />
                  <Star className="h-3 w-3 fill-gold-500" />
                  <Star className="h-3 w-3 fill-gold-500" />
                  <Star className="h-3 w-3 fill-gold-500" />
                  <Star className="h-3 w-3 fill-gold-500" />
                </div>
                <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold">安心 CERTIFIED</p>
                <p className="text-xs font-serif font-semibold text-slate-900 dark:text-white mt-0.5">Pain-Free Record</p>
              </div>

              {/* Float Glassmorphism Card 2: Aesthetic Specialist active banner */}
              <div className="absolute bottom-6 right-6 left-6 p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white/40 dark:border-white/10 shadow-xl text-left">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-mono font-bold text-gold-600 dark:text-gold-400 tracking-wider uppercase">Active Treatment Highlight</h4>
                    <p className="text-sm font-serif font-bold text-slate-900 dark:text-white mt-0.5">
                      Bespoke Invisalign & Veneers
                    </p>
                  </div>
                  <div className="flex items-center justify-center p-1.5 rounded-full bg-gold-500/10 text-gold-500">
                    <Sparkles className="h-4 w-4" />
                  </div>
                </div>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 font-light mt-1.5 leading-relaxed">
                  Tailored by Dr Sarah Mitchell. 100% gentle mapping. Under 2 appointments across 2 weeks.
                </p>
              </div>

            </div>

            {/* Secondary backdrop decorations */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-400/20 rounded-full blur-2xl pointer-events-none -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-sea-500/20 rounded-full blur-2xl pointer-events-none -z-10" />

          </div>

        </div>
      </div>
    </section>
  );
}
