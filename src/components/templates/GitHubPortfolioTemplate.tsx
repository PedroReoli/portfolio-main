import React from "react"
import GitHubProfileHeader from "../organisms/GitHubProfileHeader"
import GitHubArticlesSection from "../organisms/GitHubArticlesSection"
import GitHubProjectsSection from "../organisms/GitHubProjectsSection"
import GitHubMetricsSection from "../organisms/GitHubMetricsSection"
import GitHubExperienceSection from "../organisms/GitHubExperienceSection"
import GitHubFooter from "../organisms/GitHubFooter"
import { FiUser, FiBookOpen, FiBookmark, FiTrendingUp, FiBriefcase, FiGlobe } from "react-icons/fi"
import { useLanguage } from "../../i18n/LanguageContext"

export const GitHubPortfolioTemplate: React.FC = () => {
  const { language, toggleLanguage } = useLanguage()
  const labels = language === "pt"
    ? { about: "Sobre", articles: "Artigos", projects: "Projetos", metrics: "Métricas", experience: "Experiência", switchLanguage: "Mudar para inglês" }
    : { about: "About", articles: "Articles", projects: "Projects", metrics: "Metrics", experience: "Experience", switchLanguage: "Switch to Portuguese" }

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#f0f6fc] font-sans antialiased selection:bg-[#1f6feb] selection:text-white overflow-x-hidden">
      
      {/* Top Navbar - 100% Responsive */}
      <nav className="bg-[#010409]/95 border-b border-[#30363d] py-3 px-3 sm:px-8 lg:px-12 sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          
          {/* Logo / Username */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-sm sm:text-base font-bold text-[#f0f6fc] font-mono tracking-tight">
              PedroReoli <span className="text-[#58a6ff] font-medium hidden xs:inline">/ portfolio</span>
            </span>
          </div>

          {/* Navigation Links (Scrollable on small mobile) */}
          <div className="flex items-center gap-1 sm:gap-2 ml-auto overflow-x-auto scrollbar-none py-1 text-xs sm:text-sm font-mono text-[#8b949e]">
            <a
              href="#about"
              className="flex items-center gap-1.5 hover:text-[#58a6ff] transition-colors py-1.5 px-2.5 rounded-full hover:bg-[#161b22] shrink-0 active:scale-95"
            >
              <FiUser className="text-sm sm:text-base" />
              <span className="hidden sm:inline">{labels.about}</span>
            </a>
            <a
              href="#articles"
              className="flex items-center gap-1.5 hover:text-[#58a6ff] transition-colors py-1.5 px-2.5 rounded-full hover:bg-[#161b22] shrink-0 active:scale-95"
            >
              <FiBookOpen className="text-sm sm:text-base" />
              <span className="hidden sm:inline">{labels.articles}</span>
            </a>
            <a
              href="#projects"
              className="flex items-center gap-1.5 hover:text-[#58a6ff] transition-colors py-1.5 px-2.5 rounded-full hover:bg-[#161b22] shrink-0 active:scale-95"
            >
              <FiBookmark className="text-sm sm:text-base" />
              <span className="hidden sm:inline">{labels.projects}</span>
            </a>
            <a
              href="#metrics"
              className="flex items-center gap-1.5 hover:text-[#58a6ff] transition-colors py-1.5 px-2.5 rounded-full hover:bg-[#161b22] shrink-0 active:scale-95"
            >
              <FiTrendingUp className="text-sm sm:text-base" />
              <span className="hidden sm:inline">{labels.metrics}</span>
            </a>
            <a
              href="#experience"
              className="flex items-center gap-1.5 hover:text-[#58a6ff] transition-colors py-1.5 px-2.5 rounded-full hover:bg-[#161b22] shrink-0 active:scale-95"
            >
              <FiBriefcase className="text-sm sm:text-base" />
              <span className="hidden sm:inline">{labels.experience}</span>
            </a>
          </div>

          <button
            type="button"
            onClick={toggleLanguage}
            className="group flex h-8 items-center gap-1.5 rounded-md border border-[#30363d] bg-[#161b22] px-2 font-mono text-[11px] font-semibold text-[#c9d1d9] transition-colors hover:border-[#58a6ff] hover:text-[#f0f6fc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58a6ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#010409] shrink-0"
            aria-label={labels.switchLanguage}
            title={labels.switchLanguage}
          >
            <FiGlobe className="text-sm text-[#58a6ff]" aria-hidden="true" />
            <span className={language === "pt" ? "text-[#f0f6fc]" : "text-[#8b949e]"}>PT</span>
            <span className="text-[#484f58]">/</span>
            <span className={language === "en" ? "text-[#f0f6fc]" : "text-[#8b949e]"}>EN</span>
          </button>
        </div>
      </nav>

      {/* Main Content Sections */}
      <main className="w-full overflow-x-hidden">
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
