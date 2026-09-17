import React, { useEffect, useState } from 'react';
import ocpiLogo from '../assets/ocpi-logo.png';

interface PageLoaderProps {
  onLoaded?: () => void;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ onLoaded }) => {
  const [isFinished, setIsFinished] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Elegant brief brand presentation
    const timer = setTimeout(() => {
      setIsFinished(true);
      if (onLoaded) onLoaded();
      setTimeout(() => setShouldRender(false), 700);
    }, 1100);

    return () => clearTimeout(timer);
  }, [onLoaded]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-white flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] select-none ${
        isFinished ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
      }`}
    >
      {/* Background Soft Ambient Light Gradients */}
      <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#1B96D8]/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#8FC02A]/10 rounded-full blur-3xl animate-pulse pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
        
        {/* Glowing Logo Container */}
        <div className="relative mb-6 sm:mb-8 flex items-center justify-center">
          {/* Dual-Tone Orbital Spinning Ring */}
          <div 
            className="absolute -inset-3.5 sm:-inset-4 rounded-full border-2 border-transparent border-t-[#1B96D8] border-r-[#8FC02A] animate-spin" 
            style={{ animationDuration: '1.4s' }} 
          />
          <div className="absolute -inset-1.5 sm:-inset-2 rounded-full border border-slate-100" />
          
          <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-white shadow-xl flex items-center justify-center p-3 relative z-10">
            <img 
              src={ocpiLogo} 
              alt="OCPI Loading" 
              className="w-full h-full object-contain animate-pulse" 
            />
          </div>
        </div>

        {/* Brand Headline */}
        <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900 tracking-tight leading-snug mb-1">
          One Community Platform
        </h2>
        <p className="font-sans text-xs sm:text-sm text-slate-500 font-medium tracking-wide">
          Empowering Communities Through Evidence &amp; Action
        </p>

      </div>
    </div>
  );
};
