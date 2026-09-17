import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { WelcomeView } from '../components/views/WelcomeView';
import { Button } from '../components/Button';
import { SparkleStar, DiamondTwinkle, DiagonalHatch, RadialSunburst, HalftoneWaveGrid } from '../components/DecorativeOrnaments';
import { ScrollReveal } from '../components/ScrollReveal';

interface HomePageProps {
  onOpenMembership: (track: 'family' | 'tech', subtype?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenMembership }) => {
  return (
    <div className="space-y-16 sm:space-y-20 lg:space-y-28 pb-12 sm:pb-16 overflow-hidden">
      {/* Hero Banner */}
      <Hero
        onOpenMembership={onOpenMembership}
        onExploreResearch={() => window.location.href = '/research'}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 lg:space-y-28 relative">
        
        {/* Three Transformation Pillars */}
        <WelcomeView
          onSelectView={() => {}}
          onOpenMembership={onOpenMembership}
        />

        {/* SECTION PREVIEWS: Clean, Sleek Full-Bleed Vertical Cards (No Tags, No Arrows, Pure Immersive Photography) */}
        <div className="relative space-y-8 sm:space-y-12">
          
          {/* Decorative Background Graphics */}
          <HalftoneWaveGrid className="-top-16 -left-20 w-[600px] h-[350px]" opacity={0.25} />
          <SparkleStar color="#f59e0b" size={28} className="hidden sm:block absolute -top-8 right-16 animate-pulse" />
          <DiamondTwinkle color="#1B96D8" size={24} className="hidden sm:block absolute top-24 right-4" />
          <DiagonalHatch color="#f59e0b" width={140} height={140} className="hidden lg:block absolute -top-12 left-1/2" />
          
          <ScrollReveal animation="fade-up">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-10 items-end">
              <div className="lg:col-span-8 space-y-2 sm:space-y-3">
                <span className="text-xs font-bold text-[#1B96D8] block font-sans">
                  Explore OCPI Across Africa
                </span>
                <h2 className="font-display font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-[1.15] sm:leading-[1.1] tracking-tight">
                  Empowering Communities Through Evidence &amp; Action
                </h2>
              </div>
              <div className="lg:col-span-4 flex lg:justify-end w-full sm:w-auto">
                <Link to="/who-we-are" className="w-full sm:w-auto">
                  <Button variant="secondary" size="md" className="w-full sm:w-auto text-center justify-center">
                    View Full Architecture &rarr;
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* 4 Tall Full-Bleed Image Vertical Cards (Image 3 Style - Clean, No Clutter, No Arrows, No Pill Tags) */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Governance & Board */}
            <ScrollReveal animation="fade-up" delay={0} duration={750}>
              <div className="relative group h-full">
                <RadialSunburst color="#f59e0b" size={130} className="absolute -top-8 -left-8 group-hover:scale-110 transition-transform duration-500" />
                
                <Link 
                  to="/who-we-are"
                  className="relative h-[440px] sm:h-[480px] rounded-[32px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-end p-8 select-none block"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&w=800&auto=format&fit=crop" 
                    alt="Governance & Board"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />

                  <div className="relative z-10 space-y-2">
                    <h3 className="font-display font-bold text-2xl text-white leading-snug tracking-tight">
                      Governance &amp; Board
                    </h3>
                    <p className="font-sans text-slate-200 text-xs sm:text-sm font-normal leading-relaxed">
                      28 distinguished leaders, executive directors, and 3 statutory sub-committees steering institutional policy.
                    </p>
                  </div>
                </Link>
              </div>
            </ScrollReveal>

            {/* Card 2: Joint Research Group */}
            <ScrollReveal animation="fade-up" delay={150} duration={750}>
              <div className="relative group h-full">
                <DiagonalHatch color="#1B96D8" width={110} height={110} className="absolute -top-6 -right-6 group-hover:scale-110 transition-transform duration-500" />
                
                <Link 
                  to="/research"
                  className="relative h-[440px] sm:h-[480px] rounded-[32px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-end p-8 select-none block"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=800&auto=format&fit=crop" 
                    alt="Joint Research Group"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />

                  <div className="relative z-10 space-y-2">
                    <h3 className="font-display font-bold text-2xl text-white leading-snug tracking-tight">
                      Joint Research Group
                    </h3>
                    <p className="font-sans text-slate-200 text-xs sm:text-sm font-normal leading-relaxed">
                      7 Specialized Investigative Units and 11 academic campus fellows providing empirical evidence.
                    </p>
                  </div>
                </Link>
              </div>
            </ScrollReveal>

            {/* Card 3: Where We Work */}
            <ScrollReveal animation="fade-up" delay={300} duration={750}>
              <div className="relative group h-full">
                <SparkleStar color="#f97316" size={26} className="absolute -top-4 -left-4 animate-pulse" />
                
                <Link 
                  to="/where-we-work"
                  className="relative h-[440px] sm:h-[480px] rounded-[32px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-end p-8 select-none block"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1528747045269-390fe33c19f2?q=80&w=800&auto=format&fit=crop" 
                    alt="Where We Work"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />

                  <div className="relative z-10 space-y-2">
                    <h3 className="font-display font-bold text-2xl text-white leading-snug tracking-tight">
                      Where We Work
                    </h3>
                    <p className="font-sans text-slate-200 text-xs sm:text-sm font-normal leading-relaxed">
                      18 regional consultation councils and field headquarters operating across Nigeria and Africa.
                    </p>
                  </div>
                </Link>
              </div>
            </ScrollReveal>

            {/* Card 4: Events & Awards */}
            <ScrollReveal animation="fade-up" delay={450} duration={750}>
              <div className="relative group h-full">
                <RadialSunburst color="#8FC02A" size={130} className="absolute -bottom-8 -right-8 group-hover:scale-110 transition-transform duration-500" />
                
                <Link 
                  to="/events"
                  className="relative h-[440px] sm:h-[480px] rounded-[32px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-end p-8 select-none block"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop" 
                    alt="Events & Awards"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />

                  <div className="relative z-10 space-y-2">
                    <h3 className="font-display font-bold text-2xl text-white leading-snug tracking-tight">
                      Events &amp; Awards
                    </h3>
                    <p className="font-sans text-slate-200 text-xs sm:text-sm font-normal leading-relaxed">
                      Community Open Labs, Consulting clinics, and Teaching with Technology Awards ceremonies.
                    </p>
                  </div>
                </Link>
              </div>
            </ScrollReveal>

          </div>
        </div>

        {/* Publications Spotlight: Asymmetric Editorial Split Section (Image 4 Style, No Boxed Container) */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center pt-4 sm:pt-6">
          
          <HalftoneWaveGrid className="-top-8 -left-20 w-[450px] h-[300px]" opacity={0.2} />

          <div className="lg:col-span-6 relative">
            <ScrollReveal animation="fade-right" duration={800}>
              <DiagonalHatch color="#f59e0b" width={150} height={150} className="hidden sm:block absolute -top-8 -left-8" />
              <SparkleStar color="#1B96D8" size={28} className="hidden sm:block absolute -bottom-6 right-8 animate-pulse" />

              <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-[16/11] bg-slate-100 group">
                <img 
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop" 
                  alt="Publications & Official Media" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6 space-y-4 sm:space-y-6 relative z-10">
            <ScrollReveal animation="fade-left" delay={150} duration={800}>
              <span className="text-xs font-bold text-[#1B96D8] block font-sans">
                Official Media &amp; Publications Desk
              </span>
              <h2 className="font-display font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-[3.25rem] text-slate-900 leading-[1.15] sm:leading-[1.1] tracking-tight">
                Download Annual Reports &amp; Policy Briefs
              </h2>
              <p className="font-sans text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-normal">
                Audited financial sustainability statements and JRG research whitepapers available for free public download to scholars, developmental partners, and media organizations.
              </p>
              <div className="pt-2">
                <Link to="/media" className="w-full sm:w-auto inline-block">
                  <Button 
                    variant="primary" 
                    size="md" 
                    className="w-full sm:w-auto text-center justify-center"
                  >
                    Visit Media &amp; Publications Desk
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </div>
  );
};
