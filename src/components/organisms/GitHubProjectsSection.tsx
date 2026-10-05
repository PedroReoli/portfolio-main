import React, { useState } from "react"
import { motion } from "framer-motion"
import * as portfolioPT from "../../data/portfolio"
import * as portfolioEN from "../../data/portfolio.en"
import GitHubProjectModal from "../molecules/GitHubProjectModal"
import { 
  FiExternalLink, 
  FiGithub, 
  FiLayers, 
  FiCheckCircle, 
  FiMaximize2, 
  FiGrid,
  FiArrowUpRight
} from "react-icons/fi"
import { useLanguage } from "../../i18n/useLanguage"
import type { PortfolioProject } from "../../types/portfolio"

export const GitHubProjectsSection: React.FC = () => {
  const { language } = useLanguage()
  const projects: readonly PortfolioProject[] = language === "pt" ? portfolioPT.projects : portfolioEN.projects
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null)

  // Split flagship projects from secondary ecosystem projects
  const flagshipProjects = projects.filter((p) => p.flagship)
  const secondaryProjects = projects.filter((p) => !p.flagship)

  const labels = language === "pt"
    ? {
        kicker: "Flagship Showcase // Engenharia de Alta Escala",
        title: "Sistemas Flagship em Produção",
        description: "Arquiteturas corporativas consolidadas, plataformas SaaS multi-tenant e motores de IA autônomos operando com métricas reais de escala.",
        viewArch: "Arquitetura Completa",
        visitSite: "Acessar em Produção",
        viewGithub: "Código no GitHub",
        clickToInspect: "Clique para inspecionar arquitetura",
        otherKicker: "Ecossistema Complementar",
        otherTitle: "Outros Sistemas Corporativos em Produção",
        otherDescription: "Portais contábeis, gestão administrativa e infraestrutura de microsserviços em nuvem.",
        showing: "Exibindo",
        of: "de",
        systems: "sistemas corporativos",
        flagshipNumber: (idx: number) => `FLAGSHIP 0${idx + 1} //`,
      }
    : {
        kicker: "Flagship Showcase // High-Scale Engineering",
        title: "Production Flagship Systems",
        description: "Consolidated enterprise architectures, multi-tenant SaaS platforms, and autonomous AI engines operating with proven scale metrics.",
        viewArch: "Full Architecture",
        visitSite: "Visit in Production",
        viewGithub: "Code on GitHub",
        clickToInspect: "Click to inspect architecture",
        otherKicker: "Complementary Ecosystem",
        otherTitle: "Other Enterprise Systems in Production",
        otherDescription: "Accounting portals, administrative consoles, and cloud microservices infrastructure.",
        showing: "Showing",
        of: "of",
        systems: "enterprise systems",
        flagshipNumber: (idx: number) => `FLAGSHIP 0${idx + 1} //`,
      }

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#07080b] text-[#ffffff] border-b border-white/[0.08] relative overflow-hidden">
      {/* Soft Ambient Lighting Accents */}
      <div 
        className="absolute top-1/4 right-0 w-[500px] h-[400px] bg-[#0ea5e9]/[0.03] rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-1/3 left-0 w-[500px] h-[400px] bg-[#10b981]/[0.03] rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10 w-full">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 sm:mb-20"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#38bdf8] uppercase tracking-wider font-semibold mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
              {labels.kicker}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
              {labels.title}
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 max-w-3xl mt-2 font-body leading-relaxed">
              {labels.description}
            </p>
          </div>

          <div className="text-xs font-mono text-zinc-400 self-start sm:self-end bg-[#0c0f16] px-3.5 py-1.5 rounded-full border border-white/10 shrink-0">
            {labels.showing} <span className="text-white font-bold">{flagshipProjects.length}</span> Flagships +{" "}
            <span className="text-white font-bold">{secondaryProjects.length}</span> {labels.systems}
          </div>
        </motion.div>

        {/* =========================================================================
            SECTION 2: ALTERNATING Z-PATTERN WIDE HORIZONTAL FLAGSHIPS
            ========================================================================= */}
        <div className="space-y-20 sm:space-y-28 mb-28">
          {flagshipProjects.map((project, idx) => {
            // Alternating orientation: even index = photo left, odd index = photo right
            const isPhotoLeft = idx % 2 === 0
            const isGithub = project.href.includes("github.com")

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative p-6 sm:p-8 lg:p-10 rounded-3xl border border-white/10 bg-[#0c0f16]/90 shadow-2xl shadow-black/80 hover:border-white/20 transition-all duration-300"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isPhotoLeft ? "" : "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
                  }`}
                >
                  {/* Wide Horizontal Visual Mockup Frame */}
                  <div className="lg:col-span-6 w-full">
                    <div 
                      onClick={() => setSelectedProject(project)}
                      className="group cursor-pointer rounded-2xl overflow-hidden border border-white/15 bg-[#090b10] shadow-2xl shadow-black/80 hover:border-white/30 transition-all duration-300 relative"
                      title={labels.clickToInspect}
                    >
                      {/* Window Header Chrome */}
                      <div className="px-4 py-2.5 bg-[#11141f] border-b border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                          <span className="ml-2 text-[11px] text-zinc-300 truncate max-w-[180px] sm:max-w-xs">
                            {project.id === "achilles-cdp-agent" 
                              ? "achilles-cdp --mcp-server [ACTIVE]" 
                              : project.domain}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-zinc-400 group-hover:text-white transition-colors">
                          <FiMaximize2 className="text-xs" />
                          <span className="text-[10px] hidden sm:inline">{labels.viewArch}</span>
                        </div>
                      </div>

                      {/* Wide Aspect Ratio Mockup Canvas (Aspect 18/10 para visual mais horizontal) */}
                      <div className="relative aspect-[18/10] overflow-hidden bg-[#06070a]">
                        <img
                          src={project.image}
                          alt={project.name}
                          loading="lazy"
                          className="w-full h-full object-cover object-top contrast-[1.03] brightness-[0.96] group-hover:scale-[1.03] group-hover:brightness-100 transition-all duration-500 ease-out"
                        />
                        {/* Soft Vignette Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#07080b]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity pointer-events-none" />

                        {/* Floating Status Pill */}
                        <div className="absolute bottom-3 left-3 z-10">
                          <span className="px-3 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/15 text-[11px] font-mono text-white font-semibold flex items-center gap-1.5 shadow-lg">
                            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                            <span>{project.category}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Technical Storytelling Hub (STAR Deep Dive) */}
                  <div className="lg:col-span-6 flex flex-col justify-center">
                    {/* Flagship Number & Category */}
                    <div className="flex items-center gap-2 text-xs font-mono text-[#38bdf8] uppercase tracking-wider font-semibold mb-2">
                      <span>{labels.flagshipNumber(idx)}</span>
                      <span className="text-zinc-400 font-normal">{project.domain}</span>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight leading-tight mb-3">
                      {project.name}
                    </h3>

                    {/* Short Description */}
                    <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-body mb-5">
                      {project.shortDescription}
                    </p>

                    {/* Key Technical Highlights (STAR Points) */}
                    <div className="space-y-2 mb-6">
                      {project.features.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                          <FiCheckCircle className="text-[#10b981] w-4 h-4 shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Metrics Bar */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6">
                        {project.metrics.map((metric, mIdx) => (
                          <div
                            key={mIdx}
                            className="p-2.5 rounded-xl bg-[#11141f] border border-white/[0.08] flex flex-col justify-between"
                          >
                            <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider leading-none mb-1">
                              {metric.label}
                            </span>
                            <span className="text-xs sm:text-sm font-heading font-bold text-white tracking-tight leading-tight">
                              {metric.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap items-center gap-1.5 mb-6">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions Row with Redesigned Iconic GitHub Button */}
                    <div className="flex flex-wrap items-center gap-3">
                      {/* Premium Redesigned GitHub / Production Button */}
                      {isGithub ? (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noreferrer"
                          className="group/btn relative px-5 py-2.5 rounded-xl bg-[#121520] hover:bg-[#1a1f30] border border-white/20 hover:border-white/40 text-white flex items-center gap-2.5 transition-all duration-200 shadow-lg hover:shadow-[0_0_24px_rgba(255,255,255,0.12)] hover:-translate-y-0.5 min-h-[42px]"
                        >
                          <FiGithub className="text-base text-white group-hover/btn:scale-110 transition-transform" />
                          <span className="font-heading font-bold text-xs tracking-tight">{labels.viewGithub}</span>
                          <span className="text-[10px] font-mono text-zinc-400 border-l border-white/15 pl-2 flex items-center gap-0.5">
                            repo <FiArrowUpRight className="text-xs" />
                          </span>
                        </a>
                      ) : (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noreferrer"
                          className="motion-button-primary px-5 py-2.5 text-xs font-bold flex items-center gap-2 min-h-[42px] shadow-lg shadow-white/5"
                        >
                          <FiExternalLink className="text-sm" />
                          <span>{labels.visitSite}</span>
                        </a>
                      )}

                      {/* Modal Trigger for In-Depth Technical Specs */}
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="motion-button-dark-tech px-4 py-2.5 text-xs font-medium flex items-center gap-2 min-h-[42px]"
                      >
                        <FiLayers className="text-sm text-zinc-400" />
                        <span>{labels.viewArch}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* =========================================================================
            SECONDARY SYSTEMS SHOWCASE: WIDE HORIZONTAL ROW CARDS
            ========================================================================= */}
        {secondaryProjects.length > 0 && (
          <div className="pt-12 border-t border-white/[0.08]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[#10b981] uppercase tracking-wider font-semibold mb-2">
                  <FiGrid className="text-xs" />
                  {labels.otherKicker}
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
                  {labels.otherTitle}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl mt-1.5 font-body">
                  {labels.otherDescription}
                </p>
              </div>
            </div>

            {/* Wide Horizontal Cards Grid (2 Colunas com Layout Horizontal) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {secondaryProjects.map((project) => {
                const isGithub = project.href.includes("github.com")

                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4 }}
                    className="p-5 rounded-2xl bg-[#0c0f16] border border-white/[0.08] hover:border-white/20 transition-all duration-300 shadow-xl flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between group"
                  >
                    {/* Horizontal Card Thumbnail on Left */}
                    <div 
                      onClick={() => setSelectedProject(project)}
                      className="w-full sm:w-44 md:w-48 aspect-[16/10] shrink-0 rounded-xl overflow-hidden border border-white/10 bg-[#090b10] relative cursor-pointer"
                    >
                      <img
                        src={project.image}
                        alt={project.name}
                        loading="lazy"
                        className="w-full h-full object-cover object-top contrast-[1.03] group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:opacity-0 transition-opacity" />
                    </div>

                    {/* Horizontal Card Content on Right */}
                    <div className="flex-1 flex flex-col justify-between w-full">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="text-[10px] font-mono text-[#38bdf8] uppercase tracking-wider font-semibold">
                            {project.category}
                          </span>
                          <span className="text-[10px] font-mono text-zinc-500">
                            {project.domain}
                          </span>
                        </div>

                        <h4 className="text-base font-heading font-extrabold text-white group-hover:text-[#38bdf8] transition-colors leading-tight mb-1.5">
                          {project.name}
                        </h4>

                        <p className="text-xs text-zinc-300 leading-snug line-clamp-2 mb-3">
                          {project.shortDescription}
                        </p>

                        {/* Metrics Pills */}
                        {project.metrics && project.metrics.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-3">
                            {project.metrics.map((m, mIdx) => (
                              <span
                                key={mIdx}
                                className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-zinc-300"
                              >
                                <strong className="text-white">{m.label}:</strong> {m.value}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2 pt-2 border-t border-white/[0.06]">
                        {isGithub ? (
                          <a
                            href={project.href}
                            target="_blank"
                            rel="noreferrer"
                            className="px-3 py-1.5 rounded-lg bg-[#121520] hover:bg-[#1a1f30] border border-white/20 hover:border-white/40 text-white flex items-center gap-1.5 text-xs font-mono font-bold transition-all shadow-md"
                          >
                            <FiGithub className="text-xs" />
                            <span>GitHub</span>
                            <FiArrowUpRight className="text-[10px]" />
                          </a>
                        ) : (
                          <a
                            href={project.href}
                            target="_blank"
                            rel="noreferrer"
                            className="motion-button-primary px-3 py-1.5 text-xs font-bold flex items-center gap-1.5 rounded-lg"
                          >
                            <FiExternalLink className="text-xs" />
                            <span>{labels.visitSite}</span>
                          </a>
                        )}

                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs text-zinc-300 hover:text-white transition-colors"
                        >
                          {labels.viewArch}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        )}

      </div>

      {/* Accessible Full Technical Deep-Dive Modal */}
      <GitHubProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}

export default GitHubProjectsSection
