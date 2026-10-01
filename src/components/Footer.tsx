import React from 'react';
import { ArrowUp, Compass, Shield, MapPin, Camera } from 'lucide-react';
import { profileData } from '../data/profileData';
import { WhatsAppBrandIcon, InstagramBrandIcon, LinkedInBrandIcon } from './BrandIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative mt-20 pb-12 pt-16 px-6 sm:px-10 lg:px-16 border-t border-white/20 bg-gradient-to-b from-transparent to-black/30">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Glass Card */}
        <div className="glass-card-bright rounded-3xl p-8 sm:p-12 border border-white/30 backdrop-blur-2xl mb-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Col 1: Brand & Guide Mission */}
            <div className="md:col-span-6 lg:col-span-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white border border-white/30 shadow">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {profileData.name}
                  </h3>
                  <p className="text-xs text-cyan-200 font-semibold">
                    Private Tour Guide & Island Host • 10+ Years Experience
                  </p>
                </div>
              </div>

              <p className="text-sm text-white/90 leading-relaxed max-w-md">
                Guiding travelers with warm Balinese hospitality, deep respect for ancestral traditions, and an insider's knowledge of quiet roads and hidden natural beauty.
              </p>

              <div className="mt-6 flex items-center gap-2 text-xs sm:text-sm text-cyan-200">
                <MapPin className="w-4 h-4 text-cyan-300" />
                <span>Denpasar & Across Bali, Indonesia</span>
              </div>
            </div>

            {/* Col 2: Direct Contact */}
            <div className="md:col-span-6 lg:col-span-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-200 mb-4">
                Direct Contact
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href={profileData.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white hover:text-emerald-300 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center group-hover:scale-105 transition-transform shadow">
                      <WhatsAppBrandIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block font-semibold">WhatsApp Direct</span>
                      <span className="text-xs text-cyan-100 font-mono">{profileData.phoneDisplay}</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={profileData.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white hover:text-pink-300 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 text-white flex items-center justify-center group-hover:scale-105 transition-transform shadow">
                      <InstagramBrandIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block font-semibold">Instagram</span>
                      <span className="text-xs text-cyan-100">{profileData.instagramHandle}</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={profileData.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white hover:text-sky-300 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#0077B5] text-white flex items-center justify-center group-hover:scale-105 transition-transform shadow">
                      <LinkedInBrandIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block font-semibold">LinkedIn Profile</span>
                      <span className="text-xs text-cyan-100">Pande Suastika</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://infinityphoto.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white hover:text-cyan-300 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-teal-400 text-slate-900 flex items-center justify-center group-hover:scale-105 transition-transform shadow font-bold">
                      <Camera className="w-4 h-4 stroke-[2.2]" />
                    </div>
                    <div>
                      <span className="block font-semibold">Infinity Photo</span>
                      <span className="text-xs text-cyan-100">Vacation Photography Bali</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Safe Travel Badge & Call To Action */}
            <div className="md:col-span-12 lg:col-span-3">
              <div className="p-5 rounded-2xl bg-white/10 border border-white/20 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2 text-white font-bold text-sm mb-2">
                    <Shield className="w-4 h-4 text-emerald-300" />
                    <span>Safe & Licensed</span>
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Official Indonesian tourist guide license. Clean private AC vehicle, comprehensive insurance standards, and fair transparent pricing.
                  </p>
                </div>

                <a
                  href={profileData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 w-full py-2.5 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs text-center shadow-lg transition-all duration-200"
                >
                  Book on WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-cyan-100/80 pt-4">
          <p>
            © {new Date().getFullYear()} Pande Suastika. All rights reserved. Tour Guide Bali & Indonesia.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-cyan-200/70">Crafted with care</span>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/25"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
