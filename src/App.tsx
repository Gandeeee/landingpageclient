import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperienceBadges } from './components/ExperienceBadges';
import { LinkTree } from './components/LinkTree';
import { Footer } from './components/Footer';
import { WhatsAppBrandIcon } from './components/BrandIcons';
import { profileData } from './data/profileData';

export const App: React.FC = () => {
  const scrollToLinks = () => {
    const el = document.getElementById('links');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F2E35] selection:bg-cyan-200 selection:text-slate-900 relative overflow-x-hidden">
      
      {/* Background Decorative Tropical Mesh Glows */}
      <div className="fixed top-1/4 right-0 w-[700px] h-[700px] bg-cyan-200/20 rounded-full blur-[180px] pointer-events-none" />
      <div className="fixed bottom-1/4 left-0 w-[600px] h-[600px] bg-amber-100/35 rounded-full blur-[160px] pointer-events-none" />

      {/* Floating Navbar matching Voyare reference */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        {/* 1. Hero: Full-Bleed, Crystal Clear Nusa Penida, Voyare Typography, Vertical Pill Button */}
        <Hero onScrollToLinks={scrollToLinks} />

        {/* 2. 10+ Years Experience & Proof Section */}
        <ExperienceBadges />

        {/* 3. Link Tree: Bright Glassmorphism Cards with Pande's Clear Photo */}
        <LinkTree />
      </main>

      {/* 4. Footer */}
      <Footer />

      {/* Sticky Quick WhatsApp FAB for Mobile Visitors */}
      <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40">
        <a
          href={profileData.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold shadow-[0_10px_30px_rgba(16,185,129,0.5)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-md"
          title="Direct WhatsApp with Pande"
        >
          <WhatsAppBrandIcon className="w-5 h-5 text-white" />
          <span className="text-xs sm:text-sm font-bold tracking-tight">
            Chat on WhatsApp
          </span>
        </a>
      </aside>

    </div>
  );
};

export default App;
