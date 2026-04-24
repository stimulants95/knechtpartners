'use client';

import { FC, useRef, useEffect } from 'react';

/* ── SVG icons for cube faces ── */
const PayrollIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="18" rx="2" />
        <path d="M2 9h20M9 21V9" />
        <circle cx="16" cy="15" r="2" />
    </svg>
);

const HRIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);

const AIIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4.5L6 21l1.5-7.5L2 9h7z" />
    </svg>
);

const OptimizationIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
);

const AnalyticsIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 20V10M12 20V4M6 20v-6" />
    </svg>
);

const AutomationIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="3" />
    </svg>
);

export const GlassCube: FC = () => {
    const sceneRef = useRef<HTMLDivElement>(null);

    /* Continuous rotation via requestAnimationFrame */
    const cubeRef = useRef<HTMLDivElement>(null);
    const rotationRef = useRef(35);

    useEffect(() => {
        let animId: number;
        const animate = () => {
            rotationRef.current += 0.15;
            if (cubeRef.current) {
                cubeRef.current.style.transform = `
          rotateX(-20deg)
          rotateY(${rotationRef.current}deg)
        `;
            }
            animId = requestAnimationFrame(animate);
        };
        animId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animId);
    }, []);

    const half = 160; // Half of cube size (320px on desktop)

    return (
        <div
            ref={sceneRef}
            className="glass-cube-scene"
            style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
        >
            <div ref={cubeRef} className="glass-cube">
                {/* ── FRONT ── */}
                <div
                    className="glass-cube-face"
                    style={{ transform: `translateZ(${half}px)` }}
                >
                    <div className="glass-face-grid">
                        <div className="glass-face-cell">
                            <PayrollIcon />
                            <span>Lön</span>
                        </div>
                        <div className="glass-face-cell">
                            <HRIcon />
                            <span>HR</span>
                        </div>
                    </div>
                </div>

                {/* ── BACK ── */}
                <div
                    className="glass-cube-face"
                    style={{ transform: `rotateY(180deg) translateZ(${half}px)` }}
                >
                    <div className="glass-face-grid">
                        <div className="glass-face-cell">
                            <AIIcon />
                            <span>AI</span>
                        </div>
                        <div className="glass-face-cell">
                            <OptimizationIcon />
                            <span>Optimering</span>
                        </div>
                    </div>
                </div>

                {/* ── RIGHT ── */}
                <div
                    className="glass-cube-face glass-cube-face--accent"
                    style={{ transform: `rotateY(90deg) translateZ(${half}px)` }}
                >
                    <div className="glass-face-grid">
                        <div className="glass-face-cell">
                            <AnalyticsIcon />
                            <span>Analys</span>
                        </div>
                        <div className="glass-face-cell">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                                <polyline points="17 6 23 6 23 12" />
                            </svg>
                            <span>Tillväxt</span>
                        </div>
                    </div>
                </div>

                {/* ── LEFT ── */}
                <div
                    className="glass-cube-face glass-cube-face--accent"
                    style={{ transform: `rotateY(-90deg) translateZ(${half}px)` }}
                >
                    <div className="glass-face-grid">
                        <div className="glass-face-cell">
                            <AutomationIcon />
                            <span>Automatisering</span>
                        </div>
                        <div className="glass-face-cell">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                            <span>Säkerhet</span>
                        </div>
                    </div>
                </div>

                {/* ── TOP ── */}
                <div
                    className="glass-cube-face glass-cube-face--top"
                    style={{ transform: `rotateX(90deg) translateZ(${half}px)` }}
                >
                    <div className="glass-face-logo">
                        <span className="glass-face-k">K</span>
                        <span className="glass-face-tagline">Knecht & Partners</span>
                    </div>
                </div>

                {/* ── BOTTOM ── */}
                <div
                    className="glass-cube-face"
                    style={{ transform: `rotateX(-90deg) translateZ(${half}px)` }}
                />

                {/* ── Inner glow core ── */}
                <div className="glass-cube-core" />
            </div>
        </div>
    );
};
