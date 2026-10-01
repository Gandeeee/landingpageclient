import React from 'react';
import { ArrowDown, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { profileData } from '../data/profileData';
import { BlurText, ShinyText, SpotlightCard } from './reactbits';

interface HeroProps {
  onScrollToLinks: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToLinks }) => {
  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden">
      
      {/* Background Image: Vivid, High-Definition, Crystal Clear Nusa Penida Aerial View */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/background.jpg')`,
        }}
      />

      {/* Gentle, Natural Vignette Overlay - Keeps Photo Bright, Vivid & Sunny while ensuring Text Legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20 pointer-events-none" />

      {/* Spacer for Top Fixed Navbar */}
      <div className="pt-28 sm:pt-36" />

      {/* Main Hero Content: Left Display Typography & Right Narrative Story (Matching Reference Screenshot) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16 my-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          
          {/* Left Side: Bold Modern Display Typography (Exact Match to Voyare Headline) */}
          <div className="lg:col-span-7">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05] drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
              <span className="block">
                <BlurText text="Unforgettable" delay={70} />
              </span>
              <span className="block">
                <BlurText text="Travel Moments" delay={70} />
              </span>
              <span className="block text-white">
                <BlurText text="with Pande" delay={70} />
              </span>
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs sm:text-sm text-white font-medium drop-shadow-md">
                <ShinyText text="✦ 10+ Years Experience" speed={3.5} />
              </span>
              <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs sm:text-sm text-white font-medium drop-shadow-md">
                Private Guided Tours
              </span>
              <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs sm:text-sm text-white font-medium drop-shadow-md">
                Bali & Indonesia
              </span>
            </div>
          </div>

          {/* Right Side: Natural Copy & Clear Pande Suastika Profile Badge (Matching Reference Layout) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Story Paragraph directly on the image with subtle drop shadow */}
            <p className="text-lg sm:text-xl text-white font-normal leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
              We take you beyond the ordinary, to places where living culture breathes, landscapes leave you breathless, and every travel moment becomes a story to tell.
            </p>

            {/* Clear, High-Resolution Pande Suastika Profile Card with SpotlightCard */}
            <SpotlightCard
              spotlightColor="rgba(46, 197, 211, 0.35)"
              className="glass-card-bright rounded-2xl p-4 sm:p-5 backdrop-blur-2xl border border-white/30 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                {/* Clear, Sharp Portrait */}
                <div className="relative flex-shrink-0">
                  <img
                    src="/assets/profile.jpg"
                    alt="Pande Suastika - Private Tour Guide"
                    className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl object-cover object-top border-2 border-white shadow-lg"
                  />
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center shadow">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  </span>
                </div>

                {/* Details */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-base sm:text-lg font-bold text-white tracking-tight truncate">
                      {profileData.name}
                    </h2>
                    <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  </div>
                  <p className="text-xs sm:text-sm text-cyan-200 font-medium">
                    10+ Years Private Balinese Tour Guide
                  </p>
                  <p className="text-xs text-white/80 mt-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-cyan-300" />
                    Denpasar, Nusa Penida & Across Bali
                  </p>
                </div>
              </div>

              {/* Action Button inside card */}
              <button
                onClick={onScrollToLinks}
                className="mt-4 w-full py-2.5 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Connect with Pande (Links & WhatsApp)</span>
                <ArrowDown className="w-4 h-4" />
              </button>
            </SpotlightCard>

          </div>

        </div>
      </div>

      {/* Bottom Row: Subtle Bottom Trust Badges */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16 pb-8 sm:pb-12 flex items-center justify-between">
        <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/90 font-medium drop-shadow-md">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            100% Private Itineraries
          </span>
          <span className="hidden sm:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-300" />
            Comfortable AC Vehicle
          </span>
          <span className="hidden md:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-300" />
            Official Certified Guide
          </span>
        </div>
      </div>

    </section>
  );
};
