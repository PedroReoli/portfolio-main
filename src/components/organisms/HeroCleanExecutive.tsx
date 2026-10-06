import React from "react"
import { motion } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiArrowDown, FiShield, FiBox, FiLayers, FiTrendingUp } from "react-icons/fi"
import { SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiPostgresql } from "react-icons/si"
import { useLanguage } from "../../i18n/useLanguage"
import * as portfolioPT from "../../data/portfolio"
import * as portfolioEN from "../../data/portfolio.en"

export const HeroCleanExecutive: React.FC = () => {
  const { language } = useLanguage()
  const profile = language === "pt" ? portfolioPT.profile : portfolioEN.profile

  const content = language === "pt"
    ? {
        role: "Full Stack Software Engineer & Tech Lead",
        tagline: "Arquitetura Frontend • APIs REST • Cloud & AWS • Sistemas de IA",
        summary: "Engenheiro de software com cerca de 4 anos de experiência na concepção e escala de ecossistemas corporativos ERP, plataformas SaaS multi-tenant e aplicações desktop de alta performance. Forte foco em Design Systems reutilizáveis (-70% no ciclo dev), otimização de latência e integração com servidores MCP.",
        whatsappCta: "Conversar no WhatsApp",
        githubCta: "GitHub",
        linkedinCta: "LinkedIn",
        emailCta: "E-mail",
        metrics: [
          { value: "4+ Anos", label: "Experiência Prática", icon: FiShield },
          { value: "10+ Produtos", label: "Sistemas em Produção", icon: FiBox },
          { value: "20+ Empresas", label: "Organizações Atendidas", icon: FiShield },
          { value: "500+ Itens", label: "Design System Unificado", icon: FiLayers },
          { value: "-70% Ciclo", label: "Aceleração de Dev", icon: FiTrendingUp },
        ],
        scrollPrompt: "Explorar Sistemas Principais",
      }
    : {
        role: "Full Stack Software Engineer & Tech Lead",
        tagline: "Frontend Architecture • REST APIs • Cloud & AWS • AI Systems",
        summary: "Software engineer with ~4 years of experience architecting enterprise ERP ecosystems, multi-tenant SaaS platforms, and high-performance desktop apps. Deep expertise in reusable Design Systems (-70% dev cycle), latency optimization, and native MCP agent servers.",
        whatsappCta: "Chat on WhatsApp",
        githubCta: "GitHub",
        linkedinCta: "LinkedIn",
        emailCta: "Email",
        metrics: [
          { value: "4+ Years", label: "Hands-on Experience", icon: FiShield },
          { value: "10+ Products", label: "Production Systems", icon: FiBox },
          { value: "20+ Clients", label: "Organizations Served", icon: FiShield },
          { value: "500+ Items", label: "Unified Design System", icon: FiLayers },
          { value: "-70% Cycle", label: "Dev Velocity Boost", icon: FiTrendingUp },
        ],
        scrollPrompt: "Explore Flagship Systems",
      }

  return (
    <section className="relative w-full pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-[#07080b] border-b border-white/[0.06]">
      {/* Luz ambiente sutil, elegante e não intrusiva */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[340px] bg-gradient-to-b from-blue-600/[0.07] via-emerald-500/[0.03] to-transparent blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* =========================================================================
            BLOCO PRINCIPAL: TÍTULO BEM GRANDE, POUCA INFORMAÇÃO, LIMPO E IMPONENTE
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Lado Esquerdo / Central: Tipografia Monumental e Apresentação Direta */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            
            {/* Tag / Role Kicker */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#10b981]" />
              <span className="text-xs sm:text-sm font-mono font-medium text-zinc-300 tracking-wide uppercase">
                {content.role}
              </span>
            </motion.div>

            {/* TÍTULO BEM GRANDE */}
            <motion.h1 
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black text-white tracking-tight leading-[0.95] mb-5 uppercase"
            >
              Pedro Lucas Reis
            </motion.h1>

            {/* Tagline / Subtítulo */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg sm:text-xl font-heading font-semibold text-zinc-300 mb-4 max-w-2xl leading-snug"
            >
              {content.tagline}
            </motion.p>

            {/* Bio Enxuta e Cirúrgica */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed max-w-2xl mb-6"
            >
              {content.summary}
            </motion.p>

            {/* Tech Badges Essenciais */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-2 mb-8"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-xs font-mono text-zinc-200">
                <SiTypescript className="text-blue-400 text-xs" /> TypeScript
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-xs font-mono text-zinc-200">
                <SiReact className="text-cyan-400 text-xs" /> React
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-xs font-mono text-zinc-200">
                <SiNextdotjs className="text-white text-xs" /> Next.js
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-xs font-mono text-zinc-200">
                <SiNodedotjs className="text-emerald-400 text-xs" /> Node.js / NestJS
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-xs font-mono text-zinc-200">
                <SiPostgresql className="text-sky-400 text-xs" /> PostgreSQL
              </span>
            </motion.div>

            {/* CTAs Diretos e Limpos */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap items-center gap-3 w-full sm:w-auto"
            >
              <a
                href={profile.phoneHref}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-xl bg-[#25d366]/15 hover:bg-[#25d366]/25 text-white font-medium text-sm flex items-center justify-center gap-2.5 border border-[#25d366]/30 transition-all hover:border-[#25d366]/60 shadow-lg min-h-[46px]"
              >
                <FaWhatsapp className="text-[#25d366] text-lg" />
                <span className="font-semibold">{content.whatsappCta}</span>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-zinc-200 hover:text-white font-medium text-sm flex items-center justify-center gap-2 border border-white/10 transition-all min-h-[46px]"
              >
                <FiGithub className="text-base" />
                <span>{content.githubCta}</span>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-zinc-200 hover:text-white font-medium text-sm flex items-center justify-center gap-2 border border-white/10 transition-all min-h-[46px]"
              >
                <FiLinkedin className="text-base text-blue-400" />
                <span>{content.linkedinCta}</span>
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="px-5 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-zinc-200 hover:text-white font-medium text-sm flex items-center justify-center gap-2 border border-white/10 transition-all min-h-[46px]"
              >
                <FiMail className="text-base text-zinc-400" />
                <span>{content.emailCta}</span>
              </a>
            </motion.div>

          </div>

          {/* Lado Direito: Retrato Nobre e Localização (Sem elementos pesados flutuando) */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              {/* Foto com moldura elegante e refinada */}
              <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-3xl overflow-hidden border border-white/[0.12] bg-[#0c0f16] shadow-2xl relative group">
                <img
                  src="/eu-profissional.png"
                  alt={profile.name}
                  className="w-full h-full object-cover object-center contrast-[1.05] brightness-[1.02] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07080b]/80 via-transparent to-transparent opacity-60" />
              </div>

              {/* Badge sutil com localização e status */}
              <div className="mt-3.5 flex items-center justify-center gap-2 text-xs font-mono text-zinc-400">
                <FiMapPin className="text-[#10b981] text-xs shrink-0" />
                <span>{profile.location}</span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* =========================================================================
            SEÇÃO INTERMEDIÁRIA SUTIL: NÚMEROS E MARCOS DE ENGENHARIA (CONECTA A HERO)
            ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 sm:mt-18 pt-8 border-t border-white/[0.08]"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {content.metrics.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#0c0f16]/80 border border-white/[0.07] hover:border-white/20 transition-all flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xl sm:text-2xl font-heading font-extrabold text-white tracking-tight">
                      {item.value}
                    </span>
                    <Icon className="text-zinc-400 text-sm" />
                  </div>
                  <span className="text-xs font-mono text-zinc-400">
                    {item.label}
                  </span>
                </div>
              )
            })}
          </div>

          <div className="mt-6 flex justify-end">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
            >
              <span>{content.scrollPrompt}</span>
              <FiArrowDown className="text-xs animate-bounce text-[#10b981]" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default HeroCleanExecutive
