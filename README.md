# C.F. Carreira // AI Profiler & Lean Ops Portfolio

Criei um ecossistema para deixar de ser um simples portfólio digital e ser em uma máquina autônoma de geração e qualificação de leads B2B. 

Fundi engenharia de software, inteligência artificial e psicologia de vendas em um único fluxo.

Abaixo está a radiografia completa da nossa infraestrutura, dividida pelos quatro pilares fundamentais do projeto, evidenciando o como e o porquê de cada decisão.

## 1. Arquitetura Serverless e Integrações (O Motor) 
Construímos um backend totalmente desacoplado do site (Next.js), garantindo que a sua aplicação front-end permaneça levíssima e imune a travamentos.

* **A Esteira (Make.com):** Atua como o maestro da operação, recebendo o texto via Webhook e roteando os dados. A escolha pelo Make garantiu custo zero de infraestrutura e extrema facilidade de manutenção.
* **O Cérebro (Google Gemini):** Após testarmos um modelo superestruturado (v5.0), fizemos um rollback estratégico para a versão persuasiva (v4.0). A IA não cospe apenas dados, ela argumenta, contorna objeções (como a falta de experiência em um setor específico) e cria pontes entre o seu histórico e a dor do cliente.
* **Telemetria Avançada (Supabase):** Posicionamos o banco de dados no final da esteira. Em vez de apenas contar acessos, o Supabase grava a requisição do usuário e a resposta exata da IA. Isso transforma o banco em uma ferramenta de Business Intelligence e Quality Assurance, permitindo que você audite o que o mercado está buscando e como a IA está vendendo o seu perfil.

## 2. Eficiência Operacional e Segurança (Lean Ops)
A premissa foi manter o teto de gastos rigorosamente controlado, transferindo o trabalho pesado para o computador do usuário final.

* **Extração Client-Side (Tesseract & PDF.js):** Em vez de enviar PDFs ou imagens pesadas para a nuvem, instalamos motores de leitura ótica (OCR) no próprio navegador do usuário. O celular ou PC do recrutador faz o processamento pesado e envia apenas um texto leve (bytes) para o seu webhook. Isso blinda o seu limite de banda no Make.com e elimina custos com APIs de visão computacional.
* **Sanitização de Dados:** Implementamos um filtro invisível no front-end que remove quebras de linha e caracteres especiais (como aspas duplas) antes do envio, evitando que usuários quebrem o JSON do backend ao colar textos mal formatados.

## 3. UX/UI e Fricção Zero (A Experiência C-Level)
O design foi pensado para dois perfis de altíssima exigência: headhunters sobrecarregados e executivos sem tempo.

* **Ditado por Voz (Web Speech API):** Reduzimos o atrito a zero. O usuário não precisa digitar um desafio complexo; ele clica no microfone e fala. O uso da API nativa dos navegadores evitou a dependência de serviços pagos de transcrição.
* **Contingência Comercial (Fail-Safe PLG):** Se o Make.com falhar ou atingir o limite mensal de operações, a tela não congela. O sistema intercepta o erro (CORS ou Timeout) e exibe a tela de "Limite de Lean Ops Atingido", transformando uma falha técnica em um gatilho de escassez e exclusividade, direcionando o lead imediatamente para o seu WhatsApp.

## 4. Engenharia de Documentos (O Template Fantasma)
Resolvemos o problema crônico de exportação de PDFs em aplicações web (onde o documento fica parecendo um "print" distorcido da tela).

* **Canvas A4 Híbrido:** Criamos uma div oculta perfeitamente dimensionada para o formato A4 (794px). Ela absorve a análise dinâmica e os cases gerados pela IA, combinando-os com uma base estática inegociável (seus MBAs na PUCRS, certificações e idiomas).  
* **Design Executivo:** O uso de alinhamento justificado e a precisão das margens internas (p-14) via Tailwind garantiram que o documento não sofresse cortes na impressão.
* **Mitigação do Viés de "Overqualified":** Substituímos o título agressivo de C-Level no cabeçalho por um termo guarda-chuva estratégico (Estrategista de Negócios, GTM & Operações de Tecnologia). Isso garante que o documento seja digerido sem atritos por qualquer sistema ATS (Gupy, Kenoby) ou recrutador, servindo perfeitamente desde posições de gestão operacional até cadeiras de diretoria.  

Temos em mãos um produto polido, blindado contra falhas comuns de infraestrutura e otimizado para conversão de alto impacto. O código está pronto para a compilação final e o deploy em produção.
