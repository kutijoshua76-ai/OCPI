import React from 'react';
import type { ViewTab } from '../../types';
import { Button } from '../Button';
import flourishBrush from '../../assets/flourish-brush.png';
import { SparkleStar, DiamondTwinkle, DiagonalHatch, RadialSunburst } from '../DecorativeOrnaments';
import { ScrollReveal } from '../ScrollReveal';

interface WelcomeViewProps {
  onSelectView: (view: ViewTab) => void;
  onOpenMembership: (track: 'family' | 'tech', subtype?: string) => void;
}

interface PillarData {
  tag: string;
  title: string;
  headline: string;
  points: string[];
  linkText: string;
  mainImg: string;
  topImg: string;
  bottomImg: string;
  reverse?: boolean;
}

export const WelcomeView: React.FC<WelcomeViewProps> = ({ onSelectView, onOpenMembership }) => {
  const pillarsList: PillarData[] = [
    {
      tag: 'PILLAR 01',
      title: 'Social Development',
      headline: 'Crisis mitigation, extreme minority participation portals, and community-based employable skills programs designed for immediate grassroots relief.',
      points: [
        'Community Emergency Response Units',
        'Eradicating Extreme Minority Exclusion',
        'Vocational Trade & Craft Certification'
      ],
      linkText: 'Explore Social Development',
      mainImg: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=800&auto=format&fit=crop',
      topImg: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&auto=format&fit=crop',
      bottomImg: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop',
      reverse: false
    },
    {
      tag: 'PILLAR 02',
      title: 'Social Enterprise',
      headline: 'Community-owned solutions fostering local unity and socioeconomic resilience through open fabrication labs and decentralized technologies.',
      points: [
        'Community Open Labs & Prototyping',
        'Appropriate Low-Bandwidth Toolkits',
        'Grassroots Enterprise Incubation'
      ],
      linkText: 'Explore Social Enterprise',
      mainImg: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop',
      topImg: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=600&auto=format&fit=crop',
      bottomImg: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop',
      reverse: true
    },
    {
      tag: 'PILLAR 03',
      title: 'Socioeconomic Investment',
      headline: 'Empowering the next generation through educational trust funds, rural school tech upgrades, and seed capital for local community cooperatives.',
      points: [
        'Seed Capital for Cooperative Societies',
        'Next-Gen STEM Digital Classrooms',
        'Generational Education Trust Grants'
      ],
      linkText: 'Explore Investment',
      mainImg: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop',
      topImg: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop',
      bottomImg: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&auto=format&fit=crop',
      reverse: false
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 lg:space-y-36 py-6 sm:py-10 bg-white relative">
      
      {/* Top Header with Floating Sparkles & Hatches */}
      <ScrollReveal animation="fade-up">
        <div className="relative text-center max-w-4xl mx-auto px-4">
          
          <SparkleStar color="#f59e0b" size={26} className="hidden sm:block absolute -top-6 left-8 animate-pulse" />
          <DiamondTwinkle color="#1B96D8" size={24} className="hidden sm:block absolute top-4 right-10" />
          <DiagonalHatch color="#8FC02A" width={100} height={100} className="hidden lg:block absolute -top-10 right-0" />

          <span className="text-[#1B96D8] font-bold text-xs sm:text-sm mb-2 sm:mb-3 inline-block font-sans">
            About Us
          </span>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[3.5rem] text-[#111827] leading-[1.15] sm:leading-[1.12] tracking-tight mb-3 sm:mb-5">
            Three Pillars of Sustainable Transformation
          </h2>

          <p className="font-sans text-slate-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Our integrated tripartite model empowers communities with rapid emergency consulting, collaborative social enterprises, and targeted socioeconomic investments.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none mx-auto">
            <Button
              onClick={() => onSelectView('what-we-do')}
              variant="primary"
              size="md"
              className="w-full sm:w-auto bg-[#059669] hover:bg-[#047857] hover:scale-105 transition-transform shadow-lg text-center justify-center"
            >
              Get Involved
            </Button>

            <Button
              onClick={() => onOpenMembership('family')}
              variant="primary"
              size="md"
              className="w-full sm:w-auto hover:scale-105 transition-transform shadow-lg text-center justify-center"
            >
              Donate Now
            </Button>
          </div>
        </div>
      </ScrollReveal>

      {/* The Three Pillars (Overlapping Circles with Graphic Ornaments) */}
      <div className="space-y-16 sm:space-y-24 lg:space-y-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {pillarsList.map((pillar, idx) => (
          <div 
            key={idx} 
            className={`relative flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-20 ${
              pillar.reverse ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Background Map Watermark - Hidden on mobile to prevent awkward blobs behind text */}
            <div 
              className={`hidden lg:block absolute top-0 pointer-events-none opacity-30 select-none w-[500px] h-[400px] ${
                pillar.reverse ? 'left-0' : 'right-0'
              }`}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Cpath fill='%23ece4da' d='M400,100 Q480,50 580,90 T680,180 T600,320 T480,380 T380,300 T400,100 Z'/%3E%3Cpath fill='%23f3ece4' d='M500,200 Q600,160 700,220 T620,400 T480,420 T420,320 Z' opacity='0.7'/%3E%3C/svg%3E")`,
                backgroundSize: '100% auto',
                backgroundRepeat: 'no-repeat'
              }}
            />

            {/* Overlapping Circular Photo Composition */}
            <div className="flex-1 w-full flex items-center justify-center relative">
              <ScrollReveal animation={pillar.reverse ? 'fade-left' : 'fade-right'} duration={800} className="w-full flex items-center justify-center relative">
                
                {/* Corner Hatching Accent Behind Circles */}
                <DiagonalHatch 
                  color={idx % 2 === 0 ? '#f59e0b' : '#1B96D8'} 
                  width={130} 
                  height={130} 
                  className={`hidden sm:block absolute ${pillar.reverse ? '-top-8 -left-8' : '-top-8 -right-8'}`} 
                />
                <RadialSunburst 
                  color="#8FC02A" 
                  size={140} 
                  className={`hidden sm:block absolute ${pillar.reverse ? '-bottom-10 -right-10' : '-bottom-10 -left-10'}`} 
                />

                <div className="relative w-full max-w-[280px] xs:max-w-[360px] sm:max-w-[460px] lg:max-w-[540px] aspect-square flex items-center justify-center select-none group">
                  
                  {/* Halftone Dot Matrix Pattern */}
                  <div 
                    className="absolute inset-0 pointer-events-none opacity-35"
                    style={{
                      backgroundImage: `radial-gradient(#94a3b8 1.5px, transparent 1.5px)`,
                      backgroundSize: '15px 15px',
                      borderRadius: '50%',
                      maskImage: 'radial-gradient(circle at center, black 45%, transparent 78%)',
                      WebkitMaskImage: 'radial-gradient(circle at center, black 45%, transparent 78%)',
                    }}
                  />

                  {/* Floating Decorative Colored Dots (Active on sm and larger viewports) */}
                  <div className="hidden sm:block absolute top-[22%] left-[2%] w-4 h-4 rounded-full bg-[#f97316] shadow-sm pointer-events-none z-30 animate-float-slow" />
                  <div className="hidden sm:block absolute top-[8%] left-[62%] w-4 h-4 rounded-full border-2 border-[#0ea5e9] pointer-events-none z-30 animate-float-reverse" />
                  <div className="hidden sm:block absolute bottom-[22%] right-[4%] w-3.5 h-3.5 rounded-full bg-[#10b981] shadow-sm pointer-events-none z-30 animate-float-slow" />

                  {/* Top-Right Secondary Circle */}
                  <div className="absolute z-10 top-2 right-2 sm:top-4 sm:right-4 w-24 h-24 xs:w-32 xs:h-32 sm:w-48 sm:h-48 lg:w-52 lg:h-52 rounded-full overflow-hidden border-[3px] sm:border-[5px] border-white shadow-xl bg-slate-100 group-hover:scale-105 group-hover:-translate-y-1 transition-transform duration-500">
                    <img
                      src={pillar.topImg}
                      alt={pillar.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Bottom-Left Accent Circle */}
                  <div className="absolute z-10 bottom-2 left-2 sm:bottom-4 sm:left-4 w-18 h-18 xs:w-24 xs:h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden border-[2.5px] sm:border-[4px] border-white shadow-lg bg-slate-100 group-hover:scale-105 group-hover:translate-y-1 transition-transform duration-500">
                    <img
                      src={pillar.bottomImg}
                      alt={pillar.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Main Center Circle */}
                  <div className="relative z-20 w-40 h-40 xs:w-48 xs:h-48 sm:w-72 sm:h-72 lg:w-[320px] lg:h-[320px] rounded-full overflow-hidden border-[4px] sm:border-[6px] border-white shadow-2xl bg-slate-100 group-hover:scale-105 transition-transform duration-700">
                    <img
                      src={pillar.mainImg}
                      alt={pillar.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                </div>
              </ScrollReveal>
            </div>

            {/* Text & Content Column */}
            <div className="flex-1 w-full space-y-4 sm:space-y-6 z-10 relative">
              <ScrollReveal animation={pillar.reverse ? 'fade-right' : 'fade-left'} delay={150} duration={800}>
                
                <SparkleStar color="#f59e0b" size={24} className="hidden sm:block absolute -top-6 right-8 animate-pulse" />

                <span className="text-xs font-bold text-[#1B96D8] block font-sans">
                  {pillar.tag}
                </span>

                <h3 className="font-display font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-[2.85rem] text-[#111827] leading-[1.18] sm:leading-[1.12]">
                  {pillar.title}
                </h3>

                <p className="font-sans text-sm sm:text-base lg:text-lg text-slate-700 font-normal leading-relaxed">
                  {pillar.headline}
                </p>

                <div className="space-y-2.5 sm:space-y-3 pt-1 sm:pt-2">
                  {pillar.points.map((point, i) => (
                    <div key={i} className="flex items-start sm:items-center gap-3 text-xs sm:text-sm md:text-base text-slate-700 font-medium">
                      <span className="w-2 h-2 rounded-full bg-[#8FC02A] shrink-0 mt-1.5 sm:mt-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 sm:pt-4">
                  <button
                    onClick={() => onSelectView('what-we-do')}
                    className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#1B96D8] hover:text-[#147cb5] group transition-all"
                  >
                    <span className="underline underline-offset-4 decoration-[#1B96D8]/40 group-hover:decoration-[#1B96D8]">
                      {pillar.linkText}
                    </span>
                    <span className="group-hover:translate-x-1.5 transition-transform">&rarr;</span>
                  </button>
                </div>

              </ScrollReveal>
            </div>

          </div>
        ))}
      </div>

      {/* Structured & Accredited Fellowship Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-4 relative">
        <ScrollReveal animation="fade-up" duration={900}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              
              <span className="text-xs font-bold text-[#1B96D8] block font-sans">
                Structured &amp; Accredited Program
              </span>

              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[3.25rem] xl:text-[3.75rem] text-[#111827] leading-[1.12] sm:leading-[1.08] tracking-tight">
                Structured &amp; <span className="italic font-normal text-[#1B96D8]">Accredited</span><br />
                Certified Fellowship &amp;<br />
                Leadership Training.
              </h2>

            <p className="font-sans text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              Our flagship fellowship provides intensive capacity-building for grassroots organizers, educators, and field researchers. Graduating fellows receive accredited credentials recognized across African academic and developmental institutions.
            </p>

            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-1">
              <strong className="text-slate-900 block font-semibold mb-0.5">Joint Research Group (JRG) Curated Curriculum</strong>
              Curated in direct collaboration with university faculty, JEOLINKS Corporate Learning, and field practitioners.
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Button 
                onClick={() => onOpenMembership('family', 'internship')}
                variant="primary"
                size="md"
                className="w-full sm:w-auto text-center justify-center"
              >
                Apply for 2026/2027 Cohort
              </Button>
              <Button 
                onClick={() => onSelectView('governance')}
                variant="secondary"
                size="md"
                className="w-full sm:w-auto text-center justify-center"
              >
                View Academic Governance
              </Button>
            </div>

          </div>

          <div className="lg:col-span-6 flex items-center justify-center relative">
            
            {/* Delicate Corner Sunburst Behind Photo */}
            <RadialSunburst color="#f59e0b" size={160} className="absolute -top-10 -left-10" />
            <SparkleStar color="#1B96D8" size={28} className="absolute -bottom-6 -right-6 animate-pulse" />

            <div className="relative w-full max-w-[560px] rounded-[36px] overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-[16/11] bg-slate-900 group select-none">
              
              <img
                src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1200&auto=format&fit=crop"
                alt="African Culture & Leadership"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Concentric Arch Linear Vector Graphic */}
              <svg 
                viewBox="0 0 160 220" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-40 sm:w-52 h-auto absolute top-0 right-0 pointer-events-none drop-shadow-md"
              >
                {[...Array(14)].map((_, i) => (
                  <path
                    key={i}
                    d={`M ${15 + i * 5} 0 V 130 A ${65 - i * 5} ${65 - i * 5} 0 0 0 ${145 - i * 5} 130 V 0`}
                    stroke="rgba(255, 255, 255, 0.75)"
                    strokeWidth="1.5"
                  />
                ))}
              </svg>

              {/* Concentric Arc Lines */}
              <svg 
                viewBox="0 0 100 100" 
                fill="none" 
                className="w-20 sm:w-24 h-auto absolute -bottom-2 -right-2 pointer-events-none opacity-60"
              >
                {[...Array(6)].map((_, i) => (
                  <circle key={i} cx="100" cy="100" r={20 + i * 12} stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" fill="none" />
                ))}
              </svg>

              <div className="absolute top-[30%] left-[10%] w-2.5 h-2.5 rounded-full bg-[#f59e0b] shadow-lg animate-pulse" />
              <div className="absolute bottom-[25%] left-[18%] w-2 h-2 rounded-full bg-[#f59e0b] shadow-lg animate-pulse" />

            </div>
          </div>

        </div>
        </ScrollReveal>

        {/* Bottom Brush Ribbon */}
        <div className="pt-4 sm:pt-8 overflow-visible relative z-20 w-full">
          <img 
            src={flourishBrush} 
            alt="Golden brush flourish" 
            className="w-full h-auto max-w-[1240px] select-none pointer-events-none drop-shadow-sm -translate-x-2 sm:-translate-x-4 lg:-translate-x-6"
          />
        </div>

      </div>

    </div>
  );
};
