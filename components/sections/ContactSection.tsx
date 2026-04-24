import { FC } from 'react';

export const ContactSection: FC = () => {
  return (
    <section id="contact" className="py-28 lg:py-36">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="section-divider mb-16" />

        <div className="max-w-[700px] mx-auto text-center px-8 py-20 bg-gradient-to-br from-white/[0.02] to-accent-glow/[0.04] border border-white/10 rounded-[28px] relative overflow-hidden">
          {/* Glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-72 bg-accent-glow/15 blur-[40px] rounded-full pointer-events-none" />

          <h2 className="relative text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-8 leading-tight tracking-tight">
            Kontakta mig
          </h2>

          {/* Contact rows */}
          <div className="relative flex flex-col gap-3 w-full max-w-sm mx-auto mb-6">
            <a
              href="tel:+46761385858"
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/[0.04] border border-white/10 text-white/70 text-sm hover:border-accent-glow/40 hover:text-white transition-all duration-200"
            >
              <svg className="w-5 h-5 text-accent-glow flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +46 76 138 58 58
            </a>
            <a
              href="mailto:josef.knecht@knechtpartners.se"
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/[0.04] border border-white/10 text-white/70 text-sm hover:border-accent-glow/40 hover:text-white transition-all duration-200"
            >
              <svg className="w-5 h-5 text-accent-glow flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              josef.knecht@knechtpartners.se
            </a>
          </div>

          <a
            href="https://www.linkedin.com/in/josef-knecht-33582123b/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center gap-2 w-full max-w-sm px-8 py-4 rounded-xl bg-accent-glow text-hero-dark text-base font-semibold hover:bg-accent-glow-alt transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(46,196,182,0.35)]"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Kontakta på LinkedIn →
          </a>
        </div>
      </div>
    </section>
  );
};
