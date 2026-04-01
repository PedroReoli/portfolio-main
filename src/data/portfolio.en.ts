export const profile = {
  name: "Pedro Lucas Reis",
  role: "Full Stack Software Engineer | Frontend Specialist",
  email: "pedrosousa2160@gmail.com",
  phoneLabel: "+55 (24) 9932-64040",
  phoneHref: "https://wa.me/5524993264040",
  location: "Volta Redonda, RJ",
  website: "https://pedroreoli.vercel.app/",
  linkedin: "https://www.linkedin.com/in/pedro-lucas-reis-a93945171/",
  github: "https://github.com/PedroReoli",
  summary: [
    "Full Stack Software Engineer focused on developing scalable web applications, desktop applications with Electron, and backend APIs using TypeScript and C#.",
    "Specialized in modern frontend architecture with React and Next.js, building microservices-based systems and optimizing application performance.",
    "Founder of DomusDev, where I develop digital products and software platforms focused on modern and scalable technological solutions.",
  ],
} as const

export const highlights = [
  {
    label: "Main Focus",
    value: "Frontend architecture",
    description: "React, Next.js, performance and scalable systems.",
  },
  {
    label: "Proven Impact",
    value: "40% faster",
    description: "Reduced load time in ERP applications.",
  },
  {
    label: "Mentorship",
    value: "30+ people",
    description: "Training in technology, AI and digital inclusion.",
  },
  {
    label: "Founder",
    value: "DomusDev",
    description: "Digital products and modern solutions focused on scalability.",
  },
] as const

export const skills = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "HTML", "CSS", "TailwindCSS", "Framer Motion", "Three.js", "Responsive Design"],
  },
  {
    title: "Backend",
    items: ["Node.js", "C#", "Express", "NestJS", "REST APIs", "GraphQL", "Microservices"],
  },
  {
    title: "AI / Agentic",
    items: ["Cursor", "Claude", "MCP", "LLM Workflows", "Prompt Engineering"],
  },
  {
    title: "Data",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQL"],
  },
  {
    title: "Distributed Systems",
    items: ["Kafka", "RabbitMQ", "NATS", "AWS SQS"],
  },
  {
    title: "State Management",
    items: ["React Query", "Redux", "Zustand", "Context API"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Swagger", "Postman", "ESLint", "Prettier"],
  },
] as const

export const experiences = [
  {
    company: "Autocom3",
    role: "Software Engineer",
    context: "Technology company specialized in developing ERP platforms for retail operations and business management.",
    period: "Nov 2024 - Present",
    location: "Volta Redonda, Brazil",
    stack: ["React", "Next.js", "TypeScript", "React Native", "Electron", "REST APIs"],
    achievements: [
      "Worked on frontend development of ERP web applications using React, Next.js and TypeScript.",
      "Implemented performance optimizations that reduced application load time by up to 40%.",
      "Participated in legacy system modernization, migrating Visual FoxPro solutions to a new Electron-based architecture.",
      "Defined and implemented scalable component architecture, improving development productivity.",
      "Integrated REST APIs and collaborated on product architecture and user experience decisions.",
    ],
  },
  {
    company: "EvaTech ",
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