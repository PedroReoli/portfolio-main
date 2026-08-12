import React, { useState } from "react"
import { motion } from "framer-motion"
import { blogPosts } from "../../data/portfolio"
import { FiBookOpen, FiX, FiArrowRight, FiClock, FiCalendar } from "react-icons/fi"

export const GitHubArticlesSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<typeof blogPosts[number] | null>(null)

  return (
    <section className="py-12 bg-[#0d1117] border-b border-[#30363d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-[#30363d] pb-4">
          <div className="flex items-center gap-3">
            <FiBookOpen className="text-[#bc8cff] text-2xl" />
            <h2 className="text-xl font-bold text-[#f0f6fc] tracking-tight">
              Artigos & Publicações Técnicas
            </h2>
            <span className="text-xs font-mono px-3 py-1 rounded-full border border-[#30363d] bg-[#21262d] text-[#8b949e] font-semibold">
              {blogPosts.length} Publicações
            </span>
          </div>

          <p className="text-xs text-[#8b949e] font-mono">
            Engenharia de Software, IA, Arquitetura & Design Systems
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, idx) => (
            <motion.button
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => setSelectedArticle(post)}
              className="text-left gh-card p-6 flex flex-col justify-between h-full group hover:border-[#bc8cff] transition-all duration-300 rounded-2xl"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#8b949e] mb-3">
                  <span className="text-[#bc8cff] font-mono font-medium px-2.5 py-0.5 rounded-full bg-[#bc8cff]/10 border border-[#bc8cff]/20">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 font-mono">
                    <FiClock className="text-xs" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#f0f6fc] group-hover:text-[#bc8cff] transition-colors leading-snug mb-3">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#8b949e] line-clamp-3 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#30363d] flex items-center justify-between text-xs font-mono text-[#8b949e]">
                <span className="flex items-center gap-1.5">
                  <FiCalendar />
                  {post.date}
                </span>
                <span className="flex items-center gap-1 text-[#bc8cff] font-semibold group-hover:translate-x-1 transition-transform">
                  Ler artigo <FiArrowRight />
                </span>
              </div>
            </motion.button>
          ))}
        </div>

      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="gh-card max-w-xl w-full p-7 relative max-h-[85vh] overflow-y-auto shadow-2xl rounded-2xl border-[#30363d]">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-2 text-[#8b949e] hover:text-[#f0f6fc] rounded-full bg-[#161b22] border border-[#30363d] hover:bg-[#21262d] transition-colors"
            >
              <FiX className="text-xl" />
            </button>

            <span className="text-xs font-mono text-[#bc8cff] block mb-2 font-medium px-3 py-1 rounded-full bg-[#bc8cff]/10 border border-[#bc8cff]/20 w-fit">
              {selectedArticle.category} • {selectedArticle.date}
            </span>

            <h3 className="text-2xl font-bold text-[#f0f6fc] mb-4 leading-snug mt-3">
              {selectedArticle.title}
            </h3>

            <p className="text-sm text-[#c9d1d9] leading-relaxed mb-6">
              {selectedArticle.excerpt}
            </p>

            <div className="bg-[#0d1117] p-4 rounded-xl border border-[#30363d] text-xs text-[#8b949e] space-y-2 mb-6 font-mono">
              <p className="text-[#c9d1d9] font-semibold text-sm">Tópicos abordados:</p>
              <ul className="list-disc list-inside space-y-1.5 text-xs text-[#c9d1d9]">
                <li>Padrões de engenharia e boas práticas de produção</li>
                <li>Redução de débito técnico e melhoria de performance</li>
                <li>Integração contínua e utilitários reutilizáveis</li>
              </ul>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2.5 text-xs font-semibold text-[#c9d1d9] bg-[#21262d] border border-[#30363d] rounded-xl hover:bg-[#30363d] transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default GitHubArticlesSection
