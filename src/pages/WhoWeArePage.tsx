import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { GovernanceView } from '../components/views/GovernanceView';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { SparkleStar, DiamondTwinkle, DiagonalHatch, RadialSunburst, HalftoneWaveGrid } from '../components/DecorativeOrnaments';
import { ScrollReveal } from '../components/ScrollReveal';

export const WhoWeArePage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen overflow-hidden">
      <PageHeader
        badge="Institutional Governance"
        title="Who We Are & Board of Directors"
        subtitle="Learn about the leadership, founding charter, governing council, and standing sub-committees steering One Community Platform Initiative across Africa."
        breadcrumb="Who We Are"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 lg:space-y-28 pb-16 sm:pb-24 relative">
        
        {/* =========================================================================
            SECTION 1: OUR MISSION (Asymmetric Split)
            ========================================================================= */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          <HalftoneWaveGrid className="-top-12 -left-20 w-[450px] h-[280px]" opacity={0.2} />

          <div className="lg:col-span-6 space-y-4 sm:space-y-6 relative z-10">
            <ScrollReveal animation="fade-right" duration={800}>
              <span className="text-xs font-bold text-[#1B96D8] block font-sans">
                About Us
              </span>
              <h2 className="font-display font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-[3.25rem] text-slate-900 leading-[1.15] sm:leading-[1.1] tracking-tight">
                Our Mission
              </h2>
              <p className="font-sans text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-normal">
                To bridge the opportunity divide by deploying empirical research (JRG), community-owned fabrication labs, accredited leadership fellowships, and emergency consulting taskforces that deliver immediate relief and generational self-reliance.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <Link to="/what-we-do" className="w-full sm:w-auto">
                  <Button variant="primary" size="md" className="w-full sm:w-auto text-center justify-center">
                    Explore What We Do
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6 relative z-10">
            <ScrollReveal animation="fade-left" delay={150} duration={800}>
              <DiagonalHatch color="#f59e0b" width={140} height={140} className="hidden sm:block absolute -top-8 -right-8" />
              <SparkleStar color="#1B96D8" size={26} className="hidden sm:block absolute -bottom-6 -left-6 animate-pulse" />
              <DiamondTwinkle color="#f97316" size={22} className="hidden sm:block absolute -top-6 left-1/3" />

              <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-[16/11] bg-slate-100 group">
                <img 
                  src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1200&auto=format&fit=crop" 
                  alt="Our Mission in Action" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* =========================================================================
            SECTION 2: OUR VISION (Reversed Asymmetric Split)
            ========================================================================= */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 order-2 lg:order-1 relative z-10">
            <ScrollReveal animation="fade-right" duration={800}>
              <RadialSunburst color="#8FC02A" size={150} className="hidden sm:block absolute -top-8 -left-8" />
              <SparkleStar color="#f59e0b" size={28} className="hidden sm:block absolute -bottom-6 right-8 animate-pulse" />

              <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-[16/11] bg-slate-100 group">
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop" 
                  alt="Our Vision for Africa" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-4 sm:space-y-6 relative z-10">
            <ScrollReveal animation="fade-left" delay={150} duration={800}>
              <span className="text-xs font-bold text-[#8FC02A] block font-sans">
                Pan-African Horizon
              </span>
              <h2 className="font-display font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-[3.25rem] text-slate-900 leading-[1.15] sm:leading-[1.1] tracking-tight">
                Our Vision
              </h2>
              <p className="font-sans text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-normal">
                A self-reliant, equitable Africa where marginalized grassroots communities possess the technological tools, accredited skills, and civic agency to drive sustainable socioeconomic growth and preserve indigenous unity.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <Link to="/join" className="w-full sm:w-auto">
                  <Button variant="primary" size="md" className="w-full sm:w-auto text-center justify-center">
                    Join Our Family
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* =========================================================================
            SECTION 3: OUR CORE VALUES (Asymmetric Split)
            ========================================================================= */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 relative z-10">
            <ScrollReveal animation="fade-right" duration={800}>
              <span className="text-xs font-bold text-[#1B96D8] block font-sans">
                Civic Integrity
              </span>
              <h2 className="font-display font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-[3.25rem] text-slate-900 leading-[1.15] sm:leading-[1.1] tracking-tight">
                Our Core Values
              </h2>
              <div className="space-y-3 sm:space-y-4 font-sans text-slate-700">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#1B96D8] mt-2 shrink-0" />
                  <p className="text-xs sm:text-sm md:text-base font-medium"><strong>Grassroots Inclusivity:</strong> Direct consultation with remote rural, youth, and women cooperatives.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#8FC02A] mt-2 shrink-0" />
                  <p className="text-xs sm:text-sm md:text-base font-medium"><strong>Fiduciary Transparency:</strong> Annual public audited disclosures and rigorous statutory committee oversight.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#1B96D8] mt-2 shrink-0" />
                  <p className="text-xs sm:text-sm md:text-base font-medium"><strong>Scientific Integrity:</strong> Empirical data and whitepapers driven by university faculty fellows in the JRG.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#8FC02A] mt-2 shrink-0" />
                  <p className="text-xs sm:text-sm md:text-base font-medium"><strong>Community Ownership:</strong> Solutions designed to be fully owned, maintained, and operated locally.</p>
                </div>
              </div>
              <div className="pt-2">
                <Link to="/media" className="w-full sm:w-auto inline-block">
                  <Button variant="secondary" size="md" className="w-full sm:w-auto text-center justify-center">
                    Download Charter Brief (PDF)
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6 relative z-10">
            <ScrollReveal animation="fade-left" delay={150} duration={800}>
              <DiagonalHatch color="#1B96D8" width={150} height={150} className="hidden sm:block absolute -top-8 -right-8" />
              <DiamondTwinkle color="#f59e0b" size={24} className="hidden sm:block absolute -bottom-6 -left-6" />

              <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-[16/11] bg-slate-100 group">
                <img 
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1200&auto=format&fit=crop" 
                  alt="OCPI Community Values" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* =========================================================================
            SECTION 4: FOUNDING CHARTER & MANDATE (Asymmetric Editorial Split, No Box Container)
            ========================================================================= */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 relative">
            <ScrollReveal animation="fade-right" duration={800}>
              <RadialSunburst color="#f59e0b" size={160} className="hidden sm:block absolute -top-10 -left-10" />
              <SparkleStar color="#8FC02A" size={28} className="hidden sm:block absolute bottom-8 right-16 animate-pulse" />

              <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-[16/11] bg-slate-100 group">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop" 
                  alt="OCPI Council in Session" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6 space-y-4 sm:space-y-6 relative z-10">
            <ScrollReveal animation="fade-left" delay={150} duration={800}>
              <span className="text-xs sm:text-sm font-bold text-[#1B96D8] block font-sans">
                Founding Charter &amp; Mandate
              </span>
              <h2 className="font-display font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-[3.25rem] text-slate-900 leading-[1.15] sm:leading-[1.1] tracking-tight">
                A Tripartite Structure for Pan-African Impact
              </h2>
              <p className="font-sans text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-normal">
                One Community Platform Initiative (OCPI) operates under a statutory constitution established to align empirical university research with real-time community emergency interventions and enterprise incubation. Our 28-member board ensures strict fiduciary oversight, non-partisan representation, and scientific excellence across all African hubs.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <Link to="/join" className="w-full sm:w-auto">
                  <Button 
                    variant="primary" 
                    size="md" 
                    className="w-full sm:w-auto text-center justify-center"
                  >
                    Join Our Institutional Family
                  </Button>
                </Link>
                <Link to="/media" className="w-full sm:w-auto">
                  <Button 
                    variant="secondary" 
                    size="md" 
                    className="w-full sm:w-auto text-center justify-center"
                  >
                    Download Charter Brief (PDF)
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* Board of Directors & Sub-Committees */}
        <GovernanceView />

      </div>
    </div>
  );
};
