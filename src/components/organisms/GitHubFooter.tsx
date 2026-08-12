import React from "react"
import { profile } from "../../data/portfolio"
import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi"

export const GitHubFooter: React.FC = () => {
  return (
    <footer className="bg-[#0d1117] border-t border-[#30363d] py-8 text-sm text-[#8b949e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left: Copyright */}
        <div className="flex items-center gap-2">
          <span>© {new Date().getFullYear()} {profile.name}. Todos os direitos reservados.</span>
        </div>

        {/* Right: Quick Links */}
        <div className="flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#58a6ff] transition-colors p-1"
            title="GitHub"
          >
            <FiGithub className="text-lg" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#58a6ff] transition-colors p-1"
            title="LinkedIn"
          >
            <FiLinkedin className="text-lg" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-[#58a6ff] transition-colors p-1"
            title="Email"
          >
            <FiMail className="text-lg" />
          </a>
          <a
            href={profile.phoneHref}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#3fb950] transition-colors p-1"
            title="WhatsApp"
          >
            <FiPhone className="text-lg" />
          </a>
        </div>

      </div>
    </footer>
  )
}

export default GitHubFooter
