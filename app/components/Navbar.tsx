'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [isLight, setIsLight] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

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
                    <div className="flex items-center cursor-pointer z-[102]">
                        <span className={`font-display tracking-tight text-[22px] transition-colors duration-400 ${isLight ? 'text-[#111111]' : 'text-white'}`}>
                            <span className="font-light">CF</span><span className="font-bold">CARREIRA</span>
                        </span>
                    </div>

                    {/* Centro: Menu Desktop */}
                    <nav className="absolute left-1/2 -translate-x-1/2 flex gap-[32px] max-md:hidden">
                        <a href="#experimentos" className={`font-sans text-[18px] font-medium transition-colors duration-400 opacity-90 hover:opacity-100 ${isLight ? 'text-[#111111]' : 'text-white'}`}>Experimentos</a>
                        <a href="#arquitetura" className={`font-sans text-[18px] font-medium transition-colors duration-400 opacity-90 hover:opacity-100 ${isLight ? 'text-[#111111]' : 'text-white'}`}>Arquitetura</a>
                        <a href="#fundamentacao" className={`font-sans text-[18px] font-medium transition-colors duration-400 opacity-90 hover:opacity-100 ${isLight ? 'text-[#111111]' : 'text-white'}`}>Fundamentação</a>
                        <a href="#sandbox" className={`font-sans text-[18px] font-medium transition-colors duration-400 opacity-90 hover:opacity-100 ${isLight ? 'text-[#111111]' : 'text-white'}`}>Sandbox</a>
                    </nav>

                    {/* Direita: Redes Sociais e Hamburger */}
                    <div className="flex items-center gap-[32px] z-[102]">
                        <div className={`hidden md:flex items-center gap-[16px] transition-colors duration-400 ${isLight ? 'text-[#111111]' : 'text-white/80'}`}>
                            <a href="https://wa.me/5511994787501" target="_blank" rel="noreferrer" className="transition-all hover:opacity-70" title="WhatsApp">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </a>
                            <a href="https://github.com/cfcarreira84" target="_blank" rel="noreferrer" className="transition-all hover:opacity-70" title="GitHub">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </a>
                            <a href="https://discordapp.com/users/cf.carreira" target="_blank" rel="noreferrer" className="transition-all hover:opacity-70" title="Discord">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                            </a>
                            <a href="https://www.linkedin.com/in/cfcarreira/" target="_blank" rel="noreferrer" className="transition-all hover:opacity-70" title="LinkedIn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
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
                            <div className="font-display tracking-tight text-[22px] text-white">
                                <span className="font-light">CF</span><span className="font-bold">CARREIRA</span>
                            </div>
                            <button 
                                className="bg-transparent border-none text-white text-[32px] font-light cursor-pointer p-[8px] flex items-center justify-center"
                                onClick={() => setMenuOpen(false)}
                                aria-label="Fechar Menu"
                            >
                                ✕
                            </button>
                        </div>
                        
                        <div className="flex flex-col gap-[32px]">
                            <a href="#experimentos" onClick={handleLinkClick} className="font-sans text-[36px] font-medium text-white no-underline tracking-[-0.02em]">Experimentos</a>
                            <a href="#arquitetura" onClick={handleLinkClick} className="font-sans text-[36px] font-medium text-white no-underline tracking-[-0.02em]">Arquitetura</a>
                            <a href="#fundamentacao" onClick={handleLinkClick} className="font-sans text-[36px] font-medium text-white no-underline tracking-[-0.02em]">Fundamentação</a>
                            <a href="#sandbox" onClick={handleLinkClick} className="font-sans text-[36px] font-medium text-white no-underline tracking-[-0.02em]">Sandbox</a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
