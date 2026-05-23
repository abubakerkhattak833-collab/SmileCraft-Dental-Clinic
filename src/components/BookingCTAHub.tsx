import React, { useState } from 'react';
import { AppointmentFormData } from '../types';
import { 
  Calendar, 
  MapPin, 
  Mail, 
  PhoneCall, 
  Clock, 
  ShieldCheck, 
  Sparkles,
  Heart,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BookingCTAHubProps {
  isDarkMode: boolean;
  preselectedTreatment?: string;
}

export default function BookingCTAHub({
  isDarkMode,
  preselectedTreatment = 'general',
}: BookingCTAHubProps) {
  const [formData, setFormData] = useState<AppointmentFormData>({
    name: '',
    phone: '',
    email: '',
    treatment: preselectedTreatment,
    preferredDate: '',
    preferredTime: 'morning',
    anxietyLevel: 'none',
    message: '',
  });

  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const treatmentsList = [
    { value: 'cosmetic', label: 'Cosmetic Dentistry & Veneers' },
    { value: 'implants', label: 'Dental Implants Restoration' },
    { value: 'whitening', label: 'Laser Teeth Whitening' },
    { value: 'invisalign', label: 'Invisalign Clear Braces' },
    { value: 'emergency', label: 'Urgent Same-Day Emergency care' },
    { value: 'general', label: 'Routine Check-ups & Preventative' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate luxury API submission processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitSuccess(true);
    }, 1200);
  };

  return (
    <section className="py-24 relative overflow-hidden" id="booking-hub-section">
      
      {/* Decorative details */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-gold-400/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-sea-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Immediate reassuring clinic credentials and contact info */}
          <div className="lg:col-span- così lg:col-span-5 text-left space-y-8" id="booking-info-left">
            <div>
              <span className="font-mono text-xs text-gold-505 font-bold uppercase tracking-widest block mb-2 text-gold-500">
                TRANSFORM YOUR SMILE COMFORTABLY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white leading-tight">
                Ready to Feel <br />
                <span className="text-gold-500 italic">Confident Again?</span>
              </h2>
              <p className="text-slate-500 dark:text-slate-450 text-sm sm:text-base font-light mt-4 leading-relaxed">
                Your consultation is a conversation, not a lecture. Tell us about your dream smile goals and any clinical anxiety. We design treatments meticulously to align with your psychological comfort barriers.
              </p>
            </div>

            {/* Micro value statements */}
            <div className="space-y-4" id="booking-comfort-bullets">
              <div className="flex gap-3">
                <div className="p-2.5 rounded-xl bg-gold-500/10 text-gold-500 shrink-0 h-10 w-10 flex items-center justify-center">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                    Absolute Privacy Guaranteed
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-light mt-0.5">
                    Private consultations are strictly confidential in dedicated separate suites.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="p-2.5 rounded-xl bg-gold-500/10 text-gold-500 shrink-0 h-10 w-10 flex items-center justify-center">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                    Sameday Scheduling Slot
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-light mt-0.5">
                    We maintain priority blank spots specifically to rescue emergencies instantly.
                  </p>
                </div>
              </div>
            </div>

            <hr className={`border-t ${isDarkMode ? 'border-slate-800' : 'border-gold-100'}`} />

            {/* Direct Contact Details */}
            <div className={`p-6 rounded-2xl border space-y-4 ${
              isDarkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-gold-50/15 border-gold-100 shadow-sm'
            }`} id="booking-contact-card">
              <p className="text-[10px] font-mono tracking-widest text-[#d4af37] font-bold uppercase">
                DIRECT LONDON CLINIC DESK
              </p>
              
              <div className="space-y-3.5 text-xs sm:text-sm text-slate-705 dark:text-slate-305">
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-gold-500 shrink-0" />
                  <span className="font-light">42A Kensington High Street, London, W8 4PE</span>
                </div>

                <div className="flex items-center gap-3">
                  <PhoneCall className="h-4 w-4 text-gold-500 shrink-0" />
                  <a href="tel:+442079460192" className="hover:text-gold-500 hover:underline font-mono">
                    020 7946 0192
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-gold-500 shrink-0" />
                  <a href="mailto:abubakerkhattak833@gmail.com" className="hover:text-gold-500 hover:underline">
                    abubakerkhattak833@gmail.com
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Appointment Form / Success Screen */}
          <div className="lg:col-span-7 w-full" id="booking-section-form-side">
            <AnimatePresence mode="wait">
              {!isSubmitSuccess ? (
                
                // Form frame
                <motion.div
                  key="booking-form"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className={`p-6 sm:p-8 rounded-3xl border text-left ${
                    isDarkMode 
                      ? 'bg-slate-900/60 border-slate-800' 
                      : 'bg-white border-gold-100/80 shadow-xl'
                  }`}
                >
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6">
                    Request Private Consultation
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Basic info row */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-450 dark:text-slate-450">
                          Your Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Eleanor Sterling"
                          className={`w-full px-4 py-3 rounded-xl text-xs sm:text-sm border transition-all ${
                            isDarkMode
                              ? 'bg-slate-950 border-slate-800 focus:border-gold-505 text-white'
                              : 'bg-slate-50 border-gold-100 focus:border-gold-400 text-slate-850'
                          } focus:outline-none`}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-450 dark:text-slate-450">
                          Direct Mobile
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 07700 900077"
                          className={`w-full px-4 py-3 rounded-xl text-xs sm:text-sm border transition-all ${
                            isDarkMode
                              ? 'bg-slate-950 border-slate-800 focus:border-gold-505 text-white'
                              : 'bg-slate-50 border-gold-100 focus:border-gold-400 text-slate-850'
                          } focus:outline-none`}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-450 dark:text-slate-450">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. active@london.co.uk"
                          className={`w-full px-4 py-3 rounded-xl text-xs sm:text-sm border transition-all ${
                            isDarkMode
                              ? 'bg-slate-950 border-slate-800 focus:border-gold-505 text-white'
                              : 'bg-slate-50 border-gold-100 focus:border-gold-400 text-slate-850'
                          } focus:outline-none`}
                        />
                      </div>

                      {/* Treatments selector */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-450 dark:text-slate-450">
                          Desired Specialty
                        </label>
                        <select
                          value={formData.treatment}
                          onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                          className={`w-full px-4 py-3 rounded-xl text-xs sm:text-sm border transition-all ${
                            isDarkMode
                              ? 'bg-slate-950 border-slate-800 focus:border-gold-505 text-white'
                              : 'bg-slate-50 border-gold-100 focus:border-gold-400 text-slate-850'
                          } focus:outline-none`}
                        >
                          {treatmentsList.map((tOpt) => (
                            <option key={tOpt.value} value={tOpt.value}>
                              {tOpt.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Date picker row */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-450 dark:text-slate-450">
                          Preferred Date
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            required
                            value={formData.preferredDate}
                            onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                            className={`w-full px-4 py-3 rounded-xl text-xs sm:text-sm border transition-all ${
                              isDarkMode
                                ? 'bg-slate-950 border-slate-800 focus:border-gold-505 text-white'
                                : 'bg-slate-50 border-gold-100 focus:border-gold-400 text-slate-850'
                            } focus:outline-none`}
                          />
                        </div>
                      </div>

                      {/* Time period */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-450 dark:text-slate-450">
                          Window Preferred
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {(['morning', 'afternoon', 'evening'] as const).map((tPeriod) => (
                            <button
                              key={tPeriod}
                              type="button"
                              onClick={() => setFormData({ ...formData, preferredTime: tPeriod })}
                              className={`py-2 px-1 rounded-lg text-[10px] sm:text-xs font-mono capitalize transition-all border ${
                                formData.preferredTime === tPeriod
                                  ? 'bg-gold-500 text-white border-gold-500 font-bold'
                                  : isDarkMode
                                    ? 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                                    : 'bg-slate-50 border-gold-100 text-slate-655 hover:bg-gold-50/50'
                              }`}
                            >
                              {tPeriod}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* INTERACTIVE: Dental Anxiety Level Indicator (Tackles fear immediately with custom adaptive output) */}
                    <div className={`p-4 rounded-2xl border transition-all ${
                      isDarkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-gold-50/15 border-gold-100/60'
                    }`}>
                      <div className="flex items-center justify-between mb-3.5">
                        <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                          <Heart className="h-4 w-4 text-red-500 animate-pulse shrink-0" />
                          <span>Do you experience dental anxiety?</span>
                        </label>
                      </div>

                      <div className="grid grid-cols-3 gap-2.5">
                        {(['none', 'mild', 'severe'] as const).map((aLevel) => (
                          <button
                            key={aLevel}
                            type="button"
                            onClick={() => setFormData({ ...formData, anxietyLevel: aLevel })}
                            className={`py-2 rounded-xl text-[10.5px] font-mono uppercase tracking-wider transition-all border ${
                              formData.anxietyLevel === aLevel
                                ? aLevel === 'severe'
                                  ? 'bg-red-500 text-white border-red-500 font-bold'
                                  : 'bg-gold-500 text-white border-gold-500 font-bold'
                                : isDarkMode
                                  ? 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                                  : 'bg-slate-50 border-gold-100 text-slate-650 hover:bg-gold-50/50'
                            }`}
                          >
                            {aLevel === 'none' ? 'I feel relaxed' : aLevel === 'mild' ? 'Mild dread' : 'Extreme terror'}
                          </button>
                        ))}
                      </div>

                      {/* Adaptive reassuring text block */}
                      <AnimatePresence mode="wait">
                        {formData.anxietyLevel === 'severe' && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-3 pt-3 border-t border-red-500/10 text-left"
                          >
                            <div className="flex gap-2 items-start text-xs text-red-650 dark:text-red-400 bg-red-500/5 p-3 rounded-xl">
                              <AlertTriangle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                              <p className="font-light leading-relaxed">
                                <strong>Nervous Safeguards Activated:</strong> We note this with deep compassion. Dr Mitchell will configure absolute privacy, calming essential lavender sprays, soft warm noise-isolating headphones, and premium twilight sleep anesthesia opportunities. We proceed solely at your control.
                              </p>
                            </div>
                          </motion.div>
                        )}
                        {formData.anxietyLevel === 'mild' && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-3 pt-3 border-t border-gold-500/15 text-left"
                          >
                            <div className="flex gap-2 items-start text-xs text-gold-700 dark:text-gold-400 bg-gold-500/5 p-3 rounded-xl">
                              <Sparkles className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" />
                              <p className="font-light leading-relaxed">
                                <strong>Warm Care Configured:</strong> We have noted your dread. You will receive customized herbal tea on arrival and deep neck support pillows. Our gentle diagnostic microscopes replace scary metal scraping instruments.
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-450 dark:text-slate-450">
                        Special requests or notes (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Share any specific tooth concerns or physical worries..."
                        className={`w-full px-4 py-3 rounded-xl text-xs sm:text-sm border transition-all ${
                          isDarkMode
                            ? 'bg-slate-950 border-slate-800 focus:border-gold-505 text-white'
                            : 'bg-slate-50 border-gold-100 focus:border-gold-400 text-slate-850'
                        } focus:outline-none`}
                      />
                    </div>

                    {/* Submit Call To Action */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 text-xs font-mono font-bold tracking-widest uppercase text-slate-950 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 rounded-xl hover:from-gold-400 hover:to-gold-600 shadow-md transition-all duration-205 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Processing Secure Request...</span>
                      ) : (
                        <>
                          <span>Submit Request to Reception</span>
                          <span>🔒</span>
                        </>
                      )}
                    </button>

                    <p className="text-[10px] text-slate-400 dark:text-slate-500 text-center leading-relaxed font-sans">
                      By submitting, you agree to secure clinical records storage. No promotional marketing spam is ever transmitted.
                    </p>

                  </form>
                </motion.div>
              ) : (
                
                // Luxury Success Screen
                <motion.div
                  key="booking-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`p-8 sm:p-12 rounded-3xl border text-center ${
                    isDarkMode 
                      ? 'bg-slate-900 border-slate-800' 
                      : 'bg-white border-gold-100 shadow-2xl'
                  } space-y-6`}
                >
                  <div className="h-16 w-16 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>

                  <div className="space-y-2">
                    <span className="font-mono text-xs text-gold-500 uppercase tracking-widest block font-bold">
                      YOUR CONSULTATION REQUEST SECURED
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                      Thank You, {formData.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light font-sans max-w-lg mx-auto">
                      Our Head Clinic Coordinator, Olivia, will ring you at <strong>{formData.phone}</strong> or send details to <strong>{formData.email}</strong> within 15 minutes to adjust your preferred clinical calendar slot.
                    </p>
                  </div>

                  {/* Summary of what happens next to ease anxieties */}
                  <div className={`p-6 rounded-2xl border text-left space-y-3.5 max-w-lg mx-auto ${
                    isDarkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-gold-50/15 border-gold-100'
                  }`}>
                    <p className="text-[10px] font-mono tracking-widest text-[#d4af37] font-bold uppercase">
                      WHAT TO EXPECT NEXT:
                    </p>
                    <ul className="space-y-2.5 text-xs text-slate-650 dark:text-slate-355 leading-relaxed font-light">
                      <li className="flex items-start gap-2">
                        <span className="text-gold-500 shrink-0">1.</span>
                        <span><strong>Gentle Intake Check:</strong> Olivia will answer any initial sedation queries over the phone with absolute warmth.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gold-500 shrink-0">2.</span>
                        <span><strong>The Welcome:</strong> Step into our private Kensington reception. Soft lavender aromatherapy active immediately.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gold-500 shrink-0">3.</span>
                        <span><strong>Trial Mockup:</strong> No grinding drills occur. We take high-def 3D laser scans to model your smile change together.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                      onClick={() => setIsSubmitSuccess(false)}
                      className={`text-xs font-mono uppercase tracking-wider font-bold transition-all px-6 py-2.5 rounded-lg border ${
                        isDarkMode
                          ? 'border-slate-800 hover:bg-slate-850 text-slate-300'
                          : 'border-gold-100 hover:bg-gold-50 text-slate-700'
                      }`}
                    >
                      Make Another Inquiry
                    </button>
                    
                    <a
                      href="mailto:abubakerkhattak833@gmail.com"
                      className="text-xs font-mono uppercase tracking-wider font-bold p-3 text-gold-500 hover:text-gold-600"
                    >
                      Email abubakerkhattak833@gmail.com
                    </a>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
