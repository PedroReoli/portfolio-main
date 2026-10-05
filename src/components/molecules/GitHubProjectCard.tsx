import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiExternalLink, FiChevronDown, FiTrendingUp, FiStar, FiLayers, FiCheckCircle } from "react-icons/fi"
import { useLanguage } from "../../i18n/useLanguage"
import type { PortfolioProject } from "../../types/portfolio"

interface GitHubProjectCardProps {
  project: PortfolioProject
  cardIndex?: number
  totalInPage?: number
  onOpenModal?: (project: PortfolioProject) => void
}

export const GitHubProjectCard: React.FC<GitHubProjectCardProps> = ({
  project,
  onOpenModal,
}) => {
  const { language } = useLanguage()
  const [isInlineExpanded, setIsInlineExpanded] = useState(false)
  const isFlagship = (project as { flagship?: boolean }).flagship

  const labels = language === "pt"
    ? {
        viewArch: "Ver Detalhes",
        lessDetails: "Menos Detalhes",
        modalArch: "Arquitetura Completa",
        visit: "Acessar Projeto",
        flagshipBadge: "Flagship",
        featuresTitle: "Destaques Técnicos",
      }
    : {
        viewArch: "View Details",
        lessDetails: "Less Details",
        modalArch: "Full Architecture",
        visit: "Visit Project",
        flagshipBadge: "Flagship",
        featuresTitle: "Technical Highlights",
      }

  return (
    <div className="relative z-10 h-full flex flex-col">
      <div
        className={`card-dark p-5 sm:p-6 flex flex-col justify-between h-full group transition-all duration-300 relative rounded-2xl ${
          isFlagship
            ? "border-white/20 bg-[#121218] hover:border-white/35 shadow-lg shadow-black/40"
            : "border-white/[0.08] bg-[#0f0f14] hover:border-white/20"
        }`}
      >
        <div>
          {/* Top Header: Badge & Domain */}
          <div className="flex items-center justify-between gap-2 mb-3.5">
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

            <span className="text-[11px] font-mono text-[#71717a] group-hover:text-zinc-300 transition-colors whitespace-nowrap">
              {project.domain}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-lg sm:text-xl font-heading font-extrabold text-white mb-2.5 group-hover:text-zinc-100 transition-colors leading-snug">
            {project.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-zinc-300 mb-4 leading-relaxed font-body">
            {project.shortDescription}
          </p>

          {/* Key Metrics Chips */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-1 gap-1.5 mb-4">
              {project.metrics.slice(0, 2).map((metric, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between gap-2 text-xs font-mono px-3 py-1.5 rounded-lg bg-[#09090c] text-white border border-white/10"
                >
                  <div className="flex items-center gap-1.5 text-zinc-300 min-w-0">
                    <FiTrendingUp className="text-xs text-[#25d366] shrink-0" />
                    <span className="font-medium truncate">{metric.label}</span>
                  </div>
                  <span className="font-bold text-white shrink-0 pl-1.5">{metric.value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Inline Expandable Highlights (No off-screen flyout) */}
          <AnimatePresence>
            {isInlineExpanded && project.features && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden mb-4 pt-2 border-t border-white/10"
              >
                <div className="text-[11px] font-mono text-[#a1a1aa] uppercase tracking-wider font-semibold mb-2">
                  {labels.featuresTitle}
                </div>
                <div className="space-y-2">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300 leading-relaxed">
                      <FiCheckCircle className="text-xs text-[#25d366] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer: Tech Stack Badges & Actions */}
        <div className="pt-4 border-t border-white/[0.08] mt-2">
          {/* Tech Stack Pills (Wrap gracefully) */}
          <div className="flex flex-wrap items-center gap-1.5 mb-3.5">
            {project.stack.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded-md bg-white/[0.06] border border-white/10 text-[11px] font-mono text-zinc-300"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="text-[10px] font-mono text-zinc-400">
                +{project.stack.length - 4}
              </span>
            )}
          </div>

          {/* Actions Bar */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              {/* Inline Quick Toggle */}
              <button
                type="button"
                onClick={() => setIsInlineExpanded((prev) => !prev)}
                className="px-3 py-2 rounded-xl text-xs font-mono font-medium flex items-center gap-1.5 transition-all bg-white/[0.06] hover:bg-white/[0.12] text-zinc-200 border border-white/10 min-h-[44px]"
                aria-expanded={isInlineExpanded}
              >
                <span>{isInlineExpanded ? labels.lessDetails : labels.viewArch}</span>
                <FiChevronDown className={`text-xs transition-transform duration-200 ${isInlineExpanded ? "rotate-180" : ""}`} />
              </button>

              {/* Full Architecture Modal Trigger */}
              {onOpenModal && (
                <button
                  type="button"
                  onClick={() => onOpenModal(project)}
                  className="px-3 py-2 rounded-xl text-xs font-mono font-bold transition-all bg-white text-[#09090b] hover:bg-zinc-200 min-h-[44px]"
                  title={labels.modalArch}
                >
                  {labels.modalArch}
                </button>
              )}
            </div>

            {/* Direct Project External Link */}
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 min-h-[44px] min-w-[44px] rounded-xl border border-white/10 bg-[#141419] hover:border-white/30 hover:bg-white hover:text-[#09090b] flex items-center justify-center text-zinc-300 transition-all shrink-0"
                title={`${labels.visit}: ${project.name}`}
                aria-label={`${labels.visit} ${project.name}`}
              >
                <FiExternalLink className="text-sm" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GitHubProjectCard
