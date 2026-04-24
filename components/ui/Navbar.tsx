'use client';

import { FC, useState, useEffect } from 'react';

const navLinks = [
    { label: 'Om mig', href: '#profile' },
    { label: 'Process', href: '#process' },
    { label: 'Projekt', href: '#projects' },
    { label: 'Kontakt', href: '#contact' },
];

export const Navbar: FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-hero-dark/90 backdrop-blur-md shadow-sm shadow-black/20'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20 lg:h-24">
                    {/* Logo */}
                    <a href="#" className="flex-shrink-0 flex items-center gap-2 text-white no-underline">
                        <div className="w-[34px] h-[34px] flex items-center justify-center rounded-lg bg-accent-glow/10 border border-accent-glow/30 font-serif text-base font-bold text-accent-glow">
                            K
                        </div>
                        <span className="font-serif text-lg text-white tracking-[-0.01em]">Knecht &amp; Partners</span>
                    </a>

                    {/* Desktop nav links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-medium transition-colors duration-300 ${scrolled
                                    ? 'text-white/60 hover:text-white'
                                    : 'text-white/70 hover:text-white'
                                    }`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className={`md:hidden p-2 ${scrolled ? 'text-white' : 'text-white'}`}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile menu */}
                {mobileOpen && (
                    <div className={`md:hidden pb-6 pt-2 border-t ${scrolled ? 'border-white/10' : 'border-white/10'}`}>
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className={`block py-3 text-sm font-medium transition-colors ${scrolled ? 'text-white/60 hover:text-white' : 'text-white/70 hover:text-white'
                                    }`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};
