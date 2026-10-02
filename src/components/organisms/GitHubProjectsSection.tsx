import React, { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import * as portfolioPT from "../../data/portfolio"
import * as portfolioEN from "../../data/portfolio.en"
import GitHubProjectCard from "../molecules/GitHubProjectCard"
import GitHubProjectModal from "../molecules/GitHubProjectModal"
import { FiLayers, FiCpu, FiLayout, FiGrid, FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { useLanguage } from "../../i18n/useLanguage"
import type { PortfolioProject } from "../../types/portfolio"

const ITEMS_PER_PAGE = 3

export const GitHubProjectsSection: React.FC = () => {
  const { language } = useLanguage()
  const projects: readonly PortfolioProject[] = language === "pt" ? portfolioPT.projects : portfolioEN.projects
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null)

  const labels = language === "pt"
    ? {
        kicker: "Portfólio de Engenharia & Produção",
        title: "Projetos em Produção & Sistemas Flagship",
        description: "Sistemas corporativos de alta densidade técnica, plataformas SaaS, ERPs e motores de IA autônomos.",
        showing: "Exibindo",
        of: "de",
        systems: "sistemas",
        page: "Página",
        prev: "Anterior",
        next: "Próximo",
      }
    : {
        kicker: "Engineering & Production Portfolio",
        title: "Production Systems & Flagship Architectures",
        description: "High-density enterprise software, SaaS platforms, ERPs, and autonomous AI engines.",
        showing: "Showing",
        of: "of",
        systems: "systems",
        page: "Page",
        prev: "Previous",
        next: "Next",
      }

  const categories = language === "pt"
    ? [
        { id: "all", label: "Todos os Sistemas", icon: FiGrid },
        { id: "flagship", label: "Flagships & IA", icon: FiCpu },
        { id: "erp", label: "ERP Corporativo", icon: FiLayout },
        { id: "saas", label: "SaaS & Web", icon: FiLayers },
      ]
    : [
        { id: "all", label: "All Systems", icon: FiGrid },
        { id: "flagship", label: "Flagships & AI", icon: FiCpu },
        { id: "erp", label: "Enterprise ERP", icon: FiLayout },
        { id: "saas", label: "SaaS & Web", icon: FiLayers },
      ]

  const filteredProjects = useMemo(() => {
    return selectedCategory === "all"
      ? projects
      : projects.filter((p) => {
          if (selectedCategory === "flagship") {
            return (p as { flagship?: boolean }).flagship || p.type === "ai" || p.category.includes("IA") || p.category.includes("Flagship")
          }
          if (selectedCategory === "erp") {
            return p.type === "erp" || p.category.includes("ERP") || p.category.includes("Fiscal")
          }
          if (selectedCategory === "saas") {
            return p.type === "saas" || p.type === "site" || p.type === "internal" || p.category.includes("SaaS") || p.category.includes("Full Stack")
          }
          return true
        })
  }, [projects, selectedCategory])

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE) || 1

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId)
    setCurrentPage(1)
  }

  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE
    return filteredProjects.slice(start, start + ITEMS_PER_PAGE)
  }, [filteredProjects, currentPage])

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE + 1
  const endIndex = Math.min(currentPage * ITEMS_PER_PAGE, filteredProjects.length)

  return (
    <section className="py-14 sm:py-20 bg-[#09090b] text-[#ffffff] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#a1a1aa] uppercase tracking-wider font-semibold mb-2">
              <FiLayers className="text-white" />
              {labels.kicker}
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
              {labels.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#a1a1aa] max-w-2xl mt-1.5 font-body">
              {labels.description}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-[#141419] border border-white/[0.08]">
            {categories.map((cat) => {
              const Icon = cat.icon
              const isSelected = selectedCategory === cat.id
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all ${
                    isSelected
                      ? "bg-white text-[#09090b] shadow-md"
                      : "text-[#a1a1aa] hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <Icon className="text-xs" />
                  <span>{cat.label}</span>
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* Counter Info & Pagination Controls Header Bar */}
        <div className="flex items-center justify-between text-xs font-mono text-[#71717a] mb-6 pb-3 border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <span>
              {labels.showing} <span className="text-white font-bold">{startIndex}–{endIndex}</span> {labels.of}{" "}
              <span className="text-white font-bold">{filteredProjects.length}</span> {labels.systems}
            </span>
          </div>

          {/* Pagination Navigation Pills */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-[#a1a1aa] font-mono mr-1">
              {labels.page} <span className="text-white font-bold">{currentPage}</span> / {totalPages}
            </span>

            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className={`w-7 h-7 rounded-lg border flex items-center justify-center transition-all ${
                currentPage === 1
                  ? "border-white/5 text-zinc-700 cursor-not-allowed bg-[#0f0f13]"
                  : "border-white/10 text-white hover:border-white/30 bg-[#141419]"
              }`}
              title={labels.prev}
              aria-label={labels.prev}
            >
              <FiChevronLeft className="text-sm" />
            </button>

            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              className={`w-7 h-7 rounded-lg border flex items-center justify-center transition-all ${
                currentPage === totalPages
                  ? "border-white/5 text-zinc-700 cursor-not-allowed bg-[#0f0f13]"
                  : "border-white/10 text-white hover:border-white/30 bg-[#141419]"
              }`}
              title={labels.next}
              aria-label={labels.next}
            >
              <FiChevronRight className="text-sm" />
            </button>
          </div>
        </div>

        {/* Animated Compact Cards Deck (3 Cards per slide with smooth enter/exit) */}
        <div className="min-h-[380px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory}-${currentPage}`}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {paginatedProjects.map((project) => (
                <GitHubProjectCard
                  key={project.id}
                  project={project}
                  onSelect={(p) => setActiveProject(p)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Pagination Dots */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-6">
            {Array.from({ length: totalPages }).map((_, idx) => {
              const pageNumber = idx + 1
              const isActive = currentPage === pageNumber
              return (
                <button
                  key={pageNumber}
                  type="button"
                  onClick={() => setCurrentPage(pageNumber)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    isActive ? "w-6 bg-white" : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`${labels.page} ${pageNumber}`}
                />
              )
            })}
          </div>
        )}

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
