import React from 'react';
import { Link } from 'react-router-dom';
import { SparkleStar, DiamondTwinkle, DiagonalHatch, HalftoneWaveGrid } from './DecorativeOrnaments';

interface PageHeaderProps {
  badge?: string;
  title: string;
  subtitle: string;
  breadcrumb: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  subtitle,
  breadcrumb
}) => {
  return (
    <div className="relative py-14 sm:py-20 bg-white border-b border-slate-100 mb-12 overflow-hidden">
      
      {/* Background Graphic Ornaments */}
      <HalftoneWaveGrid className="top-0 right-0 w-[550px] h-[280px]" opacity={0.22} />
      <SparkleStar color="#f59e0b" size={26} className="absolute top-8 right-24 animate-pulse" />
      <DiamondTwinkle color="#1B96D8" size={22} className="absolute bottom-10 right-48" />
      <DiagonalHatch color="#f59e0b" width={140} height={140} className="absolute -bottom-8 right-6" />
      <div className="absolute top-12 right-12 w-3.5 h-3.5 rounded-full bg-[#f97316]/70 pointer-events-none" />
      <div className="absolute bottom-6 right-36 w-2.5 h-2.5 rounded-full bg-[#8FC02A]/70 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sleek Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6 font-sans">
          <Link to="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#1B96D8]">{breadcrumb}</span>
        </div>

        {/* Editorial Category Kicker */}
        {badge && (
          <span className="text-xs sm:text-sm font-bold text-[#1B96D8] block mb-3 font-sans">
            {badge}
          </span>
        )}

        {/* Large Editorial Title */}
        <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-[3.25rem] text-slate-900 tracking-tight leading-[1.1] mb-5 max-w-4xl">
          {title}
        </h1>

        {/* Refined Subtitle */}
        <p className="font-sans text-slate-600 text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed font-normal">
          {subtitle}
        </p>

      </div>
    </div>
  );
};
