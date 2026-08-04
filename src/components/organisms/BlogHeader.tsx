import { FiArrowLeft, FiBookOpen } from "react-icons/fi"

interface BlogHeaderProps {
  lang: "pt" | "en"
  toggleLang: () => void
  onBackToPortfolio?: () => void
}

const BlogHeader = ({ lang, toggleLang, onBackToPortfolio }: BlogHeaderProps) => {
  const handleBack = () => {
    if (onBackToPortfolio) {
      onBackToPortfolio()
    } else {
      window.location.href = "/"
    }
  }

  return (
    <header className="fixed top-4 inset-x-0 mx-auto z-50 w-[95%] max-w-5xl">
      <div className="rounded-full bg-zinc-950/90 backdrop-blur-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)] px-4 md:px-6 py-2.5 flex items-center justify-between gap-3">
        {/* Left: Brand Logo & Title */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-xs font-black text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.2)]">
            <FiBookOpen className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black tracking-tight text-white leading-none">
              Pedro Lucas
            </span>
            <span className="text-[10px] font-extrabold text-emerald-400 uppercase tracking-wider mt-0.5">
              Blog & Artigos
            </span>
          </div>
        </div>

        {/* Center: Back to Portfolio Button */}
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-white/15 hover:border-emerald-500/50 hover:bg-zinc-800 text-xs font-bold text-zinc-200 hover:text-emerald-400 transition-colors duration-150 shadow-sm shrink-0"
        >
          <FiArrowLeft className="w-3.5 h-3.5 text-emerald-400" />
          <span>{lang === "pt" ? "Voltar ao Portfólio" : "Back to Portfolio"}</span>
        </button>

        {/* Right: Language Switcher Button */}
        <button
          onClick={toggleLang}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/15 text-xs font-black text-zinc-200 hover:text-white hover:border-emerald-500/50 transition-colors duration-150 shadow-md shrink-0"
          title={lang === "pt" ? "Switch to English" : "Mudar para Português"}
        >
          <span className="text-sm">{lang === "pt" ? "🇧🇷" : "🇺🇸"}</span>
          <span className="uppercase tracking-wider font-extrabold">
            {lang === "pt" ? "PT" : "EN"}
          </span>
        </button>
      </div>
    </header>
  )
}

export default BlogHeader
