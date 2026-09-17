import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'blue' | 'green' | 'amber' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  circleIcon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  circleIcon = true,
  className = '',
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-5 py-2.5 text-xs gap-2',
    md: 'px-7 py-3.5 text-xs sm:text-sm gap-2.5',
    lg: 'px-8 py-4 text-sm sm:text-base gap-3',
  };

  const iconSizeClasses = {
    sm: 'w-4 h-4 text-[10px]',
    md: 'w-5 h-5 text-xs',
    lg: 'w-6 h-6 text-sm',
  };

  const variantClasses = {
    primary: 'bg-[#111827] hover:bg-black text-white shadow-xl shadow-black/15 hover:shadow-black/25',
    blue: 'bg-[#1B96D8] hover:bg-[#147cb5] text-white shadow-lg shadow-[#1B96D8]/25',
    green: 'bg-[#8FC02A] hover:bg-[#77a321] text-white shadow-lg shadow-[#8FC02A]/25',
    secondary: 'bg-white hover:bg-slate-50 border-2 border-slate-200 hover:border-slate-400 text-slate-800 shadow-sm',
    outline: 'bg-transparent hover:bg-slate-100 border-2 border-[#111827] text-[#111827]',
    amber: 'bg-[#1B96D8] hover:bg-[#147cb5] text-white shadow-lg shadow-[#1B96D8]/20',
    ghost: 'bg-transparent hover:bg-slate-100 text-slate-700',
  };

  const iconCircleClasses = {
    primary: 'border border-white/30 text-white',
    blue: 'border border-white/40 text-white',
    green: 'border border-white/40 text-white',
    secondary: 'border border-slate-300 text-slate-700',
    outline: 'border border-[#111827]/40 text-[#111827]',
    amber: 'border border-white/40 text-white',
    ghost: 'border border-slate-300 text-slate-700',
  };

  return (
    <button
      className={`inline-flex items-center justify-center rounded-full font-sans font-semibold transition-all duration-200 hover:-translate-y-0.5 active:scale-95 disabled:opacity-50 disabled:pointer-events-none select-none ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        circleIcon ? (
          <span className={`inline-flex items-center justify-center rounded-full shrink-0 ${iconSizeClasses[size]} ${iconCircleClasses[variant]}`}>
            {icon}
          </span>
        ) : (
          <span className="shrink-0">{icon}</span>
        )
      )}

      <span>{children}</span>

      {icon && iconPosition === 'right' && (
        circleIcon ? (
          <span className={`inline-flex items-center justify-center rounded-full shrink-0 ${iconSizeClasses[size]} ${iconCircleClasses[variant]}`}>
            {icon}
          </span>
        ) : (
          <span className="shrink-0">{icon}</span>
        )
      )}
    </button>
  );
};
