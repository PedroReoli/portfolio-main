import React from "react"
import { motion } from "framer-motion"
import { FiTrendingUp, FiLayers, FiCpu, FiZap, FiLayout } from "react-icons/fi"

export const GitHubMetricsSection: React.FC = () => {
  const metrics = [
    {
      label: "Componentes Reutilizáveis",
      value: "500+",
      sub: "Design System autoral",
      color: "text-[#58a6ff]",
      bg: "bg-[#1f6feb]/10",
      border: "border-[#1f6feb]/30",
      icon: FiLayers,
    },
    {
      label: "Redução no Tempo de Dev",
      value: "-70%",
      sub: "Produtividade de entrega",
      color: "text-[#3fb950]",
      bg: "bg-[#238636]/10",
      border: "border-[#238636]/30",
      icon: FiTrendingUp,
    },
    {
      label: "Páginas ERP Integradas",
      value: "50+",
      sub: "Portais corporativos web",
      color: "text-[#d29922]",
      bg: "bg-[#d29922]/10",
      border: "border-[#d29922]/30",
      icon: FiLayout,
    },
    {
      label: "Skills para Claude Code",
      value: "43",
      sub: "ReoliOS CLI Automações",
      color: "text-[#bc8cff]",
      bg: "bg-[#bc8cff]/10",
      border: "border-[#bc8cff]/30",
      icon: FiCpu,
    },
    {
      label: "Pontuação Lighthouse",
      value: "100",
      sub: "SEO, UX e Performance",
      color: "text-[#3fb950]",
      bg: "bg-[#238636]/10",
      border: "border-[#238636]/30",
      icon: FiZap,
    },
  ]

  return (
    <section className="py-8 sm:py-10 bg-[#0d1117] border-b border-[#30363d]">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-8 lg:px-12">
        
        {/* Compact Title */}
        <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
          <FiTrendingUp className="text-[#3fb950] text-lg sm:text-xl shrink-0" />
          <h2 className="text-sm sm:text-base font-bold text-[#f0f6fc] tracking-tight">
            Métricas de Engenharia & Impacto de Software
          </h2>
        </div>

        {/* Compact Grid of Stat Cards */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {metrics.map((m, idx) => {
            const Icon = m.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="gh-card p-3.5 sm:p-4 flex flex-col justify-between hover:border-[#58a6ff] transition-all duration-300 rounded-2xl"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className={`p-1.5 sm:p-2 rounded-xl ${m.bg} ${m.border} border`}>
                    <Icon className={`text-sm sm:text-base ${m.color}`} />
                  </span>
                  <span className={`text-xl sm:text-2xl font-extrabold font-mono ${m.color}`}>
                    {m.value}
                  </span>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-[#f0f6fc] leading-tight mb-0.5">
                    {m.label}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] font-mono text-[#8b949e]">
                    {m.sub}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default GitHubMetricsSection
