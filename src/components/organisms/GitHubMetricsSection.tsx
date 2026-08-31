import React from "react"
import { motion } from "framer-motion"
import { FiTrendingUp, FiLayers, FiCpu, FiZap, FiLayout } from "react-icons/fi"
import { useLanguage } from "../../i18n/LanguageContext"

export const GitHubMetricsSection: React.FC = () => {
  const { language } = useLanguage()
  const metricsPT = [
    {
      label: "Componentes reutilizáveis",
      value: "500+",
      sub: "Design System autoral",
      color: "text-[#58a6ff]",
      bg: "bg-[#1f6feb]/10",
      border: "border-[#1f6feb]/30",
      icon: FiLayers,
    },
    {
      label: "Redução no tempo de dev",
      value: "-70%",
      sub: "Produtividade de entrega",
      color: "text-[#3fb950]",
      bg: "bg-[#238636]/10",
      border: "border-[#238636]/30",
      icon: FiTrendingUp,
    },
    {
      label: "Páginas ERP integradas",
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
      sub: "ReoliOS CLI e automações",
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
  const metricsEN = [
    { label: "Reusable components", value: "500+", sub: "Shared Design System", color: "text-[#58a6ff]", bg: "bg-[#1f6feb]/10", border: "border-[#1f6feb]/30", icon: FiLayers },
    { label: "Development time reduction", value: "-70%", sub: "Delivery productivity", color: "text-[#3fb950]", bg: "bg-[#238636]/10", border: "border-[#238636]/30", icon: FiTrendingUp },
    { label: "Integrated ERP pages", value: "50+", sub: "Enterprise web portals", color: "text-[#d29922]", bg: "bg-[#d29922]/10", border: "border-[#d29922]/30", icon: FiLayout },
    { label: "Claude Code skills", value: "43", sub: "ReoliOS CLI & automation", color: "text-[#bc8cff]", bg: "bg-[#bc8cff]/10", border: "border-[#bc8cff]/30", icon: FiCpu },
    { label: "Lighthouse score", value: "100", sub: "SEO, UX & Performance", color: "text-[#3fb950]", bg: "bg-[#238636]/10", border: "border-[#238636]/30", icon: FiZap },
  ]
  const metrics = language === "pt" ? metricsPT : metricsEN

  return (
    <section className="py-8 sm:py-10 bg-[#0d1117] border-b border-[#30363d]">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-8 lg:px-12">
        
        {/* Compact Title */}
        <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
          <FiTrendingUp className="text-[#3fb950] text-lg sm:text-xl shrink-0" />
          <h2 className="text-sm sm:text-base font-bold text-[#f0f6fc] tracking-tight">
            {language === "pt" ? "Métricas de engenharia" : "Engineering metrics"}
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
