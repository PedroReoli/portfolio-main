export const profile = {
  name: "Pedro Lucas Reis",
  role: "Full Stack Engineer | Frontend, APIs & SaaS Products",
  tagline: "TypeScript | React | Next.js | Node.js | PostgreSQL",
  email: "pedrosousa2160@gmail.com",
  phoneLabel: "+55 24 99326-4040",
  phoneHref: "https://wa.me/5524993264040",
  location: "Volta Redonda, Brazil | Remote or hybrid",
  website: "https://pedroreis.vercel.app/",
  linkedin: "https://www.linkedin.com/in/pedro-lucas-reis-a93945171",
  github: "https://github.com/PedroReoli",
  summary: [
    "Full Stack Engineer with around 4 years of experience building digital products, ERP systems, SaaS platforms, and enterprise applications.",
    "I work primarily with TypeScript, React, Next.js, Node.js, NestJS, and PostgreSQL, focusing on Frontend, APIs, architecture, integrations, performance, and applied AI.",
  ],
} as const

export const highlights = [
  {
    label: "Experience",
    value: "4+",
    suffix: "years",
    description: "Digital products, ERP, SaaS, and enterprise applications",
  },
  {
    label: "Products",
    value: "10+",
    suffix: "",
    description: "Solutions built and evolved for real production environments",
  },
  {
    label: "Design System",
    value: "500+",
    suffix: "",
    description: "Reusable components across enterprise ecosystems",
  },
] as const

export const blogPosts = [
  {
    id: "reolios-skills-claude",
    title: "ReoliOS: Operational skills for Claude Code",
    category: "Applied AI & Automation",
    date: "Jul 31, 2026",
    readTime: "5 min",
    excerpt: "Commands and persistent context supporting specification, documentation, code review, and technical automation.",
    htmlUrl: "/blog/ia-no-desenvolvimento-web.html",
  },
  {
    id: "ia-desenvolvimento-web",
    title: "Applied AI in the web development lifecycle",
    category: "Software Engineering",
    date: "Jul 28, 2026",
    readTime: "4 min",
    excerpt: "Technical use of LLMs for research, prototyping, debugging, documentation, and review with human validation.",
    htmlUrl: "/blog/ia-no-desenvolvimento-web.html",
  },
  {
    id: "arquitetura-escalavel-react",
    title: "Frontend architecture and component libraries",
    category: "Frontend Architecture",
    date: "Jul 20, 2026",
    readTime: "6 min",
    excerpt: "Component patterns, design tokens, and interface organization for ERPs, portals, and dashboards.",
    htmlUrl: "/blog/arquitetura-escalavel-react.html",
  },
  {
    id: "design-systems-componentizacao",
    title: "Design Systems with Radix UI and Tailwind CSS",
    category: "UI Engineering",
    date: "Jul 14, 2026",
    readTime: "5 min",
    excerpt: "Accessible, reusable, and consistent components for enterprise applications in production.",
    htmlUrl: "/blog/padrao-artigo.html",
  },
  {
    id: "performance-nextjs-caching",
    title: "Performance and server state in Next.js",
    category: "Web Performance",
    date: "Jul 05, 2026",
    readTime: "7 min",
    excerpt: "Caching, loading, and data organization strategies for reducing response time in web applications.",
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
    company: "Domus - Sua Solução Digital",
    role: "Full Stack Developer",
    context: "Digital products, SaaS applications, admin platforms, and custom web solutions.",
    period: "Oct/2025 - Present",
    location: "Remote",
    stack: ["TypeScript", "React", "Next.js", "Node.js", "Express", "Fastify", "PostgreSQL", "Supabase", "REST APIs", "Applied AI"],
    achievements: [
      "Full Stack development from requirements and architecture to frontend, backend, databases, and integrations.",
      "Development and maintenance of REST APIs and integrations with external services.",
      "Data modeling and database evolution with PostgreSQL and Supabase.",
      "Applied AI for specification, documentation, code review, automation, and engineering productivity.",
    ],
  },
  {
    company: "SIVIS Tecnologia",
    role: "Full Stack Engineer | Frontend & Integrations",
    context: "Enterprise applications, frontend architecture, and integrations for management platforms.",
    period: "Nov/2025 - Present",
    location: "Remote",
    stack: ["TypeScript", "React", "Next.js", "Angular", "JavaScript", "REST APIs", "Integrations"],
    achievements: [
      "Evolution of web applications focused on frontend architecture, componentization, and API integration.",
      "Modernization of interfaces and features used in real operational environments.",
      "Restructuring of existing applications to improve maintainability, scalability, and technical clarity.",
      "Participation in technical decisions involving system evolution and service integrations.",
    ],
  },
  {
    company: "Autocom3",
    role: "Full Stack Engineer",
    context: "ERP systems, enterprise portals, dashboards, and production applications used by teams and customers.",
    period: "Nov/2024 - Present",
    location: "Volta Redonda, RJ | Hybrid",
    stack: ["TypeScript", "React", "Next.js", "Node.js", "NestJS", "C#", "PostgreSQL", "SQL Server", "JWT", "Webhooks", "AWS", "Electron", "Tauri"],
    achievements: [
      "Development and evolution of ERP portals, dashboards, admin platforms, and enterprise APIs.",
      "Implementation of authentication, JWT, RBAC permissions, rate limiting, and webhook integrations.",
      "PostgreSQL work involving queries, migrations, indexes, and procedures.",
      "Contributions to a 50+ page ERP ecosystem and a Design System with 500+ reusable components.",
      "Performance improvements reducing loading time by up to 40% in ERP workflows.",
    ],
  },
  {
    company: "UniFOA",
    role: "Technology Mentor",
    context: "Mentoring in digital inclusion, artificial intelligence, and professional development.",
    period: "Jun/2024 - Dec/2024",
    location: "Volta Redonda, RJ",
    stack: ["AI", "Technology education", "Productivity", "Mentoring", "Communication"],
    achievements: [
      "Led mentoring sessions and practical activities focused on digital skills.",
      "Created educational content about artificial intelligence and digital tools.",
      "Supported more than 30 participants through applied learning programs.",
    ],
  },
  {
    company: "SIVIS Tecnologia",
    role: "Junior Full Stack Engineer",
    context: "ERP systems, admin dashboards, and integrations for clubs, associations, and vehicle protection companies.",
    period: "Aug/2022 - Jun/2024",
    location: "Volta Redonda, RJ | Hybrid",
    stack: ["React", "TypeScript", "JavaScript", "C#", "PHP", "PostgreSQL", "MySQL", "REST APIs"],
    achievements: [
      "Development and maintenance of ERP systems, dashboards, admin modules, and management tools.",
      "Implementation of business rules, APIs, databases, and external integrations.",
      "Bug fixing, documentation, and support for applications used daily by production customers.",
      "Hands-on frontend, backend, and relational database experience in enterprise systems.",
    ],
  },
] as const

export const education = {
  degree: "Bachelor's Degree in Information Systems",
  institution: "University Center of Volta Redonda (UniFOA)",
  period: "Feb/2022 - Nov/2025",
} as const

export const languages = [
  { name: "Portuguese", level: "Native" },
  { name: "English", level: "B2" },
  { name: "Mentoring & Community", level: "EvaTech / UniFOA + Sebrae - 30+ participants" },
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
    name: "ReoliOS - Skills for Claude Code",
    href: "https://reoli-os.lovable.app/",
    domain: "reoli-os.lovable.app",
    type: "ai",
    category: "AI & Automation",
    image: "/propose.png",
    shortDescription:
      "Skills and operational commands supporting AI-assisted development, documentation, and technical automation.",
    stack: ["Claude Code", "LLM Skills", "TypeScript", "Node.js", "Prompt Engineering"],
    features: [
      "Skills for development, documentation, analysis, proposals, and technical operations.",
      "Persistent context structure reducing repeated work across recurring tasks.",
      "Reusable scripts, guides, and commands standardizing AI-assisted execution.",
      "LLM workflows with technical validation for specification, review, and automation.",
    ],
    metrics: [
      { label: "Skills", value: "43" },
      { label: "Environment", value: "Claude Code CLI" },
      { label: "Focus", value: "Technical automation" },
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
      "Website and operational foundation for Domus projects, focused on performance, technical presentation, and maintainability.",
    stack: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Supabase"],
    features: [
      "Web architecture with React, Next.js, TypeScript, and Supabase.",
      "Technical content, institutional pages, and proposal materials.",
      "SEO, accessibility, and performance optimization with near-100 Lighthouse scores.",
      "AI support for documentation, review, prototyping, and internal automation.",
    ],
    metrics: [
      { label: "Performance", value: "Lighthouse 100" },
      { label: "Stack", value: "Full Stack" },
      { label: "Delivery", value: "Production web" },
    ],
  },
  {
    id: "portal-cliente",
    name: "Autocom3 ERP Customer Portal",
    href: "https://www.autocom3.com.br/autocom3clientes",
    domain: "autocom3.com.br/autocom3clientes",
    type: "erp",
    category: "ERP",
    image: "/portal-cliente.png",
    shortDescription:
      "ERP portal with operational modules, dashboards, and a shared library of reusable components.",
    stack: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "React Query", "PostgreSQL"],
    features: [
      "Pages, workflows, and dashboards integrated into the ERP ecosystem.",
      "Component standards supported by a shared Design System.",
      "REST API, PostgreSQL, SQL Server, and internal service integrations.",
      "Performance, usability, and maintainability improvements in production.",
    ],
    metrics: [
      { label: "Pages", value: "50+" },
      { label: "Components", value: "500+" },
      { label: "Organizations", value: "20+" },
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
      "SaaS editor for proposals with configurable blocks, digital acceptance, analytics, and PDF export.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JSON Schema", "PDF Export"],
    features: [
      "Visual editor based on configurable blocks.",
      "Dynamic rendering from structured JSON data.",
      "Digital acceptance with email, IP address, and timestamp.",
      "View analytics and high-fidelity PDF generation.",
    ],
    metrics: [
      { label: "Architecture", value: "JSON-Driven" },
      { label: "Product", value: "SaaS" },
      { label: "Delivery", value: "Web editor" },
    ],
  },
  {
    id: "portal-contabil",
    name: "Accounting ERP Portal",
    href: "https://www.autocom3.com.br/autocom3contabilidade/",
    domain: "autocom3.com.br/autocom3contabilidade",
    type: "erp",
    category: "Tax / ERP",
    image: "/portal-contador.png",
    shortDescription:
      "Portal for accounting and tax operations with dashboards, reports, and ERP financial integrations.",
    stack: ["React", "Next.js", "TypeScript", "C#", "Node.js", "PostgreSQL"],
    features: [
      "Interfaces for accounting and tax monitoring.",
      "Dashboards and reconciliation reports.",
      "Integration with financial modules and enterprise data.",
      "Architecture and UX improvements for operational use.",
    ],
    metrics: [
      { label: "Domain", value: "Tax / ERP" },
      { label: "Data", value: "PostgreSQL + C#" },
      { label: "Interface", value: "Dashboards" },
    ],
  },
  {
    id: "gerador-propostas",
    name: "Internal Proposal Generator",
    href: "https://www.autocom3.com.br/proposta/6704ba3e-3ec8-4f53-9682-5e33ac68ff4c",
    domain: "autocom3.com.br/proposta",
    type: "internal",
    category: "Internal tool",
    image: "/propostas-ac3.png",
    shortDescription:
      "Internal tool for assembling proposals with templates, blocks, and dynamic rendering.",
    stack: ["React", "TypeScript", "Next.js", "JSON Schema", "Tailwind CSS"],
    features: [
      "Proposal editor with visual composition and block structure.",
      "Standardized templates reducing repeated work for the commercial team.",
      "Dynamic rendering with JSON Schema.",
      "Web publishing and proposal sharing workflow.",
    ],
    metrics: [
      { label: "Efficiency", value: "-60% time" },
      { label: "Editor", value: "Blocks" },
      { label: "Use", value: "Internal" },
    ],
  },
] as const
