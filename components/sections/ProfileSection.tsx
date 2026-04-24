import { FC } from 'react';
import Image from 'next/image';

export const ProfileSection: FC = () => {
  return (
    <section id="profile" className="py-20 lg:py-32 relative z-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="section-divider mb-16" />
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image Column */}
          <div className="relative group mx-auto max-w-[340px] w-full">
            <div className="absolute -inset-5 bg-accent-glow/15 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <Image
                src="/josef.jpg"
                alt="Josef Knecht"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-4 -right-4 flex items-center gap-3 bg-hero-dark/90 border border-accent-glow/30 backdrop-blur-md rounded-2xl px-5 py-3">
              <span className="w-2 h-2 rounded-full bg-accent-glow shadow-[0_0_8px_#2EC4B6] animate-pulse flex-shrink-0" />
              <div>
                <strong className="block text-sm text-white">Josef Knecht</strong>
                <span className="text-xs text-white/60">Lön &amp; HR-konsult</span>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div>
            <p className="section-label">Vem är jag?</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-8 leading-tight tracking-tight">
              Josef Knecht
            </h2>

            <div className="space-y-5 text-white/60 leading-relaxed">
              <p>Jag har jobbat med lönehantering och HR-administration i över 9 år.</p>
              <p>
                Egentligen är jag skolad inom IT, men jag hamnade inom personal på ett bananskal.
                Den resan har gett mig ett unikt och värdefullt perspektiv på hur system,
                processer och människor samverkar i en organisation.
              </p>
              <div className="p-6 rounded-xl bg-accent-glow/5 border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[3px] h-full bg-accent-glow" />
                <p className="text-white/75 italic pl-2">
                  &ldquo;Med den här kombinationen tror jag verkligen att jag kan hjälpa många
                  verksamheter att utvecklas och förbättra sitt sätt att jobba.&rdquo;
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-4 mt-8 flex-wrap">
              <div className="flex-1 min-w-[90px] px-5 py-4 bg-white/[0.02] border border-white/10 rounded-xl">
                <div className="font-serif text-2xl text-white leading-none">9</div>
                <div className="text-xs text-white/40 mt-1">Års erfarenhet</div>
              </div>
              <div className="flex-1 min-w-[90px] px-5 py-4 bg-white/[0.02] border border-white/10 rounded-xl">
                <div className="font-serif text-xl text-white leading-none">Lön HR</div>
                <div className="text-xs text-white/40 mt-1">IT-Bakgrund</div>
              </div>
              <div className="flex-1 min-w-[90px] px-5 py-4 bg-white/[0.02] border border-white/10 rounded-xl">
                <div className="font-serif text-2xl text-accent-glow leading-none">AI</div>
                <div className="text-xs text-white/40 mt-1">Fokusområde</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
