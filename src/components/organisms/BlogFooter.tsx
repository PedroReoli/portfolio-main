import { FaLinkedin, FaGithub } from "react-icons/fa"
import { FiArrowUpRight, FiBookOpen } from "react-icons/fi"

interface BlogFooterProps {
  lang: "pt" | "en"
  onBackToPortfolio?: () => void
}

const BlogFooter = ({ lang, onBackToPortfolio }: BlogFooterProps) => {
  const handleBack = () => {
    if (onBackToPortfolio) {
      onBackToPortfolio()
    } else {
      window.location.href = "/"
    }
  }

  return (
    <footer className="py-12 px-4 md:px-8 max-w-6xl mx-auto border-t border-zinc-800/80 mt-16">
      {/* 3-Column Clean Blog Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {/* Column 1: Blog Brand & Description */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-xs font-black text-emerald-400">
              <FiBookOpen className="w-3.5 h-3.5" />
            </div>
            <span className="text-sm font-black text-white">
              Pedro Lucas Reis <span className="text-emerald-400">• Blog</span>
            </span>
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed">
            {lang === "pt"
              ? "Artigos técnicos, arquitetura frontend, inteligência artificial aplicada, performance web e padrões de código limpo."
              : "Technical articles, frontend architecture, applied AI, web performance, and clean code patterns."}
          </p>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="space-y-2.5">
          <h4 className="text-xs font-black uppercase tracking-wider text-emerald-400">
            {lang === "pt" ? "Navegação" : "Navigation"}
          </h4>
          <div className="flex flex-col gap-2 text-xs font-bold">
            <button
              onClick={handleBack}
              className="text-left text-zinc-300 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <span>{lang === "pt" ? "← Voltar ao Portfólio Principal" : "← Back to Main Portfolio"}</span>
            </button>
            <a
              href="#search"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-zinc-300 hover:text-emerald-400 transition-colors"
            >
              {lang === "pt" ? "Pesquisar Artigos" : "Search Articles"}
            </a>
          </div>
        </div>

        {/* Column 3: Social & Author */}
        <div className="space-y-2.5">
          <h4 className="text-xs font-black uppercase tracking-wider text-emerald-400">
            {lang === "pt" ? "Redes do Autor" : "Author Links"}
          </h4>
          <div className="flex flex-col gap-2 text-xs font-bold">
            <a
              href="https://www.linkedin.com/in/pedro-lucas-reis-a93945171"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-300 hover:text-emerald-400 transition-colors"
            >
              <FaLinkedin className="w-4 h-4 text-emerald-400" />
              <span>LinkedIn</span>
              <FiArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>
            <a
              href="https://github.com/PedroReoli"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-300 hover:text-emerald-400 transition-colors"
            >
              <FaGithub className="w-4 h-4 text-emerald-400" />
              <span>GitHub</span>
              <FiArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Notice */}
      <div className="text-center text-xs text-zinc-500 font-semibold flex items-center justify-center gap-1.5 pt-6 border-t border-white/5">
        <span>© {new Date().getFullYear()} Pedro Lucas Reis. {lang === "pt" ? "Todos os direitos reservados." : "All rights reserved."}</span>
      </div>
    </footer>
  )
}

export default BlogFooter
