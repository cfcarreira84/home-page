'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Paperclip, Download, MessageCircle } from 'lucide-react';

export default function AgentTerminal() {
    const [scopeText, setScopeText] = useState('');
    const [status, setStatus] = useState<'idle' | 'analyzing' | 'done'>('idle');

    const handleRunSimulation = () => {
        if (!scopeText) return;
        setStatus('analyzing');
        // Simula o tempo de processamento da IA (2.5 segundos)
        setTimeout(() => {
            setStatus('done');
        }, 2500);
    };

    return (
        <section className="w-full bg-cosmos-base py-32 px-6 flex justify-center relative">
            <div className="max-w-4xl w-full relative z-10 flex flex-col">

                <div className="mb-8">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-cosmos-title mb-4 tracking-tight">
                        Simule o Fit.
                    </h2>
                    <p className="font-sans text-cosmos-muted text-lg">
                        Cole o escopo do projeto, o desafio da operação ou o PDF da vaga. A IA dirá exatamente como eu resolvo isso em tempo real.
                    </p>
                </div>

                {/* O Terminal (Input) */}
                <div className="bg-cosmos-surface border border-cosmos-border rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-2xl relative overflow-hidden">

                    <textarea
                        value={scopeText}
                        onChange={(e) => setScopeText(e.target.value)}
                        disabled={status !== 'idle'}
                        placeholder="Cole o escopo ou descreva o gargalo da sua operação aqui..."
                        className="w-full bg-transparent text-cosmos-title font-sans text-lg placeholder:text-cosmos-muted/50 focus:outline-none resize-none h-32 disabled:opacity-50"
                    />

                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-cosmos-border">
                        <button className="flex items-center gap-2 text-cosmos-muted hover:text-cosmos-cyan font-sans text-sm font-semibold tracking-wider uppercase transition-colors">
                            <Paperclip size={18} />
                            <span>Anexar Escopo (PDF/Img)</span>
                        </button>

                        {/* Botão Principal com Efeito Text Swap via Group Hover */}
                        <button
                            onClick={handleRunSimulation}
                            disabled={status !== 'idle' || !scopeText}
                            className={`relative overflow-hidden group px-8 py-4 rounded-full font-sans text-sm font-bold tracking-widest uppercase transition-all duration-300 ${status !== 'idle' || !scopeText
                                    ? 'bg-cosmos-border text-cosmos-muted cursor-not-allowed'
                                    : 'bg-cosmos-cyan text-cosmos-base hover:scale-105'
                                }`}
                        >
                            <div className="flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-[150%]">
                                <span>{status === 'analyzing' ? 'Processando...' : 'Avaliar Escopo'}</span>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center translate-y-[150%] transition-transform duration-300 group-hover:translate-y-0 text-cosmos-base">
                                <span>Inicializando Agente...</span>
                            </div>
                        </button>
                    </div>

                    {/* O Output do Agente (Feedback da IA) */}
                    <AnimatePresence>
                        {status === 'done' && (
                            <motion.div
                                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                                className="bg-cosmos-base/50 border border-cosmos-border rounded-2xl p-6"
                            >
                                <p className="font-sans text-cosmos-title mb-6 leading-relaxed">
                                    <strong className="text-cosmos-cyan">Match Técnico Confirmado.</strong><br />
                                    Avaliando o seu escopo, vejo aderência direta com a estruturação de pipelines de dados (redução de CAC) e orquestração de CRM via IA. A arquitetura detalhada baseada no seu desafio está pronta.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-cosmos-surface border border-cosmos-border text-cosmos-title hover:text-cosmos-base hover:bg-cosmos-title rounded-full font-sans text-xs font-bold uppercase tracking-wider transition-all">
                                        <Download size={16} />
                                        <span>Receber PDF por E-mail</span>
                                    </button>
                                    <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-cosmos-emerald text-cosmos-base rounded-full font-sans text-xs font-bold uppercase tracking-wider hover:scale-105 transition-all">
                                        <MessageCircle size={16} />
                                        <span>Validar no WhatsApp</span>
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </div>
        </section>
    );
}