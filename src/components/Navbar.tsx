import React, { useState, useEffect } from 'react';
import { RiCompass3Line, RiMenuLine, RiCloseLine, RiArrowRightUpLine } from 'react-icons/ri';
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
          ? 'bg-white/85 backdrop-blur-xl border-b border-black/5 py-3.5 shadow-sm'
          : 'bg-gradient-to-b from-black/25 via-transparent to-transparent pt-6 pb-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
          className="flex items-center gap-2.5 group"
        >
          <div
            className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
              isScrolled
                ? 'bg-cyan-600 text-white shadow-sm'
                : 'bg-white/20 backdrop-blur-md text-white border border-white/30 group-hover:bg-white group-hover:text-cyan-900'
            }`}
          >
            <RiCompass3Line className="w-5 h-5" />
          </div>
          <span
            className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-200 ${
              isScrolled ? 'text-[#0F2E35]' : 'text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]'
            }`}
          >
            {profileData.name}
          </span>
        </a>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-sm font-medium">
          {['hero', 'experience', 'links', 'contact'].map((secId) => {
            const labelMap: Record<string, string> = {
              hero: 'About Us',
              experience: 'Experience',
              links: 'Link Tree',
              contact: 'Contact',
            };
            return (
              <button
                key={secId}
                onClick={() => scrollToSection(secId)}
                className={`transition-colors duration-200 cursor-pointer ${
                  isScrolled
                    ? 'text-slate-700 hover:text-cyan-600'
                    : 'text-white/90 hover:text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]'
                }`}
              >
                {labelMap[secId]}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="flex items-center gap-3">
          <a
            href={profileData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-cyan-50 text-slate-900 font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-md hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-1.5 border border-black/5"
          >
            <span>Book Now</span>
            <RiArrowRightUpLine className="w-4 h-4 text-slate-600" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className={`md:hidden w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-colors ${
              isScrolled
                ? 'bg-black/5 text-[#0F2E35]'
                : 'bg-white/20 backdrop-blur-md text-white border border-white/25'
            }`}
          >
            {mobileMenuOpen ? <RiCloseLine className="w-5 h-5" /> : <RiMenuLine className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pt-3 pb-4">
          <div className="bg-white/95 backdrop-blur-xl border border-black/5 rounded-2xl p-4 flex flex-col gap-2 shadow-xl">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-left px-3 py-2 rounded-lg text-slate-800 font-medium hover:bg-slate-100 transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-left px-3 py-2 rounded-lg text-slate-800 font-medium hover:bg-slate-100 transition-colors"
            >
              10+ Years Experience
            </button>
            <button
              onClick={() => scrollToSection('links')}
              className="text-left px-3 py-2 rounded-lg text-slate-800 font-medium hover:bg-slate-100 transition-colors"
            >
              Link Tree (WhatsApp & Socials)
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left px-3 py-2 rounded-lg text-slate-800 font-medium hover:bg-slate-100 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
