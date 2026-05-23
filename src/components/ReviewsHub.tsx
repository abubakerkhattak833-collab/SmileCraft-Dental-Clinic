import React, { useState } from 'react';
import { REVIEWS } from '../data';
import { Star, Quote, ChevronLeft, ChevronRight, ShieldCheck, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ReviewsHubProps {
  isDarkMode: boolean;
  onBookClick: () => void;
}

export default function ReviewsHub({
  isDarkMode,
  onBookClick,
}: ReviewsHubProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  const activeReview = REVIEWS[activeIdx];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % REVIEWS.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  return (
    <section className={`py-24 relative overflow-hidden ${
      isDarkMode ? 'bg-slate-900/40 text-slate-100' : 'bg-gold-50/20 text-slate-800'
    }`} id="reviews-hub-section">
      
      {/* Visual glowing details */}
      <div className="absolute top-1/2 left-1/10 w-80 h-80 rounded-full bg-gold-450/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/10 w-80 h-80 rounded-full bg-sea-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          
          <div className="lg:col-span-8 text-left space-y-4" id="reviews-header-left">
            <span className="font-mono text-xs text-gold-500 font-bold uppercase tracking-widest block">
              PATIENT CONFIDENCE METRICS & DIALOGUES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-slate-900 dark:text-white">
              Anxiety Defeated. <br />
              <span className="text-gold-500 italic">Beautiful Smiles Restored.</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base font-light leading-relaxed max-w-2xl">
              Don’t let historic dental dread dictate your life. Read first-person clinical reviews from London patients who avoided care for years before discovering SmileCraft.
            </p>
          </div>

          <div className="lg:col-span-4 lg:text-right" id="reviews-header-right">
            {/* Elite clinical trust star card */}
            <div className={`p-6 rounded-2xl border text-left inline-block w-full max-w-sm ${
              isDarkMode 
                ? 'bg-slate-950/60 border-slate-800' 
                : 'bg-white border-gold-100 shadow-md'
            }`}>
              <div className="flex items-center gap-1.5 text-gold-500 mb-2">
                <Star className="h-4 w-4 fill-gold-500" />
                <span className="font-mono text-xs font-bold uppercase">Gold Rated Treatment</span>
              </div>
              <p className="text-3xl font-serif font-bold text-slate-900 dark:text-white">
                4.9 <span className="text-lg text-slate-400 font-normal">/ 5.0</span>
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                Aggregating over 750 verified luxury private dental patient evaluations. GDC and CQC London certified.
              </p>
            </div>
          </div>

        </div>

        {/* Carousel Framework */}
        <div className="relative max-w-4xl mx-auto" id="reviews-carousel-wrapper">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeReview.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className={`p-8 sm:p-12 rounded-3xl border text-left ${
                isDarkMode 
                  ? 'bg-slate-950/60 border-slate-800' 
                  : 'bg-white border-gold-100/80 shadow-lg'
              }`}
            >
              
              <Quote className="h-10 w-10 text-gold-300 dark:text-gold-500/20 absolute top-8 right-8 pointer-events-none" />

              {/* Patient Basic Profile */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-850 pb-6 mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gold-500/15 text-gold-500 flex items-center justify-center font-serif text-lg font-bold">
                    {activeReview.name[0]}
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-slate-900 dark:text-white">
                      {activeReview.name}
                    </h4>
                    <p className="text-xs font-mono text-slate-400 dark:text-slate-500">
                      {activeReview.location}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-start sm:items-end">
                  <div className="flex items-center gap-0.5 text-gold-500 mb-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-gold-500" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-[#d4af37] uppercase font-bold">
                    Procedure: {activeReview.treatment}
                  </span>
                </div>
              </div>

              {/* Testimonial Wordings */}
              <p className="font-serif text-base sm:text-lg lg:text-xl font-light italic leading-relaxed text-slate-800 dark:text-slate-205">
                "{activeReview.text}"
              </p>

              {/* Psychology contrasts: anxiety before vs actual experience */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-100 dark:border-slate-850">
                <div className="space-y-1 text-xs">
                  <p className="font-mono font-bold tracking-widest text-red-500 uppercase flex items-center gap-1.5">
                    <Heart className="h-3.5 w-3.5 text-red-400" />
                    <span>Prior Dental Fear</span>
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                    {activeReview.beforeAnxiety}
                  </p>
                </div>

                <div className="space-y-1 text-xs">
                  <p className="font-mono font-bold tracking-widest text-emerald-500 uppercase flex items-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                    <span>The SmileCraft Encounter</span>
                  </p>
                  <p className="text-slate-600 dark:text-slate-350 leading-relaxed font-light">
                    {activeReview.afterExperience}
                  </p>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-6">
            <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
              {activeIdx + 1} of {REVIEWS.length} luxury reviews
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className={`p-2.5 rounded-full border transition-all ${
                  isDarkMode 
                    ? 'hover:bg-slate-850 border-slate-800 text-slate-300' 
                    : 'hover:bg-gold-50 border-gold-100 text-slate-700'
                }`}
                aria-label="Previous Review"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              
              <button
                onClick={handleNext}
                className={`p-2.5 rounded-full border transition-all ${
                  isDarkMode 
                    ? 'hover:bg-slate-850 border-slate-800 text-slate-300' 
                    : 'hover:bg-gold-50 border-gold-100 text-slate-700'
                }`}
                aria-label="Next Review"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onBookClick}
            className="px-6 py-3 border border-gold-500 text-gold-600 dark:text-gold-400 hover:bg-gold-500 hover:text-white rounded-xl text-xs uppercase tracking-widest font-bold transition-all duration-200"
            id="reviews-cta-button"
          >
            Experience Our Stress-Free Dentistry
          </button>
        </div>

      </div>
    </section>
  );
}
