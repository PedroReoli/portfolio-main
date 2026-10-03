# 📋 TODO & Roadmap — Pedro Lucas Portfolio

Este documento rastreia as entregas, refatorações, melhorias de UI/UX e próximos passos do portfólio profissional de **Pedro Lucas Reis** (`pedroreoli-portfolio`).

---

## ✅ Entregas Concluídas

### 🚀 Hero Section & Perfil Técnico
- [x] Atualização da bio oficial com foco em 4 anos de experiência, ERPs corporativos, produtos digitais e plataformas SaaS.
- [x] Criação de 6 cards de métricas e destaques técnicos de alta densidade:
  - `10+ Produtos` (Produtos Digitais em Produção)
  - `20+ Empresas` (Organizações Atendidas)
  - `500+ Comp.` (Design System Unificado)
  - `-70% Tempo` (Redução no Ciclo de Dev)
  - `-40% Load` (Otimização de Performance)
  - `30+ Alunos` (Mentorados em Tecnologia & IA)
- [x] Foto de perfil expandida (`lg:w-72 lg:h-72`) com proporção otimizada e badge de senioridade.
- [x] Fileira única de badges com ícones oficiais de stack (`TypeScript`, `React`, `Next.js`, `Node.js`, `PostgreSQL`).

### 📦 Seção de Projetos & Catálogo
- [x] Remoção da barra de filtros de categorias para layout mais limpo e direto.
- [x] Redução para 2 métricas de alto impacto por card de projeto.
- [x] Implementação do modal/flyout flutuante lateral (`z-50`) no botão **"Ver Arquitetura"**, sem deformar o card nem a grade.
- [x] Ocultação temporária dos projetos: *Propose SaaS*, *Domus — Loog Platform*, *DomusDev & Ecossistema Digital*, *Gerador de Propostas Autocom3* e *Portal Contábil ERP*.
- [x] Manutenção e destaque dos projetos emblemáticos ativos (*Reoli AI*, *Autocom3*, *Fala Atípica*, etc.).

### 💼 Seção de Experiências Profissionais
- [x] Conversão da visualização para estágio fixo (*sticky scroll stage*) com fluxo horizontal de transição de cards.
- [x] Remoção da barra redundante de botões das empresas.
- [x] Correção da experiência corporativa para **EvaTech** (parceria UniFOA & SEBRAE).
- [x] Padronização e síntese de todos os textos de entregas no padrão de alta densidade técnica (padrão Autocom3 / LinkedIn).

### 🎨 Design System, Atmosfera & Navegação
- [x] Modularização completa do CSS em `src/styles/` (`tokens.css`, `typography.css`, `buttons.css`, `cards.css`, `navigation.css`).
- [x] Dual-State Navbar: transição suave entre o topo aberto e a pílula compacta flutuante com WhatsApp e links rápidos.
- [x] Floating Section Nav (Sumário Lateral Direito): tema Dark Zinc / Obsidian com tooltips exclusivos no hover individual e indicador de seção ativa sincronizado.
- [x] Harmonização do Rodapé (`GitHubFooter.tsx`): remoção dos tons azuis e alinhamento com a paleta monocromática Dark Zinc.
- [x] Animações atmosféricas com aceleração suave e blur-in nos componentes.

---

## ⏳ Próximos Passos & Backlog

### 🌟 Novas Seções & Expansões
- [ ] **Revisão e reativação seletiva dos projetos ocultados** conforme novos cases forem redigidos.
- [ ] **Artigos Técnicos / Blog:** Conectar/renderizar pré-visualização de artigos e posts técnicos.
- [ ] **Depoimentos & Recomendações:** Espaço para feedbacks de clientes, gestores e mentorados.

### ⚡ Otimização & Performance
- [ ] Atualização de pacotes e banco do Browserslist (`npx update-browserslist-db@latest`).
- [ ] Geração de OpenGraph cards dinâmicos para redes sociais (LinkedIn / Twitter Preview).
- [ ] Otimização de WebP/AVIF para todas as imagens da pasta `public/` e `src/assets/`.

### 🌐 Internacionalização (i18n)
- [ ] Sincronização contínua entre `portfolio.ts` e `portfolio.en.ts`.
- [ ] Persistência da preferência de idioma no `localStorage`.
