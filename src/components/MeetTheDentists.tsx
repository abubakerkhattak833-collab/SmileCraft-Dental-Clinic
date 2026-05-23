import React from 'react';
import { DENTISTS } from '../data';
import { Award, GraduationCap, Heart, CheckCircle } from 'lucide-react';

interface MeetTheDentistsProps {
  isDarkMode: boolean;
  onBookClick: () => void;
}

export default function MeetTheDentists({
  isDarkMode,
  onBookClick,
}: MeetTheDentistsProps) {
  return (
    <section className="py-24 relative overflow-hidden" id="meet-dentists-section">
      
      <div className="absolute top-1/3 left-1/2 w-80 h-80 rounded-full bg-gold-450/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20" id="dentists-header">
          <span className="font-mono text-xs text-gold-500 font-bold uppercase tracking-widest block">
            ELITE LONDON HEALTHCARE TEAM
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-slate-900 dark:text-white">
            Meet the Specialists <br />
            <span className="text-gold-500 italic">Committed to Your Peace of Mind</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
            Our private dental practitioners represent the pinnacle of British dentistry. They are selected not only for their mechanical precision but for their compassionate, anxiety-free patient bedside manner.
          </p>
        </div>

        {/* Dentists Layout Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="dentists-cards-grid">
          {DENTISTS.map((doc) => (
            <div
              key={doc.id}
              className={`rounded-3xl border overflow-hidden transition-all duration-300 flex flex-col justify-between ${
                isDarkMode
                  ? 'bg-slate-900/40 border-slate-800 hover:border-gold-500/20 shadow-2xl'
                  : 'bg-white border-gold-100 shadow-md hover:shadow-xl hover:border-gold-400/20'
              }`}
              id={`dentist-card-${doc.id}`}
            >
              
              {/* Doctor Headshot Frame */}
              <div className="relative overflow-hidden aspect-[4/5] sm:aspect-square lg:aspect-[4/5] bg-slate-950">
                <img
                  src={doc.image}
                  alt={`${doc.name}, private dentist London`}
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                  id={`dentist-img-${doc.id}`}
                />
                
                {/* Visual Accent Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Lead Specialist Badge overlay */}
                {doc.isLead && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gold-500 text-white font-mono text-[9px] tracking-wider uppercase font-bold rounded-lg shadow">
                    Chief Cosmetic Designer
                  </div>
                )}

                {/* Bottom title layer */}
                <div className="absolute bottom-4 left-6 right-6 text-left">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-tight">
                    {doc.name}
                  </h3>
                  <p className="text-xs font-mono text-gold-300 font-medium tracking-wide mt-0.5">
                    {doc.role}
                  </p>
                </div>
              </div>

              {/* Doctor Metadata Details */}
              <div className="p-6 text-left flex-1 flex flex-col justify-between space-y-6">
                
                <div className="space-y-4">
                  {/* Degrees */}
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <GraduationCap className="h-4 w-4 text-gold-500 shrink-0" />
                    <span className="font-semibold">{doc.degrees}</span>
                  </div>

                  {/* Reassuring Direct Quote/Bio */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-350 leading-relaxed font-light">
                    "{doc.bio}"
                  </p>

                  <hr className={`border-t ${isDarkMode ? 'border-slate-800' : 'border-gold-100'}`} />

                  {/* Specialties List */}
                  <div className="space-y-1.5">
                    <p className="text-[10px] font-mono font-bold tracking-widest text-[#d4af37] uppercase">
                      Clinical focus
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {doc.specialties.map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className={`text-[10.5px] px-2.5 py-1 rounded-full border ${
                            isDarkMode
                              ? 'bg-slate-950 border-slate-800 text-slate-400'
                              : 'bg-gold-50/40 border-gold-100 text-slate-700'
                          }`}
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Patient reassuring tag */}
                <div className="pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-650 dark:text-emerald-400">
                    <CheckCircle className="h-4 w-4 shrink-0 text-emerald-500" />
                    <span>Always accepting nervous patients</span>
                  </div>
                  
                  <button
                    onClick={onBookClick}
                    className="p-2 text-xs font-bold text-gold-600 dark:text-gold-400 hover:text-gold-500 uppercase font-mono tracking-wider"
                  >
                    Book Consultation →
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
