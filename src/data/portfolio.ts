export const profile = {
  name: "Pedro Lucas Reis",
  role: "Desenvolvedor Full Stack Pleno | Especialização em Frontend",
  tagline: "React • Next.js • TypeScript • Node.js",
  email: "pedrosousa2160@gmail.com",
  phoneLabel: "+55 24 99326-4040",
  phoneHref: "https://wa.me/5524993264040",
  location: "Volta Redonda, RJ | Remoto ou Híbrido | PJ",
  website: "https://pedroreis.vercel.app/",
  linkedin: "https://www.linkedin.com/in/pedro-lucas-reis-a93945171",
  github: "https://github.com/PedroReoli",
  summary: [
    "Desenvolvedor Full Stack Pleno com 4 anos de experiência e especialização em Frontend (React, Next.js, TypeScript e Node.js), focado na criação de ecossistemas ERP, plataformas SaaS, portais e dashboards de alta performance.",
    "Atuação sólida em arquitetura de software, liderança técnica, Design Systems (500+ componentes reutilizáveis), serviços backend com Express/Fastify e inteligência artificial aplicada à produtividade de engenharia.",
  ],
} as const

export const highlights = [
  {
    label: "Experiência",
    value: "4+",
    suffix: "anos",
    description: "Full Stack Pleno com foco em Frontend & ERP/SaaS",
  },
  {
    label: "Especialização",
    value: "React & Node",
    suffix: "",
    description: "TypeScript, Next.js, APIs REST & Design Systems",
  },
  {
    label: "Liderança Técnica",
    value: "Tech Lead",
    suffix: "",
    description: "Arquitetura, code reviews e direção de projetos",
  },
] as const

export const blogPosts = [
  {
    id: "reolios-skills-claude",
    title: "ReoliOS: Plataforma de 43 Skills Operacionais para Claude Code",
    category: "Inteligência Artificial & Automação",
    date: "31 Jul 2026",
    readTime: "5 min",
    excerpt: "Idealização e arquitetura de comandos reutilizáveis para executar fluxos completos de negócio em um único terminal com contexto persistente.",
    htmlUrl: "/blog/ia-no-desenvolvimento-web.html",
  },
  {
    id: "ia-desenvolvimento-web",
    title: "Como a IA Estabiliza e Acelera a Entrega de Software",
    category: "Engenharia de Software",
    date: "28 Jul 2026",
    readTime: "4 min",
    excerpt: "Engenharia de prompts, automações com LLMs e organização de contexto para reduzir atividades manuais e ampliar produtividade.",
    htmlUrl: "/blog/ia-no-desenvolvimento-web.html",
  },
  {
    id: "arquitetura-escalavel-react",
    title: "Arquitetura Frontend & Biblioteca de 500+ Componentes Reutilizáveis",
    category: "Arquitetura Frontend",
    date: "20 Jul 2026",
    readTime: "6 min",
    excerpt: "Padrões de componentização e Design Systems que reduziram em até 70% o tempo de desenvolvimento de novas interfaces.",
    htmlUrl: "/blog/arquitetura-escalavel-react.html",
  },
  {
    id: "design-systems-componentizacao",
    title: "Construindo Design Systems com Radix UI e Tailwind CSS",
    category: "UI/UX & Acessibilidade",
    date: "14 Jul 2026",
    readTime: "5 min",
    excerpt: "Como integrar acessibilidade WCAG e design tokens reutilizáveis em componentes de produção.",
    htmlUrl: "/blog/padrao-artigo.html",
  },
  {
    id: "performance-nextjs-caching",
    title: "Performance & Caching no Next.js com React Query",
    category: "Performance Web",
    date: "05 Jul 2026",
    readTime: "7 min",
    excerpt: "Estratégias de gerenciamento de estado de servidor e invalidação de cache para aplicações de alta demanda.",
    htmlUrl: "/blog/arquitetura-escalavel-react.html",
  },
] as const

export const skills = [
  {
    category: "Frontend Engine",
    items: [
      { name: "React", icon: "SiReact", usage: "Construção de UIs escaláveis, Design Systems e portais ERP de alta performance." },
      { name: "Next.js", icon: "SiNextdotjs", usage: "Aplicações SSR/SSG com foco em SEO 95+, rotas dinâmicas e ótima experiência." },
      { name: "TypeScript", icon: "SiTypescript", usage: "Tipagem estrita de ponta a ponta, reduzindo bugs em contratos e interfaces." },
      { name: "Tailwind CSS", icon: "SiTailwindcss", usage: "Estilização ágil com design tokens, utilitários modernos e responsivos." },
      { name: "Radix UI", icon: "SiRadixui", usage: "Criação de componentes acessíveis (WCAG) para dashboards corporativos." },
      { name: "Framer Motion", icon: "SiFramer", usage: "Animações de layout, micro-interações fluidas e modais dinâmicos." },
    ],
  },
  {
    category: "Backend & Serviços",
    items: [
      { name: "Node.js", icon: "SiNodedotjs", usage: "Desenvolvimento de APIs REST, microsserviços e integração de regras de negócio." },
      { name: "Express.js", icon: "SiExpress", usage: "Criação de rotas, middlewares de autenticação e APIs para ERP e e-commerce." },
      { name: "Fastify", icon: "SiFastapi", usage: "Serviços backend de altíssima velocidade e baixo overhead de execução." },
      { name: "C# & ASP.NET", icon: "SiDotnet", usage: "Manutenção e evolução de serviços corporativos e integração com ERP." },
      { name: "Tauri & Rust", icon: "SiTauri", usage: "Construção de aplicações desktop nativas, ultra-leves e seguras." },
      { name: "APIs REST & Webhooks", icon: "SiOpenapiinitiative", usage: "Comunicação assíncrona entre ERP, gateways de pagamento e sistemas." },
    ],
  },
  {
    category: "Bancos de Dados & Cloud",
    items: [
      { name: "PostgreSQL", icon: "SiPostgresql", usage: "Modelagem relacional para ERPs, consultas SQL otimizadas e Supabase." },
      { name: "SQL Server", icon: "FiDatabase", usage: "Gerenciamento de dados corporativos de alta disponibilidade e relatórios." },
      { name: "MySQL", icon: "SiMysql", usage: "Bancos relacionais e suporte a aplicações corporativas de produção." },
      { name: "Supabase", icon: "SiSupabase", usage: "Backend Serverless com banco em tempo real, Auth e Storage rápido." },
      { name: "Docker", icon: "SiDocker", usage: "Containerização de microsserviços para testes e deploys isolados." },
      { name: "Git & GitHub", icon: "SiGithub", usage: "Controle de versão, workflows CI/CD, revisão de código e liderança técnica." },
    ],
  },
  {
    category: "Arquitetura & IA Aplicada",
    items: [
      { name: "Design Systems (500+)", icon: "FiLayers", usage: "Criação de biblioteca compartilhada com mais de 500 componentes reutilizáveis." },
      { name: "React Query & State", icon: "SiReactquery", usage: "Gerenciamento de estado de servidor, caching inteligente e chamadas assíncronas." },
      { name: "Claude Code & Anthropic", icon: "SiAnthropic", usage: "Desenvolvimento de 43 skills operacionais CLI e automação de engenharia." },
      { name: "Cursor & Prompt Eng.", icon: "FiCpu", usage: "Engenharia de prompts para debugging acelerado, code review e refatoração." },
      { name: "Lighthouse & Performance", icon: "FiZap", usage: "Otimizações de tempo de carregamento e pontuações 100 no Lighthouse." },
      { name: "Rust & Desktop Native", icon: "SiRust", usage: "Desenvolvimento de binários nativos de alta performance com linguagem Rust." },
    ],
  },
] as const

export const experiences = [
  {
    company: "Autocom3",
    role: "Engenheiro de Software Frontend Pleno",
    context: "Ecossistema ERP com mais de 50 páginas e biblioteca compartilhada com mais de 500 componentes reutilizáveis.",
    period: "Nov/2024 — Atual",
    location: "Volta Redonda, RJ",
    stack: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "React Query", "APIs REST", "GraphQL", "PostgreSQL", "SQL Server", "Git", "IA Aplicada"],
    achievements: [
      "Desenvolvimento e evolução de aplicações web integradas a um ecossistema ERP, atuando em arquitetura frontend, integração com APIs, performance e regras de negócio.",
      "Construção de portais corporativos, dashboards, painéis administrativos e fluxos utilizados por clientes, equipes internas e áreas contábeis.",
      "Contribuição para um portal ERP com mais de 50 páginas e para uma biblioteca compartilhada com mais de 500 componentes reutilizáveis.",
      "Implementação de padrões de arquitetura e componentização que reduziram em até 70% o tempo de desenvolvimento de novas interfaces e funcionalidades.",
      "Participação em code reviews, refinamentos, organização de demandas, decisões técnicas e modernização de sistemas legados para aplicações web modernas.",
      "Integração com APIs, bancos de dados e serviços internos e externos, mantendo visão completa entre frontend, backend e processos de negócio.",
    ],
  },
  {
    company: "DomusDev",
    role: "Engenheiro de Software Full Stack | Liderança Técnica em Projetos",
    context: "Produtos digitais, sistemas web e plataformas de alta performance com pontuações 100 no Lighthouse.",
    period: "Out/2025 — Atual",
    location: "Volta Redonda, RJ",
    stack: ["React", "Next.js", "TypeScript", "Node.js", "Express", "Fastify", "Supabase", "PostgreSQL", "APIs REST", "Git", "Lighthouse", "Ferramentas de IA"],
    achievements: [
      "Atuação Full Stack em produtos digitais, sistemas e aplicações web, desde levantamento de requisitos e arquitetura até implementação e entrega.",
      "Liderança técnica em projetos selecionados, apoiando decisões de arquitetura, organização de demandas, code reviews e direcionamento de outros desenvolvedores.",
      "Desenvolvimento de frontend com React, Next.js e TypeScript, além de APIs e integrações com Node.js, Express, Fastify e Supabase.",
      "Criação de aplicações reutilizáveis e escaláveis, com foco em performance, manutenção de longo prazo e experiência do usuário.",
      "Otimizações que alcançaram pontuações próximas de 100 no Lighthouse em Performance, Acessibilidade, Boas Práticas e SEO.",
      "Uso estruturado de IA para prototipação, debugging, revisão, documentação, automação e aceleração do ciclo de desenvolvimento.",
    ],
  },
  {
    company: "SIVIS Tecnologia",
    role: "Desenvolvedor Full Stack Júnior",
    context: "Sistemas ERP, dashboards administrativos e ferramentas corporativas utilizadas por clubes, associações e empresas.",
    period: "Ago/2022 — Jun/2024",
    location: "Volta Redonda, RJ",
    stack: ["React", "Next.js", "TypeScript", "Node.js", "C#", "ASP.NET", "APIs REST", "PostgreSQL", "SQL Server", "Git", "Metodologias Ágeis"],
    achievements: [
      "Desenvolvimento e manutenção de sistemas ERP, dashboards administrativos, portais e ferramentas de gestão utilizadas em produção.",
      "Atuação em interfaces, APIs, bancos de dados e integrações, conectando frontend, backend e regras de negócio corporativas.",
      "Implementação de funcionalidades, correção de bugs, documentação e sustentação de aplicações utilizadas por clubes, associações e empresas.",
      "Experiência prática com Node.js, C#, ASP.NET, PostgreSQL, SQL Server e integração entre múltiplos sistemas.",
    ],
  },
] as const

export const education = {
  degree: "Bacharelado em Sistemas de Informação",
  institution: "Centro Universitário de Volta Redonda (UniFOA)",
  period: "Fev/2022 — Nov/2025",
} as const

export const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "Nível B2" },
  { name: "Mentoria & Comunidade", level: "Instrutor EvaTech (UniFOA + Sebrae - 30+ alunos)" },
] as const

export const projectsLabels = {
  kicker: "Portfólio Selecionado",
  title1: "PROJETOS DE",
  title2: "DESTAQUE",
  details: "Detalhes",
  visit: "Acessar Projeto",
  stack: "Tecnologias",
  features: "Principais Funcionalidades",
  metrics: "Impacto & Resultados",
  close: "Fechar",
  all: "Todos",
  types: {
    site: "Website",
    erp: "ERP",
    saas: "SaaS",
    mobile: "Mobile",
    internal: "Interno",
    ai: "IA / Skills",
  },
} as const

export const projects = [
  {
    id: "reolios",
    name: "ReoliOS — Skills para Claude Code",
    href: "https://reoli-os.lovable.app/",
    domain: "reoli-os.lovable.app",
    type: "ai",
    category: "IA & Automação",
    image: "/propose.png",
    shortDescription:
      "Plataforma com 43 skills operacionais para Claude Code (marketing, SEO, análise de dados, propostas comerciais e dev).",
    stack: ["Claude Code", "LLM Skills", "TypeScript", "Node.js", "Prompt Eng."],
    features: [
      "Idealização e desenvolvimento de 43 skills operacionais para marketing, SEO, vendas e dev",
      "Comandos reutilizáveis para executar fluxos completos em único terminal com contexto persistente",
      "Estruturação em planos comerciais, documentação, onboarding e scripts de instalação",
      "Redução de atividades manuais e ampliação da produtividade de negócio com LLMs",
    ],
    metrics: [
      { label: "Skills Operacionais", value: "43 Skills" },
      { label: "Plataforma", value: "Claude Code CLI" },
      { label: "Foco", value: "Produtividade Total" },
    ],
  },
  {
    id: "domusdev",
    name: "DomusDev",
    href: "https://domusdev.com.br/",
    domain: "domusdev.com.br",
    type: "site",
    category: "Full Stack",
    image: "/Domus.png",
    shortDescription:
      "Plataforma institucional e soluções digitais sob medida com pontuações 100 no Lighthouse em SEO, Performance e Acessibilidade.",
    stack: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Supabase"],
    features: [
      "Arquitetura Full Stack em React, Next.js, TypeScript e Supabase",
      "Liderança técnica em decisões de arquitetura e direcionamento de devs",
      "Otimizações de performance alcançando pontuações próximas de 100 no Lighthouse",
      "Estruturação de IA para debugging, documentação e aceleração de entregas",
    ],
    metrics: [
      { label: "Performance", value: "Lighthouse 100" },
      { label: "Liderança", value: "Tech Lead" },
      { label: "Arquitetura", value: "Full Stack" },
    ],
  },
  {
    id: "portal-cliente",
    name: "Portal do Cliente ERP Autocom3",
    href: "https://www.autocom3.com.br/autocom3clientes",
    domain: "autocom3.com.br/autocom3clientes",
    type: "erp",
    category: "ERP + E-commerce",
    image: "/portal-cliente.png",
    shortDescription:
      "Portal ERP com mais de 50 páginas e biblioteca compartilhada de 500+ componentes reutilizáveis.",
    stack: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "React Query", "PostgreSQL"],
    features: [
      "Portal ERP corporativo com mais de 50 páginas e mais de 500 componentes reutilizáveis",
      "Redução de até 70% no tempo de desenvolvimento de novas interfaces",
      "Dashboards e painéis administrativos utilizados por clientes e equipes internas",
      "Integração de APIs REST assíncronas com PostgreSQL e SQL Server",
    ],
    metrics: [
      { label: "Redução de Dev", value: "-70% no tempo" },
      { label: "Componentes", value: "500+ Reutilizáveis" },
      { label: "Portfólio ERP", value: "50+ Páginas" },
    ],
  },
  {
    id: "propose",
    name: "Propose SaaS",
    href: "https://propose-sable.vercel.app/",
    domain: "propose-sable.vercel.app",
    type: "saas",
    category: "SaaS NoCode",
    image: "/propose.png",
    shortDescription:
      "SaaS para criação de propostas comerciais personalizadas com aceite digital e analytics por seção.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JSON Schema", "PDF Export"],
    features: [
      "Editor visual baseado em sistema de blocos personalizáveis",
      "Sistema de aceite digital com validação por IP, e-mail e carimbo de data/hora",
      "Métricas em tempo real sobre visualizações e tempo gasto por seção",
      "Geração instantânea de PDF com alta fidelidade visual",
    ],
    metrics: [
      { label: "Arquitetura", value: "JSON-Driven" },
      { label: "Segurança", value: "Aceite com Hash/IP" },
      { label: "Métricas", value: "Analytics por Seção" },
    ],
  },
  {
    id: "portal-contabil",
    name: "Portal Contábil ERP",
    href: "https://www.autocom3.com.br/autocom3contabilidade/",
    domain: "autocom3.com.br/autocom3contabilidade",
    type: "erp",
    category: "Gestão Fiscal",
    image: "/portal-contador.png",
    shortDescription:
      "Sistema para contadores e gestão fiscal corporativa preparado para as regras da Reforma Tributária.",
    stack: ["React", "Next.js", "TypeScript", "C#", "Node.js", "PostgreSQL"],
    features: [
      "Módulo especializado para adequação às regras da Reforma Tributária",
      "Dashboards visuais e relatórios de conciliação fiscal",
      "Integração contínua com os módulos financeiros do ERP corporativo",
    ],
    metrics: [
      { label: "Conformidade", value: "Reforma Tributária" },
      { label: "Dados", value: "PostgreSQL + C#" },
      { label: "Visualização", value: "Dashboards Fiscais" },
    ],
  },
  {
    id: "gerador-propostas",
    name: "Gerador de Propostas Internal",
    href: "https://www.autocom3.com.br/proposta/6704ba3e-3ec8-4f53-9682-5e33ac68ff4c",
    domain: "autocom3.com.br/proposta",
    type: "internal",
    category: "NoCode",
    image: "/propostas-ac3.png",
    shortDescription:
      "Ferramenta interna no-code para montagem ágil de propostas comerciais pela equipe de vendas.",
    stack: ["React", "TypeScript", "Next.js", "JSON Schema", "Tailwind CSS"],
    features: [
      "Editor drag-and-drop de alta velocidade para montagem de propostas",
      "Renderização dinâmica através de estruturas JSON",
      "Templates padronizados para garantir coerência visual da marca",
    ],
    metrics: [
      { label: "Eficiência", value: "Redução de 60% no tempo" },
      { label: "Editor", value: "Drag & Drop" },
      { label: "Integração", value: "Pipeline de Vendas" },
    ],
  },
] as const
