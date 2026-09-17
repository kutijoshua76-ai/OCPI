import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { SparkleStar, DiamondTwinkle, DiagonalHatch, RadialSunburst, HalftoneWaveGrid } from '../components/DecorativeOrnaments';

export const MembershipPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const initialTrack = searchParams.get('track') === 'tech' ? 'tech' : 'family';
  const initialSubtype = searchParams.get('subtype') || (initialTrack === 'family' ? 'partner' : 'ambassador');

  const [track, setTrack] = useState<'family' | 'tech'>(initialTrack);
  const [subtype, setSubtype] = useState(initialSubtype);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    statement: ''
  });

  useEffect(() => {
    const urlTrack = searchParams.get('track');
    const urlSubtype = searchParams.get('subtype');
    if (urlTrack === 'tech' || urlTrack === 'family') {
      setTrack(urlTrack);
      if (urlSubtype) {
        setSubtype(urlSubtype);
      }
    }
  }, [searchParams]);

  const familySubtypes = [
    { id: 'partner', label: 'Institutional Partner', desc: 'Collaborate as a funding body, university, or developmental donor.' },
    { id: 'career', label: 'Professional Career', desc: 'Apply for permanent operational, research, or field management roles.' },
    { id: 'internship', label: 'Academic Internship / Fellowship', desc: 'Join our structured accredited leadership and research cohort.' },
    { id: 'visit', label: 'Field Delegation Visit', desc: 'Request an official visit or delegation tour of our field consultation hubs.' }
  ];

  const techSubtypes = [
    { id: 'ambassador', label: 'Regional Ambassador', desc: 'Promote OCPI grassroots initiatives in your state or university campus.' },
    { id: 'technician', label: 'Studio & Lab Technician', desc: 'Support our Community Open Labs, hardware maker tools, and video studios.' },
    { id: 'volunteer', label: 'Community Volunteer', desc: 'Provide ground support during emergency response and educational clinics.' }
  ];

  const currentOptions = track === 'family' ? familySubtypes : techSubtypes;

  const handleTrackChange = (newTrack: 'family' | 'tech') => {
    setTrack(newTrack);
    const defaultSub = newTrack === 'family' ? 'partner' : 'ambassador';
    setSubtype(defaultSub);
    setSearchParams({ track: newTrack, subtype: defaultSub });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }, 900);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', phone: '', location: '', statement: '' });
  };

  return (
    <div className="bg-white min-h-screen py-8 sm:py-16 overflow-hidden relative">
      
      {/* Background Graphic Ornaments */}
      <HalftoneWaveGrid className="top-10 -left-20 w-[550px] h-[350px] hidden sm:block" opacity={0.22} />
      <SparkleStar color="#f59e0b" size={28} className="hidden sm:block absolute top-16 right-20 animate-pulse" />
      <DiamondTwinkle color="#1B96D8" size={24} className="hidden sm:block absolute top-48 left-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12 relative z-10">
        
        {/* Breadcrumb & Editorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 mb-4 sm:mb-6 font-sans">
            <Link to="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#1B96D8]">Onboarding</span>
          </div>

          <span className="text-xs sm:text-sm font-bold text-[#1B96D8] block mb-2 sm:mb-3 font-sans">
            Official Pan-African Onboarding
          </span>

          <h1 className="font-display font-bold text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-[1.1] tracking-tight mb-3 sm:mb-5">
            Join One Community <span className="italic font-normal text-[#1B96D8]">Platform</span>
          </h1>

          <p className="font-sans text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
            Choose your participation track to onboard with our pan-African civic network, accredited fellowships, research units, and grassroots maker labs.
          </p>
        </div>

        {/* Hero Photo Card for Membership with Radial Sunburst */}
        <div className="relative rounded-[28px] sm:rounded-[36px] bg-white border border-slate-200/90 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center p-5 sm:p-10">
          
          <RadialSunburst color="#f59e0b" size={160} className="hidden sm:block absolute -top-10 -right-10" />
          <DiagonalHatch color="#8FC02A" width={140} height={140} className="hidden sm:block absolute -bottom-8 -left-8" />

          <div className="lg:col-span-5 h-56 xs:h-64 sm:h-72 rounded-[24px] sm:rounded-[28px] overflow-hidden bg-slate-100 relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop" 
              alt="Pan-African Community Onboarding" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-7 space-y-2.5 sm:space-y-3 relative z-10">
            <span className="text-xs font-bold text-[#8FC02A] block font-sans">
              Civic Engagement &bull; Pan-African Network
            </span>
            <h2 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-slate-900 leading-snug">
              Collaborative Growth Across Communities
            </h2>
            <p className="font-sans text-slate-600 text-xs sm:text-sm md:text-base font-normal leading-relaxed">
              Whether you are an academic researcher joining the Joint Research Group (JRG), an institutional donor partner, or a regional open lab technologist, your application connects directly with the Secretariat.
            </p>
          </div>
        </div>

        {/* 2-Column Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-start pt-2 sm:pt-4">
          
          {/* LEFT COLUMN: Track Benefits & Overview */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Track Info Card */}
            <div className="rounded-[32px] bg-[#fafaf9] border border-slate-200/90 p-6 sm:p-8 space-y-6 shadow-sm">
              <div>
                <span className="text-xs font-bold text-[#1B96D8] block mb-1 font-sans">
                  Active Onboarding Track
                </span>
                <h3 className="font-display font-bold text-2xl text-slate-900 leading-snug">
                  {track === 'family' ? 'Join Our Family' : 'Join Tech Group'}
                </h3>
                <span className="text-xs font-semibold text-slate-500 block mt-0.5 font-sans">
                  {track === 'family' ? 'Governance & Fellowship' : 'Maker Labs & Field Technicals'}
                </span>
              </div>

              <p className="font-sans text-slate-600 text-sm leading-relaxed">
                {track === 'family' 
                  ? 'Designed for institutions, faculty researchers, career professionals, and field delegations seeking strategic civic alliance across Africa.'
                  : 'Designed for engineers, digital ambassadors, open lab technicians, and grassroots community organizers deploying local tech solutions.'}
              </p>

              {/* Subtype List Cards */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold text-slate-500 block mb-2 font-sans">
                  Available Roles &amp; Portals
                </span>
                {currentOptions.map((opt, idx) => (
                  <div 
                    key={opt.id}
                    onClick={() => { setSubtype(opt.id); setSearchParams({ track, subtype: opt.id }); }}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 flex items-start gap-4 ${
                      subtype === opt.id 
                        ? 'bg-white border-[#1B96D8] shadow-md ring-2 ring-[#1B96D8]/15' 
                        : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-700 shrink-0 font-sans">
                      0{idx + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-display font-bold text-sm text-slate-900 flex items-center justify-between">
                        <span>{opt.label}</span>
                        {subtype === opt.id && (
                          <span className="text-xs font-bold text-[#1B96D8] font-sans">Selected</span>
                        )}
                      </div>
                      <p className="font-sans text-xs text-slate-500 mt-1 leading-relaxed font-normal">
                        {opt.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Accreditation Badge */}
            <div className="p-6 rounded-[28px] bg-white border border-slate-200/90 shadow-sm">
              <span className="text-xs font-bold text-[#8FC02A] block mb-1 font-sans">
                Fiduciary Oversight
              </span>
              <strong className="font-display font-bold text-base text-slate-900 block mb-1">
                Accredited Pan-African Governance
              </strong>
              <p className="font-sans text-xs text-slate-600 leading-relaxed font-normal">
                All memberships are vetted by the Joint Research Group (JRG) and the 28-member Advisory Board.
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN: The Application Form Card */}
          <div className="lg:col-span-7">
            
            <div className="rounded-[36px] bg-white border border-slate-200/90 p-6 sm:p-10 lg:p-12 shadow-2xl relative">
              
              {submitted ? (
                <div className="text-center py-10 sm:py-16 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-[#8FC02A]/15 text-[#8FC02A] font-bold text-2xl flex items-center justify-center mx-auto shadow-inner">
                    &check;
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-[#1B96D8] font-sans">
                      Application Successfully Filed
                    </span>
                    <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900">
                      Welcome to OCPI
                    </h2>
                  </div>
                  <p className="font-sans text-slate-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed font-normal">
                    Thank you, <strong>{formData.name || 'Fellow'}</strong>! Your application for the <strong>{currentOptions.find(o => o.id === subtype)?.label}</strong> track has been registered with the Secretariat. You will receive an official onboarding dispatch at <strong>{formData.email}</strong> within 3 business days.
                  </p>
                  <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
                    <Button
                      onClick={handleReset}
                      variant="secondary"
                      size="md"
                    >
                      Submit Another Application
                    </Button>
                    <Link to="/">
                      <Button
                        variant="primary"
                        size="md"
                      >
                        Return to Homepage
                      </Button>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="space-y-8">
                  
                  {/* Form Header */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-[#1B96D8] font-sans">
                        Step 1 of 1 — Onboarding Application
                      </span>
                    </div>
                    <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
                      Applicant Information
                    </h2>
                    <p className="font-sans text-slate-600 text-xs sm:text-sm mt-1 font-normal">
                      Select your track below and fill in your official details.
                    </p>
                  </div>

                  {/* Top Track Switcher */}
                  <div className="grid grid-cols-2 gap-2 p-1.5 bg-slate-100/80 rounded-full border border-slate-200/80">
                    <button
                      type="button"
                      onClick={() => handleTrackChange('family')}
                      className={`py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 font-sans ${
                        track === 'family'
                          ? 'bg-[#1B96D8] text-white shadow-md shadow-[#1B96D8]/25'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Join Our Family
                    </button>

                    <button
                      type="button"
                      onClick={() => handleTrackChange('tech')}
                      className={`py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 font-sans ${
                        track === 'tech'
                          ? 'bg-[#8FC02A] text-white shadow-md shadow-[#8FC02A]/25'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Join Tech Group
                    </button>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Category Type Dropdown */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2 font-sans">
                        Category Type
                      </label>
                      <select
                        value={subtype}
                        onChange={(e) => { setSubtype(e.target.value); setSearchParams({ track, subtype: e.target.value }); }}
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm text-slate-900 focus:bg-white focus:border-[#1B96D8] focus:ring-4 focus:ring-[#1B96D8]/10 focus:outline-none transition-all font-sans"
                      >
                        {currentOptions.map((opt) => (
                          <option key={opt.id} value={opt.id}>
                            {opt.label} — {opt.desc}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-2 font-sans">
                          Full Legal Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Dr. Amina Bello"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#1B96D8] focus:ring-4 focus:ring-[#1B96D8]/10 focus:outline-none transition-all font-sans"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-2 font-sans">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="amina@example.org"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#1B96D8] focus:ring-4 focus:ring-[#1B96D8]/10 focus:outline-none transition-all font-sans"
                        />
                      </div>
                    </div>

                    {/* Phone & Location Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-2 font-sans">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+234 803 000 0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#1B96D8] focus:ring-4 focus:ring-[#1B96D8]/10 focus:outline-none transition-all font-sans"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-2 font-sans">
                          State / Country *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Lagos, Nigeria"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#1B96D8] focus:ring-4 focus:ring-[#1B96D8]/10 focus:outline-none transition-all font-sans"
                        />
                      </div>
                    </div>

                    {/* Statement of Interest */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2 font-sans">
                        Statement of Interest / Background Experience
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Share a brief overview of your background and how you wish to contribute to or partner with OCPI..."
                        value={formData.statement}
                        onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#1B96D8] focus:ring-4 focus:ring-[#1B96D8]/10 focus:outline-none transition-all font-sans resize-none"
                      />
                    </div>

                    {/* Form Actions */}
                    <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                      <Button
                        type="submit"
                        disabled={loading}
                        variant="primary"
                        size="lg"
                        className="w-full sm:flex-1 justify-center shadow-xl font-sans"
                      >
                        {loading ? 'Processing...' : 'Submit Application'}
                      </Button>
                      <Link to="/" className="w-full sm:w-auto">
                        <button
                          type="button"
                          className="w-full sm:w-auto px-6 py-4 rounded-full border-2 border-slate-200 text-slate-700 hover:bg-slate-50 font-sans text-xs sm:text-sm font-bold transition-colors"
                        >
                          Cancel
                        </button>
                      </Link>
                    </div>

                  </form>

                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
