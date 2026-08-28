'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
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
    const sliderRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeftState, setScrollLeftState] = useState(0);

    const onMouseDown = (e: React.MouseEvent) => {
        if (!sliderRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeftState(sliderRef.current.scrollLeft);
    };

    const onMouseLeave = () => setIsDragging(false);
    const onMouseUp = () => setIsDragging(false);

    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !sliderRef.current) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Velocidade do drag
        sliderRef.current.scrollLeft = scrollLeftState - walk;
    };

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -500, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 500, behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* ================= SECTION 03.a: FUNDAMENTAÇÃO (MANIFESTO) ================= */}
            <section id="fundamentacao" className="relative w-full py-[120px] px-[4vw] flex flex-col items-center justify-center text-center overflow-hidden light-section transition-colors duration-500 max-md:py-[80px]" style={{ backgroundColor: theme?.bg || '#F5F3ED' }}>

                {/* Shapes */}
                {theme && (
                    <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden z-0">
                        <motion.div
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[420px] h-[420px] opacity-40 mix-blend-multiply max-md:w-[300px] max-md:h-[300px]"
                            style={{ right: "-10%", top: "10%", transformOrigin: "center" }}
                        >
                            <Image src={theme.shape1} alt="Shape 1" fill className="object-contain" />
                        </motion.div>

                        <motion.div
                            initial={{ rotate: 0 }}
                            animate={{ rotate: -360 }}
                            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[350px] h-[350px] opacity-30 mix-blend-multiply max-md:w-[250px] max-md:h-[250px]"
                            style={{ left: "-5%", bottom: "20%", transformOrigin: "center" }}
                        >
                            <Image src={theme.shape2} alt="Shape 2" fill className="object-contain" />
                        </motion.div>
                    </div>
                )}

                <div className="relative z-10 w-full mx-auto max-md:px-[16px]">
                    <p className="font-sans text-[13px] font-bold text-[#111111] uppercase tracking-[0.05em] mb-[32px]">
                        SOBRE O LABS // RIGOR TÉCNICO & EXECUÇÃO
                    </p>
                    <h2 className="font-display font-medium text-[clamp(28px,4vw,54px)] leading-[1.15] tracking-[-0.02em] text-[#111111] mx-auto text-center">
                        Arquitetura de dados, IA e modelos preditivos <br className="max-md:hidden" />
                        em produção. Da validação técnica direta à <br className="max-md:hidden" />
                        engenharia de processos que escalam <br className="max-md:hidden" />
                        receita com previsibilidade <br className="max-md:hidden" />
                        e governança.
                    </h2>
                </div>
            </section>

            {/* ================= SECTION 03.b: DIPLOMAS ACADÊMICOS ================= */}
            <section id="fundamentacao-base" className="relative w-full pt-[40px] pb-[160px] flex flex-col items-center light-section transition-colors duration-500 max-md:pt-[60px] max-md:pb-[100px] overflow-hidden" style={{ backgroundColor: theme?.bg || '#F5F3ED' }}>

                {/* Shapes */}
                {theme && (
                    <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden z-0">
                        <motion.div
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[500px] h-[500px] opacity-30 mix-blend-multiply max-md:w-[300px] max-md:h-[300px]"
                            style={{ left: "-10%", top: "30%", transformOrigin: "center" }}
                        >
                            <Image src={theme.shape1} alt="Shape 1" fill className="object-contain" />
                        </motion.div>

                        <motion.div
                            initial={{ rotate: 0 }}
                            animate={{ rotate: -360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[450px] h-[450px] opacity-30 mix-blend-multiply max-md:w-[250px] max-md:h-[250px]"
                            style={{ right: "-5%", bottom: "10%", transformOrigin: "center" }}
                        >
                            <Image src={theme.shape2} alt="Shape 2" fill className="object-contain" />
                        </motion.div>
                    </div>
                )}

                <div className="relative z-10 text-center max-w-[1000px] mx-auto mb-[64px] px-[4vw] max-md:mb-[48px]">
                    <h3 className="font-display font-medium text-[clamp(36px,4.5vw,56px)] leading-[1.1] tracking-[-0.02em] text-[#111111] mb-[32px] max-md:text-[42px] max-md:leading-[1.05] max-md:mb-[20px]">
                        A Base por trás do Lab
                    </h3>
                    <p className="font-sans font-normal text-[clamp(20px,2.2vw,26px)] leading-[1.4] text-[#111111] max-md:text-[18px]">
                        No laboratório, cada experimento nasce de uma tese sólida: como transformar modelos teóricos em
                        ferramentas de valor real? Nossa fundamentação acadêmica sustenta a arquitetura técnica para converter
                        conceitos complexos em produtos de mercado.
                    </p>
                </div>

                {/* Carrossel Horizontal Flex (Desktop e Mobile) */}
                <div
                    ref={sliderRef}
                    onMouseDown={onMouseDown}
                    onMouseLeave={onMouseLeave}
                    onMouseUp={onMouseUp}
                    onMouseMove={onMouseMove}
                    className={`relative z-20 flex gap-[32px] w-full px-[4vw] pb-[48px] overflow-x-auto snap-x snap-mandatory scrollbar-hide max-md:px-[6vw] max-md:gap-[16px] ${isDragging ? 'cursor-grabbing select-none snap-none' : 'cursor-grab'}`}
                >
                    {formations.map((item, index) => (
                        <div key={item.id} className="shrink-0 w-[480px] h-[640px] max-md:w-[85vw] max-md:h-[500px] snap-center bg-[#131416] rounded-[40px] max-md:rounded-[32px] flex flex-col justify-between relative overflow-hidden cursor-pointer group shadow-2xl border border-white/10">

                            {/* Imagem de Fundo com Hover Zoom */}
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                draggable={false}
                                className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out z-0 pointer-events-none"
                            />

                            {/* Gradiente Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#131416] via-black/40 to-black/10 group-hover:bg-[#131416]/90 transition-colors duration-[600ms] ease-out z-10" />

                            <div className="relative z-20 w-full h-full flex flex-col justify-between p-[32px] max-md:p-[24px]">

                                {/* Top: Tags */}
                                <div className="flex gap-[12px]">
                                    <span className="px-[16px] py-[8px] max-md:px-[12px] max-md:py-[6px] bg-white/10 backdrop-blur-md rounded-full font-sans text-[13px] max-md:text-[11px] font-medium uppercase text-white/90">
                                        {item.local}
                                    </span>
                                    <span className="px-[16px] py-[8px] max-md:px-[12px] max-md:py-[6px] bg-white/10 backdrop-blur-md rounded-full font-sans text-[13px] max-md:text-[11px] font-medium uppercase text-white/90">
                                        {item.period}
                                    </span>
                                </div>

                                {/* Bottom: Title & Desc com Animação Slide */}
                                <div className="flex flex-col transform translate-y-[100px] max-md:translate-y-[80px] group-hover:translate-y-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                                    <h4 className="font-display font-medium text-[36px] max-md:text-[28px] text-white mb-[16px] max-md:mb-[12px] leading-[1.15] tracking-[-0.02em]">
                                        {item.title}
                                    </h4>

                                    <div className="h-[100px] max-md:h-[80px] flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-[600ms] ease-out delay-100">
                                        <p className="font-sans text-[16px] max-md:text-[14px] text-white/70 font-normal leading-[1.5]">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Controles Desktop (Opcional, pode remover se preferir apenas scroll) */}
                <div className="relative z-30 mt-[16px] flex items-center justify-center gap-6 max-md:hidden">
                    <button onClick={scrollLeft} className="w-[56px] h-[56px] rounded-full border border-[#111111]/20 flex items-center justify-center text-[#111111] hover:bg-[#111111]/10 transition-all bg-transparent">
                        <ChevronLeft size={20} strokeWidth={2} />
                    </button>
                    <button onClick={scrollRight} className="w-[56px] h-[56px] rounded-full border border-[#111111]/20 flex items-center justify-center text-[#111111] hover:bg-[#111111]/10 transition-all bg-transparent">
                        <ChevronRight size={20} strokeWidth={2} />
                    </button>
                </div>
            </section>
        </>
    );
}
