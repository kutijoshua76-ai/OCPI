import React from 'react';
import { Button } from '../Button';
import { SparkleStar, DiamondTwinkle, DiagonalHatch, RadialSunburst, HalftoneWaveGrid } from '../DecorativeOrnaments';
import { ScrollReveal } from '../ScrollReveal';

interface WhereWeWorkViewProps {
  onOpenMembership: (track: 'family' | 'tech', subtype?: string) => void;
}

export const WhereWeWorkView: React.FC<WhereWeWorkViewProps> = ({ onOpenMembership }) => {
  const regionalHubs = [
    { 
      zone: "South West Hub", 
      location: "Lagos & Ibadan Secretariat", 
      focus: "Central Coordination & Open Labs Fabrication", 
      count: "4 Councils",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=600&auto=format&fit=crop"
    },
    { 
      zone: "North Central Hub", 
      location: "Abuja FCT & Jos Regional Desk", 
      focus: "Policy Alignment & Pan-African Relations", 
      count: "3 Councils",
      image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=600&auto=format&fit=crop"
    },
    { 
      zone: "North West Hub", 
      location: "Kano & Kaduna Agricultural Center", 
      focus: "Smallholder Tech & Cold-Chain Logistics", 
      count: "3 Councils",
      image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?q=80&w=600&auto=format&fit=crop"
    },
    { 
      zone: "South South Hub", 
      location: "Port Harcourt & Calabar Desk", 
      focus: "Coastal Eco-Habitat & Energy Resilience", 
      count: "3 Councils",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop"
    },
    { 
      zone: "South East Hub", 
      location: "Enugu & Owerri Innovation Hub", 
      focus: "Youth Enterprise & Vocational Certification", 
      count: "3 Councils",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop"
    },
    { 
      zone: "North East Hub", 
      location: "Maiduguri & Bauchi Taskforce", 
      focus: "Crisis Emergency Response & Minority Relief", 
      count: "2 Councils",
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=600&auto=format&fit=crop"
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 lg:space-y-28 py-4 sm:py-6 relative">
      
      {/* Editorial Overview Section (Asymmetric Split with Graphics) */}
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
        <HalftoneWaveGrid className="-top-10 -left-20 w-[450px] h-[300px]" opacity={0.2} />

        <div className="lg:col-span-6 space-y-4 sm:space-y-6 relative z-10">
          <ScrollReveal animation="fade-right" duration={800}>
            <span className="text-xs font-bold text-[#1B96D8] block font-sans">
              Our Footprint &amp; Strategy
            </span>
            <h2 className="font-display font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-[3.25rem] text-slate-900 leading-[1.15] sm:leading-[1.1] tracking-tight">
              Decentralized Community Consultation Councils
            </h2>
            <p className="font-sans text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-normal">
              We establish permanent, community-led consultation platforms backed by scientific research from the Joint Research Group (JRG). Each regional hub identifies local emergencies, trains certified fellows, and runs an open maker lab.
            </p>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-2">
              <div>
                <div className="font-display font-bold text-2xl sm:text-4xl text-[#1B96D8] mb-0.5">18</div>
                <div className="text-xs font-semibold text-slate-700">Regional Councils</div>
              </div>
              <div>
                <div className="font-display font-bold text-2xl sm:text-4xl text-[#8FC02A] mb-0.5">3,400+</div>
                <div className="text-xs font-semibold text-slate-700">Graduated Fellows</div>
              </div>
            </div>

            <div className="pt-2">
              <Button
                onClick={() => onOpenMembership('family', 'visit')}
                variant="primary"
                size="md"
                className="w-full sm:w-auto text-center justify-center"
              >
                Schedule a Field Delegation Visit
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
                src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1200&auto=format&fit=crop" 
                alt="Field Secretariat Desk" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Regional Consultation Councils Grid: Clean Full-Bleed Cards (No Top Pill Tags) */}
      <div className="relative space-y-8 sm:space-y-10">
        
        <HalftoneWaveGrid className="-top-12 -right-20 w-[500px] h-[350px]" opacity={0.25} />
        <SparkleStar color="#f59e0b" size={28} className="hidden sm:block absolute -top-8 right-24 animate-pulse" />
        <DiamondTwinkle color="#1B96D8" size={22} className="hidden sm:block absolute top-10 right-4" />

        <ScrollReveal animation="fade-up">
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold text-[#8FC02A] block mb-1.5 sm:mb-2 font-sans">
              Pan-African Field Network
            </span>
            <h3 className="font-display font-bold text-2xl xs:text-3xl sm:text-4xl text-slate-900 leading-tight">
              18 Regional Consultation Councils
            </h3>
            <p className="font-sans text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed mt-2 font-normal">
              Every regional hub coordinates local elders, women's cooperatives, university fellows, and youth innovators to deploy localized interventions.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {regionalHubs.map((hub, idx) => (
            <ScrollReveal key={idx} animation="fade-up" delay={(idx % 3) * 120} duration={700}>
              <div className="relative group h-full">
                
                {idx === 0 && <RadialSunburst color="#f59e0b" size={130} className="hidden sm:block absolute -top-8 -left-8" />}
                {idx === 2 && <DiagonalHatch color="#1B96D8" width={120} height={120} className="hidden sm:block absolute -top-6 -right-6" />}
                {idx === 4 && <SparkleStar color="#8FC02A" size={26} className="hidden sm:block absolute -bottom-6 -left-6 animate-pulse" />}

                <div 
                  className="relative h-[440px] sm:h-[480px] rounded-[32px] overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-end p-8 select-none"
                >
                  <img 
                    src={hub.image} 
                    alt={hub.location} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/45 to-transparent" />

                  <div className="relative z-10 space-y-2">
                    <span className="text-xs font-bold text-[#1B96D8] block font-sans">
                      {hub.zone} &bull; {hub.count}
                    </span>
                    <h4 className="font-display font-bold text-white text-2xl leading-snug">
                      {hub.location}
                    </h4>
                    <p className="font-sans text-slate-200 text-xs sm:text-sm leading-relaxed font-normal">
                      {hub.focus}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

    </div>
  );
};
