'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
    {
        id: 1,
        title: "AI SDR",
        description: "Triagem preditiva e negociação autônoma via WhatsApp. Conversão de 10% da base fria em oportunidades ativas (> R$ 20k) sem gastar um centavo a mais de mídia.",
        tags: ["Make.com", "OpenAI API", "Typebot", "RD Station"],
        buttonText: "Explorar Sistema"
    },
    {
        id: 2,
        title: "Executive BI",
        description: "Auditei e unifiquei dados dispersos em operações globais para criar dashboards onde a diretoria realmente toma decisões. Cortei 300% de desperdício em mídia.",
        tags: ["Power Query", "Big Data", "Power BI", "Global Ops"],
        buttonText: "Ver Painéis"
    },
    {
        id: 3,
        title: "High-Ticket Sales",
        description: "Como fazer alguém comprar uma adega de mais de R$ 20 mil pela internet sem tocar no produto? Reestruturei o posicionamento focando em autoridade técnica. Elevamos o ticket médio em 33%.",
        tags: ["High-Ticket", "Turnaround Comercial", "Engenharia de Vendas"],
        buttonText: "Ver Case"
    },
    {
        id: 4,
        title: "Lean Ops",
        description: "Desenhei a arquitetura operacional que fez uma estrutura saltar de 2 para 50 pessoas, com SLAs afiados. Processos leves e preparados para aguentar tração de verdade.",
        tags: ["SLA & Governança", "Liderança Operacional", "Growth"],
        buttonText: "Detalhar Escopo"
    }
];

export default function HeroSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative w-full h-screen bg-cosmos-base overflow-hidden flex items-center justify-center">

            {/* Background Abstrato Dinâmico (Efeito Blur Labs) */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cosmos-cyan/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cosmos-orange/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Navegação Topo */}
            <nav className="absolute top-0 w-full p-8 flex justify-between items-center z-50">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-cosmos-surface border border-cosmos-border flex items-center justify-center">
                        <div className="w-3 h-3 bg-cosmos-cyan rounded-full" />
                    </div>
                    <span className="font-display tracking-tighter text-cosmos-title text-lg uppercase">
                        <span className="font-light">CF</span> <span className="font-black ml-1">CARREIRA</span>
                    </span>
                </div>
                <div className="hidden md:flex gap-8 font-sans text-sm font-semibold tracking-wide text-cosmos-muted">
                    <span className="hover:text-cosmos-cyan cursor-pointer transition-colors">Methodology</span>
                    <span className="text-cosmos-title cursor-pointer">Experiments</span>
                    <span className="hover:text-cosmos-cyan cursor-pointer transition-colors">Architecture</span>
                </div>
            </nav>

            {/* Conteúdo Central com Animação de Máscara */}
            <div className="relative z-10 max-w-5xl w-full px-6 flex flex-col items-center text-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 1.05, filter: "blur(5px)" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="flex flex-col items-center"
                    >
                        <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tight text-cosmos-title mb-6">
                            {slides[currentIndex].title}
                        </h1>
                        <p className="font-sans text-lg md:text-xl text-cosmos-muted max-w-3xl mb-10 leading-relaxed">
                            {slides[currentIndex].description}
                        </p>

                        <button className="px-8 py-4 bg-cosmos-title text-cosmos-base font-sans font-bold uppercase tracking-wider rounded-full hover:scale-105 hover:bg-cosmos-cyan transition-all duration-300">
                            {slides[currentIndex].buttonText}
                        </button>

                        <div className="flex flex-wrap justify-center gap-3 mt-12">
                            {slides[currentIndex].tags.map((tag, i) => (
                                <span key={i} className="px-4 py-2 text-[11px] font-sans font-semibold uppercase tracking-widest text-cosmos-muted bg-cosmos-surface border border-cosmos-border rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Controles do Slider */}
            <div className="absolute bottom-12 flex gap-4 z-20">
                <button
                    onClick={prevSlide}
                    className="w-14 h-14 rounded-full border border-cosmos-border bg-cosmos-surface/50 backdrop-blur-md flex items-center justify-center text-cosmos-title hover:bg-cosmos-surface transition-colors hover:text-cosmos-cyan"
                >
                    <ChevronLeft size={24} />
                </button>

                {/* Indicadores de Paginação */}
                <div className="flex items-center gap-3 px-6">
                    {slides.map((_, i) => (
                        <div
                            key={i}
                            className={`h-1.5 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-8 bg-cosmos-cyan' : 'w-2 bg-cosmos-border'
                                }`}
                        />
                    ))}
                </div>

                <button
                    onClick={nextSlide}
                    className="w-14 h-14 rounded-full border border-cosmos-border bg-cosmos-surface/50 backdrop-blur-md flex items-center justify-center text-cosmos-title hover:bg-cosmos-surface transition-colors hover:text-cosmos-cyan"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

        </div>
    );
}