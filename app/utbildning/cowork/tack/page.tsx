import type { Metadata } from 'next';
import Link from 'next/link';
import { Footer } from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'Tack för din anmälan | Knecht & Partners AB',
  robots: { index: false, follow: false },
};

const nextSteps = [
  {
    title: 'Bekräftelse via e-post',
    body: 'En bekräftelse har skickats till kontaktpersonen. Hittar du den inte, titta i skräpposten.',
  },
  {
    title: 'Teams-länk dagen innan',
    body: 'Länken till utbildningen skickas till varje deltagares e-post senast torsdagen den 29 oktober.',
  },
  {
    title: 'Faktura efter utbildningen',
    body: 'Fakturan skickas efter utförd utbildning, samma månad, med 30 dagars betalningsvillkor.',
  },
];

const preparations = [
  'Ta gärna med egna case från lön och HR, vi tittar på dem under frågestunden.',
  'Tänk på vilka rutiner du gör om och om igen varje månad, de passar ofta bäst att automatisera.',
  'Använd avidentifierade exempel om du vill visa egna underlag, aldrig riktiga personuppgifter.',
];

export default function CoworkThankYouPage() {
  return (
    <main className="relative min-h-screen">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        <div className="absolute inset-0 bg-noise opacity-[0.04]" />
      </div>

      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-glow/20 rounded-full blur-[120px] animate-glow-pulse" />
      </div>

      <div className="relative z-10">
        <section className="pt-36 lg:pt-44 pb-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="section-label">Anmälan mottagen</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-6 leading-tight tracking-tight">
              Tack för din anmälan!
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl mb-10">
              Vi ses fredagen den 30 oktober kl 08:30–11:00 för <em>Kom igång med AI i lönearbetet</em>,
              live via Microsoft Teams.
            </p>

            <a
              href="/utbildning/cowork-2026-10-30.ics"
              download
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent-glow text-hero-dark text-base font-semibold hover:bg-accent-glow-alt transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(46,196,182,0.35)]"
            >
              Lägg till i kalendern
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.25} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3M4 11h16M5 5h14a1 1 0 011 1v13a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1z" />
              </svg>
            </a>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="section-divider mb-16" />
            <h2 className="text-3xl sm:text-4xl font-serif text-white mb-10">Vad händer nu?</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {nextSteps.map((step, i) => (
                <div key={step.title} className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                  <div className="w-8 h-8 mb-4 rounded-lg bg-accent-glow/10 border border-accent-glow/30 flex items-center justify-center text-accent-glow text-sm font-semibold">
                    {i + 1}
                  </div>
                  <h3 className="text-white font-medium mb-1">{step.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="section-divider mb-16" />
            <h2 className="text-3xl sm:text-4xl font-serif text-white mb-6">Inför utbildningen</h2>
            <ul className="space-y-3 text-white/60 leading-relaxed max-w-2xl">
              {preparations.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-accent-glow mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-white/55 text-sm mt-12">
              Frågor, avbokning eller vill du byta deltagare? Hör av dig till{' '}
              <a className="text-accent-glow hover:text-accent-glow-alt" href="mailto:josef.knecht@knecht-partners.se">
                josef.knecht@knecht-partners.se
              </a>
              .
            </p>

            <Link href="/" className="inline-block mt-8 text-white/70 hover:text-white text-sm underline underline-offset-4">
              Till startsidan
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
