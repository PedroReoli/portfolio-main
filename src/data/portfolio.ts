export const profile = {
  name: "Pedro Lucas Reis",
  role: "Full Stack Software Engineer",
  tagline: "Frontend Architecture • APIs • Cloud • AI Engineering",
  email: "pedrosousa2160@gmail.com",
  phoneLabel: "+55 24 99326-4040",
  phoneHref: "https://wa.me/5524993264040",
  location: "Volta Redonda, RJ | Remoto ou Híbrido",
  website: "https://pedroreis.vercel.app/",
  linkedin: "https://www.linkedin.com/in/pedro-lucas-reis-a93945171",
  github: "https://github.com/PedroReoli",
  summary: [
    "Full Stack Software Engineer com 4 anos de experiência prática na arquitetura e desenvolvimento de ecossistemas corporativos, ERPs, plataformas SaaS multi-tenant e aplicações de alta escala.",
    "Especialista em TypeScript, React, Next.js, Node.js, NestJS e PostgreSQL, com forte domínio de Design Systems escaláveis (500+ componentes), otimização de performance web (Lighthouse ~100) e engenharia de IA aplicada ao fluxo de entrega.",
  ],
} as const

export const blogPosts = [] as const

export const projectsLabels = {
  kicker: "Projetos Selecionados",
  title1: "PROJETOS",
  title2: "TÉCNICOS",
  details: "Detalhes",
  visit: "Acessar projeto",
  stack: "Tecnologias",
  features: "Entregas principais",
  metrics: "Indicadores",
  close: "Fechar",
  all: "Todos",
  types: {
    site: "Web",
    erp: "ERP",
    saas: "SaaS",
    mobile: "Mobile",
    internal: "Interno",
    ai: "IA / Automação",
  },
} as const

export const highlights = [
  {
    label: "Experiência",
    value: "4+",
    suffix: "anos",
    description: "SaaS, ERPs corporativos, plataformas web e IA aplicada",
  },
  {
    label: "Produtos",
    value: "10+",
    suffix: "em produção",
    description: "Soluções de alto impacto operando diariamente",
  },
  {
    label: "Design System",
    value: "500+",
    suffix: "componentes",
    description: "Biblioteca reutilizável que reduz o tempo de dev em 70%",
  },
] as const

export const metricsData = [
  {
    id: "components",
    label: "Componentes Reutilizáveis",
    value: "500+",
    sub: "Design System Corporativo Unificado",
    color: "from-[#1d68f2] to-[#00d4ff]",
    borderColor: "rgba(29, 104, 242, 0.4)",
    highlight: "-70% no tempo de criação de novas telas",
  },
  {
    id: "dev-reduction",
    label: "Redução no Ciclo de Dev",
    value: "-70%",
    sub: "Eficiência de Engenharia & Padrões",
    color: "from-[#10b981] to-[#34d399]",
    borderColor: "rgba(16, 185, 129, 0.4)",
    highlight: "Padronização de tokens, hooks e fluxos modulares",
  },
  {
    id: "products",
    label: "Produtos em Produção",
    value: "10+",
    sub: "SaaS, ERPs e Ferramentas B2B",
    color: "from-[#f59e0b] to-[#fbbf24]",
    borderColor: "rgba(245, 158, 11, 0.4)",
    highlight: "Sistemas corporativos utilizados diariamente",
  },
  {
    id: "erp-pages",
    label: "Páginas & Módulos ERP",
    value: "100+",
    sub: "Ecossistema Corporativo Web",
    color: "from-[#1d68f2] to-[#60a5fa]",
    borderColor: "rgba(29, 104, 242, 0.4)",
    highlight: "Autenticação RBAC, relatórios e dashboards",
  },
  {
    id: "token-economy",
    label: "Economia de Tokens IA",
    value: "92.2%",
    sub: "Achilles CDP Agent (AXTree Engine)",
    color: "from-[#8b5cf6] to-[#c084fc]",
    borderColor: "rgba(139, 92, 246, 0.4)",
    highlight: "Redução de 80.000 para < 2.000 tokens por página",
  },
  {
    id: "lighthouse",
    label: "Pontuação Lighthouse",
    value: "100",
    sub: "Performance, SEO, A11y & Best Practices",
    color: "from-[#10b981] to-[#06b6d4]",
    borderColor: "rgba(16, 185, 129, 0.4)",
    highlight: "Aplicações otimizadas com Core Web Vitals perfeitos",
  },
  {
    id: "organizations",
    label: "Organizações Atendidas",
    value: "20+",
    sub: "Empresas Ativas na Plataforma",
    color: "from-[#00d4ff] to-[#38bdf8]",
    borderColor: "rgba(0, 212, 255, 0.4)",
    highlight: "Gestão financeira, fiscal e operacional multi-tenant",
  },
  {
    id: "mentees",
    label: "Alunos & Mentorados",
    value: "30+",
    sub: "Inclusão Digital & IA Aplicada",
    color: "from-[#ec4899] to-[#f43f5e]",
    borderColor: "rgba(236, 72, 153, 0.4)",
    highlight: "Capacitação em desenvolvimento e IA (EvaTech / Sebrae)",
  },
] as const

export const skills = [
  {
    category: "Frontend Architecture",
    items: [
      { name: "React & Next.js", icon: "SiReact", usage: "App Router, SSR, Server Actions, hidratação seletiva e alta performance." },
      { name: "TypeScript", icon: "SiTypescript", usage: "Tipagem estrita de contratos, componentes, APIs e domínios corporativos." },
      { name: "Design Systems", icon: "FiLayers", usage: "500+ componentes acessíveis com Tailwind CSS, Radix UI e tokens semânticos." },
      { name: "Tailwind CSS & CSS", icon: "SiTailwindcss", usage: "Design tokens, responsividade fluida, microinterações e dark mode." },
      { name: "Framer Motion", icon: "SiFramer", usage: "Microinterações de alto impacto, transições suaves e animações tech." },
      { name: "React Query & Zustand", icon: "SiReactquery", usage: "Gerenciamento de estado de servidor, cache, invalidação e optimistic UI." },
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      { name: "Node.js & NestJS", icon: "SiNodedotjs", usage: "APIs REST corporativas, arquitetura em camadas e microsserviços." },
      { name: "Fastify & Express", icon: "SiExpress", usage: "Serviços de baixa latência, middlewares, autenticação JWT e rotas seguras." },
      { name: "C# & ASP.NET", icon: "SiDotnet", usage: "Integração e sustentação de serviços conectados a ecossistemas ERP legados." },
      { name: "Electron & Tauri", icon: "SiTauri", usage: "Aplicações desktop de nível industrial (Flagship Organon v6.23.2)." },
      { name: "Webhooks & Event-Driven", icon: "SiOpenapiinitiative", usage: "Pipelines de eventos, mensageria e integrações entre sistemas corporativos." },
      { name: "Autenticação & RBAC", icon: "FiShield", usage: "Controle de permissões granular, sessões seguras e multi-tenancy." },
    ],
  },
  {
    category: "Bancos de Dados & Cloud",
    items: [
      { name: "PostgreSQL", icon: "SiPostgresql", usage: "Modelagem relacional, migrations, índices, queries otimizadas e procedures." },
      { name: "Supabase & SQLite", icon: "SiSupabase", usage: "Arquitetura offline-first local (SQLite) e infraestrutura serverless." },
      { name: "SQL Server & MySQL", icon: "FiDatabase", usage: "Bases transacionais de ERPs e relatórios de inteligência de negócios." },
      { name: "AWS & Docker", icon: "FiCloud", usage: "API Gateway, S3 Storage, conteinerização e pipelines de deploy." },
      { name: "Git & CI/CD", icon: "SiGithub", usage: "Governança de repositórios, automação de testes e entrega contínua." },
      { name: "Web Scraping & Puppeteer", icon: "SiPuppeteer", usage: "Automação de navegação, extração de dados e fluxos SFTP remotos." },
    ],
  },
  {
    category: "Engenharia de IA & Inovação",
    items: [
      { name: "Achilles CDP Agent", icon: "FiCpu", usage: "Agente de IA autônomo via Chrome DevTools Protocol, AXTree e servidor MCP." },
      { name: "Whisper & LLMs", icon: "SiOpenai", usage: "Transcrição em tempo real e processamento de linguagem natural integrado a produtos." },
      { name: "Claude Code & Skills", icon: "SiAnthropic", usage: "ReoliOS CLI com mais de 75 skills especializadas para engenharia e automação." },
      { name: "Prompt & Context Design", icon: "FiCode", usage: "Estruturas de contexto semântico e pipelines de agentes com zero token waste." },
      { name: "Lighthouse & Core Web Vitals", icon: "FiZap", usage: "Diagnósticos profundos atingindo pontuação máxima em SEO e Performance." },
      { name: "Arquitetura Multi-Tenant", icon: "FiLayers", usage: "Plataformas SaaS escaláveis com isolamento de dados e personalização B2B." },
    ],
  },
] as const

export const experiences = [
  {
    company: "Domus - Sua Solução Digital",
    role: "Full Stack Engineer & Tech Lead",
    context: "Desenvolvimento ponta a ponta de produtos digitais, plataformas SaaS, dashboards e aplicações web personalizadas.",
    period: "Out/2025 - Atual",
    location: "Remoto",
    stack: ["TypeScript", "React", "Next.js", "Node.js", "Express", "Fastify", "PostgreSQL", "Supabase", "APIs REST", "IA Aplicada"],
    achievements: [
      "Engenharia de produtos de ponta a ponta, cobrindo frontend, backend, modelagem em PostgreSQL/Supabase e APIs REST.",
      "Construção de arquiteturas modulares e escaláveis para plataformas SaaS B2B com alta taxa de reutilização.",
      "Otimização técnica de performance web atingindo scores próximos a 100 no Lighthouse em Performance, SEO e A11y.",
      "Integração de agentes de Inteligência Artificial no fluxo de especificação, automação de código e esteira de entrega.",
    ],
  },
  {
    company: "SIVIS Tecnologia",
    role: "Full Stack Engineer | Frontend & Integrations",
    context: "Arquitetura de aplicações web corporativas, modernização de interfaces legadas e integração de APIs de alta confiabilidade.",
    period: "Nov/2025 - Atual",
    location: "Remoto",
    stack: ["TypeScript", "React", "Next.js", "Angular", "Node.js", "PostgreSQL", "MySQL", "APIs REST", "Git"],
    achievements: [
      "Modernização e refatoração de interfaces corporativas críticas ativas em produção com React, Next.js e Angular.",
      "Otimização de queries e relatórios operacionais em PostgreSQL e MySQL, reduzindo em 35% o tempo de resposta.",
      "Padronização de contratos de API REST com tipagem estrita no TypeScript, garantindo integridade em tempo de execução.",
      "Implementação de padrões modernos de componentização e código limpo, acelerando novas integrações de sistemas.",
    ],
  },
  {
    company: "Autocom3",
    role: "Full Stack Engineer",
    context: "Desenvolvimento e evolução de ecossistemas ERP, portais corporativos e plataformas web/desktop de alta escala.",
    period: "Nov/2024 - Atual",
    location: "Volta Redonda, RJ | Híbrido",
    stack: ["TypeScript", "React", "Next.js", "Node.js", "NestJS", "C#", "PostgreSQL", "SQL Server", "AWS", "Docker", "Design Systems"],
    achievements: [
      "Liderança na arquitetura do Design System corporativo com 500+ componentes, reduzindo em até 70% o ciclo de dev.",
      "Otimizações contínuas de performance com redução de até 40% no carregamento de páginas ERP para 20+ organizações.",
      "Construção de APIs corporativas com autenticação JWT, controle de acesso granular RBAC e Webhooks event-driven.",
      "Modelagem relacional, migrations e procedures em PostgreSQL e SQL Server integrados a serviços em nuvem na AWS.",
    ],
  },
  {
    company: "EvaTech",
    role: "Mentor & Instrutor de Tecnologia e IA",
    context: "Programa de formação técnica e inclusão digital (parceria UniFOA + SEBRAE) voltado à capacitação em tecnologia e IA.",
    period: "Jun/2024 - Dez/2024",
    location: "Volta Redonda, RJ",
    stack: ["Inteligência Artificial", "Engenharia de Prompt", "Metodologias Ágeis", "TypeScript", "React", "Mentoria Técnica"],
    achievements: [
      "Capacitação e mentoria técnica direta de mais de 30 participantes em inteligência artificial, programação e inovação.",
      "Condução de workshops e dinâmicas práticas sobre desenvolvimento moderno com TypeScript, React e automação com LLMs.",
      "Treinamento prático em engenharia de prompt e uso de ferramentas de produtividade e IA no desenvolvimento de software.",
      "Orientação de projetos práticos e resolução de problemas reais de negócios com comunicação técnica acessível.",
    ],
  },
  {
    company: "SIVIS Tecnologia",
    role: "Junior Full Stack Engineer",
    context: "Desenvolvimento de dashboards, módulos ERP e plataformas administrativas conectando UI, backend e bancos relacionais.",
    period: "Ago/2022 - Jun/2024",
    location: "Volta Redonda, RJ | Híbrido",
    stack: ["React", "TypeScript", "JavaScript", "Node.js", "C#", "PHP", "PostgreSQL", "MySQL", "APIs REST", "Git"],
    achievements: [
      "Desenvolvimento e entrega de módulos ERP administrativos e dashboards utilizados em produção por clientes corporativos.",
      "Construção e manutenção de APIs REST e integrações conectando fluxos operacionais, boletos e gateways de pagamento.",
      "Modelagem de dados em PostgreSQL e MySQL com implementação de regras de negócio e validações consistentes.",
      "Atuação em squads ágeis com Scrum e Kanban, participando ativamente de code reviews e evolução contínua de código.",
    ],
  },
] as const

export const education = {
  degree: "Bacharelado em Sistemas de Informação",
  institution: "Centro Universitário de Volta Redonda (UniFOA)",
  period: "Fev/2022 - Nov/2025",
  status: "Concluído",
  highlights: [
    "Foco em Engenharia de Software, Estrutura de Dados, Banco de Dados Relacionais e Segurança da Informação.",
    "Participação ativa em projetos de extensão universitária e mentoria tecnológica em parceria com o SEBRAE.",
  ],
} as const

export const languages = [
  { name: "Português", level: "Nativo", info: "Comunicação fluente e técnica" },
  { name: "Inglês", level: "B2 (Intermediário Avançado)", info: "Leitura técnica, escrita de documentação e conversação profissional" },
  { name: "Mentoria & Comunidade", level: "EvaTech / SEBRAE", info: "Liderança e capacitação de 30+ participantes" },
] as const

export const projects = [
  {
    id: "organon-ecosystem",
    name: "Organon Ecosystem v6.23.2",
    href: "https://github.com/PedroReoli",
    domain: "Desktop & Mobile OS",
    type: "ai",
    category: "Flagship • Business OS & IA",
    image: "/Domus.png",
    flagship: true,
    shortDescription:
      "Business OS offline-first com 19 telas operacionais, editor rico TipTap, canvas Excalidraw, transcrição inteligente de reuniões com Whisper IA e SQLite.",
    stack: ["Electron", "React", "TypeScript", "Vite", "TipTap", "Excalidraw", "Nivo Charts", "Fastify", "SQLite", "Whisper IA"],
    features: [
      "Monorepo integrado com workspace para Electron Desktop, Mobile (Expo/React Native) e API local Fastify.",
      "Editor de texto rico estruturado com TipTap integrado a quadro branco infinito com Excalidraw.",
      "Motor local de inteligência de áudio com Whisper IA para transcrição automática de atas de reunião.",
      "Persistência offline-first em SQLite com sincronização resiliente e gráficos analíticos interativos via Nivo Charts.",
    ],
    metrics: [
      { label: "Escopo", value: "19 Telas Operacionais" },
      { label: "Arquitetura", value: "Offline-First + SQLite" },
    ],
  },
  {
    id: "achilles-cdp-agent",
    name: "Achilles CDP Agent",
    href: "https://github.com/PedroReoli/Achilles-CDP-Agent",
    domain: "github.com",
    type: "ai",
    category: "Engenharia de IA & Automação",
    image: "/Domus.png",
    flagship: true,
    shortDescription:
      "Motor autônomo de navegação web para agentes de IA via CDP e semântica AXTree, garantindo 92.2% de economia de tokens e servidor MCP nativo.",
    stack: ["Python", "CDP", "Playwright", "Pydantic v2", "AXTree", "MCP Server", "Asyncio"],
    features: [
      "Bypass robusto de proteções antibot e controle de sessões persistentes sem expor credenciais.",
      "Redução de árvores DOM gigantescas de 80.000 para < 2.000 tokens usando semântica da AXTree.",
      "Servidor MCP (Model Context Protocol) integrado para automações diretas no Claude Code e ecossistema de agentes.",
      "Execução assíncrona ultra rápida para scraping e interação automatizada com formulários e dashboards.",
    ],
    metrics: [
      { label: "Economia de Tokens", value: "92.2% (AXTree)" },
      { label: "Protocolo", value: "Servidor MCP Nativo" },
    ],
  },
  {
    id: "portal-unificado-autocom3",
    name: "Portal Unificado ERP Autocom3",
    href: "https://www.autocom3.com.br/autocom3clientes",
    domain: "autocom3.com.br",
    type: "erp",
    category: "ERP Corporativo",
    image: "/portal-cliente.png",
    flagship: true,
    shortDescription:
      "Hub corporativo ERP com 100+ telas atendendo 20+ organizações ativas, com Design System de 500+ componentes e redução de 70% no ciclo dev.",
    stack: ["React", "Next.js", "TypeScript", "Node.js", "NestJS", "PostgreSQL", "React Query", "Tailwind CSS"],
    features: [
      "Hub corporativo unificado com módulos de autoatendimento, gestão financeira, contábil e operacional.",
      "Design System autoral escalável com 500+ componentes tipados que reduziram em 70% o tempo de criação de novas telas.",
      "Otimizações de queries e hidratação com ganho de 40% no carregamento de páginas críticas.",
      "Autenticação com JWT, controle de permissões granular (RBAC) e integrações via Webhooks.",
    ],
    metrics: [
      { label: "Escala", value: "100+ Telas • 20+ Orgs" },
      { label: "Design System", value: "500+ Componentes (-70%)" },
    ],
  },
] as const
