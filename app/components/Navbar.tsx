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
                    visible: { y: 0 },
                    hidden: { y: "-100%" }
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className={`fixed top-0 left-0 w-full z-[100] transition-colors duration-400 ${isLight ? 'theme-invert' : ''}`}
            >
                {/* O Efeito Glassmorphism Complexo */}
                <div className={`absolute inset-0 -z-10 backdrop-blur-[24px] [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] transition-colors duration-400 ${isLight ? 'bg-white/50' : 'bg-black/5'}`} />

                <div className="flex justify-between items-center p-[24px_48px] max-md:p-[24px] pointer-events-auto">
                    
                    {/* Esquerda: Logo */}
                    <div className="flex items-center gap-3 cursor-pointer z-[102]">
                        <span className={`font-display tracking-tight text-[22px] transition-colors duration-400 ${isLight ? 'text-[#111111]' : 'text-white'}`}>
                            <span className="font-light">CF</span><span className="font-bold">CARREIRA</span>
                        </span>
                    </div>

                    {/* Centro: Menu Desktop */}
                    <nav className="absolute left-1/2 -translate-x-1/2 flex gap-[32px] max-md:hidden">
                        <a href="#experimentos" className={`font-sans text-[13px] font-bold uppercase tracking-[0.05em] transition-colors duration-400 opacity-70 hover:opacity-100 ${isLight ? 'text-[#111111]' : 'text-white'}`}>Experimentos</a>
                        <a href="#arquitetura" className={`font-sans text-[13px] font-bold uppercase tracking-[0.05em] transition-colors duration-400 opacity-70 hover:opacity-100 ${isLight ? 'text-[#111111]' : 'text-white'}`}>Arquitetura</a>
                        <a href="#fundamentacao" className={`font-sans text-[13px] font-bold uppercase tracking-[0.05em] transition-colors duration-400 opacity-70 hover:opacity-100 ${isLight ? 'text-[#111111]' : 'text-white'}`}>Fundamentação</a>
                        <a href="#sandbox" className={`font-sans text-[13px] font-bold uppercase tracking-[0.05em] transition-colors duration-400 opacity-70 hover:opacity-100 ${isLight ? 'text-[#111111]' : 'text-white'}`}>Sandbox</a>
                    </nav>

                    {/* Botão Hamburger Mobile */}
                    <button 
                        className="hidden max-md:flex flex-col gap-[6px] cursor-pointer bg-transparent border-none p-[8px] z-[102]"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle Menu"
                    >
                        <div className={`w-[28px] h-[2px] transition-colors duration-400 ${isLight && !menuOpen ? 'bg-[#111111]' : 'bg-white'}`} />
                        <div className={`w-[28px] h-[2px] transition-colors duration-400 ${isLight && !menuOpen ? 'bg-[#111111]' : 'bg-white'}`} />
                    </button>
                    
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
