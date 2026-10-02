import React from "react"
import * as portfolioPT from "../../data/portfolio"
import * as portfolioEN from "../../data/portfolio.en"
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiArrowUp } from "react-icons/fi"
import { useLanguage } from "../../i18n/useLanguage"

export const GitHubFooter: React.FC = () => {
  const { language } = useLanguage()
  const profile = language === "pt" ? portfolioPT.profile : portfolioEN.profile

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer id="contact" className="bg-[#05080e] border-t border-white/[0.08] py-10 sm:py-14 text-xs sm:text-sm text-[#94a3b8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Left: Branding & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <span className="font-heading font-extrabold text-white text-base tracking-tight">
            PedroReoli <span className="text-[#a1a1aa] font-mono text-xs font-normal">/ dev</span>
          </span>
          <span className="hidden sm:inline text-white/20">|</span>
          <span className="text-xs font-mono text-[#64748b]">
            © {new Date().getFullYear()} {profile.name}. {language === "pt" ? "Todos os direitos reservados." : "All rights reserved."}
          </span>
        </div>

        {/* Right: Social Action Links + Back to top */}
        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full border border-white/10 bg-[#111827] hover:border-[#2563eb] hover:text-[#38bdf8] flex items-center justify-center text-[#94a3b8] transition-all"
            title="GitHub"
            aria-label="GitHub"
          >
            <FiGithub className="text-base" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full border border-white/10 bg-[#111827] hover:border-[#2563eb] hover:text-[#38bdf8] flex items-center justify-center text-[#94a3b8] transition-all"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="text-base" />
          </a>
          <a
            href={profile.phoneHref}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full border border-white/10 bg-[#111827] hover:border-emerald-500 hover:text-emerald-400 flex items-center justify-center text-[#94a3b8] transition-all"
            title="WhatsApp"
            aria-label="WhatsApp"
          >
            <FiPhone className="text-base" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="w-10 h-10 rounded-full border border-white/10 bg-[#111827] hover:border-[#2563eb] hover:text-[#38bdf8] flex items-center justify-center text-[#94a3b8] transition-all"
            title="E-mail"
            aria-label="E-mail"
          >
            <FiMail className="text-base" />
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-white/10 bg-[#111827] hover:border-[#38bdf8] hover:text-[#38bdf8] flex items-center justify-center text-[#94a3b8] transition-all ml-2"
            title={language === "pt" ? "Voltar ao topo" : "Back to top"}
            aria-label={language === "pt" ? "Voltar ao topo" : "Back to top"}
          >
            <FiArrowUp className="text-base" />
          </button>
        </div>

      </div>
    </footer>
  )
}

export default GitHubFooter
