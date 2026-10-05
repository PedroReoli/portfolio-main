import React from "react"
import { motion } from "framer-motion"
import * as portfolioPT from "../../data/portfolio"
import * as portfolioEN from "../../data/portfolio.en"
import { useLanguage } from "../../i18n/useLanguage"
import { 
  FiGithub, 
  FiLinkedin, 
  FiMail, 
  FiMapPin, 
  FiCode, 
  FiLayers, 
  FiZap, 
  FiBox, 
  FiCheckCircle, 
  FiShield, 
  FiTrendingUp, 
  FiUsers 
} from "react-icons/fi"
import { 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiPostgresql 
} from "react-icons/si"
import { FaWhatsapp } from "react-icons/fa"

export const GitHubProfileHeader: React.FC = () => {
  const { language } = useLanguage()
  const profile = language === "pt" ? portfolioPT.profile : portfolioEN.profile

  const labels = language === "pt"
    ? {
        role: "Full Stack Engineer & Software Architect",
        headline: "Engenheiro Full Stack & Arquiteto de Software",
        bio: "Com cerca de 4 anos de experiência prática, atuo no desenvolvimento de produtos digitais, sistemas ERP, plataformas SaaS e aplicações corporativas de missão crítica. Especialista em TypeScript, React, Next.js, Node.js, NestJS e PostgreSQL, uno forte especialização em Frontend à arquitetura robusta de Backend, APIs, Cloud e automação com agentes autônomos de IA.",
        whatsappCta: "Conversar no WhatsApp",
        githubCta: "GitHub",
        linkedinCta: "LinkedIn",
        emailCta: "E-mail",
        pillarsHeading: "Resultados & Destaques de Engenharia",
        pillars: [
          {
            value: "10+ Produtos",
            title: "Produtos Digitais em Produção",
            sub: "SaaS & ERPs Corporativos",
            icon: FiBox,
          },
          {
            value: "20+ Empresas",
            title: "Organizações Atendidas",
            sub: "Plataformas Multi-tenant",
            icon: FiShield,
          },
          {
            value: "500+ Componentes",
            title: "Design System Unificado",
            sub: "Biblioteca Reutilizável (-70%)",
            icon: FiLayers,
          },
          {
            value: "-70% Ciclo Dev",
            title: "Redução no Ciclo de Dev",
            sub: "Padronização & Automação IA",
            icon: FiTrendingUp,
          },
          {
            value: "-40% Load Time",
            title: "Otimização de Performance",
            sub: "Lighthouse ~100 & Alta Escala",
            icon: FiZap,
          },
          {
            value: "30+ Mentorados",
            title: "Capacitação em Tech & IA",
            sub: "Liderança Técnica & Formação",
            icon: FiUsers,
          },
        ],
        milestones: [
          "Ecossistema ERP com 50+ Páginas",
          "Arquitetura Cloud & AWS",
          "Agent Loops & MCP Servers",
        ]
      }
    : {
        role: "Full Stack Engineer & Software Architect",
        headline: "Full Stack Software Engineer & Architect",
        bio: "With ~4 years of hands-on experience, I engineer digital products, enterprise ERPs, multi-tenant SaaS platforms, and mission-critical systems. Specialized in TypeScript, React, Next.js, Node.js, NestJS, and PostgreSQL, combining strong Frontend engineering with robust Backend architectures, Cloud, and autonomous AI agents.",
        whatsappCta: "Chat on WhatsApp",
        githubCta: "GitHub",
        linkedinCta: "LinkedIn",
        emailCta: "Email",
        pillarsHeading: "Proven Engineering Highlights",
        pillars: [
          {
            value: "10+ Products",
            title: "Production Digital Products",
            sub: "SaaS & Enterprise ERPs",
            icon: FiBox,
          },
          {
            value: "20+ Clients",
            title: "Organizations Served",
            sub: "Multi-tenant Platforms",
            icon: FiShield,
          },
          {
            value: "500+ Components",
            title: "Unified Design System",
            sub: "Reusable Library (-70%)",
            icon: FiLayers,
          },
          {
            value: "-70% Dev Cycle",
            title: "Dev Cycle Reduction",
            sub: "Standardization & AI Tools",
            icon: FiTrendingUp,
          },
          {
            value: "-40% Load Time",
            title: "Performance Optimization",
            sub: "Lighthouse ~100 & Scale",
            icon: FiZap,
          },
          {
            value: "30+ Mentees",
            title: "Engineers Mentored in AI",
            sub: "Technical Leadership & Training",
            icon: FiUsers,
          },
        ],
        milestones: [
          "50+ Pages ERP Ecosystem",
          "AWS Cloud & Scalable APIs",
          "Agent Loops & MCP Servers",
        ]
      }

  return (
    <header className="w-full flex flex-col justify-center text-[#ffffff] pt-24 sm:pt-28 pb-12 sm:pb-16 relative">
      {/* Subtle Atmospheric Background Glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-white/[0.015] rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true"
      />

      <motion.div 
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10 w-full"
      >
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* Left Column: Portrait, Identity & Actions */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Portrait Frame */}
            <div className="relative mb-4">
              <div className="w-36 h-36 xs:w-44 xs:h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-2xl overflow-hidden border border-white/15 bg-[#141419] shadow-2xl relative group">
                <img
                  src="/eu-profissional.png"
                  alt={profile.name}
                  className="w-full h-full object-cover object-center contrast-[1.05] brightness-[1.02] group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
              
              <div className="absolute bottom-2.5 right-2.5 bg-[#141419]/95 backdrop-blur-md border border-white/15 rounded-lg px-2.5 py-1 text-xs font-mono text-[#ffffff] flex items-center gap-1.5 shadow-lg">
                <FiCode className="w-3.5 h-3.5 text-[#25d366]" />
                <span className="font-semibold">4+ Anos Exp</span>
              </div>
            </div>

            {/* Name, Role & Location */}
            <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
              {profile.name}
            </h1>
            
            <p className="text-sm sm:text-base font-heading font-semibold text-zinc-300 mt-1 mb-1.5">
              {labels.role}
            </p>

            <div className="flex items-center gap-1.5 text-xs font-mono text-[#a1a1aa] mb-4">
              <FiMapPin className="text-[#a1a1aa] text-xs shrink-0" />
              <span>{profile.location}</span>
            </div>

            {/* Core Tech Stack Badges */}
            <div className="w-full flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2 mb-5 max-w-full">
              <span className="badge-highlight flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-semibold">
                <SiTypescript className="text-white text-xs shrink-0" /> TypeScript
              </span>
              <span className="badge-dark flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium">
                <SiReact className="text-white text-xs shrink-0" /> React
              </span>
              <span className="badge-dark flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium">
                <SiNextdotjs className="text-white text-xs shrink-0" /> Next.js
              </span>
              <span className="badge-dark flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium">
                <SiNodedotjs className="text-white text-xs shrink-0" /> Node
              </span>
              <span className="badge-dark flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium">
                <SiPostgresql className="text-white text-xs shrink-0" /> PostgreSQL
              </span>
            </div>

            {/* Action Buttons */}
            <div className="w-full flex flex-col gap-2.5 max-w-md">
              <a
                href={profile.phoneHref}
                target="_blank"
                rel="noreferrer"
                className="motion-button-whatsapp px-5 py-3 text-sm font-semibold w-full flex items-center justify-center gap-2 min-h-[48px]"
              >
                <FaWhatsapp className="text-xl text-[#25d366]" />
                <span>{labels.whatsappCta}</span>
              </a>
              
              <div className="grid grid-cols-3 gap-2 w-full">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="motion-button-dark-tech py-2.5 px-2 text-xs flex items-center justify-center font-medium min-h-[44px]"
                  title="GitHub"
                >
                  <FiGithub className="text-sm mr-1.5 text-[#a1a1aa]" /> {labels.githubCta}
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="motion-button-dark-tech py-2.5 px-2 text-xs flex items-center justify-center font-medium min-h-[44px]"
                  title="LinkedIn"
                >
                  <FiLinkedin className="text-sm mr-1.5 text-[#a1a1aa]" /> {labels.linkedinCta}
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="motion-button-dark-tech py-2.5 px-2 text-xs flex items-center justify-center font-medium min-h-[44px]"
                  title="E-mail"
                >
                  <FiMail className="text-sm mr-1.5 text-[#a1a1aa]" /> {labels.emailCta}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Headline & Result Cards */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-between">
            
            {/* Headline & Bio */}
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white leading-tight mb-3 tracking-tight">
                {labels.headline}
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-body text-left">
                {labels.bio}
              </p>
            </div>

            {/* Pillars Header */}
            <div className="mb-2.5">
              <div className="text-xs font-mono text-[#a1a1aa] uppercase tracking-wider font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25d366]" />
                <span>{labels.pillarsHeading}</span>
              </div>
            </div>

            {/* 6 Impact Cards */}
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 mb-4">
                {labels.pillars.map((pillar, idx) => {
                  const Icon = pillar.icon
                  return (
                    <div
                      key={idx}
                      className="card-dark p-3 sm:p-3.5 flex flex-col justify-between group hover:border-white/20 transition-all min-h-[96px]"
                    >
                      <div className="flex items-center justify-between gap-1 mb-1.5">
                        <span className="text-sm sm:text-base font-heading font-extrabold text-white tracking-tight">
                          {pillar.value}
                        </span>
                        <div className="w-6 h-6 rounded-md bg-white/[0.06] border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:bg-white group-hover:text-black transition-all">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xs font-heading font-bold text-zinc-100 leading-tight">
                          {pillar.title}
                        </h3>
                        <p className="text-[11px] font-mono text-[#a1a1aa] mt-0.5 leading-tight">
                          {pillar.sub}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Milestones Bar */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-[#141419] border border-white/[0.08] flex flex-wrap items-center justify-between gap-2.5 text-xs font-mono">
                {labels.milestones.map((milestone, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <FiCheckCircle className="text-[#25d366] w-3.5 h-3.5 shrink-0" />
                    <span className="text-zinc-200 font-medium text-xs">{milestone}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </motion.div>
    </header>
  )
}

export default GitHubProfileHeader
