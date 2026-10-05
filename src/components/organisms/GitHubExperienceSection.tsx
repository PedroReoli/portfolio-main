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
  const { experiences, languages, educationList } = data
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

  const totalExperiences = experiences.length

  return (
    <section id="experience" className="py-16 sm:py-24 bg-[#09090b] text-[#ffffff] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10 w-full">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#a1a1aa] uppercase tracking-wider font-semibold mb-2">
              <FiBriefcase className="text-[#25d366]" />
              {labels.kicker}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white tracking-tight">
              {labels.title}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl mt-1.5 font-body">
              {labels.description}
            </p>
          </div>

          {/* Stepper Navigation Buttons */}
          <div className="flex items-center gap-3 self-start sm:self-end">
            <span className="text-xs text-zinc-400 font-mono">
              {labels.companyCount} <span className="text-white font-bold">{activeIndex + 1}</span> {labels.of} {totalExperiences}
            </span>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                disabled={activeIndex === 0}
                onClick={() => setActiveIndex((p) => Math.max(0, p - 1))}
                className={`w-11 h-11 min-h-[44px] min-w-[44px] rounded-xl border flex items-center justify-center transition-all ${
                  activeIndex === 0
                    ? "border-white/5 text-zinc-700 cursor-not-allowed bg-[#0f0f13]"
                    : "border-white/10 text-white hover:border-white/30 hover:bg-white/[0.06] bg-[#141419]"
                }`}
                title={labels.prev}
                aria-label={labels.prev}
              >
                <FiChevronLeft className="text-lg" />
              </button>

              <button
                type="button"
                disabled={activeIndex === totalExperiences - 1}
                onClick={() => setActiveIndex((p) => Math.min(totalExperiences - 1, p + 1))}
                className={`w-11 h-11 min-h-[44px] min-w-[44px] rounded-xl border flex items-center justify-center transition-all ${
                  activeIndex === totalExperiences - 1
                    ? "border-white/5 text-zinc-700 cursor-not-allowed bg-[#0f0f13]"
                    : "border-white/10 text-white hover:border-white/30 hover:bg-white/[0.06] bg-[#141419]"
                }`}
                title={labels.next}
                aria-label={labels.next}
              >
                <FiChevronRight className="text-lg" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Company Quick Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {experiences.map((exp, idx) => {
            const isActive = activeIndex === idx
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium whitespace-nowrap transition-all min-h-[40px] flex items-center gap-2 ${
                  isActive
                    ? "bg-white text-[#09090b] font-bold shadow-md scale-[1.02]"
                    : "bg-[#141419] text-zinc-400 hover:text-white border border-white/10 hover:border-white/20"
                }`}
              >
                <span className={`w-2 h-2 rounded-full shrink-0 ${isActive ? "bg-[#25d366]" : "bg-white/30"}`} />
                <span>{exp.company.split(" - ")[0]}</span>
              </button>
            )
          })}
        </div>

        {/* 2-Column Responsive Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Active Experience Card */}
          <div className="lg:col-span-8 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="card-dark p-5 sm:p-7 border-white/15 bg-[#121218] shadow-2xl rounded-2xl w-full h-full flex flex-col justify-between"
              >
                <div>
                  {/* Header: Company, Role & Period */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-white/[0.08]">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#25d366] shadow-[0_0_8px_rgba(37,211,102,0.6)]" />
                        <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
                          {activeExp.company}
                        </h3>
                      </div>
                      <p className="text-sm font-heading font-semibold text-zinc-300 mt-1">
                        {activeExp.role}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181822] text-zinc-200 border border-white/10">
                        <FiCalendar className="text-[#25d366] text-xs" />
                        {activeExp.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                        <FiMapPin className="text-zinc-400 text-xs" />
                        {activeExp.location}
                      </span>
                    </div>
                  </div>

                  {/* Scope Description */}
                  <div className="mb-5">
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-1 font-semibold">
                      {labels.scope}
                    </span>
                    <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-body">
                      {activeExp.context}
                    </p>
                  </div>

                  {/* Achievements List */}
                  <div className="mb-5">
                    <span className="text-[11px] font-mono text-white uppercase tracking-wider block mb-2.5 font-bold">
                      {labels.achievements}
                    </span>
                    <ul className="space-y-2.5">
                      {activeExp.achievements.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 font-body"
                        >
                          <FiCheckCircle className="text-[#25d366] mt-0.5 shrink-0 text-sm" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Stack Tags */}
                <div className="pt-4 border-t border-white/[0.08] flex flex-wrap gap-1.5">
                  {activeExp.stack.map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-white/[0.06] border border-white/10 text-xs font-mono text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Sidebar with Academic Education, Languages & CTA */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-4">
            
            {/* Academic Education Card */}
            <div className="card-dark p-4 sm:p-5 bg-[#121218] border-white/10 rounded-2xl">
              <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-white/[0.08]">
                <div className="w-7 h-7 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-white">
                  <FiBookOpen className="w-4 h-4 text-[#25d366]" />
                </div>
                <h3 className="text-xs font-heading font-bold text-white uppercase tracking-wider">
                  {labels.educationTitle}
                </h3>
              </div>

              <div className="space-y-3">
                {educationList.map((edu, idx) => (
                  <div key={idx} className="pb-2 border-b border-white/[0.04] last:border-none last:pb-0">
                    <h4 className="text-xs sm:text-sm font-heading font-extrabold text-white">
                      {edu.degree}
                    </h4>
                    <div className="text-xs text-zinc-300 font-medium mt-0.5">
                      {edu.institution}
                    </div>
                    <div className="text-[10px] font-mono text-zinc-400 mt-0.5">
                      {edu.period} • {edu.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages & Mentorship Card */}
            <div className="card-dark p-4 sm:p-5 bg-[#121218] border-white/10 rounded-2xl">
              <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-white/[0.08]">
                <div className="w-7 h-7 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-white">
                  <FiGlobe className="w-4 h-4 text-[#25d366]" />
                </div>
                <h3 className="text-xs font-heading font-bold text-white uppercase tracking-wider">
                  {labels.languagesTitle}
                </h3>
              </div>

              <div className="space-y-2">
                {languages.map((lang, index) => (
                  <div key={index} className="flex flex-col gap-0.5 pb-1.5 border-b border-white/[0.04] last:border-none last:pb-0">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white font-semibold font-body">{lang.name}</span>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/[0.06] text-zinc-200">
                        {lang.level}
                      </span>
                    </div>
                    <span className="text-[11px] text-zinc-400 font-body">{lang.info}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct WhatsApp CTA Card */}
            <div className="rounded-2xl p-5 bg-[#14141d] border border-white/15 shadow-xl">
              <h3 className="text-sm font-heading font-bold text-white mb-1.5">
                {labels.ctaTitle}
              </h3>
              <p className="text-xs text-zinc-300 mb-4 leading-relaxed font-body">
                {labels.ctaDesc}
              </p>
              <a
                href={data.profile.phoneHref}
                target="_blank"
                rel="noreferrer"
                className="motion-button-whatsapp w-full py-3 px-4 text-xs font-bold flex items-center justify-center gap-2 shadow-lg min-h-[44px]"
              >
                <FaWhatsapp className="text-base text-[#25d366]" />
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
