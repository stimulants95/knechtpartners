import type { Metadata } from 'next';
import { Footer } from '@/components/sections/Footer';
import { RegistrationForm } from './RegistrationForm';

export const metadata: Metadata = {
  title: 'Kom igång med Microsoft Cowork — Utbildning | Knecht & Partners AB',
  description:
    'Live-utbildning via Microsoft Teams den 19 juni 2026, 10:00–11:30. 30 min teori och 60 min praktiska exempel som vi skapar tillsammans. 900 kr ex moms per deltagare.',
  robots: { index: false, follow: false },
};

const PRICE_PER_PARTICIPANT_SEK = 900;

export default function CoworkTrainingPage() {
  return (
    <main className="relative min-h-screen">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        <div className="absolute inset-0 bg-noise opacity-[0.04]" />
      </div>

      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-glow/20 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-glow-alt/15 rounded-full blur-[100px] animate-glow-pulse-delayed" />
      </div>

      <div className="relative z-10">
        <section className="pt-36 lg:pt-44 pb-16 lg:pb-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="section-label">Utbildning · Live via Microsoft Teams</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-6 leading-tight tracking-tight">
              Kom igång med Microsoft Cowork
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl mb-10">
              En kompakt och praktisk utbildning för dig som vill komma igång med Microsoft Cowork
              i din verksamhet. 30 minuter teori och 60 minuter praktiska exempel som vi skapar tillsammans live.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              <InfoCard
                label="Datum"
                value="19 juni 2026"
              />
              <InfoCard
                label="Tid"
                value="10:00 – 11:30"
              />
            </div>

            <a
              href="#anmalan"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent-glow text-hero-dark text-base font-semibold hover:bg-accent-glow-alt transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(46,196,182,0.35)]"
            >
              Anmäl dig nu
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.25} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="section-divider mb-16" />
            <h2 className="text-3xl sm:text-4xl font-serif text-white mb-10">
              Vad du tar med dig
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {takeaways.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/10"
                >
                  <div className="w-8 h-8 flex-shrink-0 rounded-lg bg-accent-glow/10 border border-accent-glow/30 flex items-center justify-center text-accent-glow text-sm font-semibold">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">{item.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="anmalan" className="py-16 lg:py-20 scroll-mt-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="section-divider mb-16" />
            <p className="section-label">Anmälan</p>
            <h2 className="text-3xl sm:text-4xl font-serif text-white mb-3">
              Boka din plats
            </h2>
            <p className="text-white/55 mb-10 max-w-2xl">
              Faktura skickas i samma månad som utbildningen genomförs, 30 dagars betalningsvillkor.
            </p>

            <RegistrationForm pricePerParticipant={PRICE_PER_PARTICIPANT_SEK} />
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="section-divider mb-16" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white mb-6">
              Bokningsvillkor &amp; integritetspolicy
            </h2>
            <div className="space-y-6 text-white/55 text-sm leading-relaxed">
              <Block title="Personuppgiftshantering">
                När du bockar i samtyckesrutan godkänner du att Knecht &amp; Partners AB behandlar dina
                personuppgifter i syfte att administrera din anmälan, skicka utbildningsmaterial och
                fakturera deltagaravgiften. Uppgifterna delas inte med tredje part.
              </Block>
              <Block title="Betalningsvillkor">
                Avgiften faktureras normalt i samma månad som utbildningen genomförs. 30 dagars
                betalningsvillkor. Moms tillkommer.
              </Block>
              <Block title="Av-/ombokning">
                Vid förhinder kontakta oss skriftligt på{' '}
                <a className="text-accent-glow hover:text-accent-glow-alt" href="mailto:josef.knecht@knecht-partners.se">
                  josef.knecht@knecht-partners.se
                </a>
                . Vid avbokning senare än 1 vecka innan startdatum faktureras hela avgiften. Platsen
                kan överlåtas kostnadsfritt till en kollega — meddela oss skriftligt. Avgiften
                återbetalas vid egen sjukdom mot uppvisande av läkarintyg.
              </Block>
              <Block title="Förbehåll">
                Knecht &amp; Partners AB förbehåller sig rätten att ställa in eller flytta
                utbildningen vid för få bokningar eller andra omständigheter utanför vår kontroll.
                Inställning sker senast 7 dagar innan startdatum och anmälda deltagare kontaktas. Vi
                står inte för kostnader som uppstår för deltagare i samband med inställd eller
                flyttad utbildning. Material får inte delas vidare.
              </Block>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}

function InfoCard({ label, value, suffix }: { label: string; value: string; suffix?: string }) {
  return (
    <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
      <div className="text-xs uppercase tracking-wider text-accent-glow mb-2">{label}</div>
      <div className="text-white text-xl font-serif">
        {value}
        {suffix && <span className="text-white/40 text-sm font-sans ml-2">{suffix}</span>}
      </div>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-white font-medium mb-2">{title}</h3>
      <p>{children}</p>
    </div>
  );
}

const takeaways = [
  {
    title: 'Cowork vs Copilot — och vägen hit',
    body: 'Snabb tillbakablick på AI-utvecklingen och var vi står idag. Vi reder ut skillnaden mellan Copilot och Cowork.',
  },
  {
    title: 'Vi bygger skills live',
    body: 'Du får se hela flödet steg för steg: hur du aktiverar en skill, var du sparar den, och hur vi testar den direkt mot utbildningsmaterialet — allt live på skärmen.',
  },
  {
    title: 'Schemalagda jobb',
    body: 'Cowork tillåter bara ett schemalagt jobb i taget. Vi går igenom hur du packar flera flöden i samma jobb och får ut maximal nytta av begränsningen.',
  },
  {
    title: 'Frågor',
    body: 'Vi avslutar med en öppen frågestund där du får svar på dina specifika frågor om Cowork.',
  },
];
