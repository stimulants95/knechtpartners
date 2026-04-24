'use client';

import { FC } from 'react';
import { GlassCube } from '../ui/GlassCube';

export const HeroSection: FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-80px)] py-24">
          {/* Left — Text */}
          <div className="hero-text-enter">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-accent-glow mb-6 hero-text-enter">
              Knecht &amp; Partners AB
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.05] tracking-tight mb-7 hero-text-enter">
              Lön, HR
              <em className="not-italic text-accent-glow block">& AI.</em>
            </h1>

            <p className="text-lg md:text-xl text-white/50 max-w-md mb-10 leading-relaxed hero-text-enter-delay">
              Snabb, effektiv och med hjärtat på rätt plats. Jag optimerar dina processer med expertis inom lönehantering, HR och AI.
            </p>

            <div className="flex flex-wrap gap-4 hero-text-enter-delay-2">
              <a
                href="#contact"
                className="inline-flex items-center px-7 py-3.5 rounded-full bg-accent-glow text-hero-dark text-sm font-semibold hover:bg-accent-glow-alt transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(46,196,182,0.3)]"
              >
                Kontakta mig
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-14 hero-text-enter-delay-2">
              <div>
                <div className="font-serif text-[2rem] text-white leading-none">9</div>
                <div className="text-xs text-white/40 mt-1">Års erfarenhet</div>
              </div>
              <div>
                <div className="font-serif text-[2rem] text-white leading-none">2</div>
                <div className="text-xs text-white/40 mt-1">Aktiva projekt</div>
              </div>
              <div>
                <div className="font-serif text-[2rem] text-white leading-none">
                  IT <span className="text-accent-glow">AI</span> HR
                </div>
                <div className="text-xs text-white/40 mt-1">Unikt perspektiv</div>
              </div>
            </div>
          </div>

          {/* Right — 3D Glass Cube Animation */}
          <div className="flex items-center justify-center hero-cube-enter" style={{ transform: 'translateY(20px)' }}>
            <GlassCube />
          </div>
        </div>
      </div>
    </section>
  );
};
