import React from 'react';
import { RESEARCH_UNITS, ACADEMIC_STAFF } from '../../data/ocpiData';
import { Button } from '../Button';
import { SparkleStar, DiamondTwinkle, DiagonalHatch, RadialSunburst, HalftoneWaveGrid } from '../DecorativeOrnaments';
import { ScrollReveal } from '../ScrollReveal';

interface ResearchViewProps {
  onOpenMembership: (track: 'family' | 'tech', subtype?: string) => void;
}

export const ResearchView: React.FC<ResearchViewProps> = ({ onOpenMembership }) => {
  const unitImages = [
    "https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=600&auto=format&fit=crop", // Development Resource
    "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop", // Educational Resource
    "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=600&auto=format&fit=crop", // Agricultural Resource
    "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=600&auto=format&fit=crop", // Social Development
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=600&auto=format&fit=crop", // Knowledge Management
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop", // Technology Resource
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop", // Food Security
  ];

  return (
    <div className="space-y-16 sm:space-y-24 lg:space-y-28 py-4 sm:py-6 relative">
      
      {/* 7 Specialized Units Grid: Tall Full-Bleed Visual Cards (Clean, No Top Clutter) */}
      <div className="relative space-y-8 sm:space-y-10">
        
        <HalftoneWaveGrid className="-top-12 -left-20 w-[500px] h-[350px]" opacity={0.25} />
        <SparkleStar color="#f59e0b" size={28} className="hidden sm:block absolute -top-8 right-24 animate-pulse" />
        <DiamondTwinkle color="#1B96D8" size={24} className="hidden sm:block absolute top-12 right-6" />

        <ScrollReveal animation="fade-up">
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold text-[#1B96D8] block mb-1.5 sm:mb-2 font-sans">
              Scientific Divisions
            </span>
            <h3 className="font-display font-bold text-2xl xs:text-3xl sm:text-4xl text-slate-900 leading-tight">
              7 Specialized Investigative Units
            </h3>
            <p className="font-sans text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed mt-2 font-normal">
              Autonomous research units operating under university faculty supervision to produce empirical data, policy whitepapers, and verifiable field methodologies.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {RESEARCH_UNITS.map((unit, idx) => (
            <ScrollReveal key={unit.id} animation="fade-up" delay={(idx % 3) * 120} duration={700}>
              <div className="relative group h-full">
                {idx === 1 && <RadialSunburst color="#8FC02A" size={130} className="hidden sm:block absolute -top-8 -left-8" />}
                {idx === 4 && <DiagonalHatch color="#f59e0b" width={120} height={120} className="hidden sm:block absolute -top-6 -right-6" />}

                <div 
                  className="relative h-[460px] sm:h-[500px] rounded-[32px] overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-end p-8 select-none"
                >
                  <img 
                    src={unitImages[idx % unitImages.length]} 
                    alt={unit.name} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/45 to-transparent" />

                  <div className="relative z-10 space-y-2">
                    <span className="text-xs font-bold text-[#8FC02A] block font-sans">
                      Unit 0{idx + 1} &bull; {unit.publicationsCount} Papers
                    </span>
                    <h3 className="font-display font-bold text-2xl text-white leading-snug">
                      {unit.name}
                    </h3>
                    <p className="font-sans text-slate-200 text-xs sm:text-sm leading-relaxed font-normal">
                      {unit.focus}
                    </p>
                    <div className="pt-2 border-t border-white/20 flex items-center justify-between text-xs">
                      <span className="text-slate-300">
                        Lead: <strong className="text-white">{unit.lead}</strong>
                      </span>
                      <span className="text-[#1B96D8] font-bold">
                        Repository &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Academic Staff Directory (11 Fellows) */}
      <div className="relative space-y-6">
        
        <ScrollReveal animation="fade-up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-2">
            <div>
              <span className="text-xs sm:text-sm font-bold text-[#1B96D8] block mb-2 font-sans">
                Academic Governance
              </span>
              <h3 className="font-display font-bold text-3xl sm:text-4xl text-slate-900">
                Academic Staff Directory &amp; Campus Fellows
              </h3>
              <p className="font-sans text-slate-600 text-sm sm:text-base mt-2 font-normal">
                Distinguished researchers and research directors spanning top African universities.
              </p>
            </div>

            <Button 
              onClick={() => onOpenMembership('family', 'partner')}
              variant="primary"
              size="md"
              className="w-full sm:w-auto shrink-0 text-center justify-center"
            >
              Apply for Research Fellowship
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={150}>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm font-sans">
              <thead>
                <tr className="border-b border-slate-200 text-xs text-slate-500 font-semibold">
                  <th className="py-3.5 px-4 font-bold">Fellow / Scholar</th>
                  <th className="py-3.5 px-4 font-bold">Academic Rank</th>
                  <th className="py-3.5 px-4 font-bold">Affiliated Campus</th>
                  <th className="py-3.5 px-4 font-bold">Primary Research Focus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {ACADEMIC_STAFF.map((staff, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-4 px-4 font-bold text-slate-900">
                      {staff.name}
                    </td>
                    <td className="py-4 px-4 text-slate-600 font-medium">
                      {staff.title}
                    </td>
                    <td className="py-4 px-4">
                      <span className="font-semibold text-slate-800">
                        {staff.campus}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-[#8FC02A] font-bold">
                      {staff.unit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>

      {/* Scholarly Collaboration Spotlight (Asymmetric Layout with Graphics) */}
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center pt-2 sm:pt-4">
        
        <HalftoneWaveGrid className="-top-8 -right-20 w-[450px] h-[300px]" opacity={0.2} />

        <div className="lg:col-span-6 space-y-4 sm:space-y-6 relative z-10">
          <ScrollReveal animation="fade-right" duration={800}>
            <span className="text-xs font-bold text-[#1B96D8] block font-sans">
              Scholarly Collaboration &amp; Datasets
            </span>
            <h3 className="font-display font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-[3.25rem] text-slate-900 leading-[1.15] sm:leading-[1.1] tracking-tight">
              Register for Community Consulting Research
            </h3>
            <p className="font-sans text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-normal">
              Postgraduate researchers, university faculties, and independent fellows can access OCPI field datasets, apply for empirical research grants, and commission action research studies in active regional hubs.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Button 
                onClick={() => onOpenMembership('family', 'partner')}
                variant="primary"
                size="md"
                className="w-full sm:w-auto text-center justify-center"
              >
                Register as Research Partner
              </Button>
              <Button 
                onClick={() => alert('Downloading JRG Methodology & Research Protocol Manual (PDF)...')}
                variant="secondary"
                size="md"
                className="w-full sm:w-auto text-center justify-center"
              >
                Download Protocol Guide
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
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop" 
                alt="Scholarly Collaboration" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </ScrollReveal>
        </div>
      </div>

    </div>
  );
};
