import React from 'react';

// 1. Eight-Point Starburst (From User Image 1)
export const SparkleStar: React.FC<{
  className?: string;
  color?: string;
  size?: number;
}> = ({ className = '', color = '#f59e0b', size = 28 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none animate-pulse-glow ${className}`}
    >
      {/* Central 8-Point Cross */}
      <path
        d="M16 2 V30 M2 16 H30 M6 6 L26 26 M6 26 L26 6"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Outer Accent Dots */}
      <circle cx="16" cy="7" r="1" fill={color} />
      <circle cx="16" cy="25" r="1" fill={color} />
      <circle cx="7" cy="16" r="1" fill={color} />
      <circle cx="25" cy="16" r="1" fill={color} />
      {/* Small center circle */}
      <circle cx="16" cy="16" r="1.5" fill={color} />
    </svg>
  );
};

// 2. Diamond Twinkle with Shooting Tail (From User Image 1 & 3)
export const DiamondTwinkle: React.FC<{
  className?: string;
  color?: string;
  size?: number;
}> = ({ className = '', color = '#f97316', size = 26 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none animate-float-slow ${className}`}
    >
      {/* 4-Point Curvature Diamond */}
      <path
        d="M16 3 C16 10 10 16 3 16 C10 16 16 22 16 29 C16 22 22 16 29 16 C22 16 16 10 16 3 Z"
        stroke={color}
        strokeWidth="1.2"
        fill="none"
      />
      {/* Trailing accent dashes */}
      <path
        d="M24 24 L28 28 M27 23 L29 25 M23 27 L25 29"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
};

// 3. Diagonal Hatching / Line Burst Matrix (From User Image 2)
export const DiagonalHatch: React.FC<{
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}> = ({ className = '', color = '#f59e0b', width = 120, height = 120 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none opacity-40 animate-float-reverse ${className}`}
    >
      {[...Array(16)].map((_, i) => (
        <line
          key={i}
          x1={i * 8}
          y1="0"
          x2={i * 8 + 60}
          y2="120"
          stroke={color}
          strokeWidth="1.2"
          strokeDasharray="4 4"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
};

// 4. Radial Sunburst / Arc Lines around Corner (From User Image 3)
export const RadialSunburst: React.FC<{
  className?: string;
  color?: string;
  size?: number;
}> = ({ className = '', color = '#f59e0b', size = 160 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none opacity-45 animate-spin-slow ${className}`}
    >
      {/* Concentric Arc Lines */}
      <circle cx="160" cy="160" r="140" stroke={color} strokeWidth="1" strokeDasharray="3 4" />
      <circle cx="160" cy="160" r="115" stroke={color} strokeWidth="1" strokeDasharray="2 3" />
      <circle cx="160" cy="160" r="90" stroke={color} strokeWidth="1" />
      
      {/* Radiating Rays */}
      {[...Array(15)].map((_, i) => {
        const angle = (i * 6 * Math.PI) / 180;
        const x1 = 160 - Math.cos(angle) * 75;
        const y1 = 160 - Math.sin(angle) * 75;
        const x2 = 160 - Math.cos(angle) * 150;
        const y2 = 160 - Math.sin(angle) * 150;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={color}
            strokeWidth="1"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
};

// 5. Wavy 3D Halftone Perspective Dot Grid Field (From User Image 4)
export const HalftoneWaveGrid: React.FC<{
  className?: string;
  opacity?: number;
}> = ({ className = '', opacity = 0.35 }) => {
  return (
    <div
      className={`pointer-events-none select-none absolute ${className}`}
      style={{
        opacity,
        backgroundImage: `radial-gradient(#94a3b8 1.5px, transparent 1.5px)`,
        backgroundSize: '16px 16px',
        maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
      }}
    />
  );
};

// 6. Complete Organic Decorative Backdrop for Content Sections
export const SectionBackdropOrnaments: React.FC<{
  variant?: 'left' | 'right' | 'split';
  primaryColor?: string;
  secondaryColor?: string;
}> = ({ variant = 'right', primaryColor = '#1B96D8', secondaryColor = '#f59e0b' }) => {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
      {/* Halftone Perspective Field */}
      <HalftoneWaveGrid 
        className={variant === 'left' ? '-left-20 top-10 w-[500px] h-[350px]' : '-right-20 top-10 w-[500px] h-[350px]'} 
        opacity={0.25} 
      />

      {/* Floating Sparkle Stars */}
      <SparkleStar 
        color={secondaryColor} 
        size={24} 
        className={`absolute ${variant === 'left' ? 'top-8 left-12' : 'top-8 right-16'} animate-pulse`} 
      />
      <DiamondTwinkle 
        color={primaryColor} 
        size={22} 
        className={`absolute ${variant === 'left' ? 'bottom-12 left-24' : 'bottom-12 right-28'}`} 
      />
      
      {/* Floating Subtle Dots */}
      <div 
        className={`absolute w-3 h-3 rounded-full bg-[#f97316]/60 shadow-sm ${
          variant === 'left' ? 'top-24 left-6' : 'top-20 right-8'
        }`} 
      />
      <div 
        className={`absolute w-2 h-2 rounded-full bg-[#8FC02A]/70 ${
          variant === 'left' ? 'bottom-20 left-16' : 'bottom-24 right-12'
        }`} 
      />
    </div>
  );
};
