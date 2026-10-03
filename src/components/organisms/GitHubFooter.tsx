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
    <footer id="contact" className="bg-[#09090b] border-t border-white/[0.08] py-10 sm:py-12 text-xs sm:text-sm text-[#a1a1aa] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Left: Branding & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-4">
          <span className="font-heading font-extrabold text-white text-base tracking-tight">
            PedroReoli <span className="text-[#71717a] font-mono text-xs font-normal">/ dev</span>
          </span>
          <span className="hidden sm:inline text-white/20">|</span>
          <span className="text-xs font-mono text-[#71717a]">
            © {new Date().getFullYear()} {profile.name}. {language === "pt" ? "Todos os direitos reservados." : "All rights reserved."}
          </span>
        </div>

        {/* Right: Social Action Links + Back to Top Button */}
        <div className="flex items-center gap-2.5">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-xl border border-white/10 bg-[#141419] hover:border-white/30 hover:bg-white/[0.06] hover:text-white flex items-center justify-center text-[#a1a1aa] transition-all"
            title="GitHub"
            aria-label="GitHub"
          >
            <FiGithub className="text-sm" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-xl border border-white/10 bg-[#141419] hover:border-white/30 hover:bg-white/[0.06] hover:text-white flex items-center justify-center text-[#a1a1aa] transition-all"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="text-sm" />
          </a>
          <a
            href={profile.phoneHref}
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-xl border border-white/10 bg-[#141419] hover:border-[#25d366]/40 hover:bg-white/[0.06] hover:text-[#25d366] flex items-center justify-center text-[#a1a1aa] transition-all"
            title="WhatsApp"
            aria-label="WhatsApp"
          >
            <FiPhone className="text-sm" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="w-9 h-9 rounded-xl border border-white/10 bg-[#141419] hover:border-white/30 hover:bg-white/[0.06] hover:text-white flex items-center justify-center text-[#a1a1aa] transition-all"
            title="E-mail"
            aria-label="E-mail"
          >
            <FiMail className="text-sm" />
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            className="w-9 h-9 rounded-xl border border-white/10 bg-[#141419] hover:border-white/40 hover:bg-white hover:text-[#09090b] flex items-center justify-center text-[#a1a1aa] transition-all ml-1.5 shadow-sm"
            title={language === "pt" ? "Voltar ao topo" : "Back to top"}
            aria-label={language === "pt" ? "Voltar ao topo" : "Back to top"}
          >
            <FiArrowUp className="text-sm" />
          </button>
        </div>

      </div>
    </footer>
  )
}

export default GitHubFooter
