import React from 'react';
import { 
  HeartHandshake, 
  Cpu, 
  Compass, 
  Ghost, 
  FileText, 
  Sparkles,
  ShieldCheck 
} from 'lucide-react';

interface WhyChooseUsProps {
  isDarkMode: boolean;
}

export default function WhyChooseUs({ isDarkMode }: WhyChooseUsProps) {
  
  const benefits = [
    {
      icon: <HeartHandshake className="h-6 w-6 text-gold-500" />,
      title: 'Pain-conscious treatments',
      reliefText: 'Fear of Pain Resolved',
      description: 'We utilise computer-guided anesthetic delivery and twilight sedation. You remain fully comfortable and feel absolutely nothing during procedure.'
    },
    {
      icon: <Cpu className="h-6 w-6 text-gold-500" />,
      title: 'Modern digital dentistry',
      reliefText: 'No Choking Impression Trays',
      description: '3D digital scanning laser wands map arches in 60 seconds with perfect precision, eliminating traditional choking, messy putty, and waiting times.'
    },
    {
      icon: <Compass className="h-6 w-6 text-gold-500" />,
      title: 'Personalised care plans',
      reliefText: 'No Judgemental Medical Lectures',
      description: 'Every smile design is mapped to mirror your natural bone contours, jaw motion, and facial symmetry for an natural, organic look.'
    },
    {
      icon: <Ghost className="h-6 w-6 text-gold-500" />,
      title: 'Comfort focused environment',
      reliefText: 'Anxiety & Medical Smell Reduced',
      description: 'Step into a serene environment scented with sweet calming lavender, accompanied by soundproof active headphones and soft leather lounge couches.'
    },
    {
      icon: <FileText className="h-6 w-6 text-gold-500" />,
      title: 'Transparent consultations',
      reliefText: 'Unplanned Bill Surprise Avoided',
      description: 'We present fully itemized custom pricing paths before any work is scheduled. 0% interest monthly payment options are instantly organized on-site.'
    },
    {
      icon: <Sparkles className="h-6 w-6 text-gold-500" />,
      title: 'Luxury patient experience',
      reliefText: 'Concierge Patient Accommodations',
      description: 'Enjoy premium herbal teas, customized entertainment playlists, and full hot-towel refreshes, raising dental treatments to a relaxing ritual.'
    }
  ];

  return (
    <section className={`py-24 relative overflow-hidden ${
      isDarkMode ? 'bg-slate-900/60' : 'bg-gold-50/15'
    }`} id="why-choose-us-section">
      
      {/* Decorative details */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-gold-400/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-sea-400/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20" id="why-choose-us-header">
          <span className="font-mono text-xs text-gold-500 font-bold uppercase tracking-widest block">
            THE SMICRAFT PRIVATE STANDARD
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-slate-900 dark:text-white">
            Care Rooted in Comfort, <br />
            <span className="text-gold-500 italic">Engineered for Trust</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
            Traditional dentistry can trigger fear. We have re-engineered the complete diagnostic process to remove anxiety, ensure financial clarity, and deliver luxurious comfort.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="why-choose-us-grid">
          {benefits.map((ben, index) => (
            <div
              key={index}
              className={`p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${
                isDarkMode
                  ? 'bg-slate-900/40 border-slate-800 hover:border-gold-500/20'
                  : 'bg-white border-gold-100 shadow-sm hover:shadow-lg hover:border-gold-400/20'
              }`}
              id={`why-card-${index}`}
            >
              
              {/* Badge indicating anxiety remedy */}
              <div className="flex items-center justify-between gap-2 mb-6">
                <div className={`p-3 rounded-xl ${
                  isDarkMode ? 'bg-slate-850' : 'bg-gold-50/50'
                }`}>
                  {ben.icon}
                </div>
                
                {/* Anxiety Relief Tag */}
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-mono tracking-wider font-semibold bg-emerald-50 text-emerald-750 dark:bg-emerald-950/40 dark:text-emerald-400 uppercase">
                  <ShieldCheck className="h-3 w-3" />
                  <span>{ben.reliefText}</span>
                </span>
              </div>

              <div className="space-y-2 text-left">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  {ben.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                  {ben.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
