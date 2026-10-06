import React, { useState, useMemo, useRef, useEffect } from "react"
import { motion, AnimatePresence, useScroll } from "framer-motion"
import * as portfolioPT from "../../data/portfolio"
import * as portfolioEN from "../../data/portfolio.en"
import GitHubProjectCard from "../molecules/GitHubProjectCard"
import { FiLayers, FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { useLanguage } from "../../i18n/useLanguage"
import type { PortfolioProject } from "../../types/portfolio"

const ITEMS_PER_PAGE = 3

export const GitHubProjectsSection: React.FC = () => {
  const { language } = useLanguage()
  const projects: readonly PortfolioProject[] = language === "pt" ? portfolioPT.projects : portfolioEN.projects
  const [currentPage, setCurrentPage] = useState<number>(1)
  const containerRef = useRef<HTMLDivElement>(null)

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

  // Separate flagships from secondary modules
  const flagshipProjects = useMemo(() => projects.filter((p: any) => p.flagship), [projects])
  const secondaryProjects = useMemo(() => projects.filter((p: any) => !p.flagship), [projects])

  const totalPages = Math.ceil(secondaryProjects.length / ITEMS_PER_PAGE) || 1

  // Scroll synchronization for smooth page swapping while pinned for secondary projects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  useEffect(() => {
    if (totalPages <= 1) {
      setCurrentPage(1)
      return
    }

    const unsubscribe = scrollYProgress.on("change", (progress) => {
      // Map scroll progress evenly across total pages
      const rawIndex = Math.floor(progress * totalPages) + 1
      const clampedPage = Math.min(totalPages, Math.max(1, rawIndex))
      setCurrentPage((prev) => (prev !== clampedPage ? clampedPage : prev))
    })

    return () => unsubscribe()
  }, [totalPages, scrollYProgress])

  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE
    return secondaryProjects.slice(start, start + ITEMS_PER_PAGE)
  }, [secondaryProjects, currentPage])

  // Dynamic grid layout class based on number of cards in current page
  const gridLayoutClass = useMemo(() => {
    if (paginatedProjects.length === 2) {
      return "grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto w-full"
    }
    if (paginatedProjects.length === 1) {
      return "grid grid-cols-1 gap-5 max-w-xl mx-auto w-full"
    }
    return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto w-full"
  }, [paginatedProjects.length])

  return (
    <div
      ref={containerRef}
      style={{ minHeight: secondaryProjects.length > 0 && totalPages > 1 ? `${totalPages * 90 + 40}vh` : "auto" }}
      className="relative w-full bg-[#09090b] text-[#ffffff] border-b border-white/[0.08]"
    >
      <div className={`w-full flex flex-col justify-center pt-20 sm:pt-24 pb-16 z-10 ${secondaryProjects.length > 0 && totalPages > 1 ? "sticky top-0 h-screen overflow-y-auto lg:overflow-hidden no-scrollbar" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10 w-full my-auto">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#a1a1aa] uppercase tracking-wider font-semibold mb-2">
                <FiLayers className="text-white" />
                {labels.kicker}
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white tracking-tight">
                {labels.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#a1a1aa] max-w-2xl mt-1.5 font-body">
                {labels.description}
              </p>
            </div>
          </div>

          {/* Render Flagship Projects first */}
          {flagshipProjects.length > 0 && (
            <div className="mb-12">
              {flagshipProjects.map((project, idx) => (
                <GitHubProjectCard
                  key={project.id}
                  project={project}
                  cardIndex={idx}
                  totalInPage={1}
                />
              ))}
            </div>
          )}

          {/* Render Secondary Projects with pagination */}
          {secondaryProjects.length > 0 && (
            <>
              {/* Pagination Controls in Header (Only when multiple pages) */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 border-t border-white/[0.06] pt-6">
                <div className="flex items-center text-xs font-mono text-[#71717a]">
                  {labels.showing} <span className="text-white font-bold ml-1 mr-1">1–{secondaryProjects.length}</span> {labels.of}{" "}
                  <span className="text-white font-bold mx-1">{secondaryProjects.length}</span> {labels.systems} (Secondary Modules)
                </div>

                {totalPages > 1 && (
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-[#a1a1aa] font-mono">
                      {labels.page} <span className="text-white font-bold">{currentPage}</span> / {totalPages}
                    </span>

                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                        className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-all ${
                          currentPage === 1
                            ? "border-white/5 text-zinc-700 cursor-not-allowed bg-[#0f0f13]"
                            : "border-white/10 text-white hover:border-white/30 hover:bg-white/[0.06] bg-[#141419]"
                        }`}
                        title={labels.prev}
                        aria-label={labels.prev}
                      >
                        <FiChevronLeft className="text-base" />
                      </button>

                      <button
                        type="button"
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                        className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-all ${
                          currentPage === totalPages
                            ? "border-white/5 text-zinc-700 cursor-not-allowed bg-[#0f0f13]"
                            : "border-white/10 text-white hover:border-white/30 hover:bg-white/[0.06] bg-[#141419]"
                        }`}
                        title={labels.next}
                        aria-label={labels.next}
                      >
                        <FiChevronRight className="text-base" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Animated Cards Deck with Dynamic Centering Grid */}
              <div className="min-h-[340px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`page-${currentPage}`}
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -15, scale: 0.98 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className={gridLayoutClass}
                  >
                    {paginatedProjects.map((project, idx) => (
                      <GitHubProjectCard
                        key={project.id}
                        project={project}
                        cardIndex={idx}
                        totalInPage={paginatedProjects.length}
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
                          isActive ? "w-7 bg-white" : "w-2 bg-white/20 hover:bg-white/40"
                        }`}
                        aria-label={`${labels.page} ${pageNumber}`}
                      />
                    )
                  })}
                </div>
              )}
            </>
          )}

        </div>
      </div>
    </div>
  )
}

export default GitHubProjectsSection
