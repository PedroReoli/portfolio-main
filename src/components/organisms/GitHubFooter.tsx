import React from "react"
import * as portfolioPT from "../../data/portfolio"
import * as portfolioEN from "../../data/portfolio.en"
import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi"
import { useLanguage } from "../../i18n/useLanguage"

export const GitHubFooter: React.FC = () => {
  const { language } = useLanguage()
  const profile = language === "pt" ? portfolioPT.profile : portfolioEN.profile

  return (
    <footer className="bg-[#0d1117] border-t border-[#30363d] py-6 sm:py-8 text-xs sm:text-sm text-[#8b949e]">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        
        {/* Left: Copyright */}
        <div className="flex items-center gap-2">
          <span>© {new Date().getFullYear()} {profile.name}. {language === "pt" ? "Todos os direitos reservados." : "All rights reserved."}</span>
        </div>

        {/* Right: Quick Links */}
        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full hover:bg-[#161b22] hover:text-[#58a6ff] transition-colors"
            title="GitHub"
            aria-label="GitHub"
          >
            <FiGithub className="text-base sm:text-lg" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full hover:bg-[#161b22] hover:text-[#58a6ff] transition-colors"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="text-base sm:text-lg" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="flex h-11 w-11 items-center justify-center rounded-full hover:bg-[#161b22] hover:text-[#58a6ff] transition-colors"
            title="Email"
            aria-label="Email"
          >
            <FiMail className="text-base sm:text-lg" />
          </a>
          <a
            href={profile.phoneHref}
            target="_blank"
            rel="noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full hover:bg-[#161b22] hover:text-[#3fb950] transition-colors"
            title="WhatsApp"
            aria-label="WhatsApp"
          >
            <FiPhone className="text-base sm:text-lg" />
          </a>
        </div>

      </div>
    </footer>
  )
}

export default GitHubFooter
