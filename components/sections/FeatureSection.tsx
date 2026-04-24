'use client';

import { FC } from 'react';

const steps = [
    {
        num: '01',
        title: 'Du berättar',
        text: 'Du delar med dig av hur din verksamhet ser ut idag, vad som inte fungerar optimalt och vad du vill uppnå.',
    },
    {
        num: '02',
        title: 'Analys',
        text: 'Jag går igenom din verksamhet och identifierar var de största förbättringsmöjligheterna finns.',
    },
    {
        num: '03',
        title: 'Samarbete och dialog',
        text: 'Vi diskuterar hur implementationen kan se ut och anpassar lösningen helt efter dina behov.',
    },
    {
        num: '04',
        title: 'Tydliga resultat',
        text: 'Du får konkreta förbättringar som direkt påverkar din verksamhet positivt.',
    },
    {
        num: '05',
        title: 'Uppföljning',
        text: 'Jag följer upp resultaten och säkerställer att förändringarna ger långsiktig effekt.',
    },
];

export const FeatureSection: FC = () => {
    return (
        <section id="process" className="py-20 lg:py-32">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="section-divider mb-16" />
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
                    {/* Left column */}
                    <div>
                        <p className="section-label">Så jobbar jag</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-4 leading-tight tracking-tight">
                            Ett metodiskt<br />helhetsgrepp
                        </h2>
                        <p className="text-white/50 mb-10 max-w-md leading-relaxed">
                            Jag arbetar metodiskt för att skapa långsiktiga förbättringar som verkligen gör skillnad för din verksamhet.
                        </p>

                        <ul className="space-y-0">
                            {steps.map((step) => (
                                <li
                                    key={step.num}
                                    className="flex gap-6 py-5 border-t border-white/10 last:border-b hover:pl-2 transition-all duration-300 group cursor-default"
                                >
                                    <span className="text-xs font-semibold text-white/25 mt-0.5 flex-shrink-0 group-hover:text-accent-glow transition-colors">
                                        {step.num}
                                    </span>
                                    <p className="text-sm text-white/55 leading-relaxed group-hover:text-white/80 transition-colors">
                                        <strong className="text-white/70 font-medium">{step.title}:</strong>{' '}
                                        {step.text}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right column — SVG illustration */}
                    <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-white/[0.02] to-accent-glow/[0.03] border border-white/5 p-12 flex items-center justify-center">
                        <svg viewBox="0 0 340 500" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#2EC4B6" stopOpacity="0.9" />
                                    <stop offset="100%" stopColor="#2EC4B6" stopOpacity="0.2" />
                                </linearGradient>
                            </defs>

                            {/* Vertical flow line */}
                            <line x1="170" y1="80" x2="170" y2="420" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="6,4" />

                            {/* Animated dot */}
                            <circle cx="170" cy="80" r="4" fill="#2EC4B6">
                                <animate attributeName="cy" values="80;160;240;320;420;80" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0 0 1 1" />
                                <animate attributeName="opacity" values="1;1;1;1;0;0" dur="5s" repeatCount="indefinite" />
                            </circle>

                            {/* Step 1: Magnifier */}
                            <g>
                                <circle cx="170" cy="80" r="42" fill="rgba(46,196,182,0.05)" stroke="rgba(46,196,182,0.25)" strokeWidth="1.5" />
                                <circle cx="168" cy="78" r="15" fill="none" stroke="#2EC4B6" strokeWidth="2" />
                                <line x1="179" y1="89" x2="188" y2="98" stroke="#2EC4B6" strokeWidth="2.5" strokeLinecap="round" />
                                <line x1="164" y1="78" x2="172" y2="78" stroke="#2EC4B6" strokeWidth="1.5" opacity="0.6" />
                                <line x1="168" y1="74" x2="168" y2="82" stroke="#2EC4B6" strokeWidth="1.5" opacity="0.6" />
                            </g>

                            {/* Step 2: Dialogue */}
                            <g>
                                <circle cx="170" cy="200" r="42" fill="rgba(46,196,182,0.05)" stroke="rgba(46,196,182,0.25)" strokeWidth="1.5" />
                                <rect x="155" y="188" width="24" height="17" rx="4" fill="none" stroke="#2EC4B6" strokeWidth="2" />
                                <path d="M158 205 L155 210 L163 205" fill="none" stroke="#2EC4B6" strokeWidth="1.5" />
                                <rect x="164" y="195" width="20" height="14" rx="4" fill="none" stroke="rgba(46,196,182,0.5)" strokeWidth="1.5" />
                                <path d="M181 209 L184 213 L177 209" fill="none" stroke="rgba(46,196,182,0.5)" strokeWidth="1.5" />
                            </g>

                            {/* Step 3: Target */}
                            <g>
                                <circle cx="170" cy="320" r="42" fill="rgba(46,196,182,0.05)" stroke="rgba(46,196,182,0.25)" strokeWidth="1.5" />
                                <circle cx="170" cy="320" r="20" fill="none" stroke="rgba(46,196,182,0.3)" strokeWidth="1.5" />
                                <circle cx="170" cy="320" r="12" fill="none" stroke="rgba(46,196,182,0.55)" strokeWidth="1.5" />
                                <circle cx="170" cy="320" r="4" fill="#2EC4B6" />
                                <line x1="188" y1="304" x2="176" y2="316" stroke="#2EC4B6" strokeWidth="2" strokeLinecap="round" />
                                <path d="M188 304 L184 308 M188 304 L184 300" stroke="#2EC4B6" strokeWidth="1.5" strokeLinecap="round" />
                            </g>

                            {/* Step 4: Checkmark */}
                            <g>
                                <circle cx="170" cy="430" r="42" fill="rgba(46,196,182,0.05)" stroke="rgba(46,196,182,0.25)" strokeWidth="1.5" />
                                <path d="M154 430 L165 442 L187 418" stroke="#2EC4B6" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                            </g>

                            {/* Labels */}
                            <text x="224" y="84" fill="rgba(46,196,182,0.6)" fontSize="10" fontFamily="Inter,sans-serif" fontWeight="600" letterSpacing="1">ANALYS</text>
                            <text x="224" y="204" fill="rgba(46,196,182,0.6)" fontSize="10" fontFamily="Inter,sans-serif" fontWeight="600" letterSpacing="1">DIALOG</text>
                            <text x="224" y="324" fill="rgba(46,196,182,0.6)" fontSize="10" fontFamily="Inter,sans-serif" fontWeight="600" letterSpacing="1">RESULTAT</text>
                            <text x="224" y="434" fill="rgba(46,196,182,0.6)" fontSize="10" fontFamily="Inter,sans-serif" fontWeight="600" letterSpacing="1">UPPFÖLJNING</text>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};
