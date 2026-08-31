export const profile = {
  name: "Pedro Lucas Reis",
  role: "Full Stack Engineer | Frontend, APIs e Produtos SaaS",
  tagline: "TypeScript | React | Next.js | Node.js | PostgreSQL",
  email: "pedrosousa2160@gmail.com",
  phoneLabel: "+55 24 99326-4040",
  phoneHref: "https://wa.me/5524993264040",
  location: "Volta Redonda, RJ | Remoto ou híbrido",
  website: "https://pedroreis.vercel.app/",
  linkedin: "https://www.linkedin.com/in/pedro-lucas-reis-a93945171",
  github: "https://github.com/PedroReoli",
  summary: [
    "Full Stack Engineer com cerca de 4 anos de experiência no desenvolvimento de produtos digitais, sistemas ERP, plataformas SaaS e aplicações corporativas.",
    "Atuo principalmente com TypeScript, React, Next.js, Node.js, NestJS e PostgreSQL, com foco em Frontend, APIs, arquitetura, integrações, performance e IA aplicada ao desenvolvimento.",
  ],
} as const

export const highlights = [
  {
    label: "Experiência",
    value: "4+",
    suffix: "anos",
    description: "Produtos digitais, ERP, SaaS e aplicações corporativas",
  },
  {
    label: "Produtos",
    value: "10+",
    suffix: "",
    description: "Construção e evolução de soluções usadas em operação",
  },
  {
    label: "Design System",
    value: "500+",
    suffix: "",
    description: "Componentes reutilizáveis em ecossistemas corporativos",
  },
] as const

export const blogPosts = [
  {
    id: "reolios-skills-claude",
    title: "ReoliOS: Skills operacionais para Claude Code",
    category: "IA aplicada & Automação",
    date: "31 Jul 2026",
    readTime: "5 min",
    excerpt: "Estrutura de comandos e contexto para apoiar especificação, documentação, revisão de código e automação técnica.",
    htmlUrl: "/blog/ia-no-desenvolvimento-web.html",
  },
  {
    id: "ia-desenvolvimento-web",
    title: "IA aplicada ao ciclo de desenvolvimento web",
    category: "Engenharia de Software",
    date: "28 Jul 2026",
    readTime: "4 min",
    excerpt: "Uso técnico de LLMs em pesquisa, prototipação, debugging, documentação e revisão sem abrir mão de validação humana.",
    htmlUrl: "/blog/ia-no-desenvolvimento-web.html",
  },
  {
    id: "arquitetura-escalavel-react",
    title: "Arquitetura Frontend e biblioteca de componentes",
    category: "Arquitetura Frontend",
    date: "20 Jul 2026",
    readTime: "6 min",
    excerpt: "Padrões de componentização, design tokens e organização de interfaces para ERPs, portais e dashboards.",
    htmlUrl: "/blog/arquitetura-escalavel-react.html",
  },
  {
    id: "design-systems-componentizacao",
    title: "Design Systems com Radix UI e Tailwind CSS",
    category: "UI Engineering",
    date: "14 Jul 2026",
    readTime: "5 min",
    excerpt: "Componentes acessíveis, reutilizáveis e consistentes para aplicações corporativas em produção.",
    htmlUrl: "/blog/padrao-artigo.html",
  },
  {
    id: "performance-nextjs-caching",
    title: "Performance e estado de servidor no Next.js",
    category: "Performance Web",
    date: "05 Jul 2026",
    readTime: "7 min",
    excerpt: "Estratégias de cache, carregamento e organização de dados para reduzir tempo de resposta em aplicações web.",
    htmlUrl: "/blog/arquitetura-escalavel-react.html",
  },
] as const

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "SiReact", usage: "Construção de interfaces, portais ERP, dashboards e Design Systems." },
      { name: "Next.js", icon: "SiNextdotjs", usage: "Aplicações web com rotas, SEO, performance e renderização otimizada." },
      { name: "TypeScript", icon: "SiTypescript", usage: "Tipagem de contratos, componentes, APIs e regras de interface." },
      { name: "Tailwind CSS", icon: "SiTailwindcss", usage: "Design tokens, responsividade e padronização visual de produtos." },
      { name: "Radix UI", icon: "SiRadixui", usage: "Componentes acessíveis para interfaces corporativas e sistemas internos." },
      { name: "Framer Motion", icon: "SiFramer", usage: "Microinterações e transições aplicadas sem prejudicar usabilidade." },
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      { name: "Node.js", icon: "SiNodedotjs", usage: "APIs REST, serviços backend e integração de regras de negócio." },
      { name: "NestJS", icon: "SiNodedotjs", usage: "Arquitetura backend modular para serviços corporativos e SaaS." },
      { name: "Express.js", icon: "SiExpress", usage: "Rotas, middlewares, autenticação e endpoints de integração." },
      { name: "C# & ASP.NET", icon: "SiDotnet", usage: "Manutenção e evolução de serviços conectados a sistemas ERP." },
      { name: "Tauri & Electron", icon: "SiTauri", usage: "Aplicações desktop e migração de rotinas web para ambientes nativos." },
      { name: "APIs REST & Webhooks", icon: "SiOpenapiinitiative", usage: "Integrações entre sistemas, eventos e serviços externos." },
    ],
  },
  {
    category: "Dados & Cloud",
    items: [
      { name: "PostgreSQL", icon: "SiPostgresql", usage: "Modelagem, queries, migrations, índices e procedures." },
      { name: "SQL Server", icon: "FiDatabase", usage: "Consultas e manutenção de bases corporativas e relatórios." },
      { name: "MySQL", icon: "SiMysql", usage: "Suporte a aplicações corporativas e sistemas de produção." },
      { name: "Supabase", icon: "SiSupabase", usage: "Banco, Auth, Storage e backend serverless para produtos web." },
      { name: "AWS", icon: "FiDatabase", usage: "API Gateway, integrações cloud e processos de deploy." },
      { name: "Git & GitHub", icon: "SiGithub", usage: "Versionamento, revisão de código e colaboração técnica." },
    ],
  },
  {
    category: "Arquitetura & IA",
    items: [
      { name: "Design Systems", icon: "FiLayers", usage: "Bibliotecas compartilhadas e padrões reutilizáveis de interface." },
      { name: "React Query & State", icon: "SiReactquery", usage: "Estado de servidor, cache, invalidação e sincronização de dados." },
      { name: "Claude Code & Skills", icon: "SiAnthropic", usage: "Workflows de IA para especificação, revisão e automação técnica." },
      { name: "Prompt Engineering", icon: "FiCpu", usage: "Uso estruturado de LLMs em desenvolvimento, documentação e análise." },
      { name: "Lighthouse & Performance", icon: "FiZap", usage: "Melhorias de carregamento, SEO, acessibilidade e boas práticas." },
      { name: "Arquitetura SaaS", icon: "FiLayers", usage: "Sistemas multi-tenant, B2B, white-label e aplicações modulares." },
    ],
  },
] as const

export const experiences = [
  {
    company: "Domus - Sua Solução Digital",
    role: "Desenvolvedor Full Stack",
    context: "Produtos digitais, aplicações SaaS, plataformas administrativas e soluções web personalizadas.",
    period: "Out/2025 - Atual",
    location: "Remoto",
    stack: ["TypeScript", "React", "Next.js", "Node.js", "Express", "Fastify", "PostgreSQL", "Supabase", "APIs REST", "IA aplicada"],
    achievements: [
      "Desenvolvimento Full Stack de produtos digitais, do levantamento de requisitos à implementação de frontend, backend, banco de dados e integrações.",
      "Construção e manutenção de APIs REST e integrações com serviços externos.",
      "Modelagem e evolução de dados com PostgreSQL e Supabase.",
      "Aplicação de IA em especificação, documentação, revisão de código, automação e produtividade técnica.",
    ],
  },
  {
    company: "SIVIS Tecnologia",
    role: "Full Stack Engineer | Frontend & Integrations",
    context: "Aplicações corporativas, arquitetura frontend e integrações em plataformas de gestão.",
    period: "Nov/2025 - Atual",
    location: "Remoto",
    stack: ["TypeScript", "React", "Next.js", "Angular", "JavaScript", "APIs REST", "Integrações"],
    achievements: [
      "Evolução de aplicações web com foco em frontend, arquitetura, componentização e integração com APIs.",
      "Modernização de interfaces e funcionalidades utilizadas em ambientes operacionais reais.",
      "Organização de aplicações existentes para melhorar manutenção, escalabilidade e clareza técnica.",
      "Participação em decisões técnicas sobre evolução de sistemas e integração entre serviços.",
    ],
  },
  {
    company: "Autocom3",
    role: "Full Stack Engineer",
    context: "ERP, portais corporativos, dashboards e aplicações usadas por equipes e clientes em produção.",
    period: "Nov/2024 - Atual",
    location: "Volta Redonda, RJ | Híbrido",
    stack: ["TypeScript", "React", "Next.js", "Node.js", "NestJS", "C#", "PostgreSQL", "SQL Server", "JWT", "Webhooks", "AWS", "Electron", "Tauri"],
    achievements: [
      "Desenvolvimento e evolução de portais ERP, dashboards, plataformas administrativas e APIs corporativas.",
      "Implementação de autenticação, JWT, permissões/RBAC, rate limiting e integrações via Webhooks.",
      "Atuação com PostgreSQL em queries, migrations, índices e procedures.",
      "Contribuição para ecossistema ERP com 50+ páginas e Design System com 500+ componentes reutilizáveis.",
      "Melhorias de performance com redução de até 40% no tempo de carregamento em fluxos ERP.",
    ],
  },
  {
    company: "UniFOA",
    role: "Mentor de Tecnologia",
    context: "Mentoria em inclusão digital, inteligência artificial e desenvolvimento profissional.",
    period: "Jun/2024 - Dez/2024",
    location: "Volta Redonda, RJ",
    stack: ["IA", "Educação em tecnologia", "Produtividade", "Mentoria", "Comunicação"],
    achievements: [
      "Condução de mentorias e atividades práticas para desenvolvimento de competências digitais.",
      "Criação de conteúdos educacionais sobre inteligência artificial e ferramentas digitais.",
      "Acompanhamento de mais de 30 participantes em jornadas de aprendizagem aplicada.",
    ],
  },
  {
    company: "SIVIS Tecnologia",
    role: "Junior Full Stack Engineer",
    context: "Sistemas ERP, dashboards administrativos e integrações para clubes, associações e proteção veicular.",
    period: "Ago/2022 - Jun/2024",
    location: "Volta Redonda, RJ | Híbrido",
    stack: ["React", "TypeScript", "JavaScript", "C#", "PHP", "PostgreSQL", "MySQL", "APIs REST"],
    achievements: [
      "Desenvolvimento e manutenção de sistemas ERP, dashboards, módulos administrativos e ferramentas de gestão.",
      "Implementação de funcionalidades com regras de negócio, APIs, bancos de dados e integrações externas.",
      "Correção, documentação e sustentação de aplicações utilizadas diariamente por clientes em produção.",
      "Experiência prática em frontend, backend e bancos relacionais em sistemas corporativos.",
    ],
  },
] as const

export const education = {
  degree: "Bacharelado em Sistemas de Informação",
  institution: "Centro Universitário de Volta Redonda (UniFOA)",
  period: "Fev/2022 - Nov/2025",
} as const

export const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "B2" },
  { name: "Mentoria & Comunidade", level: "EvaTech / UniFOA + Sebrae - 30+ participantes" },
] as const

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

export const projects = [
  {
    id: "reolios",
    name: "ReoliOS - Skills para Claude Code",
    href: "https://reoli-os.lovable.app/",
    domain: "reoli-os.lovable.app",
    type: "ai",
    category: "IA aplicada",
    image: "/propose.png",
    shortDescription:
      "Sistema de skills e comandos operacionais para apoiar desenvolvimento assistido por IA, documentação e automações técnicas.",
    stack: ["Claude Code", "LLM Skills", "TypeScript", "Node.js", "Prompt Engineering"],
    features: [
      "Criação de skills para fluxos de dev, documentação, análise, propostas e operação técnica.",
      "Estrutura de contexto persistente para reduzir retrabalho em tarefas recorrentes.",
      "Scripts, guias e comandos reutilizáveis para padronizar execução com IA.",
      "Uso de LLMs com validação técnica em etapas de especificação, revisão e automação.",
    ],
    metrics: [
      { label: "Skills", value: "43" },
      { label: "Ambiente", value: "Claude Code CLI" },
      { label: "Foco", value: "Automação técnica" },
    ],
  },
  {
    id: "domusdev",
    name: "DomusDev",
    href: "https://domusdev.com.br/",
    domain: "domusdev.com.br",
    type: "site",
    category: "Web / Full Stack",
    image: "/Domus.png",
    shortDescription:
      "Site e base operacional para projetos Domus, com foco em performance, apresentação técnica e manutenção contínua.",
    stack: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Supabase"],
    features: [
      "Arquitetura web em React, Next.js, TypeScript e Supabase.",
      "Organização de conteúdo técnico, páginas institucionais e materiais de proposta.",
      "Otimizações de SEO, acessibilidade e performance com métricas próximas de 100 no Lighthouse.",
      "Uso de IA para apoiar documentação, revisão, prototipação e automação de fluxos internos.",
    ],
    metrics: [
      { label: "Performance", value: "Lighthouse ~100" },
      { label: "Stack", value: "Full Stack" },
      { label: "Entrega", value: "Web em produção" },
    ],
  },
  {
    id: "portal-cliente",
    name: "Portal do Cliente ERP Autocom3",
    href: "https://www.autocom3.com.br/autocom3clientes",
    domain: "autocom3.com.br/autocom3clientes",
    type: "erp",
    category: "ERP",
    image: "/portal-cliente.png",
    shortDescription:
      "Portal ERP com módulos operacionais, dashboards e biblioteca compartilhada de componentes reutilizáveis.",
    stack: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "React Query", "PostgreSQL"],
    features: [
      "Construção de páginas, fluxos e dashboards integrados ao ecossistema ERP.",
      "Componentização e padronização visual com Design System compartilhado.",
      "Integração com APIs REST, PostgreSQL, SQL Server e serviços internos.",
      "Melhorias de performance, usabilidade e manutenção em ambiente de produção.",
    ],
    metrics: [
      { label: "Páginas", value: "50+" },
      { label: "Componentes", value: "500+" },
      { label: "Organizações", value: "20+" },
    ],
  },
  {
    id: "propose",
    name: "Propose SaaS",
    href: "https://propose-sable.vercel.app/",
    domain: "propose-sable.vercel.app",
    type: "saas",
    category: "SaaS",
    image: "/propose.png",
    shortDescription:
      "Editor SaaS para criação de propostas comerciais com blocos, aceite digital, analytics e exportação em PDF.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JSON Schema", "PDF Export"],
    features: [
      "Editor visual baseado em blocos configuráveis.",
      "Renderização dinâmica a partir de estruturas JSON.",
      "Aceite digital com e-mail, IP e data/hora.",
      "Analytics de visualização e geração de PDF com fidelidade visual.",
    ],
    metrics: [
      { label: "Arquitetura", value: "JSON-driven" },
      { label: "Produto", value: "SaaS" },
      { label: "Entrega", value: "Editor web" },
    ],
  },
  {
    id: "portal-contabil",
    name: "Portal Contábil ERP",
    href: "https://www.autocom3.com.br/autocom3contabilidade/",
    domain: "autocom3.com.br/autocom3contabilidade",
    type: "erp",
    category: "Fiscal / ERP",
    image: "/portal-contador.png",
    shortDescription:
      "Portal para rotinas contábeis e fiscais, com dashboards, relatórios e integração com módulos financeiros do ERP.",
    stack: ["React", "Next.js", "TypeScript", "C#", "Node.js", "PostgreSQL"],
    features: [
      "Interfaces para acompanhamento fiscal e contábil.",
      "Dashboards e relatórios de conciliação.",
      "Integração com módulos financeiros e dados corporativos.",
      "Ajustes de arquitetura e experiência para uso operacional.",
    ],
    metrics: [
      { label: "Domínio", value: "Fiscal / ERP" },
      { label: "Dados", value: "PostgreSQL + C#" },
      { label: "Interface", value: "Dashboards" },
    ],
  },
  {
    id: "gerador-propostas",
    name: "Gerador de Propostas Autocom3",
    href: "https://www.autocom3.com.br/proposta/6704ba3e-3ec8-4f53-9682-5e33ac68ff4c",
    domain: "autocom3.com.br/proposta",
    type: "internal",
    category: "Ferramenta interna",
    image: "/propostas-ac3.png",
    shortDescription:
      "Ferramenta interna para montagem de propostas comerciais com templates, blocos e renderização dinâmica.",
    stack: ["React", "TypeScript", "Next.js", "JSON Schema", "Tailwind CSS"],
    features: [
      "Editor de propostas com composição visual e estrutura em blocos.",
      "Templates padronizados para reduzir retrabalho da equipe comercial.",
      "Renderização dinâmica por JSON Schema.",
      "Fluxo de publicação e compartilhamento de propostas pela web.",
    ],
    metrics: [
      { label: "Eficiência", value: "-60% tempo" },
      { label: "Editor", value: "Blocos" },
      { label: "Uso", value: "Interno" },
    ],
  },
] as const
