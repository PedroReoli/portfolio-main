import React from "react"
import { motion } from "framer-motion"
import { 
  FiTrendingUp, 
  FiLayers, 
  FiCpu, 
  FiZap, 
  FiLayout, 
  FiUsers,
  FiShield,
  FiBox
} from "react-icons/fi"
import { useLanguage } from "../../i18n/useLanguage"

export const GitHubMetricsSection: React.FC = () => {
  const { language } = useLanguage()

  const labels = language === "pt"
    ? {
        kicker: "Métricas & Resultados de Engenharia",
        title: "Impacto Técnico & Resultados de Negócio",
        description: "Indicadores reais de velocidade de entrega, performance de sistemas e escalabilidade atingidos em produção.",
        roiTag: "Eficiência Comprovada",
        metrics: [
          {
            id: "components",
            value: "500+",
            label: "Componentes Reutilizáveis",
            sub: "Design System Unificado",
            desc: "Redução de até 70% no tempo de criação de novas interfaces e consistência visual absoluta.",
            icon: FiLayers,
            badge: "Frontend Architecture",
          },
          {
            id: "dev-reduction",
            value: "-70%",
            label: "Ciclo de Desenvolvimento",
            sub: "Padronização & Automação",
            desc: "Ganhos exponenciais de velocidade com arquitetura modular, hooks reutilizáveis e IA.",
            icon: FiTrendingUp,
            badge: "Velocidade de Entrega",
          },
          {
            id: "products",
            value: "10+",
            label: "Produtos em Produção",
            sub: "SaaS & Sistemas Corporativos",
            desc: "Aplicações de missão crítica utilizadas diariamente por milhares de clientes e empresas.",
            icon: FiBox,
            badge: "Escala Real",
          },
          {
            id: "erp-pages",
            value: "100+",
            label: "Módulos & Telas de ERP",
            sub: "Migração Web & Cloud",
            desc: "Modernização completa de sistemas legado para arquitetura React, Vite e APIs REST.",
            icon: FiLayout,
            badge: "Enterprise ERP",
          },
          {
            id: "token-economy",
            value: "94%",
            label: "Economia de Tokens em IA",
            sub: "Arquitetura Organon & CDP",
            desc: "Engenharia de contexto e memória destilada que minimiza consumo de API e custo operacional.",
            icon: FiCpu,
            badge: "Engenharia de IA",
          },
          {
            id: "lighthouse",
            value: "100/100",
            label: "Score Lighthouse",
            sub: "SEO, Performance & A11y",
            desc: "Carregamento sub-segundo, Core Web Vitals otimizados e acessibilidade WCAG em produção.",
            icon: FiZap,
            badge: "Alta Performance",
          },
          {
            id: "organizations",
            value: "10+",
            label: "Empresas & Clientes Atendidos",
            sub: "Consultoria & Desenvolvimento",
            desc: "Entrega de soluções corporativas sob medida para organizações de diversos portes.",
            icon: FiShield,
            badge: "B2B & Enterprise",
          },
          {
            id: "mentees",
            value: "15+",
            label: "Desenvolvedores Mentorados",
            sub: "Liderança Técnica & Formação",
            desc: "Capacitação prática em TypeScript, arquitetura limpa, testes e padrões de produção.",
            icon: FiUsers,
            badge: "Liderança Técnica",
          },
        ]
      }
    : {
        kicker: "Engineering Metrics & Proven Impact",
        title: "Technical Impact & Business Outcomes",
        description: "Real-world engineering velocity, system performance, and scale delivered across enterprise software.",
        roiTag: "Proven Efficiency",
        metrics: [
          {
            id: "components",
            value: "500+",
            label: "Reusable Components",
            sub: "Unified Design System",
            desc: "Up to 70% reduction in UI creation time and absolute visual consistency across applications.",
            icon: FiLayers,
            badge: "Frontend Architecture",
          },
          {
            id: "dev-reduction",
            value: "-70%",
            label: "Development Cycle",
            sub: "Standardization & Automation",
            desc: "Exponential velocity gains through modular architecture, reusable hooks, and AI engineering.",
            icon: FiTrendingUp,
            badge: "Engineering Velocity",
          },
          {
            id: "products",
            value: "10+",
            label: "Production Products",
            sub: "SaaS & Enterprise Systems",
            desc: "Mission-critical applications operating daily for thousands of enterprise users and businesses.",
            icon: FiBox,
            badge: "Real-world Scale",
          },
          {
            id: "erp-pages",
            value: "100+",
            label: "ERP Modules & Views",
            sub: "Web & Cloud Migration",
            desc: "End-to-end modernization of legacy desktop ERPs to modern React, Vite, and REST APIs.",
            icon: FiLayout,
            badge: "Enterprise ERP",
          },
          {
            id: "token-economy",
            value: "94%",
            label: "AI Token Efficiency",
            sub: "Organon & CDP Architecture",
            desc: "Structured context engineering and distilled memory pipelines reducing LLM costs drastically.",
            icon: FiCpu,
            badge: "AI Engineering",
          },
          {
            id: "lighthouse",
            value: "100/100",
            label: "Lighthouse Score",
            sub: "SEO, Performance & A11y",
            desc: "Sub-second load times, optimized Core Web Vitals, and WCAG accessibility standards in production.",
            icon: FiZap,
            badge: "High Performance",
          },
          {
            id: "organizations",
            value: "10+",
            label: "Companies & Clients",
            sub: "Consulting & Engineering",
            desc: "Delivering tailored enterprise software solutions for businesses of varying market scales.",
            icon: FiShield,
            badge: "B2B & Enterprise",
          },
          {
            id: "mentees",
            value: "15+",
            label: "Engineers Mentored",
            sub: "Technical Leadership",
            desc: "Hands-on mentorship in TypeScript, clean architecture, automated testing, and production workflows.",
            icon: FiUsers,
            badge: "Technical Leadership",
          },
        ]
      }

  return (
    <section className="py-14 sm:py-20 bg-[#09090b] text-[#ffffff] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#a1a1aa] uppercase tracking-wider font-semibold mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              {labels.kicker}
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
              {labels.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#a1a1aa] max-w-2xl mt-1.5 font-body">
              {labels.description}
            </p>
          </div>

          <div className="shrink-0">
            <span className="badge-highlight py-1.5 px-3.5 text-xs font-mono">
              {labels.roiTag}
            </span>
          </div>
        </div>

        {/* 8-Card Compact Monochromatic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {labels.metrics.map((m, index) => {
            const Icon = m.icon
            return (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="card-dark p-4 sm:p-5 flex flex-col justify-between group hover:border-white/20 transition-all"
              >
                <div>
                  {/* Top Row: Icon & Category Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-[#a1a1aa] bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]">
                      {m.badge}
                    </span>
                  </div>

                  {/* Big Number */}
                  <div className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight mb-1 group-hover:text-zinc-200 transition-colors">
                    {m.value}
                  </div>

                  {/* Metric Name */}
                  <h3 className="text-xs font-heading font-bold text-white mb-0.5">
                    {m.label}
                  </h3>

                  {/* Subtitle */}
                  <div className="text-[11px] font-mono text-[#a1a1aa] font-medium mb-2">
                    {m.sub}
                  </div>

                  {/* Description */}
                  <p className="text-[11px] text-[#71717a] leading-relaxed font-body">
                    {m.desc}
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
