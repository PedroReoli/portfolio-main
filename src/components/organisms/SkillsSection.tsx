import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiRadixui,
  SiReactquery,
  SiNodedotjs,
  SiExpress,
  SiDotnet,
  SiOpenapiinitiative,
  SiPostgresql,
  SiMysql,
  SiSupabase,
  SiDocker,
  SiGithub,
  SiElectron,
  SiAnthropic,
  SiTauri,
  SiOpenai,
  SiPuppeteer,
} from "react-icons/si"
import { FiCpu, FiCode, FiDatabase, FiLayers, FiZap, FiInfo, FiShield, FiCloud } from "react-icons/fi"
import { useLanguage } from "../../i18n/useLanguage"
import * as portfolioPT from "../../data/portfolio"
import * as portfolioEN from "../../data/portfolio.en"

const renderIcon = (iconName: string) => {
  const props = { className: "w-4 h-4 shrink-0 text-white" }
  switch (iconName) {
    case "SiAnthropic":
      return <SiAnthropic {...props} />
    case "SiTauri":
      return <SiTauri {...props} />
    case "SiReact":
      return <SiReact {...props} />
    case "SiNextdotjs":
      return <SiNextdotjs {...props} />
    case "SiTypescript":
      return <SiTypescript {...props} />
    case "SiTailwindcss":
      return <SiTailwindcss {...props} />
    case "SiFramer":
      return <SiFramer {...props} />
    case "SiRadixui":
      return <SiRadixui {...props} />
    case "SiReactquery":
      return <SiReactquery {...props} />
    case "SiNodedotjs":
      return <SiNodedotjs {...props} />
    case "SiExpress":
      return <SiExpress {...props} />
    case "SiDotnet":
      return <SiDotnet {...props} />
    case "SiOpenapiinitiative":
      return <SiOpenapiinitiative {...props} />
    case "SiPostgresql":
      return <SiPostgresql {...props} />
    case "SiMysql":
      return <SiMysql {...props} />
    case "SiSupabase":
      return <SiSupabase {...props} />
    case "SiDocker":
      return <SiDocker {...props} />
    case "SiGithub":
      return <SiGithub {...props} />
    case "SiElectron":
      return <SiElectron {...props} />
    case "SiOpenai":
      return <SiOpenai {...props} />
    case "SiPuppeteer":
      return <SiPuppeteer {...props} />
    case "FiDatabase":
      return <FiDatabase {...props} />
    case "FiLayers":
      return <FiLayers {...props} />
    case "FiCpu":
      return <FiCpu {...props} />
    case "FiZap":
      return <FiZap {...props} />
    case "FiShield":
      return <FiShield {...props} />
    case "FiCloud":
      return <FiCloud {...props} />
    default:
      return <FiCode {...props} />
  }
}

export const SkillsSection: React.FC = () => {
  const { language } = useLanguage()
  const skills = language === "pt" ? portfolioPT.skills : portfolioEN.skills
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null)

  const labels = language === "pt"
    ? {
        kicker: "Stack Técnica & Engenharia",
        title: "Tecnologias & Especialidades",
        description: "Domínio prático de ferramentas, linguagens, bancos e frameworks utilizados em ecossistemas de alta escala.",
        hoverHint: "Passe o cursor para ver a aplicação prática",
        contextLabel: "Aplicação Prática",
      }
    : {
        kicker: "Tech Stack & Engineering",
        title: "Technologies & Core Specialties",
        description: "Hands-on mastery of frameworks, databases, and engineering tools applied across production ecosystems.",
        hoverHint: "Hover to inspect practical usage",
        contextLabel: "Practical Application",
      }

  return (
    <section id="skills" className="py-14 sm:py-20 bg-[#09090b] text-[#ffffff] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#a1a1aa] uppercase tracking-wider font-semibold mb-2">
              <FiCpu className="text-white" />
              {labels.kicker}
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
              {labels.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#a1a1aa] max-w-2xl mt-1.5 font-body">
              {labels.description}
            </p>
          </div>

          <div className="text-xs font-mono text-[#71717a] hidden sm:block">
            {labels.hoverHint}
          </div>
        </motion.div>

        {/* 4-Card Symmetric Grid with OVERFLOW VISIBLE and HIGH Z-INDEX */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 relative">
          {skills.map((group, groupIdx) => (
            <div
              key={groupIdx}
              className="card-dark p-4 sm:p-5 flex flex-col justify-between hover:border-white/20 transition-all !overflow-visible relative"
              style={{ zIndex: activeTooltip?.startsWith(`${groupIdx}-`) ? 40 : 10 }}
            >
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4 pb-2.5 border-b border-white/[0.08] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span>{group.category}</span>
                </h3>

                <div className="flex flex-col gap-2">
                  {group.items.map((item, itemIdx) => {
                    const tooltipKey = `${groupIdx}-${itemIdx}`
                    const isHovered = activeTooltip === tooltipKey

                    return (
                      <div 
                        key={itemIdx} 
                        className="relative"
                        style={{ zIndex: isHovered ? 50 : 1 }}
                      >
                        <div
                          onMouseEnter={() => setActiveTooltip(tooltipKey)}
                          onMouseLeave={() => setActiveTooltip(null)}
                          onClick={() => setActiveTooltip(isHovered ? null : tooltipKey)}
                          className={`flex items-center justify-between p-2 rounded-xl border transition-all cursor-pointer select-none ${
                            isHovered
                              ? "bg-white/10 border-white/40 shadow-md"
                              : "bg-[#09090b] border-white/[0.06] hover:border-white/20"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            {renderIcon(item.icon)}
                            <span className="text-xs font-medium text-white font-body">
                              {item.name}
                            </span>
                          </div>

                          <FiInfo className="text-xs text-[#71717a] hover:text-white" />
                        </div>

                        {/* High Z-Index Floating Tooltip (Never cut off or hidden) */}
                        <AnimatePresence>
                          {isHovered && (
                            <motion.div
                              initial={{ opacity: 0, y: 6, scale: 0.96 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 4, scale: 0.96 }}
                              transition={{ duration: 0.15 }}
                              className="absolute bottom-full left-0 right-0 mb-2 p-3 rounded-xl bg-[#1c1c24] border border-white/20 shadow-2xl z-[100] pointer-events-none"
                            >
                              <div className="flex items-center justify-between gap-2 mb-1">
                                <span className="text-xs font-heading font-bold text-white">
                                  {item.name}
                                </span>
                                <span className="text-[10px] font-mono text-[#a1a1aa] font-medium">
                                  {labels.contextLabel}
                                </span>
                              </div>
                              <p className="text-[11px] text-[#d4d4d8] leading-relaxed font-body">
                                {item.usage}
                              </p>
                              <div className="absolute -bottom-1.5 left-6 w-3 h-3 bg-[#1c1c24] border-r border-b border-white/20 rotate-45" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default SkillsSection
