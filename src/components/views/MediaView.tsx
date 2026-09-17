import React from 'react';
import { PUBLICATIONS } from '../../data/ocpiData';
import { Button } from '../Button';
import { SparkleStar, DiamondTwinkle, DiagonalHatch, RadialSunburst, HalftoneWaveGrid } from '../DecorativeOrnaments';
import { ScrollReveal } from '../ScrollReveal';

export const MediaView: React.FC = () => {
  const pubImages = [
    "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop", // Annual Report
    "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800&auto=format&fit=crop", // Policy Brief
    "https://images.unsplash.com/photo-1507842229451-79b1be886a27?q=80&w=800&auto=format&fit=crop"  // Technical Whitepaper
  ];

  return (
    <div className="space-y-16 sm:space-y-24 lg:space-y-28 py-4 sm:py-6 relative">
      
      {/* Publications Grid: Tall Full-Bleed Visual Cards */}
      <div className="relative space-y-8 sm:space-y-10">
        
        <HalftoneWaveGrid className="-top-12 -left-20 w-[500px] h-[350px] hidden sm:block" opacity={0.25} />
        <SparkleStar color="#f59e0b" size={28} className="hidden sm:block absolute -top-8 right-24 animate-pulse" />
        <DiamondTwinkle color="#1B96D8" size={24} className="hidden sm:block absolute top-10 right-6" />

        <ScrollReveal animation="fade-up">
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold text-[#1B96D8] block mb-1.5 sm:mb-2 font-sans">
              Official Dispatches &amp; Archives
            </span>
            <h3 className="font-display font-bold text-2xl xs:text-3xl sm:text-4xl text-slate-900 leading-tight">
              Publications, Policy Briefs &amp; Audits
            </h3>
            <p className="font-sans text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed mt-2 font-normal">
              Access audited financial sustainability disclosures, evidence whitepapers from the JRG, and verified biographical registers for media coverage.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {PUBLICATIONS.map((pub, idx) => (
            <ScrollReveal key={idx} animation="fade-up" delay={idx * 150} duration={750}>
              <div className="relative group h-full">
                {idx === 0 && <RadialSunburst color="#f59e0b" size={140} className="hidden sm:block absolute -top-8 -left-8" />}
                {idx === 2 && <DiagonalHatch color="#1B96D8" width={130} height={130} className="hidden sm:block absolute -top-6 -right-6" />}

                <div 
                  className="relative h-[440px] xs:h-[480px] sm:h-[520px] rounded-[28px] sm:rounded-[32px] overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-end p-5 sm:p-8 select-none"
                >
                  <img 
                    src={pubImages[idx % pubImages.length]} 
                    alt={pub.title} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent" />

                  <div className="relative z-10 space-y-2 sm:space-y-3">
                    <span className="text-xs font-bold text-[#8FC02A] block font-sans">
                      {pub.type} &bull; {pub.pages}
                    </span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white leading-snug">
                      {pub.title}
                    </h3>
                    <div className="text-xs font-semibold text-slate-300 font-sans">
                      Published {pub.date} &bull; Open Access
                    </div>
                    <p className="font-sans text-slate-200 text-xs sm:text-sm leading-relaxed font-normal line-clamp-2">
                      {pub.desc}
                    </p>
                    <div className="pt-2">
                      <button 
                        onClick={() => alert(`Downloading "${pub.title}" (PDF Brief)...`)}
                        className="w-full py-2.5 sm:py-3 rounded-full bg-[#1B96D8] hover:bg-[#147cb5] text-white text-xs font-bold transition-all shadow-md font-sans"
                      >
                        Download Full PDF
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Press Desk & Media Resources - Asymmetric Story Section with Graphics */}
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
        
        <HalftoneWaveGrid className="-top-8 -right-20 w-[450px] h-[300px] hidden sm:block" opacity={0.2} />

        <div className="lg:col-span-6 space-y-4 sm:space-y-6 relative z-10">
          <ScrollReveal animation="fade-right" duration={800}>
            <span className="text-xs font-bold text-[#1B96D8] block font-sans">
              Press Information Bureau
            </span>
            <h3 className="font-display font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-[3.25rem] text-slate-900 leading-[1.15] sm:leading-[1.1] tracking-tight">
              Official Media Kit &amp; Verified Fact Sheets
            </h3>
            <p className="font-sans text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
              Broadcast producers, investigative journalists, and development reporters can download verified organizational profiles, high-resolution photo galleries from field projects, and verified biographies of the 28 Board Members and Trustees.
            </p>

            <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-6 pt-2 font-sans text-xs">
              <div>
                <span className="text-xs font-bold text-slate-400 block">Desk Bureau</span>
                <span className="font-semibold text-slate-900 mt-1 block text-sm sm:text-base">Lagos Secretariat, Nigeria</span>
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 block">Press Inquiries</span>
                <span className="font-semibold text-[#1B96D8] mt-1 block text-sm sm:text-base">media@ocpinitiative.net</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
              <Button 
                onClick={() => alert('Downloading OCPI Press Kit & Verified Fact Sheets (ZIP)...')}
                variant="primary" 
                size="md"
                className="w-full sm:w-auto text-center justify-center"
              >
                Download Press Kit (ZIP)
              </Button>
              <Button 
                onClick={() => alert('Opening High-Resolution Video & Photo Gallery...')}
                variant="secondary" 
                size="md"
                className="w-full sm:w-auto text-center justify-center"
              >
                Field Media Gallery
              </Button>
            </div>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-6 relative z-10">
          <ScrollReveal animation="fade-left" delay={150} duration={800}>
            <DiagonalHatch color="#f59e0b" width={140} height={140} className="hidden sm:block absolute -top-8 -right-8" />
            <SparkleStar color="#1B96D8" size={26} className="hidden sm:block absolute -bottom-6 -left-6 animate-pulse" />

            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-[16/11] bg-slate-100 group">
              <img 
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop" 
                alt="Official Media Bureau" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </ScrollReveal>
        </div>
      </div>

    </div>
  );
};
