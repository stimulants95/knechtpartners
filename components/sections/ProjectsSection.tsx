import { FC } from 'react';

type Project = {
  name: string;
  description: string;
  url: string;
  status?: string;
  features: string[];
};

const projects: Project[] = [
  {
    name: 'Idrottsservice Västerbotten AB',
    description: 'Hjälper till att optimera arbetsflöden i samband med att en medarbetare går i pension för att säkra upp flödet. Övergång från Excel till deras ERP-system Blikk.',
    url: 'https://idrottsservice.com/',
    features: ['Processoptimering', 'ERP / Blikk', 'Kunskapsöverföring']
  },
  {
    name: 'Copilot & Cowork',
    description: 'Föreläser om Microsoft Copilot och Cowork samt hjälper företag att komma igång med Cowork i sin verksamhet.',
    url: '#contact',
    features: ['Föreläsning', 'Copilot', 'Cowork']
  },
  {
    name: 'Cowork för lönekonsult — Intly',
    description: 'Håller utbildningen "Cowork för lönekonsult" via utbildningsplattformen Intly — kom igång med AI i lönearbetet med hjälp av Microsoft Cowork.',
    url: 'https://www.intly.se/education-courses/cowork-for-lonekonsult/',
    status: 'Pågående',
    features: ['Utbildning', 'Lön', 'AI / Cowork']
  }
];

export const ProjectsSection: FC = () => {
  return (
    <section id="projects" className="py-20 lg:py-32 relative z-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Divider */}
        <div className="section-divider mb-16" />

        {/* Section header */}
        <div className="text-center mb-16">
          <p className="section-label">Mina Projekt</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-6">
            Aktuella initiativ
          </h2>
          <p className="text-white/50 max-w-xl mx-auto leading-relaxed">
            Plattformar och optimering av processer.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="group relative bg-white/[0.02] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.04] transition-all duration-300 overflow-hidden flex flex-col h-full"
            >
              {/* Subtle gradient glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-glow/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-serif text-white">{project.name}</h3>
                    {project.status && (
                      <div className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-0.5 rounded-full bg-accent-glow/10 border border-accent-glow/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-glow animate-pulse" />
                        <span className="text-[10px] font-medium text-accent-glow uppercase tracking-wider">{project.status}</span>
                      </div>
                    )}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    title={`Besök ${project.name}`}
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 group-hover:text-white group-hover:bg-white/10 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                
                <p className="text-white/60 mb-8 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.features.map((feature, i) => (
                    <span 
                      key={i} 
                      className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/40 border border-white/5"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
