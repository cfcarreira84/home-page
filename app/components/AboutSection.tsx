'use client';

import { motion } from 'framer-motion';

const academicChangelog = [
    { version: "v5.0", title: "MBA: AI, Data Science e Big Data", institution: "PUCRS" },
    { version: "v4.0", title: "MBA: Transformação Digital", institution: "PUCRS" },
    { version: "v3.0", title: "Especialização: Gerenciamento de Projetos (PMBoK)", institution: "SENAC SP" },
    { version: "v2.0", title: "Pós-Graduação: Propaganda e Marketing", institution: "USJT" },
    { version: "v1.0", title: "Bacharelado: Design de Mídia Digital", institution: "Impacta" },
];

export default function AboutSection() {
    return (
        <section className="relative w-full bg-cosmos-base py-32 flex flex-col items-center overflow-hidden">

            {/* 1. O RESPIRO TIPOGRÁFICO (O Manifesto) */}
            <div className="max-w-5xl w-full px-6 text-center mb-40 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-cosmos-title tracking-tighter leading-[1.1] mb-12"
                >
                    IA não é chatbot.<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cosmos-cyan via-cosmos-magenta to-cosmos-orange">
                        É caixa.
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="font-sans text-xl md:text-2xl text-cosmos-muted font-light max-w-4xl mx-auto leading-relaxed"
                >
                    Utilizando inteligência artificial, orquestro processos através da engenharia de dados. Dispenso estruturas engessadas. <strong className="text-cosmos-title font-semibold">Testar rápido, errar pequeno, corrigir e lançar.</strong> Essa é a minha receita para criar fontes virtuosas de receita operáveis de imediato.
                </motion.p>
            </div>

            {/* 2. LIFE BEYOND THE LAB (A Changelog Acadêmica) */}
            <div className="max-w-4xl w-full px-6 relative z-10">
                <div className="mb-12 border-b border-cosmos-border pb-6 flex justify-between items-end">
                    <h3 className="font-display text-3xl font-bold text-cosmos-title">System Changelog</h3>
                    <span className="font-sans text-sm text-cosmos-muted uppercase tracking-widest">Base Acadêmica</span>
                </div>

                <div className="flex flex-col gap-4">
                    {academicChangelog.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative p-6 bg-cosmos-surface border border-cosmos-border rounded-2xl flex flex-col md:flex-row md:items-center justify-between overflow-hidden hover:border-cosmos-emerald/50 transition-colors"
                        >
                            {/* O Efeito "Pong" animado no fundo ao passar o mouse */}
                            <div className="absolute inset-0 bg-cosmos-emerald/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />

                            <div className="relative z-10 flex items-center gap-6 mb-4 md:mb-0">
                                <span className="px-3 py-1 font-sans text-xs font-bold text-cosmos-base bg-cosmos-emerald rounded-full">
                                    {item.version}
                                </span>
                                <h4 className="font-display text-xl md:text-2xl font-bold text-cosmos-title group-hover:text-cosmos-emerald transition-colors">
                                    {item.title}
                                </h4>
                            </div>

                            <div className="relative z-10">
                                <span className="font-sans text-sm uppercase tracking-widest text-cosmos-muted">
                                    {item.institution}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Elementos visuais de profundidade */}
            <div className="absolute top-1/4 left-0 w-1/3 h-1/2 bg-cosmos-magenta/5 blur-[150px] pointer-events-none rounded-full" />
        </section>
    );
}