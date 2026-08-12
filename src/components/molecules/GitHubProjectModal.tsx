import React from "react"
import { projects } from "../../data/portfolio"
import { FiX, FiExternalLink, FiCheckCircle, FiLayers, FiTrendingUp, FiImage } from "react-icons/fi"

interface GitHubProjectModalProps {
  project: typeof projects[number] | null
  onClose: () => void
}

export const GitHubProjectModal: React.FC<GitHubProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="gh-card max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto shadow-2xl rounded-2xl border-[#30363d]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-[#8b949e] hover:text-[#f0f6fc] rounded-full bg-[#161b22]/80 border border-[#30363d] hover:bg-[#21262d] transition-colors"
        >
          <FiX className="text-xl" />
        </button>

        {/* Project Image Preview Banner */}
        {project.image && (
          <div className="w-full h-48 sm:h-56 rounded-xl overflow-hidden mb-6 border border-[#30363d] bg-[#0d1117] relative group">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                // If image fails to load, hide image element
                e.currentTarget.style.display = 'none'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#161b22] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-3 left-3 flex items-center gap-2 text-xs font-mono text-[#8b949e] bg-[#0d1117]/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#30363d]">
              <FiImage className="text-[#58a6ff]" />
              <span>Preview do Sistema</span>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono px-3 py-1 rounded-full border border-[#30363d] bg-[#21262d] text-[#58a6ff] font-medium">
              {project.category}
            </span>
            {project.domain && (
              <span className="text-xs font-mono text-[#8b949e]">
                {project.domain}
              </span>
            )}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#f0f6fc]">
            {project.name}
          </h2>
          <p className="text-sm text-[#8b949e] mt-2 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Impact / Metrics Cards */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            {project.metrics.map((metric, i) => (
              <div key={i} className="p-3.5 bg-[#0d1117] border border-[#30363d] rounded-xl">
                <span className="text-xs font-mono text-[#8b949e] block mb-1">
                  {metric.label}
                </span>
                <span className="text-sm font-bold text-[#3fb950] flex items-center gap-1.5">
                  <FiTrendingUp className="text-xs" />
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Key Features */}
        <div className="mb-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-[#8b949e] mb-3 flex items-center gap-2">
            <FiCheckCircle className="text-[#3fb950]" />
            Principais Funcionalidades & Entregas
          </h3>
          <ul className="space-y-2">
            {project.features.map((feat, i) => (
              <li key={i} className="text-xs sm:text-sm text-[#c9d1d9] flex items-start gap-2.5 bg-[#0d1117] p-3 rounded-xl border border-[#30363d]/60">
                <span className="w-2 h-2 rounded-full bg-[#58a6ff] mt-1.5 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h3 className="text-xs font-mono uppercase tracking-wider text-[#8b949e] mb-3 flex items-center gap-2">
            <FiLayers className="text-[#bc8cff]" />
            Tecnologias Utilizadas
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech, i) => (
              <span key={i} className="px-3 py-1 bg-[#21262d] text-[#c9d1d9] border border-[#30363d] rounded-full text-xs font-mono font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-[#30363d] flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-semibold text-[#c9d1d9] bg-[#21262d] border border-[#30363d] rounded-xl hover:bg-[#30363d] transition-colors"
          >
            Fechar
          </button>
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#238636] hover:bg-[#2ea043] border border-transparent rounded-xl transition-colors shadow-lg"
            >
              <span>Acessar Projeto</span>
              <FiExternalLink />
            </a>
          )}
        </div>

      </div>
    </div>
  )
}

export default GitHubProjectModal
