import React from "react"
import { motion } from "framer-motion"
import * as portfolioPT from "../../data/portfolio"
import * as portfolioEN from "../../data/portfolio.en"
import { FiBriefcase, FiCalendar, FiMapPin, FiAward, FiGlobe, FiChevronRight } from "react-icons/fi"
import { useLanguage } from "../../i18n/LanguageContext"

export const GitHubExperienceSection: React.FC = () => {
  const { language } = useLanguage()
  const data = language === "pt" ? portfolioPT : portfolioEN
  const { experiences, education, languages } = data
  const labels = language === "pt"
    ? { title: "Trajetória profissional & experiência", career: "4+ anos de carreira", scope: "Resumo do escopo:", achievements: "Principais atividades e entregas:", education: "Formação acadêmica", languages: "Idiomas & comunidade" }
    : { title: "Professional background & experience", career: "4+ years of experience", scope: "Scope summary:", achievements: "Key responsibilities & deliverables:", education: "Education", languages: "Languages & community" }

  return (
    <section className="py-8 sm:py-12 bg-[#0d1117] border-b border-[#30363d]">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Main Experience Timeline */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#30363d] pb-4 mb-6 sm:mb-8">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <FiBriefcase className="text-[#3fb950] text-xl sm:text-2xl shrink-0" />
                <h2 className="text-lg sm:text-xl font-bold text-[#f0f6fc] tracking-tight">
                  {labels.title}
                </h2>
              </div>
              <span className="text-xs font-mono text-[#8b949e] px-3 py-1 rounded-full bg-[#21262d] border border-[#30363d] w-fit">
                {labels.career}
              </span>
            </div>

            {/* Timeline List */}
            <div className="relative border-l-2 border-[#30363d] ml-2.5 sm:ml-3.5 pl-5 sm:pl-8 space-y-6 sm:space-y-8">
              {experiences.map((exp, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group"
                >
                  
                  {/* Timeline Dot Marker */}
                  <div className="absolute -left-[27px] sm:-left-[41px] top-3 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#161b22] border-2 border-[#3fb950] group-hover:bg-[#3fb950] group-hover:scale-125 transition-all duration-300" />

                  {/* Experience Card */}
                  <div className="gh-card p-4 xs:p-5 sm:p-7 relative overflow-hidden border-l-4 border-l-[#58a6ff]">
                    
                    {/* Header: Role, Company & Period */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#1f6feb]/15 text-[#58a6ff] border border-[#1f6feb]/30 font-medium">
                            {exp.company}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-xl font-bold text-[#f0f6fc]">
                          {exp.role}
                        </h3>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-mono text-[#8b949e]">
                        <FiCalendar className="text-[#58a6ff] text-sm shrink-0" />
                        <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#21262d] border border-[#30363d] font-semibold text-[#c9d1d9]">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Location & Context Box */}
                    <div className="flex items-center gap-2 text-xs text-[#8b949e] mb-3.5">
                      <FiMapPin className="shrink-0 text-[#8b949e] text-sm" />
                      <span>{exp.location}</span>
                    </div>

                    <div className="text-xs sm:text-sm text-[#c9d1d9] bg-[#0d1117] p-3 sm:p-3.5 rounded-xl border border-[#30363d] mb-4 sm:mb-5 leading-relaxed font-mono relative">
                      <span className="text-[#58a6ff] font-semibold">{labels.scope} </span>
                      {exp.context}
                    </div>

                    {/* Achievements List */}
                    <div className="space-y-2 mb-5">
                      <p className="text-xs font-semibold text-[#8b949e] uppercase tracking-wider mb-2">
                        {labels.achievements}
                      </p>
                      {exp.achievements.map((ach, i) => (
                        <div key={i} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-[#c9d1d9] leading-relaxed group/item">
                          <FiChevronRight className="text-[#3fb950] text-sm shrink-0 mt-0.5 sm:mt-1 group-hover/item:translate-x-1 transition-transform" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>

                    {/* Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-3.5 border-t border-[#30363d]">
                      {exp.stack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 sm:py-1 bg-[#0d1117] text-[#c9d1d9] border border-[#30363d] rounded-full text-xs font-mono font-medium hover:border-[#58a6ff] transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>

          </div>

          {/* Right Column: Sticky Education & Languages Cards */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6 self-start w-full">
            
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="gh-card p-5 sm:p-6 border-t-4 border-t-[#58a6ff]"
            >
              <div className="flex items-center gap-2.5 border-b border-[#30363d] pb-3 mb-3.5">
                <FiAward className="text-[#58a6ff] text-lg sm:text-xl shrink-0" />
                <h3 className="text-sm sm:text-base font-semibold text-[#f0f6fc]">{labels.education}</h3>
              </div>
              <div>
                <h4 className="text-xs sm:text-base font-bold text-[#f0f6fc] mb-1">{education.degree}</h4>
                <p className="text-xs sm:text-sm text-[#58a6ff] mb-2.5 font-medium">{education.institution}</p>
                <span className="inline-block text-xs font-mono px-2.5 py-1 bg-[#21262d] text-[#8b949e] rounded-full border border-[#30363d] font-medium">
                  {education.period}
                </span>
              </div>
            </motion.div>

            {/* Languages & Community Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="gh-card p-5 sm:p-6 border-t-4 border-t-[#bc8cff]"
            >
              <div className="flex items-center gap-2.5 border-b border-[#30363d] pb-3 mb-3.5">
                <FiGlobe className="text-[#bc8cff] text-lg sm:text-xl shrink-0" />
                <h3 className="text-sm sm:text-base font-semibold text-[#f0f6fc]">{labels.languages}</h3>
              </div>
              <div className="space-y-3.5">
                {languages.map((lang, i) => (
                  <div key={i} className="text-xs sm:text-sm border-b border-[#30363d]/50 pb-3 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between font-semibold text-[#f0f6fc] mb-0.5">
                      <span>{lang.name}</span>
                    </div>
                    <p className="text-xs text-[#8b949e] font-mono leading-relaxed">{lang.level}</p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default GitHubExperienceSection
