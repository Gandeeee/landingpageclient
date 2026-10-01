import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Copy, 
  Check, 
  ShieldCheck, 
  MapPin, 
  CalendarCheck, 
  Phone, 
  Camera 
} from 'lucide-react';
import { profileData } from '../data/profileData';
import { WhatsAppBrandIcon, InstagramBrandIcon, LinkedInBrandIcon } from './BrandIcons';
import { SpotlightCard, ShinyText, SplitText } from './reactbits';

export const LinkTree: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profileData.phoneDisplay);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="links" className="relative py-24 px-6 sm:px-10 lg:px-16 max-w-4xl mx-auto">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-400/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Profile Header (Clear, Large, High-Resolution Photo of Pande Suastika with SpotlightCard) */}
      <SpotlightCard
        spotlightColor="rgba(46, 197, 211, 0.28)"
        className="glass-card-bright rounded-3xl p-8 sm:p-10 mb-10 text-center relative border border-white/30 shadow-2xl"
      >
        
        {/* Subtle Decorative Ambient Orb */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-300/10 rounded-full blur-2xl pointer-events-none" />

        {/* Clear, High-Resolution Portrait */}
        <div className="relative inline-block mx-auto mb-5">
          <div className="p-1.5 rounded-full bg-gradient-to-tr from-white via-cyan-200 to-white shadow-2xl">
            <img
              src="/assets/profile.jpg"
              alt="Pande Suastika - Private Tour Guide Bali"
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover object-top border-4 border-white shadow-inner"
            />
          </div>
          <span className="absolute bottom-2 right-2 w-7 h-7 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white shadow-lg">
            <Check className="w-4 h-4 stroke-[3]" />
          </span>
        </div>

        {/* Name & Title */}
        <div className="flex items-center justify-center gap-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-sm">
            {profileData.name}
          </h2>
          <ShieldCheck className="w-6 h-6 text-cyan-300" />
        </div>

        <p className="text-base sm:text-lg font-semibold text-cyan-200 mt-1">
          {profileData.role} • 10+ Years Experience
        </p>

        <p className="text-xs sm:text-sm text-white/90 mt-1.5 flex items-center justify-center gap-1.5">
          <MapPin className="w-4 h-4 text-cyan-300" />
          Bali & Across Indonesia
        </p>

        {/* Human Story Quote */}
        <p className="mt-4 max-w-xl mx-auto text-sm sm:text-base text-white/90 leading-relaxed font-normal">
          "Welcome! Whether you want to explore hidden Nusa Penida cliffs, sacred water temples, or scenic mountain trails, message me directly below. I personally reply to every inquiry."
        </p>

        {/* Quick Phone Copy Bar */}
        <div className="mt-6 inline-flex items-center gap-2 p-1.5 pl-4 pr-2 rounded-full bg-white/20 border border-white/30 backdrop-blur-xl shadow-md">
          <Phone className="w-3.5 h-3.5 text-cyan-200" />
          <span className="text-xs sm:text-sm text-white font-mono font-medium">
            {profileData.phoneDisplay}
          </span>
          <button
            onClick={handleCopyPhone}
            className="px-3.5 py-1.5 rounded-full bg-white text-slate-900 hover:bg-cyan-50 text-xs font-bold flex items-center gap-1.5 transition-all duration-200 cursor-pointer shadow"
            title="Copy phone number"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                <span className="text-emerald-700">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-700" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

      </SpotlightCard>

      {/* Main Link Tree Cards Header */}
      <div className="text-center mb-6">
        <SplitText
          text="Connect & Book Directly"
          className="text-2xl sm:text-3xl font-bold text-white tracking-tight drop-shadow-sm"
          delay={40}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 25 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-40px"
          textAlign="center"
          tag="h3"
        />
        <p className="text-xs sm:text-sm text-white/80 mt-1">
          Select a channel below to chat on WhatsApp or view Pande's profiles:
        </p>
      </div>

      {/* Link Tree Cards Stack */}
      <div className="space-y-4">
        
        {/* 1. WhatsApp Card (Primary CTA with wa.me) */}
        <a
          href={profileData.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <SpotlightCard
            spotlightColor="rgba(16, 185, 129, 0.35)"
            className="glass-card-bright rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-emerald-400/40 shadow-[0_15px_35px_rgba(16,185,129,0.18)] hover:border-emerald-300"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 min-w-0">
                
                {/* WhatsApp Icon */}
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all duration-300 shadow-lg">
                  <WhatsAppBrandIcon className="w-7 h-7" />
                </div>

                {/* Text Info */}
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-200 transition-colors">
                      Direct WhatsApp Chat
                    </h4>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-400/25 border border-emerald-300/40 text-[10px] sm:text-xs font-bold text-emerald-200">
                      <ShinyText text="Fastest Response" speed={3} />
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-white/90 mt-0.5 truncate">
                    Instant booking inquiries, custom questions & quote requests
                  </p>
                  <p className="text-[11px] text-emerald-300 font-mono mt-1 font-semibold">
                    wa.me/6281339083990
                  </p>
                </div>

              </div>

              {/* Trailing Action */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-emerald-200 hidden sm:inline">
                  Chat Now
                </span>
                <div className="w-10 h-10 rounded-full bg-white text-emerald-800 flex items-center justify-center transition-all duration-300 flex-shrink-0 group-hover:rotate-45 shadow">
                  <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                </div>
              </div>
            </div>
          </SpotlightCard>
        </a>

        {/* 2. Instagram Card */}
        <a
          href={profileData.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <SpotlightCard
            spotlightColor="rgba(236, 72, 153, 0.3)"
            className="glass-card-bright rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-pink-400/30 hover:border-pink-300 shadow-[0_15px_35px_rgba(236,72,153,0.12)]"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 min-w-0">
                
                {/* Instagram Icon */}
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all duration-300 shadow-lg">
                  <InstagramBrandIcon className="w-7 h-7" />
                </div>

                {/* Text Info */}
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-pink-200 transition-colors">
                      Instagram Travel Stories
                    </h4>
                    <span className="px-2.5 py-0.5 rounded-full bg-pink-400/25 border border-pink-300/40 text-[10px] sm:text-xs font-bold text-pink-200">
                      Daily Updates
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-white/90 mt-0.5 truncate">
                    Photos, video stories, past guests & Bali hidden gems
                  </p>
                  <p className="text-[11px] text-pink-200 font-mono mt-1 font-semibold">
                    {profileData.instagramHandle}
                  </p>
                </div>

              </div>

              {/* Trailing Action */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-pink-200 hidden sm:inline">
                  Follow
                </span>
                <div className="w-10 h-10 rounded-full bg-white text-pink-800 flex items-center justify-center transition-all duration-300 flex-shrink-0 group-hover:rotate-45 shadow">
                  <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                </div>
              </div>
            </div>
          </SpotlightCard>
        </a>

        {/* 3. LinkedIn Card */}
        <a
          href={profileData.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <SpotlightCard
            spotlightColor="rgba(56, 189, 248, 0.3)"
            className="glass-card-bright rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-sky-400/30 hover:border-sky-300 shadow-[0_15px_35px_rgba(56,189,248,0.12)]"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 min-w-0">
                
                {/* LinkedIn Icon */}
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#0077B5] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all duration-300 shadow-lg">
                  <LinkedInBrandIcon className="w-7 h-7" />
                </div>

                {/* Text Info */}
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-sky-200 transition-colors">
                      LinkedIn Professional Profile
                    </h4>
                    <span className="px-2.5 py-0.5 rounded-full bg-sky-400/25 border border-sky-300/40 text-[10px] sm:text-xs font-bold text-sky-200">
                      10+ Yrs Career
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-white/90 mt-0.5 truncate">
                    Professional tourism background, licensing, and hospitality career
                  </p>
                  <p className="text-[11px] text-sky-200 font-mono mt-1 font-semibold">
                    linkedin.com/in/pande-suastika-a8055652
                  </p>
                </div>

              </div>

              {/* Trailing Action */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-sky-200 hidden sm:inline">
                  Connect
                </span>
                <div className="w-10 h-10 rounded-full bg-white text-sky-800 flex items-center justify-center transition-all duration-300 flex-shrink-0 group-hover:rotate-45 shadow">
                  <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                </div>
              </div>
            </div>
          </SpotlightCard>
        </a>

        {/* 4. Other Business: Infinity Photo */}
        <a
          href="https://infinityphoto.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <SpotlightCard
            spotlightColor="rgba(46, 197, 211, 0.4)"
            className="glass-card-bright rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-cyan-400/35 hover:border-cyan-300 shadow-[0_15px_35px_rgba(6,182,212,0.15)]"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 min-w-0">
                
                {/* Camera Icon */}
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 to-teal-400 text-slate-900 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all duration-300 shadow-lg font-bold">
                  <Camera className="w-7 h-7 stroke-[2.2]" />
                </div>

                {/* Text Info */}
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-200 transition-colors">
                      Infinity Photo
                    </h4>
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan-400/25 border border-cyan-300/40 text-[10px] sm:text-xs font-bold text-cyan-200">
                      <ShinyText text="Other Business" speed={3.5} />
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-white/90 mt-0.5 truncate">
                    Professional vacation photography & holiday photoshoots across Bali
                  </p>
                  <p className="text-[11px] text-cyan-200 font-mono mt-1 font-semibold">
                    infinityphoto.netlify.app
                  </p>
                </div>

              </div>

              {/* Trailing Action */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-cyan-200 hidden sm:inline">
                  Visit Website
                </span>
                <div className="w-10 h-10 rounded-full bg-white text-cyan-900 flex items-center justify-center transition-all duration-300 flex-shrink-0 group-hover:rotate-45 shadow">
                  <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                </div>
              </div>
            </div>
          </SpotlightCard>
        </a>

        {/* 5. Plan Custom Island Tour */}
        <a
          href="https://wa.me/6281339083990?text=Hi%20Pande,%20I'd%20like%20to%20plan%20a%20custom%20tour.%20Here%20are%20my%20dates%20and%20places%20I'm%20interested%20in:"
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <SpotlightCard
            spotlightColor="rgba(245, 158, 11, 0.3)"
            className="glass-card-bright rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-amber-400/30 hover:border-amber-300 shadow-[0_15px_35px_rgba(245,158,11,0.12)]"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 min-w-0">
                
                {/* Tour Icon */}
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-amber-500 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all duration-300 shadow-lg">
                  <CalendarCheck className="w-7 h-7" />
                </div>

                {/* Text Info */}
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                      Plan Custom Island Tour
                    </h4>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-400/25 border border-amber-300/40 text-[10px] sm:text-xs font-bold text-amber-200">
                      Flexible Pacing
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-white/90 mt-0.5 truncate">
                    Tell Pande your preferred destinations, travel dates, and group size
                  </p>
                  <p className="text-[11px] text-amber-200 mt-1 font-semibold">
                    Nusa Penida • Ubud • Uluwatu • North Bali • Mount Batur
                  </p>
                </div>

              </div>

              {/* Trailing Action */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-amber-200 hidden sm:inline">
                  Inquire
                </span>
                <div className="w-10 h-10 rounded-full bg-white text-amber-800 flex items-center justify-center transition-all duration-300 flex-shrink-0 group-hover:rotate-45 shadow">
                  <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                </div>
              </div>
            </div>
          </SpotlightCard>
        </a>

      </div>

    </section>
  );
};
