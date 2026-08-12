import React from "react"
import { projects } from "../../data/portfolio"
import { FiBookmark, FiExternalLink, FiInfo, FiTrendingUp } from "react-icons/fi"

interface GitHubProjectCardProps {
  project: typeof projects[number]
  onSelect: (project: typeof projects[number]) => void
}

const getLanguageColor = (tech: string) => {
  const lower = tech.toLowerCase()
  if (lower.includes("typescript")) return "#3178c6"
  if (lower.includes("react")) return "#61dafb"
  if (lower.includes("next")) return "#ffffff"
  if (lower.includes("node")) return "#339933"
  if (lower.includes("c#") || lower.includes("dotnet")) return "#178600"
  if (lower.includes("claude") || lower.includes("llm")) return "#bc8cff"
  if (lower.includes("tail")) return "#38bdf8"
  return "#58a6ff"
}

export const GitHubProjectCard: React.FC<GitHubProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div className="gh-card p-6 flex flex-col justify-between h-full group">
      <div>
        {/* Top Bar: Icon, Name & Type Badge */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <FiBookmark className="text-[#8b949e] text-lg shrink-0 group-hover:text-[#58a6ff] transition-colors" />
            <h3 
              className="text-base font-bold text-[#58a6ff] hover:underline truncate cursor-pointer tracking-tight"
              onClick={() => onSelect(project)}
            >
              {project.name}
            </h3>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full border border-[#30363d] bg-[#21262d] text-[#8b949e] shrink-0 font-medium">
            {project.category}
          </span>
        </div>

        {/* Short Description */}
        <p className="text-sm text-[#8b949e] leading-relaxed mb-5 line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Key Metrics Badges */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {project.metrics.map((metric, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full bg-[#1f6feb]/10 text-[#58a6ff] border border-[#1f6feb]/30 font-medium"
              >
                <FiTrendingUp className="text-xs" />
                {metric.value}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Footer: Languages & Actions */}
      <div className="pt-4 border-t border-[#30363d] flex items-center justify-between gap-3 text-xs">
        {/* Tech Stack Indicator */}
        <div className="flex items-center gap-3.5 overflow-hidden">
          {project.stack.slice(0, 3).map((tech, i) => (
            <div key={i} className="flex items-center gap-1.5 text-xs text-[#8b949e] font-mono shrink-0">
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ backgroundColor: getLanguageColor(tech) }}
              />
              <span className="truncate max-w-[90px] font-medium">{tech}</span>
            </div>
          ))}
          {project.stack.length > 3 && (
            <span className="text-xs text-[#8b949e] font-mono font-medium">
              +{project.stack.length - 3}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => onSelect(project)}
            className="p-2 text-[#8b949e] hover:text-[#f0f6fc] hover:bg-[#21262d] rounded-full transition-colors"
            title="Ver detalhes"
          >
            <FiInfo className="text-base" />
          </button>
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-[#8b949e] hover:text-[#58a6ff] hover:bg-[#21262d] rounded-full transition-colors"
              title="Acessar projeto"
            >
              <FiExternalLink className="text-base" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default GitHubProjectCard
