import { FC } from 'react';

const benefits = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Specialist inom lön',
    description: 'Jobbat mot HR samtidigt som lön i 9 år',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: 'AI-integration',
    description: 'Optimerat processer i 9 år',
  },
];

export const AboutSection: FC = () => {
  return (
    <section id="benefits" className="py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section divider */}
        <div className="section-divider mb-16" />

        {/* Section label */}
        <p className="section-label">Fördelar</p>

        {/* Large serif headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-4 leading-tight">
          Jag har knäckt koden.
        </h2>

        {/* Description */}
        <p className="text-lg text-white/50 mb-16 max-w-2xl">
          Knecht &amp; Partners levererar verkliga insikter, utan informationsöverflöd.
        </p>

        {/* 4-column benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative px-0 sm:px-6 first:pl-0 last:pr-0 py-8"
            >
              {/* Top border line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />

              {/* Icon */}
              <div className="text-accent-glow mb-6">
                {benefit.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-serif text-white mb-3">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-white/50 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
