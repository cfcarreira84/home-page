'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const arsenal = [
    { id: 1, category: "AI & AUTOMATION", title: "Model Context Protocol", text: "Integração Avançada Anthropic", tag: "Al Anthropic", image: "/images/ai-sdr.jpg", video: "/videos/placeholder.webm" },
    { id: 2, category: "AI & AUTOMATION", title: "AI Fluency: Framework", text: "Automação Cognitiva Estruturada", tag: "Al Anthropic", image: "/images/executive-bi.jpg", video: "/videos/placeholder.webm" },
    { id: 3, category: "AI & AUTOMATION", title: "Orquestração OpenAI", text: "Engenharia de Prompts e Agentes", tag: "Make.com", image: "/images/hight-tickets.jpg", video: "/videos/placeholder.webm" },
    { id: 4, category: "AI & AUTOMATION", title: "Agentic Workflows", text: "Automação de Tarefas Complexas", tag: "LangChain", image: "/images/lean-ops.jpg", video: "/videos/placeholder.webm" },
    { id: 5, category: "AI & AUTOMATION", title: "RAG Systems", text: "Retrieval-Augmented Generation", tag: "Pinecone", image: "/images/ai-sdr.jpg", video: "/videos/placeholder.webm" },
    
    { id: 6, category: "DATA & BI", title: "Java: Consumo de APIs", text: "Pipelines de Dados e Backend", tag: "Alura", image: "/images/lean-ops.jpg", video: "/videos/placeholder.webm" },
    { id: 7, category: "DATA & BI", title: "Engenharia de Dados (SQL)", text: "Mineração e Sanitização", tag: "Power Query", image: "/images/ai-sdr.jpg", video: "/videos/placeholder.webm" },
    { id: 8, category: "DATA & BI", title: "Dashboards Executivos", text: "Visualização Avançada", tag: "Power BI", image: "/images/executive-bi.jpg", video: "/videos/placeholder.webm" },
    { id: 9, category: "DATA & BI", title: "Predictive Analytics", text: "Previsão de Tendências", tag: "Python", image: "/images/hight-tickets.jpg", video: "/videos/placeholder.webm" },
    
    { id: 10, category: "MÍDIA & CRM", title: "Dinamize Mail - Completo", text: "Automação de E-mail Marketing", tag: "Dinamize", image: "/images/executive-bi.jpg", video: "/videos/placeholder.webm" },
    { id: 11, category: "MÍDIA & CRM", title: "Google Tag Manager", text: "Gerenciamento Avançado de Tags", tag: "Alura", image: "/images/hight-tickets.jpg", video: "/videos/placeholder.webm" },
    { id: 12, category: "MÍDIA & CRM", title: "Mídia Digital: Escala", text: "Planejamento e Gestão de Resultados", tag: "Senac", image: "/images/lean-ops.jpg", video: "/videos/placeholder.webm" },
    { id: 13, category: "MÍDIA & CRM", title: "Automação de CRM", text: "Régua de Relacionamento", tag: "HubSpot", image: "/images/ai-sdr.jpg", video: "/videos/placeholder.webm" },
    { id: 14, category: "MÍDIA & CRM", title: "Growth Hacking", text: "Estratégias de Tração", tag: "Reforge", image: "/images/executive-bi.jpg", video: "/videos/placeholder.webm" },
    
    { id: 15, category: "MANAGEMENT", title: "Técnicas de Negociação", text: "Fechamento B2B e High-Ticket", tag: "Senac", image: "/images/ai-sdr.jpg", video: "/videos/placeholder.webm" },
    { id: 16, category: "MANAGEMENT", title: "Comunicação Assertiva", text: "Liderança de Squads Técnicos", tag: "Senac", image: "/images/executive-bi.jpg", video: "/videos/placeholder.webm" },
    { id: 17, category: "MANAGEMENT", title: "Metodologias Ágeis", text: "Scrum e Kanban", tag: "CSM", image: "/images/hight-tickets.jpg", video: "/videos/placeholder.webm" },
    { id: 18, category: "MANAGEMENT", title: "Liderança Remota", text: "Gestão de Times Distribuídos", tag: "Senac", image: "/images/lean-ops.jpg", video: "/videos/placeholder.webm" },
    { id: 19, category: "MANAGEMENT", title: "Planejamento Estratégico", text: "OKRs e KPIs", tag: "Insper", image: "/images/ai-sdr.jpg", video: "/videos/placeholder.webm" }
];

export const categories = ["ALL", "AI & AUTOMATION", "DATA & BI", "MÍDIA & CRM", "MANAGEMENT"];

export const categoryTheme: Record<string, { bg: string, text: string, shape1: string, shape2: string }> = {
    "ALL": { bg: "#F8F9FA", text: "#111827", shape1: "/shapes/shape-cyan.svg", shape2: "/shapes/shape-orange.svg" },
    "AI & AUTOMATION": { bg: "#E0F2FE", text: "#0ea5e9", shape1: "/shapes/shape-cyan.svg", shape2: "/shapes/shape-cyan.svg" },
    "DATA & BI": { bg: "#ECFDF5", text: "#10b981", shape1: "/shapes/shape-emerald.svg", shape2: "/shapes/shape-emerald.svg" },
    "MÍDIA & CRM": { bg: "#FDF4FF", text: "#d946ef", shape1: "/shapes/shape-magenta.svg", shape2: "/shapes/shape-magenta.svg" },
    "MANAGEMENT": { bg: "#FFF7ED", text: "#f97316", shape1: "/shapes/shape-orange.svg", shape2: "/shapes/shape-orange.svg" }
};

interface FilterGridProps {
    activeFilter: string;
    setActiveFilter: (filter: string) => void;
    theme: { bg: string, text: string, shape1: string, shape2: string };
}

export default function FilterGrid({ activeFilter, setActiveFilter, theme }: FilterGridProps) {
    const [currentIndex, setCurrentIndex] = useState(Math.floor(19 / 2));

    const filteredArsenal = arsenal.filter(item =>
        activeFilter === "ALL" || item.category === activeFilter
    );

    // Reset carousel index to the middle when filter changes
    useEffect(() => {
        setCurrentIndex(Math.floor(filteredArsenal.length / 2));
    }, [activeFilter, filteredArsenal.length]);

    const nextCard = () => setCurrentIndex((prev) => Math.min(prev + 1, filteredArsenal.length - 1));
    const prevCard = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

    return (
        <section className="relative w-full min-h-screen py-32 flex flex-col items-center">
            {/* Formas Flutuantes no Fundo orbitando nas extremidades */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[450px] h-[450px] opacity-70 mix-blend-multiply"
                    style={{ left: "-5%", top: "-5%", transformOrigin: "center" }}
                >
                    <Image src={theme.shape1} alt="Shape 1" fill className="object-contain" />
                </motion.div>
                
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[450px] h-[450px] opacity-60 mix-blend-multiply"
                    style={{ right: "-5%", bottom: "-5%", transformOrigin: "center" }}
                >
                    <Image src={theme.shape2} alt="Shape 2" fill className="object-contain" />
                </motion.div>
            </div>

            {/* Título com Efeito Negativo */}
            <div className="relative z-10 w-full flex justify-center pointer-events-none mb-12 mix-blend-difference">
                <h2 className="font-display text-6xl md:text-8xl lg:text-[120px] font-bold tracking-tight text-white text-center">
                    Certificações
                </h2>
            </div>

            {/* Filtros */}
            <div className="relative z-30 max-w-6xl w-full flex flex-col items-center px-6">
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {categories.map((category, idx) => (
                        <motion.button
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`px-8 py-3 rounded-full font-sans text-sm font-semibold tracking-wider transition-all duration-300 border ${
                                activeFilter === category
                                    ? 'bg-black text-white border-black scale-105 shadow-xl'
                                    : 'bg-white/50 backdrop-blur-md text-black/60 border-black/10 hover:border-black/30 hover:bg-white hover:text-black'
                            }`}
                        >
                            {category === "ALL" ? "TODAS" : category}
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Carrossel Bento Arqueado */}
            <div className="relative w-full max-w-[1400px] h-[550px] mx-auto flex items-center justify-center perspective-[1000px] z-20">
                <div className="absolute inset-0 flex items-center justify-center">
                    <AnimatePresence mode="popLayout">
                        {filteredArsenal.map((item, index) => {
                            const offset = index - currentIndex;
                            const isCenter = offset === 0;
                            const x = offset * 380;
                            const y = Math.abs(offset) * 40; // Curvatura do arco (cai nas pontas)
                            const rotateZ = offset * 4; // Rotação sutil
                            
                            return (
                                <motion.div
                                    key={`${item.id}-${activeFilter}`}
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ 
                                        x, 
                                        y, 
                                        rotateZ,
                                        scale: isCenter ? 1 : 0.85,
                                        opacity: Math.abs(offset) > 2 ? 0 : 1,
                                        zIndex: 50 - Math.abs(offset)
                                    }}
                                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                                    className="absolute w-[340px] h-[480px] bg-white rounded-[2rem] shadow-2xl p-4 flex flex-col group overflow-hidden cursor-pointer border border-black/5"
                                    onClick={() => setCurrentIndex(index)}
                                    drag="x"
                                    dragConstraints={{ left: 0, right: 0 }}
                                    onDragEnd={(e, { offset, velocity }) => {
                                        const swipe = offset.x;
                                        if (swipe < -50) nextCard();
                                        else if (swipe > 50) prevCard();
                                    }}
                                >
                                    {/* Mídia do Card (Imagem ou Video Hover) */}
                                    <div className="relative w-full h-[60%] rounded-2xl overflow-hidden bg-gray-100 mb-6">
                                        <Image 
                                            src={item.image} 
                                            alt={item.title} 
                                            fill 
                                            className="object-cover transition-opacity duration-500 group-hover:opacity-0" 
                                        />
                                        <video 
                                            src={item.video} 
                                            autoPlay 
                                            loop 
                                            muted 
                                            playsInline 
                                            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        />
                                        <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-sans font-bold uppercase tracking-widest text-black">
                                            {item.tag}
                                        </div>
                                    </div>

                                    {/* Textos */}
                                    <div className="flex flex-col px-2">
                                        <h3 className="font-display font-semibold text-2xl text-black mb-2 leading-tight">
                                            {item.title}
                                        </h3>
                                        <p className="font-sans text-sm text-gray-500 font-medium">
                                            {item.text}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>

            {/* Controles de Navegação */}
            <div className="relative z-30 mt-12 flex items-center gap-6">
                <button
                    onClick={prevCard}
                    disabled={currentIndex === 0}
                    className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-black hover:bg-white bg-white/50 backdrop-blur-sm transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-sm"
                >
                    <ChevronLeft size={20} strokeWidth={2} />
                </button>
                
                <button
                    onClick={nextCard}
                    disabled={currentIndex === filteredArsenal.length - 1}
                    className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-black hover:bg-white bg-white/50 backdrop-blur-sm transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-sm"
                >
                    <ChevronRight size={20} strokeWidth={2} />
                </button>
            </div>

        </section>
    );
}