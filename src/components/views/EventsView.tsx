import React from 'react';
import { UPCOMING_EVENTS } from '../../data/ocpiData';
import { Button } from '../Button';
import { SparkleStar, DiamondTwinkle, DiagonalHatch, RadialSunburst, HalftoneWaveGrid } from '../DecorativeOrnaments';
import { ScrollReveal } from '../ScrollReveal';

export const EventsView: React.FC = () => {
  const eventImages = [
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop", // Open Labs
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop", // Consulting Clinic
    "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop", // TTA Awards
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop"  // Pan-African Conference
  ];

  return (
    <div className="space-y-16 sm:space-y-24 lg:space-y-28 py-4 sm:py-6 relative">
      
      {/* Events Grid: Tall Full-Bleed Visual Cards */}
      <div className="relative space-y-8 sm:space-y-10">
        
        <HalftoneWaveGrid className="-top-12 -left-20 w-[500px] h-[350px] hidden sm:block" opacity={0.25} />
        <SparkleStar color="#f59e0b" size={28} className="hidden sm:block absolute -top-8 right-24 animate-pulse" />
        <DiamondTwinkle color="#1B96D8" size={24} className="hidden sm:block absolute top-10 right-6" />

        <ScrollReveal animation="fade-up">
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold text-[#1B96D8] block mb-1.5 sm:mb-2 font-sans">
              Gatherings &amp; Honors
            </span>
            <h3 className="font-display font-bold text-2xl xs:text-3xl sm:text-4xl text-slate-900 leading-tight">
              Upcoming Summits, Labs &amp; Masterclasses
            </h3>
            <p className="font-sans text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed mt-2 font-normal">
              Participate in hands-on open maker labs, enterprise consulting clinics with JEOLINKS, and annual continental award ceremonies.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {UPCOMING_EVENTS.map((event, idx) => (
            <ScrollReveal key={idx} animation="fade-up" delay={(idx % 2) * 150} duration={750}>
              <div className="relative group h-full">
                {idx === 0 && <RadialSunburst color="#f59e0b" size={140} className="hidden sm:block absolute -top-8 -left-8" />}
                {idx === 1 && <DiagonalHatch color="#1B96D8" width={130} height={130} className="hidden sm:block absolute -top-6 -right-6" />}

                <div 
                  className="relative h-[440px] xs:h-[480px] sm:h-[520px] rounded-[28px] sm:rounded-[32px] overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-end p-5 sm:p-8 select-none"
                >
                  <img 
                    src={eventImages[idx % eventImages.length]} 
                    alt={event.title} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent" />

                  <div className="relative z-10 space-y-2 sm:space-y-3">
                    <span className="text-xs font-bold text-[#8FC02A] block font-sans">
                      {event.category} &bull; {event.date}
                    </span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-white leading-snug">
                      {event.title}
                    </h3>
                    <div className="text-xs font-semibold text-[#1B96D8]">
                      {event.location}
                    </div>
                    <p className="font-sans text-slate-200 text-xs sm:text-sm leading-relaxed font-normal line-clamp-2">
                      {event.desc}
                    </p>
                    <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                      <button 
                        onClick={() => alert(`Seat registered for ${event.title}! A confirmation badge has been sent to your email.`)}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#1B96D8] hover:bg-[#147cb5] text-white text-xs font-bold transition-all shadow-md font-sans text-center"
                      >
                        Register Free Seat
                      </button>
                      <button 
                        onClick={() => alert(`Adding ${event.title} to calendar (.ICS file generated).`)}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white text-xs font-bold transition-all backdrop-blur-md font-sans text-center"
                      >
                        Add to Calendar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Flagship Recognition Banner (TTA Awards) - Asymmetric Story Section with Graphics */}
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
        
        <HalftoneWaveGrid className="-top-8 -right-20 w-[450px] h-[300px] hidden sm:block" opacity={0.2} />

        <div className="lg:col-span-6 space-y-4 sm:space-y-6 relative z-10">
          <ScrollReveal animation="fade-right" duration={800}>
            <span className="text-xs font-bold text-[#8FC02A] block font-sans">
              Annual Continental Honors
            </span>
            <h3 className="font-display font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-[3.25rem] text-slate-900 leading-[1.15] sm:leading-[1.1] tracking-tight">
              Teaching with Technology Awards (TTA 2026)
            </h3>
            <p className="font-sans text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
              An annual pan-African citation celebrating rural school teachers, community volunteers, and indigenous educators who leverage low-bandwidth tech tools to transform underserved classrooms.
            </p>
            <div className="pt-2">
              <Button 
                onClick={() => alert('Nominations for Teaching with Technology Awards 2026 are now open!')}
                variant="primary" 
                size="md" 
                className="w-full sm:w-auto text-center justify-center"
              >
                Nominate an Outstanding Educator
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
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop" 
                alt="Teaching with Technology Awards" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </ScrollReveal>
        </div>
      </div>

    </div>
  );
};
