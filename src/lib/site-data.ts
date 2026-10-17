import {
  Activity,
  Baby,
  CircleDot,
  Droplets,
  Eye,
  Gauge,
  Glasses,
  Layers,
  ScanFace,
  Sparkles,
  Target,
  type LucideIcon,
} from "lucide-react";

/* ── Navigation / routing types ─────────────────────────────── */
export type ViewName =
  | "home"
  | "treatments"
  | "treatment"
  | "doctor"
  | "appointment"
  | "about"
  | "doctors"
  | "facilities"
  | "resources"
  | "contact";

export interface RouteState {
  view: ViewName;
  treatmentId?: string;
  doctorId?: string;
  anchor?: string;
  prefill?: { department?: string; doctorId?: string };
}

/* ── Clinic constants (Shiv Netralay - Gorakhpur) ─────────────── */
export const CLINIC = {
  name: "Shiv Netralay",
  tagline: "Ethical, Specialist-Led Eye Care",
  locationShort: "Gorakhpur, Uttar Pradesh",
  positioningStatement:
    "Ethical, specialist-led ophthalmic care focused on clinical precision, clear patient communication, and accessible vision preservation for families across Gorakhpur.",
  brandKeywords: [
    "Specialist Consultations",
    "Accurate Diagnostics",
    "Patient Comfort",
    "Ethical Care",
    "Clear Vision",
  ],
  phoneDisplay: "+91 93356 51670",
  phoneDeskNote: "Primary Clinic Line & WhatsApp Appointment Desk",
  phoneHref: "tel:+919335651670",
  email: "drshshnk@rediffmail.com",
  addressLines: [
    "Purvi Kinara Gorakhnath Overbridge, N Eastern Railway Line",
    "Bade Kajipur, Gorakhpur, Uttar Pradesh 273001, India",
  ],
  landmark:
    "Purvi Kinara Gorakhnath Overbridge, N Eastern Railway Line, Bade Kajipur, Gorakhpur, Uttar Pradesh 273001, India",
  hours: [
    { days: "Monday — Saturday", time: "6:30 PM – 8:30 PM" },
    { days: "Sunday", time: "11:00 AM – 3:00 PM" },
  ],
  timingsNote: "Consultation Timings: Monday to Saturday: 6:30 PM – 8:30 PM | Sunday: 11:00 AM – 3:00 PM [Timings to be confirmed with clinic desk]",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Shiv+Netralay+Purvi+Kinara+Gorakhnath+Overbridge+N+Eastern+Railway+Line+Bade+Kajipur+Gorakhpur+273001",
};

/* ── Treatments ─────────────────────────────────────────────── */
export interface TreatmentOption {
  title: string;
  description: string;
}

export interface Treatment {
  id: string;
  name: string;
  shortName: string;
  icon: LucideIcon;
  tagline: string;
  cardDescription: string;
  whatItProvides: string;
  clinicalFocus: string[];
  heroImage?: string;
  image?: string; // stock photo shown on treatment cards
  gradient: string; // tailwind gradient classes for icon covers
  overview: string[];
  whatToExpect: { title: string; items: string[] }; // what happens at the visit
  symptoms: { title: string; items: string[] };
  candidates: { title: string; items: string[] };
  options: TreatmentOption[];
  approach: { title: string; description: string }[];
  aftercare: { title: string; description: string }[];
  faqs: { q: string; a: string }[];
}

export const TREATMENTS: Treatment[] = [
  {
    id: "general",
    name: "Comprehensive Eye Examinations",
    shortName: "Comprehensive Eye Exam",
    icon: Eye,
    tagline: "Thorough preventive vision testing and internal/external ocular health evaluations for all age groups.",
    cardDescription:
      "Visual acuity testing, slit-lamp anterior segment evaluation, and baseline eye pressure checks for the whole family.",
    whatItProvides:
      "Thorough preventive vision testing and internal/external ocular health evaluations for all age groups.",
    clinicalFocus: [
      "Visual acuity testing & refractive evaluation",
      "Slit-lamp anterior segment examination",
      "Baseline eye pressure check (tonometry)",
    ],
    image: "/images/treatments/general.jpg",
    heroImage: "/images/hero-main.jpg",
    gradient: "from-jade-500 to-brand-800",
    overview: [
      "A comprehensive eye examination at Shiv Netralay is far more than a simple spectacle check. It is an unhurried, specialist-conducted clinical evaluation that examines both internal and external ocular structures.",
      "Many serious eye diseases—including glaucoma, diabetic retinopathy, and retinal microvascular changes—develop quietly without early pain or warning symptoms. Routine screening identifies these conditions in their earliest, most manageable stages.",
      "Every evaluation is conducted directly by an experienced ophthalmologist, ensuring thorough clinical attention, honest guidance, and unhurried consultations so you can make informed decisions about your vision.",
    ],
    whatToExpect: {
      title: "What to Expect at Your Examination",
      items: [
        "Digital visual acuity measurement under calibrated illumination for distance and reading sharpness.",
        "Computerized auto-refraction paired with subjective refinement to confirm your comfortable optical prescription.",
        "High-magnification slit-lamp biomicroscopy to inspect the cornea, anterior chamber, iris, and crystalline lens.",
        "Baseline intraocular pressure measurement (tonometry) to screen for silent glaucoma risks.",
        "Dilated fundus examination when clinically indicated for diabetes, hypertension, or high myopia.",
      ],
    },
    symptoms: {
      title: "When to Schedule an Examination",
      items: [
        "Blurred, hazy, or fluctuating vision at near or distance",
        "Frequent headaches, eye fatigue, or strain after screen work",
        "Difficulty reading in dim light or night-time glare while driving",
        "Annual routine health screening for individuals aged 40 and above",
        "Annual mandatory check for individuals diagnosed with diabetes or hypertension",
      ],
    },
    candidates: {
      title: "Who Needs a Comprehensive Checkup?",
      items: [
        "School-age children experiencing blackboard blur or eye rubbing",
        "Working professionals dealing with digital eye strain from screen hours",
        "Adults aged 40+ needing proactive glaucoma screening and reading power updates",
        "Patients with a family history of eye disorders or chronic systemic illness",
      ],
    },
    options: [
      {
        title: "Complete Preventive Eye Evaluation",
        description:
          "Full refractive, anterior segment, and intraocular pressure screening for routine vision maintenance.",
      },
      {
        title: "Occupational & Screen Strain Workup",
        description:
          "Targeted assessment of focusing stamina, convergence, and ocular surface stability for heavy computer users.",
      },
      {
        title: "Senior Preventive Vision Review",
        description:
          "Specialized screening for lens changes, glaucoma progression, and retinal microvascular wellness.",
      },
    ],
    approach: [
      {
        title: "Unhurried Clinical Attention",
        description:
          "Consultations are structured with dedicated time to listen to your visual symptoms and explain clinical findings in everyday language.",
      },
      {
        title: "Objective Diagnostics First",
        description:
          "Computerized metrics are always clinically verified with slit-lamp examination before finalizing prescriptions or advice.",
      },
      {
        title: "Transparent & Ethical Care",
        description:
          "We recommend only necessary interventions with zero pressure or exaggerated claims, placing patient well-being first.",
      },
    ],
    aftercare: [
      {
        title: "Detailed Clinical Summary",
        description:
          "Receive a clear explanation of your refractive state, ocular pressure, and surface health along with your prescription.",
      },
      {
        title: "Dilation Advisory",
        description:
          "If pupil dilation was administered during your retinal check, wear sunglasses and avoid driving for 3–4 hours until focus normalizes.",
      },
      {
        title: "Scheduled Review Timeline",
        description:
          "A recommended recall schedule tailored to your age, ocular health status, and occupational requirements.",
      },
    ],
    faqs: [
      {
        q: "How long does a comprehensive eye examination take?",
        a: "A routine evaluation takes about 20 to 30 minutes. If pupil dilation is required for a thorough retina examination, please allow an additional 30 to 45 minutes.",
      },
      {
        q: "How often should adults get an eye checkup?",
        a: "Adults with normal vision should have an eye check every 1 to 2 years. Individuals over 40, contact lens wearers, and those with diabetes, hypertension, or family history of glaucoma should be examined annually.",
      },
      {
        q: "What should I bring to my consultation?",
        a: "Please bring your current eyeglasses, any previous eye prescriptions or clinical reports, and your current medications list (especially for diabetes or blood pressure).",
      },
    ],
  },
  {
    id: "cataract",
    name: "Cataract Evaluation & Care",
    shortName: "Cataract Care",
    icon: CircleDot,
    tagline: "Careful diagnostic assessment to evaluate lens opacity and provide clear, stage-appropriate surgical guidance.",
    cardDescription:
      "Slit-lamp grading of cataract opacity, visual impairment staging, lifestyle counseling, and surgical guidance.",
    whatItProvides:
      "Careful diagnostic assessment to evaluate lens opacity and provide clear, stage-appropriate surgical guidance.",
    clinicalFocus: [
      "Slit-lamp grading of cataract opacity",
      "Visual impairment staging & lifestyle counseling",
      "Pre-operative counseling & lens selection guidance [Surgical suite details to be confirmed]",
    ],
    image: "/images/treatments/cataract.jpg",
    heroImage: "/images/surgery-microscope.jpg",
    gradient: "from-jade-500 to-brand-800",
    overview: [
      "A cataract is the gradual clouding of the eye's natural crystalline lens, leading to blurred, dim, or glare-sensitive vision. It is a natural part of aging, but one that can be managed effectively and safely.",
      "Cataract develops slowly and painlessly. At Shiv Netralay, we emphasize careful diagnostic evaluation: measuring the grade of lens opacity, assessing the health of the retina, and understanding how your vision impacts your daily life.",
      "When surgical intervention is appropriate, our specialist provides honest, stage-appropriate counseling regarding modern micro-incision procedures and intraocular lens (IOL) choices without commercial pressure.",
    ],
    whatToExpect: {
      title: "What to Expect at Your Cataract Evaluation",
      items: [
        "A 30–45 minute evaluation: visual acuity testing, slit-lamp grading of lens opacity, and retinal health check.",
        "Pupil dilation is routine to evaluate the entire lens and fundus—near vision remains blurred for a few hours.",
        "Detailed lifestyle counseling: assessing your reading habits, night-driving needs, and screen demands.",
        "Transparent pre-operative counseling explaining surgical techniques and lens selection (monofocal, toric, or multifocal options).",
      ],
    },
    symptoms: {
      title: "Common Signs of Cataract",
      items: [
        "Cloudy, blurred, or dim vision resembling a foggy window",
        "Increased sensitivity to light and glare, especially night driving headlights",
        "Frequent changes in spectacle prescription with diminishing clarity",
        "Fading or yellowing of bright colors",
        "Halos around lights and needing brighter illumination for reading",
      ],
    },
    candidates: {
      title: "When Should Surgery Be Considered?",
      items: [
        "Vision interferes with daily activities like reading, cooking, or driving",
        "Night driving has become difficult or hazardous due to glare",
        "Glasses no longer correct vision to a comfortable, functional level",
        "Your ophthalmologist advises intervention for overall eye health reasons",
      ],
    },
    options: [
      {
        title: "Clinical Lens Grading & Staging",
        description:
          "Careful documentation of cataract density and progression to determine whether surgery is immediately needed or can be monitored safely.",
      },
      {
        title: "Pre-Operative Counseling & IOL Guidance",
        description:
          "Unhurried discussion of intraocular lens alternatives—monofocal, toric (for astigmatism), and extended depth of focus—matched to your visual priorities.",
      },
      {
        title: "Post-Operative Recovery Care",
        description:
          "Structured follow-up protocols, drop scheduling, and routine pressure checks to ensure safe and clear recovery.",
      },
    ],
    approach: [
      {
        title: "No Hurried Interventions",
        description:
          "We never rush patients into surgery. We recommend intervention only when lens opacity genuinely impacts your lifestyle and visual independence.",
      },
      {
        title: "Comprehensive Eye Health Assessment",
        description:
          "We examine the cornea, optic nerve, and macula before discussing surgery so that expected post-operative visual outcomes are realistic and clear.",
      },
      {
        title: "Transparent Advice",
        description:
          "Clear explanation of surgical suite pathways and lens options with itemized clarity before any decision is made.",
      },
    ],
    aftercare: [
      {
        title: "Post-Operative Drop Protocol",
        description:
          "Written schedules for anti-inflammatory and antibiotic eye drops with clear dosage and hygiene guidelines.",
      },
      {
        title: "Activity Guidance",
        description:
          "Simple protective instructions for washing, head movements, and resuming light routine activities during early healing.",
      },
      {
        title: "Scheduled Review Visits",
        description:
          "Post-surgical follow-up visits to monitor healing, check ocular pressure, and refine final spectacle prescriptions if needed.",
      },
    ],
    faqs: [
      {
        q: "When is cataract surgery considered?",
        a: "Cataract surgery is recommended when lens cloudiness begins to interfere with your everyday activities, such as reading, driving, or recognizing faces. Your specialist will guide you based on your lifestyle needs.",
      },
      {
        q: "Does a cataract need to 'ripen' before surgery?",
        a: "No. In modern ophthalmic care, cataracts do not need to mature. The best time for treatment is simply when the visual blur begins affecting your daily comfort and functional independence.",
      },
      {
        q: "How long is the recovery after cataract surgery?",
        a: "Most patients notice marked improvement within 24 to 48 hours. Complete healing takes about 3 to 4 weeks, during which prescribed eye drops protect the eye.",
      },
    ],
  },
  {
    id: "glaucoma",
    name: "Glaucoma Screening & Management",
    shortName: "Glaucoma Care",
    icon: Gauge,
    tagline: "Targeted diagnostic protocols to detect elevated intraocular pressure and protect optic nerve fibers from gradual loss.",
    cardDescription:
      "Applanation / non-contact tonometry, optic disc evaluation with cup-to-disc documentation, and long-term medical therapy.",
    whatItProvides:
      "Targeted diagnostic protocols to detect elevated intraocular pressure and protect optic nerve fibers from gradual loss.",
    clinicalFocus: [
      "Applanation / non-contact tonometry for eye pressure",
      "Optic disc evaluation & cup-to-disc ratio documentation",
      "Long-term pressure-lowering medical management & routine tracking",
    ],
    image: "/images/treatments/glaucoma.jpg",
    heroImage: "/images/equip-visualfield.png",
    gradient: "from-jade-500 to-brand-800",
    overview: [
      "Glaucoma (commonly known as 'Kala Motia') is a progressive condition characterized by damage to the optic nerve fibers, most frequently linked to elevated fluid pressure inside the eye.",
      "Because glaucoma develops painlessly without early symptoms, peripheral vision can recede gradually before a patient notices any change. Vision lost to glaucoma cannot be recovered, making early detection and proactive management crucial.",
      "Led by Dr. Ritesh Shukla, Consultant Ophthalmologist & Glaucoma Specialist, Shiv Netralay provides targeted diagnostic protocols, accurate pressure monitoring, and tailored medical therapy to stabilize eye pressure and preserve vision.",
    ],
    whatToExpect: {
      title: "What to Expect at Your Glaucoma Assessment",
      items: [
        "Goldmann applanation or calibrated non-contact tonometry for accurate intraocular pressure (IOP) reading.",
        "Slit-lamp biomicroscopy of the anterior chamber angle to determine open-angle or angle-closure patterns.",
        "Dilated stereoscopic optic disc evaluation to document cup-to-disc ratio and neuroretinal rim integrity.",
        "Personalized pressure-lowering medical regimen and a structured long-term tracking calendar.",
      ],
    },
    symptoms: {
      title: "Warning Signs & High-Risk Factors",
      items: [
        "Family history of glaucoma, eye pressure elevation, or unexplained vision loss",
        "Age above 40 years, high myopia (short-sightedness), or prolonged steroid use",
        "Gradual, unnoticed loss of peripheral (side) vision or tunnel vision",
        "Occasional colored halos around lights or eye heaviness in dim rooms",
        "Severe acute eye pain, redness, brow ache, and nausea (angle-closure emergency)",
      ],
    },
    candidates: {
      title: "Who Needs Regular Glaucoma Screening?",
      items: [
        "Everyone aged 40 and above as part of annual preventive ocular health checks",
        "Individuals with a family history of glaucoma in parents or siblings",
        "Patients with diabetes, systemic hypertension, or cardiovascular disease",
        "Anyone who has experienced eye trauma or long-term steroid medication usage",
      ],
    },
    options: [
      {
        title: "Targeted Tonometry & Pressure Profiling",
        description:
          "Baseline and diurnal intraocular pressure measurement to detect abnormal fluctuations and establish target pressures.",
      },
      {
        title: "Optic Nerve Head & Cup-to-Disc Documentation",
        description:
          "Serial clinical documentation of the optic disc to monitor for any microscopic progressive thinning.",
      },
      {
        title: "Evidence-Based Medical Therapy",
        description:
          "Careful selection of pressure-lowering topical drops tailored to patient tolerance, cardiac history, and ocular surface health.",
      },
    ],
    approach: [
      {
        title: "Proactive Sight Preservation",
        description:
          "Our goal is to detect pressure elevation and optic nerve changes years before central vision is compromised.",
      },
      {
        title: "Clear Communication",
        description:
          "We take time to explain what eye pressure means, how drops work, and why adherence to daily drops protects your future vision.",
      },
      {
        title: "Structured Follow-Up Systems",
        description:
          "Routine review intervals ensure that therapy remains effective and side effects are minimized.",
      },
    ],
    aftercare: [
      {
        title: "Consistent Drop Routine",
        description:
          "Daily, unmissed administration of prescribed pressure-lowering drops is the cornerstone of preserving sight.",
      },
      {
        title: "Routine Pressure Reviews",
        description:
          "Follow-up checks every 3 to 6 months to confirm pressure stability and adjust therapy if needed.",
      },
      {
        title: "Family Screening Recommendation",
        description:
          "First-degree relatives of diagnosed glaucoma patients are advised to undergo baseline pressure and disc screening.",
      },
    ],
    faqs: [
      {
        q: "What causes glaucoma, and can it be cured?",
        a: "Glaucoma is primarily caused by impaired drainage of eye fluid leading to elevated pressure that damages optic nerve fibers. While nerve damage cannot be reversed, keeping eye pressure within target ranges halts progression.",
      },
      {
        q: "Why do I need drops if my eyes feel completely normal?",
        a: "Glaucoma is asymptomatic in its early and moderate stages. The pressure-lowering drops protect your nerve fibers from silent, gradual loss that would otherwise become permanent.",
      },
      {
        q: "How often should eye pressure be checked?",
        a: "Individuals without glaucoma above age 40 should have an annual check. Diagnosed patients typically require pressure checks every 3 to 6 months.",
      },
    ],
  },
  {
    id: "diabetic-retinopathy",
    name: "Diabetic Retinal Evaluation",
    shortName: "Diabetic Retina",
    icon: Activity,
    tagline: "Crucial preventive retina evaluations for diabetic individuals to safeguard against silent microvascular damage.",
    cardDescription:
      "Dilated fundus examination of the retina and macula, staging of retinopathy, and coordinated lifestyle guidance.",
    whatItProvides:
      "Crucial preventive retina evaluations for diabetic individuals to safeguard against silent microvascular damage.",
    clinicalFocus: [
      "Dilated fundus examination of the retina and macula",
      "Identification of diabetic retinopathy stages",
      "Coordinated lifestyle & physician-referral guidance",
    ],
    image: "/images/treatments/retina.jpg",
    heroImage: "/images/equip-fundus.png",
    gradient: "from-jade-500 to-brand-800",
    overview: [
      "Diabetes impacts the delicate microvascular circulation of the retina, leading to capillary leakage, swelling at the macula, and abnormal fragile vessel proliferation known as diabetic retinopathy.",
      "In early stages, diabetic retinopathy is completely symptomless. By the time a patient notices blurred central vision, distorted lines, or floating spots, retinal damage may already be advanced.",
      "At Shiv Netralay, we conduct meticulous dilated fundus examinations to detect early microaneurysms and hemorrhages, staging the condition accurately and collaborating with your treating physician to protect your eyesight.",
    ],
    whatToExpect: {
      title: "What to Expect at Your Diabetic Retina Check",
      items: [
        "Pupil dilation with gentle eye drops to allow wide-angle visualization of the peripheral retina and macula.",
        "Direct and indirect ophthalmoscopy under high-resolution magnification by our ophthalmologist.",
        "Detailed staging: non-proliferative (mild, moderate, severe) vs. proliferative diabetic retinopathy.",
        "Clear guidance on glycemic target correlation and referral pathways for advanced imaging or laser therapy if required.",
      ],
    },
    symptoms: {
      title: "When to Seek an Immediate Retina Evaluation",
      items: [
        "Annual routine check for every individual diagnosed with Type 1 or Type 2 diabetes",
        "Sudden onset of dark spots, spiderwebs, or floaters across your field of vision",
        "Blurred, distorted, or fluctuating vision that changes from morning to evening",
        "Dark or empty patches in the center of your vision",
        "Sudden, painless loss of sight in one eye (vitreous hemorrhage emergency)",
      ],
    },
    candidates: {
      title: "Who Needs Diabetic Eye Care?",
      items: [
        "Anyone diagnosed with Type 2 diabetes (requires baseline check at diagnosis)",
        "Individuals with Type 1 diabetes of more than 5 years' duration",
        "Diabetic individuals with co-existing hypertension, kidney disease, or high cholesterol",
        "Pregnant women with pre-existing diabetes",
      ],
    },
    options: [
      {
        title: "Dilated Fundus Biomicroscopy",
        description:
          "Thorough evaluation of the central macula, retinal vessels, and peripheral retina to identify silent vascular changes.",
      },
      {
        title: "Diabetic Retinopathy Clinical Staging",
        description:
          "Accurate categorization of microvascular changes to determine safe review intervals or intervention requirements.",
      },
      {
        title: "Physician & Endocrinologist Coordination",
        description:
          "Clear clinical reports provided for your treating physician to support integrated blood sugar and blood pressure management.",
      },
    ],
    approach: [
      {
        title: "Early Detection Focus",
        description:
          "We prioritize finding microaneurysms and mild swelling before they impact central reading vision.",
      },
      {
        title: "Empathetic Counselling",
        description:
          "We explain the link between HbA1c control and retinal capillary health in straightforward, encouraging terms.",
      },
      {
        title: "Timely Referral Networks",
        description:
          "Clear guidance when specialized laser photocoagulation or anti-VEGF therapy is indicated.",
      },
    ],
    aftercare: [
      {
        title: "Post-Dilation Precautions",
        description:
          "Near vision remains blurry for 4–6 hours after dilation. Bring sunglasses and avoid driving during this period.",
      },
      {
        title: "Annual Recall Schedule",
        description:
          "Consistent yearly retinal evaluations are essential even when vision feels completely normal.",
      },
      {
        title: "Urgent Symptom Reporting",
        description:
          "Report immediately if you observe a sudden shower of floaters, flashes of light, or central dark patches.",
      },
    ],
    faqs: [
      {
        q: "Can diabetes damage my eyesight without causing symptoms?",
        a: "Yes. Diabetic retinopathy often develops painlessly in its early stages without noticeable vision loss. Annual dilated retina evaluations are vital for timely detection before irreversible damage occurs.",
      },
      {
        q: "How often should diabetic patients get an eye examination?",
        a: "Every diabetic patient should have a dilated retinal examination at least once a year. If early retinopathy is detected, evaluations may be scheduled every 3 to 6 months.",
      },
      {
        q: "Does controlling blood sugar help existing retinopathy?",
        a: "Yes. Strict control of blood glucose, blood pressure, and cholesterol significantly slows or halts the progression of diabetic retinal microvascular damage.",
      },
    ],
  },
  {
    id: "refraction",
    name: "Computerized Refraction & Vision Correction",
    shortName: "Vision Correction",
    icon: Glasses,
    tagline: "Accurate optical measurements for prescription eyeglasses and corrective lenses tailored to daily visual needs.",
    cardDescription:
      "Autorefractor measurement with subjective refinement for myopia, hyperopia, astigmatism, presbyopia, and computer glasses.",
    whatItProvides:
      "Accurate optical measurements for prescription eyeglasses and corrective lenses tailored to daily visual needs.",
    clinicalFocus: [
      "Autorefractor measurement paired with subjective refinement",
      "Prescriptions for myopia, hyperopia, astigmatism & presbyopia",
      "Guidance for computer glasses & occupational lenses",
    ],
    image: "/images/treatments/lasik.jpg",
    heroImage: "/images/hero-face.jpg",
    gradient: "from-jade-500 to-brand-800",
    overview: [
      "Crisp, comfortable vision begins with accurate optical refraction. Whether you struggle with distance street signs, reading mobile screens, or end-of-day eye fatigue, computerized refraction provides the objective foundation for your vision.",
      "At Shiv Netralay, automated refraction is always paired with subjective trial-frame testing. We test your eyes under standardized lighting to ensure your prescription feels natural, sharp, and easy to wear all day.",
      "We provide individualized prescriptions for myopia, hyperopia, astigmatism, and presbyopia (reading power), along with practical advice on blue-light filters, anti-glare coatings, and progressive lens choices.",
    ],
    whatToExpect: {
      title: "What to Expect at Your Refraction Assessment",
      items: [
        "Fast, automated corneal curvature and refractive power measurement using a computerized auto-refractor.",
        "Distance and near visual acuity testing on a calibrated digital optotype display.",
        "Careful subjective refinement with trial lenses to achieve balanced, comfortable binocular focus.",
        "Customized spectacle prescription tailored to your work distance, screen setup, and daily tasks.",
      ],
    },
    symptoms: {
      title: "Signs You Need a Refraction Check",
      items: [
        "Blurry or double text while reading books, labels, or digital screens",
        "Eye strain, squinting, or brow tension when looking at distant objects",
        "Frequent evening headaches after working on computers or driving",
        "Difficulty focusing when shifting gaze from distance to near objects",
        "It has been over one year since your last spectacle power verification",
      ],
    },
    candidates: {
      title: "Who Benefits from Computerized Refraction?",
      items: [
        "Students and school children noticing blackboard blur or squinting",
        "Software professionals and office workers experiencing screen fatigue",
        "Adults above 40 requiring progressive or reading vision corrections",
        "Anyone whose current spectacles cause dizziness, distortion, or eye strain",
      ],
    },
    options: [
      {
        title: "Standard Distance & Near Refraction",
        description:
          "Complete optical correction for myopia (short sight), hyperopia (far sight), and presbyopia (age-related reading blur).",
      },
      {
        title: "Astigmatism Refinement",
        description:
          "Precision cylinder and axis alignment ensuring clean, distortion-free edges for uneven corneal shapes.",
      },
      {
        title: "Occupational & Computer Lens Prescriptions",
        description:
          "Intermediate focal power planning for desktop screens, laptop work, and anti-reflective coatings.",
      },
    ],
    approach: [
      {
        title: "Automated Precision + Human Refinement",
        description:
          "We never rely on automated printouts alone. Every prescription is subjectively fine-tuned for comfortable binocular balance.",
      },
      {
        title: "Lifestyle-Matched Focus",
        description:
          "We tailor prescriptions to your exact working distances—desktop, reading, or highway driving.",
      },
      {
        title: "Honest Optical Guidance",
        description:
          "Impartial advice on lens materials, progressive designs, and coatings without commercial upselling.",
      },
    ],
    aftercare: [
      {
        title: "Spectacle Adaptation Period",
        description:
          "New spectacle numbers, particularly with astigmatism or progressives, may take 3 to 7 days for brain adaptation.",
      },
      {
        title: "Frame Alignment Check",
        description:
          "Ensure your optician fits the lenses so the optical center aligns accurately with your pupil line.",
      },
      {
        title: "Annual Refractive Review",
        description:
          "Schedule a yearly review to keep your spectacle numbers up to date and strain-free.",
      },
    ],
    faqs: [
      {
        q: "Why do I need subjective testing if the computer auto-refractor already took readings?",
        a: "Auto-refractors provide an objective baseline measurement, but human eyes accommodate and fluctuate. Subjective refinement with trial lenses confirms what feels clear and comfortable for you.",
      },
      {
        q: "What is astigmatism and how is it corrected?",
        a: "Astigmatism occurs when the cornea is shaped more like a rugby ball than a sphere, bending light unevenly. It is corrected easily with cylindrical lenses that focus light to a single sharp point.",
      },
      {
        q: "Why did my reading vision become blurry after turning 40?",
        a: "This natural change is called presbyopia. The eye's crystalline lens gradually becomes less flexible, making near focusing harder. A dedicated reading or progressive lens restores effortless near focus.",
      },
    ],
  },
  {
    id: "dry-eye",
    name: "Dry Eye & Digital Eye Strain Management",
    shortName: "Dry Eye Care",
    icon: Droplets,
    tagline: "Targeted assessment and symptom relief for gritty, irritated eyes caused by heavy screen use or environmental dryness.",
    cardDescription:
      "Tear film stability and ocular surface evaluation, customized lubricating regimens, and ergonomic screen guidance.",
    whatItProvides:
      "Targeted assessment and symptom relief for gritty, irritated eyes caused by heavy screen use or environmental dryness.",
    clinicalFocus: [
      "Tear film stability and ocular surface evaluation",
      "Customized lubricating eye drop regimens",
      "Practical ergonomic and blinking guidance for screen professionals",
    ],
    image: "/images/treatments/dry-eye.jpg",
    heroImage: "/images/tech-1.jpg",
    gradient: "from-jade-500 to-brand-800",
    overview: [
      "Extended screen exposure, air-conditioned rooms, pollution, and dry local climates frequently cause rapid tear evaporation and ocular surface inflammation. Dry eye is one of the most common reasons patients visit eye clinics today.",
      "Symptoms like burning, grittiness, redness, and paradoxical watery eyes are not just minor nuisances—untreated ocular surface disease can disrupt daily productivity and sleep comfort.",
      "At Shiv Netralay, we perform targeted slit-lamp evaluations of tear film stability and meibomian gland health. We provide customized treatment protocols that go beyond temporary drops to include eyelid hygiene and practical screen ergonomics.",
    ],
    whatToExpect: {
      title: "What to Expect at Your Dry Eye Evaluation",
      items: [
        "Detailed symptom history regarding screen hours, AC exposure, and current eye drops.",
        "Slit-lamp examination of the tear meniscus, cornea, and eyelid margins (meibomian glands).",
        "Evaluation of tear film break-up pattern to differentiate aqueous deficiency from evaporative dry eye.",
        "Personalized management plan featuring preservative-free lubricants, eyelid warm compresses, and screen habits.",
      ],
    },
    symptoms: {
      title: "Common Signs of Dry Eye & Digital Strain",
      items: [
        "Persistent burning, stinging, or gritty 'sand in the eye' sensation",
        "Redness, heaviness, and eye fatigue worsening by afternoon or evening",
        "Paradoxical excessive watering or tearing triggered by wind or screen light",
        "Fluctuating vision that temporarily clears up after blinking repeatedly",
        "Discomfort or intolerance while wearing contact lenses",
      ],
    },
    candidates: {
      title: "Who Needs Dry Eye Evaluation?",
      items: [
        "Software engineers, corporate professionals, and students with 6+ hours of daily screen time",
        "Post-menopausal women experiencing hormonal changes affecting tear production",
        "Individuals with autoimmune conditions like rheumatoid arthritis or thyroid disease",
        "Anyone relying on over-the-counter red-eye drops with little lasting relief",
      ],
    },
    options: [
      {
        title: "Tear Film & Ocular Surface Assessment",
        description:
          "Clinical microscopic inspection to assess tear quality, evaporation rate, and corneal epithelial surface health.",
      },
      {
        title: "Customized Lubrication Therapy",
        description:
          "Prescription of appropriate lipid-replacing or aqueous-supplementing lubricating drops with minimal preservatives.",
      },
      {
        title: "Meibomian Gland & Eyelid Therapy",
        description:
          "Warm compress regimens and lid hygiene protocols to restore natural oil secretion across the tear film.",
      },
    ],
    approach: [
      {
        title: "Root-Cause Diagnosis",
        description:
          "We differentiate between aqueous tear deficiency, evaporative dry eye, and blepharitis rather than offering generic drops.",
      },
      {
        title: "Actionable Workplace Ergonomics",
        description:
          "Practical guidance on screen distance, room lighting, conscious blinking drills, and the 20-20-20 rule.",
      },
      {
        title: "Preservative-Safe Regimens",
        description:
          "Recommending formulations that do not cause secondary toxicity with long-term daily usage.",
      },
    ],
    aftercare: [
      {
        title: "The 20-20-20 Rule",
        description:
          "Every 20 minutes of screen work, look at an object 20 feet away for at least 20 seconds and blink deliberately.",
      },
      {
        title: "Consistent Drop Application",
        description:
          "Use lubricating drops at scheduled intervals rather than waiting until eyes are severely burning.",
      },
      {
        title: "Environmental Adjustments",
        description:
          "Avoid direct air conditioning blowing into the face and consider room humidification during dry winter months.",
      },
    ],
    faqs: [
      {
        q: "Why do my eyes water excessively if they are dry?",
        a: "When the eye surface becomes dry and irritated, reflex tearing is triggered by the lacrimal gland. However, these reflex tears lack lubricating oils and evaporate quickly, repeating the cycle.",
      },
      {
        q: "Can over-the-counter redness drops cure dry eyes?",
        a: "No. Decongestant redness drops constrict blood vessels temporarily and often cause rebound redness and worsening dryness. Specialist-prescribed lubricating drops treat the underlying tear deficiency safely.",
      },
      {
        q: "How does screen use cause eye dryness?",
        a: "When staring intently at phones, tablets, or monitors, our blink rate drops by more than 50%, and blinks are often incomplete. This allows the tear film to evaporate rapidly, leading to dry spots on the cornea.",
      },
    ],
  },
  {
    id: "cornea",
    name: "Cornea & External Ocular Infections",
    shortName: "Cornea & Infections",
    icon: Target,
    tagline: "Clinical diagnosis and medical treatment for surface eye irritations, allergies, and conjunctivitis.",
    cardDescription:
      "Prompt evaluation for red eye, pain, and foreign-body sensation; medical therapy for bacterial, viral, and allergic disorders.",
    whatItProvides:
      "Clinical diagnosis and medical treatment for surface eye irritations, allergies, and conjunctivitis.",
    clinicalFocus: [
      "Prompt evaluation for red eye, pain, and foreign-body sensation",
      "Medical treatment for bacterial and viral infections",
      "Management of ocular allergies and minor corneal abrasions",
    ],
    image: "/images/treatments/cornea.jpg",
    heroImage: "/images/surgery-3.jpg",
    gradient: "from-jade-500 to-brand-800",
    overview: [
      "The cornea is the clear, protective front dome of the eye. External ocular infections, allergic conjunctivitis, and superficial abrasions require prompt clinical diagnosis to relieve pain and prevent corneal scarring that can permanently impair vision.",
      "Self-medication with steroid or antibiotic eye drops purchased over the counter is dangerous and can turn a simple viral irritation into a sight-threatening corneal ulcer.",
      "At Shiv Netralay, we provide prompt clinical triage for red, painful, or sticky eyes. Dr. Ritesh Shukla performs high-magnification slit-lamp examinations to identify the precise causative condition and initiates targeted medical therapy.",
    ],
    whatToExpect: {
      title: "What to Expect at Your Infection Evaluation",
      items: [
        "Prompt visual acuity check and gentle topical numbing if severe foreign-body pain is present.",
        "Slit-lamp examination with fluorescein vital staining to detect epithelial corneal scratches or infiltrates.",
        "Eyelid eversion to check for hidden foreign bodies, papillae, or allergic follicles.",
        "Prescription of targeted antimicrobial or anti-allergic eye drops with strict dosage and hygiene counseling.",
      ],
    },
    symptoms: {
      title: "Symptoms Requiring Urgent Specialist Attention",
      items: [
        "Sudden intense eye pain, severe redness, and difficulty keeping the eye open",
        "Sticky, yellowish or greenish discharge gluing eyelids shut in the morning",
        "Extreme sensitivity to light (photophobia) and constant foreign body sensation",
        "A visible white or grey spot on the clear cornea (corneal ulcer warning)",
        "Redness following a scratch, contact lens wear, or vegetable matter injury",
      ],
    },
    candidates: {
      title: "Who Needs Corneal & External Evaluation?",
      items: [
        "Patients with sudden red, watery, or itchy eyes needing accurate infection diagnosis",
        "Contact lens wearers experiencing pain, redness, or discharge",
        "Children with seasonal spring catarrh or intense ocular itching and eye rubbing",
        "Anyone who has suffered a chemical splash, dust injury, or corneal scratch",
      ],
    },
    options: [
      {
        title: "Slit-Lamp Ocular Surface Assessment",
        description:
          "High-magnification microscopic examination to evaluate corneal clarity, tear film debris, and conjunctival redness.",
      },
      {
        title: "Medical Therapy for Infections",
        description:
          "Evidence-based antimicrobial regimens for bacterial conjunctivitis, viral keratitis, and superficial abrasions.",
      },
      {
        title: "Ocular Allergy Management",
        description:
          "Non-sedating antihistamine and mast cell stabilizer drop therapies to calm chronic seasonal itching safely.",
      },
    ],
    approach: [
      {
        title: "Prompt Clinical Triage",
        description:
          "Acute red eye presentations receive priority attention to distinguish self-limiting conjunctivitis from deeper inflammation.",
      },
      {
        title: "Avoidance of Harmful Steroids",
        description:
          "We strictly avoid unindicated steroid eye drops that risk elevating eye pressure or exacerbating fungal and viral infections.",
      },
      {
        title: "Clear Patient Guidance",
        description:
          "Practical infection control counseling on handwashing, towel separation, and safe eye cleaning.",
      },
    ],
    aftercare: [
      {
        title: "Strict Hand Hygiene",
        description:
          "Wash hands thoroughly before and after applying drops. Do not share towels, pillows, or handkerchiefs.",
      },
      {
        title: "Discontinue Contact Lenses",
        description:
          "Never wear contact lenses while your eye is red or receiving infection therapy until cleared by your specialist.",
      },
      {
        title: "Mandatory Review Visit",
        description:
          "Attend follow-up evaluation to confirm complete corneal epithelial healing before discontinuing medications.",
      },
    ],
    faqs: [
      {
        q: "What eye symptoms require urgent specialist attention?",
        a: "Sudden vision loss, severe eye pain, flashes of light, a sudden shower of dark floaters, chemical splashes, or acute redness with discharge require immediate ophthalmic evaluation.",
      },
      {
        q: "Why is it unsafe to use over-the-counter medical drops for a red eye?",
        a: "Many chemist drops contain steroids. If used on a viral or fungal corneal infection, steroids can worsen the ulcer rapidly and cause irreversible sight loss or elevated eye pressure.",
      },
      {
        q: "How can I prevent conjunctivitis ('eye flu') from spreading to my family?",
        a: "Avoid touching your eyes, wash hands frequently with soap, use disposable tissues, and never share towels, pillowcases, or eyeglasses with other family members.",
      },
    ],
  },
  {
    id: "pediatric",
    name: "Pediatric Eye Screening",
    shortName: "Pediatric Screening",
    icon: Baby,
    tagline: "Gentle, child-friendly eye checks to detect early vision deficiencies, squint, or amblyopia in developing children.",
    cardDescription:
      "Early detection of pediatric refractive errors, ocular alignment checks, squint assessment, and school vision recommendations.",
    whatItProvides:
      "Gentle, child-friendly eye checks to detect early vision deficiencies, squint, or amblyopia in developing children.",
    clinicalFocus: [
      "Early detection of pediatric refractive errors",
      "Assessment of ocular alignment and squint signs",
      "Practical eye-health recommendations for school-age children",
    ],
    image: "/images/treatments/pediatric.jpg",
    heroImage: "/images/hero-pediatric.jpg",
    gradient: "from-jade-500 to-brand-800",
    overview: [
      "A child's visual system develops rapidly during early childhood. Deficiencies like amblyopia ('lazy eye'), high refractive errors, and eye alignment abnormalities (squint) can cause permanent vision loss if not addressed during the critical developmental window.",
      "Young children rarely complain of poor sight because they assume everyone sees the world the way they do. Often, behavioral cues like sitting too close to the television, frequent eye rubbing, or tilting the head are the only outward signs.",
      "Shiv Netralay provides gentle, child-friendly eye screenings designed to keep young patients relaxed and comfortable. We assess visual sharpness, eye coordination, and binocular alignment to support healthy vision for school and play.",
    ],
    whatToExpect: {
      title: "What to Expect at Your Child's Eye Check",
      items: [
        "A calm, play-based approach using picture optotypes, tracking targets, and gentle fixation tests.",
        "Refractive error evaluation tailored to pediatric focusing habits.",
        "Assessment of ocular alignment (cover test) to rule out manifest or latent squint.",
        "Clear, supportive discussion with parents regarding glasses, screen habits, and outdoor play time.",
      ],
    },
    symptoms: {
      title: "Signs Your Child Needs an Eye Screening",
      items: [
        "Sitting unusually close to the television or holding books against the face",
        "Frequent eye rubbing, blinking, squinting, or closing one eye in bright sunlight",
        "Complaints of headaches, eye tiredness, or difficulty copying from the classroom blackboard",
        "Noticeable inward or outward drift of one eye (squint or strabismus)",
        "Tilting the head or turning the face to see objects clearly",
      ],
    },
    candidates: {
      title: "Recommended Screening Milestones",
      items: [
        "Pre-school screening around age 3 to 4 years to detect asymptomatic amblyopia or squint",
        "Comprehensive screening before entering formal primary school (age 5 to 6)",
        "Annual vision checks for children who already wear prescription glasses",
        "Prompt evaluation whenever parents or school teachers observe vision concerns",
      ],
    },
    options: [
      {
        title: "Early Childhood Vision Screening",
        description:
          "Gentle testing for visual acuity, stereoscopic depth perception, and tracking coordination.",
      },
      {
        title: "Refractive Error Correction for Children",
        description:
          "Accurate prescribing of pediatric spectacles using durable, safe polycarbonate lenses.",
      },
      {
        title: "Amblyopia & Squint Evaluation",
        description:
          "Clinical assessment of ocular muscle balance and guidance on structured occlusion (patching) protocols.",
      },
    ],
    approach: [
      {
        title: "Child-Friendly Environment",
        description:
          "We take time to build trust with the child so the examination feels pleasant, engaging, and stress-free.",
      },
      {
        title: "Parental Education",
        description:
          "We explain diagnosis, lens compliance, and outdoor play benefits in clear terms without alarming parents.",
      },
      {
        title: "Preventive Focus",
        description:
          "Catching refractive imbalances early prevents the permanent development of lazy eye (amblyopia).",
      },
    ],
    aftercare: [
      {
        title: "Encourage Consistent Spectacle Wear",
        description:
          "For young children with significant refractive error, consistent wearing of glasses is vital for brain-eye pathways to develop.",
      },
      {
        title: "Healthy Screen & Outdoor Balance",
        description:
          "Promote at least 60–90 minutes of daily outdoor natural light play, which is scientifically proven to slow myopia progression.",
      },
      {
        title: "Six-Monthly Follow-Up",
        description:
          "Children's eyes grow rapidly—regular checkups every 6 to 12 months ensure spectacle powers remain accurate.",
      },
    ],
    faqs: [
      {
        q: "When should a child have their eyes examined?",
        a: "Children should have vision checks before starting school, or sooner if parents notice eye rubbing, squinting, head tilting, sitting too close to screens, or complaints of blackboard blurriness.",
      },
      {
        q: "Will wearing glasses make my child's eyes weaker over time?",
        a: "No. Spectacles simply focus light accurately on the retina, allowing normal visual development. Not wearing prescribed glasses when needed can lead to lazy eye (amblyopia).",
      },
      {
        q: "How can parents protect children from developing myopia (short sight)?",
        a: "Encourage daily outdoor daylight play (1–2 hours), maintain a 30 cm distance while reading, limit recreational screen time, and ensure adequate lighting during study.",
      },
    ],
  },
];

export const getTreatment = (id?: string) => {
  if (!id) return TREATMENTS[0];
  if (id === "lasik") return TREATMENTS.find((t) => t.id === "refraction") ?? TREATMENTS[0];
  if (id === "comprehensive-exam") return TREATMENTS.find((t) => t.id === "general") ?? TREATMENTS[0];
  return TREATMENTS.find((t) => t.id === id) ?? TREATMENTS[0];
};

/* ── Specialist / Doctors Section ────────────────────────────── */
export interface Doctor {
  id: string;
  name: string;
  role: string;
  qualification: string;
  specialization: string;
  experience: string;
  experienceYears: number;
  expertise: string[];
  affiliations?: string[];
  clinicalPhilosophy?: string;
  bio: string[];
  languages: string[];
  timings: { days: string; time: string }[];
  treatments: string[];
  reviews: { name: string; rating: number; text: string }[];
  image: string;
  departments: string[];
  isPlaceholder?: boolean;
}

export const DOCTORS: Doctor[] = [
  {
    id: "dr-ritesh-shukla",
    name: "Dr. Ritesh Shukla",
    role: "Consultant Ophthalmologist & Glaucoma Specialist",
    qualification: "MBBS, MS / DOMS (Ophthalmology) [Degree to be confirmed]",
    specialization: "Glaucoma Evaluation & Comprehensive Ophthalmology",
    experience: "Consultant Ophthalmologist",
    experienceYears: 12,
    expertise: [
      "Glaucoma evaluation & medical management",
      "Cataract diagnostic assessments & staging",
      "Comprehensive ophthalmic examinations",
      "Anterior segment disorders & slit-lamp biomicroscopy",
      "Applanation / non-contact tonometry",
      "Direct & indirect ophthalmoscopy / retina monitoring",
    ],
    affiliations: [
      "Member, All India Ophthalmological Society (AIOS)",
      "Member, MP State Ophthalmological Society (MPSOS)",
    ],
    clinicalPhilosophy:
      "Providing evidence-based, compassionate care with dedicated time to explain diagnosis and treatment choices directly to the patient in straightforward, transparent language.",
    bio: [
      "Dr. Ritesh Shukla is a Consultant Ophthalmologist & Glaucoma Specialist practicing at Shiv Netralay, located at Purvi Kinara Gorakhnath Overbridge, N Eastern Railway Line, Bade Kajipur, Gorakhpur, Uttar Pradesh 273001, India.",
      "His clinical focus centers on thorough glaucoma screening, accurate cataract staging, anterior segment disorders, and proactive vision preservation for patients of all age groups.",
      "Clinical Philosophy: Providing evidence-based, compassionate care with dedicated time to explain diagnosis and treatment choices directly to the patient in everyday, jargon-free language.",
    ],
    languages: ["Hindi", "English"],
    timings: [
      { days: "Monday — Saturday", time: "6:30 PM – 8:30 PM" },
      { days: "Sunday", time: "11:00 AM – 3:00 PM" },
    ],
    treatments: [
      "Glaucoma Screening & Management",
      "Cataract Evaluation & Care",
      "Comprehensive Eye Examinations",
      "Computerized Refraction",
      "Diabetic Retinal Evaluation",
    ],
    reviews: [
      {
        name: "S. K. Mishra",
        rating: 5,
        text: "Dr. Ritesh Shukla explained my eye condition with great patience. Very honest advice and zero unnecessary tests.",
      },
      {
        name: "Rajeshwari Patel",
        rating: 5,
        text: "Very thorough glaucoma checkup. He took time to explain eye pressure readings and gave clear drop instructions.",
      },
    ],
    image: "/images/doctor-mehta.png",
    departments: [
      "general",
      "cataract",
      "glaucoma",
      "diabetic-retinopathy",
      "refraction",
      "dry-eye",
      "cornea",
      "pediatric",
    ],
  },
  {
    id: "visiting-specialist",
    name: "Visiting Eye Specialist Panel",
    role: "Visiting Consultant [Details to be confirmed]",
    qualification: "MS / DNB (Ophthalmology)",
    specialization: "Advanced Diagnostic & Surgical Specialties",
    experience: "Visiting Specialists",
    experienceYears: 10,
    expertise: [
      "Advanced Surgical Guidance",
      "Subspecialty Retina & Vitreoretinal Consultations",
      "Corneal Specialty Evaluations",
      "Pediatric Vision Referrals",
    ],
    affiliations: ["All India Ophthalmological Society (AIOS)"],
    clinicalPhilosophy:
      "Collaborative ophthalmic expertise ensuring patients across Gorakhpur have direct access to specialized consultations and advanced surgical opinions.",
    bio: [
      "Shiv Netralay collaborates with esteemed visiting ophthalmic specialists to provide comprehensive care across specialized ophthalmic disciplines.",
      "Placeholder reserved for additional visiting specialists: [ADDITIONAL DOCTOR DETAILS TO BE CONFIRMED].",
    ],
    languages: ["Hindi", "English"],
    timings: [
      { days: "Prior Appointment / Scheduled Days", time: "On-call & Scheduled Slots" },
    ],
    treatments: ["Specialty Consultations", "Surgical Advisory"],
    reviews: [
      {
        name: "Clinic Notice",
        rating: 5,
        text: "Additional visiting doctor profiles will be updated upon final confirmation by the clinic.",
      },
    ],
    image: "/images/doctor-extra.jpg",
    departments: [
      "cataract",
      "glaucoma",
      "diabetic-retinopathy",
      "cornea",
      "pediatric",
    ],
    isPlaceholder: true,
  },
];

export const getDoctor = (id?: string) =>
  DOCTORS.find((d) => d.id === id) ?? DOCTORS[0];

/* ── Diagnostics & Technology ───────────────────────────────── */
export interface TechItem {
  name: string;
  subtitle: string;
  description: string;
  evaluates: string;
  patientValue: string;
  image: string;
}

export const TECHNOLOGY: TechItem[] = [
  {
    name: "Slit-Lamp Biomicroscopy",
    subtitle: "High-Magnification Ocular Microscopy",
    description:
      "Illuminated biomicroscopic assessment of the anterior segment with calibrated slit-beam illumination.",
    evaluates: "Cornea, anterior chamber, iris, and crystalline lens structures.",
    patientValue:
      "Pain-free, high-magnification microscope examination allowing precise detection of cataracts, infections, and surface irritations.",
    image: "/images/equip-slitlamp.png",
  },
  {
    name: "Computerized Auto-Refractor",
    subtitle: "Automated Objective Refraction",
    description:
      "Digital optical wavefront measurement calculating precise spherical and cylindrical refractive status.",
    evaluates: "Objective optical refraction and baseline focusing power of the eye.",
    patientValue:
      "Fast, automated vision measurement that provides an accurate baseline for prescription glasses in seconds.",
    image: "/images/tech-1.jpg",
  },
  {
    name: "Applanation / Non-Contact Tonometry",
    subtitle: "Intraocular Pressure Measurement",
    description:
      "Accurate fluid pressure determination essential for detecting silent optic nerve risk factors.",
    evaluates: "Intraocular fluid pressure (IOP) inside the eye.",
    patientValue:
      "Quick, non-invasive measurement vital for the early detection and management of glaucoma ('kala motia').",
    image: "/images/equip-visualfield.png",
  },
  {
    name: "Direct & Indirect Ophthalmoscopy",
    subtitle: "Retinal & Fundus Inspection",
    description:
      "High-definition fundus examination inspecting the retina, optic nerve head, and retinal vascular network.",
    evaluates: "Retina, macula, retinal blood vessels, and optic nerve head.",
    patientValue:
      "Enables the specialist to inspect internal retina health and catch asymptomatic diabetic changes early.",
    image: "/images/equip-fundus.png",
  },
  {
    name: "Digital Visual Acuity System",
    subtitle: "Standardized Optometric Charts",
    description:
      "Calibrated high-contrast digital optotypes measuring distance and near visual sharpness.",
    evaluates: "Distance and near visual sharpness under calibrated illumination.",
    patientValue:
      "Standardized vision testing to ensure your glasses prescription is crisp, comfortable, and accurate.",
    image: "/images/equip-oct-consult.jpg",
  },
];

export const ADVANCED_EQUIPMENT_NOTE =
  "In-house availability of OCT, Perimetry (Field Test), YAG Laser, and Optical Biometry is [EQUIPMENT DETAILS TO BE CONFIRMED] prior to site launch.";

/* ── Why Patients Choose Shiv Netralay ───────────────────────── */
export interface WhyItem {
  icon: "award" | "scan" | "layers" | "heart" | "building" | "calendar";
  title: string;
  description: string;
}

export const WHY_US: WhyItem[] = [
  {
    icon: "award",
    title: "Specialist-Led Eye Consultations",
    description:
      "Every patient is examined directly by a dedicated eye specialist, never rushed through hasty checks.",
  },
  {
    icon: "scan",
    title: "Thorough Clinical Examinations",
    description:
      "Evaluations extend beyond standard vision testing to assess internal eye pressure, corneal health, and retinal wellness.",
  },
  {
    icon: "heart",
    title: "Clear & Honest Medical Guidance",
    description:
      "Conditions and treatment pathways are explained in straightforward, everyday language without medical jargon.",
  },
  {
    icon: "layers",
    title: "Focus on Preventive Vision Care",
    description:
      "Targeted screenings help identify gradual conditions like glaucoma and diabetic retinopathy before vision is permanently compromised.",
  },
  {
    icon: "building",
    title: "Comfortable, Patient-First Ambience",
    description:
      "A clean, calm clinic environment designed for courteous care, orderly appointments, and minimal wait times.",
  },
  {
    icon: "calendar",
    title: "Accessible Gorakhpur Location",
    description:
      "Located at Purvi Kinara Gorakhnath Overbridge, N Eastern Railway Line, Bade Kajipur, making visits convenient for patients from all across Gorakhpur and surrounding areas.",
  },
];

/* ── Find the right eye care ────────────────────────────────── */
export interface SymptomChip {
  label: string;
  treatmentId: string;
}

export const SYMPTOMS: SymptomChip[] = [
  { label: "Routine Full Check-up", treatmentId: "general" },
  { label: "Cloudy / Foggy Vision", treatmentId: "cataract" },
  { label: "Frequent Spectacle Change", treatmentId: "cataract" },
  { label: "High Eye Pressure / Glaucoma", treatmentId: "glaucoma" },
  { label: "Loss of Side Vision", treatmentId: "glaucoma" },
  { label: "Diabetes & Retinal Care", treatmentId: "diabetic-retinopathy" },
  { label: "Floaters & Flashes", treatmentId: "diabetic-retinopathy" },
  { label: "Blurred Text / Headaches", treatmentId: "refraction" },
  { label: "Computer Screen Fatigue", treatmentId: "refraction" },
  { label: "Gritty, Burning Eyes", treatmentId: "dry-eye" },
  { label: "Eye Pain / Redness / Infection", treatmentId: "cornea" },
  { label: "Child Vision & Squint", treatmentId: "pediatric" },
];

/* ── Patient Journey (Step-by-Step Experience) ──────────────── */
export interface JourneyStep {
  step: string;
  icon: "calendar" | "doctor" | "scan" | "heart";
  title: string;
  description: string;
}

export const JOURNEY: JourneyStep[] = [
  {
    step: "01",
    icon: "calendar",
    title: "Simple Appointment Request",
    description:
      "Book conveniently via phone call, WhatsApp, or the clinic's online request form.",
  },
  {
    step: "02",
    icon: "doctor",
    title: "Reception & Quick Registration",
    description:
      "Smooth, organized registration capturing your basic details and eye-health concerns.",
  },
  {
    step: "03",
    icon: "scan",
    title: "Preliminary Computerized Eye Test",
    description:
      "Automated refraction and visual acuity assessment by clinic support staff.",
  },
  {
    step: "04",
    icon: "doctor",
    title: "Comprehensive Specialist Examination",
    description:
      "In-depth slit-lamp biomicroscopy and ocular evaluation directly by the eye doctor.",
  },
  {
    step: "05",
    icon: "scan",
    title: "Diagnostic Checks (If Indicated)",
    description:
      "Eye pressure check (tonometry) or dilated retinal examination when clinically required.",
  },
  {
    step: "06",
    icon: "heart",
    title: "Clear Diagnosis & Treatment Plan",
    description:
      "Honest discussion of findings, prescription for glasses/drops, and preventive guidance.",
  },
  {
    step: "07",
    icon: "heart",
    title: "Structured Follow-Up Care",
    description:
      "Clear follow-up schedule and continuous monitoring for chronic eye conditions.",
  },
];

/* ── Common Eye Conditions: Patient Guide (Section 7) ───────── */
export interface CommonCondition {
  id: string;
  name: string;
  tagline: string;
  description: string;
  whenToConsult: string;
  treatmentId: string;
}

export const COMMON_CONDITIONS: CommonCondition[] = [
  {
    id: "cataract",
    name: "Cataract",
    tagline: "Gradual Lens Clouding",
    description:
      "Gradual clouding of the eye's natural crystalline lens, leading to blurred, hazy, or faded vision.",
    whenToConsult:
      "Schedule an eye check if you notice cloudy vision, difficulty driving at night, or frequent changes in spectacle numbers.",
    treatmentId: "cataract",
  },
  {
    id: "glaucoma",
    name: "Glaucoma (Kala Motia)",
    tagline: "Silent Optic Nerve Condition",
    description:
      "Optic nerve damage often associated with elevated eye pressure, progressing silently without early pain.",
    whenToConsult:
      "Schedule annual pressure checks after age 40, or promptly if you notice tunnel vision, eye heaviness, or colored halos around lights.",
    treatmentId: "glaucoma",
  },
  {
    id: "refractive-errors",
    name: "Refractive Errors",
    tagline: "Myopia / Hyperopia / Astigmatism",
    description:
      "Irregularities in the eye's optical focus causing blurred vision at distance, near, or both.",
    whenToConsult:
      "Consult if you experience blurred text, eye strain, squinting to see road signs, or frequent evening headaches.",
    treatmentId: "refraction",
  },
  {
    id: "diabetic-retinopathy",
    name: "Diabetic Retinopathy",
    tagline: "Microvascular Retinal Changes",
    description:
      "Blood vessel damage in the retina resulting from prolonged high blood sugar levels.",
    whenToConsult:
      "Schedule a dilated retina check every year if you have diabetes, or immediately if you notice floaters or dark spots.",
    treatmentId: "diabetic-retinopathy",
  },
  {
    id: "dry-eye",
    name: "Dry Eye Disease",
    tagline: "Ocular Surface Irritation",
    description:
      "Inadequate tear production or rapid tear evaporation causing ocular surface irritation and fatigue.",
    whenToConsult:
      "Consult if you experience persistent burning, grittiness, redness, or eye fatigue during computer and mobile use.",
    treatmentId: "dry-eye",
  },
  {
    id: "corneal-infections",
    name: "Corneal & Surface Infections",
    tagline: "Conjunctivitis & Surface Irritations",
    description:
      "Bacterial, viral, or allergic inflammation affecting the delicate outer surface of the eye.",
    whenToConsult:
      "Consult promptly if you have redness, discharge, sticky eyelids, photophobia, or foreign body sensation.",
    treatmentId: "cornea",
  },
];

/* ── Testimonials (Patient Experiences) ─────────────────────── */
export interface Testimonial {
  quote: string;
  name: string;
  treatment: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Dr. Ritesh Shukla examined my mother's eyes with great patience. He explained her cataract stage clearly and told us there was no need to rush into surgery. That honesty is rare and deeply appreciated.",
    name: "Rajesh Soni",
    treatment: "Cataract Evaluation",
    rating: 5,
  },
  {
    quote:
      "I had been suffering from burning and gritty eyes for months due to long laptop work. The dry eye evaluation was thorough, and the drop regimen gave me prompt comfort.",
    name: "Pooja Chouksey",
    treatment: "Dry Eye Management",
    rating: 5,
  },
  {
    quote:
      "Detailed glaucoma checkup with tonometry and optic disc evaluation. The clinic atmosphere at Gorakhpur is calm, clean, and unhurried. Highly recommend Shiv Netralay for family eye care.",
    name: "Anand Verma",
    treatment: "Glaucoma Screening",
    rating: 5,
  },
  {
    quote:
      "Took my 6-year-old daughter for her school vision checkup. The doctor was gentle, friendly, and made the test enjoyable. Her new spectacles fit perfectly.",
    name: "Meenakshi Tiwari",
    treatment: "Pediatric Eye Screening",
    rating: 5,
  },
  {
    quote:
      "Prompt emergency care for my acute red eye and corneal irritation. Accurate drops prescribed and complete recovery in just three days.",
    name: "Vikas Agrawal",
    treatment: "Cornea & Infection Care",
    rating: 5,
  },
];

/* ── Blog / Eye care insights ───────────────────────────────── */
export interface BlogPost {
  title: string;
  excerpt: string;
  readTime: string;
  category: string;
  icon: "eye" | "calendar" | "sparkles" | "shield" | "baby" | "droplets";
}

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Understanding Cataracts: Staging, Signs, and Surgical Timing",
    excerpt:
      "Learn how lens opacity develops, when surgery becomes necessary, and how modern evaluations help you choose the right time for care.",
    readTime: "5 min read",
    category: "Cataract",
    icon: "eye",
  },
  {
    title: "Glaucoma: Why Annual Eye Pressure Checks Matter After 40",
    excerpt:
      "Known as the silent thief of sight, glaucoma progresses without early pain. Discover how tonometry and optic disc tracking safeguard your vision.",
    readTime: "4 min read",
    category: "Glaucoma",
    icon: "shield",
  },
  {
    title: "Diabetes and Your Eyes: The Silent Risk of Retinopathy",
    excerpt:
      "Why annual dilated fundus examinations are mandatory for diabetic individuals—catching microvascular changes years before blur begins.",
    readTime: "5 min read",
    category: "Retina",
    icon: "sparkles",
  },
  {
    title: "Digital Eye Strain: Protecting Your Eyes During Screen Work",
    excerpt:
      "Tear evaporation, reduced blink rate, and the 20-20-20 rule. Practical ophthalmologist-approved tips for comfortable screen hours.",
    readTime: "4 min read",
    category: "Dry Eye",
    icon: "droplets",
  },
];

/* ── Frequently Asked Questions (Section 8) ─────────────────── */
export interface FaqItem {
  q: string;
  a: string;
}

export const FAQS: FaqItem[] = [
  {
    q: "How do I book an appointment at Shiv Netralay?",
    a: "You can schedule your visit by calling our clinic number, sending a WhatsApp message, or submitting an inquiry via the website contact form.",
  },
  {
    q: "What documents or items should I bring for my consultation?",
    a: "Please bring your current eyeglasses, any previous eye prescriptions or clinical reports, and your current medications list (especially for diabetes or blood pressure).",
  },
  {
    q: "How long does a routine eye examination typically take?",
    a: "A standard comprehensive consultation usually takes about 20 to 30 minutes. If pupil dilation is required for a thorough retina examination, please allow an additional 30 to 45 minutes.",
  },
  {
    q: "How often should adults get an eye checkup?",
    a: "Adults with normal vision should have an eye check every 1 to 2 years. Individuals over 40, contact lens wearers, and those with diabetes, hypertension, or family history of glaucoma should be examined annually.",
  },
  {
    q: "What happens during a comprehensive eye examination?",
    a: "Your specialist evaluates visual sharpness, computerized refractive error, corneal and lens clarity using a slit lamp, and checks eye pressure and retinal health when indicated.",
  },
  {
    q: "When is cataract surgery considered?",
    a: "Cataract surgery is recommended when lens cloudiness begins to interfere with your everyday activities, such as reading, driving, or recognizing faces. Your specialist will guide you based on your lifestyle needs.",
  },
  {
    q: "Can diabetes damage my eyesight without causing symptoms?",
    a: "Yes. Diabetic retinopathy often develops painlessly in its early stages without noticeable vision loss. Annual dilated retina evaluations are vital for timely detection before irreversible damage occurs.",
  },
  {
    q: "When should a child have their eyes examined?",
    a: "Children should have vision checks before starting school, or sooner if parents notice eye rubbing, squinting, head tilting, sitting too close to screens, or complaints of blackboard blurriness.",
  },
  {
    q: "What eye symptoms require urgent specialist attention?",
    a: "Sudden vision loss, severe eye pain, flashes of light, a sudden shower of dark floaters, chemical splashes, or acute redness with discharge require immediate ophthalmic evaluation.",
  },
  {
    q: "Does Shiv Netralay offer cashless health insurance / TPA facilities?",
    a: "Empanelment with insurance providers and TPAs varies; please contact our clinic desk directly to confirm current cashless and reimbursement documentation support [DETAIL TO BE CONFIRMED].",
  },
];

/* ── Appointment departments ────────────────────────────────── */
export const DEPARTMENTS = TREATMENTS.map((t) => ({
  id: t.id,
  name: t.shortName,
  icon: t.icon,
}));
