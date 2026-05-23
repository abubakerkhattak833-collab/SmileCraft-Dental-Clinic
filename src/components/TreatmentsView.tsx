import React from 'react';
import { TreatmentInfo } from '../types';
import { TREATMENTS } from '../data';
import { 
  ShieldCheck, 
  Clock, 
  HelpCircle, 
  DollarSign, 
  CheckCircle,
  Gem,
  Sparkles,
  Award
} from 'lucide-react';
import { motion } from 'motion/react';

interface TreatmentsViewProps {
  treatmentId: string;
  isDarkMode: boolean;
  onBookClick: () => void;
}

export default function TreatmentsView({
  treatmentId,
  isDarkMode,
  onBookClick,
}: TreatmentsViewProps) {
  
  const info = TREATMENTS[treatmentId];
  if (!info) {
    return (
      <div className="p-12 text-center">
        <p className="text-red-500 font-mono font-bold uppercase">Specialty Treatment Not Found</p>
      </div>
    );
  }

  return (
    <article className="py-12 md:py-16" id={`treatment-view-${treatmentId}`}>
      
      {/* Visual background flares */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-gold-450/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-sea-300/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb indicator */}
        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 dark:text-slate-505 mb-6" id="treatment-breadcrumb">
          <span>SmileCraft London</span>
          <span>/</span>
          <span>Treatments Menu</span>
          <span>/</span>
          <span className="text-gold-500 font-semibold">{info.title}</span>
        </div>

        {/* Header Hero Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16" id="treatment-hero-row">
          
          {/* Info Block */}
          <div className="lg:col-span- così lg:col-span-7 text-left space-y-6" id="treatment-hero-left">
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase ${
              isDarkMode 
                ? 'bg-slate-900 border border-slate-800 text-gold-300' 
                : 'bg-gold-50/70 border border-gold-100 text-gold-700'
            }`}>
              <Gem className="h-3.5 w-3.5 text-gold-500 shrink-0" />
              <span>{info.subtitle}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white leading-tight">
              {info.title} <br />
              <span className="text-gold-500 italic text-2xl sm:text-3xl lg:text-4xl">Private Harley-Street Standards</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-650 dark:text-slate-350 leading-relaxed font-light font-sans">
              {info.longDescription}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className={`p-4 rounded-xl border ${
                isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-gold-50/20 border-gold-100 shadow-sm'
              }`}>
                <div className="flex items-center gap-2 text-xs font-mono tracking-wider font-bold mb-1.5 uppercase text-slate-700 dark:text-slate-200">
                  <Clock className="h-4 w-4 text-gold-505 text-gold-500 shrink-0" />
                  <span>Clinical Duration</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                  {info.duration}
                </p>
              </div>

              <div className={`p-4 rounded-xl border ${
                isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-gold-50/20 border-gold-100 shadow-sm'
              }`}>
                <div className="flex items-center gap-2 text-xs font-mono tracking-wider font-bold mb-1.5 uppercase text-slate-700 dark:text-slate-200">
                  <Award className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Expected Recovery</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                  {info.recovery}
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <button
                onClick={onBookClick}
                className="px-7 py-3.5 text-xs font-mono font-bold tracking-widest uppercase text-slate-950 bg-gold-400 hover:bg-gold-500 rounded-xl transition-all duration-200 shadow-md"
                id="treatment-hero-book-cta"
              >
                Book Comfort Consultation
              </button>
              
              <div className="text-left font-serif">
                <span className="text-[10px] font-mono tracking-widest text-slate-400 dark:text-slate-500 uppercase block">INDICATIVE TARIFF</span>
                <span className="text-lg font-bold text-gold-505 dark:text-gold-400">{info.pricing}</span>
              </div>
            </div>

          </div>

          {/* Graphic Side */}
          <div className="lg:col-span-5 relative" id="treatment-hero-right">
            
            <div className="rounded-3xl overflow-hidden aspect-video sm:aspect-square lg:aspect-[4/5] shadow-2xl border border-gold-100/20 group relative bg-slate-950">
              <img
                src={
                  treatmentId === 'cosmetic' 
                    ? '/src/assets/images/smile_transformation_1_1779526799748.png'
                    : treatmentId === 'general'
                      ? '/src/assets/images/clinic_interior_1779526776614.png'
                      : 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=800&auto=format&fit=crop'
                }
                alt={`${info.title} at local private London clinic`}
                className="w-full h-full object-cover select-none transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <p className="text-[10px] font-mono tracking-widest text-[#d4af37] font-bold uppercase">GUARANTEE</p>
                <p className="text-sm font-serif font-semibold text-white mt-0.5">Compliant with GDC & CQC Rules</p>
              </div>
            </div>

          </div>

        </div>

        {/* Anxiety Relief Safeguards Block */}
        <div className={`p-8 sm:p-10 rounded-3xl border text-left mb-16 ${
          isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-gold-50/15 border-gold-100/80'
        }`} id="treatment-anxiety-relief-block">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs text-gold-505 font-bold uppercase tracking-widest block text-gold-500">
              ANTI-ANXIETY SAFEGUARDS
            </span>
            <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-900 dark:text-white">
              Pain-Conscious Comfort Measures We Apply
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-light leading-relaxed font-sans">
              Many dental treatments are avoided due to prior traumatic events. Here are the specific, localized procedures we include automatically to guarantee your peace of mind:
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 pt-4 text-xs sm:text-sm">
              {info.anxietyRelief.map((relief, rIdx) => (
                <div key={rIdx} className="flex gap-2 text-slate-800 dark:text-slate-300 font-light leading-relaxed">
                  <span className="text-gold-500 text-base shrink-0">✓</span>
                  <span>{relief}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Path steps */}
        <div className="space-y-8 mb-16" id="treatment-steps-path">
          <div className="text-left space-y-2">
            <span className="font-mono text-xs text-[#d4af37] font-bold uppercase tracking-widest">
              STEP-BY-STEP DIAGNOSTICS PATHWAY
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              What Happens During Treatment?
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {info.steps.map((st, sIdx) => (
              <div 
                key={sIdx}
                className={`p-6 rounded-2xl border transition-all ${
                  isDarkMode 
                    ? 'bg-slate-900/40 border-slate-800' 
                    : 'bg-white border-gold-100/60 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="h-8 w-8 rounded-full bg-gold-500/10 text-gold-600 dark:text-gold-400 border border-gold-500/35 flex items-center justify-center font-mono font-bold text-xs sm:text-sm">
                    {sIdx + 1}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-slate-400 dark:text-slate-500 uppercase font-bold">
                    Phase {sIdx + 1}
                  </span>
                </div>

                <h4 className="font-serif text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {st.title}
                </h4>
                
                <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                  {st.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Benefits list */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16" id="treatment-benefits-grid">
          
          <div className="text-left space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-xs text-gold-500 font-bold uppercase tracking-widest">
                QUALITY OUTCOMES
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Long-Term Health Benefits
              </h3>
            </div>

            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
              Every procedure has been structured to reinforce structural stability, preserve as much healthy natural tooth structure as possible, and provide pristine, light-refracting biological results.
            </p>

            <ul className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-light">
              {info.benefits.map((ben, bIdx) => (
                <li key={bIdx} className="flex gap-2 items-start leading-relaxed">
                  <span className="text-gold-500 text-base shrink-0">✓</span>
                  <span>{ben}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing assurance badge */}
          <div className={`p-8 rounded-3xl border text-left flex flex-col justify-between ${
            isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-gold-50/10 border-gold-100 shadow-md'
          }`} id="treatment-pricing-card">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono tracking-wider font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 uppercase">
                <span>0% APR Finance Offered</span>
              </div>

              <h4 className="font-serif text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                Transparent Tariff Breakdown
              </h4>

              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                No auxiliary clinical setup fees or unannounced checkup billing. We accept all major private UK dental plan insurance paths and coordinate directly with them.
              </p>

              <div className="py-2">
                <span className="text-[10px] font-mono tracking-widest text-slate-400 dark:text-slate-500 block">STARTING RATE</span>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-gold-555 dark:text-gold-400">{info.pricing}</span>
              </div>
            </div>

            <button
              onClick={onBookClick}
              className="mt-6 w-full py-3 bg-gold-500 hover:bg-gold-600 text-white font-mono text-xs uppercase tracking-widest font-bold rounded-xl transition-all shadow shadow-gold-500/10"
            >
              Verify Insurance & Options
            </button>

          </div>

        </div>

      </div>
    </article>
  );
}
