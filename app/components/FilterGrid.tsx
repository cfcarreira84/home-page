'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const arsenal = [
    { id: 1, category: "AI & AUTO", title: "Agents and Workflows", text: "Arquitetura de agentes autônomos e fluxos cognitivos, orquestração de tarefas complexas e chamadas de ferramentas e automação ponta a ponta sem atrito operacional.", tag: "OpenAI · Jun 2026", image: "/images/agents-and-workflows-openai.jpg", video: "/footages/agents-and-workflows-openai.webm" },
    { id: 2, category: "AI & AUTO", title: "Model Context Protocol: Advanced Topics", text: "Integração de LLMs a fontes de dados locais e servidores MCP, conexão de contexto estruturado para sistemas multiagente e protocolos padronizados de comunicação entre modelos.", tag: "Anthropic · Jul 2026", image: "/images/model-context-protocol-advanced-topics-anthropic.jpg", video: "/footages/model-context-protocol-advanced-topics-anthropic.webm" },
    { id: 3, category: "AI & AUTO", title: "AI Fluency: Framework & Foundations", text: "Fundamentos operacionais e governança de IA generativa, avaliação de riscos, mitigação de vieses e alinhamento ético e implementação estratégica de modelos de linguagem em negócios.", tag: "Anthropic · Jul 2026", image: "/images/ai-fluency-framework-foundations-anthropic.jpg", video: "/footages/ai-fluency-framework-foundations-anthropic.webm" },
    
    { id: 4, category: "DATA & BI", title: "Java: Consumo de APIs e Criação de Arquivos", text: "Integração de endpoints HTTP e manipulação de fluxos de dados, tratamento de requisições web e parsing de estruturas JSON e persistência e estruturação de arquivos em ambientes corporativos.", tag: "Alura · Jun 2025", image: "/images/java-consumo-de-apis-e-criacao-de-arquivos-alura.jpg", video: "/footages/java-consumo-de-apis-e-criacao-de-arquivos-alura.webm" },
    { id: 5, category: "DATA & BI", title: "Aplicações em Java", text: "Desenvolvimento e compilação de rotinas backend estruturadas, arquitetura sólida para consumo e processamento de regras e engenharia de software aplicada à automação de processos.", tag: "Alura · Jun 2025", image: "/images/aplicacoes-em-java-alura.jpg", video: "/footages/aplicacoes-em-java-alura.webm" },
    { id: 6, category: "DATA & BI", title: "Java: Listas e Coleções de Dados", text: "Estruturação e ordenação de conjuntos complexos de dados, otimização de performance com Collections, Lists e Maps e algoritmos eficientes para processamento de informações.", tag: "Alura · Jun 2025", image: "/images/java-listas-e-colecoes-de-dados-alura.jpg", video: "/footages/java-listas-e-colecoes-de-dados-alura.webm" },
    { id: 7, category: "DATA & BI", title: "Java: Aplicando a Orientação a Objetos", text: "Modelagem desacoplada com herança, polimorfismo e interfaces, aplicação de boas práticas de design de software e coesão e construção de regras de negócio modulares e sustentáveis.", tag: "Alura · Jun 2025", image: "/images/java-aplicando-a-orientacao-a-objetos-alura.jpg", video: "/footages/java-aplicando-a-orientacao-a-objetos-alura.webm" },
    
    { id: 8, category: "MÍDIA & CRM", title: "Aplicação e Gerenciamento de Tags via Google Tag Manager", text: "Orquestração e governança de tracking e telemetria web, implementação de data layers avançados para GA4 e Ads e padronização de mensuração e acionamento de eventos.", tag: "Alura · Ago 2025", image: "/images/aplicacao-e-gerenciamento-de-tags-via-google-tag-manager-alura.jpg", video: "/footages/aplicacao-e-gerenciamento-de-tags-via-google-tag-manager-alura.webm" },
    { id: 9, category: "MÍDIA & CRM", title: "Mídia Digital: Planejamento, Gestão e Resultados", text: "Estratégias multicanal de investimento em mídia de performance, modelagem de atribuição e otimização de custo por aquisição e alocação tática de budget orientada a retorno financeiro.", tag: "Senac SP · Jul 2009", image: "/images/midia-digital-planejamento-gestao-e-resultados-senac-sp.jpg", video: "/footages/midia-digital-planejamento-gestao-e-resultados-senac-sp.webm" },
    { id: 10, category: "MÍDIA & CRM", title: "Dinamize Mail: Certificação Completa", text: "Automação de réguas de relacionamento e ciclo de vida de CRM, segmentação comportamental e nutrição orientada a conversão e otimização de entregabilidade, taxas de abertura e engajamento.", tag: "Dinamize · Set 2025", image: "/images/dinamize-mail-dinamize.jpg", video: "/footages/dinamize-mail-dinamize.webm" },
    { id: 11, category: "MÍDIA & CRM", title: "Inovação Digital: Blogs Corporativos e Redes Sociais", text: "Estruturação de presença digital e canais de relacionamento, estratégia de engajamento corporativo e distribuição de marca e gestão de canais e governança de conteúdo técnico.", tag: "Senac SP · Jul 2011", image: "/images/inovacao-digital-blogs-corporativos-e-redes-sociais-senac-sp.jpg", video: "/footages/inovacao-digital-blogs-corporativos-e-redes-sociais-senac-sp.webm" },
    { id: 12, category: "MÍDIA & CRM", title: "Jornalismo Digital e Interatividade", text: "Arquitetura de informação e narrativa interativa para canais web, produção de conteúdo orientado a retenção e clareza de leitura e otimização de interfaces conversacionais e editoriais.", tag: "Senac SP · Ago 2011", image: "/images/jornalismo-digital-e-interatividade-senac-sp.jpg", video: "/footages/jornalismo-digital-e-interatividade-senac-sp.webm" },
    { id: 13, category: "MÍDIA & CRM", title: "Visual Merchandising Aplicado ao Varejo", text: "Arquitetura visual para direcionamento de atenção e conversão, hierarquia de produtos no ponto de contato e estímulo de compra e aplicação de princípios visuais para elevar percepção de valor.", tag: "Senac SP · Jun 2009", image: "/images/visual-merchandising-aplicado-ao-varejo-senac-sp.jpg", video: "/footages/visual-merchandising-aplicado-ao-varejo-senac-sp.webm" },
    
    { id: 14, category: "MANAGEMENT", title: "Microsoft Project 2010: Gestão Avançada", text: "Estruturação de cronogramas, dependências críticas e marcos, alocação de capacidades, nivelamento de recursos e escopo e controle preditivo de riscos e cumprimento rigoroso de SLAs.", tag: "Senac SP · Fev 2011", image: "/images/microsoft-project-2010-gestao-avancada-senac-sp.jpg", video: "/footages/microsoft-project-2010-gestao-avancada-senac-sp.webm" },
    { id: 15, category: "MANAGEMENT", title: "Plano de Negócios para Empreendedores Inovadores", text: "Modelagem financeira, viabilidade econômica e tração inicial, construção de propostas de valor e análise de unit economics e estruturação de canais de go-to-market e posicionamento.", tag: "Senac SP · Ago 2012", image: "/images/plano-de-negocios-para-empreendedores-inovadores-senac-sp.jpg", video: "/footages/plano-de-negocios-para-empreendedores-inovadores-senac-sp.webm" },
    { id: 16, category: "MANAGEMENT", title: "Técnicas de Negociação", text: "Condução de acordos complexos e alinhamento com stakeholders, foco em geração de valor mútuo e expansão de margens e superação tática de barreiras em mesas executivas.", tag: "Senac SP · Jun 2012", image: "/images/tecnicas-de-negociacao-senac-sp.jpg", video: "/footages/tecnicas-de-negociacao-senac-sp.webm" },
    { id: 17, category: "MANAGEMENT", title: "Comunicação Assertiva", text: "Clareza e síntese no alinhamento de decisões corporativas, condução de times multidisciplinares com transparência radical e redução de ruídos operacionais entre liderança e execução.", tag: "Senac SP · Mar 2012", image: "/images/comunicacao-assertiva-senac-sp.jpg", video: "/footages/comunicacao-assertiva-senac-sp.webm" },
    { id: 18, category: "MANAGEMENT", title: "Comunicação Social Direcionada ao Público", text: "Segmentação de discursos conforme o nível de senioridade, enquadramento de mensagens para tomadores de decisão C-Level e posicionamento institucional com foco em autoridade.", tag: "Senac SP · Fev 2011", image: "/images/comunicacao-social-direcionada-ao-publico-senac-sp.jpg", video: "/footages/comunicacao-social-direcionada-ao-publico-senac-sp.webm" },
    { id: 19, category: "MANAGEMENT", title: "Noções de Administração Pequena e Média Empresa", text: "Organização de fluxos de caixa, governança e rotinas operacionais, otimização de margens e eficiência em estruturas enxutas e planejamento estruturado para sustentabilidade e crescimento.", tag: "Senac SP · Jan 2012", image: "/images/nocoes-de-administracao-pequena-e-media-empresa-senac-sp.jpg", video: "/footages/nocoes-de-administracao-pequena-e-media-empresa-senac-sp.webm" }
];

export const categories = ["ALL", "AI & AUTO", "DATA & BI", "MÍDIA & CRM", "MANAGEMENT"];

export const categoryTheme: Record<string, { bg: string, text: string, shape1: string, shape2: string }> = {
    "ALL": { bg: "#F8F9FA", text: "#111827", shape1: "/shapes/shape-cyan.svg", shape2: "/shapes/shape-orange.svg" },
    "AI & AUTO": { bg: "#E0F2FE", text: "#0ea5e9", shape1: "/shapes/shape-cyan.svg", shape2: "/shapes/shape-cyan.svg" },
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
    const [currentIndex, setCurrentIndex] = useState(0);

    const filteredArsenal = arsenal.filter(item =>
        activeFilter === "ALL" || item.category === activeFilter
    );

    useEffect(() => {
        setCurrentIndex(Math.floor(filteredArsenal.length / 2));
    }, [activeFilter, filteredArsenal.length]);

    const nextCard = () => setCurrentIndex((prev) => Math.min(prev + 1, filteredArsenal.length - 1));
    const prevCard = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

    return (
        <section id="arquitetura" className="relative w-full flex flex-col pt-[120px] px-[6vw] pb-[60px] max-md:pt-[80px] max-md:px-0 max-md:pb-[60px] text-[#111111]">
            
            {/* Title - Order 1 on Mobile */}
            <div className="relative z-10 w-full mb-12 max-md:mb-[32px] max-md:px-[6vw] max-md:order-1">
                <h2 className="font-display font-medium text-[clamp(40px,6vw,90px)] leading-[1.05] tracking-[-0.04em] text-[#111111]">
                    Domínio Técnico<br/>& Credenciais
                </h2>
            </div>

            {/* Filters - Order 4 on Mobile */}
            <div className="relative z-30 w-full flex flex-wrap gap-[12px] mb-[64px] max-md:flex-nowrap max-md:overflow-x-auto max-md:mb-0 max-md:px-[6vw] max-md:scrollbar-hide max-md:order-4 max-md:pb-4" style={{ WebkitOverflowScrolling: 'touch' }}>
                {categories.map((category, idx) => (
                    <button
                        key={category}
                        onClick={() => setActiveFilter(category)}
                        className={`shrink-0 rounded-[100px] text-[16px] max-md:text-[13px] max-md:px-[20px] max-md:py-[10px] font-medium uppercase transition-all duration-200 border px-[24px] py-[12px] ${
                            activeFilter === category
                                ? 'bg-[#111111] text-white border-[#111111]'
                                : 'bg-transparent text-[#111111] border-[#111111] hover:bg-black/5'
                        }`}
                    >
                        {category === "ALL" ? "TODAS" : category}
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
