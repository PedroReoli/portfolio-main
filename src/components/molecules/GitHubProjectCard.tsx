import React from "react"
import { FiExternalLink, FiInfo, FiTrendingUp, FiStar, FiLayers } from "react-icons/fi"
import { useLanguage } from "../../i18n/useLanguage"
import type { PortfolioProject } from "../../types/portfolio"

interface GitHubProjectCardProps {
  project: PortfolioProject
  onSelect: (project: PortfolioProject) => void
}

export const GitHubProjectCard: React.FC<GitHubProjectCardProps> = ({ project, onSelect }) => {
  const { language } = useLanguage()
  const isFlagship = (project as { flagship?: boolean }).flagship

  const labels = language === "pt"
    ? { viewDetails: "Ver Arquitetura", visit: "Acessar", flagshipBadge: "Flagship" }
    : { viewDetails: "View Architecture", visit: "Visit", flagshipBadge: "Flagship" }

  return (
    <div className={`card-dark p-5 sm:p-6 flex flex-col justify-between h-full group ${
      isFlagship ? "border-white/20 bg-[#16161d]" : "border-white/[0.08]"
    }`}>
      <div>
        {/* Top Header: Badge, Flagship Tag & Category */}
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <div className="flex items-center gap-2">
            {isFlagship ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/25 text-white text-[11px] font-mono font-bold">
                <FiStar className="text-xs fill-white" />
                {labels.flagshipBadge}
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#141419] border border-white/[0.08] text-[#a1a1aa] text-[11px] font-mono font-medium">
                <FiLayers className="text-xs text-white" />
                {project.category}
              </span>
            )}
          </div>

          <span className="text-[11px] font-mono text-[#71717a] truncate max-w-[140px]">
            {project.domain}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-base sm:text-lg font-heading font-bold text-white mb-1.5 group-hover:text-zinc-200 transition-colors">
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="text-left hover:underline underline-offset-4"
          >
            {project.name}
          </button>
        </h3>

        {/* Description */}
        <p className="text-xs text-[#a1a1aa] line-clamp-3 mb-4 leading-relaxed font-body">
          {project.shortDescription}
        </p>

        {/* Key Metrics Chips */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.metrics.map((metric, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2 py-0.5 rounded bg-[#09090b] text-white border border-white/10 font-semibold"
              >
                <FiTrendingUp className="text-xs text-[#25d366]" />
                <span className="text-[#71717a] font-normal">{metric.label}:</span> {metric.value}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Footer: Tech Stack & Actions */}
      <div className="pt-3.5 border-t border-white/[0.08] flex items-center justify-between gap-3 text-xs">
        {/* Tech Stack Indicators */}
        <div className="flex items-center gap-1.5 overflow-hidden">
          {project.stack.slice(0, 3).map((tech, i) => (
            <div key={i} className="flex items-center gap-1 text-[11px] text-[#a1a1aa] font-mono shrink-0">
              <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-white/40" />
              <span className="truncate max-w-[75px] font-medium">{tech}</span>
            </div>
          ))}
          {project.stack.length > 3 && (
            <span className="text-[10px] text-[#71717a] font-mono font-medium px-1.5 py-0.5 rounded bg-white/[0.04]">
              +{project.stack.length - 3}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="motion-button-dark-tech px-2.5 py-1 text-xs flex items-center gap-1 text-white"
            title={labels.viewDetails}
          >
            <FiInfo className="text-xs" />
            <span className="hidden xs:inline">{labels.viewDetails}</span>
          </button>
          
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="w-7 h-7 rounded-full border border-white/10 bg-[#09090b] hover:border-white/40 hover:text-white flex items-center justify-center text-[#a1a1aa] transition-all"
              title={labels.visit}
              aria-label={`${labels.visit} ${project.name}`}
            >
              <FiExternalLink className="text-xs" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default GitHubProjectCard
