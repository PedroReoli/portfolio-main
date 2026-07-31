import { useState } from "react"
import { FiExternalLink, FiMaximize2, FiCpu } from "react-icons/fi"
import {
  SiAnthropic,
  SiOpenai,
  SiGoogle,
  SiMeta,
  SiPytorch,
  SiGithub,
} from "react-icons/si"
import SectionHeading from "../molecules/SectionHeading"
import ProjectDetailsModal from "../molecules/ProjectDetailsModal"
import Tag from "../atoms/Tag"

interface Metric {
  readonly label: string
  readonly value: string
}

interface Project {
  readonly id: string
  readonly name: string
  readonly href: string
  readonly domain: string
  readonly type: string
  readonly category: string
  readonly image: string
  readonly shortDescription: string
  readonly stack: readonly string[]
  readonly features: readonly string[]
  readonly metrics: readonly Metric[]
}

interface ProjectsSectionProps {
  projects: readonly Project[]
  labels: {
    readonly kicker: string
    readonly title1: string
    readonly title2: string
    readonly details: string
    readonly visit: string
    readonly stack: string
    readonly features: string
    readonly metrics: string
    readonly close: string
    readonly all: string
    readonly types: Record<string, string>
  }
}

const ReoliAiLogosBanner = () => {
  const aiLogos = [
    { name: "Claude", icon: <SiAnthropic className="w-5 h-5 text-[#00f0ff]" /> },
    { name: "ChatGPT", icon: <SiOpenai className="w-5 h-5 text-emerald-400" /> },
    { name: "Gemini", icon: <SiGoogle className="w-5 h-5 text-blue-400" /> },
    { name: "Meta AI", icon: <SiMeta className="w-5 h-5 text-cyan-400" /> },
    { name: "PyTorch", icon: <SiPytorch className="w-5 h-5 text-amber-400" /> },
    { name: "Copilot", icon: <SiGithub className="w-5 h-5 text-purple-400" /> },
  ]

  return (
    <div className="w-full h-full min-h-[200px] md:min-h-[220px] rounded-2xl bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 border border-white/10 p-4 relative overflow-hidden flex flex-col justify-between group-hover:border-[#00f0ff]/40 transition-colors duration-200">
      {/* Background glow radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#00f0ff]/15 rounded-full blur-2xl pointer-events-none" />

      {/* Header Tag */}
      <div className="flex items-center justify-between z-10">
        <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-zinc-950/90 text-[#00f0ff] border border-[#00f0ff]/30 backdrop-blur-md shadow-md flex items-center gap-1.5">
          <FiCpu className="w-3.5 h-3.5" />
          <span>43 Operational Skills</span>
        </span>
        <span className="text-[10px] font-extrabold text-zinc-400 uppercase tracking-widest">
          Claude Code CLI
        </span>
      </div>

      {/* AI Logos Grid Showcase */}
      <div className="grid grid-cols-3 gap-2.5 my-3 z-10">
        {aiLogos.map((ai, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-zinc-950/80 border border-white/10 hover:border-[#00f0ff]/50 backdrop-blur-md shadow-sm transition-colors duration-150"
          >
            {ai.icon}
            <span className="text-[11px] font-bold text-zinc-200 hidden sm:inline">
              {ai.name}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom Footer Label */}
      <div className="text-[11px] font-semibold text-zinc-400 text-center z-10 bg-zinc-950/60 py-1 px-3 rounded-full border border-white/5">
        ⚡ Automações com LLMs & Engenharia de Prompts
      </div>
    </div>
  )
}

const ProjectsSection = ({ projects, labels }: ProjectsSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  const categories = [
    { id: "all", label: labels.all },
    ...Array.from(new Set(projects.map((p) => p.type))).map((type) => ({
      id: type,
      label: labels.types[type] || type,
    })),
  ]

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.type === selectedCategory)

  return (
    <section id="projetos" className="py-14 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <SectionHeading
          kicker={labels.kicker}
          title1={labels.title1}
          title2={labels.title2}
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-1.5 p-1.5 bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-2xl">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors duration-150 ${
                selectedCategory === cat.id
                  ? "bg-[#00f0ff] text-zinc-950 shadow-md shadow-[#00f0ff]/20"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group glass-card rounded-3xl p-5 flex flex-col justify-between border border-white/10 hover:border-[#00f0ff]/40 shadow-xl overflow-hidden transition-colors duration-200"
          >
            {/* Card Image Thumbnail or AI Logos Showcase for ReoliOS */}
            <div className="w-full h-52 md:h-56 rounded-2xl overflow-hidden bg-zinc-950 border border-white/5 relative mb-4">
              {project.id === "reolios" ? (
                <ReoliAiLogosBanner />
              ) : (
                <>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover object-top opacity-85 group-hover:opacity-100 transition-opacity duration-200"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-zinc-950/80 text-[#00f0ff] border border-white/10 backdrop-blur-md shadow-md">
                      {project.category}
                    </span>
                  </div>
                </>
              )}
            </div>

            {/* Card Body */}
            <div className="space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-xl font-extrabold text-white group-hover:text-[#00f0ff] transition-colors duration-150">
                    {project.name}
                  </h3>
                  <span className="text-xs text-zinc-400 font-medium">
                    {project.domain}
                  </span>
                </div>

                <p className="text-xs md:text-sm text-zinc-300 mt-1.5 leading-relaxed line-clamp-2">
                  {project.shortDescription}
                </p>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.stack.slice(0, 5).map((st) => (
                  <Tag key={st}>{st}</Tag>
                ))}
                {project.stack.length > 5 && (
                  <span className="text-[10px] text-zinc-400 font-semibold self-center">
                    +{project.stack.length - 5}
                  </span>
                )}
              </div>

              {/* Card Footer Actions */}
              <div className="flex items-center justify-between pt-4 mt-2 border-t border-white/5 gap-2">
                <button
                  onClick={() => setActiveProject(project)}
                  className="px-4 py-2 rounded-full bg-zinc-900/90 border border-white/15 text-white hover:text-[#00f0ff] hover:border-[#00f0ff]/40 text-xs md:text-sm font-bold flex items-center gap-1.5 transition-colors duration-150 shadow-sm"
                >
                  <FiMaximize2 className="w-4 h-4" />
                  <span>{labels.details}</span>
                </button>

                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-[#00f0ff] text-zinc-950 hover:bg-[#38bdf8] text-xs md:text-sm font-extrabold flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,240,255,0.25)] transition-colors duration-150"
                >
                  <span>{labels.visit}</span>
                  <FiExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <ProjectDetailsModal
        project={activeProject}
        isOpen={Boolean(activeProject)}
        onClose={() => setActiveProject(null)}
        labels={labels}
      />
    </section>
  )
}

export default ProjectsSection
