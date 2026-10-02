import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
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

  return (
    <section className="py-14 sm:py-20 bg-[#09090b] text-[#ffffff] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#a1a1aa] uppercase tracking-wider font-semibold mb-2">
            <FiBriefcase className="text-white" />
            {labels.kicker}
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
            {labels.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#a1a1aa] max-w-3xl mt-1.5 font-body">
            {labels.description}
          </p>
        </motion.div>

        {/* 2-Column Responsive Compact Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Experience Deck */}
          <div className="lg:col-span-8 flex flex-col gap-3.5">
            
            {/* Horizontal Company Selector Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {experiences.map((exp, idx) => {
                const isActive = activeIndex === idx
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-heading font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                      isActive
                        ? "bg-white text-[#09090b] shadow-md"
                        : "bg-[#141419] text-[#a1a1aa] border border-white/[0.08] hover:border-white/20 hover:text-white"
                    }`}
                  >
                    <span>{exp.company}</span>
                    <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                      isActive ? "bg-black/10 text-black font-semibold" : "bg-white/[0.06] text-[#71717a]"
                    }`}>
                      {exp.period.split("-")[0].trim()}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Counter Bar & Navigation Controls */}
            <div className="flex items-center justify-between text-xs font-mono text-[#71717a] px-1 py-1 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span>
                  {labels.companyCount} <span className="text-white font-bold">{activeIndex + 1}</span> {labels.of}{" "}
                  <span className="text-white font-bold">{experiences.length}</span>
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  disabled={activeIndex === 0}
                  onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
                  className={`w-7 h-7 rounded-lg border flex items-center justify-center transition-all ${
                    activeIndex === 0
                      ? "border-white/5 text-zinc-700 cursor-not-allowed bg-[#0f0f13]"
                      : "border-white/10 text-white hover:border-white/30 bg-[#141419]"
                  }`}
                  title={labels.prev}
                  aria-label={labels.prev}
                >
                  <FiChevronLeft className="text-sm" />
                </button>

                <button
                  type="button"
                  disabled={activeIndex === experiences.length - 1}
                  onClick={() => setActiveIndex((i) => Math.min(experiences.length - 1, i + 1))}
                  className={`w-7 h-7 rounded-lg border flex items-center justify-center transition-all ${
                    activeIndex === experiences.length - 1
                      ? "border-white/5 text-zinc-700 cursor-not-allowed bg-[#0f0f13]"
                      : "border-white/10 text-white hover:border-white/30 bg-[#141419]"
                  }`}
                  title={labels.next}
                  aria-label={labels.next}
                >
                  <FiChevronRight className="text-sm" />
                </button>
              </div>
            </div>

            {/* Active Company Detail Card with smooth animated switch */}
            <div className="min-h-[360px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="card-dark p-5 sm:p-6"
                >
                  {/* Header: Role & Period */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3.5 pb-3.5 border-b border-white/[0.08]">
                    <div>
                      <h3 className="text-lg font-heading font-bold text-white">
                        {activeExp.company}
                      </h3>
                      <p className="text-xs sm:text-sm font-heading font-semibold text-[#a1a1aa] mt-0.5">
                        {activeExp.role}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#141419] text-[#a1a1aa] border border-white/[0.08]">
                        <FiCalendar className="text-white" />
                        {activeExp.period}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/[0.04] text-[#71717a]">
                        <FiMapPin className="text-[#a1a1aa]" />
                        {activeExp.location}
                      </span>
                    </div>
                  </div>

                  {/* Scope Description */}
                  <div className="mb-3.5">
                    <span className="text-[11px] font-mono text-[#71717a] uppercase tracking-wider block mb-1 font-semibold">
                      {labels.scope}
                    </span>
                    <p className="text-xs text-[#d4d4d8] leading-relaxed font-body">
                      {activeExp.context}
                    </p>
                  </div>

                  {/* Achievements List */}
                  <div className="mb-4">
                    <span className="text-[11px] font-mono text-[#ffffff] uppercase tracking-wider block mb-2 font-bold">
                      {labels.achievements}
                    </span>
                    <ul className="space-y-1.5">
                      {activeExp.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#a1a1aa]">
                          <FiCheckCircle className="text-[#25d366] mt-0.5 shrink-0 text-xs" />
                          <span className="leading-relaxed text-[#d4d4d8] font-body">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stack Tags */}
                  <div className="pt-3 border-t border-white/[0.08] flex flex-wrap gap-1.5">
                    {activeExp.stack.map((tech, i) => (
                      <span key={i} className="badge-dark text-[10px]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* Right Column: Sidebar with Academic Education & Languages */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Academic Education Card */}
            <div className="card-dark p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-white/[0.08]">
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

            {/* Languages & Community Card */}
            <div className="card-dark p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-white/[0.08]">
                <div className="w-6 h-6 rounded-md bg-white/[0.06] border border-white/10 flex items-center justify-center text-white">
                  <FiGlobe className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-xs font-heading font-bold text-white">
                  {labels.languagesTitle}
                </h3>
              </div>

              <div className="space-y-2">
                {languages.map((lang, index) => (
                  <div key={index} className="flex flex-col gap-0.5 pb-1.5 border-b border-white/[0.04] last:border-none last:pb-0">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white font-medium font-body">{lang.name}</span>
                      <span className="badge-dark text-[9px] font-bold">
                        {lang.level}
                      </span>
                    </div>
                    <span className="text-[10px] text-[#71717a] font-body">{lang.info}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct WhatsApp Call to Action Card */}
            <div className="rounded-2xl p-4 sm:p-5 bg-[#141419] border border-white/10 shadow-xl">
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
                className="motion-button-whatsapp w-full py-2 px-3 text-xs font-semibold flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="text-sm text-[#25d366]" />
                <span>{labels.ctaBtn}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default GitHubExperienceSection
