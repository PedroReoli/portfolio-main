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
  FiLock,
  FiGrid,
  FiArrowUpRight,
  FiCpu
} from "react-icons/fi"
import { useLanguage } from "../../i18n/useLanguage"
import type { PortfolioProject } from "../../types/portfolio"

export const GitHubProjectsSection: React.FC = () => {
  const { language } = useLanguage()
  const projects: readonly PortfolioProject[] = language === "pt" ? portfolioPT.projects : portfolioEN.projects
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null)

  const flagshipProjects = projects.filter((p) => p.flagship)
  const secondaryProjects = projects.filter((p) => !p.flagship)

  const labels = language === "pt"
    ? {
        kicker: "Engenharia de Sistemas // Flagship Showcase",
        title: "Sistemas em Produção",
        description: "Aplicações de missão crítica, plataformas SaaS e motores de IA autônomos arquitetados para alta escala e performance.",
        viewArch: "Arquitetura & Detalhes",
        visitSite: "Acessar em Produção",
        viewGithub: "Código no GitHub",
        proprietaryBadge: "Código Proprietário Corporativo",
        internalBadge: "Ambiente Corporativo Interno",
        clickToInspect: "Clique para inspecionar arquitetura",
        otherKicker: "Ecossistema Corporativo",
        otherTitle: "Outros Módulos & Infraestrutura em Produção",
        otherDescription: "Módulos de gestão fiscal, backends administrativos, portais de autoatendimento e arquitetura em nuvem.",
        flagshipNumber: (idx: number) => `SISTEMA 0${idx + 1} //`,
      }
    : {
        kicker: "Systems Engineering // Flagship Showcase",
        title: "Production Systems",
        description: "Mission-critical applications, SaaS platforms, and autonomous AI engines engineered for high scale and proven reliability.",
        viewArch: "Architecture & Specs",
        visitSite: "Visit in Production",
        viewGithub: "Code on GitHub",
        proprietaryBadge: "Proprietary Enterprise Code",
        internalBadge: "Internal Corporate Environment",
        clickToInspect: "Click to inspect architecture",
        otherKicker: "Corporate Ecosystem",
        otherTitle: "Additional Production Modules & Cloud Infra",
        otherDescription: "Fiscal management platforms, administrative backends, self-service portals, and event-driven cloud infrastructure.",
        flagshipNumber: (idx: number) => `SYSTEM 0${idx + 1} //`,
      }

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#07080b] text-[#ffffff] border-b border-white/[0.08] relative overflow-hidden">
      
      {/* Luz ambiente suave */}
      <div 
        className="absolute top-1/4 right-0 w-[550px] h-[450px] bg-[#0ea5e9]/[0.025] rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-1/3 left-0 w-[550px] h-[450px] bg-[#10b981]/[0.025] rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10 w-full">
        
        {/* Cabeçalho da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="mb-16 sm:mb-24"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#38bdf8] uppercase tracking-wider font-semibold mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
            {labels.kicker}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight">
            {labels.title}
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mt-2 font-body leading-relaxed">
            {labels.description}
          </p>
        </motion.div>

        {/* =========================================================================
            SISTEMAS PRINCIPAIS: INFORMAÇÕES NA ESQUERDA, CARDS/PREVIEW NA DIREITA
            (SEM ALTERNAR, TAMANHO AMPLO E PROPORCIONAL, SEM CARD ENVOLVENTE GENÉRICO)
            ========================================================================= */}
        <div className="space-y-24 sm:space-y-32 mb-28">
          {flagshipProjects.map((project, idx) => {
            const hasValidGithub = Boolean(project.githubUrl && project.githubUrl.length > 0)
            const hasValidLive = Boolean(project.liveUrl && project.liveUrl.length > 0)
            const isProprietary = Boolean(project.isProprietary)

            return (
              <div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center pb-20 sm:pb-24 border-b border-white/[0.08] last:border-b-0 last:pb-0"
              >
                
                {/* LADO ESQUERDO: INFORMAÇÕES COM FOCO EM ENGENHARIA */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    {/* Header: Número do Sistema & Categoria */}
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <span className="text-xs font-mono font-bold text-[#10b981] tracking-wider">
                        {labels.flagshipNumber(idx)}
                      </span>
                      <span className="text-xs font-mono text-zinc-400 uppercase tracking-wide">
                        {project.category}
                      </span>
                    </div>

                    {/* Título Principal do Sistema */}
                    <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight leading-tight mb-3">
                      {project.name}
                    </h3>

                    {/* Descrição Concisa */}
                    <p className="text-sm text-zinc-300 font-sans leading-relaxed mb-5">
                      {project.shortDescription}
                    </p>

                    {/* Entregas Principais / Features */}
                    {project.features && project.features.length > 0 && (
                      <ul className="space-y-2 mb-6">
                        {project.features.slice(0, 3).map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-300 font-sans leading-relaxed">
                            <FiCheckCircle className="text-[#10b981] w-3.5 h-3.5 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Métricas Técnicas */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="grid grid-cols-2 gap-2.5 mb-6">
                        {project.metrics.map((metric, mIdx) => (
                          <div 
                            key={mIdx} 
                            className="p-2.5 rounded-xl bg-[#0c0f16] border border-white/[0.08]"
                          >
                            <span className="block text-[10px] font-mono text-zinc-400 uppercase">
                              {metric.label}
                            </span>
                            <span className="text-xs font-heading font-bold text-white mt-0.5 block">
                              {metric.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Stack Técnica em Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.stack.slice(0, 6).map((tech, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* AÇÕES E BOTÕES INTELIGENTES (Apenas exibe se houver repo ou demo real!) */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    {/* Botão GitHub (Apenas quando houver repositório real) */}
                    {hasValidGithub && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2.5 rounded-xl bg-[#121520] hover:bg-[#1a1f30] text-white border border-white/20 hover:border-white/40 font-mono text-xs font-bold transition-all flex items-center gap-2 shadow-lg"
                      >
                        <FiGithub className="text-sm" />
                        <span>{labels.viewGithub}</span>
                        <FiArrowUpRight className="text-xs text-zinc-400" />
                      </a>
                    )}

                    {/* Botão Demo / Produção (Apenas quando houver URL pública) */}
                    {hasValidLive && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2.5 rounded-xl bg-white text-black hover:bg-zinc-200 font-heading text-xs font-bold transition-all flex items-center gap-2 shadow-lg"
                      >
                        <FiExternalLink className="text-sm" />
                        <span>{labels.visitSite}</span>
                      </a>
                    )}

                    {/* Tag Informativa quando NÃO houver código aberto */}
                    {isProprietary && !hasValidGithub && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-[11px] font-mono text-zinc-400">
                        <FiLock className="text-amber-400/80 text-xs" />
                        <span>{labels.proprietaryBadge}</span>
                      </div>
                    )}

                    {/* Botão para Inspecionar Arquitetura Completa */}
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="px-3.5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-zinc-300 hover:text-white border border-white/10 text-xs font-mono transition-colors flex items-center gap-2"
                    >
                      <FiLayers className="text-xs" />
                      <span>{labels.viewArch}</span>
                    </button>
                  </div>
                </div>

                {/* LADO DIREITO: CARD VISUAL / PREVIEW DA APLICAÇÃO (AMPLO E PROPORCIONAL) */}
                <div className="lg:col-span-7 w-full">
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="cursor-pointer group rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.12] bg-[#0c0f16] shadow-2xl hover:border-white/30 transition-all duration-300"
                    title={labels.clickToInspect}
                  >
                    {/* Barra de Título do Software (Window Chrome) */}
                    <div className="px-4 py-3 bg-[#11141e] border-b border-white/[0.08] flex items-center justify-between text-xs font-mono text-zinc-400">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                        <span className="ml-2 text-zinc-300 text-[11px] truncate max-w-[200px] sm:max-w-xs">
                          {project.domain || project.name}
                        </span>
                      </div>
                      <span className="text-[11px] text-zinc-500 group-hover:text-white transition-colors flex items-center gap-1">
                        <span>{labels.viewArch}</span>
                        <FiArrowUpRight className="text-xs" />
                      </span>
                    </div>

                    {/* Imagem Proporcional em Alta Fidelidade */}
                    <div className="w-full aspect-[16/10] sm:aspect-[16/9] relative overflow-hidden bg-[#090b10]">
                      <img
                        src={project.image}
                        alt={project.name}
                        loading="lazy"
                        className="w-full h-full object-cover object-top contrast-[1.03] group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0f16]/80 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />
                    </div>
                  </div>
                </div>

              </div>
            )
          })}
        </div>

        {/* =========================================================================
            OUTROS SISTEMAS CORPORATIVOS EM PRODUÇÃO: ZERO PRINTS!
            CARDS DE ESPECIFICAÇÃO TÉCNICA E ARQUITETURA
            ========================================================================= */}
        {secondaryProjects.length > 0 && (
          <div className="pt-16 border-t border-white/[0.08]">
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#10b981] uppercase tracking-wider font-semibold mb-2">
                <FiGrid className="text-xs" />
                {labels.otherKicker}
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-white tracking-tight">
                {labels.otherTitle}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl mt-1.5 font-body">
                {labels.otherDescription}
              </p>
            </div>

            {/* Grid 2 Colunas SEM PRINTS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {secondaryProjects.map((project) => (
                <div
                  key={project.id}
                  className="p-6 rounded-2xl bg-[#0c0f16] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between group shadow-xl"
                >
                  <div>
                    {/* Header do Módulo */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className="text-[10px] font-mono text-[#38bdf8] uppercase tracking-wider font-semibold">
                        {project.category}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-500">
                        {project.domain}
                      </span>
                    </div>

                    {/* Nome do Módulo */}
                    <h4 className="text-lg font-heading font-extrabold text-white group-hover:text-[#38bdf8] transition-colors leading-tight mb-2">
                      {project.name}
                    </h4>

                    {/* Descrição Funcional */}
                    <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                      {project.shortDescription}
                    </p>

                    {/* Métricas Corporativas */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.metrics.map((m, mIdx) => (
                          <span
                            key={mIdx}
                            className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-zinc-300"
                          >
                            <span className="text-zinc-400">{m.label}:</span> <strong className="text-white">{m.value}</strong>
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Stack Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.stack.slice(0, 5).map((stk, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded-md bg-white/[0.03] text-[10px] font-mono text-zinc-400 border border-white/[0.06]"
                        >
                          {stk}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Ações / Status */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-xs font-mono">
                    <span className="text-zinc-500 text-[11px] flex items-center gap-1.5">
                      <FiLock className="text-amber-400/70 text-xs" />
                      <span>{labels.internalBadge}</span>
                    </span>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5"
                    >
                      <FiCpu className="text-xs" />
                      <span>{labels.viewArch}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Modal Técnico com Arquitetura Completa */}
      <GitHubProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}

export default GitHubProjectsSection
