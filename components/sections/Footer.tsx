import { FC } from 'react';

const footerLinks = [
    { label: 'Om mig', href: '#profile' },
    { label: 'Process', href: '#process' },
    { label: 'Projekt', href: '#projects' },
    { label: 'Kontakt', href: '#contact' },
];

export const Footer: FC = () => {
    return (
        <footer className="pb-12">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="section-divider mb-12" />

                <div className="flex flex-wrap gap-6 mb-12">
                    {footerLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-white/40 hover:text-white transition-colors duration-300"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="w-[30px] h-[30px] flex items-center justify-center rounded-lg bg-accent-glow/10 border border-accent-glow/20 font-serif text-sm font-bold text-accent-glow">
                            K
                        </div>
                        <span className="text-sm text-white/40">
                            © Knecht &amp; Partners AB. 2025
                        </span>
                    </div>
                    <span className="text-sm text-white/30">
                        Org.nr: 559525-8236 &nbsp;·&nbsp; Alla rättigheter förbehållna
                    </span>
                </div>
            </div>
        </footer>
    );
};
