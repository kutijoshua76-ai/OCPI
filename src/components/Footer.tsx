import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import ocpiLogo from '../assets/ocpi-logo.png';

interface FooterProps {
  onOpenMembership: (track: 'family' | 'tech', subtype?: string) => void;
  onOpenDonate: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenMembership,
  onOpenDonate
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setNewsletterEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="bg-white border-t border-gray-200/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Subscription Card (Modern Editorial UI) */}
        <div className="relative rounded-[36px] bg-[#fafaf9] border border-slate-200/90 p-8 sm:p-12 lg:p-16 mb-20 shadow-xl overflow-hidden flex flex-col items-center text-center">
          
          {/* Subtle Background Radial Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1B96D8] block font-sans">
              Official Dispatches
            </span>

            <h3 className="font-display font-bold text-3xl sm:text-4xl lg:text-4xl text-slate-900 leading-tight tracking-tight">
              Subscribe to OCPI Dispatches &amp; <span className="italic font-normal text-[#1B96D8]">JRG Research</span>
            </h3>

            <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-xl mx-auto">
              Receive quarterly empirical briefs, fellowship application alerts, community consultation dispatches, and annual reports directly to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="pt-4 w-full max-w-lg mx-auto">
              {subscribed ? (
                <div className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-300 text-sm font-bold shadow-sm">
                  <span>&check; Thank you! You are now subscribed to OCPI Dispatches.</span>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full flex-1 rounded-full bg-white border border-slate-300 px-6 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:outline-none focus:border-[#1B96D8] focus:ring-4 focus:ring-[#1B96D8]/10 transition-all font-sans"
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    className="w-full sm:w-auto shrink-0 whitespace-nowrap"
                  >
                    Subscribe
                  </Button>
                </div>
              )}
            </form>

          </div>

        </div>

        {/* 4-Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16 text-xs text-slate-600">
          
          {/* Col 1: Brand & JEOLINKS (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src={ocpiLogo} 
                alt="OCPI - One Community Platform Initiative" 
                className="h-14 sm:h-16 w-auto object-contain transition-transform group-hover:scale-105" 
              />
            </Link>

            <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
              Committed to inclusive grassroots empowerment, socioeconomic transformation, educational technology adoption, and community self-reliance across Nigeria and Africa.
            </p>

            <div className="pt-2 space-y-1">
              <div className="font-bold text-[#1B96D8] text-xs uppercase tracking-wider">
                JEOLINKS Corporate Alliance
              </div>
              <p className="text-slate-600 text-xs leading-relaxed font-normal">
                Corporate headquarters, technical advisory service desk, and educational initiative partner.
              </p>
            </div>
          </div>

          {/* Col 2: Down-Side Navigation (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-slate-900 text-sm tracking-tight mb-4 pb-2 border-b border-slate-200/80">
              Down-Side Navigation
            </h4>
            <ul className="space-y-3 font-sans text-xs sm:text-sm">
              <li>
                <Link to="/who-we-are" className="text-slate-600 hover:text-slate-900 hover:underline underline-offset-4 transition-colors">
                  Who We Are &amp; Governance (Board 28)
                </Link>
              </li>
              <li>
                <Link to="/what-we-do" className="text-slate-600 hover:text-slate-900 hover:underline underline-offset-4 transition-colors">
                  What We Do &amp; Social Development
                </Link>
              </li>
              <li>
                <Link to="/where-we-work" className="text-slate-600 hover:text-slate-900 hover:underline underline-offset-4 transition-colors">
                  Where We Work: Nigeria cum Africa
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-slate-600 hover:text-slate-900 hover:underline underline-offset-4 transition-colors">
                  Research &amp; JRG 7 Specialized Units
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-slate-600 hover:text-slate-900 hover:underline underline-offset-4 transition-colors">
                  News, Events &amp; Awards Calendar
                </Link>
              </li>
              <li>
                <Link to="/media" className="text-slate-600 hover:text-slate-900 hover:underline underline-offset-4 transition-colors">
                  Media Gallery, Videos &amp; Fact Sheets
                </Link>
              </li>
              <li className="pt-1">
                <button 
                  onClick={onOpenDonate} 
                  className="font-bold text-[#1B96D8] hover:text-[#147cb5] hover:underline underline-offset-4 transition-colors"
                >
                  Direct Giving &amp; Donations &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Membership Portals (2.5 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-slate-900 text-sm tracking-tight mb-4 pb-2 border-b border-slate-200/80">
              Membership Portals
            </h4>
            <ul className="space-y-2.5 font-sans text-xs">
              <li>
                <button onClick={() => onOpenMembership('family', 'partner')} className="text-left text-slate-600 hover:text-slate-900 hover:underline transition-colors">
                  JOIN: Institutional Partner
                </button>
              </li>
              <li>
                <button onClick={() => onOpenMembership('family', 'career')} className="text-left text-slate-600 hover:text-slate-900 hover:underline transition-colors">
                  JOIN: Professional Career
                </button>
              </li>
              <li>
                <button onClick={() => onOpenMembership('family', 'internship')} className="text-left text-slate-600 hover:text-slate-900 hover:underline transition-colors">
                  JOIN: Academic Fellowship
                </button>
              </li>
              <li>
                <button onClick={() => onOpenMembership('family', 'visit')} className="text-left text-slate-600 hover:text-slate-900 hover:underline transition-colors">
                  JOIN: Field Delegation Visit
                </button>
              </li>
              <li className="pt-1">
                <button onClick={() => onOpenMembership('tech', 'ambassador')} className="text-left text-[#8FC02A] font-medium hover:underline transition-colors">
                  Tech Group: Regional Ambassador
                </button>
              </li>
              <li>
                <button onClick={() => onOpenMembership('tech', 'technician')} className="text-left text-[#8FC02A] font-medium hover:underline transition-colors">
                  Tech Group: Lab Technician
                </button>
              </li>
              <li>
                <button onClick={() => onOpenMembership('tech', 'volunteer')} className="text-left text-[#8FC02A] font-medium hover:underline transition-colors">
                  Tech Group: Community Volunteer
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Secretariat (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-slate-900 text-sm tracking-tight mb-4 pb-2 border-b border-slate-200/80">
              Secretariat &amp; Desks
            </h4>
            <ul className="space-y-3 font-sans text-xs text-slate-600">
              <li>
                <span className="font-bold text-slate-900 block mb-0.5">Project Director Desk:</span>
                <span>Plot 14 Commercial Ave, Yaba, Lagos</span>
              </li>
              <li>
                <span className="font-bold text-slate-900 block mb-0.5">Senior Media Bureau:</span>
                <span>Lagos, Nigeria</span>
              </li>
              <li>
                <span className="font-bold text-slate-900 block mb-0.5">Hotlines:</span>
                <span>+234 (0) 1 453 8890 / +234 (0) 803 000 7891</span>
              </li>
              <li>
                <span className="font-bold text-slate-900 block mb-0.5">Official Domain:</span>
                <a href="https://www.ocpinitiative.net" target="_blank" rel="noreferrer" className="text-[#1B96D8] font-semibold hover:underline">
                  www.ocpinitiative.net
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Strip with Social SVG Badges */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-500 font-sans">
          <div>
            &copy; 2026 One Community Platform Initiative (OCPI). All rights reserved. Registered Pan-African Civic Organization.
          </div>
          
          {/* Interactive Social Media SVG Icons */}
          <div className="flex items-center gap-3">
            
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#1877F2] hover:text-white text-slate-600 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* Twitter (X) */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter / X"
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-black hover:text-white text-slate-600 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-sm"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#FF0000] hover:text-white text-slate-600 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#0A66C2] hover:text-white text-slate-600 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};
