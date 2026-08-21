'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// O Banco de Dados do seu Arsenal (Misturando Skills e Certificados do PDF)
const arsenal = [
    { id: 1, category: "AI & AUTOMATION", title: "Model Context Protocol", hover: "Integração Avançada Anthropic", tag: "Al Anthropic" },
    { id: 2, category: "AI & AUTOMATION", title: "AI Fluency: Framework", hover: "Automação Cognitiva Estruturada", tag: "Al Anthropic" },
    { id: 3, category: "AI & AUTOMATION", title: "Orquestração OpenAI", hover: "Engenharia de Prompts e Agentes", tag: "Make.com" },
    { id: 4, category: "DATA & BI", title: "Java: Consumo de APIs", hover: "Pipelines de Dados e Backend", tag: "Alura" },
    { id: 5, category: "DATA & BI", title: "Engenharia de Dados (SQL)", hover: "Mineração e Sanitização", tag: "Power Query" },
    { id: 6, category: "MÍDIA & CRM", title: "Dinamize Mail - Completo", hover: "Automação de E-mail Marketing", tag: "Dinamize" },
    { id: 7, category: "MÍDIA & CRM", title: "Google Tag Manager", hover: "Gerenciamento Avançado de Tags", tag: "Alura" },
    { id: 8, category: "MÍDIA & CRM", title: "Mídia Digital: Escala", hover: "Planejamento e Gestão de Resultados", tag: "Senac" },
    { id: 9, category: "MANAGEMENT", title: "Técnicas de Negociação", hover: "Fechamento B2B e High-Ticket", tag: "Senac" },
    { id: 10, category: "MANAGEMENT", title: "Comunicação Assertiva", hover: "Liderança de Squads Técnicos", tag: "Senac" }
];

const categories = ["ALL", "AI & AUTOMATION", "DATA & BI", "MÍDIA & CRM", "MANAGEMENT"];

export default function FilterGrid() {
    const [activeFilter, setActiveFilter] = useState("ALL");

    // Filtra os itens com base no botão clicado
    const filteredArsenal = arsenal.filter(item =>
        activeFilter === "ALL" || item.category === activeFilter
    );

    return (
        <section className="relative w-full min-h-screen bg-cosmos-base py-32 px-6 flex flex-col items-center overflow-hidden">

            {/* Fundo com as formas abstratas imitando o Labs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cosmos-magenta/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cosmos-cyan/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-6xl w-full z-10 flex flex-col items-center">

                {/* Cabeçalho da Seção */}
                <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-cosmos-title mb-12 text-center">
                    Explore the Arsenal.
                </h2>

                {/* Filtros Dinâmicos (Pills) */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`px-6 py-2 rounded-full font-sans text-xs md:text-sm font-semibold tracking-wider uppercase transition-all duration-300 border ${activeFilter === category
                                    ? 'bg-cosmos-cyan text-cosmos-base border-cosmos-cyan scale-105 shadow-[0_0_20px_rgba(0,229,255,0.3)]'
                                    : 'bg-cosmos-surface text-cosmos-muted border-cosmos-border hover:border-cosmos-cyan/50 hover:text-cosmos-title'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* O Grid com Animação Layout (A Mágica do Framer Motion) */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
                >
                    <AnimatePresence>
                        {filteredArsenal.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="group relative p-8 bg-cosmos-surface rounded-3xl border border-cosmos-border flex flex-col h-64 justify-between hover:border-cosmos-cyan/50 transition-colors overflow-hidden"
                            >
                                {/* O conteúdo padrão do card */}
                                <div className="z-10 transition-opacity duration-300 group-hover:opacity-0">
                                    <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-cosmos-orange mb-4 block">
                                        {item.category}
                                    </span>
                                    <h3 className="font-display font-bold text-2xl text-cosmos-title leading-tight">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* A Tag no rodapé do card */}
                                <div className="z-10 transition-opacity duration-300 group-hover:opacity-0">
                                    <span className="inline-block px-3 py-1 bg-cosmos-base border border-cosmos-border rounded-full text-xs font-sans text-cosmos-muted">
                                        {item.tag}
                                    </span>
                                </div>

                                {/* O Estado de Hover (O "Pong" / Reveal) */}
                                <div className="absolute inset-0 bg-cosmos-cyan p-8 flex flex-col items-start justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20">
                                    <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-cosmos-base mb-2">
                                        Aplicação Direta
                                    </span>
                                    <p className="font-display font-bold text-2xl text-cosmos-base leading-tight">
                                        {item.hover}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
}