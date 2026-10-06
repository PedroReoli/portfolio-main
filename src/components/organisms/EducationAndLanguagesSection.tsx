import React from "react"
import { motion } from "framer-motion"
import { FiBookOpen, FiAward, FiGlobe, FiCheckCircle } from "react-icons/fi"
import { useLanguage } from "../../i18n/useLanguage"
import * as portfolioPT from "../../data/portfolio"
import * as portfolioEN from "../../data/portfolio.en"

export const EducationAndLanguagesSection: React.FC = () => {
  const { language } = useLanguage()
  const education = language === "pt" ? portfolioPT.education : portfolioEN.education
  const languages = language === "pt" ? portfolioPT.languages : portfolioEN.languages

  const labels = language === "pt"
    ? {
        kicker: "Formação Acadêmica & Certificações",
        title: "Educação & Proficiência Global",
        description: "Base acadêmica em Engenharia de Software e capacitação linguística para ecossistemas internacionais.",
        educationTitle: "Formação Acadêmica",
        languagesTitle: "Idiomas & Proficiência",
      }
    : {
        kicker: "Academic Background & Certifications",
        title: "Education & Global Proficiency",
        description: "Academic foundation in Software Engineering and linguistic proficiency for international ecosystems.",
        educationTitle: "Academic Education",
        languagesTitle: "Languages & Proficiency",
      }

  return (
    <section id="education" className="py-14 sm:py-20 bg-[#09090b] text-[#ffffff] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#a1a1aa] uppercase tracking-wider font-semibold mb-2">
              <FiBookOpen className="text-white" />
              {labels.kicker}
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
              {labels.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#a1a1aa] max-w-2xl mt-1.5 font-body">
              {labels.description}
            </p>
          </div>
        </motion.div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* Left Column: Education */}
          <div className="lg:col-span-7">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-6 pb-2.5 border-b border-white/[0.08] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>{labels.educationTitle}</span>
            </h3>

            <div className="card-dark p-6 sm:p-8 rounded-2xl bg-[#141419] border border-white/[0.08] hover:border-white/20 transition-all shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div>
                  <h4 className="text-lg sm:text-xl font-heading font-bold text-white mb-1">
                    {education.degree}
                  </h4>
                  <p className="text-sm font-heading font-medium text-[#d4d4d8]">
                    {education.institution}
                  </p>
                </div>

                <div className="flex flex-col sm:items-end gap-1 shrink-0">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white/[0.06] border border-white/10 text-xs font-mono text-white">
                    {education.period}
                  </span>
                  <span className="text-[11px] font-mono text-[#25d366] font-medium flex items-center gap-1">
                    <FiAward className="text-[10px]" /> {education.status}
                  </span>
                </div>
              </div>

              <div className="space-y-3 mt-6 pt-6 border-t border-white/[0.06]">
                {education.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <FiCheckCircle className="text-sm text-sky-400 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed font-body">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Languages & Community */}
          <div className="lg:col-span-5">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-6 pb-2.5 border-b border-white/[0.08] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>{labels.languagesTitle}</span>
            </h3>

            <div className="space-y-4">
              {languages.map((lang, idx) => (
                <div key={idx} className="card-dark p-5 rounded-2xl bg-[#0f0f14] border border-white/[0.06] hover:border-white/15 transition-all flex flex-col justify-center">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h4 className="text-base font-heading font-bold text-white flex items-center gap-2">
                      <FiGlobe className="text-[#a1a1aa]" />
                      {lang.name}
                    </h4>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-sky-500/10 border border-sky-500/20 text-[11px] font-mono font-bold text-sky-400">
                      {lang.level}
                    </span>
                  </div>
                  <p className="text-xs text-[#71717a] font-body leading-relaxed pl-6">
                    {lang.info}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default EducationAndLanguagesSection
