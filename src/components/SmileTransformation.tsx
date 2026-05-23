import React, { useState, useRef } from 'react';
import { SMILE_GALLERY_IMAGES } from '../data';
import { Star, ShieldAlert, Sparkles, Smile, ArrowRightCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface SmileTransformationProps {
  isDarkMode: boolean;
  onBookClick: () => void;
}

export default function SmileTransformation({
  isDarkMode,
  onBookClick,
}: SmileTransformationProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeStory = SMILE_GALLERY_IMAGES[activeStoryIdx];

  const handleSliderMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleSliderMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) { // Left click held down
      handleSliderMove(e.clientX);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    handleSliderMove(e.clientX);
  };

  return (
    <section className={`py-24 overflow-hidden relative ${
      isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-800'
    }`} id="smile-transformation-section">
      
      {/* Absolute ambient lights */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-gold-400/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-sea-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16" id="transformation-header">
          <span className="font-mono text-xs text-gold-500 font-bold uppercase tracking-widest block">
            LATEST REAL SMILE THERAPIES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-slate-900 dark:text-white">
            Beautiful Smiles <br />
            <span className="text-gold-500 italic">That Change Confidence</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Drag the gold dial below to experience real teeth transformations. We design smiles to look organically exquisite, restoring complete eating function and social freedom.
          </p>
        </div>

        {/* Gallery Selection Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {SMILE_GALLERY_IMAGES.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveStoryIdx(idx);
                setSliderPosition(50);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs font-medium uppercase tracking-wider transition-all duration-200 border ${
                activeStoryIdx === idx
                  ? 'bg-gold-500 text-white border-gold-500'
                  : isDarkMode
                    ? 'border-slate-800 hover:border-gold-500/30 text-slate-400 bg-slate-900/60'
                    : 'border-gold-100 hover:border-gold-500/30 text-slate-600 bg-gold-50/20'
              }`}
            >
              Patient {item.patient} ({item.title})
            </button>
          ))}
        </div>

        {/* Core Showcase: Interactive Slider + Story columns */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Interactive Before/After container */}
          <div className="lg:col-span-6 flex flex-col items-center" id="slider-left-column">
            
            <p className="text-xs font-mono text-slate-400 dark:text-slate-500 tracking-wider mb-3 uppercase font-medium flex items-center gap-1">
              <span>Drag slider left / right to compare</span>
            </p>

            {/* Slider frame */}
            <div 
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onMouseDown={handleMouseDown}
              className="relative w-full aspect-[16/9] md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gold-300/10 cursor-ew-resize select-none"
              id="slider-container"
            >
              
              {/* BEFORE IMAGE (Bottom) - using a greyscale, colder, or vintage version of smile */}
              <img
                src={activeStory.before}
                alt="Patient dentition teeth structure before cosmetic treatment"
                className="absolute inset-0 w-full h-full object-cover filter brightness-75 select-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-lg bg-black/60 text-white font-mono text-[10px] tracking-wider uppercase font-semibold">
                Before Treat
              </div>

              {/* AFTER IMAGE (Top overlay) */}
              <div 
                className="absolute inset-y-0 left-0 right-0 overflow-hidden select-none pointer-events-none"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
              >
                <img
                  src={activeStory.after}
                  alt="Beautiful restored healthy white smile after SmileCraft treatment"
                  className="absolute inset-0 w-full h-full object-cover select-none"
                  referrerPolicy="no-referrer"
                  style={{ width: containerRef.current?.getBoundingClientRect().width }}
                />
                <div className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-lg bg-gold-500 text-white font-mono text-[10px] tracking-wider uppercase font-bold">
                  After Treatment
                </div>
              </div>

              {/* Slider Line Divider */}
              <div 
                className="absolute inset-y-0 w-1 bg-gold-400 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Dial handle */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gold-500 border-2 border-white dark:border-slate-900 shadow-xl flex items-center justify-center text-white font-bold select-none">
                  ⇄
                </div>
              </div>

            </div>

            {/* Micro instructional text */}
            <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-4 leading-relaxed italic text-center">
              *Real unmodified patient case. Natural ceramic translucency is custom applied for natural look.
            </p>

          </div>

          {/* Right Column: In-depth emotional storytelling and specific anxiety-reducing data */}
          <div className="lg:col-span-6 space-y-7 text-left" id="story-right-column">
            
            <div className="flex items-center gap-1 text-gold-500">
              <Star className="h-5 w-5 fill-gold-500" />
              <Star className="h-5 w-5 fill-gold-500" />
              <Star className="h-5 w-5 fill-gold-500" />
              <Star className="h-5 w-5 fill-gold-500" />
              <Star className="h-5 w-5 fill-gold-500" />
              <span className="ml-1 text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase">5.0 Star transformation</span>
            </div>

            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                {activeStory.title}
              </h3>
              <p className="text-xs font-mono text-gold-600 dark:text-gold-400 uppercase tracking-wider mt-1 block">
                {activeStory.subtitle}
              </p>
            </div>

            {/* Emotional Patient Quote */}
            <div className={`p-6 rounded-2xl border-l-4 border-gold-500 italic relative ${
              isDarkMode ? 'bg-slate-900/60 text-slate-200 border-slate-800' : 'bg-gold-50/20 text-slate-700 border-gold-100'
            }`}>
              <span className="absolute -top-4 -left-1 text-5xl font-serif text-gold-500/20 pointer-events-none select-none">“</span>
              <p className="text-sm font-light leading-relaxed">
                "I avoided smiling for years due to embarrassment. SmileCraft completely transformed my confidence and made the process feel like an absolute breeze."
              </p>
              <p className="text-xs font-semibold text-gold-500 font-sans mt-3 not-italic">
                — {activeStory.patient}, London resident
              </p>
            </div>

            {/* Diagnostics details cards */}
            <div className="grid sm:grid-cols-2 gap-4 text-xs">
              <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-slate-900/40' : 'bg-slate-50'}`}>
                <p className="font-mono font-bold tracking-wider text-slate-450 dark:text-slate-505 uppercase">Pre-Treatment Diagnosis</p>
                <p className="text-slate-600 dark:text-slate-300 mt-1.5 font-light leading-relaxed">{activeStory.issue}</p>
              </div>

              <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-slate-900/40' : 'bg-slate-50'}`}>
                <p className="font-mono font-bold tracking-wider text-gold-600 dark:text-gold-400 uppercase">Anxiety-Comfort Safeguards</p>
                <p className="text-slate-605 dark:text-slate-305 mt-1.5 font-light leading-relaxed">{activeStory.anxietyFocus}</p>
              </div>
            </div>

            <div className="space-y-2 text-slate-555 dark:text-slate-355 text-sm font-light leading-relaxed">
              <h4 className="font-serif text-base font-semibold text-slate-900 dark:text-white">The Treatment Journey</h4>
              <p>{activeStory.story}</p>
            </div>

            {/* Conversion CTA */}
            <div className="pt-3">
              <button
                onClick={onBookClick}
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-xs uppercase tracking-wider text-white bg-gold-500 hover:bg-gold-605 rounded-xl shadow-md transition-all duration-200"
                id="transformation-book-cta"
              >
                <span>Design My Custom Trial Smile</span>
                <Smile className="h-4 w-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
