import React from 'react';
import { Star, ShieldCheck, Heart, Coffee, Leaf, Eye } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutSectionProps {
  isDarkMode: boolean;
  onExploreServicesClick: () => void;
}

export default function AboutSection({
  isDarkMode,
  onExploreServicesClick,
}: AboutSectionProps) {
  const coreValues = [
    {
      icon: <Heart className="h-5 w-5 text-gold-500" />,
      title: 'Anxiety-Free Compassion',
      description: 'We recognize that dental dread is real. Our staff never judges you and works at your exact preferred pace.'
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-gold-500" />,
      title: 'Modern Pure Materials',
      description: 'Metal-free, biocompatible, and non-toxic materials engineered to protect your full physical vitality.'
    },
    {
      icon: <Coffee className="h-5 w-5 text-gold-500" />,
      title: 'Spa-Like Atmosphere',
      description: 'Relax in warm lounge styles scented with soft lavender, complete with warm tea menus and warm towels.'
    },
    {
      icon: <Leaf className="h-5 w-5 text-gold-500" />,
      title: 'Gentle Ultrasound Tools',
      description: 'Advanced painless water-sprays replace traditional scraping and loud metallic drill structures.'
    }
  ];

  const stats = [
    { value: '98%', label: 'Anxiety Reduction Rate' },
    { value: '15+', label: 'Years Serving London' },
    { value: '0%', label: 'APR Finance Available' },
    { value: '10k+', label: 'Happy Radiant Smiles' }
  ];

  return (
    <section className={`py-24 relative overflow-hidden ${
      isDarkMode ? 'bg-slate-900/40 text-slate-100' : 'bg-gold-50/30 text-slate-800'
    }`} id="about-section">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Beautiful Visual Frame of luxurious clinic interior */}
          <div className="lg:col-span-5 relative" id="about-visual-left">
            <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-gold-200/20">
              
              {/* Generated luxury clinic interior asset */}
              <img
                src="/src/assets/images/clinic_interior_1779526776614.png"
                alt="SmileCraft premium private dental lounge in London"
                className="w-full object-cover aspect-[4/5] object-center transition-all duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                id="about-clinic-image"
              />

              {/* Darkening bottom mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Small floating client badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-950/70 backdrop-blur-md rounded-2xl border border-white/10 text-left">
                <p className="text-[10px] font-mono text-gold-400 uppercase tracking-widest font-semibold flex items-center gap-1">
                  <span>Certified Environment</span>
                </p>
                <p className="text-xs text-white font-serif italic mt-1">
                  “The calming lavender scent, background piano, and zero-drill quiet atmosphere represent private medicine excellence.”
                </p>
              </div>

            </div>

            {/* Glowing blur details */}
            <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-gold-500/10 blur-3xl pointer-events-none" />
          </div>

          {/* Right: Rich storytelling copy and stats */}
          <div className="lg:col-span-7 space-y-8 text-left" id="about-text-right">
            
            <div className="space-y-3">
              <span className="font-mono text-xs text-gold-500 font-bold uppercase tracking-widest">
                ESTABLISHED DENTAL ARTISTRY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-slate-900 dark:text-white">
                Where Modern Dentistry <br />
                <span className="text-gold-500 italic">Meets Patient Comfort</span>
              </h2>
            </div>

            <div className="space-y-4 text-slate-655 dark:text-slate-355 font-light leading-relaxed text-sm sm:text-base">
              <p>
                SmileCraft Dental Clinic is committed to delivering exceptional dental care through modern treatments, advanced technology, and compassionate service. Our primary objective is to dissolve the traditional dental fear and construct a premium, private healthcare experience.
              </p>
              <p>
                Our clinic focuses on creating a calm environment where patients feel comfortable from consultation to treatment. We completely reject cold, generic spaces, substituting them with elegant, soundproof dental lounges engineered to reduce anxiety and promote complete physical wellness.
              </p>
              <p>
                Whether you require routine dental care, cosmetic enhancements, or smile restoration treatments, our elite clinical team provides personalised solutions with patient wellbeing at the centre.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {stats.map((st, i) => (
                <div key={i} className={`p-4 rounded-2xl border transition-all ${
                  isDarkMode 
                    ? 'bg-slate-950/40 border-slate-800' 
                    : 'bg-white border-gold-100 shadow-sm'
                }`}>
                  <p className="text-2xl sm:text-3xl font-serif font-bold text-gold-505 dark:text-gold-400">
                    {st.value}
                  </p>
                  <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium mt-1 uppercase tracking-wider leading-tight">
                    {st.label}
                  </p>
                </div>
              ))}
            </div>

            <hr className={`my-6 border-t ${isDarkMode ? 'border-slate-800' : 'border-gold-100'}`} />

            {/* Unique features cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {coreValues.map((val, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className={`p-2.5 rounded-xl shrink-0 h-10 w-10 flex items-center justify-center ${
                    isDarkMode ? 'bg-slate-900' : 'bg-gold-50/50'
                  }`}>
                    {val.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                      {val.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-1 font-light">
                      {val.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex">
              <button
                onClick={onExploreServicesClick}
                className="inline-flex items-center gap-1.5 px-6 py-3 font-mono text-xs font-bold tracking-widest text-gold-600 dark:text-gold-400 hover:text-gold-500 uppercase cursor-pointer group"
                id="about-services-link"
              >
                <span>Discover Our Specialty Treatments</span>
                <span className="transition-transform group-hover:translate-x-1.5 font-sans">→</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
