import { TreatmentInfo, Review, FAQItem } from './types';

export const DENTISTS = [
  {
    id: 'dr-sarah-mitchell',
    name: 'Dr Sarah Mitchell',
    role: 'Cosmetic Dentistry Specialist',
    degrees: 'BDS (Lond), MJDF RCS (Eng)',
    bio: 'Dedicated to designing gorgeous, light-reflecting smiles while protecting healthy tooth structure. She understands dental anxiety intimately and employs state-of-the-art gentle prep and conscious relaxation techniques.',
    image: '/src/assets/images/dr_sarah_mitchell_1779526831748.png',
    specialties: ['Porcelain Veneers', 'Smile Makeovers', 'Composite Bonding'],
    isLead: true,
  },
  {
    id: 'dr-marcus-vance',
    name: 'Dr Marcus Vance',
    role: 'Implantology & Oral Rehabilitation Specialist',
    degrees: 'DDS, MSc Aesthetic Dentistry (KCL)',
    bio: 'An authority on full-mouth reconstructive dentistry with over 15 years replacing complex missing teeth. Marcus utilizes cutting-edge digital guided keys to ensure implant placement is 100% precise, pain-free and swift.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop',
    specialties: ['Dental Implants', 'Bone Grafting', 'Restorations under Sedation'],
    isLead: false,
  },
  {
    id: 'dr-sophia-chen',
    name: 'Dr Sophia Chen',
    role: 'Orthodontics & Invisalign Lead',
    degrees: 'BChD (Leeds), MOrth RCS (Edin)',
    bio: 'A certified Diamond-tier Invisalign provider who has aligned over 800 smiles. Sophia blends mechanical excellence with an artistic eye, tailoring subtle alignments that harmonize with each patient’s unique face.',
    image: 'https://images.unsplash.com/photo-1594824813573-246434e3b96f?q=80&w=600&auto=format&fit=crop',
    specialties: ['Invisalign Go & Full', 'Discreet Clear Braces', 'Teen Orthodontics'],
    isLead: false,
  }
];

export const TREATMENTS: Record<string, TreatmentInfo> = {
  cosmetic: {
    id: 'cosmetic',
    title: 'Cosmetic Dentistry',
    subtitle: 'Cosmetic Dentist London',
    shortDescription: 'Artistically crafted porcelain veneers, custom composite bonding, and comprehensive bespoke smile makeovers tailored to your facial symmetry.',
    longDescription: 'Our signature cosmetic smile therapies are engineered to elevate your natural charm. We believe a smile makeover should never look artificial. Using precise facial mapping and premium, individually sculpted ceramics, we recreate the delicate light trans-reflectivity of real tooth enamel. It’s not just a procedure; it is a life-affirming confidence restoration.',
    duration: '2 appointments across 2 weeks',
    recovery: 'Immediate return to daily activities',
    anxietyRelief: [
      'Digital trial smile to preview your results before touching your teeth',
      'Ultra-thin preparations conserving maximum natural enamel',
      'Bespoke sedation paths available for total peace of mind'
    ],
    benefits: [
      'Bespoke shading tailored carefully to your skin tone and lip line',
      'Stain-resistant premium handcrafted porcelain material from master technicians',
      'Strengthens minorly cracked, chipped, or structurally worn teeth'
    ],
    pricing: 'Veneers from £950 / tooth (0% Interest APR finance options)',
    steps: [
      {
        title: 'Bespoke Consultation & 3D Scan',
        description: 'We perform pain-free high resolution digital scanning and photograph your face structure to plan the beautiful aesthetics.'
      },
      {
        title: 'The Trial Smile',
        description: 'Before any final work is placed, we preview a provisional design on your teeth so you can experience and approve your look.'
      },
      {
        title: 'Artisan Fitment',
        description: 'Our world-renowned laboratory builds your custom veneers, which we bond precisely with microscopes under gentle comfort safeguards.'
      }
    ],
    seoTitle: 'Cosmetic Dentist London'
  },
  implants: {
    id: 'implants',
    title: 'Dental Implants',
    subtitle: 'Dental Implants London',
    shortDescription: 'World-class, permanent, titanium restorations. Replace missing teeth confidently with pain-free digital placement tools and natural styling.',
    longDescription: 'Losing teeth can trigger deep functional anxieties and make you self-conscious about eating or laughing. Our Swiss-system implant solutions replace both root and tooth crowns permanently. Facilitated by 3D digital bone radiography, we map and position dental implants with unmatched accuracy. This reduces structural distress, shortens clinical hours, and delivers lasting strength.',
    duration: '3 to 6 months total (often only 2 brief clinical steps)',
    recovery: 'Mild tenderness for 2-4 days, immediately managed by basic anti-inflammatories',
    anxietyRelief: [
      'Intravenous (IV) twilight sedation option so you remain deeply relaxed',
      'Computer-guided computerised keys eliminating surgical guesswork',
      'Continuous warm nursing care and detailed post-treatment luxury guidance'
    ],
    benefits: [
      'Prevents natural jaw bone deterioration and supports facial tissue profile',
      'Renders 100% natural bite forces allowing you to eat steaks and crunchy fruits',
      'Never decays and behaves and feels exactly like an original healthy tooth'
    ],
    pricing: 'From £1,950 per implant (Includes premium custom crown)',
    steps: [
      {
        title: '3D Panoramic Radiography',
        description: 'We capture high-definition bone density profiles to find the optimal sterile placement vector without invasive exploratory cuts.'
      },
      {
        title: 'Guided Placement',
        description: 'Under local anesthesia or twilight sedation, the titanium support structure is set securely with surgical microscopic precision.'
      },
      {
        title: 'Bespoke Crown Handcraft',
        description: 'Following a fast healing phase, we fit a handpainted porcelain crown that meshes indistinguishably with matching teeth.'
      }
    ],
    seoTitle: 'Dental Implants London'
  },
  whitening: {
    id: 'whitening',
    title: 'Teeth Whitening',
    subtitle: 'Premium Dental Whitening London',
    shortDescription: 'Enrich your smile securely with safe, scientific, power laser dentistry or custom gold-comfort boutique take-home gel kits.',
    longDescription: 'Dull or stained teeth often induce an subconscious hesitation to laugh or speak in corporate and romantic environments. Generic, over-the-counter DIY kits can damage sensitive gums and result in agonizing shocks. Our premium, systemized whitening procedures are fully prescribed and supervised. They combine immediate, safe in-chair laser triggers with comfortable deep-sealing night trays that brighten enamel and prevent relapse.',
    duration: '1-hour in-chair session OR 14 nights at-home luxury use',
    recovery: 'Virtually zero recovery time, with specialized anti-sensitivity formulas applied',
    anxietyRelief: [
      'Glycerin-enriched desensitizers shielding nerve endings',
      'Gum barrier resins preventing soft tissue contact and burning',
      'Watch your favourite Netflix show on noise-isolating headphone systems'
    ],
    benefits: [
      'Achieve up to 8 real VITA shades of pure, healthy radiance in one hour',
      'Even coverage ensuring stubborn coffee and smoke stains fade cleanly',
      'Long-lasting outcome that remains vivid for years with minor touch-ups'
    ],
    pricing: 'In-office & Take-Home Dual Package: £495',
    steps: [
      {
        title: 'Gum Protection Mapping',
        description: 'Our hygienic specialist paints a custom protective light-cured barrier over delicate gums to guarantee absolute zero burn.'
      },
      {
        title: 'Active Oxygen Treatment',
        description: 'We apply professional-grade active formula and activate it gently with a cold-wavelength medical light wave system.'
      },
      {
        title: 'Luxury Home Maintenance Kits',
        description: 'We provide beautiful bespoke trays and luxury touch-up syringes to easily maintain your dazzling white smile long-term.'
      }
    ],
    seoTitle: 'Teeth Whitening & Aesthetics London'
  },
  invisalign: {
    id: 'invisalign',
    title: 'Invisalign Treatment',
    subtitle: 'Invisalign Braces London',
    shortDescription: 'Clear, elegant, and completely removable alignments tailored to your active life. Straighten teeth discreetly without metal brackets.',
    longDescription: 'Forget the self-consciousness and metallic pain of traditional railway alignment braces. Invisalign provides lightweight, crystal-clear, medical-grade thermoplastic aligners. They sit comfortably over your arches, applying continuous, micro-planned forces. They are easily removable for fine dining, business presentations, or key events. No metal wire cuts, and virtual transparency represents the apex of modern orthodontic aesthetics.',
    duration: '4 to 12 months depending on tooth position',
    recovery: 'Very mild pressure pressure sensations during the first 24 hours of each new aligner tray',
    anxietyRelief: [
      'Iterative computer-guided force structures minimizing tooth soreness',
      'Fewer clinic visits than old braces, respecting your privacy and time',
      'Removable feature ensures perfect, hassle-free dental hygiene and flossing'
    ],
    benefits: [
      'Truly invisible design ensuring your friends and clients won’t even sense them',
      'Enables effortless enjoyment of any foods by popping the tray out during meals',
      'Dramatically improves bite alignment and reduces future wear and tear'
    ],
    pricing: 'Full Invisalign plans start from £1,800 or £49 / month',
    steps: [
      {
        title: 'ClinCheck 3D Simulation',
        description: 'We render an step-by-step video animation mapping how every single tooth will move, week by week, to reach the final look.'
      },
      {
        title: 'Custom Aligner Series',
        description: 'You receive a elegant black protective case carrying a bespoke series of premium, computer-milled invisible trays.'
      },
      {
        title: 'Brief Checkups & Progress',
        description: 'Stop by our clinic for brief, direct 15-minute diagnostic checks every 6-8 weeks to keep alignment moving flawlessly.'
      }
    ],
    seoTitle: 'Invisalign Treatment London'
  },
  emergency: {
    id: 'emergency',
    title: 'Emergency Dentistry',
    subtitle: 'Emergency Dentist London',
    shortDescription: 'Immediate, pain-conscious relief for dental crises. Same-day emergency consultations to banish severe dental pain in the heart of London.',
    longDescription: 'A cracked crown, sharp toothache, or facial inflammation is frightening. It shouldn’t wait. At SmileCraft, we reserve priority sameday slots specifically for patients facing tooth agony. Our calm doctors act swiftly, administering gentle anesthetic and pain inhibitors to immediately de-escalate anxiety and eliminate sharp pain on spot. We focus heavily on keeping you safe, free of judgment, and entirely comfortable.',
    duration: 'Immediate pain relief in under 45 minutes',
    recovery: 'Prompt, with detail-rich instructions on home-care antibiotics and resting steps',
    anxietyRelief: [
      'Sameday emergency priority — we aim to see you within 2 hours of calling',
      'Compassionate clinical team who never judges you for avoiding prior checkups',
      'The gentlest, most modern numbing gels ensuring you feel absolutely nothing'
    ],
    benefits: [
      'Direct, immediate relief from throbbing tissue inflammation or direct cavity pain',
      'Prevents localized dental infections from spreading dangerous toxic updates to the head',
      'Saves cracked, broken, or knocked-out natural teeth that require urgent structural splinting'
    ],
    pricing: 'Emergency Assessment & Same-Day Pain Elimination: £95',
    steps: [
      {
        title: 'Urgent Micro-Diagnostic',
        description: 'We perform a focused local x-ray to discover the immediate cause of agony, explaining solutions clearly with zero delays.'
      },
      {
        title: 'Immediate Pain Shutdown',
        description: 'Our expert anesthesiologist applies a highly potent, advanced numbing solution, rendering the painful region completely numb.'
      },
      {
        title: 'Stabilizing Rescue Care',
        description: 'Whether it’s a quick nerve removal, a comfortable temp filling, or stabilizing a break, we fix the issue so you can sleep pain-free.'
      }
    ],
    seoTitle: 'Same Day Emergency Dentist London'
  },
  general: {
    id: 'general',
    title: 'General Dentistry',
    subtitle: 'Luxury Private Dentist London',
    shortDescription: 'Exemplary preventative cleaning, pain-free biocompatible mercury-free fillings, and delicate hygienist therapy in a relaxing setting.',
    longDescription: 'Preventative care shouldn’t feel like an industrial chore. Our regular examinations utilize non-radiation diagnostics and camera microscopes to notice minor enamel changes before treatments are ever needed. Combined with ultra-gentle ultrasonic scaling that removes hard build-up with water-misting instead of painful scraping, we promise checking your teeth becomes a relaxing ritual, not a stressful necessity.',
    duration: '30 to 45 minutes and you’re beautifully clean',
    recovery: 'Immediate vibrant, fresh feeling',
    anxietyRelief: [
      'Mercury-free, high-end biocompatible composite fillings matching your enamel',
      'Warm purified rinse water avoiding cold sensitivity shocks',
      'Soft neck pillows and warm clinical towels to help you relax'
    ],
    benefits: [
      'Reduces cavity formation and resolves chronic gum bleeding',
      'Banish mouth odor and eliminate dark, stubborn surface plaque lines',
      'Comprehensive safety check screening for jaw conditions and neck nodes'
    ],
    pricing: 'Full Checkup with X-Rays & Polish: £115',
    steps: [
      {
        title: 'Non-Invasive Diagnostic Screen',
        description: 'We examine your enamel with high-lux light pens, avoiding sharp metal poking tools of traditional clinics.'
      },
      {
        title: 'Ultrasonic Aqua Scaling',
        description: 'An advanced water-spray cleaning device gently flushes away plaque and stains with zero scraping discomfort.'
      },
      {
        title: 'Bespoke Care Advisory',
        description: 'We design a minor luxury hygiene routine with you, so keeping your teeth pristine at home is simple and enjoyable.'
      }
    ],
    seoTitle: 'Dentist London private practice'
  }
};

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Eleanor Sterling',
    location: 'Kensington, London',
    rating: 5,
    treatment: 'Cosmetic Veneers',
    text: 'I avoided smiling for over ten years, carrying a heavy feeling of self-consciousness in every business meeting. After meeting Dr Sarah Mitchell, all my intense dental fears disappeared. She was remarkably understanding, never once making me feel judged. The treatment was entirely painless, and my new porcelain veneers look like natural art. Truly life-transforming modern dental care.',
    beforeAnxiety: 'Horrific childhood fear, avoided the clinic for 12 years completely.',
    afterExperience: 'Deeply relaxed, listened to music, felt zero discomfort, absolutely thrilled.',
    date: '3 weeks ago'
  },
  {
    id: '2',
    name: 'James Harrington',
    location: 'Richmond, London',
    rating: 5,
    treatment: 'Dental Implants',
    text: 'A broken tooth from sports left me with a gap and deep worry about a dental surgery. Dr Marcus Vance explained the surgical guided custom key process thoroughly. I chose twilight IV sedation and literally recall absolutely nothing of the implant placement! Woke up with zero pain, and the restoration crown perfectly aligns with my other teeth. The environment feels like a premium private lounge rather than a dentist office.',
    beforeAnxiety: 'Terrified of surgical drills, bone damage, and intense pain.',
    afterExperience: 'IV sedation was a miracle. Slept through it. Fully functional the next day.',
    date: '1 month ago'
  },
  {
    id: '3',
    name: 'Victoria Hawthorne',
    location: 'Mayfair, London',
    rating: 5,
    treatment: 'Invisalign & Whitening',
    text: 'The Invisalign process was super streamlined and clear-cut, allowing me to speak confidently during my public presentations. The dental team at SmileCraft is exceptionally polite, treating you to herbal teas, organic lip balms, and a completely calming spa-like scent. My teeth are now perfectly straight and brilliantly bright. Best cosmetic dentist in London!',
    beforeAnxiety: 'Afraid of metal wire pain, visible braces, and standard medical coldness.',
    afterExperience: 'Loved the soft neck support pillow, removable invisible aligners, and superb staff companion.',
    date: '2 months ago'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'How does SmileCraft reduce intense dental anxiety?',
    answer: 'We have redesigned the dentist experience from top to bottom. Our clinic relies on a serene, modern lounge style rather than cold medical rooms. We provide IV Twilight Sedation, gentle water-mist scaling, non-poking diagnostic tools, memory foam chairs, active soundproofing, and noise-cancelling entertainment systems. Most importantly, our dentists Dr Sarah Mitchell, Dr Marcus Vance, and team practice absolute non-judgment and proceed entirely at your chosen speed.',
    category: 'pain'
  },
  {
    question: 'Is dental treatment at your London clinic painful?',
    answer: 'Absolutely not. Through highly advanced, gentle anesthetic injection gels and computerized local numbness, we ensure you feel nothing. Many patients state they did not even notice where the anesthetic was applied. For complex aesthetic procedures or surgical implants, our custom IV sedation enables you to rest in a peaceful sleep-like state, remembering none of the process.',
    category: 'pain'
  },
  {
    question: 'What are your payment plan alternatives? Are treatments affordable?',
    answer: 'We practice absolute billing transparency with zero hidden costs. To ensure luxury private dentistry fits comfortably into private financial structures, we provide interest-free pay-monthly options (0% Interest APR finance) across 6, 12, or 24 months. Our treatment planners handle the application on site, and it is approved instantly in a few minutes.',
    category: 'cost'
  },
  {
    question: 'Do you offer priority emergency dentist treatments in London?',
    answer: 'Yes, same-day immediate spaces are kept clear on our calendars daily. If you are experiencing severe mouth pain, bleeding, or structural damage like a cracked or knocked-out tooth, phone us immediately or book our Urgent emergency package online to be prioritized and seen within excellent times (often under 2 hours).',
    category: 'treatments'
  },
  {
    question: 'How long do dental implants and porcelain veneers typically last?',
    answer: 'When placed with microscopic precision and maintained through brief private hygiene checkups twice a year, dental implants will last a lifetime as they fuse directly into your jaw bone tissue. Handcrafted porcelain veneers typically look exquisite for 15 to 20 years, resisting coffee, tea, and smoke stains flawlessly.',
    category: 'treatments'
  }
];

export const SMILE_GALLERY_IMAGES = [
  {
    id: 'sg1',
    title: 'Complete Smile Transformation',
    subtitle: '10 Premium Porcelain Veneers by Dr Sarah Mitchell',
    patient: 'Eleanor S.',
    issue: 'Discoloured, heavily chipped, and slightly misaligned teeth.',
    before: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=400&auto=format&fit=crop', // closed mouth/discreet
    after: '/src/assets/images/smile_transformation_1_1779526799748.png', // our generated beautiful smile
    story: 'Eleanor avoided professional dental photography and social events. She wanted a luminous, highly natural, elegant smile. After 2 visits, we achieved a completely radiant result that completely matches her facial proportions.',
    anxietyFocus: 'Gentle, zero-grinding ultra-thin ceramic prep.'
  },
  {
    id: 'sg2',
    title: 'Flawless Aesthetic Alignment',
    subtitle: 'Invisalign Clear Braces and Laser Teeth Whitening',
    patient: 'Marcus K.',
    issue: 'Crowded lower alignment and deep tea staining.',
    before: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=400&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    story: 'Marcus wanted a fully aligned bite without metal braces. Invisalign completed this in 8 months, followed by a 1-hour laser whitening session to restore clean brightness.',
    anxietyFocus: 'No metal wire cuts, minimal dental visits.'
  },
  {
    id: 'sg3',
    title: 'Single Tooth Reconstruction',
    subtitle: 'Digital Guided Dental Implant by Dr Marcus Vance',
    patient: 'Claire D.',
    issue: 'Front tooth loss from accidental impact.',
    before: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    story: 'Claire lost her front aesthetic tooth and was devastated. We performed a same-day computer-guided keyhole implant under twilight IV sedation, placing a perfectly matching porcelain temporary crown on the very same day.',
    anxietyFocus: 'Twilight IV Sleep sedation and same-day dental crown fitment.'
  }
];
