import React, { useState } from "react"
import { motion } from "framer-motion"
import * as portfolioPT from "../../data/portfolio"
import * as portfolioEN from "../../data/portfolio.en"
import GitHubProjectCard from "../molecules/GitHubProjectCard"
import GitHubProjectModal from "../molecules/GitHubProjectModal"
import { FiLayers } from "react-icons/fi"
import { useLanguage } from "../../i18n/useLanguage"
import type { PortfolioProject } from "../../types/portfolio"

export const GitHubProjectsSection: React.FC = () => {
  const { language } = useLanguage()
  const projects: readonly PortfolioProject[] = language === "pt" ? portfolioPT.projects : portfolioEN.projects
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null)

  const labels = language === "pt"
    ? {
        kicker: "Portfólio de Engenharia & Produção",
        title: "Projetos em Produção & Sistemas Flagship",
        description: "Sistemas corporativos de alta densidade técnica, plataformas SaaS, ERPs e motores de IA autônomos operando com métricas reais de escala.",
        showing: "Exibindo",
        of: "de",
        systems: "sistemas em produção",
      }
    : {
        kicker: "Engineering & Production Portfolio",
        title: "Production Systems & Flagship Architectures",
        description: "High-density enterprise software, SaaS platforms, ERPs, and autonomous AI engines running with proven production metrics.",
        showing: "Showing",
        of: "of",
        systems: "production systems",
      }

  return (
    <section id="projects" className="py-16 sm:py-24 bg-[#09090b] text-[#ffffff] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10 w-full">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#a1a1aa] uppercase tracking-wider font-semibold mb-2">
              <FiLayers className="text-[#25d366]" />
              {labels.kicker}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white tracking-tight">
              {labels.title}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl mt-1.5 font-body">
              {labels.description}
            </p>
          </div>

          <div className="text-xs font-mono text-zinc-400 self-start sm:self-end">
            {labels.showing} <span className="text-white font-bold">{projects.length}</span> {labels.of}{" "}
            <span className="text-white font-bold">{projects.length}</span> {labels.systems}
          </div>
        </motion.div>

        {/* Responsive Grid with Natural Document Scroll */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <GitHubProjectCard
              key={project.id}
              project={project}
              cardIndex={idx}
              totalInPage={projects.length}
              onOpenModal={setSelectedProject}
            />
          ))}
        </div>

      </div>

      {/* Accessible Full Technical Modal */}
      <GitHubProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}

export default GitHubProjectsSection
