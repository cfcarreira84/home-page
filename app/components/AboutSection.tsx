'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface AboutSectionProps {
    theme?: { bg: string, shape1: string, shape2: string };
}

const formations = [
    { id: 1, title: "MBA: AI, Data Science e Big Data", local: "PUCRS", period: "2023 - 2024", text: "Especialização corporativa com foco em modelagem de dados avançada, algoritmos preditivos de Machine Learning e arquitetura escalável de Big Data.", image: "/images/ai-sdr.jpg" },
    { id: 2, title: "MBA: Transformação Digital", local: "PUCRS", period: "2021 - 2022", text: "Visão estratégica focada em inovação disruptiva, adoção de metodologias ágeis e digitalização profunda de processos operacionais e modelos de negócio.", image: "/images/executive-bi.jpg" },
    { id: 3, title: "Gerenciamento de Projetos (PMBoK)", local: "SENAC SP", period: "2018 - 2019", text: "Aprofundamento nas práticas e processos do guia PMBoK para planejamento de alto nível, controle de riscos e execução eficiente de projetos.", image: "/images/lean-ops.jpg" },
    { id: 4, title: "Propaganda e Marketing", local: "USJT", period: "2014 - 2015", text: "Desenvolvimento técnico de estratégias de mercado, análise de comportamento do consumidor e estruturação de campanhas comerciais 360º.", image: "/images/hight-tickets.jpg" },
    { id: 5, title: "Tecnólogo: Design de Mídia Digital", local: "Impacta", period: "2008 - 2012", text: "Formação acadêmica multidisciplinar em design de interfaces, experiência do usuário (UX) e desenvolvimento web front-end de alta performance.", image: "/images/ai-sdr.jpg" }
];

export default function AboutSection({ theme }: AboutSectionProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCard = () => setCurrentIndex((prev) => Math.min(prev + 1, formations.length - 1));
    const prevCard = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

    return (
        <section className="relative w-full py-32 flex flex-col items-center overflow-hidden">
            {/* Fundo com SVGs Flutuantes específicos desta seção */}
            {theme && (
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden z-0">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[600px] h-[600px] opacity-40 mix-blend-multiply"
                        style={{ right: "-10%", top: "10%", transformOrigin: "center" }}
                    >
                        <Image src={theme.shape1} alt="Shape 1" fill className="object-contain" />
                    </motion.div>
                    
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[500px] h-[500px] opacity-30 mix-blend-multiply"
                        style={{ left: "-5%", bottom: "20%", transformOrigin: "center" }}
                    >
                        <Image src={theme.shape2} alt="Shape 2" fill className="object-contain" />
                    </motion.div>
                </div>
            )}

            {/* Bloco 1: Manifesto Tipográfico */}
            <div className="max-w-5xl w-full px-6 text-center mb-32 relative z-10 mt-12">
                <span className="font-sans text-sm font-bold uppercase tracking-widest text-black/60 mb-6 block">
                    Área Acadêmica
                </span>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="font-display text-5xl md:text-6xl lg:text-[72px] font-medium text-black tracking-tight leading-[1.1]"
                >
                    Construindo bases sólidas de conhecimento para sustentar inovações práticas no dia a dia.
                </motion.h2>
            </div>

            {/* Bloco 2: Apoio (Life beyond the lab style) */}
            <div className="max-w-3xl w-full px-6 text-center mb-24 relative z-10">
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="font-display text-4xl md:text-5xl font-medium text-black mb-6"
                >
                    Evolução Contínua
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-sans text-lg md:text-xl text-black/70 font-normal leading-relaxed"
                >
                    Cada diploma e certificação representa um compromisso com a excelência técnica. 
                    Combinando teoria avançada com aplicação prática, moldamos o futuro da tecnologia e dos negócios.
                </motion.p>
            </div>

            {/* Bloco 3: Carrossel Linear (Cartões Bento Acadêmicos) */}
            <div className="relative w-full max-w-[1400px] h-[550px] mx-auto flex items-center justify-center z-20">
                <div className="absolute inset-0 flex items-center justify-center">
                    <AnimatePresence mode="popLayout">
                        {formations.map((item, index) => {
                            const offset = index - currentIndex;
                            const x = offset * 370; // Espaçamento linear entre os cartões
                            
                            return (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ 
                                        x, 
                                        scale: 1,
                                        opacity: Math.abs(offset) > 2 ? 0 : 1,
                                        zIndex: 50 - Math.abs(offset)
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    className="absolute w-[340px] h-[480px] bg-black rounded-[2.5rem] shadow-2xl overflow-hidden cursor-pointer group border border-white/10"
                                    drag="x"
                                    dragConstraints={{ left: 0, right: 0 }}
                                    onDragEnd={(e, { offset, velocity }) => {
                                        const swipe = offset.x;
                                        if (swipe < -50) nextCard();
                                        else if (swipe > 50) prevCard();
                                    }}
                                >
                                    {/* Fundo da Imagem */}
                                    <Image 
                                        src={item.image} 
                                        alt={item.title} 
                                        fill 
                                        className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out z-0" 
                                    />
                                    
                                    {/* Gradiente de fundo escuro para leitura, escurece mais no hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:bg-black/70 transition-colors duration-[600ms] ease-out z-10" />

                                    {/* Conteúdo Dinâmico Inferior */}
                                    <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end z-20">
                                        
                                        {/* Container que Sobe no Hover */}
                                        <div className="flex flex-col transform translate-y-[100px] group-hover:translate-y-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                                            
                                            {/* Cabeçalho do Cartão (Título, Local, Período) */}
                                            <div className="mb-4">
                                                <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full font-sans text-xs font-bold uppercase tracking-widest text-white border border-white/10">
                                                    {item.local}
                                                </span>
                                            </div>
                                            <h4 className="font-display font-semibold text-2xl text-white mb-2 leading-snug">
                                                {item.title}
                                            </h4>
                                            <p className="font-sans text-sm text-white/80 font-medium mb-6">
                                                {item.period}
                                            </p>

                                            {/* Conteúdo de Apoio (Fade In) */}
                                            <div className="h-[100px] flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-[600ms] ease-out delay-100">
                                                <p className="font-sans text-sm text-white/70 font-normal leading-relaxed">
                                                    {item.text}
                                                </p>
                                            </div>
                                        </div>
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
                    disabled={currentIndex === formations.length - 1}
                    className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-black hover:bg-white bg-white/50 backdrop-blur-sm transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-sm"
                >
                    <ChevronRight size={20} strokeWidth={2} />
                </button>
            </div>
        </section>
    );
}