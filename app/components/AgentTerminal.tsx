'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Paperclip, Download, MessageCircle, Mic, Sparkles } from 'lucide-react';
import * as pdfjsLib from 'pdfjs-dist';
import Tesseract from 'tesseract.js';

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

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

    const [status, setStatus] = useState<'idle' | 'analyzing' | 'done' | 'error'>('idle');
    const [aiResponse, setAiResponse] = useState<any>(null);
    const [isListening, setIsListening] = useState(false);
    const [isExtracting, setIsExtracting] = useState(false);
    const pdfRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDownloadPDF = async () => {
        if (!pdfRef.current) return;
        try {
            const html2pdf = (await import('html2pdf.js')).default;
            const opt = {
                margin: 0,
                filename: 'Dossie_Executivo_Carlos_Carreira.pdf',
                image: { type: 'jpeg' as const, quality: 0.98 },
                html2canvas: { scale: 2, useCORS: true, scrollY: 0 },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            } as any;
            html2pdf().set(opt).from(pdfRef.current).save();
        } catch (error) {
            console.error('Erro ao gerar PDF:', error);
            alert('Houve um erro ao gerar o PDF. Verifique o console.');
        }
    };

    const handleChipClick = (id: number, text: string) => {
        if (activeChipId === id) {
            setActiveChipId(null);
            setPlaceholder(defaultPlaceholder);
        } else {
            setActiveChipId(id);
            setPlaceholder(text);
        }
    };

    const handleRunSimulation = async () => {
        const promptValue = scopeText || (activeChipId !== null ? promptChips.find(c => c.id === activeChipId)?.text : '');
        if (!promptValue) return;

        // Filtro de sanitização para proteger o JSON do Backend
        const safePrompt = promptValue
            .replace(/[\n\r]+/g, ' ') // Substitui quebras de linha (Enters) por espaço
            .replace(/"/g, "'")       // Substitui aspas duplas por aspas simples
            .replace(/\\/g, "");      // Remove barras invertidas

        setStatus('analyzing');
        try {
            const res = await fetch('https://hook.us2.make.com/8kdfsy2g6f2ywcafcd7ez83hvjlujhxv', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt: safePrompt })
            });
            if (!res.ok) throw new Error('Limite atingido ou erro de API');

            const data = await res.json();
            setAiResponse(data);
            setStatus('done');
        } catch (error) {
            console.error('Simulation error:', error);
            setStatus('error');
        }
    };

    const handleVoiceInput = () => {
        if (scopeText.trim().length > 0) {
            const userConfirmed = window.confirm("Iniciar a gravação de voz irá substituir o texto atual. Deseja continuar?");
            if (!userConfirmed) return;
        }

        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        if (!SpeechRecognition) {
            alert("Desculpe, seu navegador não suporta reconhecimento de voz. Tente usar o Google Chrome.");
            return;
        }

        setScopeText(""); // Limpa o campo para iniciar a nova gravação

        const recognition = new SpeechRecognition();
        recognition.lang = 'pt-BR';
        recognition.interimResults = true; // Permite ver o texto enquanto fala

        recognition.onstart = () => setIsListening(true);

        recognition.onresult = (event: any) => {
            const transcript = Array.from(event.results)
                .map((result: any) => result[0].transcript)
                .join('');
            setScopeText(transcript); // Atualiza o textarea em tempo real
        };

        recognition.onerror = (event: any) => {
            console.error("Erro no reconhecimento de voz:", event.error);
            setIsListening(false);
        };

        recognition.onend = () => setIsListening(false);

        recognition.start();
    };

    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        setIsExtracting(true);

        try {
            if (file.type === 'text/plain') {
                const text = await file.text();
                setScopeText(text);
            }
            else if (file.type === 'application/pdf') {
                const arrayBuffer = await file.arrayBuffer();
                const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
                let fullText = '';
                for (let i = 1; i <= pdf.numPages; i++) {
                    const page = await pdf.getPage(i);
                    const textContent = await page.getTextContent();
                    const pageText = textContent.items.map((item: any) => item.str).join(' ');
                    fullText += pageText + ' \n';
                }
                setScopeText(fullText.trim());
            }
            else if (file.type.startsWith('image/')) {
                // OCR para Imagens
                const result = await Tesseract.recognize(file, 'por', {
                    logger: m => console.log(m)
                });
                setScopeText(result.data.text.trim());
            }
            else {
                alert('Formato não suportado. Envie PDF, TXT ou Imagem (PNG/JPG).');
            }
        } catch (error) {
            console.error('Erro na extração:', error);
            alert('Houve um erro ao ler o arquivo. Tente colar o texto manualmente.');
        } finally {
            setIsExtracting(false);
            if (fileInputRef.current) fileInputRef.current.value = '';
        }
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
            <AnimatePresence>
                {status === 'idle' && (
                    <motion.div
                        initial={{ opacity: 0, filter: 'blur(10px)', height: 0, overflow: 'hidden', marginBottom: 0 }}
                        animate={{ opacity: 1, filter: 'blur(0px)', height: 'auto', marginBottom: 40 }}
                        exit={{ opacity: 0, filter: 'blur(10px)', height: 0, overflow: 'hidden', marginBottom: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-wrap justify-center gap-[12px] max-w-[1000px] w-full max-md:flex-nowrap max-md:overflow-x-auto max-md:px-[6vw] max-md:justify-start max-md:scrollbar-hide max-md:pb-2" style={{ WebkitOverflowScrolling: 'touch' }}
                    >
                        {promptChips.map((chip) => (
                            <button
                                key={chip.id}
                                onClick={() => handleChipClick(chip.id, chip.text)}
                                style={
                                    activeChipId === chip.id
                                        ? { backgroundColor: theme?.text || '#111111', color: '#fff', borderColor: theme?.text || '#111111' }
                                        : { color: '#111111', borderColor: '#111111' }
                                }
                                className={`shrink-0 rounded-[100px] text-[16px] max-md:text-[13px] max-md:px-[20px] max-md:py-[10px] font-medium uppercase transition-all duration-200 border px-[24px] py-[12px] ${activeChipId !== chip.id ? 'bg-transparent hover:bg-black/5' : ''
                                    }`}
                            >
                                {chip.label}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Sandbox Terminal */}
            <motion.div layout className="w-full max-w-[900px] bg-white/40 backdrop-blur-[32px] border border-white/70 rounded-[24px] max-md:rounded-[16px] max-md:w-[calc(100%-12vw)] shadow-[0_12px_40px_rgba(0,0,0,0.06)] flex flex-col overflow-hidden relative z-10 min-h-[420px] max-md:min-h-[340px]">
                <AnimatePresence mode="wait">
                    {status === 'idle' && (
                        <motion.div
                            key="idle"
                            initial={{ opacity: 0, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, filter: 'blur(10px)' }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col flex-1"
                        >
                            <textarea
                                value={scopeText}
                                onChange={(e) => setScopeText(e.target.value)}
                                placeholder={placeholder}
                                className="w-full flex-1 min-h-[240px] max-md:min-h-[180px] p-[32px] max-md:p-[24px] border-none outline-none resize-none font-sans text-[18px] max-md:text-[16px] leading-[1.5] text-[#111111] bg-transparent placeholder:text-[#555555] placeholder:opacity-90"
                            />

                            <div className="flex justify-between items-center p-[16px_32px] max-md:p-[16px_24px] bg-white/25 border-t border-white/40">
                                <div className="flex items-center gap-6">
                                    <input
                                        type="file"
                                        accept=".pdf,.txt,image/png,image/jpeg,image/jpg"
                                        ref={fileInputRef}
                                        onChange={handleFileUpload}
                                        className="hidden"
                                    />
                                    <button
                                        onClick={() => fileInputRef.current?.click()}
                                        type="button"
                                        disabled={isExtracting}
                                        className="bg-transparent border-none text-[#666666] hover:text-[#111111] text-[15px] font-semibold cursor-pointer flex items-center gap-[8px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <Paperclip size={18} />
                                        <span>{isExtracting ? 'Lendo Arquivo...' : 'Anexar (PDF/Img/TXT)'}</span>
                                    </button>

                                    <button
                                        onClick={handleVoiceInput}
                                        type="button"
                                        disabled={isExtracting}
                                        className={`bg-transparent border-none text-[15px] font-semibold flex items-center gap-[8px] transition-all disabled:opacity-50 disabled:cursor-not-allowed ${isListening
                                                ? 'text-red-500 animate-pulse'
                                                : isExtracting
                                                    ? 'text-[#666666]'
                                                    : 'text-[#666666] hover:text-[#111111] cursor-pointer'
                                            }`}
                                    >
                                        <Mic size={18} />
                                        <span>{isListening ? 'Gravando...' : 'Áudio'}</span>
                                    </button>
                                </div>

                                <button
                                    onClick={handleRunSimulation}
                                    disabled={(!scopeText && activeChipId === null) || isExtracting}
                                    style={(scopeText || activeChipId !== null) ? { backgroundColor: theme?.text, color: '#fff', borderColor: 'transparent' } : {}}
                                    className={`bg-[#111111] text-white px-[32px] py-[14px] rounded-[100px] text-[15px] font-medium transition-all flex items-center gap-[8px] ${(!scopeText && activeChipId === null) || isExtracting
                                            ? 'opacity-50 cursor-not-allowed'
                                            : 'hover:opacity-85 hover:scale-[1.02] cursor-pointer'
                                        }`}
                                >
                                    <Sparkles size={16} />
                                    <span>Iniciar AI Profiler</span>
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {status === 'analyzing' && (
                        <motion.div
                            key="analyzing"
                            initial={{ opacity: 0, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, filter: 'blur(10px)' }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col flex-1 items-center justify-center p-[64px] max-md:p-[32px] text-center"
                        >
                            <div className="relative w-24 h-24 mb-[24px] flex items-center justify-center">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 opacity-20 text-[#111111]"
                                >
                                    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M45.7 70.3C52.9 50.1 71.8 36.4 93.3 34.3C114.7 32.2 135.5 42 148.4 59.4C161.3 76.8 163.6 99.3 154.5 118.8C145.4 138.2 126.3 151.4 104.5 153C82.8 154.6 62.1 144.3 49.7 126.6C37.3 109 35.5 86 45.7 70.3Z" fill="currentColor" />
                                    </svg>
                                </motion.div>
                                <motion.div
                                    animate={{ rotate: -360, scale: [1, 1.1, 1] }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute inset-2 opacity-30 text-[#111111]"
                                >
                                    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M151.5 61.2C136.5 43.8 112 36.3 90.1 41.5C68.1 46.7 51 63.8 45 85.9C39 108 45.2 131.7 61 148.1C76.8 164.5 100.8 171 123.6 164.9C146.4 158.8 164.6 141.2 171.1 118.8C177.6 96.4 170.1 72.3 151.5 61.2Z" fill="currentColor" />
                                    </svg>
                                </motion.div>
                                <Sparkles size={32} className="text-[#111111] animate-pulse relative z-10" />
                            </div>
                            <h3 className="font-display font-medium text-[24px] text-[#111111] mb-[12px]">
                                AI Profiler em Ação
                            </h3>
                            <p className="font-sans text-[15px] text-[#666666] max-w-[360px] mx-auto leading-relaxed">
                                Avaliando o seu desafio e cruzando com o meu histórico profissional. Só um instante...
                            </p>
                        </motion.div>
                    )}

                    {status === 'done' && aiResponse && (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, filter: 'blur(10px)' }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col flex-1 p-[40px] max-md:p-[24px]"
                        >
                            <p className="font-sans text-[16px] text-[#111111] mb-[24px] leading-relaxed">
                                {aiResponse.analise_fit}
                            </p>

                            <div className="mb-[24px]">
                                <h4 className="font-sans font-bold text-[14px] text-[#111111] uppercase tracking-wider mb-[12px]">
                                    Destaques Alinhados:
                                </h4>
                                <ul className="list-disc pl-5 font-sans text-[15px] text-[#111111] leading-relaxed space-y-2">
                                    {aiResponse.cases_relacionados?.map((item: string, idx: number) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="border-l-2 border-[#111111]/20 pl-4 py-1 mb-[40px]">
                                <p className="font-sans italic text-[15px] text-[#666666] leading-relaxed">
                                    {aiResponse.mensagem_conclusao}
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                                <button
                                    onClick={handleDownloadPDF}
                                    className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-transparent border border-[#111111]/20 text-[#111111] hover:bg-black/5 rounded-[100px] font-sans text-[14px] font-bold uppercase tracking-wider transition-colors"
                                >
                                    <Download size={18} />
                                    <span>BAIXAR PDF</span>
                                </button>
                                <a
                                    href={`https://wa.me/5511994787501?text=${encodeURIComponent("Olá! Acabei de usar a sua Sandbox (AI Profiler) e vi bastante aderência com uma demanda que temos aqui. Gostaria de conversar para entendermos um possível avanço.")}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{ backgroundColor: theme?.text || '#111111' }}
                                    className="flex-1 flex items-center justify-center gap-2 px-6 py-4 text-white rounded-[100px] font-sans text-[14px] font-bold uppercase tracking-wider hover:scale-[1.02] transition-transform shadow-md"
                                >
                                    <MessageCircle size={18} />
                                    <span>CONTINUAR NO WHATSAPP</span>
                                </a>
                            </div>
                        </motion.div>
                    )}

                    {status === 'error' && (
                        <motion.div
                            key="error"
                            initial={{ opacity: 0, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, filter: 'blur(10px)' }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col flex-1 p-[40px] max-md:p-[24px] text-center items-center justify-center"
                        >
                            <h3 className="font-display font-medium text-[24px] text-[#111111] mb-[16px]">
                                Limite de Lean Ops Atingido
                            </h3>
                            <p className="font-sans text-[16px] text-[#666666] mb-[32px] leading-relaxed max-w-[480px]">
                                Uops! Devido ao grande volume de acessos, o limite de inteligência artificial atingiu o teto. Clique abaixo e me mande o seu desafio no WhatsApp para conversarmos pessoalmente!
                            </p>
                            <a
                                href={`https://wa.me/5511994787501?text=${encodeURIComponent("Olá! Acabei de usar a sua Sandbox (AI Profiler) e encontrei um limite de acessos. Gostaria de conversar para avançarmos pessoalmente.")}`}
                                target="_blank"
                                rel="noreferrer"
                                style={{ backgroundColor: theme?.text || '#111111' }}
                                className="flex items-center justify-center gap-2 px-8 py-4 text-white rounded-[100px] font-sans text-[14px] font-bold uppercase tracking-wider hover:scale-[1.02] transition-transform shadow-md"
                            >
                                <MessageCircle size={18} />
                                <span>CONTINUAR NO WHATSAPP</span>
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* O Template Fantasma para o PDF (O Currículo Completo) */}
            {aiResponse && (
                <div className="absolute top-0 left-0 h-0 w-0 overflow-hidden pointer-events-none">
                    {/* O Documento Real (Fotografado pelo plugin) */}
                    <div ref={pdfRef} className="w-[794px] p-14 box-border break-words" style={{ backgroundColor: '#ffffff', color: '#000000' }}>

                        {/* Cabeçalho */}
                        <h1 className="text-3xl font-bold uppercase">CARLOS FELIPE CARREIRA</h1>
                        <h2 className="text-lg mb-2" style={{ color: '#374151' }}>Estrategista de Negócios, GTM & Operações de Tecnologia</h2>
                        <p className="text-sm mb-4 pb-4 border-b" style={{ color: '#4b5563', borderColor: '#d1d5db' }}>
                            Jaguariúna, SP | (11) 9 9478-7501 | cf.carreira@gmail.com | linkedin.com/in/cfcarreira
                        </p>

                        {/* Miolo Dinâmico (IA) */}
                        <h3 className="font-bold text-lg mt-6 mb-2 uppercase tracking-wider">RESUMO PROFISSIONAL</h3>
                        <p className="mb-6 text-[14px] leading-relaxed text-justify">{aiResponse.analise_fit}</p>

                        <h3 className="font-bold mb-2">DESTAQUES E CASES ALINHADOS AO DESAFIO</h3>
                        <ul className="list-disc pl-5 mb-6 text-sm space-y-2">
                            {aiResponse.cases_relacionados.map((item: string, idx: number) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>

                        {/* Base Estática (Formação e Skills) */}
                        <h3 className="font-bold mb-2 text-base">FORMAÇÃO ACADÊMICA</h3>
                        <ul className="list-disc pl-5 mb-6 text-[13px] space-y-1">
                            <li>
                                <strong>MBA em Tecnologia para Negócios: Inteligência Artificial, Data Science e Big Data</strong> – PUCRS <span style={{ color: '#6b7280' }}>| Conclusão: 2021.</span>
                            </li>
                            <li>
                                <strong>MBA em Transformação Digital e Futuro dos Negócios</strong> – PUCRS <span style={{ color: '#6b7280' }}>| Conclusão: 2021.</span>
                            </li>
                            <li>
                                <strong>Especialização em Gerenciamento de Projetos (Metodologia PMBOK)</strong> – Centro Universitário SENAC São Paulo <span style={{ color: '#6b7280' }}>| Conclusão: 2009.</span>
                            </li>
                            <li>
                                <strong>Pós-Graduação em Propaganda e Marketing</strong> – Universidade São Judas Tadeu <span style={{ color: '#6b7280' }}>| Conclusão: 2009.</span>
                            </li>
                            <li>
                                <strong>Graduação em Design de Mídia Digital</strong> – Impacta Tecnologia <span style={{ color: '#6b7280' }}>| Conclusão: 2006.</span>
                            </li>
                        </ul>

                        <h3 className="font-bold mb-2 text-base">COMPETÊNCIAS & IDIOMAS</h3>
                        <ul className="list-disc pl-5 mb-6 pb-4 border-b text-[13px] space-y-1" style={{ borderColor: '#d1d5db' }}>
                            <li>
                                <strong>Hard Skills & Ferramentas:</strong> Automação Cognitiva, BI (Power BI), Lean-Agile, CRM (HubSpot/RD), Estratégia GTM e Make.com.
                            </li>
                            <li>
                                <strong>Idiomas:</strong> Inglês (Fluente / Proficiência Profissional).
                            </li>
                        </ul>

                        {/* Rodapé Dinâmico (IA) */}
                        <p className="text-sm italic" style={{ color: '#4b5563' }}>{aiResponse.mensagem_conclusao}</p>
                    </div>
                </div>
            )}

        </section>
    );
}
