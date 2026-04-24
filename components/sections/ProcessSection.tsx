import { FC } from 'react';
import Image from 'next/image';

const steps = [
    {
        num: '01',
        title: 'Kom igång',
        description: 'Med min intuitiva onboarding är du igång på nolltid.',
    },
    {
        num: '02',
        title: 'Anpassa & konfigurera',
        description: 'Jag skräddarsyr lösningen efter dina specifika behov och mål.',
    },
    {
        num: '03',
        title: 'Väx ert företag',
        description: 'Fatta välgrundade beslut som överträffar era mål.',
    },
];

export const ProcessSection: FC = () => {
    return (
        <section id="process" className="py-20 lg:py-32">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-4 sm:mb-0">
                        Starta din resa
                    </h2>
                    <a href="#contact" className="pill-btn-olive self-start">
                        Upptäck mer
                    </a>
                </div>

                {/* 3-column steps */}
                <div className="grid sm:grid-cols-3 gap-0">
                    {steps.map((step) => (
                        <div key={step.num} className="py-8 sm:px-6 first:pl-0 last:pr-0 border-t border-white/10">
                            {/* Large faded number */}
                            <p className="text-5xl md:text-6xl font-serif text-white/10 mb-6">
                                {step.num}
                            </p>
                            <h3 className="text-lg font-serif text-white mb-2">
                                {step.title}
                            </h3>
                            <p className="text-sm text-white/50 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Full-width image */}
                <div className="mt-16 relative w-full aspect-[21/9] rounded-3xl overflow-hidden">
                    <Image
                        src="/process-image.png"
                        alt="Flygfoto av grönt landskap"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
};
