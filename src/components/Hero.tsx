import React, { useRef } from 'react';
import { 
  RiCheckboxCircleFill, 
  RiShieldCheckFill, 
  RiMapPin2Line, 
  RiArrowDownLine 
} from 'react-icons/ri';
import { profileData } from '../data/profileData';
import { ShinyText, SpotlightCard, VariableProximity } from './reactbits';

interface HeroProps {
  onScrollToLinks: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToLinks }) => {
  const heroHeadlineRef = useRef<HTMLDivElement>(null);

  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden">
      
      {/* Background Image: Vivid, High-Definition, Crystal Clear Nusa Penida Aerial View */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: `url('/assets/background.jpg')`,
        }}
      />

      {/* Sunlit Natural Vignette - Ultra-bright & vivid ocean, transitioning into warm sand */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-[#FAF8F5] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent pointer-events-none" />

      {/* Spacer for Top Fixed Navbar */}
      <div className="pt-28 sm:pt-36" />

      {/* Main Hero Content: Left Display Typography & Right Narrative Story (Matching Reference Screenshot) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16 my-auto py-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          
          {/* Left Side: Bold Modern Display Typography with VariableProximity from React Bits */}
          <div className="lg:col-span-7">
            <div ref={heroHeadlineRef} className="relative select-none">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.08] drop-shadow-[0_4px_24px_rgba(0,0,0,0.55)] cursor-default">
                <span className="block">
                  <VariableProximity
                    label="Unforgettable"
                    className="text-white"
                    fromFontVariationSettings="'wght' 400"
                    toFontVariationSettings="'wght' 900"
                    containerRef={heroHeadlineRef}
                    radius={130}
                    falloff="linear"
                  />
                </span>
                <span className="block mt-1 sm:mt-2">
                  <VariableProximity
                    label="Travel Moments"
                    className="text-white"
                    fromFontVariationSettings="'wght' 400"
                    toFontVariationSettings="'wght' 900"
                    containerRef={heroHeadlineRef}
                    radius={130}
                    falloff="linear"
                  />
                </span>
                <span className="block mt-1 sm:mt-2 text-white">
                  <VariableProximity
                    label="with Pande"
                    className="text-white"
                    fromFontVariationSettings="'wght' 400"
                    toFontVariationSettings="'wght' 900"
                    containerRef={heroHeadlineRef}
                    radius={130}
                    falloff="linear"
                  />
                </span>
              </h1>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <span className="px-4 py-1.5 rounded-full bg-white/25 backdrop-blur-md border border-white/40 text-xs sm:text-sm text-white font-medium drop-shadow-md">
                <ShinyText text="✦ 10+ Years Experience" speed={3.5} />
              </span>
              <span className="px-4 py-1.5 rounded-full bg-white/25 backdrop-blur-md border border-white/40 text-xs sm:text-sm text-white font-medium drop-shadow-md">
                Private Guided Tours
              </span>
              <span className="px-4 py-1.5 rounded-full bg-white/25 backdrop-blur-md border border-white/40 text-xs sm:text-sm text-white font-medium drop-shadow-md">
                Bali & Indonesia
              </span>
            </div>
          </div>

          {/* Right Side: Natural Copy & Clear Pande Suastika Profile Badge */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Story Paragraph directly on the image with subtle drop shadow */}
            <p className="text-lg sm:text-xl text-white font-normal leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.65)]">
              We take you beyond the ordinary, to places where living culture breathes, landscapes leave you breathless, and every travel moment becomes a story to tell.
            </p>

            {/* Clear, High-Resolution Pande Suastika Profile Card with SpotlightCard (Bright Tropical Glass) */}
            <SpotlightCard
              spotlightColor="rgba(14, 165, 233, 0.25)"
              className="bg-white/90 backdrop-blur-xl rounded-2xl p-4 sm:p-5 border border-white shadow-xl shadow-cyan-950/10 text-slate-900"
            >
              <div className="flex items-center gap-4">
                {/* Clear, Sharp Portrait */}
                <div className="relative flex-shrink-0">
                  <img
                    src="/assets/profile.jpg"
                    alt="Pande Suastika - Private Tour Guide"
                    className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl object-cover object-top border-2 border-white shadow-md"
                  />
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center shadow">
                    <RiCheckboxCircleFill className="w-3.5 h-3.5 text-white" />
                  </span>
                </div>

                {/* Details */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <h2 className="text-base sm:text-lg font-bold text-[#0F2E35] tracking-tight truncate">
                      {profileData.name}
                    </h2>
                    <RiShieldCheckFill className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  </div>
                  <p className="text-xs sm:text-sm text-cyan-700 font-semibold">
                    10+ Years Private Balinese Tour Guide
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1">
                    <RiMapPin2Line className="w-3.5 h-3.5 text-cyan-600" />
                    Denpasar, Nusa Penida & Across Bali
                  </p>
                </div>
              </div>

              {/* Action Button inside card */}
              <button
                onClick={onScrollToLinks}
                className="mt-4 w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-cyan-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Connect with Pande (Links & WhatsApp)</span>
                <RiArrowDownLine className="w-4 h-4 text-cyan-300" />
              </button>
            </SpotlightCard>

          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
