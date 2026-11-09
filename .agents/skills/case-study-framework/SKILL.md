---
name: case-study-framework
description: >-
  Guia e blueprint universal para conceber, desenhar e implementar páginas de Case Study
  no portfólio (ex: Lean Ops, AI SDR, Executive BI, High-Ticket Sales). Utiliza o modelo
  de duas camadas: Executive Pitch Deck C-Level (100dvh) + Dossiê Editorial Aprofundado.
---

# Framework de Engenharia & Storytelling para Case Studies

Este blueprint codifica a arquitetura, metodologia de storytelling, padrões de design, interatividade e engenharia de software validados no case **Lean Ops**, servindo como modelo canônico para todos os novos cases do portfólio.

Toda página de case study é dividida em duas camadas complementares:
1. **Camada 0: Executive Pitch Deck C-Level (Dark / `100dvh`)**: Síntese executiva focada em geração de receita, agilidade, governança e valor estratégico para tomada de decisão (CEOs, CROs, CMOs, CTOs, RH e Headhunters).
2. **Camadas 1 a 6: Dossiê Editorial & Engenharia Rigorosa (Light / `#F5F3ED`)**: Comprovação empírica, topologia de arquitetura, contratos de dados, diagramas interativos, simulações matemáticas e sandbox funcional.

---

## FASE 1: Concepção da Narrativa Executiva (O Pitch Deck de 6 Lâminas)

> [!IMPORTANT]
> Os tópicos abordados devem ser rigorosamente contextualizados ao problema real do case em questão. Não copie o conteúdo do Lean Ops mecanicamente; aplique o **arquétipo funcional** de cada slide à realidade do novo case.

### Arquétipo Funcional dos 6 Slides:

1. **Lâmina 01 // Ruptura do Status Quo & Mudança de Paradigma**:
   - **Objetivo**: Confrontar a postura reativa, cara ou ineficiente padrão do mercado e introduzir a abordagem ativa/proprietária desenhada para esse desafio.
   - **Estrutura**: Tag de categoria, Título de alto impacto, Subtítulo contextual, 3 KPIs de suporte e Mockup real da interface central (visível em desktop).

2. **Lâmina 02 // Homogeneidade Operacional & Governança de Qualidade**:
   - **Objetivo**: Demonstrar como a solução blinda a operação contra inconsistências, erros humanos ou alucinações de IA, elevando todo o time ao padrão de atendimento da diretoria.
   - **Estrutura**: Tag, Título, Subtítulo, 3 KPIs e Mockup da ferramenta operacional de linha de frente.

3. **Lâmina 03 // Inteligência, Modelagem ou Rigor Matemático**:
   - **Objetivo**: Provar que o projeto substitui o "achismo" ou a intuição descalibrada por previsibilidade estatística, algoritmos probabilísticos ou regras determinísticas robustas.
   - **Estrutura**: Tag, Título, Subtítulo, 3 KPIs e Mockup da esteira analítica/preditiva.

4. **Lâmina 04 // Tração Quantitativa, Velocidade & Impacto Financeiro**:
   - **Objetivo**: Apresentar números incontestáveis de ganho de eficiência: velocidade de rollout, horas economizadas, redução de custos de software/mídia e volume de oportunidades qualificadas.
   - **Estrutura**: Tag, Título, Subtítulo, 3 KPIs comparativos e Mockup do dashboard executivo/BI.

5. **Lâmina 05 // A Visão C-Level do Especialista (Revenue Engineer)**:
   - **Objetivo**: Articular o valor estratégico do perfil interdisciplinar — a capacidade rara de sentar com o conselho para planejar a estratégia de receita e codificar a solução técnica em produção com zero débito técnico.
   - **Estrutura**: Tag, Título, Subtítulo, 3 KPIs categorizados (ex: Para CEOs/Boards, CROs/CMOs e CTOs/Engenharia) e Mockup de changelog ou governança.

6. **Lâmina 06 // A Prova dos Fatos & Próximo Passo**:
   - **Objetivo**: Conclusão da síntese executiva e convite para aprofundamento técnico.
   - **CTAs Exclusivos**:
     - Primário: `Case Study Completo ↓` (Scroll suave para o dossiê `#diagnostico`)
     - Secundário: `Continuar no WhatsApp` (Link direto minimalista)
     - *Regra: Sem botões concorrentes ou chips nesta etapa de fechamento do deck.*

---

## FASE 2: Engenharia do Componente `ExecutiveDeck.tsx`

### Regras Estritas de Viewport e Layout (Estabilidade em Laptops):
- **Container**: `h-[100dvh] max-h-[100dvh] overflow-hidden flex flex-col justify-between`.
- **Cabeçalho (Topo)**: `shrink-0 pt-16 sm:pt-20 lg:pt-20 pb-2`. Badge C-Level pulsante + Botão "Pular para o Dossiê Técnico Completo ↓" + Barra segmentada de progresso dos 6 slides.
- **Área Central**: `flex-1 min-h-0 flex items-center justify-center my-auto py-2`. O uso de `min-h-0` no flexbox é mandatório para permitir shrink sem estouro em telas 1366x768 ou 1080p escaladas.
- **Tipografia Fluida**:
  - Títulos: `text-[clamp(19px,2.2vw,32px)] leading-[1.16]`
  - Subtítulos: `text-[clamp(12px,1.05vw,15px)] leading-[1.48]`
- **Mockups de Interface (Desktop)**: Limitados em `max-h-[32vh] lg:max-h-[38vh] aspect-[16/10]` com legenda inferior e pill `● LIVE`.
- **Barra de Navegação Inferior**: Fixada na base da viewport com `shrink-0`, contendo contador `SLIDE 01 DE 06`, atalhos de teclado e botões `<` e `>`. Nunca pode ser encoberta pela barra de tarefas do Windows.

### Regras Mobile (< lg):
1. **Ocultação de Imagens**: Todas as capturas de tela/mockups são ocultadas em telas menores (`hidden lg:flex`).
2. **Divisão em 2 Blocos Verticais**:
   - **Bloco 1 (Texto)**: Tag, Título e Subtítulo/Texto de apoio em largura total.
   - **Bloco 2 (Boxes de Apoio)**: Os 3 boxes listados verticalmente (`flex flex-col gap-2`), contendo label, valor destacado e descrição concisa.

### Regras de Navegação e Scroll Lock:
- Ao acessar a página, o scroll vertical da página fica travado (`document.body.style.overflow = 'hidden'`).
- A roda do mouse (mousewheel) ou touchpad avança/recua os slides de 1 a 6 com debounce (450ms).
- A rolagem vertical da página para o restante do case study é **destravada automaticamente** quando o usuário atinge o Slide 6 ou aciona o botão de pular para o dossiê.

---

## FASE 3: Dossiê Editorial & Engenharia Rigorosa (Light Section: `#F5F3ED`)

A seção editorial aprofunda o rigor técnico e a comprovação empírica, mantendo a harmonia visual:

1. **Cenário e Provocação (Os 3 Gargalos Estruturais)**:
   - 3 gargalos contextuais do setor específico do case.
   - Os 3 Pilares Metodológicos da tese operacional.

2. **Diagrama 01: Funil / Pipeline de Filtragem em Camadas**:
   - Mapeamento das camadas de transformação de dados/processos.
   - Camadas interativas com Critério de Filtragem e Ação Operacional Executada.
   - Modal com botão "Expandir Imagem Original" para inspeção vetorial/SVG.

3. **Ciclo Operacional do Motor em Etapas Interativas**:
   - Decomposição das fases operacionais (ex: Captar, Processar, Orquestrar, Entregar, Medir).
   - Regras de validação, integridade e saída garantida de cada etapa.

4. **Anatomia do Objeto Central & Regras de Blindagem**:
   - Detalhamento do artefato central do case (ex: Prontuário Clínico, Prompt Chained, Pipeline RAG, Modelo Estocástico).
   - Regras explícitas de blindagem contra erros e garantia de auditoria.

5. **Modelagem Matemática / Simulação & Comparativo Financeiro Head-to-Head**:
   - Simulação interativa baseada em variáveis reais da operação.
   - Comparativo quantitativo transparente: Custo e tempo da abordagem convencional (Mídia + Licenças SaaS + Setup) vs. Motor proprietário a custo gerenciado.

6. **Diagrama 03: Arquitetura Técnica & Isolamento de Permissões**:
   - Topologia de segurança, bordas de execução e proteção de credenciais.
   - Tabela de Stack Tecnológica detalhando camadas, tecnologias adotadas, custo mensal e justificativa de arquitetura limpa.
   - Os 6 Princípios de Engenharia Enxuta aplicados ao case.

7. **Próximo Passo Executivo & Sandbox Funcional**:
   - Terminal sandbox funcional com prompt contextualizado à dor de negócio do case.
   - Background translúcido integrado com hover interativo.
   - Botão circular minimalista de WhatsApp para contato direto com Carlos Felipe.

---

## FASE 4: Governança de Dados Sensíveis & Paridade Trilíngue (i18n)

- **Sanitização Universal**: Nomes de clientes reais, domínios corporativos e chaves de API devem ser estritamente neutralizados (ex: `domain.com.br`, `usr1, usr2`, chaves genéricas).
- **Paridade Trilíngue Obrigatória (`PT`, `EN`, `ZH`)**:
  - Toda chave de tradução em `translations.ts` deve existir em Português, Inglês e Chinês Simplificado.
  - O balanceamento de quebra de linhas e dimensões deve ser testado nos 3 idiomas para não quebrar a proporção do grid em nenhuma resolução.
