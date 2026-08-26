'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Paperclip, Download, MessageCircle } from 'lucide-react';

interface AgentTerminalProps {
    theme?: { bg: string, text: string, shape1: string, shape2: string };
}

const promptChips = [
    { id: 1, label: "CADEIRA EXECUTIVA", text: "Como sua experiência se aplica a uma posição de Head de Marketing Operations / RevOps?" },
    { id: 2, label: "MARCAS GLOBAIS", text: "Quais iniciativas você liderou para contas como Microsoft, Pfizer e J&J?" },
    { id: 3, label: "TURNAROUND DE RECEITA", text: "Como você triplicou o faturamento e elevou o ticket médio na Attimo?" },
    { id: 4, label: "EFICIÊNCIA LEAN", text: "Como você estruturou a operação de 15 pessoas para entregar como 50?" }
];

export default function AgentTerminal({ theme }: AgentTerminalProps) {
    const defaultPlaceholder = "Descreva o gargalo da sua operação, cole a descrição de uma vaga ou pergunte sobre cases e marcas atendidas...";
    const [scopeText, setScopeText] = useState('');
    const [activeChipId, setActiveChipId] = useState<number | null>(null);
    const [placeholder, setPlaceholder] = useState(defaultPlaceholder);
    
    const [status, setStatus] = useState<'idle' | 'analyzing' | 'done'>('idle');

    const handleChipClick = (id: number, text: string) => {
        if (activeChipId === id) {
            setActiveChipId(null);
            setPlaceholder(defaultPlaceholder);
        } else {
            setActiveChipId(id);
            setPlaceholder(text);
        }
    };

    const handleRunSimulation = () => {
        if (!scopeText && activeChipId === null) return;
        setStatus('analyzing');
        setTimeout(() => {
            setStatus('done');
        }, 2500);
    };

    return (
        <section id="sandbox" className="relative w-full py-[80px] px-[4vw] pb-[160px] max-md:pb-[100px] max-md:px-0 flex flex-col items-center light-section transition-colors duration-500" style={{ backgroundColor: theme?.bg || '#F5F3ED' }}>
            
            <div className="max-w-[900px] w-full text-center mx-auto mb-[48px] max-md:px-[6vw]">
                <p className="font-sans text-[13px] font-bold text-[#111111] uppercase tracking-[0.05em] mb-[32px]">
                    EXPERIMENT 05 // INTERACTIVE AGENT
                </p>
                <h2 className="font-display font-medium text-[clamp(36px,4.5vw,56px)] leading-[1.1] tracking-[-0.02em] text-[#111111] mb-[32px]">
                    Conecte seu Desafio à Minha Trajetória
                </h2>
                <p className="font-sans font-normal text-[clamp(20px,2.2vw,26px)] leading-[1.4] text-[#111111] max-md:text-[18px]">
                    Insira o escopo de um projeto, o descritivo de uma posição executiva ou pergunte sobre cases e marcas
                    atendidas. O sistema cruza sua necessidade com meu histórico profissional em tempo real, gerando um
                    diagnóstico contextualizado e uma visão sob medida da minha experiência para a sua demanda.
                </p>
            </div>

            {/* Prompt Bar (Chips) */}
            <div className="flex flex-wrap justify-center gap-[12px] mb-[40px] max-w-[1000px] w-full max-md:flex-nowrap max-md:overflow-x-auto max-md:px-[6vw] max-md:justify-start max-md:scrollbar-hide max-md:mb-[32px] max-md:pb-2" style={{ WebkitOverflowScrolling: 'touch' }}>
                {promptChips.map((chip) => (
                    <button
                        key={chip.id}
                        onClick={() => handleChipClick(chip.id, chip.text)}
                        style={
                            activeChipId === chip.id
                                ? { backgroundColor: theme?.text || '#111111', color: '#fff', borderColor: theme?.text || '#111111' }
                                : { color: '#111111', borderColor: '#111111' }
                        }
                        className={`shrink-0 rounded-[100px] text-[16px] max-md:text-[13px] max-md:px-[20px] max-md:py-[10px] font-medium uppercase transition-all duration-200 border px-[24px] py-[12px] ${
                            activeChipId !== chip.id ? 'bg-transparent hover:bg-black/5' : ''
                        }`}
                    >
                        {chip.label}
                    </button>
                ))}
            </div>

            {/* Sandbox Terminal */}
            <div className="w-full max-w-[900px] bg-white/40 backdrop-blur-[32px] border border-white/70 rounded-[24px] max-md:rounded-[16px] max-md:w-[calc(100%-12vw)] shadow-[0_12px_40px_rgba(0,0,0,0.06)] flex flex-col overflow-hidden relative z-10">
                <textarea
                    value={scopeText}
                    onChange={(e) => setScopeText(e.target.value)}
                    disabled={status !== 'idle'}
                    placeholder={placeholder}
                    className="w-full min-h-[240px] max-md:min-h-[180px] p-[32px] max-md:p-[24px] border-none outline-none resize-none font-sans text-[18px] max-md:text-[16px] leading-[1.5] text-[#111111] bg-transparent placeholder:text-[#8c8983] disabled:opacity-50"
                />
                
                <div className="flex justify-between items-center p-[16px_32px] max-md:p-[16px_24px] bg-white/25 border-t border-white/40">
                    <button className="bg-transparent border-none text-[#666666] hover:text-[#111111] text-[15px] font-semibold cursor-pointer flex items-center gap-[8px] transition-colors">
                        <Paperclip size={18} />
                        <span>Anexar</span>
                    </button>
                    
                    <button
                        onClick={handleRunSimulation}
                        disabled={status !== 'idle' || (!scopeText && activeChipId === null)}
                        style={(status === 'idle' && (scopeText || activeChipId !== null)) ? { backgroundColor: theme?.text, color: '#fff', borderColor: 'transparent' } : {}}
                        className={`bg-[#111111] text-white px-[32px] py-[14px] rounded-[100px] text-[15px] font-medium transition-all ${
                            status !== 'idle' || (!scopeText && activeChipId === null)
                            ? 'opacity-50 cursor-not-allowed'
                            : 'hover:opacity-85 hover:scale-[1.02] cursor-pointer'
                        }`}
                    >
                        {status === 'analyzing' ? 'Processando...' : 'Gerar Análise de Fit'}
                    </button>
                </div>
                
                {/* Agent Output Simulated */}
                <AnimatePresence>
                    {status === 'done' && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="bg-white/60 border-t border-white/70 p-[32px] max-md:p-[24px]"
                        >
                            <p className="font-sans text-[16px] text-[#111111] mb-[24px] leading-relaxed">
                                <strong style={{ color: theme?.text || '#000' }}>Match Técnico Confirmado.</strong><br />
                                Avaliando o escopo fornecido, vejo aderência direta com a estruturação de operações e orquestração de sistemas. A arquitetura detalhada baseada no seu desafio está pronta.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white/50 border border-[#111111]/10 text-[#111111] hover:bg-[#111111] hover:text-white rounded-full font-sans text-xs font-bold uppercase tracking-wider transition-all">
                                    <Download size={16} />
                                    <span>Receber PDF por E-mail</span>
                                </button>
                                <button 
                                    style={{ backgroundColor: theme?.text || '#25D366' }}
                                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 text-white rounded-full font-sans text-xs font-bold uppercase tracking-wider hover:scale-105 transition-all shadow-md"
                                >
                                    <MessageCircle size={16} />
                                    <span>Validar no WhatsApp</span>
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>


        </section>
    );
}
