import { FC } from 'react';
import Image from 'next/image';

export const TestimonialSection: FC = () => {
    return (
        <section className="py-20 lg:py-32">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-0 min-h-[500px]">
                    {/* Left — Image */}
                    <div className="relative aspect-square lg:aspect-auto rounded-3xl lg:rounded-r-none lg:rounded-l-3xl overflow-hidden">
                        <Image
                            src="/testimonial-image.png"
                            alt="Abstrakt skulptur"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Right — Quote */}
                    <div className="flex flex-col justify-center py-12 lg:py-16 lg:pl-16">
                        <blockquote className="text-2xl sm:text-3xl md:text-4xl font-serif text-white leading-snug mb-10">
                            &ldquo;Jag var skeptisk, men Knecht &amp; Partners har helt förändrat hur vi hanterar våra HR-processer. Insikterna är tydliga och plattformen är enkel att förstå. Jag kan inte tänka mig att driva företaget utan dem.&rdquo;
                        </blockquote>

                        <div>
                            <p className="font-medium text-white">Anna Lindström</p>
                            <p className="text-sm text-white/40">HR-direktör, TechNord AB</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
