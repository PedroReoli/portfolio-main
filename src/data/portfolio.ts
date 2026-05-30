export const profile = {
  name: "Pedro Lucas Reis",
  role: "Frontend Engineer (React/Next.js/TypeScript) | Full-stack background (Node/C#)",
  email: "pedrosousa2160@gmail.com",
  phoneLabel: "+55 (24) 9932-64040",
  phoneHref: "https://wa.me/5524993264040",
  location: "Volta Redonda, RJ",
  website: "https://pedroreoli.vercel.app/",
  linkedin: "https://www.linkedin.com/in/pedro-lucas-reis-a93945171/",
  github: "https://github.com/PedroReoli",
  summary: [
    "Frontend Engineer (React/Next.js/TypeScript) com experiência em produtos ERP/SaaS em produção desde 2022. Foco em UI escalável, performance e DX — do design system ao consumo de APIs.",
    "Full stack como apoio: Node.js e C# para integração com serviços, regras de negócio e banco. Uso IA no fluxo (copilots, automações e avaliação) para acelerar sem terceirizar decisão técnica.",
  ],
} as const

export const highlights = [
  {
    label: "Experiência",
    value: "4+ anos",
    description: "Produtos web em produção (ERP/SaaS).",
  },
  {
    label: "Foco principal",
    value: "Frontend",
    description: "React, Next.js, performance e UI escalável.",
  },
  {
    label: "Impacto",
    value: "+40% performance",
    description: "Redução de tempo de carregamento em ERP.",
  },
  {
    label: "Produto",
    value: "ERP/SaaS",
    description: "Portais, dashboards e fluxos de negócio.",
  },
  {
    label: "Diferencial",
    value: "IA aplicada",
    description: "Copilots, automações e UX com LLMs.",
  },
] as const

export const skills = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Radix UI",
      "Framer Motion",
      "React Query",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "C#", "REST APIs", "PostgreSQL"],
  },
  {
    title: "IA Aplicada",
    items: [
      "LLM Integration",
      "Streaming Responses",
      "AI Copilots",
      "Prompt Engineering",
    ],
  },
  {
    title: "Performance",
    items: ["Core Web Vitals", "Lighthouse", "Code Splitting", "Lazy Loading"],
  },
  {
    title: "Ferramentas",
    items: ["Git", "GitHub", "Swagger", "Postman"],
  },
] as const

export const experiences = [
  {
    company: "Autocom3",
    role: "Engenheiro de Software Pleno",
    context: "Empresa de tecnologia especializada no desenvolvimento de plataformas ERP para operações de varejo e gestão empresarial.",
    period: "Nov 2024 - Atual",
    location: "Volta Redonda, Brazil",
    stack: ["React", "Next.js", "Angular", "TypeScript", "Node.js", "C#", "React Native", "Electron", "REST APIs"],
    achievements: [
      "Atuação no desenvolvimento frontend de aplicações web do ERP utilizando React, Next.js e TypeScript.",
      "Implementação de otimizações de desempenho que reduziram o tempo de carregamento das aplicações em até 40%.",
      "Participação na modernização de sistemas legados, migrando soluções em Visual FoxPro para uma nova arquitetura baseada em Electron.",
      "Definição e implementação de arquitetura de componentes escalável, aumentando a produtividade do desenvolvimento.",
      "Integração com APIs REST e colaboração em decisões de arquitetura de produto e experiência do usuário.",
    ],
  },
  {
    company: "Programa EvaTech (UniFOA + SEBRAE)",
    role: "Mentor de Tecnologia",
    context: "Programa de educação tecnológica e inclusão digital voltado à capacitação de comunidades sub-representadas.",
    period: "Jun 2024 - Dez 2024",
    location: "Volta Redonda, Brazil",
    stack: ["IA", "Segurança digital", "Produtividade", "Mentoria"],
    achievements: [
      "Mentoria e capacitação de mais de 30 participantes em fundamentos de tecnologia e inclusão digital.",
      "Condução de aulas sobre inteligência artificial, segurança digital e ferramentas de produtividade.",
      "Desenvolvimento de materiais didáticos e trilhas estruturadas de aprendizagem tecnológica.",
    ],
  },
  {
    company: "SIVIS ",
    role: "Engenheiro de Software",
    context: "Empresa especializada no desenvolvimento de sistemas ERP e plataformas de gestão para associações e organizações.",
    period: "Ago 2022 - Jun 2024",
    location: "Volta Redonda, Brazil",
    stack: ["React", "TypeScript", "Node.js", "C#", "REST APIs", "PostgreSQL"],
    achievements: [
      "Desenvolvimento de aplicações web corporativas e sistemas internos de gestão.",
      "Implementação de APIs backend para integrações e suporte a fluxos operacionais.",
      "Criação de dashboards administrativos e ferramentas de apoio à gestão empresarial.",
      "Contribuição para melhorias de desempenho, estabilidade e manutenção das aplicações.",
    ],
  },
] as const

export const education = {
  degree: "Bacharelado em Sistemas de Informação",
  institution: "Centro Universitário de Volta Redonda (UniFOA)",
  period: "2022 - 2025",
} as const

export const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "B2" },
  { name: "Espanhol", level: "B1" },
] as const

export const skillsLabels = {
  kicker: "Competências Técnicas",
  title1: "STACK",
  title2: "DE PONTA",
} as const

export const projectsLabels = {
  kicker: "Projetos selecionados",
  title1: "PROJETOS",
  title2: "FOCADOS",
  details: "Detalhes",
  visit: "Abrir",
  stack: "Stack",
  features: "Funcionalidades",
  metrics: "Métricas & Impacto",
  close: "Fechar",
  all: "Todos",
  types: {
    site: "Site",
    erp: "ERP",
    saas: "SaaS",
    mobile: "Mobile",
    internal: "Interno",
  },
} as const

export const projects = [
  {
    id: "domusdev",
    name: "DomusDev",
    href: "https://domusdev.com.br/",
    domain: "domusdev.com.br",
    type: "site",
    category: "Full Stack",
    image: "/Domus.png",
    shortDescription:
      "Site institucional de software house com foco em soluções sob medida e alta performance.",
    stack: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    features: [
      "Site institucional com identidade visual própria",
      "Seções focadas em serviços e cases",
      "Design system próprio e componentes reutilizáveis",
      "SEO técnico e meta tags otimizadas",
    ],
    metrics: [
      { label: "Performance", value: "Lighthouse 95+" },
      { label: "Responsivo", value: "Mobile-first" },
      { label: "Identidade", value: "Design system próprio" },
    ],
  },
  {
    id: "portal-cliente",
    name: "Portal do Cliente",
    href: "https://www.autocom3.com.br/autocom3clientes",
    domain: "autocom3.com.br/autocom3clientes",
    type: "erp",
    category: "ERP + E-commerce",
    image: "/portal-cliente.png",
    shortDescription:
      "Portal autenticado com ERP + e-commerce, histórico de compras e documentos fiscais.",
    stack: ["React", "Next.js", "TypeScript", "Node.js", "REST APIs", "TailwindCSS"],
    features: [
      "Autenticação e área logada do cliente",
      "Fluxo de compra integrado ao ERP",
      "Histórico de pedidos e documentos fiscais (XML)",
      "Gerenciamento assíncrono de dados via APIs REST",
    ],
    metrics: [
      { label: "Performance", value: "+40% vs legado" },
      { label: "Integração", value: "XML fiscal + ERP" },
      { label: "Dados", value: "Fluxos assíncronos" },
    ],
  },
  {
    id: "propose",
    name: "Propose",
    href: "https://propose-sable.vercel.app/",
    domain: "propose-sable.vercel.app",
    type: "saas",
    category: "SaaS NoCode",
    image: "/propose.png",
    shortDescription:
      "SaaS NoCode para criar propostas comerciais e páginas dinâmicas com aceite digital.",
    stack: ["React", "Next.js", "TypeScript", "TailwindCSS", "JSON Schema", "PDF Export"],
    features: [
      "Editor visual no-code com sistema de blocos",
      "Aceite digital com registro de nome, email, IP e timestamp",
      "Tracking de engajamento: visualizações, tempo por seção, histórico",
      "Exportação em PDF com fidelidade ao layout",
      "Estrutura JSON para escalabilidade do sistema",
    ],
    metrics: [
      { label: "Arquitetura", value: "JSON-driven" },
      { label: "Aceite digital", value: "IP + timestamp" },
      { label: "Analytics", value: "Engagement por seção" },
    ],
  },
  {
    id: "portal-contabil",
    name: "Portal Contábil",
    href: "https://www.autocom3.com.br/autocom3contabilidade/",
    domain: "autocom3.com.br/autocom3contabilidade",
    type: "erp",
    category: "Gestão Fiscal",
    image: "/portal-contador.png",
    shortDescription:
      "Sistema para gestão fiscal e contábil, com regras da reforma tributária aplicadas.",
    stack: ["React", "Next.js", "TypeScript", "C#", "Node.js", "PostgreSQL"],
    features: [
      "Regras de negócio para a reforma tributária",
      "Dashboards e visualização de dados fiscais",
      "Integração com módulos financeiros do ERP",
      "Exportação e conferência de relatórios estruturados",
    ],
    metrics: [
      { label: "Regulatório", value: "Reforma tributária" },
      { label: "Integração", value: "ERP financeiro" },
      { label: "Visualização", value: "Dashboards estruturados" },
    ],
  },
  {
    id: "gerador-propostas",
    name: "Gerador de Propostas",
    href: "https://www.autocom3.com.br/proposta/6704ba3e-3ec8-4f53-9682-5e33ac68ff4c",
    domain: "autocom3.com.br/proposta",
    type: "internal",
    category: "NoCode",
    image: "/propostas-ac3.png",
    shortDescription:
      "Plataforma no-code para montar propostas comerciais com editor drag-and-drop.",
    stack: ["React", "TypeScript", "Next.js", "JSON Schema", "TailwindCSS"],
    features: [
      "Editor drag-and-drop para construção de páginas",
      "Geração dinâmica de páginas baseada em JSON",
      "Integração com o fluxo comercial da equipe de vendas",
      "Reaproveitamento de blocos e templates",
    ],
    metrics: [
      { label: "Arquitetura", value: "JSON-driven" },
      { label: "Editor", value: "Drag-and-drop" },
      { label: "Workflow", value: "Integrado a vendas" },
    ],
  },
  // {
  //   id: "ac3flex",
  //   name: "ERP Mobile — AC3Flex",
  //   href: "https://play.google.com/store/apps/details?id=br.com.autocom3tecnologiaesoftwaresltda.ac3flex&hl=pt_PT",
  //   domain: "Google Play",
  //   type: "mobile",
  //   category: "ERP Mobile",
  //   image: "/ac3-flex.png",
  //   shortDescription:
  //     "App Android de ERP para gestão empresarial em tempo real, publicado na Google Play.",
  //   stack: ["React Native", "TypeScript", "REST APIs", "Node.js"],
  //   features: [
  //     "Gestão empresarial direto do mobile",
  //     "Integração com APIs backend do ERP",
  //     "Sincronização de dados em tempo real",
  //     "Interfaces responsivas focadas em mobile",
  //     "Controle e acompanhamento de operações no campo",
  //   ],
  //   metrics: [
  //     { label: "Distribuição", value: "Publicado na Google Play" },
  //     { label: "Sincronização", value: "Tempo real" },
  //     { label: "UX", value: "Mobile-first" },
  //   ],
  // },
] as const
