import React, { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiExternalLink, FiChevronRight, FiTrendingUp, FiStar, FiLayers, FiCheckCircle, FiCpu, FiX } from "react-icons/fi"
import { useLanguage } from "../../i18n/useLanguage"
import type { PortfolioProject } from "../../types/portfolio"

interface GitHubProjectCardProps {
  project: PortfolioProject
  cardIndex?: number
  totalInPage?: number
}

export const GitHubProjectCard: React.FC<GitHubProjectCardProps> = ({
  project,
  cardIndex = 0,
  totalInPage = 3,
}) => {
  const { language } = useLanguage()
  const [isExpanded, setIsExpanded] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const isFlagship = (project as { flagship?: boolean }).flagship

  // Determine expansion direction on desktop
  // If it's the last card in a row (or 2nd card in a 2-card page), expand to the left to avoid screen overflow
  const isRightEdge = totalInPage === 2 ? cardIndex === 1 : cardIndex % 3 === 2

  const labels = language === "pt"
    ? {
        viewArch: "Ver Arquitetura",
        close: "Fechar",
        visit: "Acessar Projeto",
        flagshipBadge: "Flagship",
        featuresTitle: "Destaques de Engenharia",
        fullStackTitle: "Stack Completa",
      }
    : {
        viewArch: "View Architecture",
        close: "Close",
        visit: "Visit Project",
        flagshipBadge: "Flagship",
        featuresTitle: "Engineering Highlights",
        fullStackTitle: "Complete Stack",
      }

  // Close when clicking outside
  useEffect(() => {
    if (!isExpanded) return
    const handleClickOutside = (e: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        setIsExpanded(false)
      }
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsExpanded(false)
    }
    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isExpanded])

  return (
    <div
      ref={cardRef}
      className={`relative ${isExpanded ? "z-50" : "z-10"}`}
    >
      {/* Base Card (Stays perfectly stable in the grid) */}
      <div
        className={`card-dark p-5 flex flex-col justify-between h-full group transition-all duration-300 relative rounded-2xl ${
          isFlagship
            ? "border-white/20 bg-[#131319] hover:border-white/35 shadow-lg shadow-black/40"
            : "border-white/[0.08] bg-[#0f0f14] hover:border-white/20"
        } ${isExpanded ? "ring-1 ring-white/40 border-white/50 bg-[#161620]" : ""}`}
      >
        <div>
          {/* Top Header: Badge & Domain */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              {isFlagship ? (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/25 text-white text-[11px] font-mono font-bold tracking-wide">
                  <FiStar className="text-xs fill-white text-white" />
                  {labels.flagshipBadge}
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#a1a1aa] text-[11px] font-mono font-medium">
                  <FiLayers className="text-xs text-zinc-400" />
                  {project.category}
                </span>
              )}
            </div>

            <span className="text-[11px] font-mono text-[#71717a] group-hover:text-[#a1a1aa] transition-colors whitespace-nowrap">
              {project.domain}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-base sm:text-lg font-heading font-bold text-white mb-2 group-hover:text-zinc-100 transition-colors leading-snug">
            {project.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-[#a1a1aa] mb-4 leading-relaxed font-body">
            {project.shortDescription}
          </p>

          {/* Key Metrics Chips (Exactly 2 clean full-width rows) */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-1 gap-1.5 mb-4">
              {project.metrics.slice(0, 2).map((metric, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between gap-2 text-[11px] font-mono px-2.5 py-1.5 rounded-lg bg-[#09090c] text-white border border-white/10"
                >
                  <div className="flex items-center gap-1.5 text-[#a1a1aa] min-w-0">
                    <FiTrendingUp className="text-xs text-[#25d366] shrink-0" />
                    <span className="font-medium truncate">{metric.label}</span>
                  </div>
                  <span className="font-bold text-white shrink-0 pl-1">{metric.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer: Tech Stack Indicators & Expansion Button */}
        <div className="pt-3.5 border-t border-white/[0.08] flex items-center justify-between gap-2 text-xs mt-1">
          {/* Tech Stack Pills (Clean first 2 badges without cut-off) */}
          <div className="flex items-center gap-2">
            {project.stack.slice(0, 2).map((tech, i) => (
              <div key={i} className="flex items-center gap-1.5 text-[11px] text-[#a1a1aa] font-mono shrink-0">
                <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-white/40" />
                <span className="font-medium">{tech}</span>
              </div>
            ))}
          </div>

          {/* Action Trigger Button (No cut-off, clean and highlighted) */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={() => setIsExpanded((prev) => !prev)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold flex items-center gap-1.5 transition-all shadow-sm ${
                isExpanded
                  ? "bg-white text-[#09090b]"
                  : "bg-white/[0.08] text-white hover:bg-white hover:text-[#09090b] border border-white/15"
              }`}
              aria-expanded={isExpanded}
            >
              <span>{labels.viewArch}</span>
              <FiChevronRight className={`text-xs transition-transform duration-300 ${isExpanded ? (isRightEdge ? "-rotate-90" : "rotate-90") : ""}`} />
            </button>

            {project.href && !isExpanded && (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-lg border border-white/10 bg-[#09090b] hover:border-white/40 hover:text-white flex items-center justify-center text-[#a1a1aa] transition-all"
                title={labels.visit}
                aria-label={`${labels.visit} ${project.name}`}
              >
                <FiExternalLink className="text-xs" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Floating Elevated Popout Flyout (High Z-Index, Pops Forward & to the Right / Left) */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, x: isRightEdge ? -20 : 20, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: isRightEdge ? -20 : 20, scale: 0.96 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute top-0 z-50 w-full sm:w-[380px] max-w-[92vw] bg-[#14141e]/95 backdrop-blur-xl border border-white/25 rounded-2xl p-5 shadow-2xl shadow-black/90 ${
              isRightEdge
                ? "lg:right-full lg:mr-4 right-0"
                : "lg:left-full lg:ml-4 left-0"
            }`}
          >
            {/* Popout Header */}
            <div className="flex items-center justify-between gap-3 pb-3 border-b border-white/10 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#25d366] animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                  {labels.featuresTitle}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsExpanded(false)}
                className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition-all"
                aria-label={labels.close}
              >
                <FiX className="text-sm" />
              </button>
            </div>

            {/* Engineering Highlights List */}
            <div className="space-y-2.5 mb-5">
              {project.features?.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-200 font-body leading-relaxed">
                  <FiCheckCircle className="text-sm text-[#25d366] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Complete Stack Section */}
            <div className="mb-5 pt-3 border-t border-white/10">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#a1a1aa] uppercase tracking-wider font-semibold mb-2">
                <FiCpu className="text-xs text-white" />
                <span>{labels.fullStackTitle}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-md bg-white/[0.08] border border-white/15 text-[11px] font-mono text-white font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action CTA inside the popout */}
            <div className="flex items-center gap-2 pt-2">
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 px-3 rounded-xl bg-white text-[#09090b] font-mono text-xs font-bold hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <span>{labels.visit}</span>
                  <FiExternalLink className="text-xs" />
                </a>
              )}
              <button
                type="button"
                onClick={() => setIsExpanded(false)}
                className="py-2 px-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/15 text-white font-mono text-xs font-medium transition-all"
              >
                {labels.close}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default GitHubProjectCard
