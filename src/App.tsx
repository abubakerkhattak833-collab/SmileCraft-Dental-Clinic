import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesGrid from './components/ServicesGrid';
import SmileTransformation from './components/SmileTransformation';
import WhyChooseUs from './components/WhyChooseUs';
import MeetTheDentists from './components/MeetTheDentists';
import ReviewsHub from './components/ReviewsHub';
import FAQSection from './components/FAQSection';
import BookingCTAHub from './components/BookingCTAHub';
import TreatmentsView from './components/TreatmentsView';
import Footer from './components/Footer';
import { PageId } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, PhoneCall, CheckCircle, ShieldAlert } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Sync dark class on top body element for any external layout transitions
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleBookTrigger = () => {
    setActivePage('contact');
    setTimeout(() => {
      document.getElementById('booking-hub-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  const handleEmergencyTrigger = () => {
    setActivePage('emergency');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 150);
  };

  const handleServicesTrigger = () => {
    setActivePage('home');
    setTimeout(() => {
      document.getElementById('services-grid-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-slate-950 text-slate-100 dark selection:bg-gold-500/25 selection:text-gold-200' 
        : 'bg-white text-slate-800 selection:bg-gold-100 selection:text-gold-900'
    }`}>
      
      {/* Top micro-notification advisory for GDC compliance */}
      <div className={`text-center py-2 px-4 transition-all duration-350 ${
        isDarkMode 
          ? 'bg-gradient-to-r from-red-950/40 via-slate-900 to-red-950/40 border-b border-red-900/20 text-red-400' 
          : 'bg-gradient-to-r from-red-500/5 via-gold-50/40 to-red-500/5 border-b border-red-500/10 text-red-600'
      } text-[11.5px] font-mono flex items-center justify-center gap-2 flex-wrap`}>
        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
        <span>GDC Registered Private Emergency Care Desk • Call London reception for urgent slots:</span>
        <a href="tel:+442079460192" className="underline font-bold hover:text-gold-500">020 7946 0192</a>
      </div>

      {/* Primary Navigation Header with Toggle */}
      <Header 
        activePage={activePage} 
        setActivePage={setActivePage} 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode}
        onBookClick={handleBookTrigger}
      />

      {/* Main Adaptive SPA view routing wrapped in smooth motion transitions */}
      <AnimatePresence mode="wait">
        <motion.main
          key={activePage}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="relative"
        >
          {activePage === 'home' && (
            <>
              {/* SECTION 1: HERO CONTAINER */}
              <HeroSection 
                isDarkMode={isDarkMode} 
                onBookClick={handleBookTrigger} 
                onEmergencyClick={handleEmergencyTrigger} 
              />
              
              {/* SECTION 2: ABOUT CLINIC BANNER */}
              <AboutSection 
                isDarkMode={isDarkMode} 
                onExploreServicesClick={handleServicesTrigger} 
              />
              
              {/* SECTION 3: SERVICES CATEGORIES ACCORDIONS */}
              <ServicesGrid 
                isDarkMode={isDarkMode} 
                setActivePage={setActivePage} 
              />
              
              {/* SECTION 4: SMILE BEFORE/AFTER TRANSFORMATION SLIDER */}
              <SmileTransformation 
                isDarkMode={isDarkMode} 
                onBookClick={handleBookTrigger} 
              />
              
              {/* SECTION 5: WHY PATIENTS CHOOSE US CREDENTIAL TABS */}
              <WhyChooseUs 
                isDarkMode={isDarkMode} 
              />
              
              {/* SECTION 6: MEET THE DENTISTS CARD DECKS */}
              <MeetTheDentists 
                isDarkMode={isDarkMode} 
                onBookClick={handleBookTrigger} 
              />
              
              {/* SECTION 7: PATIENT SURVEYS & REVIEWS HUB CAROUSEL */}
              <ReviewsHub 
                isDarkMode={isDarkMode} 
                onBookClick={handleBookTrigger} 
              />
              
              {/* SECTION 8: SEO FAQ DIRECTORY */}
              <FAQSection 
                isDarkMode={isDarkMode} 
              />
              
              {/* SECTION 9: HIGH-CONVERTING INTAKE CTA FORM */}
              <BookingCTAHub 
                isDarkMode={isDarkMode} 
                preselectedTreatment="general" 
              />
            </>
          )}

          {activePage === 'about' && (
            <>
              <AboutSection 
                isDarkMode={isDarkMode} 
                onExploreServicesClick={handleServicesTrigger} 
              />
              <MeetTheDentists 
                isDarkMode={isDarkMode} 
                onBookClick={handleBookTrigger} 
              />
              <WhyChooseUs 
                isDarkMode={isDarkMode} 
              />
            </>
          )}

          {activePage === 'gallery' && (
            <SmileTransformation 
              isDarkMode={isDarkMode} 
              onBookClick={handleBookTrigger} 
            />
          )}

          {activePage === 'reviews' && (
            <>
              <ReviewsHub 
                isDarkMode={isDarkMode} 
                onBookClick={handleBookTrigger} 
              />
              <FAQSection 
                isDarkMode={isDarkMode} 
              />
            </>
          )}

          {activePage === 'contact' && (
            <BookingCTAHub 
              isDarkMode={isDarkMode} 
              preselectedTreatment="general" 
            />
          )}

          {/* Core Specialty Service descriptor routing */}
          {['cosmetic', 'implants', 'whitening', 'invisalign', 'emergency'].includes(activePage) && (
            <>
              <TreatmentsView 
                treatmentId={activePage} 
                isDarkMode={isDarkMode} 
                onBookClick={handleBookTrigger} 
              />
              <BookingCTAHub 
                isDarkMode={isDarkMode} 
                preselectedTreatment={activePage} 
              />
            </>
          )}

        </motion.main>
      </AnimatePresence>

      {/* Global Brand Footer */}
      <Footer 
        isDarkMode={isDarkMode} 
        setActivePage={setActivePage} 
        onBookClick={handleBookTrigger} 
      />

    </div>
  );
}
