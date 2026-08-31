import React, { useState } from "react"
import { motion } from "framer-motion"
import * as portfolioPT from "../../data/portfolio"
import * as portfolioEN from "../../data/portfolio.en"
import { FiBookOpen, FiX, FiArrowRight, FiClock, FiCalendar } from "react-icons/fi"
import { useLanguage } from "../../i18n/useLanguage"
import type { PortfolioArticle } from "../../types/portfolio"
import { useModalAccessibility } from "../../hooks/useModalAccessibility"

export const GitHubArticlesSection: React.FC = () => {
  const { language } = useLanguage()
  const blogPosts: readonly PortfolioArticle[] = language === "pt" ? portfolioPT.blogPosts : portfolioEN.blogPosts
  const [selectedArticle, setSelectedArticle] = useState<PortfolioArticle | null>(null)
  const closeArticle = () => setSelectedArticle(null)
  const { dialogRef, closeButtonRef } = useModalAccessibility(Boolean(selectedArticle), closeArticle)
  const labels = language === "pt"
    ? {
        title: "Artigos & publicações técnicas",
        publications: "publicações",
        topics: "Engenharia de Software, IA, Arquitetura & Design Systems",
        read: "Ler artigo",
        covered: "Tópicos abordados:",
        topicItems: ["Padrões de engenharia e boas práticas de produção", "Redução de débito técnico e melhoria de performance", "Integração contínua e utilitários reutilizáveis"],
        close: "Fechar",
      }
    : {
        title: "Articles & technical publications",
        publications: "publications",
        topics: "Software Engineering, AI, Architecture & Design Systems",
        read: "Read article",
        covered: "Topics covered:",
        topicItems: ["Engineering patterns and production practices", "Technical debt reduction and performance improvements", "Continuous integration and reusable utilities"],
        close: "Close",
      }

  return (
    <section className="py-8 sm:py-12 bg-[#0d1117] border-b border-[#30363d]">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8 border-b border-[#30363d] pb-4">
          <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
            <FiBookOpen className="text-[#bc8cff] text-xl sm:text-2xl" />
            <h2 className="text-lg sm:text-xl font-bold text-[#f0f6fc] tracking-tight">
              {labels.title}
            </h2>
            <span className="text-xs font-mono px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-[#30363d] bg-[#21262d] text-[#8b949e] font-semibold">
              {blogPosts.length} {labels.publications}
            </span>
          </div>

          <p className="text-xs text-[#8b949e] font-mono">
            {labels.topics}
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {blogPosts.map((post, idx) => (
            <motion.button
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => setSelectedArticle(post)}
              aria-haspopup="dialog"
              className="text-left gh-card p-5 sm:p-6 flex flex-col justify-between h-full group hover:border-[#bc8cff] transition-all duration-300 rounded-2xl active:scale-[0.99]"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#8b949e] mb-3 gap-2">
                  <span className="text-[#bc8cff] font-mono font-medium px-2.5 py-0.5 rounded-full bg-[#bc8cff]/10 border border-[#bc8cff]/20 truncate">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 font-mono shrink-0">
                    <FiClock className="text-xs" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-[#f0f6fc] group-hover:text-[#bc8cff] transition-colors leading-snug mb-2.5">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#8b949e] line-clamp-3 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-3.5 border-t border-[#30363d] flex items-center justify-between text-xs font-mono text-[#8b949e]">
                <span className="flex items-center gap-1.5">
                  <FiCalendar />
                  {post.date}
                </span>
                <span className="flex items-center gap-1 text-[#bc8cff] font-semibold group-hover:translate-x-1 transition-transform">
                  {labels.read} <FiArrowRight />
                </span>
              </div>
            </motion.button>
          ))}
        </div>

      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 xs:p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onMouseDown={(event) => event.target === event.currentTarget && closeArticle()}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`article-title-${selectedArticle.id}`}
            className="gh-card max-w-xl w-full p-5 xs:p-6 sm:p-7 relative max-h-[88vh] overflow-y-auto shadow-2xl rounded-2xl border-[#30363d]"
          >
            <button
              ref={closeButtonRef}
              onClick={closeArticle}
              className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 text-[#8b949e] hover:text-[#f0f6fc] rounded-md bg-[#161b22] border border-[#30363d] hover:bg-[#21262d] transition-colors w-11 h-11 flex items-center justify-center"
              aria-label={labels.close}
            >
              <FiX className="text-lg sm:text-xl" />
            </button>

            <span className="text-xs font-mono text-[#bc8cff] block mb-2 font-medium px-3 py-1 rounded-full bg-[#bc8cff]/10 border border-[#bc8cff]/20 w-fit">
              {selectedArticle.category} • {selectedArticle.date}
            </span>

            <h3 id={`article-title-${selectedArticle.id}`} className="text-xl sm:text-2xl font-bold text-[#f0f6fc] mb-3 sm:mb-4 leading-snug mt-3 pr-8">
              {selectedArticle.title}
            </h3>

            <p className="text-xs sm:text-sm text-[#c9d1d9] leading-relaxed mb-6">
              {selectedArticle.excerpt}
            </p>

            <div className="bg-[#0d1117] p-3.5 sm:p-4 rounded-xl border border-[#30363d] text-xs text-[#8b949e] space-y-2 mb-6 font-mono">
              <p className="text-[#c9d1d9] font-semibold text-xs sm:text-sm">{labels.covered}</p>
              <ul className="list-disc list-inside space-y-1.5 text-xs text-[#c9d1d9]">
                {labels.topicItems.map((topic) => <li key={topic}>{topic}</li>)}
              </ul>
            </div>

            <div className="flex justify-end">
              <button
                onClick={closeArticle}
                className="min-h-[44px] w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-[#c9d1d9] bg-[#21262d] border border-[#30363d] rounded-md hover:bg-[#30363d] transition-colors"
              >
                {labels.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default GitHubArticlesSection
