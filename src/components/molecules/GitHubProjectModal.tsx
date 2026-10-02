import React from "react"
import { FiX, FiExternalLink, FiCheckCircle, FiTrendingUp, FiCpu, FiStar } from "react-icons/fi"
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

  const isFlagship = (project as { flagship?: boolean }).flagship

  const labels = language === "pt"
    ? {
        features: "Entregas Técnicas & Arquitetura",
        metrics: "Indicadores de Sucesso & Escala",
        technologies: "Stack & Tecnologias Utilizadas",
        close: "Fechar",
        open: "Acessar Projeto",
        flagship: "Sistema Flagship",
        domain: "Ambiente de Produção",
      }
    : {
        features: "Technical Deliverables & Architecture",
        metrics: "Success Metrics & Scale",
        technologies: "Tech Stack & Tools",
        close: "Close",
        open: "Open Project",
        flagship: "Flagship System",
        domain: "Production Environment",
      }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 xs:p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-title-${project.id}`}
        className="card-dark max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto shadow-2xl border-white/20 bg-[#141419]"
      >
        {/* Close Button */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-[#a1a1aa] hover:text-white rounded-full bg-[#1c1c24] border border-white/10 hover:border-white/30 transition-colors w-9 h-9 flex items-center justify-center"
          aria-label={labels.close}
        >
          <FiX className="text-base" />
        </button>

        {/* Modal Header */}
        <div className="mb-5 pr-10">
          <div className="flex flex-wrap items-center gap-2 mb-2.5">
            {isFlagship ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/25 text-white text-xs font-mono font-bold">
                <FiStar className="text-xs fill-white" />
                {labels.flagship}
              </span>
            ) : null}
            <span className="badge-dark text-xs">
              {project.category}
            </span>
          </div>

          <h2
            id={`project-title-${project.id}`}
            className="text-xl sm:text-2xl font-heading font-extrabold text-white tracking-tight"
          >
            {project.name}
          </h2>

          <p className="text-xs font-mono text-[#a1a1aa] mt-1">
            {project.domain}
          </p>
        </div>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-[#a1a1aa] mb-5 leading-relaxed font-body">
          {project.shortDescription}
        </p>

        {/* Key Metrics Grid */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mb-5">
            <h3 className="text-xs font-mono font-bold text-[#71717a] uppercase tracking-wider mb-2.5 flex items-center gap-2">
              <FiTrendingUp className="text-[#25d366]" /> {labels.metrics}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {project.metrics.map((m, i) => (
                <div key={i} className="p-2.5 rounded-xl bg-[#09090b] border border-white/10 flex flex-col justify-between">
                  <span className="text-[10px] font-mono text-[#71717a] leading-tight block mb-1">
                    {m.label}
                  </span>
                  <span className="text-sm font-heading font-extrabold text-white">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technical Deliverables List */}
        {project.features && project.features.length > 0 && (
          <div className="mb-5">
            <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-2.5 flex items-center gap-2">
              <FiCpu className="text-[#a1a1aa]" /> {labels.features}
            </h3>
            <ul className="space-y-2">
              {project.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-[#d4d4d8] font-body">
                  <FiCheckCircle className="text-[#25d366] mt-0.5 shrink-0 text-xs" />
                  <span className="leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        <div className="mb-6">
          <h3 className="text-xs font-mono font-bold text-[#71717a] uppercase tracking-wider mb-2.5">
            {labels.technologies}
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech, i) => (
              <span key={i} className="badge-dark text-[11px]">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions Footer */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={onClose}
            className="motion-button-dark-tech px-4 py-2 text-xs font-semibold"
          >
            {labels.close}
          </button>

          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="motion-button-premium px-5 py-2 text-xs font-semibold flex items-center gap-2"
            >
              <span>{labels.open}</span>
              <FiExternalLink className="text-xs" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default GitHubProjectModal
