import React from 'react';
import { Button } from './Button';
import heroImg from '../assets/ocpihero.avif';

interface HeroProps {
  onOpenMembership: (track: 'family' | 'tech') => void;
  onExploreResearch: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenMembership, onExploreResearch }) => {
  return (
    <section className="relative min-h-[85svh] lg:min-h-[90svh] flex flex-col justify-center overflow-hidden bg-white py-8 sm:py-12 lg:py-10">
      
      {/* Background soft map/silhouette (subtle warm tone behind headline) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30 lg:opacity-45 select-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Cpath fill='%23f3ece4' d='M60,120 Q120,60 220,100 T360,80 T420,190 T320,320 T200,380 T90,300 T60,120 Z'/%3E%3Cpath fill='%23ece4da' d='M100,220 Q180,180 260,240 T380,290 T300,420 T160,450 T80,350 Z' opacity='0.7'/%3E%3C/svg%3E")`,
          backgroundSize: '800px auto',
          backgroundPosition: 'left 2% center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Floating colored accent dots - Hidden on mobile to prevent text collision, active on desktop */}
      <div className="hidden lg:block absolute top-[20%] left-[3%] w-3.5 h-3.5 rounded-full bg-[#f97316] shadow-sm pointer-events-none animate-float-slow" />
      <div className="hidden lg:block absolute top-[12%] left-[43%] w-2.5 h-2.5 rounded-full bg-[#8FC02A] shadow-sm pointer-events-none animate-float-reverse" />
      <div className="hidden lg:block absolute bottom-[16%] left-[40%] w-3.5 h-3.5 rounded-full bg-[#1B96D8] shadow-sm pointer-events-none animate-float-slow" />
      <div className="hidden lg:block absolute top-[48%] right-[3%] w-3 h-3 rounded-full bg-[#8FC02A] shadow-sm pointer-events-none animate-float-reverse" />
      <div className="hidden lg:block absolute top-[32%] -right-8 w-28 h-64 bg-[#1B96D8] rounded-l-[50px] pointer-events-none shadow-md animate-pulse-glow" />

      <div className="relative max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-6 xl:gap-10">
        
        {/* LEFT COLUMN - Staggered Animated Text & CTAs */}
        <div className="flex-1 text-center lg:text-left z-10 lg:max-w-[480px] xl:max-w-[540px] w-full">
          <h1 className="font-display font-bold text-[2.2rem] xs:text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] leading-[1.12] sm:leading-[1.08] tracking-tight text-[#111827] mb-4 sm:mb-6">
            <span className="inline-block animate-[fadeInUp_0.8s_ease-out_0.1s_both]">Building Hope.</span><br />
            <span className="inline-block animate-[fadeInUp_0.8s_ease-out_0.25s_both]">Creating Change.</span><br />
            <span className="inline-block animate-[fadeInUp_0.8s_ease-out_0.4s_both]">Transforming Lives.</span>
          </h1>
          
          <p className="font-sans text-sm sm:text-base lg:text-lg text-slate-600 mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed font-normal animate-[fadeInUp_0.8s_ease-out_0.55s_both] px-1 sm:px-0">
            One Community Platform Initiative (OCPI) bridges grassroots communities across Nigeria &amp; Africa through accredited fellowship programmes, evidence-based research, and sustainable civic technology.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto lg:mx-0 animate-[fadeInUp_0.8s_ease-out_0.7s_both]">
            <Button
              onClick={() => onOpenMembership('family')}
              variant="primary"
              size="md"
              className="w-full sm:w-auto hover:scale-105 transition-transform shadow-xl text-center justify-center py-3.5"
            >
              Join Our Family
            </Button>
            
            <Button
              onClick={onExploreResearch}
              variant="secondary"
              size="md"
              className="w-full sm:w-auto hover:scale-105 transition-transform text-center justify-center py-3.5"
            >
              Explore Our Work
            </Button>
          </div>
        </div>

        {/* RIGHT COLUMN - Slanted Pill Image Mask with Hover Dynamics */}
        <div className="flex-1 w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[680px] xl:max-w-[760px] 2xl:max-w-[820px] relative z-10 flex items-center justify-center lg:justify-end animate-[fadeIn_1s_ease-out_0.4s_both] mt-4 sm:mt-6 lg:mt-0">
          <div className="relative w-full aspect-square max-w-[280px] xs:max-w-[320px] sm:max-w-[420px] lg:max-w-[680px] xl:max-w-[760px] flex items-center justify-center drop-shadow-2xl group hover:-translate-y-2 transition-transform duration-700">
            <img
              src={heroImg}
              alt="OCPI Empowering Communities"
              className="w-full h-full object-cover select-none group-hover:scale-105 transition-transform duration-700"
              style={{
                WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cg transform='rotate(40 300 300)' fill='%23000'%3E%3Crect x='55' y='125' width='96' height='340' rx='48'/%3E%3Crect x='171' y='10' width='96' height='580' rx='48'/%3E%3Crect x='287' y='35' width='96' height='175' rx='48'/%3E%3Crect x='287' y='230' width='96' height='340' rx='48'/%3E%3Crect x='403' y='165' width='96' height='320' rx='48'/%3E%3C/g%3E%3C/svg%3E")`,
                maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cg transform='rotate(40 300 300)' fill='%23000'%3E%3Crect x='55' y='125' width='96' height='340' rx='48'/%3E%3Crect x='171' y='10' width='96' height='580' rx='48'/%3E%3Crect x='287' y='35' width='96' height='175' rx='48'/%3E%3Crect x='287' y='230' width='96' height='340' rx='48'/%3E%3Crect x='403' y='165' width='96' height='320' rx='48'/%3E%3C/g%3E%3C/svg%3E")`,
                WebkitMaskSize: '100% 100%',
                maskSize: '100% 100%',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                maskPosition: 'center',
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};
