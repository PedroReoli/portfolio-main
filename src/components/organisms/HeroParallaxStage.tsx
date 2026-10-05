import React, { useState, useRef } from "react"
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  AnimatePresence,
} from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"
import { 
  FiGithub, 
  FiLinkedin, 
  FiMail, 
  FiArrowDown, 
  FiCheckCircle, 
  FiExternalLink,
  FiBox,
  FiShield,
  FiLayers,
  FiTrendingUp,
  FiZap,
  FiUsers
} from "react-icons/fi"
import { SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiPostgresql } from "react-icons/si"
import { useLanguage } from "../../i18n/useLanguage"
import * as portfolioPT from "../../data/portfolio"
import * as portfolioEN from "../../data/portfolio.en"

export const HeroParallaxStage: React.FC = () => {
  const { language } = useLanguage()
  const profile = language === "pt" ? portfolioPT.profile : portfolioEN.profile
  const containerRef = useRef<HTMLDivElement>(null)

  // Active showcase tab for the 3D perspective cockpit
  const [activeTab, setActiveTab] = useState<"organon" | "achilles" | "autocom3">("organon")

  // =========================================================================
  // MOUSE 3D PARALLAX TILT PHYSICS
  // =========================================================================
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { stiffness: 180, damping: 26, bounce: 0 }
  const tiltRotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig)
  const tiltRotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  // =========================================================================
  // MULTI-LAYER SCROLL PARALLAX
  // =========================================================================
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Deep background grid & aurora drift
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 140])

  // Midground 3D Floating Telemetry Badges (Drift at varying velocities)
  const badge1Y = useTransform(scrollYProgress, [0, 1], [0, -90])
  const badge2Y = useTransform(scrollYProgress, [0, 1], [0, 110])
  const badge3Y = useTransform(scrollYProgress, [0, 1], [0, -130])

  // Central 3D Console scroll forward & glide
  const consoleScrollY = useTransform(scrollYProgress, [0, 0.5], [0, 120])
  const consoleScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.03])

  const tabsData = {
    organon: {
      title: "Organon Desktop OS v6.23.2",
      badge: "LOCAL-FIRST // SQLITE ACID",
      tagline: "Sistema operacional desktop com transcrição local Whisper & MCP",
      image: "/Domus.png",
      href: "https://github.com/PedroReoli/organon",
      telemetry: "0ms Cloud • Whisper Offline",
    },
    achilles: {
      title: "Achilles CDP Agent (MCP Server)",
      badge: "AI WEB AGENT // CDP ENGINE",
      tagline: "Navegação autônoma via Chrome DevTools com -92.2% de tokens",
      image: "/nexus.png",
      href: "https://github.com/PedroReoli/Achilles-CDP-Agent",
      telemetry: "AXTree Reader • Native stdio",
    },
    autocom3: {
      title: "Portal Unificado ERP Autocom3",
      badge: "ENTERPRISE ERP // 20+ ORGS",
      tagline: "Monorepo corporativo com 100+ telas e 500+ componentes",
      image: "/portal-cliente.png",
      href: "https://www.autocom3.com.br/autocom3clientes",
      telemetry: "500+ Design System • -40% Latência",
    },
  }

  const labels = language === "pt"
    ? {
        role: "Full Stack Software Engineer & AI Systems Architect",
        headline: "Engenharia de Software de Alta Escala, Arquitetura Frontend & Motores de IA",
        bio: "Com cerca de 4 anos de experiência prática, atuo na concepção e desenvolvimento de ecossistemas corporativos ERP, plataformas SaaS multi-tenant e aplicações desktop de alta performance. Especialista em TypeScript, React, Next.js, Node.js, NestJS e PostgreSQL, com forte domínio de Design Systems escaláveis (-70% ciclo dev), otimização Core Web Vitals e automações com servidores MCP.",
        whatsappCta: "Conversar no WhatsApp",
        githubCta: "GitHub",
        linkedinCta: "LinkedIn",
        emailCta: "E-mail",
        scrollPrompt: "Role para explorar o showcase flagship",
        viewProject: "Acessar Projeto",
        pillars: [
          { value: "10+ Produtos", title: "Produtos em Produção", sub: "SaaS & ERPs Corporativos", icon: FiBox },
          { value: "20+ Empresas", title: "Organizações Atendidas", sub: "Plataformas Multi-tenant", icon: FiShield },
          { value: "500+ Componentes", title: "Design System Unificado", sub: "Biblioteca Reutilizável (-70%)", icon: FiLayers },
          { value: "-70% Ciclo Dev", title: "Redução no Ciclo de Dev", sub: "Padronização & Automação IA", icon: FiTrendingUp },
          { value: "-40% Load Time", title: "Otimização de Performance", sub: "Lighthouse ~100 & Alta Escala", icon: FiZap },
          { value: "30+ Mentorados", title: "Capacitação em Tech & IA", sub: "Liderança Técnica & Formação", icon: FiUsers },
        ],
        milestones: [
          "Ecossistema ERP com 100+ Telas",
          "Arquitetura Cloud & AWS",
          "Agent Loops & Servidores MCP",
        ]
      }
    : {
        role: "Full Stack Software Engineer & AI Systems Architect",
        headline: "High-Scale Software Engineering, Frontend Architecture & AI Engines",
        bio: "With ~4 years of hands-on experience, I engineer enterprise ERP ecosystems, multi-tenant SaaS platforms, and high-performance desktop software. Specialized in TypeScript, React, Next.js, Node.js, NestJS, and PostgreSQL, combining scalable Design Systems (-70% dev cycle) with Core Web Vitals optimization and autonomous AI pipelines via MCP servers.",
        whatsappCta: "Chat on WhatsApp",
        githubCta: "GitHub",
        linkedinCta: "LinkedIn",
        emailCta: "Email",
        scrollPrompt: "Scroll to explore flagship showcase",
        viewProject: "Visit Project",
        pillars: [
          { value: "10+ Products", title: "Production Digital Products", sub: "SaaS & Enterprise ERPs", icon: FiBox },
          { value: "20+ Clients", title: "Organizations Served", sub: "Multi-tenant Platforms", icon: FiShield },
          { value: "500+ Components", title: "Unified Design System", sub: "Reusable Library (-70%)", icon: FiLayers },
          { value: "-70% Dev Cycle", title: "Dev Cycle Reduction", sub: "Standardization & AI Tools", icon: FiTrendingUp },
          { value: "-40% Load Time", title: "Performance Optimization", sub: "Lighthouse ~100 & Scale", icon: FiZap },
          { value: "30+ Mentees", title: "Engineers Mentored in AI", sub: "Technical Leadership & Training", icon: FiUsers },
        ],
        milestones: [
          "100+ Screens ERP Ecosystem",
          "AWS Cloud & Scalable APIs",
          "Agent Loops & MCP Servers",
        ]
      }

  const currentSoftware = tabsData[activeTab]

  return (
    <section
      id="about"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full min-h-screen pt-24 sm:pt-28 pb-16 bg-[#07080b] text-white relative overflow-hidden flex flex-col justify-between"
    >
      {/* =========================================================================
          LAYER 1: PARALLAX AURORA & DEEP SPACE LIGHTING (Scroll-driven drift)
          ========================================================================= */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-10 left-1/4 w-[500px] sm:w-[700px] h-[450px] bg-[#0ea5e9]/[0.05] rounded-full blur-[160px]" />
        <div className="absolute top-1/3 right-1/4 w-[450px] sm:w-[600px] h-[400px] bg-[#10b981]/[0.04] rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[550px] h-[450px] bg-[#8b5cf6]/[0.04] rounded-full blur-[160px]" />
        {/* Subtle Engineering Dot Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
      </motion.div>

      {/* Main Content Stage */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10 w-full my-auto">
        
        {/* 2-Column Monumental Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* =========================================================================
              LEFT COLUMN: EXECUTIVE IDENTITY & CTAS (High-Contrast, Crisp Typography)
              ========================================================================= */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Identity Header: Avatar & Experience Badge */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
              <div className="relative group">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-white/15 bg-[#10131d] shadow-2xl relative">
                  <img
                    src="/eu-profissional.png"
                    alt={profile.name}
                    className="w-full h-full object-cover object-center contrast-[1.05] brightness-[1.02] group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-[#0c0f16]/95 backdrop-blur-md border border-white/15 rounded-lg px-2 py-0.5 text-[10px] font-mono text-white flex items-center gap-1 shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                  <span className="font-semibold">{language === "pt" ? "4+ Anos Exp" : "4+ Yrs Exp"}</span>
                </div>
              </div>

              <div className="flex flex-col items-center sm:items-start">
                <div className="text-[11px] font-mono text-[#38bdf8] uppercase tracking-wider font-semibold mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                  <span>{labels.role}</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
                  {profile.name}
                </h1>
                <p className="text-xs font-mono text-zinc-400 mt-0.5">
                  {profile.location}
                </p>
              </div>
            </div>

            {/* Core Tech Stack Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 mb-5 max-w-full">
              <span className="px-2.5 py-1 rounded-md bg-[#38bdf8]/10 border border-[#38bdf8]/30 text-[#38bdf8] text-xs font-mono font-semibold flex items-center gap-1.5">
                <SiTypescript className="text-xs" /> TypeScript
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-zinc-200 text-xs font-mono flex items-center gap-1.5">
                <SiReact className="text-xs" /> React
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-zinc-200 text-xs font-mono flex items-center gap-1.5">
                <SiNextdotjs className="text-xs" /> Next.js
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-zinc-200 text-xs font-mono flex items-center gap-1.5">
                <SiNodedotjs className="text-xs" /> Node.js
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-zinc-200 text-xs font-mono flex items-center gap-1.5">
                <SiPostgresql className="text-xs" /> PostgreSQL
              </span>
            </div>

            {/* Headline & Concise Bio */}
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-body mb-6 text-left max-w-xl">
              {labels.bio}
            </p>

            {/* CTAs (WhatsApp & Social Links) */}
            <div className="w-full flex flex-col sm:flex-row gap-2.5 max-w-lg mb-8">
              <a
                href={profile.phoneHref}
                target="_blank"
                rel="noreferrer"
                className="motion-button-whatsapp px-6 py-3 text-sm font-bold flex items-center justify-center gap-2 min-h-[46px] shadow-lg shadow-[#25d366]/10 flex-1"
              >
                <FaWhatsapp className="text-lg text-[#25d366]" />
                <span>{labels.whatsappCta}</span>
              </a>

              <div className="grid grid-cols-3 gap-2 shrink-0">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="motion-button-dark-tech py-2.5 px-3 text-xs flex items-center justify-center font-medium min-h-[44px]"
                  title="GitHub"
                >
                  <FiGithub className="text-sm mr-1.5 text-zinc-300" /> {labels.githubCta}
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="motion-button-dark-tech py-2.5 px-3 text-xs flex items-center justify-center font-medium min-h-[44px]"
                  title="LinkedIn"
                >
                  <FiLinkedin className="text-sm mr-1.5 text-[#38bdf8]" /> {labels.linkedinCta}
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="motion-button-dark-tech py-2.5 px-3 text-xs flex items-center justify-center font-medium min-h-[44px]"
                  title="E-mail"
                >
                  <FiMail className="text-sm mr-1.5 text-zinc-300" /> {labels.emailCta}
                </a>
              </div>
            </div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN: INTERACTIVE 3D PERSPECTIVE PARALLAX COCKPIT
              ========================================================================= */}
          <div className="lg:col-span-6 relative [perspective:1200px]">
            
            {/* DRIFTING 3D TELEMETRY BADGES (Scroll-driven multi-depth parallax) */}
            <motion.div
              style={{ y: badge1Y }}
              className="hidden xl:flex absolute -top-8 -left-10 z-30 px-3 py-1.5 rounded-xl bg-[#0c0f16]/95 border border-[#38bdf8]/30 shadow-2xl backdrop-blur-md items-center gap-2 text-xs font-mono text-white pointer-events-none"
            >
              <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
              <span>MCP Server // 20+ Tools Active</span>
            </motion.div>

            <motion.div
              style={{ y: badge2Y }}
              className="hidden xl:flex absolute -top-4 -right-6 z-30 px-3 py-1.5 rounded-xl bg-[#0c0f16]/95 border border-[#10b981]/30 shadow-2xl backdrop-blur-md items-center gap-2 text-xs font-mono text-white pointer-events-none"
            >
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              <span>AXTree Reader Mode // -92.2% Tokens</span>
            </motion.div>

            <motion.div
              style={{ y: badge3Y }}
              className="hidden xl:flex absolute -bottom-6 -left-6 z-30 px-3 py-1.5 rounded-xl bg-[#0c0f16]/95 border border-[#8b5cf6]/30 shadow-2xl backdrop-blur-md items-center gap-2 text-xs font-mono text-white pointer-events-none"
            >
              <span className="w-2 h-2 rounded-full bg-[#8b5cf6] animate-pulse" />
              <span>Design System // 500+ Components</span>
            </motion.div>

            {/* 3D TILTED CONSOLE (Responsive to Mouse Parallax + Scroll Parallax) */}
            <motion.div
              style={{
                y: consoleScrollY,
                scale: consoleScale,
                rotateX: tiltRotateX,
                rotateY: tiltRotateY,
              }}
              transition={{ type: "spring", stiffness: 180, damping: 25 }}
              className="relative rounded-3xl border border-white/15 bg-[#0c0f16] shadow-[0_24px_80px_rgba(0,0,0,0.9)] overflow-hidden transition-shadow duration-300 hover:shadow-[0_24px_90px_rgba(14,165,233,0.15)] group"
            >
              {/* Window Header Chrome & Interactive Software Tabs */}
              <div className="px-4 py-3 bg-[#11141f] border-b border-white/10 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>

                {/* Software Switcher Tabs */}
                <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/10 text-[11px] font-mono">
                  <button
                    type="button"
                    onClick={() => setActiveTab("organon")}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      activeTab === "organon"
                        ? "bg-white text-black font-bold shadow-md"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    Organon OS
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("achilles")}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      activeTab === "achilles"
                        ? "bg-white text-black font-bold shadow-md"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    Achilles CDP
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("autocom3")}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      activeTab === "autocom3"
                        ? "bg-white text-black font-bold shadow-md"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    Autocom3 ERP
                  </button>
                </div>
              </div>

              {/* Live Software Preview Stage */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="relative aspect-[16/10] overflow-hidden bg-[#06070a]"
                >
                  <img
                    src={currentSoftware.image}
                    alt={currentSoftware.title}
                    className="w-full h-full object-cover object-top contrast-[1.03] brightness-[0.98] group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  
                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07080b]/90 via-transparent to-transparent pointer-events-none" />

                  {/* Bottom Console Overlay Banner */}
                  <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 flex items-end justify-between gap-3 z-10">
                    <div>
                      <span className="text-[10px] font-mono text-[#38bdf8] uppercase tracking-wider font-bold block mb-1">
                        {currentSoftware.badge}
                      </span>
                      <h3 className="text-base sm:text-lg font-heading font-extrabold text-white leading-tight">
                        {currentSoftware.title}
                      </h3>
                      <p className="text-xs text-zinc-300 font-mono mt-0.5">
                        {currentSoftware.telemetry}
                      </p>
                    </div>

                    <a
                      href={currentSoftware.href}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white text-white hover:text-black font-mono text-xs font-bold transition-all border border-white/20 shrink-0 flex items-center gap-1.5 shadow-xl"
                    >
                      <span>{labels.viewProject}</span>
                      <FiExternalLink className="text-xs" />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>

            </motion.div>

          </div>

        </div>

        {/* =========================================================================
            BOTTOM STRIP: 6 EXECUTIVE IMPACT METRICS & MILESTONES BAR
            ========================================================================= */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/[0.08]">
          {/* 6 Impact Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 mb-4">
            {labels.pillars.map((pillar, idx) => {
              const Icon = pillar.icon
              return (
                <div
                  key={idx}
                  className="p-3 sm:p-3.5 rounded-xl bg-[#0c0f16] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between min-h-[96px] group"
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
                    <h4 className="text-xs font-heading font-bold text-zinc-100 leading-tight">
                      {pillar.title}
                    </h4>
                    <p className="text-[11px] font-mono text-zinc-400 mt-0.5 leading-tight">
                      {pillar.sub}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Milestones Bar & Smooth Scroll Prompt */}
          <div className="p-3 sm:p-3.5 rounded-xl bg-[#0c0f16] border border-white/[0.08] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              {labels.milestones.map((milestone, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <FiCheckCircle className="text-[#10b981] w-3.5 h-3.5 shrink-0" />
                  <span className="text-zinc-200 font-medium">{milestone}</span>
                </div>
              ))}
            </div>

            <a
              href="#projects"
              className="flex items-center gap-1.5 text-[#38bdf8] hover:text-white transition-colors"
            >
              <FiArrowDown className="text-xs animate-bounce" />
              <span>{labels.scrollPrompt}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default HeroParallaxStage
