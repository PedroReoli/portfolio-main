import React from "react"
import { FiX, FiExternalLink, FiCheckCircle, FiLayers, FiTrendingUp, FiImage } from "react-icons/fi"
import { useLanguage } from "../../i18n/useLanguage"
import type { PortfolioProject } from "../../types/portfolio"
import { useModalAccessibility } from "../../hooks/useModalAccessibility"

interface GitHubProjectModalProps {
  project: PortfolioProject | null
  onClose: () => void
}

export const GitHubProjectModal: React.FC<GitHubProjectModalProps> = ({ project, onClose }) => {
  const { language } = useLanguage()
  const { dialogRef, closeButtonRef } = useModalAccessibility(Boolean(project), onClose)
  if (!project) return null

  const labels = language === "pt"
    ? { preview: "Preview do sistema", features: "Principais funcionalidades & entregas", technologies: "Tecnologias utilizadas", close: "Fechar", open: "Acessar projeto" }
    : { preview: "System preview", features: "Key features & deliverables", technologies: "Technologies used", close: "Close", open: "Open project" }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 xs:p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-title-${project.id}`}
        className="gh-card max-w-2xl w-full p-4 xs:p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto shadow-2xl rounded-2xl border-[#30363d]"
      >
        
        {/* Close Button */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 text-[#8b949e] hover:text-[#f0f6fc] rounded-md bg-[#161b22]/90 border border-[#30363d] hover:bg-[#21262d] transition-colors w-11 h-11 flex items-center justify-center"
          aria-label={labels.close}
        >
          <FiX className="text-lg sm:text-xl" />
        </button>

        {/* Project Image Preview Banner */}
        {project.image && (
          <div className="w-full h-40 xs:h-48 sm:h-56 rounded-xl overflow-hidden mb-5 sm:mb-6 border border-[#30363d] bg-[#0d1117] relative group">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#161b22] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[11px] font-mono text-[#8b949e] bg-[#0d1117]/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#30363d]">
              <FiImage className="text-[#58a6ff]" />
              <span>{labels.preview}</span>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="mb-5 sm:mb-6 pr-8">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="text-xs font-mono px-3 py-1 rounded-full border border-[#30363d] bg-[#21262d] text-[#58a6ff] font-medium">
              {project.category}
            </span>
            {project.domain && (
              <span className="text-xs font-mono text-[#8b949e] truncate max-w-[200px] xs:max-w-none">
                {project.domain}
              </span>
            )}
          </div>
          <h2 id={`project-title-${project.id}`} className="text-xl xs:text-2xl sm:text-3xl font-bold text-[#f0f6fc]">
            {project.name}
          </h2>
          <p className="text-xs sm:text-sm text-[#8b949e] mt-2 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Impact / Metrics Cards */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-1 xs:grid-cols-3 gap-2.5 sm:gap-3 mb-5 sm:mb-6">
            {project.metrics.map((metric, i) => (
              <div key={i} className="p-3 bg-[#0d1117] border border-[#30363d] rounded-xl">
                <span className="text-[11px] font-mono text-[#8b949e] block mb-0.5">
                  {metric.label}
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#3fb950] flex items-center gap-1.5">
                  <FiTrendingUp className="text-xs shrink-0" />
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Key Features */}
        <div className="mb-5 sm:mb-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-[#8b949e] mb-3 flex items-center gap-2">
            <FiCheckCircle className="text-[#3fb950]" />
            {labels.features}
          </h3>
          <ul className="space-y-2">
            {project.features.map((feat, i) => (
              <li key={i} className="text-xs sm:text-sm text-[#c9d1d9] flex items-start gap-2 bg-[#0d1117] p-2.5 sm:p-3 rounded-xl border border-[#30363d]/60">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#58a6ff] mt-1.5 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-6 sm:mb-8">
          <h3 className="text-xs font-mono uppercase tracking-wider text-[#8b949e] mb-3 flex items-center gap-2">
            <FiLayers className="text-[#bc8cff]" />
            {labels.technologies}
          </h3>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.stack.map((tech, i) => (
              <span key={i} className="px-2.5 py-1 bg-[#21262d] text-[#c9d1d9] border border-[#30363d] rounded-full text-xs font-mono font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-[#30363d] flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
          <button
            onClick={onClose}
            className="min-h-[44px] w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-[#c9d1d9] bg-[#21262d] border border-[#30363d] rounded-md hover:bg-[#30363d] transition-colors"
          >
            {labels.close}
          </button>
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="min-h-[44px] w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#238636] hover:bg-[#2ea043] border border-transparent rounded-md transition-colors shadow-lg"
            >
              <span>{labels.open}</span>
              <FiExternalLink />
            </a>
          )}
        </div>

      </div>
    </div>
  )
}

export default GitHubProjectModal
