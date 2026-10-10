import React from 'react';
import { 
  RiCalendarLine, 
  RiCompass3Line, 
  RiShieldCheckLine, 
  RiHeart3Line, 
  RiSparklingLine, 
  RiMapPin2Line 
} from 'react-icons/ri';
import { profileData } from '../data/profileData';
import { SpotlightCard, SplitText } from './reactbits';

export const ExperienceBadges: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
      
      {/* Background Radial Warm Tropical Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-400/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <SplitText
          text="Over 10 Years Sharing The Heart of Bali"
          className="text-4xl sm:text-5xl font-extrabold text-[#0F2E35] tracking-tight drop-shadow-sm"
          delay={30}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 35 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-60px"
          textAlign="center"
          tag="h2"
        />
        
        <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          {profileData.fullBio}
        </p>
      </div>

      {/* 4 Stats Grid with Bright Tropical Glassmorphism & SpotlightCard */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {profileData.stats.map((stat, idx) => (
          <SpotlightCard
            key={idx}
            spotlightColor="rgba(14, 165, 233, 0.18)"
            className="glass-card-bright rounded-3xl p-6 sm:p-7 relative overflow-hidden group flex flex-col justify-between border border-white/80 bg-white/85 shadow-[0_12px_32px_rgba(15,46,53,0.05)] transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#0F2E35] tracking-tight group-hover:text-teal-700 transition-colors drop-shadow-sm">
                {stat.value}
              </span>
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-100 shadow-sm">
                {idx === 0 && <RiCalendarLine className="w-5 h-5" />}
                {idx === 1 && <RiCompass3Line className="w-5 h-5" />}
                {idx === 2 && <RiShieldCheckLine className="w-5 h-5" />}
                {idx === 3 && <RiHeart3Line className="w-5 h-5" />}
              </div>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#0F2E35] tracking-tight mb-1">
                {stat.label}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {stat.description}
              </p>
            </div>
          </SpotlightCard>
        ))}
      </div>

      {/* Value Pillars */}
      <div className="glass-card-bright rounded-3xl p-8 sm:p-12 border border-white/80 bg-white/85 backdrop-blur-2xl shadow-[0_20px_45px_rgba(15,46,53,0.06)]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-1">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
              The Personal Promise
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F2E35] mt-1 drop-shadow-sm">
              Why Travelers Recommend Pande
            </h3>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              When you hire a tour guide, you are trusting someone with your vacation memories. Here is what you can always rely on:
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white/70 border border-teal-100/70 shadow-sm transition-all duration-200 hover:bg-white">
              <div className="flex items-center gap-2 text-[#0F2E35] font-bold text-sm mb-1.5">
                <RiMapPin2Line className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Zero Tourist Traps</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                No forced stops at commission shops. You choose where we go, or let me guide you to authentic village craftsmen.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/70 border border-teal-100/70 shadow-sm transition-all duration-200 hover:bg-white">
              <div className="flex items-center gap-2 text-[#0F2E35] font-bold text-sm mb-1.5">
                <RiShieldCheckLine className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>Comfort & Safety First</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clean, modern, air-conditioned private vehicle with calm, safe driving across island highways and mountain roads.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/70 border border-teal-100/70 shadow-sm transition-all duration-200 hover:bg-white">
              <div className="flex items-center gap-2 text-[#0F2E35] font-bold text-sm mb-1.5">
                <RiHeart3Line className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>Deep Cultural Stories</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                As a native Balinese, I explain temple history, village ceremonies, and ancestral customs in clear, fluent English.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/70 border border-teal-100/70 shadow-sm transition-all duration-200 hover:bg-white">
              <div className="flex items-center gap-2 text-[#0F2E35] font-bold text-sm mb-1.5">
                <RiSparklingLine className="w-4 h-4 text-purple-600 flex-shrink-0" />
                <span>Stunning Vacation Photos</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                I know the best viewpoints, lighting angles, and secret spots so you bring home gorgeous memories to treasure.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
