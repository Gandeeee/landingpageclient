import React, { useState, useEffect } from 'react';
import { Compass, Menu, X, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/profileData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-topbar border-b border-white/10 py-4 shadow-lg'
          : 'bg-gradient-to-b from-black/40 via-black/15 to-transparent pt-6 pb-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        
        {/* Brand / Logo (matching Voyare style) */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 group-hover:bg-white group-hover:text-ocean-900 transition-all duration-300">
            <Compass className="w-5 h-5" />
          </div>
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            {profileData.name}
          </span>
        </a>

        {/* Center Navigation Links (Clean, direct match to reference screenshot) */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-sm font-medium text-white/90">
          <button
            onClick={() => scrollToSection('hero')}
            className="hover:text-white transition-colors duration-200 cursor-pointer drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="hover:text-white transition-colors duration-200 cursor-pointer drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('links')}
            className="hover:text-white transition-colors duration-200 cursor-pointer drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]"
          >
            Link Tree
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="hover:text-white transition-colors duration-200 cursor-pointer drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]"
          >
            Contact
          </button>
        </nav>

        {/* Right CTA Button (Pristine white rounded pill matching "Book Now" in screenshot) */}
        <div className="flex items-center gap-3">
          <a
            href={profileData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-lg shadow-black/25 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-1.5"
          >
            <span>Book Now</span>
            <ArrowUpRight className="w-4 h-4 text-slate-600" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="md:hidden w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/25 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pt-3 pb-4">
          <div className="glass-card-bright rounded-2xl p-4 flex flex-col gap-2">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-left px-3 py-2 rounded-lg text-white font-medium hover:bg-white/10 transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-left px-3 py-2 rounded-lg text-white font-medium hover:bg-white/10 transition-colors"
            >
              10+ Years Experience
            </button>
            <button
              onClick={() => scrollToSection('links')}
              className="text-left px-3 py-2 rounded-lg text-white font-medium hover:bg-white/10 transition-colors"
            >
              Link Tree (WhatsApp & Socials)
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left px-3 py-2 rounded-lg text-white font-medium hover:bg-white/10 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
