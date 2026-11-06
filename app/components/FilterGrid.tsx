'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';

const mediaMap: Record<number, { category: string; image: string; video: string }> = {
    1: { category: "AI & AUTO", image: "/images/agents-and-workflows-openai.jpg", video: "/footages/agents-and-workflows-openai.webm" },
    2: { category: "AI & AUTO", image: "/images/model-context-protocol-advanced-topics-anthropic.jpg", video: "/footages/model-context-protocol-advanced-topics-anthropic.webm" },
    3: { category: "AI & AUTO", image: "/images/ai-fluency-framework-foundations-anthropic.jpg", video: "/footages/ai-fluency-framework-foundations-anthropic.webm" },
    4: { category: "DATA & BI", image: "/images/java-consumo-de-apis-e-criacao-de-arquivos-alura.jpg", video: "/footages/java-consumo-de-apis-e-criacao-de-arquivos-alura.webm" },
    5: { category: "DATA & BI", image: "/images/aplicacoes-em-java-alura.jpg", video: "/footages/aplicacoes-em-java-alura.webm" },
    6: { category: "DATA & BI", image: "/images/java-listas-e-colecoes-de-dados-alura.jpg", video: "/footages/java-listas-e-colecoes-de-dados-alura.webm" },
    7: { category: "DATA & BI", image: "/images/java-aplicando-a-orientacao-a-objetos-alura.jpg", video: "/footages/java-aplicando-a-orientacao-a-objetos-alura.webm" },
    8: { category: "MÍDIA & CRM", image: "/images/aplicacao-e-gerenciamento-de-tags-via-google-tag-manager-alura.jpg", video: "/footages/aplicacao-e-gerenciamento-de-tags-via-google-tag-manager-alura.webm" },
    9: { category: "MÍDIA & CRM", image: "/images/midia-digital-planejamento-gestao-e-resultados-senac-sp.jpg", video: "/footages/midia-digital-planejamento-gestao-e-resultados-senac-sp.webm" },
    10: { category: "MÍDIA & CRM", image: "/images/dinamize-mail-dinamize.jpg", video: "/footages/dinamize-mail-dinamize.webm" },
    11: { category: "MÍDIA & CRM", image: "/images/inovacao-digital-blogs-corporativos-e-redes-sociais-senac-sp.jpg", video: "/footages/inovacao-digital-blogs-corporativos-e-redes-sociais-senac-sp.webm" },
    12: { category: "MÍDIA & CRM", image: "/images/jornalismo-digital-e-interatividade-senac-sp.jpg", video: "/footages/jornalismo-digital-e-interatividade-senac-sp.webm" },
    13: { category: "MÍDIA & CRM", image: "/images/visual-merchandising-aplicado-ao-varejo-senac-sp.jpg", video: "/footages/visual-merchandising-aplicado-ao-varejo-senac-sp.webm" },
    14: { category: "MANAGEMENT", image: "/images/microsoft-project-2010-gestao-avancada-senac-sp.jpg", video: "/footages/microsoft-project-2010-gestao-avancada-senac-sp.webm" },
    15: { category: "MANAGEMENT", image: "/images/plano-de-negocios-para-empreendedores-inovadores-senac-sp.jpg", video: "/footages/plano-de-negocios-para-empreendedores-inovadores-senac-sp.webm" },
    16: { category: "MANAGEMENT", image: "/images/tecnicas-de-negociacao-senac-sp.jpg", video: "/footages/tecnicas-de-negociacao-senac-sp.webm" },
    17: { category: "MANAGEMENT", image: "/images/comunicacao-assertiva-senac-sp.jpg", video: "/footages/comunicacao-assertiva-senac-sp.webm" },
    18: { category: "MANAGEMENT", image: "/images/comunicacao-social-direcionada-ao-publico-senac-sp.jpg", video: "/footages/comunicacao-social-direcionada-ao-publico-senac-sp.webm" },
    19: { category: "MANAGEMENT", image: "/images/nocoes-de-administracao-pequena-e-media-empresa-senac-sp.jpg", video: "/footages/nocoes-de-administracao-pequena-e-media-empresa-senac-sp.webm" }
};

export const categories = ["ALL", "AI & AUTO", "DATA & BI", "MÍDIA & CRM", "MANAGEMENT"];

export const categoryTheme: Record<string, { bg: string, text: string, btnBg: string, btnActive: string, shape1: string, shape2: string }> = {
    "ALL": { bg: "#F5F3ED", text: "#111111", btnBg: "#E6E1D6", btnActive: "#1A1A1A", shape1: "/shapes/shape-cyan.svg", shape2: "/shapes/shape-orange.svg" },
    "AI & AUTO": { bg: "#E0F2FE", text: "#0ea5e9", btnBg: "#bae6fd", btnActive: "#0284c7", shape1: "/shapes/shape-cyan.svg", shape2: "/shapes/shape-cyan.svg" },
    "DATA & BI": { bg: "#ECFDF5", text: "#10b981", btnBg: "#a7f3d0", btnActive: "#059669", shape1: "/shapes/shape-emerald.svg", shape2: "/shapes/shape-emerald.svg" },
    "MÍDIA & CRM": { bg: "#FDF4FF", text: "#d946ef", btnBg: "#f5d0fe", btnActive: "#c026d3", shape1: "/shapes/shape-magenta.svg", shape2: "/shapes/shape-magenta.svg" },
    "MANAGEMENT": { bg: "#FFF7ED", text: "#f97316", btnBg: "#fed7aa", btnActive: "#ea580c", shape1: "/shapes/shape-orange.svg", shape2: "/shapes/shape-orange.svg" }
};

interface FilterGridProps {
    activeFilter: string;
    setActiveFilter: (filter: string) => void;
    theme: { bg: string, text: string, btnBg: string, btnActive: string, shape1: string, shape2: string };
}

export default function FilterGrid({ activeFilter, setActiveFilter, theme }: FilterGridProps) {
    const { lang } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);

    const getCategoryLabel = (cat: string) => {
        if (cat === "ALL") return lang === 'pt' ? "TODAS" : lang === 'en' ? "ALL" : "全部";
        if (cat === "AI & AUTO") return lang === 'zh' ? "AI与自动化" : cat;
        if (cat === "DATA & BI") return lang === 'zh' ? "数据与BI" : cat;
        if (cat === "MÍDIA & CRM") return lang === 'en' ? "MEDIA & CRM" : lang === 'zh' ? "营销与CRM" : cat;
        if (cat === "MANAGEMENT") return lang === 'zh' ? "管理与战略" : cat;
        return cat;
    };

    const localizedArsenal = (translations[lang].filter.arsenal || []).map(item => ({
        ...item,
        category: mediaMap[item.id]?.category || "ALL",
        image: mediaMap[item.id]?.image || "",
        video: mediaMap[item.id]?.video || ""
    }));

    const filteredArsenal = localizedArsenal.filter(item =>
        activeFilter === "ALL" || item.category === activeFilter
    );

    useEffect(() => {
        setCurrentIndex(Math.floor(filteredArsenal.length / 2));
    }, [activeFilter, filteredArsenal.length]);

    const nextCard = () => setCurrentIndex((prev) => Math.min(prev + 1, filteredArsenal.length - 1));
    const prevCard = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

    return (
        <section id="arquitetura" className="relative w-full flex flex-col pt-[120px] px-[6vw] pb-[60px] max-md:pt-[80px] max-md:px-0 max-md:pb-[60px] light-section overflow-hidden transition-colors duration-500" style={{ backgroundColor: theme.bg }}>
            
            {/* Formas Flutuantes no Fundo orbitando nas extremidades */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
                <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[800px] h-[800px] opacity-30 mix-blend-multiply max-md:w-[500px] max-md:h-[500px]"
                    style={{ left: "-10%", top: "-10%", transformOrigin: "center" }}
                >
                    <Image src={theme.shape1} alt="Shape 1" fill className="object-contain" />
                </motion.div>
                
                <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[560px] h-[560px] opacity-30 mix-blend-multiply max-md:w-[350px] max-md:h-[350px]"
                    style={{ right: "-5%", bottom: "5%", transformOrigin: "center" }}
                >
                    <Image src={theme.shape2} alt="Shape 2" fill className="object-contain" />
                </motion.div>
            </div>

            {/* Title - Order 1 on Mobile */}
            <div className="relative z-10 w-full mb-12 max-md:mb-[32px] max-md:px-[6vw] max-md:order-1 text-center pointer-events-none mix-blend-difference">
                <h2 className="font-display font-medium text-[clamp(40px,6vw,90px)] leading-[1.05] tracking-[-0.04em] text-white">
                    {lang === 'pt' ? (
                        <>Domínio Técnico<br/>& Credenciais</>
                    ) : lang === 'en' ? (
                        <>Technical Domain<br/>& Credentials</>
                    ) : (
                        <>技术领域<br/>与实战认证</>
                    )}
                </h2>
            </div>

            {/* Filters - Order 4 on Mobile */}
            <div className="relative z-30 w-full flex flex-wrap justify-center gap-[12px] mb-[64px] max-md:flex-nowrap max-md:overflow-x-auto max-md:mb-0 max-md:px-[6vw] max-md:scrollbar-hide max-md:order-4 max-md:pb-4 max-md:justify-start" style={{ WebkitOverflowScrolling: 'touch' }}>
                {categories.map((category, idx) => (
                    <button
                        key={category}
                        onMouseEnter={(e) => {
                            if (activeFilter !== category) {
                                e.currentTarget.style.backgroundColor = theme.btnActive;
                                e.currentTarget.style.color = '#ffffff';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (activeFilter !== category) {
                                e.currentTarget.style.backgroundColor = theme.btnBg;
                                e.currentTarget.style.color = theme.btnActive;
                            }
                        }}
                        onClick={() => setActiveFilter(category)}
                        style={{
                            backgroundColor: activeFilter === category ? theme.btnActive : theme.btnBg,
                            color: activeFilter === category ? '#ffffff' : theme.btnActive
                        }}
                        className="shrink-0 rounded-[100px] font-sans text-[16px] max-md:text-[13px] max-md:px-[20px] max-md:py-[10px] font-medium uppercase transition-all duration-200 px-[28px] py-[12px]"
                    >
                        {getCategoryLabel(category)}
                    </button>
                ))}
            </div>

            {/* Carousel Container - Order 2 on Mobile */}
            <div className="relative z-20 w-full flex items-center justify-center perspective-[1000px] max-md:perspective-none max-md:order-2 max-md:overflow-x-auto max-md:snap-x max-md:snap-mandatory max-md:px-[6vw] max-md:gap-[16px] max-md:justify-start max-md:mb-[24px] max-md:scrollbar-hide">
                
                {/* Desktop 3D Wrapper */}
                <div className="absolute inset-0 flex items-center justify-center max-md:hidden h-[550px]">
                    <AnimatePresence mode="popLayout">
                        {filteredArsenal.map((item, index) => {
                            const offset = index - currentIndex;
                            const isCenter = offset === 0;
                            const x = offset * 380;
                            const y = Math.abs(offset) * 40; 
                            const rotateZ = offset * 4; 
                            
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
                                    className="absolute w-[340px] h-[480px] bg-white rounded-[24px] shadow-[0_12px_40px_rgba(0,0,0,0.06)] p-4 flex flex-col group overflow-hidden cursor-pointer border border-[#E6E1D6]"
                                    onClick={() => setCurrentIndex(index)}
                                    drag="x"
                                    dragConstraints={{ left: 0, right: 0 }}
                                    onDragEnd={(e, { offset, velocity }) => {
                                        const swipe = offset.x;
                                        if (swipe < -50) nextCard();
                                        else if (swipe > 50) prevCard();
                                    }}
                                >
                                    <div className="relative w-full h-[55%] rounded-2xl overflow-hidden bg-gray-100 mb-6">
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
                                    </div>
                                    <div className="flex flex-col px-2 flex-grow">
                                        <h3 className="font-display font-medium text-[20px] text-[#111111] mb-2 leading-tight">
                                            {item.title}
                                        </h3>
                                        <p className="font-sans text-[11px] font-bold text-[#111111] uppercase tracking-[0.05em] mb-3">
                                            {item.tag}
                                        </p>
                                        <p className="font-sans text-[14px] text-[#666666] leading-[1.5]">
                                            {item.text}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Mobile Scroll Snap Cards */}
                <div className="hidden max-md:flex max-md:w-max max-md:gap-[16px]">
                    {filteredArsenal.map((item, index) => (
                        <div key={`${item.id}-mobile`} className="shrink-0 w-[280px] min-h-[380px] snap-center bg-white rounded-[24px] p-[16px] flex flex-col border border-[#E6E1D6]">
                            <div className="relative w-full h-[160px] rounded-[16px] overflow-hidden bg-gray-100 mb-[24px]">
                                <Image src={item.image} alt={item.title} fill className="object-cover" />
                            </div>
                            <div className="flex flex-col flex-grow">
                                <h3 className="font-display font-medium text-[18px] text-[#111111] mb-[6px] leading-[1.2]">
                                    {item.title}
                                </h3>
                                <p className="font-sans text-[11px] font-bold text-[#111111] uppercase tracking-[0.05em] mb-[8px]">
                                    {item.tag}
                                </p>
                                <p className="font-sans text-[14px] text-[#666666] leading-[1.4]">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Controles Desktop */}
            <div className="relative z-30 mt-[550px] flex items-center justify-center gap-6 max-md:hidden">
                <button
                    onClick={prevCard}
                    disabled={currentIndex === 0}
                    className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-black hover:bg-[#E6E1D6] hover:border-black transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                    <ChevronLeft size={20} strokeWidth={2} />
                </button>
                <button
                    onClick={nextCard}
                    disabled={currentIndex === filteredArsenal.length - 1}
                    className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-black hover:bg-[#E6E1D6] hover:border-black transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                    <ChevronRight size={20} strokeWidth={2} />
                </button>
            </div>

            {/* Setas Mobile - Order 3 */}
            <div className="hidden max-md:flex max-md:order-3 max-md:w-full max-md:justify-center max-md:gap-[16px] max-md:mb-[32px]">
                <button className="w-[56px] h-[56px] rounded-full border border-[#E6E1D6] flex items-center justify-center text-[#111111] bg-transparent">
                    <ChevronLeft size={20} strokeWidth={2} />
                </button>
                <button className="w-[56px] h-[56px] rounded-full border border-[#E6E1D6] flex items-center justify-center text-[#111111] bg-transparent">
                    <ChevronRight size={20} strokeWidth={2} />
                </button>
            </div>

        </section>
    );
}
