'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const SLIDE_DURATION = 8000; // 8 seconds per slide

const slides = [
    {
        id: 1,
        title: "AI SDR",
        description: "Vendas autônomas via WhatsApp a custo < 0,1% da receita gerada",
        buttonText: "Explorar Case",
        image: "/images/ai-sdr.jpg",
        video: "/footages/sdr-ai-1080p-202608242215.webm",
        maskPath: "M 10.5 97.960938 L 589.5 97.960938 C 592.027344 97.960938 594.414062 99.121094 595.972656 101.113281 C 597.53125 103.101562 598.085938 105.699219 597.476562 108.152344 L 502.523438 491.847656 C 501.039062 497.835938 495.667969 502.039062 489.5 502.039062 L 110.5 502.039062 C 104.332031 502.039062 98.960938 497.835938 97.476562 491.847656 L 2.523438 108.152344 C 1.914062 105.699219 2.46875 103.101562 4.027344 101.113281 C 5.585938 99.121094 7.972656 97.960938 10.5 97.960938 Z M 10.5 97.960938"
    },
    {
        id: 2,
        title: "Executive BI",
        description: "Atribuição real de ROI unificando mídia, receita e margem",
        buttonText: "Explorar Case",
        image: "/images/executive-bi.jpg",
        video: "/footages/executive-bi-1080p-202608242218.webm",
        maskPath: "M 35.480469 251.566406 C 52.933594 272.554688 52.96875 328.246094 35.613281 349.316406 C 13.789062 375.808594 0.71875 409.699219 0.71875 446.546875 C 0.71875 531.640625 69.648438 600 153.8125 600 C 190.851562 600 224.75 586.972656 251.226562 565.214844 C 272.347656 547.855469 328.375 547.855469 349.496094 565.210938 C 375.972656 586.972656 409.875 600 446.921875 600 C 531.085938 600 600 531.640625 600 446.546875 C 600 409.425781 586.523438 375.304688 564.332031 348.726562 C 546.894531 327.847656 546.894531 272.867188 564.304688 251.964844 C 586.511719 225.300781 600 190.988281 600 153.453125 C 600 69.09375 531.085938 0 446.921875 0 C 410.195312 0 376.691406 12.738281 350.351562 34.0625 C 328.910156 51.421875 270.746094 51.226562 249.304688 33.871094 C 223.105469 12.664062 189.695312 0 153.078125 0 C 68.914062 0 0 69.09375 0 153.453125 C 0 190.796875 13.355469 224.960938 35.480469 251.566406 Z M 35.480469 251.566406"
    },
    {
        id: 3,
        title: "High-Ticket Sales",
        description: "GTM de luxo com elevação de 33% no ticket médio em vendas 100% digitais",
        buttonText: "Explorar Case",
        image: "/images/hight-tickets.jpg",
        video: "/footages/high-ticket-sales-1080p-202608242220.webm",
        maskPath: "M 300 0 C 134.316406 0 0 134.316406 0 300 C 0 465.683594 134.316406 600 300 600 C 465.683594 600 600 465.683594 600 300 C 600 134.316406 465.683594 0 300 0 Z M 300 0"
    },
    {
        id: 4,
        title: "Lean Ops",
        description: "Engenharia de processos entregando a capacidade de 50 pessoas com apenas 15",
        buttonText: "Explorar Case",
        image: "/images/lean-ops.jpg",
        video: "/footages/lean-ops-1080p-202608242219.webm",
        maskPath: "M 14.25 93.75 L 391.304688 93.75 C 506.5625 93.75 600 186.089844 600 300 C 600 413.910156 506.5625 506.25 391.304688 506.25 L 14.25 506.25 C 6.378906 506.25 0 499.871094 0 492 L 0 108 C 0 100.128906 6.378906 93.75 14.25 93.75 Z M 14.25 93.75"
    }
];

export default function HeroSlider({ isSplashActive = false }: { isSplashActive?: boolean }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (i: number) => {
        if (i === currentIndex) return;
        setCurrentIndex(i);
    };

    useEffect(() => {
        if (isSplashActive) return; // Pausa o timer enquanto SplashScreen estiver visível
        const timer = setInterval(nextSlide, SLIDE_DURATION);
        return () => clearInterval(timer);
    }, [currentIndex, isSplashActive]);

    return (
        <section id="experimentos" className="relative w-full h-screen bg-[#0b0b0b] overflow-hidden flex flex-col justify-end pb-12">
            
            <AnimatePresence initial={false}>
                {slides.map((slide, index) => (
                    index === currentIndex && (
                        <motion.div
                            key={slide.id}
                            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
                            style={{ WebkitMask: `url(#mask-${slide.id})`, mask: `url(#mask-${slide.id})` }}
                            variants={{
                                enter: { zIndex: 10, pointerEvents: "auto" },
                                exit: { zIndex: 20, pointerEvents: "none" }
                            }}
                            initial="enter"
                            animate="enter"
                            exit="exit"
                        >
                            <svg width="0" height="0" className="absolute pointer-events-none">
                                <defs>
                                    <mask id={`mask-${slide.id}`}>
                                        <rect x="-50vw" y="-50vh" width="200vw" height="200vh" fill="white" />
                                        <motion.g
                                            variants={{
                                                enter: { scale: 0, rotate: 0, x: "50vw", y: "50vh" },
                                                exit: { 
                                                    scale: 150, 
                                                    rotate: 180, 
                                                    x: "50vw", 
                                                    y: "50vh",
                                                    transition: { duration: 4.5, ease: [0.65, 0, 0.35, 1] }
                                                }
                                            }}
                                        >
                                            <path 
                                                d={slide.maskPath} 
                                                fill="black" 
                                                transform="translate(-300, -300)" 
                                            />
                                        </motion.g>
                                    </mask>
                                </defs>
                            </svg>

                            <div className="absolute inset-0 -z-10">
                                <Image 
                                    src={slide.image} 
                                    alt={slide.title} 
                                    fill 
                                    className="object-cover" 
                                    priority 
                                />
                                {slide.video && (
                                    <video 
                                        src={slide.video} 
                                        autoPlay 
                                        loop 
                                        muted 
                                        playsInline 
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                )}
                                <div className="absolute inset-0 bg-black/50" />
                            </div>

                            <div className="relative z-10 w-full flex flex-col items-center px-[4vw]">
                                <h1 
                                    className="text-white font-display font-normal tracking-[-0.03em] leading-[1.05] mb-[12px] text-center" 
                                    style={{ fontSize: 'clamp(56px, 12vw, 110px)' }}
                                >
                                    {slide.title}
                                </h1>
                                <p 
                                    className="text-white/90 font-sans font-normal mb-[56px] max-md:mb-[40px] text-center whitespace-normal max-w-[90%] max-md:max-w-[95vw] leading-[1.4]" 
                                    style={{ fontSize: 'clamp(16px, 2vw, 20px)' }}
                                >
                                    {slide.description}
                                </p>
                                <button className="px-10 py-4 bg-white text-black font-sans font-medium rounded-[100px] hover:bg-[#111111] hover:text-white transition-colors duration-200 text-[16px]">
                                    {slide.buttonText}
                                </button>
                            </div>
                        </motion.div>
                    )
                ))}
            </AnimatePresence>

            {/* Controles do Slider (Bottom Center) */}
            <div className="relative z-30 w-full flex items-center justify-center gap-6 mt-auto">
                <button
                    onClick={prevSlide}
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                >
                    <ChevronLeft size={20} strokeWidth={1.5} />
                </button>

                {/* Indicadores de Paginação com Timer Progressivo */}
                <div className="flex items-center gap-2">
                    {slides.map((_, i) => (
                        <div
                            key={i}
                            onClick={() => goToSlide(i)}
                            className={`relative h-[6px] rounded-full overflow-hidden transition-all duration-500 cursor-pointer ${
                                i === currentIndex ? 'w-16 bg-white/20' : 'w-2 bg-white/40 hover:bg-white/60'
                            }`}
                        >
                            {i === currentIndex && !isSplashActive && (
                                <motion.div
                                    className="absolute top-0 left-0 bottom-0 bg-white"
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                                    key={`progress-${currentIndex}`}
                                />
                            )}
                        </div>
                    ))}
                </div>

                <button
                    onClick={nextSlide}
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                >
                    <ChevronRight size={20} strokeWidth={1.5} />
                </button>
            </div>

        </section>
    );
}