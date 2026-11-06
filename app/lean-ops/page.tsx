'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
    Sparkles, 
    ArrowUpRight, 
    CheckCircle2, 
    Layers, 
    Cpu, 
    TrendingUp, 
    Database, 
    Maximize2, 
    X, 
    ShieldCheck, 
    ChevronRight,
    MessageSquare,
    Zap,
    Target
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const theme = { 
    bg: "#F5F3ED", 
    text: "#111111", 
    shape1: "/shapes/shape-cyan.svg", 
    shape2: "/shapes/shape-orange.svg" 
};

const kpis = [
    { value: "R$ 0", label: "Custo mensal de ferramentas", sub: "Arquitetura serverless e camadas gratuitas gerenciadas" },
    { value: "milhares → ~700", label: "De itens brutos a leads aptos", sub: "Tratamento, sanitização e anamnese por lead" },
    { value: "~12 h", label: "Até as primeiras oportunidades", sub: "Geração de tração com histórico e notas no mesmo dia" },
    { value: "> R$ 100 mil", label: "Potencial ponderado no funil", sub: "Forecast via simulação probabilística de Monte Carlo" },
    { value: "R$ 0", label: "Custo de mídia por lead qualificado", sub: "Redução de R$ 25 a R$ 150 (histórico pago) para zero" },
];

const cicloEtapas = [
    {
        id: 1,
        step: "01",
        name: "Captar",
        sub: "/captacao-escritorios",
        desc: "Assistente autônomo navega em fontes e registros públicos, valida se a empresa é ativa e audita dados sem disparar abordagens precipitadas.",
        rules: ["Varredura em sites e diretórios abertos", "Apenas dados de contato públicos e verificáveis", "Pausa e consulta humana em caso de inconsistência"],
        output: "Lista MESTRE com milhares de registros brutos"
    },
    {
        id: 2,
        step: "02",
        name: "Higienizar",
        sub: "/higienizar-base-prospeccao",
        desc: "Normalização estrutural que elimina duplicidades, agrupa filiais de redes corporativas em um único decisor e redige o gancho de abordagem.",
        rules: ["Filtro de integridade de CNPJ/nome fantasia", "Priorização ponderada por perfil e porte", "Redação do primeiro gancho em 2 parágrafos"],
        output: "Dataset higienizado com contrato de 32 colunas"
    },
    {
        id: 3,
        step: "03",
        name: "Carregar",
        sub: "/carga-leads",
        desc: "Ingestão idempotente no banco relacional Supabase com validação prévia de colunas obrigatórias e snapshot de backup antes de qualquer mutação.",
        rules: ["Validação estrita de schema de dados", "Backup automatizado com validação de hash", "Carga incremental idempotente (nunca duplica)"],
        output: "Leads inseridos na fila 'Aguardando Contato'"
    },
    {
        id: 4,
        step: "04",
        name: "Trabalhar",
        sub: "Cockpit Kanban com IA Sob Demanda",
        desc: "Esteira de 9 fases onde o operador humano tem suporte de IA contextualizada, pronta para sugerir réplicas e respeitar o tom de voz da marca.",
        rules: ["Histórico contextual das últimas 20 mensagens", "Smart Console para réplicas de objeções", "Sugestão inteligente do próximo passo no pipeline"],
        output: "Negócios avançando de forma qualificada no funil"
    },
    {
        id: 5,
        step: "05",
        name: "Medir",
        sub: "Simulador de Monte Carlo & BI",
        desc: "Algoritmo estatístico que roda 10.000 iterações estocásticas para calcular o forecast ponderado e reordenar a prioridade visual dos cartões.",
        rules: ["Matriz de discovery (interlocutor, demanda, ticket)", "Probabilidade dinâmica calculada por lead", "Filtros interativos direto nos KPIs do cockpit"],
        output: "Forecast preditivo e gestão de atenção executiva"
    }
];

const camadasProntuario = [
    {
        id: "anamnese",
        title: "Anamnese",
        desc: "Mapeamento rigoroso do ecossistema do lead (projetos executados, prêmios, mini bio e canais oficiais).",
        honestyRule: "Só o que é publicamente auditável com URL da fonte. Se não houver registro, o campo permanece vazio."
    },
    {
        id: "diagnostico",
        title: "Diagnóstico",
        desc: "Cruzamento dos pontos fortes do escritório com eventuais gargalos de fornecimento ou acabamento.",
        honestyRule: "Pontos de atenção só com evidência clara; caso contrário, é marcado como 'Sem informação verificada'."
    },
    {
        id: "hipoteses",
        title: "Hipóteses",
        desc: "Formulação de teses técnicas para o operador validar durante a conversa (tipo de marcenaria, demandas de obra, prazos).",
        honestyRule: "Escritas explicitamente no formato de hipótese, ligadas a um fato concreto, jamais como verdade presumida."
    },
    {
        id: "indicacao",
        title: "Indicação de Portfólio",
        desc: "Recomendação cirúrgica de até 3 equipamentos do catálogo que atendem exatamente ao padrão dos projetos do cliente.",
        honestyRule: "Apenas se houver aderência arquitetônica demonstrada. Sem dados, emite 'Sem dados suficientes para proposta'."
    },
    {
        id: "argumento",
        title: "Argumento Comercial",
        desc: "Identificação da alavanca de valor com maior apelo para aquele perfil (ex: flexibilidade de nicho, ART, INDICA).",
        honestyRule: "Selecionado estritamente a partir da matriz comercial aprovada da diretoria, sem improvisos da IA."
    },
    {
        id: "prioridade",
        title: "Score & Prioridade",
        desc: "Classificação em Alta, Média-alta ou Média, baseada em aderência de ticket e capacidade de especificação.",
        honestyRule: "Critérios matemáticos e explicáveis no prontuário, sem pontuações 'caixa-preta'."
    },
    {
        id: "mensagem",
        title: "Primeira Mensagem",
        desc: "Texto de abertura em dois parágrafos: conexão genuína com uma obra real do lead + introdução de autoridade da marca.",
        honestyRule: "Transparência total sobre a origem da pesquisa, banindo elogios vazios ou clichês corporativos."
    }
];

const tabelaComparativa = [
    { aspecto: "Conhecimento do Portfólio", generica: "Alucina especificações, erra medidas milimétricas e prazos", motor: "Base de 28 blocos estritos: só afirma o que está parametrizado" },
    { aspecto: "Memória Contextual", generica: "Isolada, esquece interações passadas ou histórico de objeções", motor: "Lê últimas 20 mensagens, prontuário e notas de campo do operador" },
    { aspecto: "Tom e Cultura de Marca", generica: "Cada operador obtém um tom diferente e genérico", motor: "Uma só persona unificada: o time soa como unidade de elite" },
    { aspecto: "Veracidade dos Fatos", generica: "Cita clientes, projetos ou dados sem conferência", motor: "Regra anti-alucinação: todo dado externo é auditado contra a fonte" },
    { aspecto: "Controle Orçamentário", generica: "Consumo descontrolado de tokens de APIs pagas", motor: "Acionamento apenas sob demanda do operador com rotação de 4 modelos gratuitos" }
];

const tabelaMidia = [
    { parametro: "Tempo para ~700 Leads", midia: "23 a 47 semanas (média de 15 a 30 leads/semana)", motor: "1 dia útil (processamento em batch das listas qualificadas)" },
    { parametro: "Custo de Aquisição", midia: "R$ 17.500 a R$ 105.000 em budget de mídia", motor: "R$ 0 em mídia e R$ 0 em ferramentas SaaS" },
    { parametro: "Critério de Entrada", midia: "Qualquer usuário que clicou no anúncio pago", motor: "Somente leads que merecem o tempo do operador sênior" },
    { parametro: "Potencial de Fechamento", midia: "Ticket médio padrão de inbound avulso", motor: "Projetos de alto padrão com ticket até 4x a 5x superior" },
    { parametro: "Nível de Contexto", midia: "Formulário raso (Nome, e-mail e telefone)", motor: "Dossiê completo com prontuário clínico e abordagem pronta" }
];

const stackItens = [
    { layer: "Interface Front-end", tech: "HTML5, CSS moderno e Vanilla JS modular", cost: "R$ 0", reason: "Zero overhead de build, carregamento instantâneo em hospedagem existente" },
    { layer: "Banco de Dados & Auth", tech: "Supabase (PostgreSQL com RLS + Realtime)", cost: "R$ 0", reason: "Camada gratuita com segurança granular por usuário e replicação em tempo real" },
    { layer: "Inteligência Artificial", tech: "Google Gemini (Edge Functions Deno/TS)", cost: "R$ 0", reason: "Fallback automático entre 4 modelos gratuitos e prompts calibrados" },
    { layer: "Automações & Pipelines", tech: "Python, scripts de batch e Chrome Headless", cost: "R$ 0", reason: "Validação rigorosa por hash, sanitização de dados e idempotência" },
    { layer: "Versionamento & DevOps", tech: "GitHub privado com SemVer e 14 releases", cost: "R$ 0", reason: "Rastreabilidade de cada evolução com documentação técnica padronizada" }
];

export default function LeanOpsPage() {
    const [selectedEtapa, setSelectedEtapa] = useState(0);
    const [selectedCamada, setSelectedCamada] = useState(0);
    const [modalSvg, setModalSvg] = useState<string | null>(null);

    return (
        <main className="min-h-screen relative bg-cosmos-base overflow-x-hidden selection:bg-black selection:text-white">
            
            {/* Header Global */}
            <Navbar />

            {/* ================= 1. HERO SECTION (Dark Editorial) ================= */}
            <section className="relative w-full min-h-[92vh] bg-[#0b0b0b] text-white flex flex-col justify-center items-center px-6 pt-32 pb-20 overflow-hidden">
                
                {/* Background Video com Máscara Estilizada */}
                <div className="absolute inset-0 -z-10 bg-black overflow-hidden pointer-events-none">
                    <video
                        src="/footages/lean-ops-1080p-202608242219.webm"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-35 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0b]/60 via-[#0b0b0b]/80 to-[#0b0b0b]" />
                </div>

                {/* Conteúdo Central do Hero */}
                <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[12px] font-sans font-semibold uppercase tracking-[0.12em] text-[#E0F2FE] mb-8"
                    >
                        <Zap size={13} className="text-[#38BDF8]" />
                        <span>Case Study · LeanOps · RevOps · MarTech</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="font-display font-medium text-[clamp(36px,6vw,76px)] leading-[1.08] tracking-[-0.03em] mb-6 max-w-4xl"
                    >
                        Do SaaS caro a um cockpit comercial com IA, <br className="max-md:hidden" />
                        <span className="font-light italic text-white/90">a custo zero.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="font-sans text-[clamp(16px,1.8vw,20px)] leading-[1.6] text-white/80 max-w-3xl mb-12"
                    >
                        Como substituí a assinatura de um CRM por um motor próprio que capta, qualifica, 
                        faz a anamnese clínica de cada lead, conversa no tom da marca e prevê receita — gerando oportunidades em menos de 12 horas.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="flex flex-wrap items-center justify-center gap-4"
                    >
                        <a 
                            href="#ciclo"
                            className="px-8 py-3.5 rounded-full bg-white text-black font-sans font-medium text-[15px] hover:bg-neutral-200 transition-all flex items-center gap-2 shadow-lg"
                        >
                            <span>Ver Arquitetura do Motor</span>
                            <ChevronRight size={16} />
                        </a>
                        <a 
                            href="#diagnostico"
                            className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-sans font-medium text-[15px] transition-all"
                        >
                            Ler a Tese do Projeto
                        </a>
                    </motion.div>

                </div>

                {/* Grid Flutuante de KPIs Rápidos */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative z-10 w-full max-w-6xl mt-20 grid grid-cols-2 md:grid-cols-5 gap-3 max-md:gap-2 px-2"
                >
                    {kpis.map((kpi, idx) => (
                        <div 
                            key={idx}
                            className={`p-5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md flex flex-col justify-between transition-all hover:bg-white/[0.08] ${idx === 4 ? 'col-span-2 md:col-span-1' : ''}`}
                        >
                            <span className="font-display font-bold text-[clamp(24px,2.2vw,32px)] text-white tracking-tight leading-none mb-2">
                                {kpi.value}
                            </span>
                            <div>
                                <p className="font-sans text-[13px] font-semibold text-white/90 leading-tight mb-1">
                                    {kpi.label}
                                </p>
                                <p className="font-sans text-[11px] text-white/50 leading-snug">
                                    {kpi.sub}
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>

            </section>

            {/* ================= CORPO EDITORIAL (Light Section: #F5F3ED) ================= */}
            <div className="light-section w-full bg-[#F5F3ED] text-[#111111] transition-colors duration-500 relative">
                
                {/* Elementos Decorativos Orgânicos */}
                <div className="absolute top-20 right-[-100px] w-[400px] h-[400px] pointer-events-none opacity-20 mix-blend-multiply">
                    <Image src={theme.shape1} alt="Shape" width={400} height={400} className="w-full h-full object-contain" />
                </div>
                <div className="absolute top-[40%] left-[-150px] w-[500px] h-[500px] pointer-events-none opacity-15 mix-blend-multiply">
                    <Image src={theme.shape2} alt="Shape" width={500} height={500} className="w-full h-full object-contain" />
                </div>

                {/* ================= 2. DIAGNÓSTICO & A TESE ================= */}
                <section id="diagnostico" className="max-w-6xl mx-auto px-6 pt-28 pb-20 relative z-10">
                    
                    <div className="max-w-3xl mb-16">
                        <span className="font-sans text-[12px] font-bold text-black/50 uppercase tracking-[0.14em] block mb-3">
                            01 // O CENÁRIO E A PROVOCAÇÃO
                        </span>
                        <h2 className="font-display font-medium text-[clamp(30px,4.5vw,52px)] leading-[1.12] tracking-[-0.02em] text-[#111111]">
                            O CRM de prateleira cobra por assento e entrega uma IA que não conhece o seu produto.
                        </h2>
                    </div>

                    {/* Os 3 Gargalos Estruturais */}
                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        <div className="p-8 rounded-3xl bg-white/70 border border-black/5 backdrop-blur-sm shadow-sm flex flex-col justify-between">
                            <div>
                                <span className="font-sans text-[12px] font-bold text-[#E11D48] tracking-widest uppercase mb-4 block">Gargalo 01</span>
                                <h3 className="font-display font-semibold text-[22px] mb-3 leading-snug">Captação cara e lenta</h3>
                                <p className="font-sans text-[15px] text-black/70 leading-relaxed">
                                    Historicamente, cada lead qualificado custava à indústria entre <strong>R$ 25 e R$ 150 em anúncios de mídia</strong>, trazendo uma média limitada de apenas 15 a 30 contatos por semana.
                                </p>
                            </div>
                            <div className="mt-8 pt-4 border-t border-black/5 text-[12px] font-medium text-black/50">
                                Alto custo marginal por clique
                            </div>
                        </div>

                        <div className="p-8 rounded-3xl bg-white/70 border border-black/5 backdrop-blur-sm shadow-sm flex flex-col justify-between">
                            <div>
                                <span className="font-sans text-[12px] font-bold text-[#D97706] tracking-widest uppercase mb-4 block">Gargalo 02</span>
                                <h3 className="font-display font-semibold text-[22px] mb-3 leading-snug">Voz e tom inconsistentes</h3>
                                <p className="font-sans text-[15px] text-black/70 leading-relaxed">
                                    Cada operador falava de um jeito. Em vendas B2B de alto padrão (arquitetura e hotelaria), o tom é parte essencial do produto: a marca precisa soar com autoridade e coerência absoluta.
                                </p>
                            </div>
                            <div className="mt-8 pt-4 border-t border-black/5 text-[12px] font-medium text-black/50">
                                Ruído e atrito na primeira impressão
                            </div>
                        </div>

                        <div className="p-8 rounded-3xl bg-white/70 border border-black/5 backdrop-blur-sm shadow-sm flex flex-col justify-between">
                            <div>
                                <span className="font-sans text-[12px] font-bold text-[#2563EB] tracking-widest uppercase mb-4 block">Gargalo 03</span>
                                <h3 className="font-display font-semibold text-[22px] mb-3 leading-snug">Foco difuso da equipe</h3>
                                <p className="font-sans text-[15px] text-black/70 leading-relaxed">
                                    Com centenas de contatos em planilhas, a atenção do vendedor ia intuitivamente para quem respondeu por último, e não para a conta com real aderência e maior potencial de fechamento.
                                </p>
                            </div>
                            <div className="mt-8 pt-4 border-t border-black/5 text-[12px] font-medium text-black/50">
                                Perda de oportunidades de alto ticket
                            </div>
                        </div>
                    </div>

                    {/* A Tese Brutalista */}
                    <div className="p-10 md:p-14 rounded-3xl bg-[#111111] text-white relative overflow-hidden shadow-xl">
                        <div className="relative z-10 max-w-3xl">
                            <span className="font-sans text-[11px] font-bold text-white/50 uppercase tracking-[0.18em] block mb-4">
                                A TESE OPERACIONAL
                            </span>
                            <blockquote className="font-display text-[clamp(22px,3vw,36px)] leading-[1.25] tracking-tight mb-8">
                                “Em vez de assinar um SaaS inflado que faz tudo mais ou menos, construir um motor compacto que executa com perfeição cirúrgica o que realmente move o ponteiro.”
                            </blockquote>

                            <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-white/15">
                                <div>
                                    <h4 className="font-display font-semibold text-[17px] text-white mb-1">LeanOps</h4>
                                    <p className="font-sans text-[13px] text-white/70">Mínimo de peças móveis. Front estático sem build, banco gerenciado e custo zero de infraestrutura.</p>
                                </div>
                                <div>
                                    <h4 className="font-display font-semibold text-[17px] text-white mb-1">RevOps</h4>
                                    <p className="font-sans text-[13px] text-white/70">Processo unificado de ponta a ponta: do scraping inicial ao forecast preditivo com a mesma métrica.</p>
                                </div>
                                <div>
                                    <h4 className="font-display font-semibold text-[17px] text-white mb-1">MarTech</h4>
                                    <p className="font-sans text-[13px] text-white/70">IA calibrada com 28 blocos do produto, acionada sob demanda e com fonte estritamente verificável.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                {/* ================= 3. O CICLO EM 5 ETAPAS & FUNIL ================= */}
                <section id="ciclo" className="max-w-6xl mx-auto px-6 py-20 border-t border-black/10 relative z-10">
                    
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div className="max-w-2xl">
                            <span className="font-sans text-[12px] font-bold text-black/50 uppercase tracking-[0.14em] block mb-3">
                                02 // DA MASSA BRUTA AOS LEADS APTOS
                            </span>
                            <h2 className="font-display font-medium text-[clamp(28px,3.8vw,46px)] leading-[1.15] tracking-tight">
                                O ciclo contínuo do motor: captação, sanitização e forecast.
                            </h2>
                        </div>
                        <p className="font-sans text-[15px] text-black/70 max-w-md">
                            Milhares de registros brutos lapidados em etapas com validação de integridade até restarem cerca de 700 contas com prontuário clínico pronto.
                        </p>
                    </div>

                    {/* Diagrama Principal do Funil com Ação de Zoom */}
                    <div className="mb-16 rounded-3xl bg-white p-6 md:p-8 border border-black/5 shadow-sm">
                        <div className="flex items-center justify-between mb-4 pb-4 border-b border-black/5">
                            <span className="font-sans text-[13px] font-semibold text-black/70">
                                Diagrama 01: Funil de Captação e Tratamento de Dados
                            </span>
                            <button
                                onClick={() => setModalSvg("/images/cases/lean-ops/funil-captacao.svg")}
                                className="inline-flex items-center gap-1.5 text-[12px] font-medium text-black/60 hover:text-black transition-colors"
                            >
                                <Maximize2 size={14} />
                                <span>Expandir</span>
                            </button>
                        </div>
                        <div className="w-full overflow-hidden flex items-center justify-center py-4 bg-[#F8FAFC] rounded-2xl">
                            <Image 
                                src="/images/cases/lean-ops/funil-captacao.svg" 
                                alt="Funil de Captação e Tratamento" 
                                width={900} 
                                height={400} 
                                className="w-full max-h-[380px] object-contain cursor-pointer"
                                onClick={() => setModalSvg("/images/cases/lean-ops/funil-captacao.svg")}
                            />
                        </div>
                    </div>

                    {/* Tabs Interativas das 5 Etapas do Ciclo */}
                    <div className="rounded-3xl bg-white p-6 md:p-10 border border-black/5 shadow-sm">
                        
                        <div className="flex items-center justify-between mb-8 pb-4 border-b border-black/5">
                            <div>
                                <span className="font-sans text-[11px] font-bold text-black/40 uppercase tracking-widest block mb-1">
                                    INTERATIVIDADE // O MOTOR EM EXECUÇÃO
                                </span>
                                <h3 className="font-display font-semibold text-[22px]">As 5 etapas operacionais do ciclo</h3>
                            </div>
                            <button
                                onClick={() => setModalSvg("/images/cases/lean-ops/ciclo.svg")}
                                className="inline-flex items-center gap-1.5 text-[12px] font-medium text-black/60 hover:text-black transition-colors"
                            >
                                <Maximize2 size={14} />
                                <span>Ver Diagrama Completo</span>
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
                                        ETAPA {etapa.step}
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
                                            Regras de Validação & Integridade:
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
                                        Saída Garantida da Fase
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
                                        Pipeline automatizado sem atrito manual
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
                            03 // A ANAMNESE CLÍNICA DO LEAD
                        </span>
                        <h2 className="font-display font-medium text-[clamp(28px,3.8vw,46px)] leading-[1.15] tracking-tight">
                            A IA lê o lead como um médico lê um paciente: anamnese, diagnóstico e indicação.
                        </h2>
                        <p className="font-sans text-[16px] text-black/70 mt-4 leading-relaxed">
                            Em vez de uma IA que apenas redige e-mails plausíveis, ela cruza o portfólio real da fábrica com os dados públicos do escritório, produzindo um <strong>prontuário clínico</strong> que orienta a abordagem do operador.
                        </p>
                    </div>

                    {/* Exibição do Prontuário Real */}
                    <div className="mb-16 rounded-3xl bg-white p-6 md:p-8 border border-black/5 shadow-sm">
                        <div className="flex items-center justify-between mb-4 pb-4 border-b border-black/5">
                            <div>
                                <span className="font-sans text-[13px] font-semibold text-black/80 block">
                                    Diagrama 02: Prontuário Real de um Lead da Fila
                                </span>
                                <span className="font-sans text-[12px] text-black/50">
                                    Dados públicos de escritório de arquitetura; contatos omitidos por privacidade.
                                </span>
                            </div>
                            <button
                                onClick={() => setModalSvg("/images/cases/lean-ops/prontuario.svg")}
                                className="inline-flex items-center gap-1.5 text-[12px] font-medium text-black/60 hover:text-black transition-colors"
                            >
                                <Maximize2 size={14} />
                                <span>Ver Prontuário Completo</span>
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
                            DETALHAMENTO // AS 7 CAMADAS DO PRONTUÁRIO
                        </span>
                        <h3 className="font-display font-semibold text-[22px] mb-8">
                            A regra que mantém a inteligência honesta
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
                                            CAMADA {selectedCamada + 1} DE 7
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
                                                <span>Regra de Blindagem Anti-Alucinação</span>
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

                    {/* Tabela Comparativa: IA Genérica vs Este Motor */}
                    <div className="rounded-3xl bg-white p-6 md:p-10 border border-black/5 shadow-sm overflow-hidden">
                        <span className="font-sans text-[11px] font-bold text-black/40 uppercase tracking-widest block mb-2">
                            BENCHMARK TÉCNICO
                        </span>
                        <h3 className="font-display font-semibold text-[22px] mb-6">
                            IA genérica solta vs. Motor calibrado com lastro
                        </h3>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-black/10 text-[12px] font-sans font-bold uppercase tracking-wider text-black/50">
                                        <th className="py-4 px-4">Dimensão</th>
                                        <th className="py-4 px-4 text-red-600/80">IA Genérica / Chat de Terceiros</th>
                                        <th className="py-4 px-4 text-emerald-700">Este Motor Comercial</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5 font-sans text-[14px]">
                                    {tabelaComparativa.map((linha, idx) => (
                                        <tr key={idx} className="hover:bg-black/[0.015] transition-colors">
                                            <td className="py-4 px-4 font-semibold text-black/90">
                                                {linha.aspecto}
                                            </td>
                                            <td className="py-4 px-4 text-black/60 bg-red-50/20">
                                                {linha.generica}
                                            </td>
                                            <td className="py-4 px-4 text-black/90 font-medium bg-emerald-50/20">
                                                {linha.motor}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </section>

                {/* ================= 5. MONTE CARLO & COMPARATIVO DE MÍDIA ================= */}
                <section id="monte-carlo" className="max-w-6xl mx-auto px-6 py-20 border-t border-black/10 relative z-10">
                    
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div className="max-w-2xl">
                            <span className="font-sans text-[12px] font-bold text-black/50 uppercase tracking-[0.14em] block mb-3">
                                04 // FORECAST PREDITIVO & RETORNO DE INVESTIMENTO
                            </span>
                            <h2 className="font-display font-medium text-[clamp(28px,3.8vw,46px)] leading-[1.15] tracking-tight">
                                Gestão de atenção por Monte Carlo e o paralelo com mídia paga.
                            </h2>
                        </div>
                        <p className="font-sans text-[15px] text-black/70 max-w-md">
                            10.000 iterações matemáticas ponderadas por probabilidade de conversão para evitar desperdício de tempo com contas frias.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        
                        {/* Diagrama Monte Carlo */}
                        <div className="rounded-3xl bg-white p-6 md:p-8 border border-black/5 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between mb-4 pb-3 border-b border-black/5">
                                    <span className="font-sans text-[13px] font-semibold text-black/80">
                                        Simulação Estocástica de Monte Carlo
                                    </span>
                                    <button
                                        onClick={() => setModalSvg("/images/cases/lean-ops/funil-mmc.svg")}
                                        className="text-black/60 hover:text-black transition-colors"
                                    >
                                        <Maximize2 size={14} />
                                    </button>
                                </div>
                                <p className="font-sans text-[13px] text-black/60 mb-4">
                                    Distribuição de probabilidades a partir da matriz de discovery e prioridade calculada do lead.
                                </p>
                            </div>
                            <div className="w-full py-4 bg-[#F8FAFC] rounded-2xl flex items-center justify-center">
                                <Image 
                                    src="/images/cases/lean-ops/funil-mmc.svg" 
                                    alt="Simulação Monte Carlo" 
                                    width={450} 
                                    height={280} 
                                    className="max-h-[260px] object-contain cursor-pointer"
                                    onClick={() => setModalSvg("/images/cases/lean-ops/funil-mmc.svg")}
                                />
                            </div>
                        </div>

                        {/* Diagrama Comparativo Mídia Paga */}
                        <div className="rounded-3xl bg-white p-6 md:p-8 border border-black/5 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between mb-4 pb-3 border-b border-black/5">
                                    <span className="font-sans text-[13px] font-semibold text-black/80">
                                        Mídia Paga Histórica vs. Motor Próprio
                                    </span>
                                    <button
                                        onClick={() => setModalSvg("/images/cases/lean-ops/comparativo-midia.svg")}
                                        className="text-black/60 hover:text-black transition-colors"
                                    >
                                        <Maximize2 size={14} />
                                    </button>
                                </div>
                                <p className="font-sans text-[13px] text-black/60 mb-4">
                                    Comparativo de ordem de grandeza: semanas e verba de anúncios contra 1 dia útil de batch a custo zero.
                                </p>
                            </div>
                            <div className="w-full py-4 bg-[#F8FAFC] rounded-2xl flex items-center justify-center">
                                <Image 
                                    src="/images/cases/lean-ops/comparativo-midia.svg" 
                                    alt="Comparativo com Mídia Paga" 
                                    width={450} 
                                    height={280} 
                                    className="max-h-[260px] object-contain cursor-pointer"
                                    onClick={() => setModalSvg("/images/cases/lean-ops/comparativo-midia.svg")}
                                />
                            </div>
                        </div>

                    </div>

                    {/* Tabela de Impacto de Negócio */}
                    <div className="rounded-3xl bg-white p-6 md:p-10 border border-black/5 shadow-sm">
                        <span className="font-sans text-[11px] font-bold text-black/40 uppercase tracking-widest block mb-2">
                            PARALELO DE ORDENS DE GRANDEZA
                        </span>
                        <h3 className="font-display font-semibold text-[22px] mb-6">
                            Para colocar ~700 leads qualificados no pipeline
                        </h3>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-black/10 text-[12px] font-sans font-bold uppercase tracking-wider text-black/50">
                                        <th className="py-4 px-4">Métrica de Aquisição</th>
                                        <th className="py-4 px-4 text-black/60">Mídia Paga (Histórico Anúncios)</th>
                                        <th className="py-4 px-4 text-blue-700">Motor Lean Ops (Ativo)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5 font-sans text-[14px]">
                                    {tabelaMidia.map((m, idx) => (
                                        <tr key={idx} className="hover:bg-black/[0.015] transition-colors">
                                            <td className="py-4 px-4 font-semibold text-black/90">
                                                {m.parametro}
                                            </td>
                                            <td className="py-4 px-4 text-black/65">
                                                {m.midia}
                                            </td>
                                            <td className="py-4 px-4 text-black/90 font-medium bg-blue-50/20">
                                                {m.motor}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-6 p-4 rounded-2xl bg-black/[0.02] border border-black/5 text-[12px] text-black/60 leading-relaxed">
                            <strong>Ressalva analítica:</strong> Comparativo baseado em métricas históricas da operação e estimativas conservadoras de tração. O ganho comprovado está na velocidade, na consistência de abordagem e no custo marginal zero.
                        </div>
                    </div>

                </section>

                {/* ================= 6. ARQUITETURA SERVERLESS CUSTO ZERO ================= */}
                <section id="arquitetura-case" className="max-w-6xl mx-auto px-6 py-20 border-t border-black/10 relative z-10">
                    
                    <div className="max-w-3xl mb-16">
                        <span className="font-sans text-[12px] font-bold text-black/50 uppercase tracking-[0.14em] block mb-3">
                            05 // DECISÕES DE ENGENHARIA DE SOFTWARE
                        </span>
                        <h2 className="font-display font-medium text-[clamp(28px,3.8vw,46px)] leading-[1.15] tracking-tight">
                            Como a engenharia substituiu o custo por usuário da mensalidade de SaaS.
                        </h2>
                    </div>

                    {/* Diagrama de Arquitetura */}
                    <div className="mb-16 rounded-3xl bg-white p-6 md:p-8 border border-black/5 shadow-sm">
                        <div className="flex items-center justify-between mb-4 pb-4 border-b border-black/5">
                            <span className="font-sans text-[13px] font-semibold text-black/80">
                                Diagrama 03: Arquitetura Técnica do Cockpit Comercial
                            </span>
                            <button
                                onClick={() => setModalSvg("/images/cases/lean-ops/arquitetura.svg")}
                                className="inline-flex items-center gap-1.5 text-[12px] font-medium text-black/60 hover:text-black transition-colors"
                            >
                                <Maximize2 size={14} />
                                <span>Ver Arquitetura Completa</span>
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
                                    <span className="text-[11px] font-bold text-black/40 uppercase">Custo</span>
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
                            PRINCÍPIOS OPERACIONAIS
                        </span>
                        <h3 className="font-display font-semibold text-[26px] mb-8">
                            6 decisões que sustentam a operação e blindam contra falhas
                        </h3>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="space-y-2">
                                <span className="font-mono text-blue-400 text-[13px] font-bold">01 // Qualidade antes de volume</span>
                                <p className="font-sans text-[14px] text-white/70 leading-relaxed">O validador barra qualquer linha mal formatada; backups prévios e idempotência tornam erros baratos e fáceis de reverter.</p>
                            </div>
                            <div className="space-y-2">
                                <span className="font-mono text-blue-400 text-[13px] font-bold">02 // Fonte única de parametrização</span>
                                <p className="font-sans text-[14px] text-white/70 leading-relaxed">Marca, funil, perfis e pesos num só arquivo; mudar uma fase ou alterar uma regra não exige migrações complexas de banco.</p>
                            </div>
                            <div className="space-y-2">
                                <span className="font-mono text-blue-400 text-[13px] font-bold">03 // Conhecimento em dados</span>
                                <p className="font-sans text-[14px] text-white/70 leading-relaxed">Corrigir um argumento comercial ou nova especificação é atualizar um JSON estruturado, sem necessidade de recompile ou novo deploy.</p>
                            </div>
                            <div className="space-y-2">
                                <span className="font-mono text-blue-400 text-[13px] font-bold">04 // Honestidade como código</span>
                                <p className="font-sans text-[14px] text-white/70 leading-relaxed">A IA é configurada para se recusar a forçar uma proposta caso não existam dados suficientes, emitindo alertas explícitos de checagem.</p>
                            </div>
                            <div className="space-y-2">
                                <span className="font-mono text-blue-400 text-[13px] font-bold">05 // Pausar em vez de improvisar</span>
                                <p className="font-sans text-[14px] text-white/70 leading-relaxed">Assistentes de dados pausam a execução e consultam o operador diante de qualquer bloqueio, prevenindo contaminação da base com ruído.</p>
                            </div>
                            <div className="space-y-2">
                                <span className="font-mono text-blue-400 text-[13px] font-bold">06 // Cadência de entrega</span>
                                <p className="font-sans text-[14px] text-white/70 leading-relaxed">14 micro-versões documentadas em 2 dias, cada uma registrada no changelog para garantir rastreabilidade completa e zero regressões.</p>
                            </div>
                        </div>
                    </div>

                </section>

                {/* ================= 7. FECHAMENTO DE CONVERSÃO EXECUTIVO ================= */}
                <section className="max-w-6xl mx-auto px-6 pt-10 pb-28 relative z-10">
                    <div className="p-10 md:p-16 rounded-3xl bg-gradient-to-br from-[#18181B] via-[#09090B] to-[#18181B] text-white border border-white/10 shadow-2xl flex flex-col items-center text-center relative overflow-hidden">
                        
                        {/* Brilho sutil */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 blur-[100px] pointer-events-none" />

                        <div className="relative z-10 max-w-2xl">
                            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-white/80 text-[11px] font-sans font-bold tracking-widest uppercase mb-6 border border-white/10">
                                PRÓXIMO PASSO EXECUTIVO
                            </span>

                            <h2 className="font-display font-medium text-[clamp(32px,4.5vw,52px)] leading-[1.12] tracking-tight mb-6">
                                Menos abstração.<br />Mais tração.
                            </h2>

                            <p className="font-sans text-[clamp(15px,1.6vw,18px)] text-white/75 leading-relaxed mb-10">
                                Quer estruturar uma máquina enxuta de qualificação B2B e orquestração de IA personalizada para a sua realidade comercial?
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a
                                    href="/#sandbox"
                                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-sans font-semibold text-[15px] hover:bg-neutral-200 transition-all flex items-center justify-center gap-2.5 shadow-lg group"
                                >
                                    <Sparkles size={17} className="text-[#111111] group-hover:rotate-12 transition-transform" />
                                    <span>Diagnosticar Meu Desafio</span>
                                </a>

                                <a
                                    href="https://wa.me/5511994787501?text=Ol%C3%A1%2C%20Carlos!%20Li%20o%20case%20study%20de%20Lean%20Ops%20e%20gostaria%20de%20conversar%20sobre%20um%20desafio%20comercial."
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-sans font-semibold text-[15px] transition-all flex items-center justify-center gap-2"
                                >
                                    <MessageSquare size={17} />
                                    <span>Conversar no WhatsApp</span>
                                </a>
                            </div>

                            <p className="font-sans text-[12px] text-white/40 mt-6">
                                Resposta direta sem intermediários ou formulários burocráticos.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Footer Institucional Idêntico */}
                <Footer theme={theme} />

            </div>

            {/* Modal para Visualização em Tela Cheia de Diagramas */}
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
                                    Diagrama Técnico em Alta Resolução
                                </span>
                                <button
                                    onClick={() => setModalSvg(null)}
                                    className="w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-black/70 hover:text-black transition-colors"
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
