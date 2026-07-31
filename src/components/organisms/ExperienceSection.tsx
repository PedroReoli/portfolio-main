import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiMaximize2, FiX, FiCheckCircle, FiBriefcase, FiMapPin, FiCalendar } from "react-icons/fi"
import SectionHeading from "../molecules/SectionHeading"
import Tag from "../atoms/Tag"

interface Experience {
  readonly company: string
  readonly role: string
  readonly context: string
  readonly period: string
  readonly location: string
  readonly stack: readonly string[]
  readonly achievements: readonly string[]
}

interface ExperienceSectionProps {
  experiences: readonly Experience[]
  title?: string
  subtitle?: string
}

const ExperienceSection = ({
  experiences,
  title = "CARREIRA &",
  subtitle = "EXPERIÊNCIA",
}: ExperienceSectionProps) => {
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null)

  return (
    <section id="experiencia" className="py-14 px-4 md:px-8 max-w-6xl mx-auto">
      <SectionHeading
        kicker="Trajetória Profissional"
        title1={title}
        title2={subtitle}
      />

      <div className="relative pl-6 md:pl-8 border-l border-zinc-800 space-y-6">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Dot Indicator */}
            <div className="absolute -left-[31px] md:-left-[39px] top-2.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-zinc-700 group-hover:border-[#00f0ff] group-hover:bg-[#00f0ff] group-hover:shadow-[0_0_12px_#00f0ff] transition-all" />

            {/* Compact Streamlined Card */}
            <div className="p-5 md:p-6 rounded-3xl bg-zinc-900/60 backdrop-blur-md border border-white/10 hover:border-[#00f0ff]/40 transition-all space-y-3 shadow-xl">
              {/* Header: Company, Role & Date */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#00f0ff]">
                    {exp.company}
                  </span>
                  <h3 className="text-lg md:text-xl font-extrabold text-white leading-tight mt-0.5">
                    {exp.role}
                  </h3>
                </div>

                <div className="text-xs md:text-sm font-extrabold text-[#00f0ff] bg-[#00f0ff]/10 px-3.5 py-1.5 rounded-full border border-[#00f0ff]/30 self-start sm:self-center shrink-0 shadow-xs flex items-center gap-1.5">
                  <FiCalendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Context */}
              <p className="text-xs text-zinc-400 italic line-clamp-1">{exp.context}</p>

              {/* Top 2 Concise Bullets */}
              <ul className="space-y-1.5 text-xs text-zinc-300">
                {exp.achievements.slice(0, 2).map((ach, achIdx) => (
                  <li key={achIdx} className="flex items-start gap-2 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] mt-1.5 shrink-0" />
                    <span className="line-clamp-2">{ach}</span>
                  </li>
                ))}
              </ul>

              {/* Card Bottom Bar: Stack Tags + Ver Detalhes Button */}
              <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-white/5">
                <div className="flex flex-wrap gap-1.5">
                  {exp.stack.slice(0, 4).map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                  {exp.stack.length > 4 && (
                    <span className="text-[10px] text-zinc-400 font-semibold self-center">
                      +{exp.stack.length - 4}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setSelectedExp(exp)}
                  className="px-4 py-2 rounded-full bg-zinc-950 border border-white/15 text-white hover:text-[#00f0ff] hover:border-[#00f0ff]/50 text-xs font-extrabold flex items-center justify-center gap-1.5 transition-colors shadow-md shrink-0 self-end sm:self-auto"
                >
                  <FiMaximize2 className="w-3.5 h-3.5 text-[#00f0ff]" />
                  <span>Ver Detalhes</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Spacious Click-Outside-To-Close Pop-Up Overlay */}
      <AnimatePresence>
        {selectedExp && (
          <div
            onClick={() => setSelectedExp(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-xl cursor-pointer overflow-y-auto"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="relative w-full max-w-5xl bg-zinc-950 border border-[#00f0ff]/40 rounded-3xl p-6 md:p-8 shadow-2xl text-zinc-100 space-y-6 cursor-default my-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedExp(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors border border-white/10"
                aria-label="Fechar"
              >
                <FiX className="w-5 h-5" />
              </button>

              {/* Pop-Up Header */}
              <div className="space-y-2 pr-8">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30">
                    {selectedExp.company}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-zinc-400 font-semibold">
                    <FiCalendar className="w-3.5 h-3.5 text-[#00f0ff]" />
                    {selectedExp.period}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-zinc-400 font-semibold">
                    <FiMapPin className="w-3.5 h-3.5 text-zinc-400" />
                    {selectedExp.location}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-white flex items-center gap-2">
                  <FiBriefcase className="w-6 h-6 text-[#00f0ff] shrink-0" />
                  <span>{selectedExp.role}</span>
                </h3>

                <p className="text-xs md:text-sm text-zinc-300 italic bg-zinc-900/90 p-3 rounded-2xl border border-white/5">
                  {selectedExp.context}
                </p>
              </div>

              {/* Wide 2-Column Grid for Achievements */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#00f0ff]">
                  Realizações & Contribuições Técnicas Completas
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedExp.achievements.map((ach, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-2xl bg-zinc-900/70 border border-white/5 flex items-start gap-2.5 text-xs text-zinc-200 leading-relaxed"
                    >
                      <FiCheckCircle className="w-4 h-4 text-[#00f0ff] shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Complete Technologies Stack */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#00f0ff]">
                  Stack & Ferramentas Utilizadas
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedExp.stack.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </div>

              {/* Click outside hint */}
              <div className="text-[11px] text-center text-zinc-500 font-medium pt-1">
                💡 Clique em qualquer lugar fora do pop-up para fechar
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default ExperienceSection
