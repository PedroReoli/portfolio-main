export const profile = {
  name: "Pedro Lucas Reis",
  role: "Full Stack Software Engineer",
  tagline: "Frontend Architecture • APIs • Cloud • AI Engineering",
  email: "pedrosousa2160@gmail.com",
  phoneLabel: "+55 24 99326-4040",
  phoneHref: "https://wa.me/5524993264040",
  location: "Volta Redonda, RJ - Brazil | Remote or Hybrid",
  website: "https://pedroreis.vercel.app/",
  linkedin: "https://www.linkedin.com/in/pedro-lucas-reis-a93945171",
  github: "https://github.com/PedroReoli",
  summary: [
    "Full Stack Software Engineer with 4 years of hands-on experience architecting and delivering enterprise ecosystems, ERPs, multi-tenant SaaS platforms, and high-scale web applications.",
    "Specialized in TypeScript, React, Next.js, Node.js, NestJS, and PostgreSQL, with deep expertise in scalable Design Systems (500+ components), web performance optimization (Lighthouse ~100), and engineering-applied AI workflows.",
  ],
} as const

export const blogPosts = [] as const

export const projectsLabels = {
  kicker: "Selected Projects",
  title1: "TECHNICAL",
  title2: "PROJECTS",
  details: "Details",
  visit: "Visit project",
  stack: "Technologies",
  features: "Key deliverables",
  metrics: "Metrics",
  close: "Close",
  all: "All",
  types: {
    site: "Web",
    erp: "ERP",
    saas: "SaaS",
    mobile: "Mobile",
    internal: "Internal",
    ai: "AI / Automation",
  },
} as const

export const highlights = [
  {
    label: "Experience",
    value: "4+",
    suffix: "years",
    description: "SaaS, enterprise ERPs, cloud platforms, and applied AI",
  },
  {
    label: "Products",
    value: "10+",
    suffix: "in production",
    description: "High-impact production solutions operating daily",
  },
  {
    label: "Design System",
    value: "500+",
    suffix: "components",
    description: "Reusable component library reducing dev time by 70%",
  },
] as const

export const metricsData = [
  {
    id: "components",
    label: "Reusable Components",
    value: "500+",
    sub: "Unified Enterprise Design System",
    color: "from-[#1d68f2] to-[#00d4ff]",
    borderColor: "rgba(29, 104, 242, 0.4)",
    highlight: "-70% time to build new screens and modules",
  },
  {
    id: "dev-reduction",
    label: "Dev Cycle Reduction",
    value: "-70%",
    sub: "Engineering Velocity & Standardization",
    color: "from-[#10b981] to-[#34d399]",
    borderColor: "rgba(16, 185, 129, 0.4)",
    highlight: "Standardized tokens, reusable hooks, and modular UI",
  },
  {
    id: "products",
    label: "Products in Production",
    value: "10+",
    sub: "SaaS, ERPs, and B2B Tools",
    color: "from-[#f59e0b] to-[#fbbf24]",
    borderColor: "rgba(245, 158, 11, 0.4)",
    highlight: "Enterprise platforms actively used every day",
  },
  {
    id: "erp-pages",
    label: "ERP Pages & Modules",
    value: "100+",
    sub: "Web Enterprise Ecosystem",
    color: "from-[#1d68f2] to-[#60a5fa]",
    borderColor: "rgba(29, 104, 242, 0.4)",
    highlight: "RBAC authentication, analytics dashboards, and billing",
  },
  {
    id: "token-economy",
    label: "AI Token Savings",
    value: "92.2%",
    sub: "Achilles CDP Agent (AXTree Engine)",
    color: "from-[#8b5cf6] to-[#c084fc]",
    borderColor: "rgba(139, 92, 246, 0.4)",
    highlight: "Reduced 80,000 DOM tokens to < 2,000 per webpage",
  },
  {
    id: "lighthouse",
    label: "Lighthouse Score",
    value: "100",
    sub: "Performance, SEO, A11y & Best Practices",
    color: "from-[#10b981] to-[#06b6d4]",
    borderColor: "rgba(16, 185, 129, 0.4)",
    highlight: "Optimized web apps with flawless Core Web Vitals",
  },
  {
    id: "organizations",
    label: "Client Organizations",
    value: "20+",
    sub: "Active Companies on Platform",
    color: "from-[#00d4ff] to-[#38bdf8]",
    borderColor: "rgba(0, 212, 255, 0.4)",
    highlight: "Multi-tenant financial, fiscal, and operational management",
  },
  {
    id: "mentees",
    label: "Mentees & Students",
    value: "30+",
    sub: "Digital Inclusion & Applied AI",
    color: "from-[#ec4899] to-[#f43f5e]",
    borderColor: "rgba(236, 72, 153, 0.4)",
    highlight: "Technical training in software engineering (EvaTech / Sebrae)",
  },
] as const

export const skills = [
  {
    category: "Frontend Architecture",
    items: [
      { name: "React & Next.js", icon: "SiReact", usage: "App Router, SSR, Server Actions, selective hydration, and high performance." },
      { name: "TypeScript", icon: "SiTypescript", usage: "Strict type contracts, reusable components, and robust API domain boundaries." },
      { name: "Design Systems", icon: "FiLayers", usage: "500+ accessible components with Tailwind CSS, Radix UI, and semantic tokens." },
      { name: "Tailwind CSS & CSS", icon: "SiTailwindcss", usage: "Design tokens, fluid responsiveness, micro-interactions, and dark mode." },
      { name: "Framer Motion", icon: "SiFramer", usage: "High-impact micro-interactions, smooth layout transitions, and tech animations." },
      { name: "React Query & Zustand", icon: "SiReactquery", usage: "Server state management, smart caching, invalidation, and optimistic UI." },
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      { name: "Node.js & NestJS", icon: "SiNodedotjs", usage: "Enterprise REST APIs, layered clean architecture, and modular microservices." },
      { name: "Fastify & Express", icon: "SiExpress", usage: "Low-latency microservices, middlewares, JWT auth, and protected endpoints." },
      { name: "C# & ASP.NET", icon: "SiDotnet", usage: "Integration and maintenance of enterprise services connected to legacy ERPs." },
      { name: "Electron & Tauri", icon: "SiTauri", usage: "Industrial-grade desktop applications (Flagship Organon v6.23.2)." },
      { name: "Webhooks & Event-Driven", icon: "SiOpenapiinitiative", usage: "Event pipelines, message queuing, and reliable inter-system integrations." },
      { name: "Authentication & RBAC", icon: "FiShield", usage: "Granular role-based access control, secure sessions, and multi-tenancy." },
    ],
  },
  {
    category: "Databases & Cloud",
    items: [
      { name: "PostgreSQL", icon: "SiPostgresql", usage: "Relational schema modeling, migrations, indexes, optimized queries, and procedures." },
      { name: "Supabase & SQLite", icon: "SiSupabase", usage: "Offline-first embedded SQLite and cloud serverless architectures." },
      { name: "SQL Server & MySQL", icon: "FiDatabase", usage: "Transactional ERP databases and business intelligence reporting." },
      { name: "AWS & Docker", icon: "FiCloud", usage: "API Gateway, S3 storage, containerization, and automated deployment pipelines." },
      { name: "Git & CI/CD", icon: "SiGithub", usage: "Repository governance, automated testing workflows, and continuous delivery." },
      { name: "Web Scraping & Puppeteer", icon: "SiPuppeteer", usage: "Headless browser automation, structured data extraction, and SFTP flows." },
    ],
  },
  {
    category: "AI Engineering & Innovation",
    items: [
      { name: "Achilles CDP Agent", icon: "FiCpu", usage: "Autonomous AI web agent via Chrome DevTools Protocol, AXTree, and MCP server." },
      { name: "Whisper & LLMs", icon: "SiOpenai", usage: "Real-time speech-to-text audio intelligence and NLP integrated into apps." },
      { name: "Claude Code & Skills", icon: "SiAnthropic", usage: "ReoliOS CLI suite with 75+ specialized engineering & automation skills." },
      { name: "Prompt & Context Design", icon: "FiCode", usage: "Semantic context structuring and agent workflows with zero token waste." },
      { name: "Lighthouse & Core Web Vitals", icon: "FiZap", usage: "Deep performance profiling achieving 100/100 across all key web vitals." },
      { name: "Multi-Tenant Architecture", icon: "FiLayers", usage: "Scalable SaaS platforms with data isolation and custom B2B branding." },
    ],
  },
] as const

export const experiences = [
  {
    company: "Domus - Sua Solução Digital",
    role: "Full Stack Engineer & Tech Lead",
    context: "End-to-end engineering of digital products, SaaS platforms, administrative dashboards, and bespoke web apps.",
    period: "Oct/2025 - Present",
    location: "Remote",
    stack: ["TypeScript", "React", "Next.js", "Node.js", "Express", "Fastify", "PostgreSQL", "Supabase", "REST APIs", "Applied AI"],
    achievements: [
      "End-to-end product engineering spanning frontend, backend, PostgreSQL/Supabase schema design, and REST APIs.",
      "Engineered modular, scalable architectures for B2B SaaS platforms with high component reusability.",
      "Optimized web performance, achieving scores near 100 on Google Lighthouse in Performance, SEO, and A11y.",
      "Integrated AI agents into product workflows for specification, code review automation, and CI/CD delivery.",
    ],
  },
  {
    company: "SIVIS Tecnologia",
    role: "Full Stack Engineer | Frontend & Integrations",
    context: "Enterprise web application architecture, legacy UI modernization, and high-reliability API integrations.",
    period: "Nov/2025 - Present",
    location: "Remote",
    stack: ["TypeScript", "React", "Next.js", "Angular", "Node.js", "PostgreSQL", "MySQL", "REST APIs", "Git"],
    achievements: [
      "Modernized and refactored critical production enterprise interfaces utilizing React, Next.js, and Angular.",
      "Optimized database queries and reporting pipelines in PostgreSQL and MySQL, reducing latency by 35%.",
      "Standardized REST API contracts with end-to-end strict TypeScript typing, guaranteeing runtime data integrity.",
      "Implemented modern componentization standards and clean code patterns, accelerating new system integrations.",
    ],
  },
  {
    company: "Autocom3",
    role: "Full Stack Engineer",
    context: "Engineering and scaling enterprise ERP ecosystems, corporate portals, and high-volume web/desktop applications.",
    period: "Nov/2024 - Present",
    location: "Volta Redonda, RJ | Hybrid",
    stack: ["TypeScript", "React", "Next.js", "Node.js", "NestJS", "C#", "PostgreSQL", "SQL Server", "AWS", "Docker", "Design Systems"],
    achievements: [
      "Led the architecture of the enterprise Design System with 500+ components, cutting feature dev cycles by up to 70%.",
      "Continuous performance optimizations reducing page load times by up to 40% across ERP apps for 20+ organizations.",
      "Built enterprise REST APIs with JWT authentication, granular RBAC access controls, and event-driven Webhooks.",
      "Engineered relational schemas, migrations, and procedures in PostgreSQL and SQL Server with AWS cloud deployments.",
    ],
  },
  {
    company: "EvaTech",
    role: "Technology & AI Mentor / Instructor",
    context: "Technical training and digital inclusion program (UniFOA + SEBRAE partnership) empowering talent in tech and AI.",
    period: "Jun/2024 - Dec/2024",
    location: "Volta Redonda, RJ",
    stack: ["Artificial Intelligence", "Prompt Engineering", "Agile Methodologies", "TypeScript", "React", "Technical Mentorship"],
    achievements: [
      "Mentored and trained 30+ participants in artificial intelligence, software programming, and practical innovation.",
      "Led hands-on workshops and dynamic coding sessions on modern development with TypeScript, React, and LLM automation.",
      "Delivered practical instruction on prompt engineering and applying AI productivity tools to modern software workflows.",
      "Guided students in building real-world software prototypes that solved concrete local business challenges.",
    ],
  },
  {
    company: "SIVIS Tecnologia",
    role: "Junior Full Stack Engineer",
    context: "Development of administrative dashboards, ERP modules, and platforms connecting UI, backend, and relational databases.",
    period: "Aug/2022 - Jun/2024",
    location: "Volta Redonda, RJ | Hybrid",
    stack: ["React", "TypeScript", "JavaScript", "Node.js", "C#", "PHP", "PostgreSQL", "MySQL", "REST APIs", "Git"],
    achievements: [
      "Developed and delivered production ERP modules and operational dashboards for enterprise associations.",
      "Built and maintained REST APIs and integrations for operational workflows, bank billing, and payment gateways.",
      "Modeled relational schemas in PostgreSQL and MySQL, implementing consistent business rules and validation logic.",
      "Collaborated in agile squads with Scrum and Kanban, actively contributing to code reviews and continuous improvements.",
    ],
  },
] as const

export const education = {
  degree: "Bachelor of Science in Information Systems",
  institution: "University Center of Volta Redonda (UniFOA)",
  period: "Feb/2022 - Nov/2025",
  status: "Completed",
  highlights: [
    "Core focus on Software Engineering, Data Structures, Relational Databases, and Information Security.",
    "Active participant in university tech initiatives and innovation mentorship in partnership with SEBRAE.",
  ],
} as const

export const languages = [
  { name: "Portuguese", level: "Native", info: "Fluent verbal and technical communication" },
  { name: "English", level: "B2 (Upper Intermediate)", info: "Technical reading, documentation writing, and professional speaking" },
  { name: "Mentorship & Community", level: "EvaTech / SEBRAE", info: "Technical leadership and training for 30+ participants" },
] as const

export const projects = [
  {
    id: "organon-ecosystem",
    name: "Organon Ecosystem v6.23.2",
    href: "https://github.com/PedroReoli",
    domain: "Desktop & Mobile OS",
    type: "ai",
    category: "Flagship • Business OS & AI",
    image: "/Domus.png",
    flagship: true,
    shortDescription:
      "Cross-platform offline-first Business OS with 19 operational screens, TipTap rich editor, Excalidraw canvas, Whisper AI meeting audio transcription, and SQLite.",
    stack: ["Electron", "React", "TypeScript", "Vite", "TipTap", "Excalidraw", "Nivo Charts", "Fastify", "SQLite", "Whisper AI"],
    features: [
      "Unified workspace monorepo covering Electron Desktop, Mobile (Expo/React Native), and local Fastify backend.",
      "Structured rich-text editor with TipTap seamlessly coupled with an infinite Excalidraw canvas.",
      "Local audio intelligence engine powered by Whisper AI for automatic meeting transcriptions and action item generation.",
      "Offline-first SQLite persistence with resilient synchronization and interactive analytics charts via Nivo.",
    ],
    metrics: [
      { label: "Scope", value: "19 Operational Views" },
      { label: "Architecture", value: "Offline-First + SQLite" },
    ],
  },
  {
    id: "achilles-cdp-agent",
    name: "Achilles CDP Agent",
    href: "https://github.com/PedroReoli/Achilles-CDP-Agent",
    domain: "github.com",
    type: "ai",
    category: "AI Engineering & Automation",
    image: "/Domus.png",
    flagship: true,
    shortDescription:
      "Autonomous AI web navigation engine built on CDP and AXTree semantic extraction, achieving 92.2% LLM token savings with built-in MCP server integration.",
    stack: ["Python", "CDP", "Playwright", "Pydantic v2", "AXTree", "MCP Server", "Asyncio"],
    features: [
      "Smart antibot bypass and persistent session management preserving logins without credential exposure.",
      "Drastic reduction of massive HTML DOM trees from 80,000 down to < 2,000 tokens using accessibility semantics.",
      "Integrated Model Context Protocol (MCP) server enabling zero-friction agent tool use in Claude Code and Cursor.",
      "High-throughput asynchronous execution for automated form submissions, multi-step navigation, and deep scraping.",
    ],
    metrics: [
      { label: "Token Savings", value: "92.2% (AXTree)" },
      { label: "Protocol", value: "Native MCP Server" },
    ],
  },
  {
    id: "portal-unificado-autocom3",
    name: "Unified Enterprise ERP Portal",
    href: "https://www.autocom3.com.br/autocom3clientes",
    domain: "autocom3.com.br",
    type: "erp",
    category: "Enterprise ERP",
    image: "/portal-cliente.png",
    flagship: true,
    shortDescription:
      "Enterprise ERP hub with 100+ screens serving 20+ organizations, powered by an in-house Design System of 500+ components that reduced dev cycles by 70%.",
    stack: ["React", "Next.js", "TypeScript", "Node.js", "NestJS", "PostgreSQL", "React Query", "Tailwind CSS"],
    features: [
      "Unified corporate hub covering customer self-service, financial administration, accounting, and analytics.",
      "Scalable shared Design System with 500+ typed components accelerating new feature deployment by 70%.",
      "Database and hydration optimization achieving a 40% load time reduction on heavy transactional views.",
      "Secure JWT authentication, granular role-based access control (RBAC), and real-time webhook event integrations.",
    ],
    metrics: [
      { label: "Scale", value: "100+ Views • 20+ Orgs" },
      { label: "Design System", value: "500+ Components (-70%)" },
    ],
  },
] as const
