export type Language = 'pt' | 'en' | 'zh';

export const translations = {
    pt: {
        nav: {
            experimentos: "Experimentos",
            arquitetura: "Arquitetura",
            fundamentacao: "Fundamentação",
            sandbox: "Sandbox"
        },
        splash: {
            sub1: "O laboratório de IA aplicada e engenharia de receita.",
            sub2: "Menos abstração, mais tração."
        },
        hero: {
            slide1: {
                title: "AI Profiler",
                description: "Diagnóstico contextualizado cruzando o escopo do seu projeto com a minha experiência",
                btn: "Conhecer Trajetória"
            },
            slide2: {
                title: "Lean Ops",
                description: "Cockpit comercial com IA que capta, qualifica e prevê receita a custo zero.",
                btn: "Explorar Case Study"
            },
            slide3: {
                title: "AI SDR",
                description: "Vendas autônomas via WhatsApp a custo < 1% da receita gerada",
                btn: "EM BREVE"
            },
            slide4: {
                title: "Executive BI",
                description: "Atribuição real de ROI unificando mídia, receita e margem",
                btn: "EM BREVE"
            },
            slide5: {
                title: "High-Ticket Sales",
                description: "GTM de luxo com elevação de 33% no ticket médio em vendas 100% digitais",
                btn: "EM BREVE"
            }
        },
        filter: {
            tag: "PORTFÓLIO TÉCNICO // CREDENCIAIS & VALIDAÇÕES",
            title: "Domínio Técnico\n& Credenciais",
            all: "TODAS",
            aiAuto: "AI & AUTO",
            dataBi: "DATA & BI",
            midiaCrm: "MÍDIA & CRM",
            management: "MANAGEMENT",
            arsenal: [
                { id: 1, title: "Agents and Workflows", text: "Arquitetura de agentes autônomos e fluxos cognitivos, orquestração de tarefas complexas e chamadas de ferramentas e automação ponta a ponta sem atrito operacional.", tag: "OpenAI · Jun 2026" },
                { id: 2, title: "Model Context Protocol: Advanced Topics", text: "Integração de LLMs a fontes de dados locais e servidores MCP, conexão de contexto estruturado para sistemas multiagente e protocolos padronizados de comunicação entre modelos.", tag: "Anthropic · Jul 2026" },
                { id: 3, title: "AI Fluency: Framework & Foundations", text: "Fundamentos operacionais e governança de IA generativa, avaliação de riscos, mitigação de vieses e alinhamento ético e implementação estratégica de modelos de linguagem em negócios.", tag: "Anthropic · Jul 2026" },
                { id: 4, title: "Java: Consumo de APIs e Criação de Arquivos", text: "Integração de endpoints HTTP e manipulação de fluxos de dados, tratamento de requisições web e parsing de estruturas JSON e persistência e estruturação de arquivos em ambientes corporativos.", tag: "Alura · Jun 2025" },
                { id: 5, title: "Aplicações em Java", text: "Desenvolvimento e compilação de rotinas backend estruturadas, arquitetura sólida para consumo e processamento de regras e engenharia de software aplicada à automação de processos.", tag: "Alura · Jun 2025" },
                { id: 6, title: "Java: Listas e Coleções de Dados", text: "Estruturação e ordenação de conjuntos complexos de dados, otimização de performance com Collections, Lists e Maps e algoritmos eficientes para processamento de informações.", tag: "Alura · Jun 2025" },
                { id: 7, title: "Java: Aplicando a Orientação a Objetos", text: "Modelagem desacoplada com herança, polimorfismo e interfaces, aplicação de boas práticas de design de software e coesão e construção de regras de negócio modulares e sustentáveis.", tag: "Alura · Jun 2025" },
                { id: 8, title: "Aplicação e Gerenciamento de Tags via Google Tag Manager", text: "Orquestração e governança de tracking e telemetria web, implementação de data layers avançados para GA4 e Ads e padronização de mensuração e acionamento de eventos.", tag: "Alura · Ago 2025" },
                { id: 9, title: "Mídia Digital: Planejamento, Gestão e Resultados", text: "Estratégias multicanal de investimento em mídia de performance, modelagem de atribuição e otimização de custo por aquisição e alocação tática de budget orientada a retorno financeiro.", tag: "Senac SP · Jul 2009" },
                { id: 10, title: "Dinamize Mail: Certificação Completa", text: "Automação de réguas de relacionamento e ciclo de vida de CRM, segmentação comportamental e nutrição orientada a conversão e otimização de entregabilidade, taxas de abertura e engajamento.", tag: "Dinamize · Set 2025" },
                { id: 11, title: "Inovação Digital: Blogs Corporativos e Redes Sociais", text: "Estruturação de presença digital e canais de relacionamento, estratégia de engajamento corporativo e distribuição de marca e gestão de canais e governança de conteúdo técnico.", tag: "Senac SP · Jul 2011" },
                { id: 12, title: "Jornalismo Digital e Interatividade", text: "Arquitetura de informação e narrativa interativa para canais web, produção de conteúdo orientado a retenção e clareza de leitura e otimização de interfaces conversacionais e editoriais.", tag: "Senac SP · Ago 2011" },
                { id: 13, title: "Visual Merchandising Aplicado ao Varejo", text: "Arquitetura visual para direcionamento de atenção e conversão, hierarquia de produtos no ponto de contato e estímulo de compra e aplicação de princípios visuais para elevar percepção de valor.", tag: "Senac SP · Jun 2009" },
                { id: 14, title: "Microsoft Project 2010: Gestão Avançada", text: "Estruturação de cronogramas, dependências críticas e marcos, alocação de capacidades, nivelamento de recursos e escopo e controle preditivo de riscos e cumprimento rigoroso de SLAs.", tag: "Senac SP · Fev 2011" },
                { id: 15, title: "Plano de Negócios para Empreendedores Inovadores", text: "Modelagem financeira, viabilidade econômica e tração inicial, construção de propostas de valor e análise de unit economics e estruturação de canais de go-to-market e posicionamento.", tag: "Senac SP · Ago 2012" },
                { id: 16, title: "Técnicas de Negociação", text: "Condução de acordos complexos e alinhamento com stakeholders, foco em geração de valor mútuo e expansão de margens e superação tática de barreiras em mesas executivas.", tag: "Senac SP · Jun 2012" },
                { id: 17, title: "Comunicação Assertiva", text: "Clareza e síntese no alinhamento de decisões corporativas, condução de times multidisciplinares com transparência radical e redução de ruídos operacionais entre liderança e execução.", tag: "Senac SP · Mar 2012" },
                { id: 18, title: "Comunicação Social Direcionada ao Público", text: "Segmentação de discursos conforme o nível de senioridade, enquadramento de mensagens para tomadores de decisão C-Level e posicionamento institucional com foco em autoridade.", tag: "Senac SP · Fev 2011" },
                { id: 19, title: "Noções de Administração Pequena e Média Empresa", text: "Organização de fluxos de caixa, governança e rotinas operacionais, otimização de margens e eficiência em estruturas enxutas e planejamento estruturado para sustentabilidade e crescimento.", tag: "Senac SP · Jan 2012" }
            ]
        },
        about: {
            tag: "SOBRE O LABS // RIGOR TÉCNICO & EXECUÇÃO",
            title: "Arquitetura de dados, IA e modelos preditivos em produção. Da validação técnica direta à engenharia de processos que escalam receita com previsibilidade e governança.",
            baseTitle: "A Base por trás do Lab",
            baseDesc: "No laboratório, cada experimento nasce de uma tese sólida: como transformar modelos teóricos em ferramentas de valor real? Nossa fundamentação acadêmica sustenta a arquitetura técnica para converter conceitos complexos em produtos de mercado.",
            formations: [
                { id: 1, title: "MBA: AI, Data Science e Big Data", local: "PUCRS", period: "2023 - 2024", text: "Especialização corporativa com foco em modelagem de dados avançada, algoritmos preditivos de Machine Learning e arquitetura escalável de Big Data." },
                { id: 2, title: "MBA: Transformação Digital", local: "PUCRS", period: "2021 - 2022", text: "Visão estratégica focada em inovação disruptiva, adoção de metodologias ágeis e digitalização profunda de processos operacionais e modelos de negócio." },
                { id: 3, title: "Gerenciamento de Projetos (PMBoK)", local: "SENAC SP", period: "2018 - 2019", text: "Aprofundamento nas práticas e processos do guia PMBoK para planejamento de alto nível, controle de riscos e execução eficiente de projetos." },
                { id: 4, title: "Propaganda e Marketing", local: "USJT", period: "2014 - 2015", text: "Desenvolvimento técnico de estratégias de mercado, análise de comportamento do consumidor e estruturação de campanhas comerciais 360º." },
                { id: 5, title: "Tecnólogo: Design de Mídia Digital", local: "IMPACTA", period: "2008 - 2012", text: "Formação acadêmica multidisciplinar em design de interfaces, experiência do usuário (UX) e desenvolvimento web front-end de alta performance." }
            ]
        },
        terminal: {
            defaultBadge: "EXPERIMENT 05 // INTERACTIVE AGENT",
            defaultTitle: "Conecte seu Desafio à Minha Trajetória",
            defaultSubtitle: "Insira o escopo de um projeto, o descritivo de uma posição executiva ou pergunte sobre cases e marcas atendidas. O sistema cruza sua necessidade com meu histórico profissional em tempo real, gerando um diagnóstico contextualizado e uma visão sob medida da minha experiência para a sua demanda.",
            defaultPlaceholder: "Descreva o gargalo da sua operação, cole a descrição de uma vaga ou pergunte sobre cases e marcas atendidas...",
            attachText: "Anexar (PDF/Img/TXT)",
            audioText: "Áudio",
            runText: "Iniciar AI Profiler",
            btnDownload: "BAIXAR PDF",
            btnWhatsApp: "CONTINUAR NO WHATSAPP",
            readingFile: "Lendo Arquivo...",
            recording: "Gravando...",
            chips: [
                { id: 1, label: "CADEIRA EXECUTIVA", text: "Como sua experiência se aplica a uma posição de Head de Marketing Operations / RevOps?" },
                { id: 2, label: "MARCAS GLOBAIS", text: "Quais iniciativas você liderou para contas como Microsoft, Pfizer e J&J?" },
                { id: 3, label: "TURNAROUND DE RECEITA", text: "Como você triplicou o faturamento e elevou o ticket médio na Attimo?" },
                { id: 4, label: "EFICIÊNCIA LEAN", text: "Como você estruturou a operação de 15 pessoas para entregar como 50?" }
            ]
        },
        footer: {
            city: "Jaguariúna, SP, Brasil",
            credits: "PROJETO INSPIRADO NO GOOGLE LABS, CRIADO 100% COM ANTIGRAVITY IDE, GEMINI 3.1 PRO, NANO BANANA, OMNI FLASH E OUTRAS APIS EM 16 HORAS."
        },
        leanOps: {
            deck: {
                badge: "BRIEFING EXECUTIVO // C-LEVEL PITCH",
                skipToCase: "Pular para o Dossiê Técnico Completo",
                slideLabel: "SLIDE",
                ofLabel: "DE",
                prevBtn: "Lâmina anterior",
                nextBtn: "Próxima lâmina",
                slides: [
                    {
                        tag: "01 // DA POSTURA REATIVA AO HUNTING ATIVO",
                        title: "Esperar o lead de mídia chegar é queimar margem. O jogo muda com hunting proativo de alta propensão.",
                        subtitle: "Em vez de aguardar passivamente formulários de campanhas convencionais ('nome, e-mail e com sorte WhatsApp'), o motor busca ativamente empresas e interfaces que realmente movem o ponteiro comercial. A nível de cada conta, antecipa pontos fortes e fracos da negociação e aponta ao operador o produto ideal com base em evidências reais.",
                        kpis: [
                            { label: "Postura Comercial", val: "Hunting Ativo", desc: "Varredura proativa de decisores estratégicos" },
                            { label: "Inteligência Prévia", val: "Nível de Conta", desc: "Pontos fortes e fracos mapeados antes do contato" },
                            { label: "Aderência", val: "Produto Cirúrgico", desc: "Cruzamento com os 28 blocos do catálogo da indústria" }
                        ],
                        image: "/images/cases/lean-ops/cockpit/cockpit-kanban.jpg",
                        imageCaption: "Cockpit Kanban com esteira de 9 fases e priorização ponderada"
                    },
                    {
                        tag: "02 // HOMOGENEIDADE & ANAMNESE CLÍNICA",
                        title: "Padronização cirúrgica: transformar qualquer operador no consultor mais preparado do mercado.",
                        subtitle: "O operador não precisa adivinhar argumentos nem improvisar no escuro: ele recebe um prontuário clínico com diagnóstico, hipóteses e ganchos prontos no tom da marca. Uma triagem enriquecida com IA que municia a linha de frente para nunca queimar uma oportunidade de alto ticket.",
                        kpis: [
                            { label: "Anamnese Pré-Atendimento", val: "100% dos Leads", desc: "Contexto técnico completo antes de abrir o WhatsApp" },
                            { label: "Blindagem Institucional", val: "Zero Alucinação", desc: "Auditável na fonte, sem suposições ou clichês corporativos" },
                            { label: "Tom de Voz", val: "Padrão Diretoria", desc: "A sofisticação da alta gestão replicada em todo o time" }
                        ],
                        image: "/images/cases/lean-ops/cockpit/cockpit-prontuario.jpg",
                        imageCaption: "Prontuário com Scout IA: pontos fortes, fracos e sugestão técnica de produto"
                    },
                    {
                        tag: "03 // PRAGMATISMO ESTATÍSTICO & GESTÃO DE ATENÇÃO",
                        title: "Substituir a intuição por previsibilidade matemática com simulação estocástica de Monte Carlo.",
                        subtitle: "Vendedores intuitivos gastam horas perseguindo quem respondeu por último. O cockpit roda 10.000 iterações estocásticas na Matriz de Discovery para ponderar matematicamente a real probabilidade de fechamento, direcionando a energia do time exclusivamente para onde está o faturamento.",
                        kpis: [
                            { label: "Pipeline Ponderado", val: "> R$ 100 mil", desc: "Forecast probabilístico dinâmico calculado por conta" },
                            { label: "Simulação Estocástica", val: "10.000 Rodadas", desc: "Cálculo matemático de propensão de fechamento (Monte Carlo)" },
                            { label: "Direcionamento", val: "Atenção Cirúrgica", desc: "Alocação do tempo do operador sênior onde o dinheiro está" }
                        ],
                        image: "/images/cases/lean-ops/cockpit/cockpit-discovery.jpg",
                        imageCaption: "Matriz de Discovery e cálculo dinâmico de propensão de fechamento"
                    },
                    {
                        tag: "04 // QUANTITATIVO DE FUNIL & ROLLOUT EM 1 DIA",
                        title: "Rollout em 1 dia útil: uma base concisa e qualificada sem o custo ou a lentidão da mídia.",
                        subtitle: "A diferença brutal entre pagar caro por lead morno — onde o operador despreparado perde semanas para fechar um negócio mediano — e estruturar ~700 contas com prontuário em 1 dia útil. Uma economia de 23 a 47 semanas de mídia paga (R$ 17,5k a R$ 105k) e R$ 28k a R$ 75k em custos de software.",
                        kpis: [
                            { label: "Velocidade de Tração", val: "1 Dia Útil", desc: "vs. 23 a 47 semanas de mídia paga (99,6% mais rápido)" },
                            { label: "Base Qualificada", val: "~700 Contas", desc: "Triagem enriquecida para o operador nunca perder argumento" },
                            { label: "Primeiras Oportunidades", val: "< 12 Horas", desc: "Geração de tração com notas e histórico no mesmo dia" }
                        ],
                        image: "/images/cases/lean-ops/cockpit/cockpit-bi.jpg",
                        imageCaption: "Dashboard Executivo BI: acompanhamento temporal de receita e pipeline"
                    },
                    {
                        tag: "05 // O ARQUITETO DE RECEITA NO C-LEVEL",
                        title: "A intersecção rara entre liderança estratégica de GTM e engenharia de software em produção.",
                        subtitle: "O mercado separa quem desenha o slide de quem programa a ferramenta. O diferencial de um Revenue Engineer é articular a visão de negócios no conselho e codificar o motor que executa a estratégia — entregando 14 micro-releases documentadas em 48 horas com zero débito técnico.",
                        kpis: [
                            { label: "Para CEOs & Boards", val: "Margens Limpas", desc: "Expansão de receita com custos de software zerados e tração ágil" },
                            { label: "Para CROs & CMOs", val: "Alta Conversão", desc: "Linguagem homogênea, prontuários de negociação e autoridade" },
                            { label: "Para CTOs & Engenharia", val: "14 Releases / 48h", desc: "SemVer, governança, idempotência e código modular sem débitos" }
                        ],
                        image: "/images/cases/lean-ops/cockpit/cockpit-releases.jpg",
                        imageCaption: "Changelog integrado no cockpit: 14 versões documentadas em 2 dias"
                    },
                    {
                        tag: "06 // A PROVA DOS FATOS & PRÓXIMO PASSO",
                        title: "Resultados consistentes se sustentam em engenharia rigorosa. Veja a prova no detalhe.",
                        subtitle: "Abaixo está a prova material completa: contratos de 32 colunas, arquitetura serverless, simulação estocástica de Monte Carlo interativa e anatomia real dos prontuários. Explore o dossiê técnico detalhado ou inicie um diagnóstico preliminar para a sua operação.",
                        ctas: {
                            primary: "Explorar Dossiê Técnico Completo ↓",
                            whatsapp: "Falar com Carlos Felipe (WhatsApp)",
                            sandbox: "Testar no AI Profiler (Sandbox)"
                        },
                        image: "/images/cases/lean-ops/cockpit/cockpit-kanban.jpg",
                        imageCaption: "Cockpit Comercial completo em produção: da captação ao forecast preditivo"
                    }
                ]
            },
            heroTitle1: "Do SaaS caro a um cockpit comercial com IA,",
            heroTitle2: "a custo zero.",
            heroSubtitle: "Como substituí a assinatura de um CRM por um motor próprio que capta, qualifica, faz a anamnese clínica de cada lead, conversa no tom da marca e prevê receita — gerando oportunidades em menos de 12 horas.",
            btnViewArch: "Ver Arquitetura do Motor",
            btnReadThesis: "Ler a Tese do Projeto",
            kpiTools: "Custo mensal de ferramentas",
            kpiToolsSub: "Arquitetura serverless e camadas gratuitas gerenciadas",
            kpiLeads: "De itens brutos a leads aptos",
            kpiLeadsSub: "Tratamento, sanitização e anamnese por lead",
            kpiTime: "Até as primeiras oportunidades",
            kpiTimeSub: "Geração de tração com histórico e notas no mesmo dia",
            kpiForecast: "Potencial ponderado no funil",
            kpiForecastSub: "Forecast via simulação probabilística de Monte Carlo",
            kpiMedia: "Custo de mídia por lead qualificado",
            kpiMediaSub: "Redução de R$ 25 a R$ 150 (histórico pago) para zero",
            sec1Tag: "01 // O CENÁRIO E A PROVOCAÇÃO",
            sec1Title: "O CRM de prateleira cobra por assento e entrega uma IA que não conhece o seu produto.",
            bottleneckTag: "Gargalo",
            bottlenecks: [
                { tag: "Gargalo 01", title: "Captação cara e lenta", desc: "Historicamente, cada lead qualificado custava à indústria entre R$ 25 e R$ 150 em anúncios de mídia, trazendo uma média limitada de apenas 15 a 30 contatos por semana.", footer: "Alto custo marginal por clique" },
                { tag: "Gargalo 02", title: "Voz e tom inconsistentes", desc: "Cada operador falava de um jeito. Em vendas B2B de alto padrão (arquitetura e hotelaria), o tom é parte essencial do produto: a marca precisa soar com autoridade e coerência absoluta.", footer: "Ruído e atrito na primeira impressão" },
                { tag: "Gargalo 03", title: "Foco difuso da equipe", desc: "Com centenas de contatos em planilhas, a atenção do vendedor ia intuitivamente para quem respondeu por último, e não para a conta com real aderência e maior potencial de fechamento.", footer: "Perda de oportunidades de alto ticket" }
            ],
            thesisTag: "A TESE OPERACIONAL",
            thesisQuote: "“Em vez de assinar um SaaS inflado que faz tudo mais ou menos, construir um motor compacto que executa com perfeição cirúrgica o que realmente move o ponteiro.”",
            thesisPillars: [
                { name: "LeanOps", desc: "Mínimo de peças móveis. Front estático sem build, banco gerenciado e custo zero de infraestrutura." },
                { name: "RevOps", desc: "Processo unificado de ponta a ponta: do scraping inicial ao forecast preditivo com a mesma métrica." },
                { name: "MarTech", desc: "IA calibrada com 28 blocos do produto, acionada sob demanda e com fonte estritamente verificável." }
            ],
            sec2Tag: "02 // DA MASSA BRUTA AOS LEADS APTOS",
            sec2Title: "O ciclo contínuo do motor: captação, sanitização e forecast.",
            sec2Desc: "Milhares de registros brutos lapidados em etapas com validação de integridade até restarem cerca de 700 contas com prontuário clínico pronto.",
            diagram1Header: "DIAGRAMA 01 // ARQUITETURA DE FILTRAGEM",
            diagram1Title: "Funil de Captação e Tratamento em Camadas",
            btnExpand: "Expandir Imagem Original",
            layerOf: "CAMADA {0} DE 05",
            filterCriteria: "Critério de Filtragem:",
            actionExecuted: "Ação Operacional Executada:",
            funilLayers: [
                { id: "descoberta", level: "01", name: "Descoberta Bruta", volume: "Milhares de itens", badge: "Varredura Pública", criteria: "Mapas, diretórios setoriais e listas abertas de arquitetura, design e redes gastronômicas.", action: "Só o 1º lote de arquitetura avaliou mais de 1.100 empresas; o 2º lote ultrapassou 2.400 resultados brutos." },
                { id: "tratamento", level: "02", name: "Higienização & Validação", volume: "Empresas reais com site ativo", badge: "Filtro de Ruído", criteria: "Eliminação de agências, perfis sociais avulsos, CNPJs baixados e marcas com atividades encerradas.", action: "Repetidos fundidos, unidades de redes consolidadas em um decisor e 55 contatos inativos descartados." },
                { id: "enriquecimento", level: "03", name: "Contatos Auditados", volume: "Canais oficiais verificados", badge: "Conferência na Fonte", criteria: "Apenas contatos públicos (WhatsApp, e-mail institucional e telefone) com a URL de origem registrada.", action: "Sanitização automática contra regras de conformidade e gravação de metadados em 32 colunas padronizadas." },
                { id: "prontuario", level: "04", name: "Anamnese & Prontuário", volume: "Análise clínica por IA", badge: "Qualificação Profunda", criteria: "Cruzamento do portfólio real do cliente com os 28 blocos de produtos da fábrica para gerar argumentos exclusivos.", action: "Diagnóstico de pontos fortes, hipóteses de obra, até 3 produtos indicados e gancho de 1ª mensagem customizado." },
                { id: "resultado", level: "05", name: "Leads Aptos para Abordagem", volume: "~700 contas prontas", badge: "Alta Propensão B2B", criteria: "Somente empresas que justificam o tempo e a atenção do operador humano comercial sênior.", action: "608 escritórios de arquitetura e design de interiores + 89 redes selecionadas de food service e hospitalidade." }
            ],
            cycleInteractiveHeader: "INTERATIVIDADE // O MOTOR EM EXECUÇÃO",
            cycleInteractiveTitle: "As 5 etapas operacionais do ciclo",
            btnViewCycleFull: "Ver Diagrama Completo",
            validationRulesLabel: "Regras de Validação & Integridade:",
            guaranteedOutputLabel: "Saída Garantida da Fase",
            automatedPipelineLabel: "Pipeline automatizado sem atrito manual",
            cicloEtapas: [
                { id: 1, step: "01", name: "Captar", sub: "/captacao-escritorios", desc: "Assistente autônomo navega em fontes e registros públicos, valida se a empresa é ativa e audita dados sem disparar abordagens precipitadas.", rules: ["Varredura em sites e diretórios abertos", "Apenas dados de contato públicos e verificáveis", "Pausa e consulta humana em caso de inconsistência"], output: "Lista MESTRE com milhares de registros brutos" },
                { id: 2, step: "02", name: "Higienizar", sub: "/higienizar-base-prospeccao", desc: "Normalização estrutural que elimina duplicidades, agrupa filiais de redes corporativas em um único decisor e redige o gancho de abordagem.", rules: ["Filtro de integridade de CNPJ/nome fantasia", "Priorização ponderada por perfil e porte", "Redação do primeiro gancho em 2 parágrafos"], output: "Dataset higienizado com contrato de 32 colunas" },
                { id: 3, step: "03", name: "Carregar", sub: "/carga-leads", desc: "Ingestão idempotente no banco relacional Supabase com validação prévia de colunas obrigatórias e snapshot de backup antes de qualquer mutação.", rules: ["Validação estrita de schema de dados", "Backup automatizado com validação de hash", "Carga incremental idempotente (nunca duplica)"], output: "Leads inseridos na fila 'Aguardando Contato'" },
                { id: 4, step: "04", name: "Trabalhar", sub: "Cockpit Kanban com IA Sob Demanda", desc: "Esteira de 9 fases onde o operador humano tem suporte de IA contextualizada, pronta para sugerir réplicas e respeitar o tom de voz da marca.", rules: ["Histórico contextual das últimas 20 mensagens", "Smart Console para réplicas de objeções", "Sugestão inteligente do próximo passo no pipeline"], output: "Negócios avançando de forma qualificada no funil" },
                { id: 5, step: "05", name: "Medir", sub: "Simulador de Monte Carlo & BI", desc: "Algoritmo estatístico que roda 10.000 iterações estocásticas para calcular o forecast ponderado e reordenar a prioridade visual dos cartões.", rules: ["Matriz de discovery (interlocutor, demanda, ticket)", "Probabilidade dinâmica calculada por lead", "Filtros interativos direto nos KPIs do cockpit"], output: "Forecast preditivo e gestão de atenção executiva" }
            ],
            sec3Tag: "03 // A ANAMNESE CLÍNICA DO LEAD",
            sec3Title: "A IA lê o lead como um médico lê um paciente: anamnese, diagnóstico e indicação.",
            sec3Desc: "Em vez de uma IA que apenas redige e-mails plausíveis, ela cruza o portfólio real da fábrica com os dados públicos do escritório, produzindo um prontuário clínico que orienta a abordagem do operador.",
            diagram2Title: "Diagrama 02: Prontuário Real de um Lead da Fila",
            diagram2Sub: "Dados públicos de escritório de arquitetura; contatos omitidos por privacidade.",
            btnViewDossier: "Ver Prontuário Completo",
            prontuarioHeader: "DETALHAMENTO // AS 7 CAMADAS DO PRONTUÁRIO",
            layersTitle: "A regra que mantém a inteligência honesta",
            layerProntuarioOf: "CAMADA {0} DE 07",
            antiHallucinationRule: "Regra de Blindagem Anti-Alucinação",
            camadasProntuario: [
                { id: "anamnese", title: "Anamnese", desc: "Mapeamento rigoroso do ecossistema do lead (projetos executados, prêmios, mini bio e canais oficiais).", honestyRule: "Só o que é publicamente auditável com URL da fonte. Se não houver registro, o campo permanece vazio." },
                { id: "diagnostico", title: "Diagnóstico", desc: "Cruzamento dos pontos fortes do escritório com eventuais gargalos de fornecimento ou acabamento.", honestyRule: "Pontos de atenção só com evidência clara; caso contrário, é marcado como 'Sem informação verificada'." },
                { id: "hipoteses", title: "Hipóteses", desc: "Formulação de teses técnicas para o operador validar durante a conversa (tipo de marcenaria, demandas de obra, prazos).", honestyRule: "Escritas explicitamente no formato de hipótese, ligadas a um fato concreto, jamais como verdade presumida." },
                { id: "indicacao", title: "Indicação de Portfólio", desc: "Recomendação cirúrgica de até 3 equipamentos do catálogo que atendem exatamente ao padrão dos projetos do cliente.", honestyRule: "Apenas se houver aderência arquitetônica demonstrada. Sem dados, emite 'Sem dados suficientes para proposta'." },
                { id: "argumento", title: "Argumento Comercial", desc: "Identificação da alavanca de valor com maior apelo para aquele perfil (ex: flexibilidade de nicho, ART, INDICA).", honestyRule: "Selecionado estritamente a partir da matriz comercial aprovada da diretoria, sem improvisos da IA." },
                { id: "prioridade", title: "Score & Prioridade", desc: "Classificação em Alta, Média-alta ou Média, baseada em aderência de ticket e capacidade de especificação.", honestyRule: "Critérios matemáticos e explicáveis no prontuário, sem pontuações 'caixa-preta'." },
                { id: "mensagem", title: "Primeira Mensagem", desc: "Texto de abertura em dois parágrafos: conexão genuína com uma obra real do lead + introdução de autoridade da marca.", honestyRule: "Transparência total sobre a origem da pesquisa, banindo elogios vazios ou clichês corporativos." }
            ],
            sec4Tag: "04 // FORECAST PREDITIVO & RETORNO DE INVESTIMENTO",
            sec4Title: "Gestão de atenção por Monte Carlo e o paralelo com mídia paga.",
            sec4Desc: "10.000 iterações matemáticas ponderadas por probabilidade de conversão para evitar desperdício de tempo com contas frias.",
            mcTitle: "Simulação Estocástica de Monte Carlo",
            mcDesc: "Selecione a fase para visualizar a probabilidade ponderada e o forecast preditivo calculados pelo motor:",
            monteCarloPhases: [
                { phase: "Aguardando Contato", mult: "1.0x", prob: "12%", desc: "Lead na esteira com prontuário gerado, sem toque humano inicial.", forecast: "R$ 14.400" },
                { phase: "Abordagem Realizada", mult: "1.2x", prob: "28%", desc: "Primeiro contato honesto enviado com referência direta ao portfólio.", forecast: "R$ 33.600" },
                { phase: "Conversa em Andamento", mult: "1.5x", prob: "46%", desc: "Interlocutor respondeu, Smart Console sugerindo réplica técnica.", forecast: "R$ 55.200" },
                { phase: "Interesse Confirmado", mult: "1.8x", prob: "74%", desc: "Demanda imediata por projeto residencial ou gastronômico mapeada.", forecast: "R$ 88.800" },
                { phase: "Proposta / Fechamento", mult: "2.0x", prob: "91%", desc: "Especificação de nicho validada e negociação em estágio avançado.", forecast: "R$ 109.200" }
            ],
            mediaCompTitle: "Mídia Paga Histórica vs. Motor Próprio",
            mediaCompDesc: "Comparativo de ordens de grandeza para posicionar ~700 leads aptos:",
            timeTitle: "TEMPO DE CAPTAÇÃO & QUALIFICAÇÃO",
            timeHighlight: "99.6% Mais Rápido",
            costTitle: "CUSTO TOTAL DE AQUISIÇÃO & FERRAMENTAS",
            costHighlight: "Economia Total",
            mediaLabel: "Mídia + SaaS (Setup + Mensalidades de CRM)",
            mediaSubDetail: "(Mídia R$ 17,5k-105k + SaaS CRM Setup/Contrato R$ 28k-75k)",
            motorLabel: "Motor Lean Ops",
            motorValue: "R$ 0 de mídia e R$ 0 de SaaS",
            comparisonNote: "* Paralelo de ordem de grandeza considerando mídia histórica e contratação de SaaS de CRM com setup de implantação e licenças contratuais vs. motor proprietário serverless.",
            sec5Tag: "05 // DECISÕES DE ENGENHARIA DE SOFTWARE",
            sec5Title: "Como a engenharia substituiu o custo por usuário da mensalidade de SaaS.",
            diagram3Title: "Diagrama 03: Arquitetura Técnica do Cockpit Comercial",
            diagram3Sub: "Controle de privilégios e fronteiras de execução",
            btnViewArchFull: "Ver Arquitetura Completa",
            archNote: "Nota Técnica de Engenharia: As setas do diagrama mapeiam estritamente o fluxo de iniciação de requisições e a fronteira de privilégios (quem aciona quem e onde residem as chaves sensíveis). O tráfego de dados de retorno flui bidirecionalmente em mão dupla via respostas HTTP/REST e conexões WebSocket em tempo real gerenciadas pelo Supabase.",
            costLabel: "Custo",
            stackItens: [
                { layer: "Interface Front-end", tech: "HTML5, CSS moderno e Vanilla JS modular", cost: "R$ 0", reason: "Zero overhead de build, carregamento instantâneo em hospedagem existente" },
                { layer: "Banco de Dados & Auth", tech: "Supabase (PostgreSQL com RLS + Realtime)", cost: "R$ 0", reason: "Camada gratuita com segurança granular por usuário e replicação em tempo real" },
                { layer: "Inteligência Artificial", tech: "Google Gemini (Edge Functions Deno/TS)", cost: "R$ 0", reason: "Fallback automático entre 4 modelos gratuitos e prompts calibrados" },
                { layer: "Automações & Pipelines", tech: "Python, scripts de batch e Chrome Headless", cost: "R$ 0", reason: "Validação rigorosa por hash, sanitização de dados e idempotência" },
                { layer: "Versionamento & DevOps", tech: "GitHub privado com SemVer e 14 releases", cost: "R$ 0", reason: "Rastreabilidade de cada evolução com documentação técnica padronizada" }
            ],
            principlesHeader: "PRINCÍPIOS OPERACIONAIS",
            principlesTitle: "6 decisões que sustentam a operação e blindam contra falhas",
            regrasEngenharia: [
                { num: "01", title: "Qualidade antes de volume", desc: "O validador barra qualquer linha mal formatada; backups prévios e idempotência tornam erros baratos e fáceis de reverter." },
                { num: "02", title: "Fonte única de parametrização", desc: "Marca, funil, perfis e pesos num só arquivo; mudar uma fase ou alterar uma regra não exige migrações complexas de banco." },
                { num: "03", title: "Conhecimento em dados", desc: "Corrigir um argumento comercial ou nova especificação é atualizar um JSON estruturado, sem necessidade de recompile ou novo deploy." },
                { num: "04", title: "Honestidade como código", desc: "A IA é configurada para se recusar a forçar uma proposta caso não existam dados suficientes, emitindo alertas explícitos de checagem." },
                { num: "05", title: "Pausar em vez de improvisar", desc: "Assistentes de dados pausam a execução e consultam o operador diante de qualquer bloqueio, prevenindo contaminação da base com ruído." },
                { num: "06", title: "Cadência de entrega", desc: "14 micro-versões documentadas em 2 dias, cada uma registrada no changelog para garantir rastreabilidade completa e zero regressões." }
            ],
            ctaBadge: "PRÓXIMO PASSO EXECUTIVO",
            ctaTitle: "Menos abstração. Mais tração.",
            ctaSubtitle: "Quer estruturar uma máquina enxuta de qualificação B2B e orquestração de IA personalizada para a sua realidade comercial?",
            ctaPlaceholder: "Descreva o seu modelo comercial, ticket médio, gargalo de prospecção ou escopo da sua empresa para receber um diagnóstico preliminar com IA..."
        }
    },
    en: {
        nav: {
            experimentos: "Experiments",
            arquitetura: "Architecture",
            fundamentacao: "Foundation",
            sandbox: "Sandbox"
        },
        splash: {
            sub1: "The applied AI and revenue engineering laboratory.",
            sub2: "Less abstraction, more traction."
        },
        hero: {
            slide1: {
                title: "AI Profiler",
                description: "Contextualized diagnostic bridging your project scope with my executive track record",
                btn: "Explore Track Record"
            },
            slide2: {
                title: "Lean Ops",
                description: "Commercial AI cockpit to discover, qualify and forecast revenue at zero cost.",
                btn: "Explore Case Study"
            },
            slide3: {
                title: "AI SDR",
                description: "Autonomous sales via WhatsApp at a cost < 1% of revenue generated",
                btn: "COMING SOON"
            },
            slide4: {
                title: "Executive BI",
                description: "True ROI attribution unifying media spend, revenue, and margins",
                btn: "COMING SOON"
            },
            slide5: {
                title: "High-Ticket Sales",
                description: "Luxury GTM strategy yielding +33% average order value in 100% digital sales",
                btn: "COMING SOON"
            }
        },
        filter: {
            tag: "TECHNICAL ARSENAL // CREDENTIALS & VALIDATIONS",
            title: "Technical Domain\n& Credentials",
            all: "ALL",
            aiAuto: "AI & AUTO",
            dataBi: "DATA & BI",
            midiaCrm: "MEDIA & CRM",
            management: "MANAGEMENT",
            arsenal: [
                { id: 1, title: "Agents and Workflows", text: "Autonomous agent architecture and cognitive workflows, complex task orchestration, tool calling, and zero-friction end-to-end operational automation.", tag: "OpenAI · Jun 2026" },
                { id: 2, title: "Model Context Protocol: Advanced Topics", text: "LLM integration with local data sources and MCP servers, structured context grounding for multi-agent systems and standardized inter-model protocols.", tag: "Anthropic · Jul 2026" },
                { id: 3, title: "AI Fluency: Framework & Foundations", text: "Operational foundations and enterprise generative AI governance, risk assessment, bias mitigation, ethical alignment, and strategic LLM integration in business.", tag: "Anthropic · Jul 2026" },
                { id: 4, title: "Java: API Consumption & File Management", text: "HTTP endpoint integration and data streaming, web request handling, JSON parsing, enterprise file persistence, and robust data piping.", tag: "Alura · Jun 2025" },
                { id: 5, title: "Java: Enterprise Applications", text: "Structured backend compilation and development, solid rule-processing architecture, and software engineering tailored to business automation.", tag: "Alura · Jun 2025" },
                { id: 6, title: "Java: Collections & Data Sets", text: "Complex dataset structuring and sorting, performance optimization via Collections, Lists, and Maps, and high-efficiency algorithmic data processing.", tag: "Alura · Jun 2025" },
                { id: 7, title: "Java: Object-Oriented Architecture", text: "Decoupled software design with inheritance, polymorphism, and interfaces, clean code patterns, cohesion, and scalable modular business rules.", tag: "Alura · Jun 2025" },
                { id: 8, title: "Google Tag Manager: Advanced Telemetry", text: "Web tracking orchestration and data governance, advanced data layer implementation for GA4 and Ads, and standardized measurement trigger events.", tag: "Alura · Aug 2025" },
                { id: 9, title: "Digital Media: Planning & ROI Attribution", text: "Multi-channel performance media strategy, attribution modeling, customer acquisition cost (CAC) optimization, and ROI-driven budget allocation.", tag: "Senac SP · Jul 2009" },
                { id: 10, title: "Dinamize CRM: Lifecycle Automation", text: "Relationship automated drip funnels and CRM lifecycle, behavioral segmentation, conversion-led lead nurturing, and deliverability optimization.", tag: "Dinamize · Sep 2025" },
                { id: 11, title: "Corporate Channels & Content Governance", text: "Digital footprint expansion, brand distribution strategy, corporate engagement channels, and technical editorial governance.", tag: "Senac SP · Jul 2011" },
                { id: 12, title: "Interactive Information Architecture", text: "Information architecture and interactive digital narratives for web properties, retention-focused publishing, and conversational UX optimization.", tag: "Senac SP · Aug 2011" },
                { id: 13, title: "Visual Merchandising & Retail Conversion", text: "Visual architecture directing customer attention and conversion, touchpoint product hierarchy, and visual principles elevating perceived value.", tag: "Senac SP · Jun 2009" },
                { id: 14, title: "Microsoft Project: Critical Path & SLAs", text: "Schedule modeling, critical path dependencies and milestones, resource leveling, predictive risk governance, and strict SLA compliance.", tag: "Senac SP · Feb 2011" },
                { id: 15, title: "Venture Modeling & Unit Economics", text: "Financial modeling, economic feasibility, value proposition design, unit economics benchmarking, GTM roadmaps, and commercial positioning.", tag: "Senac SP · Aug 2012" },
                { id: 16, title: "Strategic High-Stakes Negotiation", text: "Complex deal-making and multi-stakeholder alignment, mutual value creation, margin expansion, and executive obstacle resolution.", tag: "Senac SP · Jun 2012" },
                { id: 17, title: "Executive Communication & Alignment", text: "Synthesis and radical clarity in strategic decision-making, multidisciplinary leadership, and operational noise reduction between leadership and squad.", tag: "Senac SP · Mar 2012" },
                { id: 18, title: "C-Level Narrative & Stakeholder Framing", text: "Audience segmentation tailored to seniority, message framing for C-Suite buyers, and institutional positioning built on undeniable authority.", tag: "Senac SP · Feb 2011" },
                { id: 19, title: "Lean Business & Small-Medium Enterprise", text: "Cash-flow governance, operational routines, margin optimization in lean organizations, and sustainable growth planning.", tag: "Senac SP · Jan 2012" }
            ]
        },
        about: {
            tag: "ABOUT THE LABS // TECHNICAL RIGOR & EXECUTION",
            title: "Data architecture, AI, and predictive models in production. From direct technical validation to process engineering that scales revenue with predictability and governance.",
            baseTitle: "The Foundation Behind the Lab",
            baseDesc: "In the lab, every experiment stems from a solid thesis: how to convert theoretical models into real business value? Our academic foundation underpins the technical architecture that turns complex concepts into market-ready engines.",
            formations: [
                { id: 1, title: "MBA: AI, Data Science & Big Data", local: "PUCRS", period: "2023 - 2024", text: "Corporate specialization focused on advanced data modeling, predictive machine learning algorithms, and scalable Big Data architecture." },
                { id: 2, title: "MBA: Digital Transformation", local: "PUCRS", period: "2021 - 2022", text: "Strategic vision centered on disruptive innovation, agile methodologies, and deep operational process and business model digitization." },
                { id: 3, title: "Project Management (PMBOK)", local: "SENAC SP", period: "2018 - 2019", text: "Deep dive into PMBOK practices for high-level roadmap planning, predictive risk mitigation, and efficient project execution." },
                { id: 4, title: "Advertising & Marketing", local: "USJT", period: "2014 - 2015", text: "Technical development of go-to-market strategies, consumer behavioral analysis, and full-funnel 360º commercial campaigns." },
                { id: 5, title: "Digital Media Design Degree", local: "IMPACTA", period: "2008 - 2012", text: "Multidisciplinary academic degree in UI/UX architecture, user experience research, and high-performance front-end web engineering." }
            ]
        },
        terminal: {
            defaultBadge: "EXPERIMENT 05 // INTERACTIVE AGENT",
            defaultTitle: "Connect Your Challenge to My Track Record",
            defaultSubtitle: "Input your project scope, an executive job brief, or ask about past track records and client accounts. The system cross-references your demand with my career history in real-time, delivering a tailored diagnostic.",
            defaultPlaceholder: "Describe your operational bottleneck, paste a job description or ask about past accounts...",
            attachText: "Attach (PDF/Img/TXT)",
            audioText: "Audio",
            runText: "Run AI Profiler",
            btnDownload: "DOWNLOAD PDF",
            btnWhatsApp: "CONTINUE ON WHATSAPP",
            readingFile: "Reading File...",
            recording: "Recording...",
            chips: [
                { id: 1, label: "EXECUTIVE ROLE", text: "How does your experience apply to a Head of Marketing Operations / RevOps position?" },
                { id: 2, label: "GLOBAL BRANDS", text: "Which initiatives did you spearhead for enterprise accounts like Microsoft, Pfizer and J&J?" },
                { id: 3, label: "REVENUE TURNAROUND", text: "How did you triple top-line revenue and raise average order value at Attimo?" },
                { id: 4, label: "LEAN EFFICIENCY", text: "How did you structure a 15-person squad to produce the operational output of 50?" }
            ]
        },
        footer: {
            city: "Jaguariúna, SP, Brazil",
            credits: "PROJECT INSPIRED BY GOOGLE LABS, BUILT 100% WITH ANTIGRAVITY IDE, GEMINI 3.1 PRO, NANO BANANA, OMNI FLASH AND APIS IN 16 HOURS."
        },
        leanOps: {
            deck: {
                badge: "EXECUTIVE BRIEFING // C-LEVEL PITCH",
                skipToCase: "Skip to Full Technical Dossier",
                slideLabel: "SLIDE",
                ofLabel: "OF",
                prevBtn: "Previous slide",
                nextBtn: "Next slide",
                slides: [
                    {
                        tag: "01 // FROM PASSIVE INBOUND TO ACTIVE HUNTING",
                        title: "Waiting for paid media leads burns margin. Active high-propensity hunting changes the game.",
                        subtitle: "Instead of waiting passively for standard lead forms ('name, email, and maybe phone'), the engine proactively hunts companies and accounts that genuinely move the revenue needle. At every single account level, it identifies negotiation strengths, weaknesses, and the exact product match before outreach.",
                        kpis: [
                            { label: "Sales Posture", val: "Active Hunting", desc: "Proactive discovery of high-impact strategic buyers" },
                            { label: "Pre-Scout Intel", val: "Account-Level", desc: "Negotiation leverage points mapped beforehand" },
                            { label: "Product Fit", val: "Surgical Match", desc: "Mapped against the industry's 28 product lines" }
                        ],
                        image: "/images/cases/lean-ops/cockpit/cockpit-kanban.jpg",
                        imageCaption: "Kanban Cockpit with 9-stage pipeline and weighted probability scoring"
                    },
                    {
                        tag: "02 // BRAND HOMOGENEITY & CLINICAL DOSSIER",
                        title: "Surgical standard: transforming frontline reps into the brand's top consultative advisors.",
                        subtitle: "Sales reps no longer improvise in the dark. Each lead arrives with a clinical dossier detailing client portfolio analysis, hypothesis, and conversation hooks in the brand's exact tone. An AI-enriched scouting workflow ensuring high-ticket enterprise deals are never mishandled.",
                        kpis: [
                            { label: "Pre-Contact Dossier", val: "100% of Leads", desc: "Full technical context before initiating conversation" },
                            { label: "Brand Shielding", val: "Zero Hallucination", desc: "Strictly verifiable data with documented source URLs" },
                            { label: "Voice Homogeneity", val: "Executive Standard", desc: "C-level sophistication replicated across every rep" }
                        ],
                        image: "/images/cases/lean-ops/cockpit/cockpit-prontuario.jpg",
                        imageCaption: "Lead Dossier with AI Scout: strengths, gaps, and tailored product recommendations"
                    },
                    {
                        tag: "03 // STATISTICAL PRAGMATISM & ATTENTION MANAGEMENT",
                        title: "Replacing guesswork with mathematical certainty via Monte Carlo stochastic simulation.",
                        subtitle: "Intuitive sales teams waste hours chasing whoever answered last. The cockpit runs 10,000 stochastic iterations in the Discovery Matrix to dynamically weigh closing probabilities, focusing commercial energy strictly where the real revenue lies.",
                        kpis: [
                            { label: "Weighted Pipeline", val: "> $ 20k+", desc: "Dynamic probabilistic forecast calculated per account" },
                            { label: "Stochastic Engine", val: "10,000 Runs", desc: "Monte Carlo closing probability model" },
                            { label: "Attention Focus", val: "High Value", desc: "Allocating senior reps where closing probability is highest" }
                        ],
                        image: "/images/cases/lean-ops/cockpit/cockpit-discovery.jpg",
                        imageCaption: "Discovery Matrix with dynamic closing probability calculation and quick WhatsApp trigger"
                    },
                    {
                        tag: "04 // QUANTITATIVE FUNNEL & SAME-DAY ROLLOUT",
                        title: "Same-day rollout: a concise, qualified pipeline without the drag or expense of paid media.",
                        subtitle: "The stark difference between overpaying for lukewarm leads — where an unqualified rep spends weeks trying to close a mediocre deal — versus building ~700 verified accounts in 1 business day. Saving 23 to 47 weeks of ad drag and over $ 10,000 in software and setup fees.",
                        kpis: [
                            { label: "Pipeline Velocity", val: "1 Business Day", desc: "vs. 23 to 47 weeks in traditional paid media (99.6% faster)" },
                            { label: "Qualified Dataset", val: "~700 Accounts", desc: "AI-enriched triage ensuring no commercial argument is missed" },
                            { label: "First Opportunities", val: "< 12 Hours", desc: "First real opportunities and notes logged on launch day" }
                        ],
                        image: "/images/cases/lean-ops/cockpit/cockpit-bi.jpg",
                        imageCaption: "Executive BI Dashboard: temporal tracking of actual, projected, and lost pipeline"
                    },
                    {
                        tag: "05 // THE REVENUE ARCHITECT IN THE C-SUITE",
                        title: "The rare intersection between executive GTM strategy and production software engineering.",
                        subtitle: "Most organizations separate the consultant who crafts the deck from the engineer who builds the software. A Revenue Engineer bridges both: architecting board-level growth strategy while coding the production engine — delivering 14 documented releases in 48 hours with zero technical debt.",
                        kpis: [
                            { label: "For CEOs & Boards", val: "Clean Margins", desc: "Revenue acceleration with zero tool costs and lean ops" },
                            { label: "For CROs & CMOs", val: "High Conversion", desc: "Homogeneous messaging, negotiation dossiers, and authority" },
                            { label: "For CTOs & Tech", val: "14 Releases / 48h", desc: "SemVer, idempotency, strict schemas, zero technical debt" }
                        ],
                        image: "/images/cases/lean-ops/cockpit/cockpit-releases.jpg",
                        imageCaption: "Integrated release changelog: 14 micro-versions documented in 2 days"
                    },
                    {
                        tag: "06 // THE PROOF OF EXECUTION & NEXT STEP",
                        title: "Consistent revenue performance rests on rigorous engineering. Explore the proof.",
                        subtitle: "Below is the complete technical evidence: 32-column data contracts, serverless architecture, interactive Monte Carlo simulation, and live dossiers. Explore the technical breakdown or start an executive diagnostic conversation.",
                        ctas: {
                            primary: "Explore Full Technical Dossier ↓",
                            whatsapp: "Contact Carlos Felipe (WhatsApp)",
                            sandbox: "Test in AI Profiler (Sandbox)"
                        },
                        image: "/images/cases/lean-ops/cockpit/cockpit-kanban.jpg",
                        imageCaption: "Full Commercial Cockpit in production: from discovery to predictive forecasting"
                    }
                ]
            },
            heroTitle1: "From costly SaaS to an AI commercial cockpit,",
            heroTitle2: "at zero cost.",
            heroSubtitle: "How I replaced an enterprise CRM subscription with a proprietary engine that captures, qualifies, conducts clinical lead anamnesis and forecasts revenue in 12 hours.",
            btnViewArch: "View Engine Architecture",
            btnReadThesis: "Read Project Thesis",
            kpiTools: "Monthly software tooling cost",
            kpiToolsSub: "Serverless architecture on managed free tier layers",
            kpiLeads: "From raw items to qualified leads",
            kpiLeadsSub: "Cleaning, sanitization, and clinical lead anamnesis",
            kpiTime: "To first pipeline opportunities",
            kpiTimeSub: "Immediate revenue traction with logged notes in 12 hours",
            kpiForecast: "Weighted pipeline forecast",
            kpiForecastSub: "Predictive forecast through 10,000 Monte Carlo simulations",
            kpiMedia: "Paid media CPA per qualified lead",
            kpiMediaSub: "Historical $ 5 to $ 30 acquisition cost reduced to zero",
            sec1Tag: "01 // THE SCENARIO & THE PROVOCATION",
            sec1Title: "Off-the-shelf CRMs charge per seat and deliver an AI that knows nothing about your product.",
            bottleneckTag: "Bottleneck",
            bottlenecks: [
                { tag: "Bottleneck 01", title: "Slow and costly acquisition", desc: "Historically, each qualified lead cost between $ 5 and $ 30 in ad spend, yielding a modest volume of 15 to 30 contacts per week.", footer: "High marginal cost per click" },
                { tag: "Bottleneck 02", title: "Inconsistent brand voice", desc: "Each SDR spoke differently. In high-ticket B2B sales (architecture and hospitality), tone is part of the product: the brand must sound elite and unified.", footer: "Friction on first touchpoint" },
                { tag: "Bottleneck 03", title: "Scattered team attention", desc: "With hundreds of contacts in spreadsheets, sales reps instinctively chased whoever answered last, rather than accounts with high closing probability.", footer: "High-ticket opportunity leakage" }
            ],
            thesisTag: "THE OPERATIONAL THESIS",
            thesisQuote: "“Instead of subscribing to bloated SaaS that does everything poorly, build a compact engine that executes the core revenue levers with surgical precision.”",
            thesisPillars: [
                { name: "LeanOps", desc: "Minimal moving parts. Zero-build static front-end, managed database, and zero infrastructure overhead." },
                { name: "RevOps", desc: "Unified end-to-end pipeline: from initial cold discovery to predictive forecast using a single metric." },
                { name: "MarTech", desc: "AI grounded in 28 factory product blocks, triggered on demand with strictly verifiable provenance." }
            ],
            sec2Tag: "02 // FROM RAW MASS TO QUALIFIED LEADS",
            sec2Title: "The continuous cycle: capture, sanitization, and forecast.",
            sec2Desc: "Thousands of raw data points refined through automated validation stages down to ~700 high-propensity accounts with clinical dossiers.",
            diagram1Header: "DIAGRAM 01 // FILTERING ARCHITECTURE",
            diagram1Title: "Layered Discovery & Data Sanitization Funnel",
            btnExpand: "Expand Original Diagram",
            layerOf: "LAYER {0} OF 05",
            filterCriteria: "Filtering Criteria:",
            actionExecuted: "Operational Action Performed:",
            funilLayers: [
                { id: "descoberta", level: "01", name: "Raw Discovery", volume: "Thousands of items", badge: "Public Crawling", criteria: "Maps, trade directories, and open industry lists across architecture, design, and hospitality groups.", action: "Batch 1 evaluated 1,100+ firms; batch 2 exceeded 2,400 raw directory entries." },
                { id: "tratamento", level: "02", name: "Sanitization & Verification", volume: "Active firms with verified websites", badge: "Noise Filtering", criteria: "Removal of marketing agencies, inactive social handles, liquidated corporate IDs, and shuttered entities.", action: "Merged duplicates, consolidated regional branches to central decision-makers, and removed 55 dead contacts." },
                { id: "enriquecimento", level: "03", name: "Audited Contacts", volume: "Verified public channels", badge: "Source Audited", criteria: "Strictly public channels (WhatsApp, business email, and phone) with documented origin URLs.", action: "Automated compliance sanitization and structured metadata mapping into a 32-column standardized contract." },
                { id: "prontuario", level: "04", name: "Clinical Dossier & Anamnesis", volume: "AI clinical analysis", badge: "Deep Qualification", criteria: "Cross-referencing client public portfolios against 28 product knowledge blocks to generate custom pitches.", action: "Evaluated strengths, construction hypotheses, up to 3 catalog recommendations, and bespoke cold hooks." },
                { id: "resultado", level: "05", name: "Outreach-Ready Accounts", volume: "~700 qualified accounts", badge: "High B2B Propensity", criteria: "Only firms whose contract potential justifies senior executive rep attention.", action: "608 architecture and interior design studios + 89 selected food service and hospitality groups." }
            ],
            cycleInteractiveHeader: "INTERACTIVE // ENGINE IN EXECUTION",
            cycleInteractiveTitle: "The 5 operational lifecycle stages",
            btnViewCycleFull: "View Full Diagram",
            validationRulesLabel: "Validation & Integrity Rules:",
            guaranteedOutputLabel: "Stage Guaranteed Output",
            automatedPipelineLabel: "Automated pipeline without manual friction",
            cicloEtapas: [
                { id: 1, step: "01", name: "Capture", sub: "/captacao-escritorios", desc: "Autonomous worker crawls public registries, confirms business validity, and audits data without premature outreach.", rules: ["Crawling public directories and domains", "Verifiable public contact data only", "Automated pause and human review on discrepancies"], output: "MASTER registry list with thousands of raw records" },
                { id: 2, step: "02", name: "Sanitize", sub: "/higienizar-base-prospeccao", desc: "Structural normalization that deduplicates entries, collapses brand chains into single buyers, and crafts custom hooks.", rules: ["Corporate ID / brand integrity filter", "Weighted ranking by tier and scale", "Bespoke 2-paragraph outreach hook generation"], output: "Sanitized dataset mapped to 32-column schema contract" },
                { id: 3, step: "03", name: "Ingest", sub: "/carga-leads", desc: "Idempotent database ingestion into Supabase with strict column validation and hash snapshots prior to any mutations.", rules: ["Strict data schema verification", "Automated hash-verified backup snapshot", "Idempotent incremental ingestion (zero duplicates)"], output: "Leads inserted into 'Awaiting Contact' stage" },
                { id: 4, step: "04", name: "Operate", sub: "Kanban Cockpit with On-Demand AI", desc: "9-phase workflow where human SDRs leverage grounded AI assistance, suggesting technical objection counters aligned with brand voice.", rules: ["Context history of the last 20 messages", "Smart Console for technical objection handling", "Intelligent suggestion of next pipeline milestone"], output: "High-intent deals progressing steadily through the funnel" },
                { id: 5, step: "05", name: "Measure", sub: "Monte Carlo Simulator & BI", desc: "Statistical engine executing 10,000 stochastic iterations to compute weighted pipeline forecast and reorder visual cards.", rules: ["Discovery matrix (contact, scope, ticket)", "Dynamic per-lead win probability score", "Interactive KPI filtering directly inside the cockpit"], output: "Predictive forecast and executive attention governance" }
            ],
            sec3Tag: "03 // CLINICAL ANAMNESIS OF EACH LEAD",
            sec3Title: "AI reads the prospect like a clinician reads a patient: anamnesis, diagnosis, and prescription.",
            sec3Desc: "Instead of generic copywriting, the engine maps the client's public portfolio against 28 product knowledge blocks, building a clinical dossier for the human operator.",
            diagram2Title: "Diagram 02: Live Clinical Dossier from the Active Queue",
            diagram2Sub: "Public architectural firm data; private contact details omitted.",
            btnViewDossier: "View Full Dossier",
            prontuarioHeader: "BREAKDOWN // THE 7 DOSSIER CLINICAL LAYERS",
            layersTitle: "The strict validation rules that keep AI honest",
            layerProntuarioOf: "LAYER {0} OF 07",
            antiHallucinationRule: "Anti-Hallucination Shield Rule",
            camadasProntuario: [
                { id: "anamnese", title: "Anamnesis", desc: "Rigorous mapping of prospect ecosystem (completed projects, awards, team bio, and public channels).", honestyRule: "Strictly public and auditable with origin URL. If unrecorded, field remains intentionally empty." },
                { id: "diagnostico", title: "Diagnostic", desc: "Cross-referencing studio strengths with potential material, supply, or finish bottlenecks.", honestyRule: "Identified pain points require hard evidence; otherwise marked as 'No verified data'." },
                { id: "hipoteses", title: "Hypotheses", desc: "Formulation of technical supply theses for sales reps to validate during initial dialog.", honestyRule: "Explicitly written as testable hypotheses anchored to concrete project facts, never assumed truths." },
                { id: "indicacao", title: "Portfolio Matching", desc: "Surgical recommendation of up to 3 catalog items precisely matching client design standards.", honestyRule: "Only provided if architectural alignment exists. Emits 'Insufficient data for proposal' if absent." },
                { id: "argumento", title: "Commercial Value Hook", desc: "Identification of the highest-leverage value driver for this profile (custom finishes, engineering compliance, warranty).", honestyRule: "Selected strictly from executive-approved commercial pitch matrix, with zero AI improvisation." },
                { id: "prioridade", title: "Score & Priority", desc: "Categorization into High, Medium-High, or Medium based on project budget and specification authority.", honestyRule: "Mathematical and fully explainable scoring in the dossier, eliminating 'black-box' ratings." },
                { id: "mensagem", title: "First Outreach Message", desc: "Two-paragraph opening hook: authentic connection with a real client project + authoritative brand introduction.", honestyRule: "Full transparency on research provenance, banning shallow flattery and corporate clichés." }
            ],
            sec4Tag: "04 // PREDICTIVE FORECAST & ROI",
            sec4Title: "Attention management via Monte Carlo and the parallel with paid media.",
            sec4Desc: "10,000 mathematical iterations weighted by conversion probability to prevent sales reps from wasting time on low-yield prospects.",
            mcTitle: "Stochastic Monte Carlo Simulation",
            mcDesc: "Select a pipeline phase to view real-time weighted probability and engine-calculated forecast:",
            monteCarloPhases: [
                { phase: "Awaiting Contact", mult: "1.0x", prob: "12%", desc: "Lead queued with clinical dossier generated; zero human touch yet.", forecast: "$ 2,880" },
                { phase: "Outreach Sent", mult: "1.2x", prob: "28%", desc: "First authentic message delivered with direct portfolio reference.", forecast: "$ 6,720" },
                { phase: "Active Dialog", mult: "1.5x", prob: "46%", desc: "Decision-maker replied; Smart Console advising technical counters.", forecast: "$ 11,040" },
                { phase: "Confirmed Interest", mult: "1.8x", prob: "74%", desc: "Immediate residential or hospitality project requirement logged.", forecast: "$ 17,760" },
                { phase: "Proposal / Closing", mult: "2.0x", prob: "91%", desc: "Niche architectural specification locked; commercial terms finalizing.", forecast: "$ 21,840" }
            ],
            mediaCompTitle: "Historical Paid Media vs. Proprietary Engine",
            mediaCompDesc: "Order of magnitude benchmark to position ~700 qualified accounts:",
            timeTitle: "TIME TO CAPTURE & QUALIFY",
            timeHighlight: "99.6% Faster",
            costTitle: "TOTAL ACQUISITION & TOOLING COST",
            costHighlight: "Complete Savings",
            mediaLabel: "Paid Media + SaaS (CRM Setup & Monthly Fees)",
            mediaSubDetail: "(Media $ 3.5k-21k + CRM SaaS Setup/Contract $ 5.6k-15k)",
            motorLabel: "Lean Ops Engine",
            motorValue: "$ 0 paid media and $ 0 SaaS",
            comparisonNote: "* Order-of-magnitude benchmark comparing historical paid acquisition and commercial CRM SaaS (setup + license contracts) against our proprietary serverless engine.",
            sec5Tag: "05 // SOFTWARE ENGINEERING DECISIONS",
            sec5Title: "How software engineering replaced per-seat SaaS subscription overhead.",
            diagram3Title: "Diagram 03: Technical Commercial Cockpit Architecture",
            diagram3Sub: "Privilege boundaries and execution call flows",
            btnViewArchFull: "View Full Architecture",
            archNote: "Engineering Note: Diagram arrows strictly depict request initiation flows and privilege isolation (who invokes what and where sensitive credentials reside). Return data flows bidirectionally via HTTP/REST responses and real-time Supabase WebSocket events.",
            costLabel: "Cost",
            stackItens: [
                { layer: "Front-end Interface", tech: "HTML5, Modern CSS & Modular Vanilla JS", cost: "$ 0", reason: "Zero build overhead, instant load on existing managed static hosting" },
                { layer: "Database & Auth", tech: "Supabase (PostgreSQL with RLS + Realtime)", cost: "$ 0", reason: "Free tier with granular per-user security policies and real-time replication" },
                { layer: "Artificial Intelligence", tech: "Google Gemini (Deno/TS Edge Functions)", cost: "$ 0", reason: "Automated fallback across 4 free-tier models with calibrated prompts" },
                { layer: "Automation & Pipelines", tech: "Python, Batch Scripts & Headless Chrome", cost: "$ 0", reason: "Strict hash-based deduplication, data sanitization, and idempotency" },
                { layer: "Versioning & DevOps", tech: "Private GitHub with SemVer & 14 Releases", cost: "$ 0", reason: "Full engineering audit trail with standardized technical changelogs" }
            ],
            principlesHeader: "OPERATIONAL PRINCIPLES",
            principlesTitle: "6 engineering decisions sustaining the operation and preventing failure",
            regrasEngenharia: [
                { num: "01", title: "Quality over raw volume", desc: "The validator rejects any malformed rows; automated snapshots and idempotency make bugs cheap and reversible." },
                { num: "02", title: "Single source of truth", desc: "Brand tone, funnel rules, user roles, and weights in a single JSON; changing rules requires zero complex DB migrations." },
                { num: "03", title: "Domain knowledge as data", desc: "Updating a commercial argument or new spec requires editing a structured JSON, with zero recompiles or redeploys." },
                { num: "04", title: "Honesty as code", desc: "AI is strictly instructed to decline crafting proposals if data is insufficient, emitting explicit validation alerts." },
                { num: "05", title: "Pause rather than improvise", desc: "Data workers pause execution and prompt the human operator on edge cases, preventing database pollution." },
                { num: "06", title: "Fast release cadence", desc: "14 documented micro-versions in 2 days, each recorded in the changelog to ensure full traceability and zero regressions." }
            ],
            ctaBadge: "EXECUTIVE NEXT STEP",
            ctaTitle: "Less abstraction. More traction.",
            ctaSubtitle: "Looking to build a lean B2B qualification engine and custom AI orchestration for your commercial reality?",
            ctaPlaceholder: "Describe your commercial model, average deal size, prospecting bottleneck or company scope to receive an AI diagnostic..."
        }
    },
    zh: {
        nav: {
            experimentos: "精选项目",
            arquitetura: "技术架构",
            fundamentacao: "学术底蕴",
            sandbox: "AI沙盒"
        },
        splash: {
            sub1: "应用人工智能与收益工程实验室。",
            sub2: "减少空谈，专注实效。"
        },
        hero: {
            slide1: {
                title: "AI Profiler",
                description: "结合您的项目需求与我的专业履历，生成量身定制的诊断分析",
                btn: "了解职业履历"
            },
            slide2: {
                title: "Lean Ops",
                description: "零软件成本自研AI销售驾驶舱：自动获客、临床式画像与收入预测。",
                btn: "探索案例研究"
            },
            slide3: {
                title: "AI SDR",
                description: "基于WhatsApp的自主销售Agent，运营成本低于生成收入的1%",
                btn: "即将推出"
            },
            slide4: {
                title: "Executive BI",
                description: "打通媒体投放、实际营收与利润率的真实ROI全链路归因",
                btn: "即将推出"
            },
            slide5: {
                title: "High-Ticket Sales",
                description: "高客单价奢侈品级GTM策略，纯线上销售平均客单价提升33%",
                btn: "即将推出"
            }
        },
        filter: {
            tag: "技术武器库 // 认证与专业背书",
            title: "技术领域\n与实战认证",
            all: "全部",
            aiAuto: "AI与自动化",
            dataBi: "数据与BI",
            midiaCrm: "营销与CRM",
            management: "管理与战略",
            arsenal: [
                { id: 1, title: "Agents and Workflows (智能体与工作流)", text: "自主Agent架构与认知流编排，复杂任务拆解与Tool Calling工具调用，实现端到端业务零摩擦全自动运转。", tag: "OpenAI · 2026年6月" },
                { id: 2, title: "Model Context Protocol: Advanced Topics", text: "大模型与本地数据源及MCP服务器深度集成，多智能体结构化上下文互联与标准化跨模型通信协议。", tag: "Anthropic · 2026年7月" },
                { id: 3, title: "AI Fluency: Framework & Foundations", text: "企业生成式AI实操底座与治理框架，风险评估、偏见消除与合规伦理，大模型商业化落地的战略实施。", tag: "Anthropic · 2026年7月" },
                { id: 4, title: "Java: API消费与数据持久化", text: "HTTP端点深度集成与高并发数据流处理，Web请求校验、JSON结构化解析与企业级文件安全持久化。", tag: "Alura · 2025年6月" },
                { id: 5, title: "Java: 企业级后端应用开发", text: "结构化后端编译与工程化开发，规则处理与计算引擎架构设计，面向自动化流程的坚实软件工程底座。", tag: "Alura · 2025年6月" },
                { id: 6, title: "Java: 集合框架与高并发数据结构", text: "复杂数据集的结构化排序与组织，基于Collections、List和Map的高性能优化与高效算法流处理。", tag: "Alura · 2025年6月" },
                { id: 7, title: "Java: 面向对象架构设计与解耦", text: "基于继承、多态与接口的高内聚低耦合建模，遵循设计模式与Clean Code原则构建可持续演进的业务规则。", tag: "Alura · 2025年6月" },
                { id: 8, title: "Google Tag Manager: 标签架构与埋点", text: "全站追踪与Web遥测数据治理，针对GA4与Google Ads的高级Data Layer数据层部署与标准化事件触发。", tag: "Alura · 2025年8月" },
                { id: 9, title: "数字营销投放: 预算规划与全域ROI", text: "全渠道效果广告实操策略，多触点全链路归因建模，获客成本(CAC)极限优化与高回报预算精细分配。", tag: "Senac SP · 2009年7月" },
                { id: 10, title: "Dinamize CRM: 用户生命周期自动化", text: "自动化客户培育流水线与CRM全周期管理，行为细分与高转化触达，邮件送达率、打开率与互动率双重提升。", tag: "Dinamize · 2025年9月" },
                { id: 11, title: "企业自媒体矩阵: 内容治理与传播", text: "数字化阵地与客户关系触点搭建，企业品牌传播与权威背书分发，技术型专业内容长效运营治理。", tag: "Senac SP · 2011年7月" },
                { id: 12, title: "互动信息架构与数字化内容交互", text: "面向Web的高黏性信息架构与交互式叙事，用户停留时长导向的内容设计与对话式UI体验优化。", tag: "Senac SP · 2011年8月" },
                { id: 13, title: "零售陈列美学与视觉转化架构", text: "精准引导用户注意力的视觉架构体系，触点商品层级规划与购买欲望激发，提升品牌溢价认知。", tag: "Senac SP · 2009年6月" },
                { id: 14, title: "MS Project: 复杂项目路径与风险治理", text: "项目时间线拆解、关键路径依赖与里程碑管控，人力负载动态平衡，前瞻性风险治理与严格SLA交付。", tag: "Senac SP · 2011年2月" },
                { id: 15, title: "创新商业模式与Unit Economics测算", text: "财务建模、经济可行性验证与初期破局，商业价值主张提炼，单客经济模型(Unit Economics)测算与GTM打法。", tag: "Senac SP · 2012年8月" },
                { id: 16, title: "大客户商务谈判与利益博弈", text: "重大商业协议磋商与多方利益相关者协调，聚焦长期商业价值与利润率拓展，破解决策桌上的阻碍。", tag: "Senac SP · 2012年6月" },
                { id: 17, title: "高管高效沟通与团队战略对齐", text: "高层决策对齐中的极简表达与透明度，跨部门协同中的无阻碍推进，消除管理层与执行层之间的信息衰减。", tag: "Senac SP · 2012年3月" },
                { id: 18, title: "C-Level话术框架与受众心智占领", text: "针对不同资历层级的话术分层框架，面向C-Level决策者的价值锚定，构建坚不可摧的商业权威认知。", tag: "Senac SP · 2011年2月" },
                { id: 19, title: "精益企业运营管理与财务治理", text: "现金流精细管控、日常运营规范与治理流程，极简团队架构下的利润率最大化与长远稳健扩张规划。", tag: "Senac SP · 2012年1月" }
            ]
        },
        about: {
            tag: "关于实验室 // 技术严谨与执行力",
            title: "生产环境中的数据架构、人工智能与预测模型。从底层技术验证到流程工程化，实现兼具可预测性与治理效能的业务增长。",
            baseTitle: "实验室背后的学术底蕴",
            baseDesc: "在实验室中，每一个实验都源自扎实的论题：如何将前沿理论转化为实际商业价值？我们深厚的学术底蕴为技术架构提供坚实支撑，将前沿模型转化为落地生产力。",
            formations: [
                { id: 1, title: "MBA: 人工智能、数据科学与大数据", local: "PUCRS (巴西南大河州天主教大学)", period: "2023 - 2024", text: "聚焦前沿数据建模、机器学习预测算法与高并发可扩展大数据架构的企业级硕士研修。" },
                { id: 2, title: "MBA: 数字化转型与商业未来", local: "PUCRS (巴西南大河州天主教大学)", period: "2021 - 2022", text: "专注于颠覆性技术创新、敏捷交付方法论以及企业核心业务与流程深度数字化的全局战略思维。" },
                { id: 3, title: "项目管理专业认证 (PMBOK体系)", local: "SENAC 圣保罗", period: "2018 - 2019", text: "深度研习PMBOK高阶项目管理标准、全生命周期里程碑规划、前瞻性风险管控与高效交付。" },
                { id: 4, title: "广告与市场营销学士后", local: "圣犹达大学 (USJT)", period: "2014 - 2015", text: "GTM全案市场策略构建、消费者决策心理剖析与全渠道360度整合商业营销战役操盘。" },
                { id: 5, title: "数字媒体与前端设计工程", local: "Impacta 科技大学", period: "2008 - 2012", text: "融合人机交互设计(UI/UX)、用户体验工程与高性能前端开发的跨学科技术背景。" }
            ]
        },
        terminal: {
            defaultBadge: "实验项目 05 // 交互式智能体",
            defaultTitle: "将您的商业需求与我的实战履历无缝链接",
            defaultSubtitle: "输入您的项目范围、高管岗位需求或咨询实操案例。系统将实时交叉匹配您的业务诉求与我的实战背景，为您生成专属的上下文深度诊断报告。",
            defaultPlaceholder: "描述您当前的业务瓶颈、粘贴岗位需求或咨询过往标杆案例...",
            attachText: "附件 (PDF/图片/TXT)",
            audioText: "语音",
            runText: "启动AI诊断",
            btnDownload: "下载PDF报告",
            btnWhatsApp: "在WhatsApp上继续沟通",
            readingFile: "正在读取文件...",
            recording: "正在录音...",
            chips: [
                { id: 1, label: "高管职位", text: "您的复合型背景如何胜任营销运营负责人 / RevOps 决策岗？" },
                { id: 2, label: "全球品牌", text: "您曾为微软、辉瑞和强生等全球500强企业主导过哪些重大项目？" },
                { id: 3, label: "业绩逆转", text: "您在Attimo期间是如何实现营收三倍增长并大幅提升客单价的？" },
                { id: 4, label: "精益提效", text: "您是如何搭建15人精益团队实现50人团队交付产出的？" }
            ]
        },
        footer: {
            city: "巴西·雅瓜里乌纳 (Jaguariúna, SP)",
            credits: "灵感源自GOOGLE LABS，16小时内使用ANTIGRAVITY IDE、GEMINI 3.1 PRO、NANO BANANA及OMNI FLASH等API全栈构建。"
        },
        leanOps: {
            deck: {
                badge: "高管汇报简报 // C-LEVEL PITCH",
                skipToCase: "直达完整技术档案",
                slideLabel: "幻灯片",
                ofLabel: "共",
                prevBtn: "上一页",
                nextBtn: "下一页",
                slides: [
                    {
                        tag: "01 // 从被动等待到主动猎寻",
                        title: "等待广告线索是在消耗企业利润。高净值主动猎寻彻底重塑游戏规则。",
                        subtitle: "与其被动等待传统广告表单（往往仅有姓名、邮箱甚至无效电话），自研引擎主动扫描并识别真正能推动业绩增长的企业与关键决策人。在初次触达前，即在单个客户层面完成谈判优劣势推演，并基于真实证据精准匹配理想产品。",
                        kpis: [
                            { label: "销售姿态", val: "主动猎寻", desc: "主动发现具备采购权的战略级企业决策人" },
                            { label: "前置情报", val: "客户级洞察", desc: "触达前即全面掌握商务谈判优劣势与切入点" },
                            { label: "产品契合", val: "精准匹配", desc: "智能交叉比对企业28个核心工业品类目录" }
                        ],
                        image: "/images/cases/lean-ops/cockpit/cockpit-kanban.jpg",
                        imageCaption: "全流程看板式驾驶舱：9阶段管线与加权意向排序"
                    },
                    {
                        tag: "02 // 品牌话术高度对齐与临床式档案",
                        title: "外科手术式标准化：将一线销售员武装为全行业最资深的顾问专家。",
                        subtitle: "销售人员无需在黑暗中摸索猜测或随意临场发挥：系统自动为每个线索生成包含精准诊断、需求假设与高情商破冰话术的临床档案。AI深度赋能一线，确保每一张高客单价战略级商机都能得到顶级水准的专业承接。",
                        kpis: [
                            { label: "触达前临床画像", val: "100% 客户覆盖", desc: "在发起WhatsApp沟通前即掌握完整技术与业务背景" },
                            { label: "品牌声誉护城河", val: "零幻觉风险", desc: "所有判断严格源自公开可溯源的权威证据，拒绝空洞套话" },
                            { label: "对外沟通调性", val: "统一高管级水准", desc: "将最高管理层的行业权威与专业谈吐无缝复制给每位员工" }
                        ],
                        image: "/images/cases/lean-ops/cockpit/cockpit-prontuario.jpg",
                        imageCaption: "AI侦察档案：客户优劣势剖析与定制化产品解决方案"
                    },
                    {
                        tag: "03 // 统计学务实主义与注意力精细化管理",
                        title: "用蒙特卡洛随机模拟的数学确定性，彻底终结凭直觉做销售的时代。",
                        subtitle: "依靠直觉的销售团队往往把宝贵时间浪费在追逐最后回复但成交概率极低的客户身上。驾驶舱在发现矩阵中运行10,000次随机模拟迭代，动态计算成交概率，将团队注意力与精力精准锁定在高概率成单客户上。",
                        kpis: [
                            { label: "加权流水潜力", val: "> R$ 10万+", desc: "基于单客户特征与阶段动态计算的概率化预测" },
                            { label: "随机模拟引擎", val: "10,000 次迭代", desc: "基于蒙特卡洛模型的成交概率数学测算" },
                            { label: "资源聚焦", val: "注意力精益管理", desc: "让资深销售人员的精力严格投入在高净值商机上" }
                        ],
                        image: "/images/cases/lean-ops/cockpit/cockpit-discovery.jpg",
                        imageCaption: "商机发现矩阵与动态成交概率测算，一键调起WhatsApp会话"
                    },
                    {
                        tag: "04 // 漏斗量化优势与首日极速交付",
                        title: "1个工作日全面上线：无需忍受付费广告的缓慢爬坡与高昂沉没成本。",
                        subtitle: "传统模式下企业为平庸线索支付高昂广告费，缺乏武装的销售员需耗费数周才能磕下一个中等订单；而自研引擎仅用1个工作日即沉淀出近700个带临床档案的高质量客户。直接节省23至47周广告投放周期，以及数万雷亚尔的软件与实施年费。",
                        kpis: [
                            { label: "业绩启动速度", val: "1 个工作日", desc: "对比传统广告23至47周的冗长周期（提速99.6%）" },
                            { label: "高净值客户池", val: "~700 家优选客户", desc: "经AI深度清洗与赋能，让销售绝不错失任何关键谈判论点" },
                            { label: "首批有效商机", val: "< 12 小时", desc: "上线当日即产生真实的客户跟进记录与高意向反馈" }
                        ],
                        image: "/images/cases/lean-ops/cockpit/cockpit-bi.jpg",
                        imageCaption: "高管BI数据看板：周度营收、预测与流失的多维度时序追踪"
                    },
                    {
                        tag: "05 // C-LEVEL视角下的营收架构师价值",
                        title: "商业战略视角与软件工程实战能力的罕见交汇：推动业务跨越式增长。",
                        subtitle: "传统分工将画PPT的战略顾问与敲代码的程序员割裂开来。营收架构师（Revenue Engineer）的核心价值在于：既能在董事会层面推演增长模型，又能亲手编写在生产环境运行的代码引擎——48小时内高频交付14个规范版本且零技术债务。",
                        kpis: [
                            { label: "面向CEO与董事会", val: "纯净净利润", desc: "软件零边际成本，以极速敏捷步伐驱动核心业务增长" },
                            { label: "面向CRO与CMO", val: "高转化确定性", desc: "统一沟通语言、临床级谈判智库与不可撼动的专业声誉" },
                            { label: "面向CTO与研发线", val: "48小时交付14版", desc: "语义化版本、幂等性设计、严格Schema约束与模块化整洁架构" }
                        ],
                        image: "/images/cases/lean-ops/cockpit/cockpit-releases.jpg",
                        imageCaption: "驾驶舱内置发布日志：2天内敏捷演进并完备记录14个微版本"
                    },
                    {
                        tag: "06 // 事实胜于雄辩与下一步对话",
                        title: "扎实持久的商业回报，永远建立在严苛可靠的技术工程之上。",
                        subtitle: "上方是面向决策层的核心要点概述。下方为您呈现完整的实证细节：32列数据规范合约、Serverless架构拓扑、交互式蒙特卡洛模拟工具与真实客户临床档案。欢迎深入查阅或预约战略诊断会话。",
                        ctas: {
                            primary: "探索完整技术档案 ↓",
                            whatsapp: "与 Carlos Felipe 沟通 (WhatsApp)",
                            sandbox: "在 AI Profiler 中测试业务场景"
                        },
                        image: "/images/cases/lean-ops/cockpit/cockpit-kanban.jpg",
                        imageCaption: "生产环境中运行的完整商业驾驶舱：从智能获客到加权预测闭环"
                    }
                ]
            },
            heroTitle1: "告别昂贵SaaS：零软件成本",
            heroTitle2: "构建全自研AI商业驾驶舱。",
            heroSubtitle: "如何用自研引擎替代昂贵CRM订阅：自动获客、深度临床式客户建档、品牌语调对话与收入预测，12小时内捕获高价值商机。",
            btnViewArch: "查看引擎架构",
            btnReadThesis: "阅读核心论点",
            kpiTools: "每月软件工具成本",
            kpiToolsSub: "采用Serverless免运维架构与托管免费层",
            kpiLeads: "海量线索沉淀为合格客户",
            kpiLeadsSub: "逐条数据清洗、合规过滤与临床式画像建档",
            kpiTime: "首批高意向商机出现",
            kpiTimeSub: "上线当日即产生跟进历史与真实客户互动",
            kpiForecast: "漏斗加权预测潜力",
            kpiForecastSub: "基于10,000次蒙特卡洛随机模拟的预测分析",
            kpiMedia: "合格获客媒体成本",
            kpiMediaSub: "历史付费获客成本大幅归零",
            sec1Tag: "01 // 背景与行业痛点",
            sec1Title: "传统按席位收费的CRM，附带的往往是根本不理解您业务的通用AI。",
            bottleneckTag: "业务瓶颈",
            bottlenecks: [
                { tag: "瓶颈 01", title: "获客成本高昂且周期冗长", desc: "历史上该企业每个合格线索需花费R$ 25至R$ 150媒体广告费，且每周仅能带来15至30个有效线索。", footer: "点击边际成本过高" },
                { tag: "瓶颈 02", title: "品牌对外发声风格碎片化", desc: "每位销售员回复口吻各不相同。在高端B2B销售中，品牌专业调性是核心竞争力，必须确保全员如同一支精锐作战部队。", footer: "首触摩擦与品牌认知衰减" },
                { tag: "瓶颈 03", title: "销售团队注意力严重分散", desc: "面对表格中数百条线索，业务员习惯性跟进最后回复的人，而非真正具备高客单价潜力的战略客户。", footer: "高价值成单机会流失" }
            ],
            thesisTag: "核心商业论题",
            thesisQuote: "“与其花大钱购买功能平庸的庞大SaaS，不如构建轻量紧凑的自研引擎，精准刺破核心商业增长瓶颈。”",
            thesisPillars: [
                { name: "LeanOps (精益运营)", desc: "极简运动部件。纯静态无Build前端，托管数据库，基础设施终身零成本。" },
                { name: "RevOps (收益工程)", desc: "全链路端到端闭环：从原始公网采集到加权收入预测，全域使用同一套北极星指标。" },
                { name: "MarTech (营销智能)", desc: "大模型深度校准28个产品库，按需精准触发，溯源来源严格可验证。" }
            ],
            sec2Tag: "02 // 从海量原始数据到精准线索",
            sec2Title: "全闭环流水线：采集、数据清洗与加权预测。",
            sec2Desc: "数千条公开原始数据经由层层严格的数据完整性校验，沉淀为约700家具备临床画像的高意向线索。",
            diagram1Header: "图表 01 // 数据清洗架构",
            diagram1Title: "分层式获客与数据清洗漏斗",
            btnExpand: "展开原始图表",
            layerOf: "第 {0} 层 / 共 05 层",
            filterCriteria: "过滤与清洗标准:",
            actionExecuted: "执行的实操动作:",
            funilLayers: [
                { id: "descoberta", level: "01", name: "海量原始发现", volume: "数千条公开记录", badge: "公开扫描", criteria: "公开地图、行业名录、建筑设计榜单以及高端餐饮连锁公开名录。", action: "仅第1批建筑设计事务所即评估超1,100家；第2批次扫描超2,400条原始公开结果。" },
                { id: "tratamento", level: "02", name: "数据清洗与存活校验", volume: "具备有效独立站点的真实企业", badge: "噪音过滤", criteria: "剔除广告代运营机构、失效社交主页、注销吊销企业及停止营业的品牌。", action: "合并重复记录、将连锁分支汇总至统一决策人，剔除55条失效沉睡联系方式。" },
                { id: "enriquecimento", level: "03", name: "已核验官方触点", volume: "官方认证联系渠道", badge: "源头核验", criteria: "仅保留来源URL真实可查的公开合规触点（官方WhatsApp、企业邮箱与前台座机）。", action: "针对合规标准自动清洗文本，标准化沉淀至32列企业级数据模型中。" },
                { id: "prontuario", level: "04", name: "临床式画像建档", volume: "AI深度临床级研读", badge: "高潜资质研判", criteria: "将客户公开历史作品集与工厂的28个产品库交叉比对，提炼专属合作切入点。", action: "诊断核心优势、工程假设、最多推荐3款精准匹配设备并生成首触个性化话术。" },
                { id: "resultado", level: "05", name: "可直接跟进线索", volume: "~700 家高意向企业", badge: "高意向B2B客户", criteria: "仅保留完全值得资深大客户销售顾问投入精力和时间跟进的标杆企业。", action: "沉淀608家高端建筑室内设计事务所 + 89家精选连锁餐饮及奢华酒店集团。" }
            ],
            cycleInteractiveHeader: "交互演示 // 引擎实时运转",
            cycleInteractiveTitle: "闭环流水线的 5 大核心阶段",
            btnViewCycleFull: "查看完整拓扑图",
            validationRulesLabel: "数据校验与合规保障规则:",
            guaranteedOutputLabel: "本阶段确定性产出",
            automatedPipelineLabel: "零人工摩擦的全自动流水线",
            cicloEtapas: [
                { id: 1, step: "01", name: "采集", sub: "/captacao-escritorios", desc: "自主爬虫助手巡检公开注册源，验证企业经营状态，在不触发骚扰的前提下完成数据初审。", rules: ["公开网站与开放名录自动化巡检", "仅抓取公开可验证的合规联络数据", "遇数据冲突时自动挂起并请求人工仲裁"], output: "包含数千条原始线索的 MASTER 总表" },
                { id: 2, step: "02", name: "清洗", sub: "/higienizar-base-prospeccao", desc: "结构化数据归一，彻底消除重复项，将分支机构归并至总部唯一决策人并生成定制首触话术。", rules: ["企业统一税号/名称真实性校验", "按客户体量与画像加权智能排序", "自动撰写针对性两段式破冰沟通文案"], output: "标准化32列规范契约清洗后数据集" },
                { id: 3, step: "03", name: "入库", sub: "/carga-leads", desc: "向Supabase数据库进行幂等性写入，执行前进行必填字段前置校验与快照备份。", rules: ["严格的数据库Schema约束校验", "带有哈希校验的自动化安全备份快照", "增量幂等写入机制（确保永不重复）"], output: "线索成功分配至'待联系'队列" },
                { id: 4, step: "04", name: "推进", sub: "按需AI智能赋能Kanban看板", desc: "9阶段跟进Kanban流水线，销售人员随时调取带上下文的AI助手，精准反驳异议并统一步调。", rules: ["保留最近20条完整上下文沟通记录", "针对商业异议提供Smart Console建议", "智能推荐Pipeline看板的下一步动作"], output: "商机在销售漏斗中高标准有序推进" },
                { id: 5, step: "05", name: "测算", sub: "蒙特卡洛模拟器与BI大屏", desc: "统计学算法执行10,000次随机迭代，精准测算加权收入预测，动态重新对看板进行注意力排序。", rules: ["客户发现矩阵(沟通人、需求、客单价)", "基于每个线索实时计算动态成单率", "支持在驾驶舱KPI卡片上直观联动筛选"], output: "高精度预测性收入与高管注意力分配" }
            ],
            sec3Tag: "03 // 客户的深度临床式画像建档",
            sec3Title: "AI像专业医生诊断患者一样研读客户：病历记录、精准诊断与产品处方。",
            sec3Desc: "摒弃泛泛而谈的模板邮件，AI将客户公开作品集与工厂的28个产品知识库深度交叉，为销售团队提供极具说服力的作战底稿。",
            diagram2Title: "图表 02: 队列中真实潜在客户的临床病历",
            diagram2Sub: "基于公开设计作品数据生成；为保护隐私隐藏联系方式。",
            btnViewDossier: "查看完整画像",
            prontuarioHeader: "深度拆解 // 临床病历的 7 层画像维度",
            layersTitle: "约束AI保持真实诚信的严苛规则",
            layerProntuarioOf: "第 {0} 层 / 共 07 层",
            antiHallucinationRule: "防大模型幻觉安全规则",
            camadasProntuario: [
                { id: "anamnese", title: "病历记录 (Anamnese)", desc: "对客户公开生态进行严密剖析（已交付项目、设计奖项、核心主创履历与官方对外渠道）。", honestyRule: "仅采纳附带公开源URL的数据。若无确凿记录，字段严格保持为空，绝不捏造。" },
                { id: "diagnostico", title: "精准诊断 (Diagnóstico)", desc: "深度交叉比对事务所核心设计风格与潜在的设备选型、工艺及交付瓶颈。", honestyRule: "痛点研判必须附带公开项目硬佐证；否则明确标记为'未经核实信息'。" },
                { id: "hipoteses", title: "工程假设 (Hipóteses)", desc: "为一线销售人员提炼在初次沟通中可抛出的专业探讨切入点（木作工艺、交付工期、定制标准）。", honestyRule: "严格以假设形式表述并锚定在实际案例上，严禁当作既成事实主观臆断。" },
                { id: "indicacao", title: "匹配处方 (Indicação)", desc: "从产品知识库中精准匹配最多3款与该事务所历史项目档次完全契合的高端设备。", honestyRule: "仅在存在明确建筑风格契合时推荐。数据不足时直接输出'资料不足以形成产品推荐'。" },
                { id: "argumento", title: "商业破局点 (Argumento)", desc: "挖掘对该画像决策人最具杀伤力的核心商业价值杠杆（非标定制灵活性、合规验收资质等）。", honestyRule: "必须严格选自高层批准的标准化商务策略矩阵，严禁AI自主随意发挥话术。" },
                { id: "prioridade", title: "评分与优先级 (Score)", desc: "基于项目预期预算体量与设计师采购决策权重，划分为'高'、'中高'或'中'。", honestyRule: "在画像中采用透明可解释的数学逻辑，杜绝任何无法溯源的黑盒打分。" },
                { id: "mensagem", title: "破冰话术 (Primeira Mensagem)", desc: "两段式高水准破冰文案：真诚探讨客户真实代表作 + 适时亮出品牌核心实力与工程背书。", honestyRule: "对调研信息来源保持绝对透明，严禁空洞奉承与无价值的推销套话。" }
            ],
            sec4Tag: "04 // 预测性收入与投资回报率",
            sec4Title: "基于蒙特卡洛模拟的注意力分配与付费广告成本对照。",
            sec4Desc: "通过10,000次随机数学迭代，基于成单概率重新排序Kanban看板，杜绝在冷淡线索上空耗人力。",
            mcTitle: "蒙特卡洛随机模拟预测",
            mcDesc: "选择漏斗不同阶段，实时查看引擎计算的加权概率与预期收益：",
            monteCarloPhases: [
                { phase: "待联系 (Aguardando)", mult: "1.0x", prob: "12%", desc: "线索已入库并生成临床画像，尚无人工介入。", forecast: "R$ 14,400" },
                { phase: "已发送触达 (Abordagem)", mult: "1.2x", prob: "28%", desc: "已发出首封个性化破冰信件，直接引用其代表作。", forecast: "R$ 33,600" },
                { phase: "对话进行中 (Conversa)", mult: "1.5x", prob: "46%", desc: "决策人已回复，Smart Console正辅助专业作答。", forecast: "R$ 55,200" },
                { phase: "意向确认 (Interesse)", mult: "1.8x", prob: "74%", desc: "已明确锁定在建住宅或商业餐饮工装采购需求。", forecast: "R$ 88,800" },
                { phase: "方案深化/成单 (Proposta)", mult: "2.0x", prob: "91%", desc: "非标选型方案已确认，商务条款进入签约审批流。", forecast: "R$ 109,200" }
            ],
            mediaCompTitle: "历史付费广告投放 vs 自研引擎",
            mediaCompDesc: "针对约700家合格线索的数量级收益对照：",
            timeTitle: "获客与资质审核耗时",
            timeHighlight: "提效 99.6%",
            costTitle: "获客与软件总支出",
            costHighlight: "成本全额节约",
            mediaLabel: "广告投放 + CRM SaaS软件费 (部署+订阅)",
            mediaSubDetail: "(广告投放 R$ 17.5k-105k + CRM SaaS实施与订阅 R$ 28k-75k)",
            motorLabel: "Lean Ops自研引擎",
            motorValue: "R$ 0 广告费与 R$ 0 软件订阅费",
            comparisonNote: "* 数量级对照基准：综合考量历史付费广告投放与商业CRM SaaS订阅（含实施部署费及合同期软件年费）对比自研Serverless引擎。",
            sec5Tag: "05 // 软件工程核心决策",
            sec5Title: "如何通过优秀的软件架构彻底免除SaaS按人头收费的沉重负担。",
            diagram3Title: "图表 03: 商业驾驶舱技术拓扑架构",
            diagram3Sub: "权限控制边界与执行流隔离",
            btnViewArchFull: "查看完整架构",
            archNote: "工程技术批注：拓扑图中的箭头严格代表请求的发起方向与权限边界（谁触发什么、敏感Key保存在何处）。数据流则通过HTTP/REST响应及Supabase实时WebSocket双向高速流转。",
            costLabel: "成本",
            stackItens: [
                { layer: "前端界面层", tech: "HTML5, 现代CSS与原生Vanilla JS模块化", cost: "R$ 0", reason: "零构建负担(Zero-build)，在现有托管上秒级即时加载" },
                { layer: "数据库与认证层", tech: "Supabase (PostgreSQL + RLS + 实时订阅)", cost: "R$ 0", reason: "利用免费层实现基于行级安全策略(RLS)的颗粒化权限与毫秒级推送" },
                { layer: "人工智能计算层", tech: "Google Gemini (Deno/TS Edge Functions)", cost: "R$ 0", reason: "在4个免费模型间自动热切换降级，精细调教专属Prompt" },
                { layer: "自动化流水线", tech: "Python, 批处理脚本与Headless Chrome", cost: "R$ 0", reason: "基于哈希的去重校验、自动化数据清洗与幂等性保障" },
                { layer: "版本管理与DevOps", tech: "私有GitHub仓库 + 语义化版本 (14次Release)", cost: "R$ 0", reason: "全链路工程化变更记录，严格遵循标准化架构文档" }
            ],
            principlesHeader: "精益工程原则",
            principlesTitle: "保障系统高可用与抗风险的 6 项工程决策",
            regrasEngenharia: [
                { num: "01", title: "质量优于数量", desc: "校验器坚决拦截任何格式有误的脏数据；前置快照与幂等机制让容错与回滚极度廉价。" },
                { num: "02", title: "单一配置源", desc: "品牌、漏斗、画像与权重收敛于单个配置文件；调整规则无须执行复杂的数据库迁移。" },
                { num: "03", title: "业务知识数据化", desc: "更新商业话术或新增产品规格只需编辑结构化JSON，无须重新编译或重新发版部署。" },
                { num: "04", title: "将诚实写入代码", desc: "大模型被严格限制：信息不足时拒绝推销，并主动抛出显式的核验警告标签。" },
                { num: "05", title: "遇疑挂起而非胡编", desc: "数据清洗遇到边缘歧义时立即暂停并通知人工裁决，杜绝垃圾数据污染生产底表。" },
                { num: "06", title: "极速交付节奏", desc: "2天内完成14个微版本演进，每一次迭代均记录至Changelog，确保全链路可溯源零回退。" }
            ],
            ctaBadge: "下一步行动",
            ctaTitle: "减少空谈，专注实效。",
            ctaSubtitle: "想为您的企业搭建轻量化B2B智能获客与AI工作流引擎吗？",
            ctaPlaceholder: "请简述您的商业模式、客单价、销售拓客瓶颈或公司需求，即刻获取专属AI诊断..."
        }
    }
};
