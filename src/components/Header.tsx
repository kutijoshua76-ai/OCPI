import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';
import ocpiLogo from '../assets/ocpi-logo.png';

interface HeaderProps {
  onOpenMembership: (track?: 'family' | 'tech', subtype?: string) => void;
  onOpenDonate: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenMembership,
  onOpenDonate,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Who We Are', path: '/who-we-are' },
    { name: 'What We Do', path: '/what-we-do' },
    { name: 'Where We Work', path: '/where-we-work' },
    { name: 'Research', path: '/research' },
    { name: 'Events', path: '/events' },
    { name: 'Media', path: '/media' },
  ];

  return (
    <header className={`sticky top-0 z-[100] transition-all duration-300 bg-white/95 backdrop-blur-md ${
      scrolled 
        ? 'shadow-md border-b border-slate-200/80 py-2' 
        : 'border-b border-slate-100 py-3'
    }`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo - Prominent & Crisp */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group py-1">
            <img 
              src={ocpiLogo} 
              alt="OCPI - One Community Platform Initiative" 
              className="h-14 sm:h-16 lg:h-[72px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation - Clean, Airy & Elegant */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-sans text-sm xl:text-[15px] transition-all duration-200 relative py-1.5 ${
                    active 
                      ? 'text-[#1B96D8] font-bold after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2.5px] after:bg-[#1B96D8] after:rounded-full' 
                      : 'text-slate-600 hover:text-[#1B96D8] font-medium'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-5">
            <div className="text-slate-700 font-sans font-medium text-xs xl:text-sm">
              <span>+234 (0) 1 453 8890</span>
            </div>
            
            <button 
              onClick={() => onOpenMembership('family')} 
              className="font-sans text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#1B96D8] transition-colors"
            >
              Member Portal
            </button>

            <Button
              onClick={onOpenDonate}
              variant="primary"
              size="sm"
            >
              Donate Now
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-2xl overflow-y-auto max-h-[calc(100vh-80px)]">
          <div className="px-4 py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-sans text-base px-3 py-2.5 rounded-lg transition-colors flex items-center justify-between ${
                  isActive(link.path) 
                    ? 'text-[#1B96D8] font-bold' 
                    : 'text-slate-700 hover:text-[#1B96D8] font-medium'
                }`}
              >
                <span>{link.name}</span>
                {isActive(link.path) && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1B96D8]" />
                )}
              </Link>
            ))}
            <div className="h-px bg-slate-100 my-3" />
            <div className="flex flex-col gap-3 px-2">
              <Button 
                onClick={onOpenDonate}
                variant="primary"
                size="md"
                className="w-full"
              >
                Donate Now
              </Button>
              <Button 
                onClick={() => onOpenMembership('family')}
                variant="secondary"
                size="md"
                className="w-full"
              >
                Membership Portal
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
