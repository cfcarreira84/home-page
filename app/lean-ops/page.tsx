'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
    Maximize2, 
    X, 
    CheckCircle2, 
    ShieldCheck, 
    ChevronRight,
    Filter,
    Calculator,
    BarChart3,
    ArrowRight,
    Info,
    Sparkles
} from 'lucide-react';
import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ExecutiveDeck from '../components/ExecutiveDeck';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';

const AgentTerminal = dynamic(() => import('../components/AgentTerminal'), { ssr: false });

const theme = { 
    bg: "#F5F3ED", 
    text: "#111111", 
    shape1: "/shapes/shape-cyan.svg", 
    shape2: "/shapes/shape-orange.svg" 
};

export default function LeanOpsPage() {
    const { lang } = useLanguage();
    const t = translations[lang].leanOps;
    const funilLayers = t.funilLayers;
    const cicloEtapas = t.cicloEtapas;
    const camadasProntuario = t.camadasProntuario;
    const monteCarloPhases = t.monteCarloPhases;
    const stackItens = t.stackItens;
    const regrasEngenharia = t.regrasEngenharia;

    const [selectedEtapa, setSelectedEtapa] = useState(0);
    const [selectedCamada, setSelectedCamada] = useState(0);
    const [selectedFunilIndex, setSelectedFunilIndex] = useState(4);
    const [selectedMcPhase, setSelectedMcPhase] = useState(3);
    const [modalSvg, setModalSvg] = useState<string | null>(null);

    return (
        <main className="min-h-screen relative bg-cosmos-base overflow-x-hidden selection:bg-black selection:text-white">
            
            {/* Header Global */}
            <Navbar />

            {/* ================= 0. APRESENTAÇÃO EXECUTIVA (100vh PITCH DECK C-LEVEL) ================= */}
            <ExecutiveDeck />

            {/* ================= CORPO EDITORIAL (Light Section: #F5F3ED) ================= */}
            <div className="light-section w-full bg-[#F5F3ED] text-[#111111] transition-colors duration-500 relative">
                
                {/* Elementos Geográficos Dinâmicos e Giratórios em Toda a Página (Estilo Google Labs) */}
                <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
                    className="absolute top-16 right-[-8vw] w-[540px] h-[540px] pointer-events-none opacity-20 mix-blend-multiply z-0"
                >
                    <Image src="/shapes/shape-cyan.svg" alt="Shape Cyan" fill className="object-contain" />
                </motion.div>

                <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 85, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[28%] left-[-10vw] w-[600px] h-[600px] pointer-events-none opacity-15 mix-blend-multiply z-0"
                >
                    <Image src="/shapes/shape-orange.svg" alt="Shape Orange" fill className="object-contain" />
                </motion.div>

                <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 95, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[52%] right-[-12vw] w-[650px] h-[650px] pointer-events-none opacity-15 mix-blend-multiply z-0"
                >
                    <Image src="/shapes/shape-emerald.svg" alt="Shape Emerald" fill className="object-contain" />
                </motion.div>

                <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[76%] left-[-8vw] w-[580px] h-[580px] pointer-events-none opacity-20 mix-blend-multiply z-0"
                >
                    <Image src="/shapes/shape-magenta.svg" alt="Shape Magenta" fill className="object-contain" />
                </motion.div>

                {/* ================= 2. DIAGNÓSTICO & A TESE ================= */}
                <section id="diagnostico" className="max-w-6xl mx-auto px-6 pt-28 pb-20 relative z-10">
                    
                    <div className="max-w-3xl mb-16">
                        <span className="font-sans text-[12px] font-bold text-black/50 uppercase tracking-[0.14em] block mb-3">
                            {t.sec1Tag}
                        </span>
                        <h2 className="font-display font-medium text-[clamp(30px,4.5vw,52px)] leading-[1.12] tracking-[-0.02em] text-[#111111]">
                            {t.sec1Title}
                        </h2>
                    </div>

                    {/* Os 3 Gargalos Estruturais */}
                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        {(t.bottlenecks || []).map((item, idx) => {
                            const colors = ["text-[#E11D48]", "text-[#D97706]", "text-[#2563EB]"];
                            return (
                                <div key={idx} className="p-8 rounded-3xl bg-white/70 border border-black/5 backdrop-blur-sm shadow-sm flex flex-col justify-between">
                                    <div>
                                        <span className={`font-sans text-[12px] font-bold ${colors[idx % colors.length]} tracking-widest uppercase mb-4 block`}>
                                            {item.tag}
                                        </span>
                                        <h3 className="font-display font-semibold text-[22px] mb-3 leading-snug">{item.title}</h3>
                                        <p className="font-sans text-[15px] text-black/70 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                    <div className="mt-8 pt-4 border-t border-black/5 text-[12px] font-medium text-black/50">
                                        {item.footer}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* A Tese Brutalista */}
                    <div className="p-10 md:p-14 rounded-3xl bg-[#111111] text-white relative overflow-hidden shadow-xl">
                        <div className="relative z-10 max-w-3xl">
                            <span className="font-sans text-[11px] font-bold text-white/50 uppercase tracking-[0.18em] block mb-4">
                                {t.thesisTag}
                            </span>
                            <blockquote className="font-display text-[clamp(22px,3vw,36px)] leading-[1.25] tracking-tight mb-8">
                                {t.thesisQuote}
                            </blockquote>

                            <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-white/15">
                                {(t.thesisPillars || []).map((pillar, pIdx) => (
                                    <div key={pIdx}>
                                        <h4 className="font-display font-semibold text-[17px] text-white mb-1">{pillar.name}</h4>
                                        <p className="font-sans text-[13px] text-white/70">{pillar.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </section>

                {/* ================= 3. O CICLO EM 5 ETAPAS & FUNIL REFORMULADO ================= */}
                <section id="ciclo" className="max-w-6xl mx-auto px-6 py-20 border-t border-black/10 relative z-10">
                    
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div className="max-w-2xl">
                            <span className="font-sans text-[12px] font-bold text-black/50 uppercase tracking-[0.14em] block mb-3">
                                {t.sec2Tag}
                            </span>
                            <h2 className="font-display font-medium text-[clamp(28px,3.8vw,46px)] leading-[1.15] tracking-tight">
                                {t.sec2Title}
                            </h2>
                        </div>
                        <p className="font-sans text-[15px] text-black/70 max-w-md">
                            {t.sec2Desc}
                        </p>
                    </div>

                    {/* Diagrama 01: Funil Reformulado em Componente Interativo com Ação de Expandir Preservada */}
                    <div className="mb-16 rounded-3xl bg-white p-6 md:p-10 border border-black/5 shadow-sm">
                        
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b border-black/5 gap-3">
                            <div>
                                <span className="font-sans text-[11px] font-bold text-black/40 uppercase tracking-widest block mb-1">
                                    {t.diagram1Header}
                                </span>
                                <h3 className="font-display font-semibold text-[22px]">{t.diagram1Title}</h3>
                            </div>
                            <button
                                onClick={() => setModalSvg("/images/cases/lean-ops/funil-captacao.svg")}
                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-black/5 hover:bg-black/10 text-[13px] font-medium text-black/80 hover:text-black transition-all cursor-pointer self-start sm:self-auto"
                            >
                                <Maximize2 size={15} />
                                <span>{t.btnExpand}</span>
                            </button>
                        </div>

                        {/* Visual Funil Interativo Moderno */}
                        <div className="grid lg:grid-cols-12 gap-8 items-center">
                            
                            {/* Lado Esquerdo: As Fatias do Funil em Escada */}
                            <div className="lg:col-span-7 flex flex-col gap-3">
                                {funilLayers.map((layer, idx) => {
                                    const isSelected = selectedFunilIndex === idx;
                                    const widths = ["w-full", "w-[92%]", "w-[84%]", "w-[76%]", "w-[68%]"];
                                    return (
                                        <button
                                            key={layer.id}
                                            onClick={() => setSelectedFunilIndex(idx)}
                                            className={`mx-auto ${widths[idx]} p-4 md:p-5 rounded-2xl text-left transition-all cursor-pointer relative overflow-hidden flex items-center justify-between border ${
                                                isSelected 
                                                    ? 'bg-[#111111] text-white border-black shadow-lg scale-[1.02]' 
                                                    : 'bg-white hover:bg-black/[0.03] text-black border-black/10'
                                            }`}
                                        >
                                            <div className="flex items-center gap-3.5">
                                                <div className={`w-8 h-8 rounded-xl font-mono text-[13px] font-bold flex items-center justify-center shrink-0 ${
                                                    isSelected ? 'bg-white/15 text-white' : 'bg-black/5 text-black/70'
                                                }`}>
                                                    {layer.level}
                                                </div>
                                                <div>
                                                    <span className={`text-[11px] font-mono uppercase tracking-wider block ${
                                                        isSelected ? 'text-white/60' : 'text-black/40'
                                                    }`}>
                                                        {layer.badge}
                                                    </span>
                                                    <h4 className="font-display font-semibold text-[16px] md:text-[17px] leading-tight">
                                                        {layer.name}
                                                    </h4>
                                                </div>
                                            </div>

                                            <div className="text-right">
                                                <span className={`font-mono font-bold text-[13px] md:text-[14px] ${
                                                    isSelected ? 'text-emerald-400' : 'text-blue-700'
                                                }`}>
                                                    {layer.volume}
                                                </span>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Lado Direito: Detalhamento Técnico da Camada Ativa */}
                            <div className="lg:col-span-5">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={selectedFunilIndex}
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        transition={{ duration: 0.25 }}
                                        className="p-8 rounded-3xl bg-[#F8FAFC] border border-black/5 shadow-xs"
                                    >
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-mono text-[12px] font-bold mb-4">
                                            <span>
                                                {lang === 'pt' 
                                                    ? `CAMADA ${funilLayers[selectedFunilIndex].level} DE 05` 
                                                    : lang === 'en' 
                                                        ? `LAYER ${funilLayers[selectedFunilIndex].level} OF 05` 
                                                        : `第 ${funilLayers[selectedFunilIndex].level} 层（共 05 层）`}
                                            </span>
                                        </div>

                                        <h4 className="font-display font-bold text-[24px] text-black mb-1">
                                            {funilLayers[selectedFunilIndex].name}
                                        </h4>
                                        <span className="font-mono text-[13px] font-semibold text-blue-600 block mb-4">
                                            {funilLayers[selectedFunilIndex].volume}
                                        </span>

                                        <div className="space-y-4 pt-4 border-t border-black/5">
                                            <div>
                                                <span className="text-[11px] font-bold text-black/40 uppercase tracking-widest block mb-1">
                                                    {lang === 'pt' ? 'Critério de Filtragem:' : lang === 'en' ? 'Filtering Criteria:' : '筛选标准：'}
                                                </span>
                                                <p className="font-sans text-[14px] text-black/75 leading-relaxed">
                                                    {funilLayers[selectedFunilIndex].criteria}
                                                </p>
                                            </div>

                                            <div className="p-4 rounded-xl bg-white border border-black/5">
                                                <span className="text-[11px] font-bold text-black/40 uppercase tracking-widest block mb-1">
                                                    {lang === 'pt' ? 'Ação Operacional Executada:' : lang === 'en' ? 'Operational Action Taken:' : '执行的操作：'}
                                                </span>
                                                <p className="font-sans text-[13px] text-black/85 leading-relaxed">
                                                    {funilLayers[selectedFunilIndex].action}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                        </div>
                    </div>

                    {/* Tabs Interativas das 5 Etapas do Ciclo */}
                    <div className="rounded-3xl bg-white p-6 md:p-10 border border-black/5 shadow-sm">
                        
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b border-black/5 gap-3">
                            <div>
                                <span className="font-sans text-[11px] font-bold text-black/40 uppercase tracking-widest block mb-1">
                                    {t.cycleInteractiveHeader}
                                </span>
                                <h3 className="font-display font-semibold text-[22px]">{t.cycleInteractiveTitle}</h3>
                            </div>
                            <button
                                onClick={() => setModalSvg("/images/cases/lean-ops/ciclo.svg")}
                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-black/5 hover:bg-black/10 text-[13px] font-medium text-black/80 hover:text-black transition-all cursor-pointer self-start sm:self-auto"
                            >
                                <Maximize2 size={15} />
                                <span>{t.btnViewCycleFull}</span>
                            </button>
                        </div>

                        {/* Barra de Tabs */}
                        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-8">
                            {cicloEtapas.map((etapa, idx) => (
                                <button
                                    key={etapa.id}
                                    onClick={() => setSelectedEtapa(idx)}
                                    className={`p-3.5 rounded-2xl text-left transition-all cursor-pointer ${
                                        selectedEtapa === idx
                                            ? 'bg-[#111111] text-white shadow-md'
                                            : 'bg-black/[0.03] hover:bg-black/[0.06] text-black/80'
                                    }`}
                                >
                                    <span className={`text-[11px] font-mono block mb-1 ${selectedEtapa === idx ? 'text-white/60' : 'text-black/40'}`}>
                                        {lang === 'pt' ? `ETAPA ${etapa.step}` : lang === 'en' ? `STAGE ${etapa.step}` : `环节 ${etapa.step}`}
                                    </span>
                                    <span className="font-display font-semibold text-[15px] block">
                                        {etapa.name}
                                    </span>
                                </button>
                            ))}
                        </div>

                        {/* Conteúdo Dinâmico da Etapa Selecionada */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedEtapa}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="p-8 rounded-2xl bg-[#F8FAFC] border border-black/5 grid md:grid-cols-3 gap-8"
                            >
                                <div className="md:col-span-2">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="font-mono text-[12px] text-blue-600 font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-100">
                                            {cicloEtapas[selectedEtapa].sub}
                                        </span>
                                    </div>
                                    <h4 className="font-display font-bold text-[24px] mb-3">
                                        {cicloEtapas[selectedEtapa].name}
                                    </h4>
                                    <p className="font-sans text-[16px] text-black/75 leading-relaxed mb-6">
                                        {cicloEtapas[selectedEtapa].desc}
                                    </p>

                                    <div className="space-y-2">
                                        <span className="text-[12px] font-bold text-black/50 uppercase tracking-wider block mb-2">
                                            {t.validationRulesLabel}
                                        </span>
                                        {cicloEtapas[selectedEtapa].rules.map((rule, rIdx) => (
                                            <div key={rIdx} className="flex items-center gap-2 text-[14px] text-black/80">
                                                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                                                <span>{rule}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-6 rounded-2xl bg-white border border-black/5 flex flex-col justify-between shadow-xs">
                                    <span className="text-[11px] font-bold text-black/40 uppercase tracking-widest">
                                        {t.guaranteedOutputLabel}
                                    </span>
                                    <div className="my-auto py-4">
                                        <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-mono font-bold text-[14px] mb-3">
                                            {cicloEtapas[selectedEtapa].step}
                                        </div>
                                        <p className="font-display font-semibold text-[17px] text-black leading-snug">
                                            {cicloEtapas[selectedEtapa].output}
                                        </p>
                                    </div>
                                    <span className="text-[11px] text-black/40 font-mono">
                                        {t.automatedPipelineLabel}
                                    </span>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                    </div>

                </section>

                {/* ================= 4. ANATOMIA DO PRONTUÁRIO & ANTI-ALUCINAÇÃO ================= */}
                <section id="prontuario" className="max-w-6xl mx-auto px-6 py-20 border-t border-black/10 relative z-10">
                    
                    <div className="max-w-3xl mb-16">
                        <span className="font-sans text-[12px] font-bold text-black/50 uppercase tracking-[0.14em] block mb-3">
                            {t.sec3Tag}
                        </span>
                        <h2 className="font-display font-medium text-[clamp(28px,3.8vw,46px)] leading-[1.15] tracking-tight">
                            {t.sec3Title}
                        </h2>
                        <p className="font-sans text-[16px] text-black/70 mt-4 leading-relaxed">
                            {t.sec3Desc}
                        </p>
                    </div>

                    {/* Exibição do Prontuário Real */}
                    <div className="mb-16 rounded-3xl bg-white p-6 md:p-8 border border-black/5 shadow-sm">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 pb-4 border-b border-black/5 gap-3">
                            <div>
                                <span className="font-sans text-[13px] font-semibold text-black/80 block">
                                    {t.diagram2Title}
                                </span>
                                <span className="font-sans text-[12px] text-black/50">
                                    {t.diagram2Sub}
                                </span>
                            </div>
                            <button
                                onClick={() => setModalSvg("/images/cases/lean-ops/prontuario.svg")}
                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-black/5 hover:bg-black/10 text-[13px] font-medium text-black/80 hover:text-black transition-all cursor-pointer self-start sm:self-auto"
                            >
                                <Maximize2 size={15} />
                                <span>{t.btnViewDossier}</span>
                            </button>
                        </div>
                        <div className="w-full overflow-hidden flex items-center justify-center py-4 bg-[#F8FAFC] rounded-2xl">
                            <Image 
                                src="/images/cases/lean-ops/prontuario.svg" 
                                alt="Prontuário do Lead" 
                                width={900} 
                                height={450} 
                                className="w-full max-h-[420px] object-contain cursor-pointer"
                                onClick={() => setModalSvg("/images/cases/lean-ops/prontuario.svg")}
                            />
                        </div>
                    </div>

                    {/* Componente Interativo: As 7 Camadas do Prontuário */}
                    <div className="rounded-3xl bg-white p-6 md:p-10 border border-black/5 shadow-sm mb-16">
                        <span className="font-sans text-[11px] font-bold text-black/40 uppercase tracking-widest block mb-1">
                            {t.prontuarioHeader}
                        </span>
                        <h3 className="font-display font-semibold text-[22px] mb-8">
                            {t.layersTitle}
                        </h3>

                        <div className="grid lg:grid-cols-12 gap-8 items-start">
                            {/* Lista Lateral de Camadas */}
                            <div className="lg:col-span-5 space-y-2">
                                {camadasProntuario.map((camada, idx) => (
                                    <button
                                        key={camada.id}
                                        onClick={() => setSelectedCamada(idx)}
                                        className={`w-full p-4 rounded-2xl text-left transition-all flex items-center justify-between cursor-pointer ${
                                            selectedCamada === idx
                                                ? 'bg-[#111111] text-white shadow-sm'
                                                : 'bg-black/[0.02] hover:bg-black/[0.05] text-black/80'
                                        }`}
                                    >
                                        <span className="font-display font-medium text-[15px]">
                                            {camada.title}
                                        </span>
                                        <ChevronRight size={16} className={selectedCamada === idx ? 'text-white' : 'text-black/30'} />
                                    </button>
                                ))}
                            </div>

                            {/* Card de Visualização da Camada */}
                            <div className="lg:col-span-7">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={selectedCamada}
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        transition={{ duration: 0.25 }}
                                        className="p-8 rounded-3xl bg-[#F8FAFC] border border-black/5"
                                    >
                                        <span className="font-mono text-[11px] uppercase tracking-wider text-blue-600 block mb-2">
                                            {lang === 'pt' 
                                                ? `CAMADA ${selectedCamada + 1} DE 7` 
                                                : lang === 'en' 
                                                    ? `LAYER ${selectedCamada + 1} OF 7` 
                                                    : `第 ${selectedCamada + 1} 层（共 7 层）`}
                                        </span>
                                        <h4 className="font-display font-bold text-[26px] text-black mb-4">
                                            {camadasProntuario[selectedCamada].title}
                                        </h4>
                                        <p className="font-sans text-[16px] text-black/75 leading-relaxed mb-6">
                                            {camadasProntuario[selectedCamada].desc}
                                        </p>

                                        <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200/80">
                                            <div className="flex items-center gap-2 text-amber-900 font-display font-semibold text-[13px] mb-1">
                                                <ShieldCheck size={16} className="text-amber-700" />
                                                <span>{t.antiHallucinationRule}</span>
                                            </div>
                                            <p className="font-sans text-[13px] text-amber-900/80 leading-relaxed">
                                                {camadasProntuario[selectedCamada].honestyRule}
                                            </p>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                </section>

                {/* ================= 5. MONTE CARLO & COMPARATIVO DE MÍDIA REFORMULADOS ================= */}
                <section id="monte-carlo" className="max-w-6xl mx-auto px-6 py-20 border-t border-black/10 relative z-10">
                    
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div className="max-w-2xl">
                            <span className="font-sans text-[12px] font-bold text-black/50 uppercase tracking-[0.14em] block mb-3">
                                {t.sec4Tag}
                            </span>
                            <h2 className="font-display font-medium text-[clamp(28px,3.8vw,46px)] leading-[1.15] tracking-tight">
                                {t.sec4Title}
                            </h2>
                        </div>
                        <p className="font-sans text-[15px] text-black/70 max-w-md">
                            {t.sec4Desc}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-16">
                        
                        {/* Simulação Estocástica de Monte Carlo - Componente Interativo */}
                        <div className="rounded-3xl bg-white p-6 md:p-8 border border-black/5 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between mb-4 pb-3 border-b border-black/5">
                                    <div className="flex items-center gap-2">
                                        <Calculator size={18} className="text-blue-600" />
                                        <span className="font-sans text-[14px] font-semibold text-black/90">
                                            {t.mcTitle}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => setModalSvg("/images/cases/lean-ops/funil-mmc.svg")}
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/5 hover:bg-black/10 text-[12px] font-medium text-black/70 hover:text-black transition-all cursor-pointer"
                                    >
                                        <Maximize2 size={13} />
                                        <span>{lang === 'pt' ? 'Original' : lang === 'en' ? 'Original' : '原图'}</span>
                                    </button>
                                </div>
                                <p className="font-sans text-[13px] text-black/60 mb-6 leading-relaxed">
                                    {t.mcDesc}
                                </p>

                                {/* Seletor de Fases do Funil */}
                                <div className="space-y-2 mb-6">
                                    {monteCarloPhases.map((phaseItem, pIdx) => {
                                        const isPhaseActive = selectedMcPhase === pIdx;
                                        return (
                                            <button
                                                key={pIdx}
                                                onClick={() => setSelectedMcPhase(pIdx)}
                                                className={`w-full p-3 rounded-xl text-left transition-all flex items-center justify-between border cursor-pointer ${
                                                    isPhaseActive 
                                                        ? 'bg-[#111111] text-white border-black shadow-xs' 
                                                        : 'bg-[#F8FAFC] hover:bg-black/[0.04] text-black/80 border-black/5'
                                                }`}
                                            >
                                                <div className="flex items-center gap-2.5">
                                                    <span className={`w-2 h-2 rounded-full ${isPhaseActive ? 'bg-emerald-400' : 'bg-black/20'}`} />
                                                    <span className="font-display font-medium text-[14px]">
                                                        {phaseItem.phase}
                                                    </span>
                                                </div>
                                                <span className={`font-mono font-bold text-[13px] ${isPhaseActive ? 'text-emerald-300' : 'text-blue-600'}`}>
                                                    {phaseItem.prob}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Card de Saída da Simulação */}
                            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-center justify-between">
                                <div>
                                    <span className="text-[11px] font-mono uppercase tracking-wider text-blue-700 block">
                                        {lang === 'pt' 
                                            ? `Forecast Ponderado da Fase (${monteCarloPhases[selectedMcPhase].mult}):` 
                                            : lang === 'en' 
                                                ? `Weighted Phase Forecast (${monteCarloPhases[selectedMcPhase].mult}):` 
                                                : `该阶段加权预测 (${monteCarloPhases[selectedMcPhase].mult}):`}
                                    </span>
                                    <p className="font-sans text-[13px] text-blue-900/80">
                                        {monteCarloPhases[selectedMcPhase].desc}
                                    </p>
                                </div>
                                <span className="font-display font-bold text-[22px] text-blue-900 shrink-0 ml-4">
                                    {monteCarloPhases[selectedMcPhase].forecast}
                                </span>
                            </div>
                        </div>

                        {/* Mídia Paga Histórica vs. Motor Próprio - Componente Visual Interativo */}
                        <div className="rounded-3xl bg-white p-6 md:p-8 border border-black/5 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between mb-4 pb-3 border-b border-black/5">
                                    <div className="flex items-center gap-2">
                                        <BarChart3 size={18} className="text-emerald-600" />
                                        <span className="font-sans text-[14px] font-semibold text-black/90">
                                            {t.mediaCompTitle}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => setModalSvg("/images/cases/lean-ops/comparativo-midia.svg")}
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/5 hover:bg-black/10 text-[12px] font-medium text-black/70 hover:text-black transition-all cursor-pointer"
                                    >
                                        <Maximize2 size={13} />
                                        <span>{lang === 'pt' ? 'Original' : lang === 'en' ? 'Original' : '原图'}</span>
                                    </button>
                                </div>
                                <p className="font-sans text-[13px] text-black/60 mb-6 leading-relaxed">
                                    {t.mediaCompDesc}
                                </p>

                                {/* Barras Visuais Comparativas */}
                                <div className="space-y-5 mb-6">
                                    {/* Métrica 1: Tempo */}
                                    <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-black/5">
                                        <div className="flex justify-between text-[12px] font-bold text-black/70 mb-2">
                                            <span>{t.timeTitle}</span>
                                            <span className="text-emerald-600">{t.timeHighlight}</span>
                                        </div>
                                        <div className="space-y-1.5 font-mono text-[11px]">
                                            <div className="flex items-center justify-between text-black/60">
                                                <span>{lang === 'pt' ? 'Mídia paga (15 a 30 leads/sem.)' : lang === 'en' ? 'Paid media (15 to 30 leads/week)' : '付费广告获客（每周15-30线索）'}</span>
                                                <span className="font-bold">{lang === 'pt' ? '23 a 47 semanas' : lang === 'en' ? '23 to 47 weeks' : '23 至 47 周'}</span>
                                            </div>
                                            <div className="w-full h-2.5 rounded-full bg-black/10 overflow-hidden">
                                                <div className="w-[100%] h-full bg-red-400/80 rounded-full" />
                                            </div>
                                            <div className="flex items-center justify-between text-black/90 font-bold pt-1">
                                                <span>{lang === 'pt' ? 'Motor Lean Ops (Batch ativo)' : lang === 'en' ? 'Lean Ops Engine (Active batch)' : 'Lean Ops引擎（批处理执行）'}</span>
                                                <span className="text-emerald-700">{lang === 'pt' ? '1 dia útil' : lang === 'en' ? '1 business day' : '1 个工作日'}</span>
                                            </div>
                                            <div className="w-full h-2.5 rounded-full bg-black/10 overflow-hidden">
                                                <div className="w-[5%] h-full bg-emerald-500 rounded-full" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Métrica 2: Custo Completo (Mídia + Setup & Mensalidades de SaaS) */}
                                    <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-black/5">
                                        <div className="flex justify-between text-[12px] font-bold text-black/70 mb-2">
                                            <span>{t.costTitle}</span>
                                            <span className="text-emerald-600">{t.costHighlight}</span>
                                        </div>
                                        <div className="space-y-1.5 font-mono text-[11px]">
                                            <div className="flex items-center justify-between text-black/60">
                                                <span>{t.mediaLabel}</span>
                                                <span className="font-bold">R$ 45,5k a R$ 180k</span>
                                            </div>
                                            <div className="text-[10px] text-black/40 -mt-0.5">
                                                {t.mediaSubDetail}
                                            </div>
                                            <div className="w-full h-2.5 rounded-full bg-black/10 overflow-hidden">
                                                <div className="w-[100%] h-full bg-amber-500/80 rounded-full" />
                                            </div>
                                            <div className="flex items-center justify-between text-black/90 font-bold pt-1">
                                                <span>{t.motorLabel}</span>
                                                <span className="text-emerald-700">{t.motorValue}</span>
                                            </div>
                                            <div className="w-full h-2.5 rounded-full bg-black/10 overflow-hidden">
                                                <div className="w-[2%] h-full bg-emerald-500 rounded-full" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-black/[0.02] border border-black/5 text-[12px] text-black/60 leading-relaxed">
                                {t.comparisonNote}
                            </div>
                        </div>

                    </div>

                </section>

                {/* ================= 6. ARQUITETURA SERVERLESS CUSTO ZERO ================= */}
                <section id="arquitetura-case" className="max-w-6xl mx-auto px-6 py-20 border-t border-black/10 relative z-10">
                    
                    <div className="max-w-3xl mb-16">
                        <span className="font-sans text-[12px] font-bold text-black/50 uppercase tracking-[0.14em] block mb-3">
                            {t.sec5Tag}
                        </span>
                        <h2 className="font-display font-medium text-[clamp(28px,3.8vw,46px)] leading-[1.15] tracking-tight">
                            {t.sec5Title}
                        </h2>
                    </div>

                    {/* Diagrama de Arquitetura com Nota Técnica de Fluxo */}
                    <div className="mb-16 rounded-3xl bg-white p-6 md:p-8 border border-black/5 shadow-sm">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 pb-4 border-b border-black/5 gap-3">
                            <div>
                                <span className="font-sans text-[13px] font-semibold text-black/80 block">
                                    {t.diagram3Title}
                                </span>
                                <span className="font-sans text-[12px] text-black/50">
                                    {t.diagram3Sub}
                                </span>
                            </div>
                            <button
                                onClick={() => setModalSvg("/images/cases/lean-ops/arquitetura.svg")}
                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-black/5 hover:bg-black/10 text-[13px] font-medium text-black/80 hover:text-black transition-all cursor-pointer self-start sm:self-auto"
                            >
                                <Maximize2 size={15} />
                                <span>{t.btnViewArchFull}</span>
                            </button>
                        </div>

                        <div className="w-full overflow-hidden flex items-center justify-center py-4 bg-[#F8FAFC] rounded-2xl">
                            <Image 
                                src="/images/cases/lean-ops/arquitetura.svg" 
                                alt="Arquitetura Técnica" 
                                width={900} 
                                height={420} 
                                className="w-full max-h-[380px] object-contain cursor-pointer"
                                onClick={() => setModalSvg("/images/cases/lean-ops/arquitetura.svg")}
                            />
                        </div>

                        {/* Nota de Engenharia Explicativa sobre o Fluxo Direcional */}
                        <div className="mt-4 p-4 rounded-xl bg-blue-50/60 border border-blue-100 flex items-start gap-3 text-[12px] text-blue-900 leading-relaxed">
                            <Info size={16} className="text-blue-700 shrink-0 mt-0.5" />
                            <span>
                                {t.archNote}
                            </span>
                        </div>
                    </div>

                    {/* Matriz de Custo Zero */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-16">
                        {stackItens.map((item, idx) => (
                            <div key={idx} className="p-5 rounded-2xl bg-white border border-black/5 shadow-xs flex flex-col justify-between">
                                <div>
                                    <span className="text-[11px] font-mono text-black/40 block mb-1">
                                        {item.layer}
                                    </span>
                                    <h4 className="font-display font-bold text-[16px] text-black mb-2">
                                        {item.tech}
                                    </h4>
                                    <p className="font-sans text-[12px] text-black/60 leading-snug">
                                        {item.reason}
                                    </p>
                                </div>
                                <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between">
                                    <span className="text-[11px] font-bold text-black/40 uppercase">{t.costLabel}</span>
                                    <span className="font-display font-bold text-[14px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                                        {item.cost}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* As 6 Regras de Engenharia */}
                    <div className="rounded-3xl bg-[#111111] text-white p-8 md:p-12 shadow-xl">
                        <span className="font-sans text-[11px] font-bold text-white/40 uppercase tracking-widest block mb-3">
                            {t.principlesHeader}
                        </span>
                        <h3 className="font-display font-semibold text-[26px] mb-8">
                            {t.principlesTitle}
                        </h3>

                        <div className="grid md:grid-cols-3 gap-8">
                            {regrasEngenharia.map((regra, rIdx) => (
                                <div key={rIdx} className="space-y-2">
                                    <span className="font-mono text-blue-400 text-[13px] font-bold">
                                        {regra.num} // {regra.title}
                                    </span>
                                    <p className="font-sans text-[14px] text-white/70 leading-relaxed">
                                        {regra.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </section>

                {/* ================= 7. PRÓXIMO PASSO EXECUTIVO (SANDBOX FUNCIONAL COM WHATSAPP) ================= */}
                <AgentTerminal
                    id="sandbox-case"
                    theme={theme}
                    hideChips={true}
                    customBadge={t.ctaBadge}
                    customTitle={
                        <>
                            {lang === 'pt' ? (
                                <>Menos abstração.<br />Mais tração.</>
                            ) : (
                                t.ctaTitle
                            )}
                        </>
                    }
                    customSubtitle={
                        <p className="font-sans font-normal text-[clamp(18px,2vw,24px)] leading-[1.5] text-[#111111]">
                            {t.ctaSubtitle}
                        </p>
                    }
                    customPlaceholder={t.ctaPlaceholder}
                    showWhatsAppButton={true}
                />

                {/* Footer Institucional Idêntico */}
                <Footer theme={theme} />

            </div>

            {/* Modal para Visualização em Tela Cheia de Diagramas Originais */}
            <AnimatePresence>
                {modalSvg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[999] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
                        onClick={() => setModalSvg(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.95 }}
                            className="relative max-w-5xl w-full bg-white rounded-3xl p-6 md:p-8 overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-center justify-between pb-4 border-b border-black/10 mb-4">
                                <span className="font-display font-semibold text-[16px] text-black">
                                    {lang === 'pt' ? 'Diagrama Técnico em Alta Resolução (Original)' : lang === 'en' ? 'High-Resolution Technical Diagram (Original)' : '高分辨率技术架构图（原图）'}
                                </span>
                                <button
                                    onClick={() => setModalSvg(null)}
                                    className="w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-black/70 hover:text-black transition-colors cursor-pointer"
                                >
                                    <X size={18} />
                                </button>
                            </div>
                            <div className="w-full max-h-[75vh] overflow-auto flex items-center justify-center p-2">
                                <Image
                                    src={modalSvg}
                                    alt="Diagrama Ampliado"
                                    width={1200}
                                    height={700}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </main>
    );
}
