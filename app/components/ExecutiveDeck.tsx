'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ArrowDown, ExternalLink, Sparkles, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';

export default function ExecutiveDeck() {
    const { lang } = useLanguage();
    const deck = translations[lang].leanOps.deck;
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStartX, setTouchStartX] = useState<number | null>(null);

    const totalSlides = deck.slides.length;

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
    }, [totalSlides]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
    }, []);

    const scrollToDossier = () => {
        const el = document.getElementById('diagnostico');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToTerminal = () => {
        const el = document.getElementById('sandbox-case');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Keyboard navigation (ArrowLeft / ArrowRight)
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

    // Touch Swipe handling for mobile
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
            className="relative w-full min-h-screen bg-[#0b0b0b] text-white flex flex-col justify-between pt-24 pb-8 px-4 sm:px-8 lg:px-14 overflow-hidden selection:bg-white selection:text-black"
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
            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="font-mono text-[11px] font-bold tracking-widest text-white/80 uppercase">
                            {deck.badge}
                        </span>
                    </div>

                    <button
                        onClick={scrollToDossier}
                        className="group inline-flex items-center gap-1.5 text-white/60 hover:text-white transition-all font-mono text-[12px] cursor-pointer"
                    >
                        <span>{deck.skipToCase}</span>
                        <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
                    </button>
                </div>

                {/* Barra de Progresso Segmentada (Estilo Keynote / Stories) */}
                <div className="grid grid-cols-6 gap-2 w-full pt-1">
                    {deck.slides.map((_, idx) => {
                        const isActive = idx === currentSlide;
                        const isPast = idx < currentSlide;
                        return (
                            <button
                                key={idx}
                                onClick={() => setCurrentSlide(idx)}
                                className="group relative h-1.5 rounded-full overflow-hidden bg-white/15 cursor-pointer transition-all hover:bg-white/25"
                                title={`Lâmina ${idx + 1}`}
                            >
                                <motion.div
                                    className="h-full bg-white rounded-full"
                                    initial={false}
                                    animate={{
                                        width: isActive ? '100%' : isPast ? '100%' : '0%',
                                        opacity: isActive ? 1 : isPast ? 0.8 : 0
                                    }}
                                    transition={{ duration: 0.3 }}
                                />
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Conteúdo Central do Slide */}
            <div className="relative z-10 w-full max-w-7xl mx-auto my-auto py-6 lg:py-8">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                    >
                        {/* Coluna Esquerda: Narrativa Executiva */}
                        <div className="lg:col-span-7 flex flex-col justify-center">
                            <span className="font-mono text-[12px] font-bold text-emerald-400 tracking-[0.14em] uppercase mb-3 block">
                                {slide.tag}
                            </span>

                            <h2 className="font-display font-medium text-[clamp(26px,3.8vw,48px)] leading-[1.12] tracking-[-0.03em] text-white mb-5">
                                {slide.title}
                            </h2>

                            <p className="font-sans text-[clamp(15px,1.6vw,19px)] leading-[1.55] text-white/80 font-normal mb-8 max-w-2xl">
                                {slide.subtitle}
                            </p>

                            {/* Cards de Métricas / KPIs em Destaque (Slides 1 a 5) */}
                            {slide.kpis && (
                                <div className="grid sm:grid-cols-3 gap-3 mb-6">
                                    {slide.kpis.map((kpi, kIdx) => (
                                        <div 
                                            key={kIdx}
                                            className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md flex flex-col justify-between"
                                        >
                                            <span className="font-mono text-[10px] uppercase tracking-wider text-white/50 block mb-1">
                                                {kpi.label}
                                            </span>
                                            <span className="font-display font-bold text-[18px] text-white leading-tight mb-1">
                                                {kpi.val}
                                            </span>
                                            <span className="font-sans text-[11px] text-white/60 leading-snug">
                                                {kpi.desc}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* CTAs de Fechamento (Slide 6) */}
                            {slide.ctas && (
                                <div className="flex flex-wrap items-center gap-3 pt-2">
                                    <button
                                        onClick={scrollToDossier}
                                        className="px-6 py-3.5 rounded-full bg-white text-black font-sans font-semibold text-[15px] hover:bg-white/90 transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-white/10"
                                    >
                                        <span>{slide.ctas.primary}</span>
                                    </button>

                                    <a
                                        href="https://wa.me/5511994787501"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="px-5 py-3.5 rounded-full bg-white/[0.08] hover:bg-white/[0.14] border border-white/15 text-white font-sans font-medium text-[14px] transition-all flex items-center gap-2 no-underline"
                                    >
                                        <MessageCircle size={17} className="text-emerald-400" />
                                        <span>{slide.ctas.whatsapp}</span>
                                    </a>

                                    <button
                                        onClick={scrollToTerminal}
                                        className="px-5 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white/80 hover:text-white font-sans text-[14px] transition-all flex items-center gap-2 cursor-pointer"
                                    >
                                        <Sparkles size={16} className="text-blue-400" />
                                        <span>{slide.ctas.sandbox}</span>
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Coluna Direita: Mockup Real do Cockpit */}
                        <div className="lg:col-span-5 flex flex-col items-center">
                            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-white/15 bg-black/60 shadow-2xl shadow-black/80 group">
                                <Image
                                    src={slide.image}
                                    alt={slide.imageCaption}
                                    fill
                                    priority
                                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                                
                                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white/80 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                                    <span className="truncate">{slide.imageCaption}</span>
                                    <span className="text-emerald-400 shrink-0 ml-2">● LIVE</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Linha Inferior: Controles de Navegação & Indicador Numérico */}
            <div className="relative z-10 w-full max-w-7xl mx-auto flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                    <span className="font-mono text-[13px] text-white/50 tracking-wider">
                        {deck.slideLabel} <strong className="text-white">{String(currentSlide + 1).padStart(2, '0')}</strong> {deck.ofLabel} {String(totalSlides).padStart(2, '0')}
                    </span>
                    <span className="hidden sm:inline text-white/20">|</span>
                    <span className="hidden sm:inline font-mono text-[11px] text-white/40">
                        Use as setas ← / → do teclado para navegar
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={prevSlide}
                        disabled={currentSlide === 0}
                        aria-label={deck.prevBtn}
                        className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                            currentSlide === 0
                                ? 'border-white/10 text-white/20 cursor-not-allowed bg-transparent'
                                : 'border-white/20 text-white hover:bg-white/10 hover:border-white/40 cursor-pointer bg-white/[0.03]'
                        }`}
                    >
                        <ChevronLeft size={18} />
                    </button>

                    <button
                        onClick={nextSlide}
                        disabled={currentSlide === totalSlides - 1}
                        aria-label={deck.nextBtn}
                        className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                            currentSlide === totalSlides - 1
                                ? 'border-white/10 text-white/20 cursor-not-allowed bg-transparent'
                                : 'border-white/20 text-white hover:bg-white/10 hover:border-white/40 cursor-pointer bg-white/[0.03]'
                        }`}
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
}
