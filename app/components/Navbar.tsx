'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useLanguage, Language } from '../context/LanguageContext';
import { translations } from '../context/translations';

export default function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [isLight, setIsLight] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const langDropdownRef = useRef<HTMLDivElement>(null);
    const { lang, setLanguage } = useLanguage();
    const t = translations[lang].nav;

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true); // scrolling down
        } else {
            setHidden(false); // scrolling up
        }
    });

    useEffect(() => {
        const handleScroll = () => {
            const lightSections = document.querySelectorAll('.light-section');
            let isLightBg = false;

            lightSections.forEach(sec => {
                const rect = sec.getBoundingClientRect();
                if (rect.top <= 80 && rect.bottom >= 80) {
                    isLightBg = true;
                }
            });
            setIsLight(isLightBg);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
            document.body.classList.add('menu-open');
        } else {
            document.body.style.overflow = '';
            document.body.classList.remove('menu-open');
        }
        
        return () => {
            document.body.style.overflow = '';
            document.body.classList.remove('menu-open');
        };
    }, [menuOpen]);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (langDropdownRef.current && !langDropdownRef.current.contains(e.target as Node)) {
                setIsLangOpen(false);
            }
        };
        if (isLangOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isLangOpen]);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <motion.header
                variants={{
                    visible: { y: 0, opacity: 1 },
                    hidden: { y: "-100%", opacity: 0 }
                }}
                initial={{ opacity: 0 }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className={`fixed top-0 left-0 w-full z-[100] transition-colors duration-400 ${isLight ? 'theme-invert' : ''}`}
            >
                {/* O Efeito Glassmorphism Complexo */}
                <div className={`absolute top-0 left-0 w-full h-[100px] -z-10 backdrop-blur-[24px] [mask-image:linear-gradient(to_bottom,black_30%,transparent_100%)] transition-colors duration-400 pointer-events-none ${isLight ? 'bg-[#F5F3ED]/65' : 'bg-black/5'}`} />

                <div className="flex justify-between items-center p-[24px_48px] max-md:p-[24px] pointer-events-auto">
                    
                    {/* Esquerda: Logo */}
                    <a href="/" className="flex items-center cursor-pointer z-[102] no-underline">
                        <span className={`font-display tracking-tight text-[22px] transition-colors duration-400 ${isLight ? 'text-[#111111]' : 'text-white'}`}>
                            <span className="font-light">CF</span><span className="font-bold">CARREIRA</span>
                        </span>
                    </a>

                    {/* Centro: Menu Desktop */}
                    <nav className="absolute left-1/2 -translate-x-1/2 flex gap-[32px] max-md:hidden">
                        <a href="/#experimentos" className={`font-sans text-[18px] font-medium transition-colors duration-400 opacity-90 hover:opacity-100 ${isLight ? 'text-[#111111]' : 'text-white'}`}>{t.experimentos}</a>
                        <a href="/#arquitetura" className={`font-sans text-[18px] font-medium transition-colors duration-400 opacity-90 hover:opacity-100 ${isLight ? 'text-[#111111]' : 'text-white'}`}>{t.arquitetura}</a>
                        <a href="/#fundamentacao" className={`font-sans text-[18px] font-medium transition-colors duration-400 opacity-90 hover:opacity-100 ${isLight ? 'text-[#111111]' : 'text-white'}`}>{t.fundamentacao}</a>
                        <a href="/#sandbox" className={`font-sans text-[18px] font-medium transition-colors duration-400 opacity-90 hover:opacity-100 ${isLight ? 'text-[#111111]' : 'text-white'}`}>{t.sandbox}</a>
                    </nav>

                    {/* Direita: Redes Sociais, Idiomas e Hamburger */}
                    <div className="flex items-center gap-[24px] z-[102]">
                        <div className={`hidden md:flex items-center gap-[16px] transition-colors duration-400 ${isLight ? 'text-[#111111]' : 'text-white/80'}`}>
                            <a href="https://wa.me/5511994787501" target="_blank" rel="noreferrer" className="transition-all hover:opacity-70" title="WhatsApp">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </a>
                            <a href="https://github.com/cfcarreira84" target="_blank" rel="noreferrer" className="transition-all hover:opacity-70" title="GitHub">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </a>
                            <a href="https://discordapp.com/users/cf.carreira" target="_blank" rel="noreferrer" className="transition-all hover:opacity-70" title="Discord">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/cfcarreira/" target="_blank" rel="noreferrer" className="transition-all hover:opacity-70" title="LinkedIn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>

                            {/* Divisor vertical sutil */}
                            <span className="w-[1px] h-[14px] bg-current opacity-25 mx-1" />

                            {/* Seletor Dropdown Minimalista de Idiomas (Ocupa o espaço de 1 ícone) */}
                            <div className="relative" ref={langDropdownRef}>
                                <button
                                    onClick={() => setIsLangOpen(!isLangOpen)}
                                    className={`flex items-center justify-center gap-1 h-8 px-2.5 rounded-full border transition-all duration-300 font-mono text-[11px] font-semibold tracking-wider cursor-pointer ${
                                        isLight
                                            ? isLangOpen
                                                ? 'border-black bg-black text-white shadow-sm'
                                                : 'border-black/20 hover:border-black/50 text-[#111111] bg-black/[0.04]'
                                            : isLangOpen
                                                ? 'border-white bg-white text-black shadow-sm'
                                                : 'border-white/20 hover:border-white/50 text-white/90 bg-white/[0.06]'
                                    }`}
                                    title="Idioma / Language"
                                    aria-expanded={isLangOpen}
                                >
                                    <span>{lang === 'zh' ? '中' : lang.toUpperCase()}</span>
                                    <motion.svg
                                        animate={{ rotate: isLangOpen ? 180 : 0 }}
                                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                                        width="10"
                                        height="10"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="opacity-70 shrink-0"
                                    >
                                        <path d="m6 9 6 6 6-6" />
                                    </motion.svg>
                                </button>

                                <AnimatePresence>
                                    {isLangOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -8, scale: 0.94 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: -8, scale: 0.94 }}
                                            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                                            className={`absolute right-0 top-full mt-2 w-36 rounded-2xl p-1.5 shadow-2xl backdrop-blur-2xl border z-[120] flex flex-col gap-1 ${
                                                isLight
                                                    ? 'bg-[#F5F3ED]/95 border-black/10 text-[#111111] shadow-black/10'
                                                    : 'bg-[#121212]/95 border-white/10 text-white shadow-black/60'
                                            }`}
                                        >
                                            {[
                                                { code: 'pt', label: 'Português', short: 'PT' },
                                                { code: 'en', label: 'English', short: 'EN' },
                                                { code: 'zh', label: '简体中文', short: '中' },
                                            ].map((item) => {
                                                const isActive = lang === item.code;
                                                return (
                                                    <button
                                                        key={item.code}
                                                        onClick={() => {
                                                            setLanguage(item.code as Language);
                                                            setIsLangOpen(false);
                                                        }}
                                                        className={`flex items-center justify-between w-full px-3 py-2 rounded-xl text-left font-mono text-[11px] transition-all cursor-pointer ${
                                                            isActive
                                                                ? isLight
                                                                    ? 'bg-black text-white font-bold'
                                                                    : 'bg-white text-black font-bold'
                                                                : isLight
                                                                    ? 'hover:bg-black/5 text-[#111111]/80 hover:text-[#111111]'
                                                                    : 'hover:bg-white/10 text-white/80 hover:text-white'
                                                        }`}
                                                    >
                                                        <span className="font-sans text-[13px]">{item.label}</span>
                                                        <span className={`text-[10px] uppercase font-mono tracking-wider ${isActive ? 'opacity-90' : 'opacity-40'}`}>
                                                            {item.short}
                                                        </span>
                                                    </button>
                                                );
                                            })}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                        
                        {/* Botão Hamburger Mobile */}
                        <button 
                            className="hidden max-md:flex flex-col gap-[6px] cursor-pointer bg-transparent border-none p-[8px]"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle Menu"
                        >
                            <div className={`w-[28px] h-[2px] transition-colors duration-400 ${isLight && !menuOpen ? 'bg-[#111111]' : 'bg-white'}`} />
                            <div className={`w-[28px] h-[2px] transition-colors duration-400 ${isLight && !menuOpen ? 'bg-[#111111]' : 'bg-white'}`} />
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        className="fixed inset-0 w-full h-full bg-[#0b0b0b] z-[999] flex flex-col p-[24px]"
                    >
                        <div className="flex justify-between items-center mb-[80px]">
                            <a href="/" onClick={handleLinkClick} className="font-display tracking-tight text-[22px] text-white no-underline">
                                <span className="font-light">CF</span><span className="font-bold">CARREIRA</span>
                            </a>
                            <button 
                                className="bg-transparent border-none text-white text-[32px] font-light cursor-pointer p-[8px] flex items-center justify-center"
                                onClick={() => setMenuOpen(false)}
                                aria-label="Fechar Menu"
                            >
                                ✕
                            </button>
                        </div>
                        
                        <div className="flex flex-col gap-[32px]">
                            <a href="/#experimentos" onClick={handleLinkClick} className="font-sans text-[36px] font-medium text-white no-underline tracking-[-0.02em]">{t.experimentos}</a>
                            <a href="/#arquitetura" onClick={handleLinkClick} className="font-sans text-[36px] font-medium text-white no-underline tracking-[-0.02em]">{t.arquitetura}</a>
                            <a href="/#fundamentacao" onClick={handleLinkClick} className="font-sans text-[36px] font-medium text-white no-underline tracking-[-0.02em]">{t.fundamentacao}</a>
                            <a href="/#sandbox" onClick={handleLinkClick} className="font-sans text-[36px] font-medium text-white no-underline tracking-[-0.02em]">{t.sandbox}</a>
                        </div>

                        {/* Mobile Language Switcher */}
                        <div className="mt-auto pb-8 pt-6 border-t border-white/10 flex flex-wrap gap-3 font-mono text-[13px]">
                            <button
                                onClick={() => { setLanguage('pt'); handleLinkClick(); }}
                                className={`px-4 py-2 rounded-full border transition-all cursor-pointer ${
                                    lang === 'pt' ? 'bg-white text-black border-white font-bold' : 'text-white/60 border-white/20'
                                }`}
                            >
                                PT · Português
                            </button>
                            <button
                                onClick={() => { setLanguage('en'); handleLinkClick(); }}
                                className={`px-4 py-2 rounded-full border transition-all cursor-pointer ${
                                    lang === 'en' ? 'bg-white text-black border-white font-bold' : 'text-white/60 border-white/20'
                                }`}
                            >
                                EN · English
                            </button>
                            <button
                                onClick={() => { setLanguage('zh'); handleLinkClick(); }}
                                className={`px-4 py-2 rounded-full border transition-all cursor-pointer ${
                                    lang === 'zh' ? 'bg-white text-black border-white font-bold' : 'text-white/60 border-white/20'
                                }`}
                            >
                                中 · 简体中文
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
