'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ArrowDown, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';

export default function ExecutiveDeck() {
    const { lang } = useLanguage();
    const deck = translations[lang].leanOps.deck;
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [touchStartX, setTouchStartX] = useState<number | null>(null);
    const lastWheelTimeRef = useRef(0);

    const totalSlides = deck.slides.length;

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
    }, [totalSlides]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
    }, []);

    const scrollToDossier = useCallback(() => {
        setIsUnlocked(true);
        if (typeof document !== 'undefined') {
            document.body.style.overflow = '';
        }
        setTimeout(() => {
            const el = document.getElementById('diagnostico');
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }, 50);
    }, []);

    // Se o usuário chegar ao último slide (slide 6), libera a rolagem da página
    useEffect(() => {
        if (currentSlide === totalSlides - 1) {
            setIsUnlocked(true);
        }
    }, [currentSlide, totalSlides]);

    // Bloqueia rolagem do body enquanto estiver dentro da apresentação (até desbloquear)
    useEffect(() => {
        if (!isUnlocked) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isUnlocked]);

    // Navegação via scroll / mousewheel: avança os slides de 1 a 6 antes de liberar a rolagem da página
    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (isUnlocked) return;

            // Filtra ruídos mínimos de touchpad
            if (Math.abs(e.deltaY) < 25) return;

            const now = Date.now();
            if (now - lastWheelTimeRef.current < 450) {
                e.preventDefault();
                return;
            }

            if (e.deltaY > 0) {
                // Scroll para baixo
                if (currentSlide < totalSlides - 1) {
                    e.preventDefault();
                    lastWheelTimeRef.current = now;
                    nextSlide();
                } else {
                    // No último slide, destrava a página
                    setIsUnlocked(true);
                    document.body.style.overflow = '';
                }
            } else if (e.deltaY < 0) {
                // Scroll para cima
                if (currentSlide > 0) {
                    e.preventDefault();
                    lastWheelTimeRef.current = now;
                    prevSlide();
                }
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        return () => window.removeEventListener('wheel', handleWheel);
    }, [isUnlocked, currentSlide, totalSlides, nextSlide, prevSlide]);

    // Navegação pelo teclado (ArrowLeft / ArrowRight)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') {
                nextSlide();
            } else if (e.key === 'ArrowLeft') {
                prevSlide();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide]);

    // Swipe em mobile (touch horizontal)
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX === null) return;
        const touchEndX = e.changedTouches[0].clientX;
        const diffX = touchStartX - touchEndX;

        if (diffX > 50) {
            nextSlide();
        } else if (diffX < -50) {
            prevSlide();
        }
        setTouchStartX(null);
    };

    const slide = deck.slides[currentSlide];

    return (
        <section 
            className="relative w-full h-[100dvh] max-h-[100dvh] bg-[#0b0b0b] text-white flex flex-col justify-between pt-16 sm:pt-20 lg:pt-20 pb-3 sm:pb-4 px-4 sm:px-8 lg:px-12 overflow-hidden selection:bg-white selection:text-black"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {/* Background Video Cinematográfico com Overlay Escuro */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <video
                    src="/footages/lean-ops-1080p-202608242219.webm"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover opacity-35"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0b]/90 via-[#0b0b0b]/80 to-[#0b0b0b]" />
            </div>

            {/* Linha Superior: Badge Executivo & Barra de Progresso Segmentada */}
            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-2 sm:gap-3 shrink-0 pb-1">
                <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-widest text-white/80 uppercase">
                            {deck.badge}
                        </span>
                    </div>

                    <button
                        onClick={scrollToDossier}
                        className="group inline-flex items-center gap-1.5 text-white/60 hover:text-white transition-all font-mono text-[11px] sm:text-[12px] cursor-pointer"
                    >
                        <span>{deck.skipToCase}</span>
                        <ArrowDown size={13} className="group-hover:translate-y-0.5 transition-transform" />
                    </button>
                </div>

                {/* Barra de Progresso Segmentada (Estilo Keynote / Stories) */}
                <div className="grid grid-cols-6 gap-1.5 sm:gap-2 w-full pt-1">
                    {deck.slides.map((_, idx) => {
                        const isActive = idx === currentSlide;
                        const isPast = idx < currentSlide;
                        return (
                            <button
                                key={idx}
                                onClick={() => setCurrentSlide(idx)}
                                className="group relative h-1 sm:h-1.5 rounded-full overflow-hidden bg-white/15 cursor-pointer transition-all hover:bg-white/25"
                                title={`Slide ${idx + 1}`}
                            >
                                <motion.div
                                    className="h-full bg-white rounded-full"
                                    initial={false}
                                    animate={{
                                        width: isActive ? '100%' : isPast ? '100%' : '0%',
                                        opacity: isActive ? 1 : isPast ? 0.8 : 0
                                    }}
                                    transition={{ duration: 0.25 }}
                                />
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Conteúdo Central do Slide: Flex-1 com min-h-0 para nunca estourar a viewport */}
            <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 min-h-0 flex items-center justify-center my-auto py-2 sm:py-3 overflow-y-auto lg:overflow-visible scrollbar-hide">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full grid lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 items-center"
                    >
                        {/* Coluna Esquerda: Narrativa Executiva (Em mobile ocupa largura total dividida em 2: texto e depois boxes) */}
                        <div className="w-full lg:col-span-7 flex flex-col justify-center">
                            
                            {/* Bloco 1: Texto (Tag, Título e Subtítulo/Texto de apoio) */}
                            <div className="w-full flex flex-col mb-3 sm:mb-4 lg:mb-5">
                                <span className="font-mono text-[10px] sm:text-[11px] lg:text-[12px] font-bold text-emerald-400 tracking-[0.14em] uppercase mb-1.5 sm:mb-2 block">
                                    {slide.tag}
                                </span>

                                <h2 className="font-display font-medium text-[clamp(19px,2.2vw,32px)] leading-[1.16] tracking-[-0.03em] text-white mb-2 sm:mb-3">
                                    {slide.title}
                                </h2>

                                <p className="font-sans text-[clamp(12px,1.05vw,15px)] leading-[1.48] text-white/75 font-normal max-w-2xl">
                                    {slide.subtitle}
                                </p>
                            </div>

                            {/* Bloco 2: Boxes de Apoio / KPIs listados verticalmente em mobile, em grid no desktop (Slides 1 a 5) */}
                            {slide.kpis && (
                                <div className="w-full flex flex-col gap-2 sm:grid sm:grid-cols-3 sm:gap-2.5">
                                    {slide.kpis.map((kpi, kIdx) => (
                                        <div 
                                            key={kIdx}
                                            className="p-2.5 sm:p-3 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md flex flex-col justify-between"
                                        >
                                            <div className="flex items-baseline justify-between sm:block gap-2 mb-0.5">
                                                <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-400 sm:text-white/50 block">
                                                    {kpi.label}
                                                </span>
                                                <span className="font-display font-bold text-[14px] sm:text-[16px] text-white leading-tight">
                                                    {kpi.val}
                                                </span>
                                            </div>
                                            <span className="font-sans text-[10px] sm:text-[11px] text-white/60 leading-snug">
                                                {kpi.desc}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Bloco 2 para o Slide 6: CTAs Executivos (Case Study Completo e Continuar no WhatsApp) */}
                            {slide.ctas && (
                                <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-1">
                                    <button
                                        onClick={scrollToDossier}
                                        className="w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white text-black font-sans font-semibold text-[13px] sm:text-[14px] hover:bg-white/90 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-white/10"
                                    >
                                        <span>{slide.ctas.primary}</span>
                                    </button>

                                    <a
                                        href="https://wa.me/5511994787501"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="w-full sm:w-auto px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-white/[0.08] hover:bg-white/[0.14] border border-white/15 text-white font-sans font-medium text-[13px] sm:text-[14px] transition-all flex items-center justify-center gap-2 no-underline"
                                    >
                                        <MessageCircle size={16} className="text-emerald-400" />
                                        <span>{slide.ctas.whatsapp}</span>
                                    </a>
                                </div>
                            )}
                        </div>

                        {/* Coluna Direita: Mockup Real do Cockpit (Ocultado em mobile por instrução expressa) */}
                        <div className="hidden lg:flex lg:col-span-5 flex-col items-center justify-center">
                            <div className="relative w-full max-h-[32vh] lg:max-h-[38vh] aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden border border-white/15 bg-black/60 shadow-2xl shadow-black/80 group">
                                <Image
                                    src={slide.image}
                                    alt={slide.imageCaption}
                                    fill
                                    priority
                                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                                
                                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-white/80 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                                    <span className="truncate">{slide.imageCaption}</span>
                                    <span className="text-emerald-400 shrink-0 ml-2">● LIVE</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Linha Inferior: Controles de Navegação & Indicador Numérico (Fixos na base da viewport) */}
            <div className="relative z-10 w-full max-w-7xl mx-auto flex items-center justify-between shrink-0 pt-2.5 sm:pt-3 border-t border-white/10">
                <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] sm:text-[12px] text-white/50 tracking-wider">
                        {deck.slideLabel} <strong className="text-white">{String(currentSlide + 1).padStart(2, '0')}</strong> {deck.ofLabel} {String(totalSlides).padStart(2, '0')}
                    </span>
                    <span className="hidden sm:inline text-white/20">|</span>
                    <span className="hidden sm:inline font-mono text-[10px] sm:text-[11px] text-white/40">
                        Use as setas ← / → do teclado para navegar
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={prevSlide}
                        disabled={currentSlide === 0}
                        aria-label={deck.prevBtn}
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all ${
                            currentSlide === 0
                                ? 'border-white/10 text-white/20 cursor-not-allowed bg-transparent'
                                : 'border-white/20 text-white hover:bg-white/10 hover:border-white/40 cursor-pointer bg-white/[0.03]'
                        }`}
                    >
                        <ChevronLeft size={16} />
                    </button>

                    <button
                        onClick={nextSlide}
                        disabled={currentSlide === totalSlides - 1}
                        aria-label={deck.nextBtn}
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all ${
                            currentSlide === totalSlides - 1
                                ? 'border-white/10 text-white/20 cursor-not-allowed bg-transparent'
                                : 'border-white/20 text-white hover:bg-white/10 hover:border-white/40 cursor-pointer bg-white/[0.03]'
                        }`}
                    >
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </section>
    );
}
