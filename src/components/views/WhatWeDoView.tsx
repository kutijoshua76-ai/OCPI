import React from 'react';
import { Button } from '../Button';
import { SparkleStar, DiamondTwinkle, DiagonalHatch, RadialSunburst, HalftoneWaveGrid } from '../DecorativeOrnaments';
import { ScrollReveal } from '../ScrollReveal';

interface WhatWeDoViewProps {
  onOpenDonate: () => void;
  onOpenMembership: (track: 'family' | 'tech', subtype?: string) => void;
}

export const WhatWeDoView: React.FC<WhatWeDoViewProps> = ({ onOpenDonate, onOpenMembership }) => {
  return (
    <div className="space-y-16 sm:space-y-24 lg:space-y-28 py-4 sm:py-6 relative">
      
      {/* =========================================================================
          PILLAR 01: SOCIAL DEVELOPMENT (With Hatching & Sparkles)
          ========================================================================= */}
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
        <HalftoneWaveGrid className="-top-10 -left-20 w-[450px] h-[300px]" opacity={0.2} />

        <div className="lg:col-span-6 space-y-4 sm:space-y-6 relative z-10">
          <ScrollReveal animation="fade-right" duration={800}>
            <span className="text-xs font-bold text-[#1B96D8] block font-sans">
              Pillar 01 &bull; Immediate Relief &amp; Skills
            </span>
            <h2 className="font-display font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-[3.25rem] text-slate-900 leading-[1.15] sm:leading-[1.1] tracking-tight">
              Social Development
            </h2>
            <p className="font-sans text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-normal">
              Crisis mitigation, extreme minority participation portals, and community-based employable skills programs designed for immediate grassroots relief.
            </p>

            <div className="space-y-2.5 sm:space-y-3 font-sans text-slate-700 pt-1 sm:pt-2">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#1B96D8] mt-1.5 sm:mt-2 shrink-0" />
                <p className="text-xs sm:text-sm md:text-base font-medium"><strong>Community Emergency Response:</strong> Rapid taskforces providing field diagnostics and relief coordination.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#8FC02A] mt-1.5 sm:mt-2 shrink-0" />
                <p className="text-xs sm:text-sm md:text-base font-medium"><strong>Minority Integration:</strong> Proactive portals ensuring isolated linguistic and rural populations have direct agency.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#1B96D8] mt-1.5 sm:mt-2 shrink-0" />
                <p className="text-xs sm:text-sm md:text-base font-medium"><strong>Employable Skills:</strong> Vocational certification in solar maintenance, digital tools, and agro-processing.</p>
              </div>
            </div>

            <div className="pt-2">
              <Button 
                onClick={() => onOpenMembership('family', 'internship')}
                variant="primary" 
                size="md" 
                className="w-full sm:w-auto text-center justify-center"
              >
                Enroll in Skills Cohort
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
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop" 
                alt="Social Development" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* =========================================================================
          PILLAR 02: SOCIAL ENTERPRISE (With Radial Sunburst & Twinkles)
          ========================================================================= */}
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1 relative z-10">
          <ScrollReveal animation="fade-right" duration={800}>
            <RadialSunburst color="#8FC02A" size={150} className="hidden sm:block absolute -top-8 -left-8" />
            <DiamondTwinkle color="#f97316" size={24} className="hidden sm:block absolute -bottom-6 right-8" />

            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-[16/11] bg-slate-100 group">
              <img 
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200&auto=format&fit=crop" 
                alt="Social Enterprise" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2 space-y-4 sm:space-y-6 relative z-10">
          <ScrollReveal animation="fade-left" delay={150} duration={800}>
            <span className="text-xs font-bold text-[#8FC02A] block font-sans">
              Pillar 02 &bull; Open Fabrication &amp; Enterprise
            </span>
            <h2 className="font-display font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-[3.25rem] text-slate-900 leading-[1.15] sm:leading-[1.1] tracking-tight">
              Social Enterprise
            </h2>
            <p className="font-sans text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-normal">
              Community-owned solutions fostering local unity and socioeconomic resilience through open fabrication labs and decentralized technologies.
            </p>

            <div className="space-y-2.5 sm:space-y-3 font-sans text-slate-700 pt-1 sm:pt-2">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#8FC02A] mt-1.5 sm:mt-2 shrink-0" />
                <p className="text-xs sm:text-sm md:text-base font-medium"><strong>Community Open Labs:</strong> Physical maker spaces where youth prototype with microcontrollers and solar tools.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#1B96D8] mt-1.5 sm:mt-2 shrink-0" />
                <p className="text-xs sm:text-sm md:text-base font-medium"><strong>Offline Dashboards:</strong> Low-bandwidth software applications engineered for intermittent connectivity.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#8FC02A] mt-1.5 sm:mt-2 shrink-0" />
                <p className="text-xs sm:text-sm md:text-base font-medium"><strong>Cooperative Incubation:</strong> Sustainable micro-enterprises whose dividends sustain local water and clinic projects.</p>
              </div>
            </div>

            <div className="pt-2">
              <Button 
                onClick={() => onOpenMembership('tech', 'technician')}
                variant="primary" 
                size="md" 
                className="w-full sm:w-auto text-center justify-center"
              >
                Join Open Labs Team
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* =========================================================================
          PILLAR 03: SOCIOECONOMIC INVESTMENT (With Hatching & Sparkles)
          ========================================================================= */}
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 space-y-4 sm:space-y-6 relative z-10">
          <ScrollReveal animation="fade-right" duration={800}>
            <span className="text-xs font-bold text-[#1B96D8] block font-sans">
              Pillar 03 &bull; Socioeconomic Investment
            </span>
            <h2 className="font-display font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-[3.25rem] text-slate-900 leading-[1.15] sm:leading-[1.1] tracking-tight">
              Socioeconomic Investment
            </h2>
            <p className="font-sans text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-normal">
              Empowering the next generation through educational trust funds, rural school tech upgrades, and seed capital for local community cooperatives.
            </p>

            <div className="space-y-2.5 sm:space-y-3 font-sans text-slate-700 pt-1 sm:pt-2">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#1B96D8] mt-1.5 sm:mt-2 shrink-0" />
                <p className="text-xs sm:text-sm md:text-base font-medium"><strong>Seed Capital:</strong> Direct catalytic funding for smallholder agricultural cooperatives across Africa.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#8FC02A] mt-1.5 sm:mt-2 shrink-0" />
                <p className="text-xs sm:text-sm md:text-base font-medium"><strong>STEM Upgrades:</strong> Equipping rural primary schools with offline digital interactive learning kits.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#1B96D8] mt-1.5 sm:mt-2 shrink-0" />
                <p className="text-xs sm:text-sm md:text-base font-medium"><strong>Education Trust Grants:</strong> Long-term scholarships for promising researchers from underserved backgrounds.</p>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Button 
                onClick={onOpenDonate}
                variant="primary" 
                size="md" 
                className="w-full sm:w-auto text-center justify-center"
              >
                Pledge Investment Support
              </Button>
              <Button 
                onClick={() => onOpenMembership('family', 'partner')}
                variant="secondary" 
                size="md" 
                className="w-full sm:w-auto text-center justify-center"
              >
                Partner with Endowment
              </Button>
            </div>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-6 relative z-10">
          <ScrollReveal animation="fade-left" delay={150} duration={800}>
            <DiagonalHatch color="#1B96D8" width={140} height={140} className="hidden sm:block absolute -top-8 -right-8" />
            <SparkleStar color="#f59e0b" size={28} className="hidden sm:block absolute -bottom-6 -left-6 animate-pulse" />

            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-[16/11] bg-slate-100 group">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop" 
                alt="Socioeconomic Investment" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>

    </div>
  );
};
