import React from "react"
import { motion } from "framer-motion"
import * as portfolioPT from "../../data/portfolio"
import * as portfolioEN from "../../data/portfolio.en"
import { 
  FiBriefcase, 
  FiCalendar, 
  FiMapPin, 
  FiCheckCircle, 
} from "react-icons/fi"
import { useLanguage } from "../../i18n/useLanguage"

export const GitHubExperienceSection: React.FC = () => {
  const { language } = useLanguage()
  const data = language === "pt" ? portfolioPT : portfolioEN
  const { experiences } = data

  const labels = language === "pt"
    ? {
        kicker: "Trajetória Profissional",
        title: "Experiência de Engenharia",
        description: "Mais de 4 anos atuando na concepção de ecossistemas corporativos ERP, arquitetura frontend e plataformas SaaS em produção.",
      }
    : {
        kicker: "Career Timeline",
        title: "Engineering Experience",
        description: "Over 4 years engineering enterprise ERP ecosystems, frontend architecture, and SaaS platforms deployed to production.",
      }

  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#07080b] text-[#ffffff] border-b border-white/[0.08] relative overflow-hidden">
      {/* Luz ambiente suave */}
      <div 
        className="absolute top-1/3 left-0 w-[500px] h-[400px] bg-[#10b981]/[0.025] rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-10 right-0 w-[500px] h-[400px] bg-[#0ea5e9]/[0.025] rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10 w-full">
        
        {/* Cabeçalho da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="mb-14 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#10b981] uppercase tracking-wider font-semibold mb-2">
            <FiBriefcase className="text-sm" />
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
            TIMELINE VERTICAL CONTÍNUA: CARDS LEVEMENTE MAIORES, SURGINDO AO DESCER
            (ZERO SETAS, ESTRUTURA LINEAR LIMPA E EXECUTIVA)
            ========================================================================= */}
        <div className="relative pl-7 sm:pl-10 before:absolute before:left-2 sm:before:left-3 before:top-4 before:bottom-4 before:w-[2px] before:bg-gradient-to-b before:from-[#10b981] via-[#0ea5e9]/40 before:to-white/10 space-y-10 sm:space-y-12">
          
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="relative group"
            >
              {/* Nó luminoso na linha do tempo */}
              <div className="absolute -left-[32px] sm:-left-[43px] top-6 w-3.5 h-3.5 rounded-full bg-[#10b981] ring-4 ring-[#07080b] shadow-[0_0_12px_rgba(16,185,129,0.9)] transition-transform group-hover:scale-125" />

              {/* Card Levemente Maior com Espaçamento Amplo */}
              <div className="p-7 sm:p-9 rounded-2xl sm:rounded-3xl bg-[#0c0f16] border border-white/[0.09] hover:border-white/20 transition-all duration-300 shadow-2xl">
                
                {/* Cabeçalho do Card: Empresa, Cargo, Período e Localização */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white tracking-tight">
                      {exp.company}
                    </h3>
                    <p className="text-sm sm:text-base font-heading font-semibold text-[#10b981] mt-0.5">
                      {exp.role}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-zinc-300">
                      <FiCalendar className="text-[#10b981] text-xs" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-zinc-400">
                      <FiMapPin className="text-zinc-500 text-xs" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Contexto do Papel */}
                <p className="text-sm text-zinc-300 leading-relaxed font-sans mb-6">
                  {exp.context}
                </p>

                {/* Lista de Conquistas / Entregas Técnicas */}
                <div className="space-y-3 mb-7">
                  {exp.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                      <FiCheckCircle className="text-[#10b981] w-4 h-4 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Tecnologias Utilizadas na Posição */}
                <div className="pt-5 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wide mr-1">
                    Stack:
                  </span>
                  {exp.stack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default GitHubExperienceSection
