import React, { useRef } from "react"
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"
import { FiGithub, FiLinkedin, FiMail, FiExternalLink, FiArrowDown } from "react-icons/fi"
import { useLanguage } from "../../i18n/useLanguage"
import * as portfolioPT from "../../data/portfolio"
import * as portfolioEN from "../../data/portfolio.en"

export interface ParallaxProduct {
  title: string
  link: string
  thumbnail: string
  category?: string
  id?: string
}

interface HeroParallaxProps {
  products: readonly ParallaxProduct[]
}

export const HeroParallax: React.FC<HeroParallaxProps> = ({ products }) => {
  const { language } = useLanguage()
  const profile = language === "pt" ? portfolioPT.profile : portfolioEN.profile
  const containerRef = useRef<HTMLDivElement>(null)

  // Split products into rows of 3 to 5 items
  const rowCount = Math.ceil(products.length / 3)
  const firstRow = products.slice(0, rowCount)
  const secondRow = products.slice(rowCount, rowCount * 2)
  const thirdRow = products.slice(rowCount * 2)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Smooth, snappy spring physics (responsive and not sluggish)
  const springConfig = { stiffness: 220, damping: 28, bounce: 0 }

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 650]),
    springConfig
  )
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -650]),
    springConfig
  )
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.35], [15, 0]),
    springConfig
  )
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.25], [0.85, 1]),
    springConfig
  )
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.35], [16, 0]),
    springConfig
  )
  // Pull parallax 3D cards up so they populate the screen right from the top at scroll 0
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.4], [-820, 260]),
    springConfig
  )

  const labels = language === "pt"
    ? {
        role: "Full Stack Software Engineer & AI Systems Architect",
        headline: "Engenharia de Software de Alta Escala, Arquitetura Frontend & Motores de IA",
        bio: "Com cerca de 4 anos de experiência prática, atuo na concepção e desenvolvimento de ecossistemas corporativos ERP, plataformas SaaS multi-tenant e aplicações desktop de alta performance. Especialista em TypeScript, React, Next.js, Node.js, NestJS e PostgreSQL, com forte domínio de Design Systems escaláveis (-70% ciclo dev), otimização Core Web Vitals e automações com servidores MCP.",
        whatsappCta: "Conversar no WhatsApp",
        githubCta: "GitHub",
        linkedinCta: "LinkedIn",
        emailCta: "E-mail",
        scrollPrompt: "Role para explorar os sistemas flagship em 3D",
        pillars: [
          {
            value: "10+ Produtos",
            title: "Produtos em Produção",
            sub: "SaaS & ERPs Corporativos",
          },
          {
            value: "20+ Empresas",
            title: "Organizações Atendidas",
            sub: "Plataformas Multi-tenant",
          },
          {
            value: "500+ Componentes",
            title: "Design System Unificado",
            sub: "Biblioteca Reutilizável (-70%)",
          },
          {
            value: "-70% Ciclo Dev",
            title: "Redução no Ciclo de Dev",
            sub: "Padronização & Automação IA",
          },
          {
            value: "-40% Load Time",
            title: "Otimização de Performance",
            sub: "Lighthouse ~100 & Alta Escala",
          },
          {
            value: "30+ Mentorados",
            title: "Capacitação em Tech & IA",
            sub: "Liderança Técnica & Formação",
          },
        ],
      }
    : {
        role: "Full Stack Software Engineer & AI Systems Architect",
        headline: "High-Scale Software Engineering, Frontend Architecture & AI Engines",
        bio: "With ~4 years of hands-on experience, I engineer enterprise ERP ecosystems, multi-tenant SaaS platforms, and high-performance desktop software. Specialized in TypeScript, React, Next.js, Node.js, NestJS, and PostgreSQL, combining scalable Design Systems (-70% dev cycle) with Core Web Vitals optimization and autonomous AI pipelines via MCP servers.",
        whatsappCta: "Chat on WhatsApp",
        githubCta: "GitHub",
        linkedinCta: "LinkedIn",
        emailCta: "Email",
        scrollPrompt: "Scroll to explore flagship systems in 3D",
        pillars: [
          {
            value: "10+ Products",
            title: "Production Digital Products",
            sub: "SaaS & Enterprise ERPs",
          },
          {
            value: "20+ Clients",
            title: "Organizations Served",
            sub: "Multi-tenant Platforms",
          },
          {
            value: "500+ Components",
            title: "Unified Design System",
            sub: "Reusable Library (-70%)",
          },
          {
            value: "-70% Dev Cycle",
            title: "Dev Cycle Reduction",
            sub: "Standardization & AI Tools",
          },
          {
            value: "-40% Load Time",
            title: "Performance Optimization",
            sub: "Lighthouse ~100 & Scale",
          },
          {
            value: "30+ Mentees",
            title: "Engineers Mentored in AI",
            sub: "Technical Leadership & Training",
          },
        ],
      }

  return (
    <div
      id="about"
      ref={containerRef}
      className="min-h-[220vh] sm:min-h-[260vh] pt-24 sm:pt-28 pb-16 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-[#07080b]"
    >
      {/* Soft Ambient Studio Lighting (Animated Entrance) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute top-0 left-1/4 w-[500px] sm:w-[700px] h-[450px] bg-[#0ea5e9]/[0.06] rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeOut", delay: 0.2 }}
        className="absolute top-1/4 right-1/4 w-[450px] sm:w-[600px] h-[400px] bg-[#10b981]/[0.05] rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeOut", delay: 0.4 }}
        className="absolute top-1/2 left-1/3 w-[550px] h-[450px] bg-[#8b5cf6]/[0.05] rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Hero Header — Non-interactive pass-through layer (ONLY buttons are interactive) */}
      <div className="max-w-7xl relative mx-auto pt-6 pb-12 sm:pb-16 px-4 sm:px-8 lg:px-12 w-full left-0 top-0 z-20 pointer-events-none select-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pointer-events-none">
          
          {/* Left Column: Portrait, Identity & CTAs (Glass plate for high contrast over parallax) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left pointer-events-none p-6 sm:p-7 rounded-3xl bg-[#07080b]/80 backdrop-blur-xl border border-white/[0.08] shadow-2xl shadow-black/80">
            {/* Portrait Frame */}
            <div className="relative mb-5 pointer-events-none">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border border-white/15 bg-[#10131d] shadow-2xl relative pointer-events-none">
                <img
                  src="/eu-profissional.png"
                  alt={profile.name}
                  className="w-full h-full object-cover object-center contrast-[1.05] brightness-[1.02] pointer-events-none"
                />
              </div>
              <div className="absolute -bottom-2.5 -right-2 bg-[#0c0f16]/95 backdrop-blur-md border border-white/15 rounded-lg px-2.5 py-1 text-[11px] font-mono text-white flex items-center gap-1.5 shadow-lg pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                <span className="font-semibold">{language === "pt" ? "4+ Anos Exp" : "4+ Yrs Exp"}</span>
              </div>
            </div>

            {/* Role Tag */}
            <div className="text-xs font-mono text-[#38bdf8] uppercase tracking-wider font-semibold mb-2 flex items-center gap-2 pointer-events-none">
              <span className="w-2 h-2 rounded-full bg-[#38bdf8] shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
              <span>{labels.role}</span>
            </div>

            {/* Name */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-[1.1] mb-4 pointer-events-none">
              {profile.name}
            </h1>

            {/* Core Tech Stack Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 mb-6 max-w-full pointer-events-none">
              <span className="px-2.5 py-1 rounded-md bg-[#38bdf8]/10 border border-[#38bdf8]/30 text-[#38bdf8] text-xs font-mono font-semibold">
                TypeScript
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-zinc-200 text-xs font-mono">
                React
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-zinc-200 text-xs font-mono">
                Next.js
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-zinc-200 text-xs font-mono">
                Node.js
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-zinc-200 text-xs font-mono">
                PostgreSQL
              </span>
            </div>

            {/* CTAs (ONLY THIS CONTAINER HAS POINTER-EVENTS-AUTO) */}
            <div className="w-full flex flex-col gap-2.5 max-w-md pointer-events-auto">
              <a
                href={profile.phoneHref}
                target="_blank"
                rel="noreferrer"
                className="motion-button-whatsapp px-6 py-3 text-sm font-bold flex items-center justify-center gap-2 min-h-[46px] shadow-lg shadow-[#25d366]/10 cursor-pointer pointer-events-auto"
              >
                <FaWhatsapp className="text-lg text-[#25d366]" />
                <span>{labels.whatsappCta}</span>
              </a>

              <div className="grid grid-cols-3 gap-2 w-full pointer-events-auto">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="motion-button-dark-tech py-2.5 px-2 text-xs flex items-center justify-center font-medium min-h-[42px] cursor-pointer pointer-events-auto"
                  title="GitHub"
                >
                  <FiGithub className="text-sm mr-1.5 text-zinc-300" /> {labels.githubCta}
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="motion-button-dark-tech py-2.5 px-2 text-xs flex items-center justify-center font-medium min-h-[42px] cursor-pointer pointer-events-auto"
                  title="LinkedIn"
                >
                  <FiLinkedin className="text-sm mr-1.5 text-[#38bdf8]" /> {labels.linkedinCta}
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="motion-button-dark-tech py-2.5 px-2 text-xs flex items-center justify-center font-medium min-h-[42px] cursor-pointer pointer-events-auto"
                  title="E-mail"
                >
                  <FiMail className="text-sm mr-1.5 text-zinc-300" /> {labels.emailCta}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Headline, Bio & 6 Impact Metrics (Glass plate for high contrast over parallax) */}
          <div className="lg:col-span-7 flex flex-col justify-between pointer-events-none p-6 sm:p-7 rounded-3xl bg-[#07080b]/80 backdrop-blur-xl border border-white/[0.08] shadow-2xl shadow-black/80">
            <div className="mb-6 text-center lg:text-left pointer-events-none">
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white leading-tight mb-3 tracking-tight pointer-events-none">
                {labels.headline}
              </h2>
              <p className="text-xs sm:text-sm lg:text-base text-zinc-300 leading-relaxed font-body pointer-events-none">
                {labels.bio}
              </p>
            </div>

            {/* 6 Key Impact Metrics Grid (Purely informative, no cursor/hover interference) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6 pointer-events-none">
              {labels.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-3 sm:p-3.5 rounded-xl bg-[#0c0f16]/90 border border-white/[0.08] flex flex-col justify-between min-h-[88px] pointer-events-none"
                >
                  <div className="text-sm sm:text-base font-heading font-extrabold text-white tracking-tight">
                    {pillar.value}
                  </div>
                  <div>
                    <div className="text-xs font-heading font-bold text-zinc-200 leading-tight">
                      {pillar.title}
                    </div>
                    <div className="text-[11px] font-mono text-zinc-400 mt-0.5 leading-tight">
                      {pillar.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Subtle Scroll Hint */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-mono text-zinc-400 pointer-events-none">
              <FiArrowDown className="text-xs animate-bounce text-[#38bdf8]" />
              <span>{labels.scrollPrompt}</span>
            </div>
          </div>

        </div>
      </div>

      {/* 3D Parallax Surface Viewport with Smooth Reveal Entrance Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, filter: "blur(8px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="w-full relative z-10 pointer-events-auto"
      >
        <motion.div
          style={{
            rotateX,
            rotateZ,
            translateY,
            opacity,
          }}
          className="w-full"
        >
          {/* Row 1: Flows Right */}
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-6 sm:space-x-8 mb-6 sm:mb-8">
            {firstRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateX}
                key={product.title}
              />
            ))}
          </motion.div>

          {/* Row 2: Flows Left */}
          <motion.div className="flex flex-row space-x-6 sm:space-x-8 mb-6 sm:mb-8">
            {secondRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateXReverse}
                key={product.title}
              />
            ))}
          </motion.div>

          {/* Row 3: Flows Right */}
          {thirdRow.length > 0 && (
            <motion.div className="flex flex-row-reverse space-x-reverse space-x-6 sm:space-x-8">
              {thirdRow.map((product) => (
                <ProductCard
                  product={product}
                  translate={translateX}
                  key={product.title}
                />
              ))}
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </div>
  )
}

interface ProductCardProps {
  product: ParallaxProduct
  translate: MotionValue<number>
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  translate,
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
      key={product.title}
      className="group/product h-64 sm:h-80 w-[20rem] sm:w-[28rem] relative shrink-0 rounded-2xl overflow-hidden border border-white/10 bg-[#10131d] shadow-2xl shadow-black/80 pointer-events-auto"
    >
      <a
        href={product.link}
        target={product.link.startsWith("http") ? "_blank" : undefined}
        rel="noreferrer"
        className="block w-full h-full relative cursor-pointer"
      >
        <img
          src={product.thumbnail}
          loading="lazy"
          className="object-cover object-top absolute h-full w-full inset-0 contrast-[1.03] brightness-[0.95] group-hover/product:scale-105 group-hover/product:brightness-100 transition-all duration-500 ease-out select-none"
          alt={product.title}
        />

        {/* Ambient Overlay & Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-black/40 to-transparent opacity-70 group-hover/product:opacity-50 transition-opacity duration-300 pointer-events-none" />

        {/* Bottom Title Bar */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 flex items-end justify-between gap-2 z-10 pointer-events-none">
          <div>
            {product.category && (
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#38bdf8] font-semibold block mb-1">
                {product.category}
              </span>
            )}
            <h3 className="text-sm sm:text-base font-heading font-extrabold text-white leading-tight drop-shadow-md">
              {product.title}
            </h3>
          </div>

          <div className="w-8 h-8 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-white opacity-0 group-hover/product:opacity-100 transition-opacity shrink-0">
            <FiExternalLink className="text-xs" />
          </div>
        </div>
      </a>
    </motion.div>
  )
}

export default HeroParallax
