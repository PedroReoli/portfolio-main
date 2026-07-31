import { useState } from "react"
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
  SiFastapi,
  SiDotnet,
  SiOpenapiinitiative,
  SiGraphql,
  SiPostgresql,
  SiMysql,
  SiSupabase,
  SiDocker,
  SiGithub,
  SiElectron,
  SiAnthropic,
  SiTauri,
  SiRust,
} from "react-icons/si"
import { FiCpu, FiCode, FiDatabase, FiLayers, FiZap, FiInfo } from "react-icons/fi"
import SectionHeading from "../molecules/SectionHeading"

interface SkillItem {
  readonly name: string
  readonly icon: string
  readonly usage?: string
}

interface SkillCategory {
  readonly category: string
  readonly items: readonly SkillItem[]
}

interface SkillsSectionProps {
  skills: readonly SkillCategory[]
  labels?: {
    readonly kicker?: string
    readonly title1?: string
    readonly title2?: string
  }
}

const renderIcon = (iconName: string) => {
  const props = { className: "w-4 h-4 shrink-0 text-[#00f0ff]" }
  switch (iconName) {
    case "SiAnthropic":
      return <SiAnthropic {...props} />
    case "SiTauri":
      return <SiTauri {...props} />
    case "SiRust":
      return <SiRust {...props} />
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
    case "SiFastapi":
      return <SiFastapi {...props} />
    case "SiDotnet":
      return <SiDotnet {...props} />
    case "SiOpenapiinitiative":
      return <SiOpenapiinitiative {...props} />
    case "SiGraphql":
      return <SiGraphql {...props} />
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
    case "FiDatabase":
      return <FiDatabase {...props} />
    case "FiLayers":
      return <FiLayers {...props} />
    case "FiCpu":
      return <FiCpu {...props} />
    case "FiZap":
      return <FiZap {...props} />
    default:
      return <FiCode {...props} />
  }
}

const SkillsSection = ({ skills, labels }: SkillsSectionProps) => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null)

  return (
    <section id="skills" className="py-14 px-4 md:px-8 max-w-6xl mx-auto">
      <SectionHeading
        kicker={labels?.kicker || "Competências Técnicas"}
        title1={labels?.title1 || "STACK &"}
        title2={labels?.title2 || "ESPECIALIDADES"}
      />

      {/* Symmetrical 4-Card Grid (Guaranteed 100% visible & stable) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {skills.map((group, groupIdx) => (
          <div
            key={groupIdx}
            className="p-5 rounded-3xl bg-zinc-900/70 backdrop-blur-md border border-white/10 hover:border-[#00f0ff]/40 transition-colors duration-200 shadow-xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xs font-black uppercase tracking-wider text-[#00f0ff] mb-4 pb-2.5 border-b border-white/5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00f0ff]" />
                <span>{group.category}</span>
              </h3>

              <div className="flex flex-col gap-2">
                {group.items.map((item, itemIdx) => {
                  const tooltipKey = `${groupIdx}-${itemIdx}`
                  const isHovered = activeTooltip === tooltipKey

                  return (
                    <div key={itemIdx} className="relative group/tooltip">
                      <div
                        onMouseEnter={() => setActiveTooltip(tooltipKey)}
                        onMouseLeave={() => setActiveTooltip(null)}
                        className="w-full flex items-center justify-between px-3.5 py-2 rounded-2xl bg-zinc-950/80 border border-white/5 hover:border-[#00f0ff]/50 hover:bg-zinc-800/90 transition-colors duration-150 text-xs font-bold text-zinc-200 shadow-sm cursor-pointer"
                      >
                        <div className="flex items-center gap-2.5 truncate">
                          {renderIcon(item.icon)}
                          <span className="truncate">{item.name}</span>
                        </div>
                        <FiInfo className="w-3.5 h-3.5 text-zinc-500 group-hover/tooltip:text-[#00f0ff] transition-colors duration-150 shrink-0" />
                      </div>

                      {/* Pop-up Menu / Tooltip on Hover */}
                      <AnimatePresence>
                        {isHovered && item.usage && (
                          <motion.div
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 4 }}
                            transition={{ duration: 0.12 }}
                            className="absolute left-0 bottom-full mb-2 z-30 w-64 p-3 rounded-2xl bg-zinc-950/95 border border-[#00f0ff]/40 shadow-2xl backdrop-blur-xl pointer-events-none"
                          >
                            <div className="flex items-center gap-2 text-[#00f0ff] text-[11px] font-black uppercase tracking-wider mb-1">
                              {renderIcon(item.icon)}
                              <span>{item.name}</span>
                            </div>
                            <p className="text-[11px] text-zinc-300 font-medium leading-normal">
                              {item.usage}
                            </p>
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
    </section>
  )
}

export default SkillsSection
