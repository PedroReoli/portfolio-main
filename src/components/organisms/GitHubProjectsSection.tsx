import React, { useState } from "react"
import { motion } from "framer-motion"
import * as portfolioPT from "../../data/portfolio"
import * as portfolioEN from "../../data/portfolio.en"
import GitHubProjectCard from "../molecules/GitHubProjectCard"
import GitHubProjectModal from "../molecules/GitHubProjectModal"
import { FiBookmark, FiFilter } from "react-icons/fi"
import { useLanguage } from "../../i18n/useLanguage"
import type { PortfolioProject } from "../../types/portfolio"

export const GitHubProjectsSection: React.FC = () => {
  const { language } = useLanguage()
  const projects: readonly PortfolioProject[] = language === "pt" ? portfolioPT.projects : portfolioEN.projects
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null)

  const categories = language === "pt"
    ? [
        { id: "all", label: "Todos os projetos" },
        { id: "ai", label: "IA & Automação" },
        { id: "erp", label: "ERP Corporativo" },
        { id: "saas", label: "SaaS & Ferramentas" },
        { id: "site", label: "Full Stack" },
      ]
    : [
        { id: "all", label: "All projects" },
        { id: "ai", label: "AI & Automation" },
        { id: "erp", label: "Enterprise ERP" },
        { id: "saas", label: "SaaS & Tools" },
        { id: "site", label: "Full Stack" },
      ]

  const filterLabel = language === "pt" ? "Filtrar projetos" : "Filter projects"

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter((p) => {
        if (selectedCategory === "ai") return p.type === "ai"
        if (selectedCategory === "erp") return p.type === "erp" || p.category.includes("ERP")
        if (selectedCategory === "saas") return p.type === "saas" || p.category.includes("SaaS") || p.type === "internal"
        if (selectedCategory === "site") return p.type === "site" || p.category.includes("Full Stack")
        return true
      })

  return (
    <section className="py-12 bg-[#0d1117] border-b border-[#30363d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <FiBookmark className="text-[#58a6ff] text-2xl" />
            <h2 className="text-xl font-bold text-[#f0f6fc] tracking-tight">
              {language === "pt" ? "Projetos selecionados" : "Selected projects"}
            </h2>
            <span className="text-xs font-mono px-3 py-1 rounded-full border border-[#30363d] bg-[#21262d] text-[#8b949e] font-semibold">
              {filteredProjects.length}
            </span>
          </div>

          {/* Category Filter Pills */}
          <div role="group" aria-label={filterLabel} className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            <FiFilter className="text-[#8b949e] text-sm shrink-0 mr-1" />
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                aria-pressed={selectedCategory === cat.id}
                className={`min-h-[44px] px-4 py-1.5 text-xs font-mono rounded-md border transition-all duration-200 shrink-0 font-medium ${
                  selectedCategory === cat.id
                    ? "bg-[#1f6feb] text-white border-[#1f6feb] shadow-md"
                    : "bg-[#161b22] text-[#8b949e] border-[#30363d] hover:text-[#f0f6fc] hover:border-[#8b949e]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid with Smooth Motion Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <GitHubProjectCard
                project={project}
                onSelect={(p) => setActiveProject(p)}
              />
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      <GitHubProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  )
}

export default GitHubProjectsSection
