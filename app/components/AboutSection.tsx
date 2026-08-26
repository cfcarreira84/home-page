'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface AboutSectionProps {
    theme?: { bg: string, shape1: string, shape2: string };
}

const formations = [
    { id: 1, title: "MBA: AI, Data Science e Big Data", local: "PUCRS", period: "2023 - 2024", text: "Especialização corporativa com foco em modelagem de dados avançada, algoritmos preditivos de Machine Learning e arquitetura escalável de Big Data.", image: "/images/mba-ai-data-science-e-big-data.jpg" },
    { id: 2, title: "MBA: Transformação Digital", local: "PUCRS", period: "2021 - 2022", text: "Visão estratégica focada em inovação disruptiva, adoção de metodologias ágeis e digitalização profunda de processos operacionais e modelos de negócio.", image: "/images/mba-transformacao-digital.jpg" },
    { id: 3, title: "Gerenciamento de Projetos (PMBoK)", local: "SENAC SP", period: "2018 - 2019", text: "Aprofundamento nas práticas e processos do guia PMBoK para planejamento de alto nível, controle de riscos e execução eficiente de projetos.", image: "/images/gerenciamento-de-projetos-pmbok.jpg" },
    { id: 4, title: "Propaganda e Marketing", local: "USJT", period: "2014 - 2015", text: "Desenvolvimento técnico de estratégias de mercado, análise de comportamento do consumidor e estruturação de campanhas comerciais 360º.", image: "/images/propaganda-e-marketing.jpg" },
    { id: 5, title: "Tecnólogo: Design de Mídia Digital", local: "IMPACTA", period: "2008 - 2012", text: "Formação acadêmica multidisciplinar em design de interfaces, experiência do usuário (UX) e desenvolvimento web front-end de alta performance.", image: "/images/design-de-midia-digital.jpg" }
];

export default function AboutSection({ theme }: AboutSectionProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCard = () => setCurrentIndex((prev) => Math.min(prev + 1, formations.length - 1));
    const prevCard = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

    return (
        <>
            {/* ================= SECTION 03.a: FUNDAMENTAÇÃO (MANIFESTO) ================= */}
            <section id="fundamentacao" className="relative w-full py-[120px] px-[6vw] flex flex-col items-center justify-center text-center overflow-hidden bg-[#111111] max-md:py-[80px]">
                
                {/* Shapes */}
                {theme && (
                    <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden z-0">
                        <motion.div
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[600px] h-[600px] opacity-40 mix-blend-multiply"
                            style={{ right: "-10%", top: "10%", transformOrigin: "center" }}
                        >
                            <Image src={theme.shape1} alt="Shape 1" fill className="object-contain" />
                        </motion.div>
                        
                        <motion.div
                            initial={{ rotate: 0 }}
                            animate={{ rotate: -360 }}
                            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[500px] h-[500px] opacity-30 mix-blend-multiply"
                            style={{ left: "-5%", bottom: "20%", transformOrigin: "center" }}
                        >
                            <Image src={theme.shape2} alt="Shape 2" fill className="object-contain" />
                        </motion.div>
                    </div>
                )}

                <div className="relative z-10 max-w-[1000px] w-full mx-auto">
                    <p className="font-sans text-[13px] font-bold text-[#F5F3ED] uppercase tracking-[0.05em] mb-[32px]">
                        SOBRE O LABS // RIGOR TÉCNICO & EXECUÇÃO
                    </p>
                    <h2 className="font-display font-medium text-[clamp(40px,5vw,70px)] leading-[1.05] tracking-[-0.03em] text-[#F5F3ED] max-md:text-[38px] max-md:leading-[1.1] max-md:px-[16px]">
                        Arquitetura de dados, IA e modelos preditivos<br className="max-md:hidden" />
                        em produção. Da validação técnica direta<br className="max-md:hidden" />
                        à operação financeira em escala.
                    </h2>
                </div>
            </section>

            {/* ================= SECTION 03.b: DIPLOMAS ACADÊMICOS ================= */}
            <section id="fundamentacao-base" className="relative w-full pt-[40px] pb-[160px] flex flex-col items-center bg-[#F5F3ED] light-section max-md:pt-[60px] max-md:pb-[100px]">
                
                <div className="text-center max-w-[1000px] mx-auto mb-[64px] px-[4vw] max-md:mb-[48px]">
                    <h3 className="font-display font-medium text-[clamp(36px,4.5vw,56px)] leading-[1.1] tracking-[-0.02em] text-[#111111] mb-[32px] max-md:text-[42px] max-md:leading-[1.05] max-md:mb-[20px]">
                        A Base por trás do Lab
                    </h3>
                    <p className="font-sans font-normal text-[clamp(20px,2.2vw,26px)] leading-[1.4] text-[#111111] max-md:text-[18px]">
                        No laboratório, cada experimento nasce de uma tese sólida: como transformar modelos teóricos em
                        ferramentas de valor real? Nossa fundamentação acadêmica sustenta a arquitetura técnica para converter
                        conceitos complexos em produtos de mercado.
                    </p>
                </div>

                {/* Carrossel Desktop 3D */}
                <div className="relative w-full max-w-[1400px] h-[550px] mx-auto flex items-center justify-center z-20 max-md:hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <AnimatePresence mode="popLayout">
                            {formations.map((item, index) => {
                                const offset = index - currentIndex;
                                const x = offset * 370; 
                                
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
                                        className="absolute w-[340px] h-[480px] bg-[#131416] rounded-[40px] shadow-2xl overflow-hidden cursor-pointer group border border-white/10"
                                        drag="x"
                                        dragConstraints={{ left: 0, right: 0 }}
                                        onDragEnd={(e, { offset, velocity }) => {
                                            const swipe = offset.x;
                                            if (swipe < -50) nextCard();
                                            else if (swipe > 50) prevCard();
                                        }}
                                    >
                                        <Image 
                                            src={item.image} 
                                            alt={item.title} 
                                            fill 
                                            className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out z-0" 
                                        />
                                        
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#131416] via-black/40 to-black/10 group-hover:bg-[#131416]/90 transition-colors duration-[600ms] ease-out z-10" />

                                        <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end z-20">
                                            
                                            <div className="flex flex-col transform translate-y-[100px] group-hover:translate-y-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                                                
                                                <div className="mb-4 flex gap-3">
                                                    <span className="px-[16px] py-[8px] bg-white/10 backdrop-blur-md rounded-full font-sans text-[13px] font-medium uppercase text-white/90">
                                                        {item.local}
                                                    </span>
                                                    <span className="px-[16px] py-[8px] bg-white/10 backdrop-blur-md rounded-full font-sans text-[13px] font-medium uppercase text-white/90">
                                                        {item.period}
                                                    </span>
                                                </div>
                                                <h4 className="font-display font-medium text-[36px] text-white mb-4 leading-[1.15] tracking-[-0.02em]">
                                                    {item.title}
                                                </h4>

                                                <div className="h-[100px] flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-[600ms] ease-out delay-100">
                                                    <p className="font-sans text-[16px] text-white/70 font-normal leading-[1.5]">
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

                {/* Carrossel Mobile Horizontal */}
                <div className="hidden w-full px-[6vw] pb-[48px] max-md:flex max-md:gap-[16px] max-md:overflow-x-auto max-md:snap-x max-md:snap-mandatory max-md:scrollbar-hide">
                    {formations.map((item, index) => (
                        <div key={`${item.id}-mobile`} className="shrink-0 w-[78vw] h-[480px] snap-center bg-[#131416] rounded-[32px] p-[24px] flex flex-col justify-between relative overflow-hidden text-white shadow-2xl">
                            
                            {/* A imagem também presente no mobile, mas com gradient fixo para leitura */}
                            <Image src={item.image} alt={item.title} fill className="object-cover z-0" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#131416] via-[#131416]/80 to-black/30 z-10" />

                            <div className="relative z-20 flex gap-[12px]">
                                <span className="px-[12px] py-[6px] bg-white/10 backdrop-blur-md rounded-full font-sans text-[11px] font-medium uppercase text-white/90">
                                    {item.local}
                                </span>
                                <span className="px-[12px] py-[6px] bg-white/10 backdrop-blur-md rounded-full font-sans text-[11px] font-medium uppercase text-white/90">
                                    {item.period}
                                </span>
                            </div>

                            <div className="relative z-20">
                                <h4 className="font-display font-medium text-[28px] leading-[1.15] tracking-[-0.02em] mb-[12px]">
                                    {item.title}
                                </h4>
                                <p className="font-sans text-[14px] text-white/70 font-normal leading-[1.5]">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Controles Desktop */}
                <div className="relative z-30 mt-12 flex items-center justify-center gap-6 max-md:hidden">
                    <button
                        onClick={prevCard}
                        disabled={currentIndex === 0}
                        className="w-[56px] h-[56px] rounded-full border border-[#E6E1D6] flex items-center justify-center text-[#111111] hover:bg-[#E6E1D6] hover:border-[#111111] transition-all bg-transparent disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                        <ChevronLeft size={20} strokeWidth={2} />
                    </button>
                    
                    <button
                        onClick={nextCard}
                        disabled={currentIndex === formations.length - 1}
                        className="w-[56px] h-[56px] rounded-full border border-[#E6E1D6] flex items-center justify-center text-[#111111] hover:bg-[#E6E1D6] hover:border-[#111111] transition-all bg-transparent disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                        <ChevronRight size={20} strokeWidth={2} />
                    </button>
                </div>

                {/* Controles Mobile */}
                <div className="hidden max-md:flex max-md:w-full max-md:justify-center max-md:gap-[16px] max-md:mt-[16px]">
                    <button className="w-[56px] h-[56px] rounded-full border border-[#E6E1D6] flex items-center justify-center text-[#111111] bg-transparent hover:bg-[#E6E1D6]">
                        <ChevronLeft size={20} strokeWidth={2} />
                    </button>
                    <button className="w-[56px] h-[56px] rounded-full border border-[#E6E1D6] flex items-center justify-center text-[#111111] bg-transparent hover:bg-[#E6E1D6]">
                        <ChevronRight size={20} strokeWidth={2} />
                    </button>
                </div>
            </section>
        </>
    );
}
