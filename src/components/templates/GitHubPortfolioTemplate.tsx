import React from "react"
import GitHubProfileHeader from "../organisms/GitHubProfileHeader"
import GitHubArticlesSection from "../organisms/GitHubArticlesSection"
import GitHubProjectsSection from "../organisms/GitHubProjectsSection"
import GitHubMetricsSection from "../organisms/GitHubMetricsSection"
import GitHubExperienceSection from "../organisms/GitHubExperienceSection"
import GitHubFooter from "../organisms/GitHubFooter"
import { FiUser, FiBookOpen, FiBookmark, FiTrendingUp, FiBriefcase } from "react-icons/fi"

export const GitHubPortfolioTemplate: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#f0f6fc] font-sans antialiased selection:bg-[#1f6feb] selection:text-white">
      
      {/* Top Navbar */}
      <nav className="bg-[#010409] border-b border-[#30363d] py-3.5 px-4 sm:px-8 lg:px-12 sticky top-0 z-40 backdrop-blur-md bg-[#010409]/90">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-base font-bold text-[#f0f6fc] font-mono tracking-tight">
              PedroReoli <span className="text-[#58a6ff] font-medium">/ portfolio</span>
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 text-sm font-mono text-[#8b949e]">
            <a
              href="#about"
              className="flex items-center gap-2 hover:text-[#58a6ff] transition-colors py-1 px-2.5 rounded-full hover:bg-[#161b22]"
            >
              <FiUser className="text-base" />
              <span className="hidden sm:inline">Sobre</span>
            </a>
            <a
              href="#articles"
              className="flex items-center gap-2 hover:text-[#58a6ff] transition-colors py-1 px-2.5 rounded-full hover:bg-[#161b22]"
            >
              <FiBookOpen className="text-base" />
              <span className="hidden sm:inline">Artigos</span>
            </a>
            <a
              href="#projects"
              className="flex items-center gap-2 hover:text-[#58a6ff] transition-colors py-1 px-2.5 rounded-full hover:bg-[#161b22]"
            >
              <FiBookmark className="text-base" />
              <span className="hidden sm:inline">Projetos</span>
            </a>
            <a
              href="#metrics"
              className="flex items-center gap-2 hover:text-[#58a6ff] transition-colors py-1 px-2.5 rounded-full hover:bg-[#161b22]"
            >
              <FiTrendingUp className="text-base" />
              <span className="hidden sm:inline">Métricas</span>
            </a>
            <a
              href="#experience"
              className="flex items-center gap-2 hover:text-[#58a6ff] transition-colors py-1 px-2.5 rounded-full hover:bg-[#161b22]"
            >
              <FiBriefcase className="text-base" />
              <span className="hidden sm:inline">Experiência</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content Sections */}
      <main>
        <div id="about">
          <GitHubProfileHeader />
        </div>

        <div id="articles">
          <GitHubArticlesSection />
        </div>

        <div id="projects">
          <GitHubProjectsSection />
        </div>

        <div id="metrics">
          <GitHubMetricsSection />
        </div>

        <div id="experience">
          <GitHubExperienceSection />
        </div>
      </main>

      {/* Minimal Footer */}
      <GitHubFooter />

    </div>
  )
}

export default GitHubPortfolioTemplate
