# Padrões Mandatórios para Páginas de Case Study

Ao conceber, criar ou editar qualquer página de Case Study no portfólio (ex: `/lean-ops`, `/ai-sdr`, `/executive-bi`, etc.), siga impreterivelmente estas diretrizes:

## 1. Apresentação Executiva Full-Height (`100dvh`)
- O componente `ExecutiveDeck` no topo deve caber perfeitamente na viewport vertical em qualquer resolução de desktop/laptop (`h-[100dvh] max-h-[100dvh] overflow-hidden flex flex-col justify-between`).
- A barra inferior de controles de navegação deve ter `shrink-0` e permanecer sempre visível e ancorada na base da tela, sem ser encoberta pela barra de tarefas do sistema operacional.
- A transição entre lâminas deve ser suave e não pode causar variações verticais de altura ou deslocamentos na barra de controles.

## 2. Bloqueio de Rolagem até o Fechamento
- A rolagem vertical da página deve permanecer travada no deck até o usuário atingir a última lâmina ou clicar em "Pular para o Dossiê Técnico Completo" / "Case Study Completo".
- O mousewheel/touchpad deve avançar/recuar os slides sequencialmente com debounce adequado (450ms).

## 3. Responsividade Mobile (< lg)
- Telas/mockups de interface ficam sempre ocultos em dispositivos móveis (`hidden lg:flex`).
- Cada lâmina é exibida em duas etapas verticais: primeiro o bloco de texto (tag, título, descrição) em largura total e abaixo os boxes de apoio empilhados verticalmente (`flex flex-col gap-2`).

## 4. Estrutura Editorial em Duas Camadas & Contextualização
- Manter o contraste intencional entre o Pitch Deck C-Level (Dark / `100dvh`) e o Dossiê Editorial Aprofundado (Light / `#F5F3ED`).
- Os 6 slides do deck e as seções editoriais do dossiê devem usar o Lean Ops como referência de estrutura, stack, interação e entrega, mas **todo o conteúdo (gargalos, métricas, diagramas, simulações e copy) deve ser 100% contextualizado ao case vigente**.

## 5. Transparência e Neutralidade de Dados
- Jamais expor dados sensíveis, credenciais de produção, segredos de API ou domínios reais de clientes nos diagramas e prints de tela. Utilizar sempre identificadores genéricos (`domain.com.br`, `usr1, usr2`).

## 6. Paridade Trilíngue Obrigatória (`PT`, `EN`, `ZH`)
- Toda alteração editorial deve contemplar os três dicionários (`pt`, `en` e `zh`) em `app/context/translations.ts`.
- O balanceamento textual deve ser verificado para garantir que a tipografia não quebre layouts ou grades em nenhum dos três idiomas.
