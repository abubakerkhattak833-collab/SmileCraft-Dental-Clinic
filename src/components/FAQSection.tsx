import React, { useState } from 'react';
import { FAQS } from '../data';
import { HelpCircle, ChevronDown, ChevronUp, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQSectionProps {
  isDarkMode: boolean;
}

export default function FAQSection({ isDarkMode }: FAQSectionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'pain' | 'cost' | 'treatments'>('all');

  const filteredFaqs = selectedCategory === 'all' 
    ? FAQS 
    : FAQS.filter(faq => faq.category === selectedCategory);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  // Compile JSON-LD schema dynamically for search spiders
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-24 relative" id="faq-section">
      
      {/* Dynamic JSON-LD injection for GDC & London SEO Compliance */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center space-y-4 mb-16" id="faq-header">
          <span className="font-mono text-xs text-gold-500 font-bold uppercase tracking-widest block">
            VERIFIED HEALTH CLINIC FAQ
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-slate-900 dark:text-white">
            Your Questions, <br />
            <span className="text-gold-500 italic">Answered Honestly</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
            We believe that complete mental clarity diminishes treatment distress. Browse our answers regarding discomfort mitigation, payment plans, and same-day dental rescue.
          </p>
        </div>

        {/* Categories Sorter tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10" id="faq-filters">
          <button
            onClick={() => { setSelectedCategory('all'); setOpenIdx(0); }}
            className={`px-4.5 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all border ${
              selectedCategory === 'all'
                ? 'bg-gold-500 text-white border-gold-500 font-bold'
                : isDarkMode
                  ? 'border-slate-800 hover:border-gold-500/20 text-slate-400 bg-slate-900/60'
                  : 'border-gold-100 hover:border-gold-500/20 text-slate-650 bg-white shadow-sm'
            }`}
          >
            All Questions
          </button>
          
          <button
            onClick={() => { setSelectedCategory('pain'); setOpenIdx(0); }}
            className={`px-4.5 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all border ${
              selectedCategory === 'pain'
                ? 'bg-gold-500 text-white border-gold-500 font-bold'
                : isDarkMode
                  ? 'border-slate-800 hover:border-gold-500/20 text-slate-400 bg-slate-900/60'
                  : 'border-gold-100 hover:border-gold-500/20 text-slate-650 bg-white iframe-rest'
            }`}
          >
            Comfort & Pain relief
          </button>

          <button
            onClick={() => { setSelectedCategory('cost'); setOpenIdx(0); }}
            className={`px-4.5 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all border ${
              selectedCategory === 'cost'
                ? 'bg-gold-500 text-white border-gold-500 font-bold'
                : isDarkMode
                  ? 'border-slate-800 hover:border-gold-500/20 text-slate-400 bg-slate-900/60'
                  : 'border-gold-100 hover:border-gold-500/20 text-slate-650 bg-white'
            }`}
          >
            Fees & Billing
          </button>

          <button
            onClick={() => { setSelectedCategory('treatments'); setOpenIdx(0); }}
            className={`px-4.5 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all border ${
              selectedCategory === 'treatments'
                ? 'bg-gold-500 text-white border-gold-500 font-bold'
                : isDarkMode
                  ? 'border-slate-800 hover:border-gold-500/20 text-slate-400 bg-slate-900/60'
                  : 'border-gold-100 hover:border-gold-500/20 text-slate-650 bg-white'
            }`}
          >
            Treatments & Lifespan
          </button>
        </div>

        {/* Accordions Frame */}
        <div className="space-y-4 text-left" id="faq-accordions">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? isDarkMode 
                      ? 'bg-slate-900/60 border-gold-505/30' 
                      : 'bg-gold-50/15 border-gold-300/40 shadow-md'
                    : isDarkMode
                      ? 'bg-slate-900/30 border-slate-850/80 hover:border-slate-800'
                      : 'bg-white border-gold-100/60 hover:border-gold-300/30 shadow-sm'
                }`}
              >
                
                {/* Trigger Row */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
                  id={`faq-trigger-${idx}`}
                >
                  <div className="flex gap-3">
                    <HelpCircle className="h-5 w-5 text-gold-500 shrink-0 mt-0.5" />
                    <span className="font-serif text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      {faq.question}
                    </span>
                  </div>
                  <div className="text-slate-400">
                    {isOpen ? <ChevronUp className="h-4 w-4 text-gold-500 scale-110" /> : <ChevronDown className="h-4 w-4" />}
                  </div>
                </button>

                {/* Answer section */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-5 pt-1 pl-14 text-xs sm:text-sm text-slate-600 dark:text-slate-350 font-light leading-relaxed border-t border-dashed border-gold-100/30 dark:border-slate-800">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

        {/* Transparent consult message card */}
        <div className={`mt-10 p-4.5 rounded-xl text-center border inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-450 mx-auto ${
          isDarkMode ? 'border-slate-850 bg-slate-950/40' : 'border-gold-100 bg-gold-50/20'
        }`}>
          <Lock className="h-3.5 w-3.5 text-gold-500" />
          <span>Need more details on GDC guidelines or custom sedation? Our treatment coordinators respond to private enquiries instantly.</span>
        </div>

      </div>
    </section>
  );
}
