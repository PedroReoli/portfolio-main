export const profile = {
  name: "Pedro Lucas Reis",
  role: "Mid-Level Full Stack Developer | Frontend Specialization",
  tagline: "React • Next.js • TypeScript • Node.js",
  email: "pedrosousa2160@gmail.com",
  phoneLabel: "+55 24 99326-4040",
  phoneHref: "https://wa.me/5524993264040",
  location: "Volta Redonda, RJ | Remote or Hybrid | Contractor (PJ)",
  website: "https://pedroreis.vercel.app/",
  linkedin: "https://www.linkedin.com/in/pedro-lucas-reis-a93945171",
  github: "https://github.com/PedroReoli",
  summary: [
    "Mid-Level Full Stack Developer with 4 years of experience specializing in Frontend (React, Next.js, TypeScript, and Node.js), focused on building high-performance ERP ecosystems, SaaS platforms, portals, and dashboards.",
    "Solid expertise in software architecture, technical leadership, Design Systems (500+ reusable components), backend services with Express/Fastify, and applied artificial intelligence for engineering productivity.",
  ],
} as const

export const highlights = [
  {
    label: "Experience",
    value: "4+",
    suffix: "years",
    description: "Mid-Level Full Stack focusing on Frontend & ERP/SaaS",
  },
  {
    label: "Specialization",
    value: "React & Node",
    suffix: "",
    description: "TypeScript, Next.js, REST APIs & Design Systems",
  },
  {
    label: "Technical Leadership",
    value: "Tech Lead",
    suffix: "",
    description: "Architecture, code reviews & project direction",
  },
] as const

export const blogPosts = [
  {
    id: "reolios-skills-claude",
    title: "ReoliOS: Operational Skills Platform for Claude Code",
    category: "Artificial Intelligence & Automation",
    date: "Jul 31, 2026",
    readTime: "5 min",
    excerpt: "Design and architecture of 43 operational skills to execute business workflows in a single CLI terminal.",
    htmlUrl: "/blog/ia-no-desenvolvimento-web.html",
  },
  {
    id: "ia-desenvolvimento-web",
    title: "How AI Accelerates Software Delivery Without Compromising Architecture",
    category: "Software Engineering",
    date: "Jul 28, 2026",
    readTime: "4 min",
    excerpt: "Prompt engineering, LLM automations, and context management to eliminate manual tasks and boost engineering throughput.",
    htmlUrl: "/blog/ia-no-desenvolvimento-web.html",
  },
  {
    id: "arquitetura-escalavel-react",
    title: "Frontend Architecture & 500+ Reusable Component Library",
    category: "Frontend Architecture",
    date: "Jul 20, 2026",
    readTime: "6 min",
    excerpt: "Componentization standards and Design Systems that cut new feature development time by up to 70%.",
    htmlUrl: "/blog/arquitetura-escalavel-react.html",
  },
] as const

export const skills = [
  {
    category: "Frontend Engine",
    items: [
      { name: "React", icon: "SiReact", usage: "Building scalable UIs, Design Systems, and high-performance ERP portals." },
      { name: "Next.js", icon: "SiNextdotjs", usage: "SSR/SSG apps focused on 95+ SEO scores, dynamic routes, and UX." },
      { name: "TypeScript", icon: "SiTypescript", usage: "End-to-end strict typing across frontend UIs and backend API contracts." },
      { name: "Tailwind CSS", icon: "SiTailwindcss", usage: "Rapid styling using design tokens and responsive utility primitives." },
      { name: "Radix UI", icon: "SiRadixui", usage: "Building accessible WCAG compliant primitives for enterprise dashboards." },
      { name: "Framer Motion", icon: "SiFramer", usage: "Fluid layout animations, micro-interactions, and dynamic dialogs." },
    ],
  },
  {
    category: "Backend & Services",
    items: [
      { name: "Node.js", icon: "SiNodedotjs", usage: "Developing REST APIs, microservices, and business logic execution." },
      { name: "Express.js", icon: "SiExpress", usage: "Routing, auth middlewares, and API endpoints for ERP and e-commerce." },
      { name: "Fastify", icon: "SiFastapi", usage: "High-speed backend microservices with minimal execution overhead." },
      { name: "C# & ASP.NET", icon: "SiDotnet", usage: "Evolving enterprise backend services and ERP system integrations." },
      { name: "Tauri & Rust", icon: "SiTauri", usage: "Building ultra-lightweight, secure, and native desktop applications." },
      { name: "REST APIs & Webhooks", icon: "SiOpenapiinitiative", usage: "Async communication between ERP, payment gateways, and external services." },
    ],
  },
  {
    category: "Databases & Cloud",
    items: [
      { name: "PostgreSQL", icon: "SiPostgresql", usage: "Relational modeling for ERPs, query optimization, and Supabase integration." },
      { name: "SQL Server", icon: "FiDatabase", usage: "High-availability enterprise data management and fiscal report queries." },
      { name: "MySQL", icon: "SiMysql", usage: "Production relational databases powering corporate web platforms." },
      { name: "Supabase", icon: "SiSupabase", usage: "Serverless backend with real-time DB, Auth, and instant Storage." },
      { name: "Docker", icon: "SiDocker", usage: "Microservice containerization for isolated testing and deployments." },
      { name: "Git & GitHub", icon: "SiGithub", usage: "Version control, CI/CD pipelines, code reviews, and tech team direction." },
    ],
  },
  {
    category: "Architecture & Applied AI",
    items: [
      { name: "Design Systems (500+)", icon: "FiLayers", usage: "Creating and maintaining a shared UI library of 500+ reusable components." },
      { name: "React Query & State", icon: "SiReactquery", usage: "Server state management, smart query caching, and async data sync." },
      { name: "Claude Code & Anthropic", icon: "SiAnthropic", usage: "Architecting 43 operational CLI skills and engineering automations." },
      { name: "Cursor & Prompt Eng.", icon: "FiCpu", usage: "Prompt engineering for rapid debugging, refactoring, and code reviews." },
      { name: "Lighthouse & Performance", icon: "FiZap", usage: "Core Web Vitals optimization achieving near-100 Lighthouse scores." },
      { name: "Rust & Desktop Native", icon: "SiRust", usage: "High-performance native binary development using the Rust language." },
    ],
  },
] as const

export const experiences = [
  {
    company: "Autocom3",
    role: "Mid-Level Frontend Software Engineer",
    context: "ERP ecosystem featuring a 50+ page portal and a shared library of 500+ reusable components.",
    period: "Nov/2024 — Present",
    location: "Volta Redonda, Brazil",
    stack: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "React Query", "APIs REST", "GraphQL", "PostgreSQL", "SQL Server", "Git", "Applied AI"],
    achievements: [
      "Development and evolution of web applications integrated into an ERP ecosystem, focusing on frontend architecture, API integration, performance, and business rules.",
      "Built corporate portals, dashboards, admin panels, and operational workflows for clients, internal teams, and accounting departments.",
      "Contributed to a 50+ page ERP portal and a shared UI library containing over 500 reusable components.",
      "Implemented componentization standards and architecture patterns that reduced new feature dev time by up to 70%.",
      "Participated in code reviews, technical planning, backlog management, and modernizing legacy systems to modern web standards.",
      "Integrated APIs, databases, and internal/external services maintaining end-to-end alignment between frontend, backend, and business operations.",
    ],
  },
  {
    company: "DomusDev",
    role: "Full Stack Software Engineer | Tech Lead",
    context: "Digital products, web systems, and high-performance platforms achieving 100 Lighthouse scores.",
    period: "Oct/2025 — Present",
    location: "Volta Redonda, Brazil",
    stack: ["React", "Next.js", "TypeScript", "Node.js", "Express", "Fastify", "Supabase", "PostgreSQL", "APIs REST", "Git", "Lighthouse", "AI Tools"],
    achievements: [
      "Full Stack engineering across digital products, systems, and web apps from requirements gathering and architecture to implementation and deployment.",
      "Technical leadership on key projects, guiding architectural decisions, backlog prioritization, code reviews, and developer mentorship.",
      "Frontend development with React, Next.js, and TypeScript, alongside backend APIs and integrations using Node.js, Express, Fastify, and Supabase.",
      "Engineered reusable, scalable applications prioritizing performance, maintainability, and user experience.",
      "Optimized applications to achieve near-100 Lighthouse scores in Performance, Accessibility, Best Practices, and SEO.",
      "Structured AI tool adoption for rapid prototyping, debugging, code reviews, documentation, and workflow automation.",
    ],
  },
  {
    company: "SIVIS Tecnologia",
    role: "Junior Full Stack Developer",
    context: "ERP systems, admin dashboards, and corporate management platforms used in production by clubs, associations, and enterprises.",
    period: "Aug/2022 — Jun/2024",
    location: "Volta Redonda, Brazil",
    stack: ["React", "Next.js", "TypeScript", "Node.js", "C#", "ASP.NET", "APIs REST", "PostgreSQL", "SQL Server", "Git", "Agile Methodologies"],
    achievements: [
      "Development and maintenance of ERP systems, admin dashboards, portals, and management tools running in production.",
      "Worked across UIs, APIs, databases, and integrations, connecting frontend, backend, and corporate business rules.",
      "Implemented features, bug fixes, documentation, and long-term maintenance for applications used by clubs, associations, and enterprise clients.",
      "Hands-on experience with Node.js, C#, ASP.NET, PostgreSQL, SQL Server, and multi-system integrations.",
    ],
  },
] as const

export const education = {
  degree: "Bachelor's Degree in Information Systems",
  institution: "University Center of Volta Redonda (UniFOA)",
  period: "Feb/2022 — Nov/2025",
} as const

export const languages = [
  { name: "Portuguese", level: "Native" },
  { name: "English", level: "B2 Level" },
  { name: "Mentorship & Community", level: "EvaTech Volunteer Instructor (UniFOA + Sebrae - 30+ students)" },
] as const

export const projectsLabels = {
  kicker: "Selected Work",
  title1: "FEATURED",
  title2: "PROJECTS",
  details: "Details",
  visit: "View Project",
  stack: "Tech Stack",
  features: "Key Features",
  metrics: "Impact & Results",
  close: "Close",
  all: "All",
  types: {
    site: "Website",
    erp: "ERP",
    saas: "SaaS",
    mobile: "Mobile",
    internal: "Internal",
    ai: "AI / Skills",
  },
} as const

export const projects = [
  {
    id: "reolios",
    name: "ReoliOS — Claude Code Operational Skills",
    href: "https://pedroreis.vercel.app/",
    domain: "pedroreis.vercel.app",
    type: "ai",
    category: "AI & Automation",
    image: "/propose.png",
    shortDescription:
      "Platform featuring 43 operational skills for Claude Code covering marketing, SEO, data analysis, proposals, and dev workflows.",
    stack: ["Claude Code", "LLM Skills", "TypeScript", "Node.js", "Prompt Eng."],
    features: [
      "Designed and built 43 operational skills for marketing, SEO, sales proposals, and software dev",
      "Reusable CLI commands executing full business workflows in a single terminal with persistent context",
      "Structured into commercial tiers, documentation, onboarding guides, and one-step install scripts",
      "Drastically reduced manual effort while boosting operational velocity using LLMs",
    ],
    metrics: [
      { label: "Operational Skills", value: "43 Skills" },
      { label: "Platform", value: "Claude Code CLI" },
      { label: "Focus", value: "Total Velocity" },
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
      "Institutional platform and custom digital solutions achieving 100 Lighthouse scores in SEO, Performance & Accessibility.",
    stack: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Supabase"],
    features: [
      "Full Stack architecture built with React, Next.js, TypeScript, and Supabase",
      "Technical lead guiding architecture decisions and developer mentorship",
      "Performance optimizations reaching near-100 Lighthouse scores",
      "Structured AI adoption for debugging, documentation, and rapid shipping",
    ],
    metrics: [
      { label: "Performance", value: "Lighthouse 100" },
      { label: "Leadership", value: "Tech Lead" },
      { label: "Architecture", value: "Full Stack" },
    ],
  },
  {
    id: "portal-cliente",
    name: "Autocom3 ERP Customer Portal",
    href: "https://www.autocom3.com.br/autocom3clientes",
    domain: "autocom3.com.br/autocom3clientes",
    type: "erp",
    category: "ERP + E-commerce",
    image: "/portal-cliente.png",
    shortDescription:
      "50+ page ERP portal powered by a shared UI library with over 500 reusable components.",
    stack: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "React Query", "PostgreSQL"],
    features: [
      "Corporate ERP portal spanning 50+ pages and 500+ shared components",
      "Achieved up to 70% reduction in development time for new UIs",
      "Admin panels and dashboards serving enterprise clients and internal teams",
      "Async REST API integrations backed by PostgreSQL and SQL Server",
    ],
    metrics: [
      { label: "Dev Velocity", value: "-70% time" },
      { label: "Components", value: "500+ Shared" },
      { label: "ERP Scope", value: "50+ Pages" },
    ],
  },
  {
    id: "propose",
    name: "Propose SaaS",
    href: "https://propose-sable.vercel.app/",
    domain: "propose-sable.vercel.app",
    type: "saas",
    category: "NoCode SaaS",
    image: "/propose.png",
    shortDescription:
      "NoCode platform for generating interactive sales proposals with digital signature and reading analytics.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JSON Schema", "PDF Export"],
    features: [
      "Block-based drag-and-drop visual proposal editor",
      "Digital acceptance engine logging IP, email, and tamper-proof timestamp",
      "Real-time engagement telemetry tracking reader view time per section",
      "High-fidelity instant PDF rendering engine",
    ],
    metrics: [
      { label: "Architecture", value: "JSON-Driven" },
      { label: "Security", value: "IP-Verified Signature" },
      { label: "Analytics", value: "Section Telemetry" },
    ],
  },
  {
    id: "portal-contabil",
    name: "Accounting ERP Portal",
    href: "https://www.autocom3.com.br/autocom3contabilidade/",
    domain: "autocom3.com.br/autocom3contabilidade",
    type: "erp",
    category: "Fiscal Management",
    image: "/portal-contador.png",
    shortDescription:
      "Fiscal and accounting platform engineered for upcoming Brazilian tax reform regulations.",
    stack: ["React", "Next.js", "TypeScript", "C#", "Node.js", "PostgreSQL"],
    features: [
      "Regulatory engine aligned with Brazilian Tax Reform standards",
      "Data visualization dashboards and reconciliation reports",
      "Seamless synchronization with financial ERP core modules",
    ],
    metrics: [
      { label: "Compliance", value: "Tax Reform Ready" },
      { label: "Backend", value: "PostgreSQL + C#" },
      { label: "Visualization", value: "Fiscal Dashboards" },
    ],
  },
  {
    id: "gerador-propostas",
    name: "Internal Proposal Generator",
    href: "https://www.autocom3.com.br/proposta/6704ba3e-3ec8-4f53-9682-5e33ac68ff4c",
    domain: "autocom3.com.br/proposta",
    type: "internal",
    category: "NoCode",
    image: "/propostas-ac3.png",
    shortDescription:
      "Internal sales enablements tool allowing commercial teams to assemble proposals in minutes.",
    stack: ["React", "TypeScript", "Next.js", "JSON Schema", "Tailwind CSS"],
    features: [
      "High-speed drag-and-drop builder for sales proposals",
      "Dynamic page composition driven by declarative JSON schemas",
      "Brand-enforced templates and quick asset insertion",
    ],
    metrics: [
      { label: "Efficiency", value: "-60% assembly time" },
      { label: "Editor", value: "Drag & Drop" },
      { label: "Workflow", value: "Sales Pipeline Integrated" },
    ],
  },
] as const
