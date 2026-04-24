import { FC } from 'react';

const features = [
  { knecht: 'Skräddarsydd lönehantering', trad: 'Standardlösningar', diy: 'Tidskrävande manuellt arbete' },
  { knecht: 'Avancerad AI-integration', trad: 'Grundläggande digitalisering', diy: 'Ingen AI-kompetens' },
  { knecht: 'Personlig HR-rådgivning', trad: 'Begränsat stöd', diy: 'Ingen expertis' },
  { knecht: 'Proaktiv processoptimering', trad: 'Reaktiv problemlösning', diy: 'Trial-and-error' },
  { knecht: 'Kontinuerlig uppföljning', trad: 'Projektbaserat arbete', diy: 'Sporadisk översyn' },
  { knecht: 'Svensk arbetsrätt-expertis', trad: 'Generell kunskap', diy: 'Risk för felsteg' },
];

export const ServicesSection: FC = () => {
  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Divider */}
        <div className="section-divider mb-16" />

        {/* Section header */}
        <div className="text-center mb-16">
          <p className="section-label">Specifikationer</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-4">
            Varför Knecht &amp; Partners?
          </h2>
          <p className="text-white/50 max-w-xl mx-auto mb-8">
            Ni behöver en partner som hänger med. Därför har vi byggt en konsulttjänst som verkligen levererar.
          </p>
          <a href="#contact" className="pill-btn-olive">
            Läs mer
          </a>
        </div>

        {/* Comparison table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left py-4 px-4 sm:px-6 font-serif text-lg text-white bg-accent-glow/5 rounded-tl-xl border-b border-white/10">
                  Knecht &amp; Partners
                </th>
                <th className="text-left py-4 px-4 sm:px-6 font-serif text-lg text-white/40 border-b border-white/10">
                  Traditionell konsulting
                </th>
                <th className="text-left py-4 px-4 sm:px-6 font-serif text-lg text-white/40 border-b border-white/10">
                  Göra det själv
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, i) => (
                <tr key={i} className="border-b border-white/5 last:border-0">
                  <td className="py-4 px-4 sm:px-6 bg-accent-glow/5">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-accent-glow flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-white/70">{row.knecht}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 sm:px-6">
                    <div className="flex items-center gap-2">
                      {i < 2 ? (
                        <svg className="w-4 h-4 text-white/30 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 text-white/20 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                      <span className="text-sm text-white/40">{row.trad}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 sm:px-6">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-white/20 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-sm text-white/40">{row.diy}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
