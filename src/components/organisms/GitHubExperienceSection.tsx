import React, { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useScroll } from "framer-motion"
import * as portfolioPT from "../../data/portfolio"
import * as portfolioEN from "../../data/portfolio.en"
import { 
  FiBriefcase, 
  FiCalendar, 
  FiMapPin, 
  FiCheckCircle, 
  FiBookOpen, 
  FiGlobe, 
  FiChevronLeft,
  FiChevronRight
} from "react-icons/fi"
import { FaWhatsapp } from "react-icons/fa"
import { useLanguage } from "../../i18n/useLanguage"

export const GitHubExperienceSection: React.FC = () => {
  const { language } = useLanguage()
  const data = language === "pt" ? portfolioPT : portfolioEN
  const { experiences, education, languages } = data
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1) // 1: forward/down, -1: backward/up
  const containerRef = useRef<HTMLDivElement>(null)

  const activeExp = experiences[activeIndex] || experiences[0]

  const labels = language === "pt"
    ? {
        kicker: "Trajetória & Atuação",
        title: "Experiência Profissional & Formação",
        description: "Mais de 4 anos projetando ecossistemas corporativos, liderando arquitetura frontend e entregando plataformas robustas em produção.",
        scope: "Contexto & Escopo:",
        achievements: "Principais Entregas & Impacto:",
        educationTitle: "Formação Acadêmica",
        languagesTitle: "Idiomas & Comunidade",
        ctaTitle: "Vamos Construir Juntos?",
        ctaDesc: "Aberto a projetos de alta densidade técnica, desenvolvimento de SaaS e posições em engenharia sênior.",
        ctaBtn: "Conversar no WhatsApp",
        companyCount: "Empresa",
        of: "de",
        prev: "Anterior",
        next: "Próxima",
      }
    : {
        kicker: "Career & Experience",
        title: "Professional Experience & Education",
        description: "Over 4 years architecting enterprise software, leading frontend engineering, and deploying scalable platforms to production.",
        scope: "Context & Scope:",
        achievements: "Key Deliverables & Impact:",
        educationTitle: "Academic Education",
        languagesTitle: "Languages & Mentorship",
        ctaTitle: "Let's Build Together",
        ctaDesc: "Open to high-density technical challenges, SaaS development, and senior engineering roles.",
        ctaBtn: "Chat on WhatsApp",
        companyCount: "Company",
        of: "of",
        prev: "Previous",
        next: "Next",
      }

  const totalExperiences = experiences.length

  // Scroll synchronization to swap experiences as user scrolls down
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  useEffect(() => {
    if (totalExperiences <= 1) return

    const unsubscribe = scrollYProgress.on("change", (progress) => {
      const rawIndex = Math.floor(progress * totalExperiences)
      const clampedIndex = Math.min(totalExperiences - 1, Math.max(0, rawIndex))
      
      setActiveIndex((prev) => {
        if (prev !== clampedIndex) {
          setDirection(clampedIndex > prev ? 1 : -1)
          return clampedIndex
        }
        return prev
      })
    })

    return () => unsubscribe()
  }, [totalExperiences, scrollYProgress])

  const handleManualChange = (newIndex: number) => {
    setDirection(newIndex > activeIndex ? 1 : -1)
    setActiveIndex(newIndex)
  }

  // Ultra smooth horizontal slide variants with depth & blur
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
      filter: "blur(4px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.95,
      filter: "blur(4px)",
    }),
  }

  return (
    <div
      ref={containerRef}
      style={{ minHeight: totalExperiences > 1 ? `${totalExperiences * 85 + 30}vh` : "100vh" }}
      className="relative w-full bg-[#09090b] text-[#ffffff] border-b border-white/[0.08]"
    >
      {/* Pinned Sticky Stage Viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-y-auto lg:overflow-hidden pt-20 sm:pt-24 pb-8 z-10 no-scrollbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10 w-full my-auto">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#a1a1aa] uppercase tracking-wider font-semibold mb-2">
                <FiBriefcase className="text-white" />
                {labels.kicker}
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white tracking-tight">
                {labels.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#a1a1aa] max-w-2xl mt-1.5 font-body">
                {labels.description}
              </p>
            </div>

            {/* Step Counter & Nav Buttons in Header */}
            <div className="flex items-center gap-3 self-start sm:self-end">
              <span className="text-xs text-[#a1a1aa] font-mono">
                {labels.companyCount} <span className="text-white font-bold">{activeIndex + 1}</span> / {totalExperiences}
              </span>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  disabled={activeIndex === 0}
                  onClick={() => handleManualChange(Math.max(0, activeIndex - 1))}
                  className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-all ${
                    activeIndex === 0
                      ? "border-white/5 text-zinc-700 cursor-not-allowed bg-[#0f0f13]"
                      : "border-white/10 text-white hover:border-white/30 hover:bg-white/[0.06] bg-[#141419]"
                  }`}
                  title={labels.prev}
                  aria-label={labels.prev}
                >
                  <FiChevronLeft className="text-base" />
                </button>

                <button
                  type="button"
                  disabled={activeIndex === totalExperiences - 1}
                  onClick={() => handleManualChange(Math.min(totalExperiences - 1, activeIndex + 1))}
                  className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-all ${
                    activeIndex === totalExperiences - 1
                      ? "border-white/5 text-zinc-700 cursor-not-allowed bg-[#0f0f13]"
                      : "border-white/10 text-white hover:border-white/30 hover:bg-white/[0.06] bg-[#141419]"
                  }`}
                  title={labels.next}
                  aria-label={labels.next}
                >
                  <FiChevronRight className="text-base" />
                </button>
              </div>
            </div>
          </div>

          {/* 2-Column Responsive Deck */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left Column: Interactive Experience Deck (Flowing Horizontally) */}
            <div className="lg:col-span-8 flex flex-col justify-center">
              
              {/* Active Experience Card with Horizontal Flowing Animation */}
              <div className="relative min-h-[390px] flex items-center">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={activeIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                    className="card-dark p-6 sm:p-7 border-white/15 bg-[#121218] shadow-2xl rounded-2xl w-full"
                  >
                    {/* Header: Company, Role & Period */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-white/[0.08]">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#25d366] shadow-[0_0_8px_rgba(37,211,102,0.6)]" />
                          <h3 className="text-xl font-heading font-extrabold text-white">
                            {activeExp.company}
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm font-heading font-semibold text-[#a1a1aa] mt-1">
                          {activeExp.role}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181822] text-[#d4d4d8] border border-white/10">
                          <FiCalendar className="text-white text-xs" />
                          {activeExp.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] text-[#a1a1aa] border border-white/[0.06]">
                          <FiMapPin className="text-[#a1a1aa] text-xs" />
                          {activeExp.location}
                        </span>
                      </div>
                    </div>

                    {/* Scope Description */}
                    <div className="mb-4">
                      <span className="text-[11px] font-mono text-[#71717a] uppercase tracking-wider block mb-1 font-semibold">
                        {labels.scope}
                      </span>
                      <p className="text-xs sm:text-sm text-[#d4d4d8] leading-relaxed font-body">
                        {activeExp.context}
                      </p>
                    </div>

                    {/* Achievements List with Staggered Fade In */}
                    <div className="mb-5">
                      <span className="text-[11px] font-mono text-white uppercase tracking-wider block mb-2.5 font-bold">
                        {labels.achievements}
                      </span>
                      <ul className="space-y-2">
                        {activeExp.achievements.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.06 + 0.1, duration: 0.3 }}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-[#d4d4d8]"
                          >
                            <FiCheckCircle className="text-[#25d366] mt-0.5 shrink-0 text-sm" />
                            <span className="leading-relaxed font-body">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Stack Tags */}
                    <div className="pt-3.5 border-t border-white/[0.08] flex flex-wrap gap-1.5">
                      {activeExp.stack.map((tech, i) => (
                        <span key={i} className="px-2 py-0.5 rounded-md bg-white/[0.06] border border-white/10 text-[11px] font-mono text-zinc-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>

            {/* Right Column: Sidebar with Academic Education, Languages & CTA */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-3.5">
              
              {/* Academic Education Card */}
              <div className="card-dark p-4 sm:p-4.5 bg-[#121218] border-white/10">
                <div className="flex items-center gap-2 mb-2.5 pb-2 border-b border-white/[0.08]">
                  <div className="w-6 h-6 rounded-md bg-white/[0.06] border border-white/10 flex items-center justify-center text-white">
                    <FiBookOpen className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="text-xs font-heading font-bold text-white">
                    {labels.educationTitle}
                  </h3>
                </div>

                <div>
                  <h4 className="text-xs font-heading font-bold text-white">
                    {education.degree}
                  </h4>
                  <div className="text-[11px] text-[#a1a1aa] font-medium mt-0.5">
                    {education.institution}
                  </div>
                  <div className="text-[10px] font-mono text-[#71717a] mt-0.5">
                    {education.period} • {education.status}
                  </div>
                </div>
              </div>

              {/* Languages & Mentorship Card */}
              <div className="card-dark p-4 sm:p-4.5 bg-[#121218] border-white/10">
                <div className="flex items-center gap-2 mb-2.5 pb-2 border-b border-white/[0.08]">
                  <div className="w-6 h-6 rounded-md bg-white/[0.06] border border-white/10 flex items-center justify-center text-white">
                    <FiGlobe className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="text-xs font-heading font-bold text-white">
                    {labels.languagesTitle}
                  </h3>
                </div>

                <div className="space-y-1.5">
                  {languages.map((lang, index) => (
                    <div key={index} className="flex flex-col gap-0.5 pb-1 border-b border-white/[0.04] last:border-none last:pb-0">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-white font-medium font-body">{lang.name}</span>
                        <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-white/[0.06] text-zinc-300">
                          {lang.level}
                        </span>
                      </div>
                      <span className="text-[10px] text-[#71717a] font-body">{lang.info}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct WhatsApp CTA Card */}
              <div className="rounded-2xl p-4 sm:p-4.5 bg-[#14141d] border border-white/15 shadow-xl">
                <h3 className="text-xs font-heading font-bold text-white mb-1">
                  {labels.ctaTitle}
                </h3>
                <p className="text-[11px] text-[#a1a1aa] mb-3 leading-relaxed font-body">
                  {labels.ctaDesc}
                </p>
                <a
                  href={data.profile.phoneHref}
                  target="_blank"
                  rel="noreferrer"
                  className="motion-button-whatsapp w-full py-2 px-3 text-xs font-semibold flex items-center justify-center gap-2 shadow-lg"
                >
                  <FaWhatsapp className="text-sm text-[#25d366]" />
                  <span>{labels.ctaBtn}</span>
                </a>
              </div>

            </div>

          </div>

          {/* Bottom Step Dots */}
          {totalExperiences > 1 && (
            <div className="flex items-center justify-center gap-2 mt-6">
              {experiences.map((_, idx) => {
                const isActive = activeIndex === idx
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleManualChange(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      isActive ? "w-7 bg-white" : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`${labels.companyCount} ${idx + 1}`}
                  />
                )
              })}
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default GitHubExperienceSection
