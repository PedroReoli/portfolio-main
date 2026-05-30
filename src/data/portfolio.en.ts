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
    "Frontend Engineer (React/Next.js/TypeScript) with experience building ERP/SaaS products in production since 2022. I focus on scalable UI, performance and developer experience — from design systems to API consumption.",
    "Full-stack as support: Node.js and C# to integrate services, business rules and databases. I use AI in the workflow (copilots, automations and evaluation) to move faster without outsourcing technical decisions.",
  ],
} as const

export const highlights = [
  {
    label: "Experience",
    value: "4+ years",
    description: "Production web products (ERP/SaaS).",
  },
  {
    label: "Main Focus",
    value: "Frontend",
    description: "React, Next.js, performance and scalable UI.",
  },
  {
    label: "Impact",
    value: "+40% faster",
    description: "Reduced load time in ERP applications.",
  },
  {
    label: "Product",
    value: "ERP/SaaS",
    description: "Portals, dashboards and business flows.",
  },
  {
    label: "Edge",
    value: "Applied AI",
    description: "Copilots, automations and LLM UX.",
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
    title: "AI Applied",
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
    title: "Tools",
    items: ["Git", "GitHub", "Swagger", "Postman"],
  },
] as const

export const experiences = [
  {
    company: "Autocom3",
    role: "Mid-Level Software Engineer",
    context: "Technology company specialized in developing ERP platforms for retail operations and business management.",
    period: "Nov 2024 - Present",
    location: "Volta Redonda, Brazil",
    stack: ["React", "Next.js", "Angular", "TypeScript", "Node.js", "C#", "React Native", "Electron", "REST APIs"],
    achievements: [
      "Worked on frontend development of ERP web applications using React, Next.js and TypeScript.",
      "Implemented performance optimizations that reduced application load time by up to 40%.",
      "Participated in legacy system modernization, migrating Visual FoxPro solutions to a new Electron-based architecture.",
      "Defined and implemented scalable component architecture, improving development productivity.",
      "Integrated REST APIs and collaborated on product architecture and user experience decisions.",
    ],
  },
  {
    company: "EvaTech Program (UniFOA + SEBRAE)",
    role: "Technology Mentor",
    context: "Technology education and digital inclusion program focused on empowering underrepresented communities.",
    period: "Jun 2024 - Dec 2024",
    location: "Volta Redonda, Brazil",
    stack: ["AI", "Digital Security", "Productivity", "Mentorship"],
    achievements: [
      "Mentored and trained more than 30 participants in technology fundamentals and digital inclusion.",
      "Delivered classes on artificial intelligence, digital security and productivity tools.",
      "Developed learning materials and structured technology learning paths.",
    ],
  },
  {
    company: "SIVIS",
    role: "Software Engineer",
    context: "Company specialized in developing ERP systems and management platforms for associations and organizations.",
    period: "Aug 2022 - Jun 2024",
    location: "Volta Redonda, Brazil",
    stack: ["React", "TypeScript", "Node.js", "C#", "REST APIs", "PostgreSQL"],
    achievements: [
      "Developed corporate web applications and internal management systems.",
      "Implemented backend APIs for integrations and operational workflows.",
      "Built administrative dashboards and business support tools.",
      "Contributed to improvements in performance, stability and maintainability of applications.",
    ],
  },
] as const

export const education = {
  degree: "Bachelor's Degree in Information Systems",
  institution: "University Center of Volta Redonda (UniFOA)",
  period: "2022 - 2025",
} as const

export const languages = [
  { name: "Portuguese", level: "Native" },
  { name: "English", level: "B2" },
  { name: "Spanish", level: "B1" },
] as const

export const skillsLabels = {
  kicker: "Tech Matrix",
  title1: "SYSTEM",
  title2: "SPECS",
} as const

export const projectsLabels = {
  kicker: "Selected projects",
  title1: "FOCUSED",
  title2: "WORK",
  details: "Details",
  visit: "Open",
  stack: "Stack",
  features: "Features",
  metrics: "Metrics & Impact",
  close: "Close",
  all: "All",
  types: {
    site: "Website",
    erp: "ERP",
    saas: "SaaS",
    mobile: "Mobile",
    internal: "Internal",
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
      "Institutional site for a software house focused on custom, high-performance solutions.",
    stack: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    features: [
      "Institutional website with custom branding",
      "Sections focused on services and cases",
      "Custom design system and reusable components",
      "Technical SEO and optimized meta tags",
    ],
    metrics: [
      { label: "Performance", value: "Lighthouse 95+" },
      { label: "Responsive", value: "Mobile-first" },
      { label: "Identity", value: "Custom design system" },
    ],
  },
  {
    id: "portal-cliente",
    name: "Customer Portal",
    href: "https://www.autocom3.com.br/autocom3clientes",
    domain: "autocom3.com.br/autocom3clientes",
    type: "erp",
    category: "ERP + E-commerce",
    image: "/portal-cliente.png",
    shortDescription:
      "Authenticated portal blending ERP + e-commerce, with order history and fiscal documents.",
    stack: ["React", "Next.js", "TypeScript", "Node.js", "REST APIs", "TailwindCSS"],
    features: [
      "Authentication and customer-only area",
      "Purchase flow integrated with the ERP",
      "Order history and fiscal documents (XML)",
      "Async data management via REST APIs",
    ],
    metrics: [
      { label: "Performance", value: "+40% vs legacy" },
      { label: "Integration", value: "Fiscal XML + ERP" },
      { label: "Data", value: "Async flows" },
    ],
  },
  {
    id: "propose",
    name: "Propose",
    href: "https://propose-sable.vercel.app/",
    domain: "propose-sable.vercel.app",
    type: "saas",
    category: "NoCode SaaS",
    image: "/propose.png",
    shortDescription:
      "NoCode SaaS to build commercial proposals and dynamic pages with digital acceptance.",
    stack: ["React", "Next.js", "TypeScript", "TailwindCSS", "JSON Schema", "PDF Export"],
    features: [
      "Visual no-code editor with block system",
      "Digital acceptance with name, email, IP and timestamp",
      "Engagement tracking: views, time per section, history",
      "PDF export with high-fidelity layout",
      "JSON-based structure for scalability",
    ],
    metrics: [
      { label: "Architecture", value: "JSON-driven" },
      { label: "Digital acceptance", value: "IP + timestamp" },
      { label: "Analytics", value: "Per-section engagement" },
    ],
  },
  {
    id: "portal-contabil",
    name: "Accounting Portal",
    href: "https://www.autocom3.com.br/autocom3contabilidade/",
    domain: "autocom3.com.br/autocom3contabilidade",
    type: "erp",
    category: "Fiscal Management",
    image: "/portal-contador.png",
    shortDescription:
      "System for fiscal and accounting management, with Brazilian tax reform rules applied.",
    stack: ["React", "Next.js", "TypeScript", "C#", "Node.js", "PostgreSQL"],
    features: [
      "Business rules for the Brazilian tax reform",
      "Dashboards and fiscal data visualization",
      "Integration with the ERP financial modules",
      "Structured reports export and reconciliation",
    ],
    metrics: [
      { label: "Regulatory", value: "Tax reform ready" },
      { label: "Integration", value: "Financial ERP" },
      { label: "Visualization", value: "Structured dashboards" },
    ],
  },
  {
    id: "gerador-propostas",
    name: "Proposal Generator",
    href: "https://www.autocom3.com.br/proposta/6704ba3e-3ec8-4f53-9682-5e33ac68ff4c",
    domain: "autocom3.com.br/proposta",
    type: "internal",
    category: "NoCode",
    image: "/propostas-ac3.png",
    shortDescription:
      "No-code platform to assemble commercial proposals with a drag-and-drop editor.",
    stack: ["React", "TypeScript", "Next.js", "JSON Schema", "TailwindCSS"],
    features: [
      "Drag-and-drop editor to build pages",
      "Dynamic page generation from JSON",
      "Integration with the sales team workflow",
      "Reusable blocks and templates",
    ],
    metrics: [
      { label: "Architecture", value: "JSON-driven" },
      { label: "Editor", value: "Drag-and-drop" },
      { label: "Workflow", value: "Sales-integrated" },
    ],
  },
  // {
  //   id: "ac3flex",
  //   name: "AC3Flex — Mobile ERP",
  //   href: "https://play.google.com/store/apps/details?id=br.com.autocom3tecnologiaesoftwaresltda.ac3flex&hl=pt_PT",
  //   domain: "Google Play",
  //   type: "mobile",
  //   category: "Mobile ERP",
  //   image: "/ac3-flex.png",
  //   shortDescription:
  //     "Android ERP app for real-time business management, published on the Google Play Store.",
  //   stack: ["React Native", "TypeScript", "REST APIs", "Node.js"],
  //   features: [
  //     "Business management from mobile",
  //     "Integration with the ERP backend APIs",
  //     "Real-time data synchronization",
  //     "Responsive, mobile-first interfaces",
  //     "Field-ops control and tracking features",
  //   ],
  //   metrics: [
  //     { label: "Distribution", value: "Published on Google Play" },
  //     { label: "Sync", value: "Real-time" },
  //     { label: "UX", value: "Mobile-first" },
  //   ],
  // },
] as const
