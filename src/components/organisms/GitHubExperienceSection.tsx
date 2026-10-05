import React from "react"
import { motion } from "framer-motion"
import * as portfolioPT from "../../data/portfolio"
import * as portfolioEN from "../../data/portfolio.en"
import { 
  FiBriefcase, 
  FiCalendar, 
  FiMapPin, 
  FiCheckCircle, 
  FiBookOpen, 
  FiGlobe,
  FiAward
} from "react-icons/fi"
import { FaWhatsapp } from "react-icons/fa"
import { useLanguage } from "../../i18n/useLanguage"

export const GitHubExperienceSection: React.FC = () => {
  const { language } = useLanguage()
  const data = language === "pt" ? portfolioPT : portfolioEN
  const { experiences, languages, educationList } = data

  const labels = language === "pt"
    ? {
        kicker: "Trajetória & Carreira",
        title: "Experiência Profissional & Formação",
        description: "Mais de 4 anos projetando ecossistemas corporativos, liderando arquitetura frontend e entregando plataformas robustas em produção.",
        educationTitle: "Formação Acadêmica & Certificações",
        languagesTitle: "Idiomas & Comunidade",
        ctaTitle: "Vamos Construir Juntos?",
        ctaDesc: "Aberto a desafios técnicos de alta densidade, desenvolvimento de SaaS e liderança em engenharia.",
        ctaBtn: "Conversar no WhatsApp",
        timelineLabel: "Linha do Tempo Corporativa",
      }
    : {
        kicker: "Career Timeline & Growth",
        title: "Professional Experience & Education",
        description: "Over 4 years architecting enterprise software, leading frontend engineering, and deploying scalable platforms to production.",
        educationTitle: "Academic Education & Certifications",
        languagesTitle: "Languages & Mentorship",
        ctaTitle: "Let's Build Together",
        ctaDesc: "Open to high-density technical challenges, SaaS development, and senior engineering roles.",
        ctaBtn: "Chat on WhatsApp",
        timelineLabel: "Corporate Timeline",
      }

  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#07080b] text-[#ffffff] border-b border-white/[0.08] relative overflow-hidden">
      {/* Soft Ambient Glows */}
      <div 
        className="absolute top-1/3 left-0 w-[450px] h-[350px] bg-[#10b981]/[0.03] rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-10 right-0 w-[450px] h-[350px] bg-[#0ea5e9]/[0.03] rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10 w-full">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#10b981] uppercase tracking-wider font-semibold mb-2">
            <FiBriefcase className="text-sm" />
            {labels.kicker}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            {labels.title}
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mt-2 font-body leading-relaxed">
            {labels.description}
          </p>
        </motion.div>

        {/* 2-Column Compact Executive Layout (Cabe na tela de forma balanceada) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* =========================================================================
              LEFT COLUMN: CONNECTED VERTICAL TIMELINE (Progressive reveal on scroll, NO arrows)
              ========================================================================= */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative pl-6 sm:pl-8 before:absolute before:left-2 sm:before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-[#10b981] before:via-[#0ea5e9]/50 before:to-white/10 space-y-6 sm:space-y-8">
              
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -24, y: 12 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: idx * 0.05 }}
                  className="relative group"
                >
                  {/* Glowing Node on the Vertical Timeline Line */}
                  <div className="absolute -left-[27px] sm:-left-[35px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#10b981] ring-4 ring-[#07080b] shadow-[0_0_12px_rgba(16,185,129,0.9)] transition-transform group-hover:scale-125" />

                  {/* Compact Experience Card */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#0c0f16] border border-white/[0.08] hover:border-white/20 transition-all duration-300 shadow-xl shadow-black/40">
                    
                    {/* Header: Company, Role & Period */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2.5 pb-2.5 border-b border-white/[0.06]">
                      <div>
                        <h3 className="text-base sm:text-lg font-heading font-extrabold text-white group-hover:text-[#38bdf8] transition-colors leading-tight">
                          {exp.company}
                        </h3>
                        <p className="text-xs sm:text-sm font-heading font-semibold text-zinc-300 mt-0.5">
                          {exp.role}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono shrink-0">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/[0.05] text-[#10b981] border border-white/10 font-semibold">
                          <FiCalendar className="text-[10px]" />
                          {exp.period}
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/[0.03] text-zinc-400">
                          <FiMapPin className="text-[10px]" />
                          {exp.location.split("|")[0]}
                        </span>
                      </div>
                    </div>

                    {/* Scope Context */}
                    <p className="text-xs text-zinc-300 leading-relaxed font-body mb-3">
                      {exp.context}
                    </p>

                    {/* Key High-Impact Achievements (Compact bullet list) */}
                    <div className="space-y-1.5 mb-3.5">
                      {exp.achievements.slice(0, 3).map((item, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2 text-xs text-zinc-200">
                          <FiCheckCircle className="text-[#10b981] w-3.5 h-3.5 shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Compact Stack Badges */}
                    <div className="flex flex-wrap gap-1 pt-2 border-t border-white/[0.06]">
                      {exp.stack.slice(0, 6).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-[10px] font-mono text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                      {exp.stack.length > 6 && (
                        <span className="px-1.5 py-0.5 text-[10px] font-mono text-zinc-400">
                          +{exp.stack.length - 6}
                        </span>
                      )}
                    </div>

                  </div>
                </motion.div>
              ))}

            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: ACADEMIC EDUCATION, LANGUAGES & CONVERSION (Compact sidebar)
              ========================================================================= */}
          <div className="lg:col-span-5 flex flex-col gap-5 lg:sticky lg:top-24">
            
            {/* Academic Education & Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="p-5 rounded-2xl bg-[#0c0f16] border border-white/[0.08] shadow-xl"
            >
              <div className="flex items-center gap-2 mb-3.5 pb-2.5 border-b border-white/[0.06]">
                <div className="w-7 h-7 rounded-lg bg-[#38bdf8]/10 border border-[#38bdf8]/20 flex items-center justify-center text-[#38bdf8]">
                  <FiBookOpen className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  {labels.educationTitle}
                </h3>
              </div>

              <div className="space-y-3">
                {educationList.map((edu, idx) => (
                  <div key={idx} className="pb-2.5 border-b border-white/[0.04] last:border-none last:pb-0">
                    <div className="flex items-center gap-2">
                      <FiAward className="text-[#38bdf8] text-xs shrink-0" />
                      <h4 className="text-xs sm:text-sm font-heading font-extrabold text-white">
                        {edu.degree}
                      </h4>
                    </div>
                    <div className="text-xs text-zinc-300 font-medium pl-5 mt-0.5">
                      {edu.institution}
                    </div>
                    <div className="text-[10px] font-mono text-zinc-400 pl-5 mt-0.5">
                      {edu.period} • <span className="text-[#10b981] font-semibold">{edu.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Languages & Mentorship */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
              className="p-5 rounded-2xl bg-[#0c0f16] border border-white/[0.08] shadow-xl"
            >
              <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-white/[0.06]">
                <div className="w-7 h-7 rounded-lg bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center text-[#10b981]">
                  <FiGlobe className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  {labels.languagesTitle}
                </h3>
              </div>

              <div className="space-y-2.5">
                {languages.map((lang, index) => (
                  <div key={index} className="flex flex-col gap-0.5 pb-2 border-b border-white/[0.04] last:border-none last:pb-0">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white font-semibold">{lang.name}</span>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/[0.06] text-zinc-300">
                        {lang.level}
                      </span>
                    </div>
                    <span className="text-[11px] text-zinc-400">{lang.info}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Direct High-Conversion WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
              className="rounded-2xl p-5 bg-[#0c0f16] border border-white/15 shadow-2xl relative overflow-hidden group"
            >
              <div className="relative z-10">
                <h3 className="text-sm font-heading font-extrabold text-white mb-1">
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
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default GitHubExperienceSection
