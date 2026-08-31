import React from "react"
import GitHubProfileHeader from "../organisms/GitHubProfileHeader"
import GitHubArticlesSection from "../organisms/GitHubArticlesSection"
import GitHubProjectsSection from "../organisms/GitHubProjectsSection"
import GitHubMetricsSection from "../organisms/GitHubMetricsSection"
import GitHubExperienceSection from "../organisms/GitHubExperienceSection"
import GitHubFooter from "../organisms/GitHubFooter"
import { FiUser, FiBookOpen, FiBookmark, FiTrendingUp, FiBriefcase, FiGlobe } from "react-icons/fi"
import { useLanguage } from "../../i18n/useLanguage"

export const GitHubPortfolioTemplate: React.FC = () => {
  const { language, toggleLanguage } = useLanguage()
  const labels = language === "pt"
    ? { about: "Sobre", articles: "Artigos", projects: "Projetos", metrics: "Métricas", experience: "Experiência", switchLanguage: "Mudar para inglês", primaryNavigation: "Navegação principal" }
    : { about: "About", articles: "Articles", projects: "Projects", metrics: "Metrics", experience: "Experience", switchLanguage: "Switch to Portuguese", primaryNavigation: "Primary navigation" }

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#f0f6fc] font-sans antialiased selection:bg-[#1f6feb] selection:text-white overflow-x-hidden">
      
      {/* Top Navbar - 100% Responsive */}
      <nav aria-label={labels.primaryNavigation} className="bg-[#010409]/95 border-b border-[#30363d] px-3 sm:px-8 lg:px-12 sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-7xl min-h-[60px] mx-auto flex items-center justify-between gap-1 sm:gap-2">
          
          {/* Logo / Username */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-sm sm:text-base font-bold text-[#f0f6fc] font-mono tracking-tight">
              <span className="sm:hidden">PR</span>
              <span className="hidden sm:inline">PedroReoli <span className="text-[#58a6ff] font-medium">/ portfolio</span></span>
            </span>
          </div>

          {/* Navigation Links (Scrollable on small mobile) */}
          <div className="flex items-center gap-0.5 sm:gap-2 ml-auto text-xs sm:text-sm font-mono text-[#8b949e]">
            <a
              href="#about"
              className="flex h-11 w-11 sm:w-auto items-center justify-center gap-1.5 hover:text-[#58a6ff] transition-colors sm:px-2.5 rounded-full hover:bg-[#161b22] shrink-0 active:scale-95"
            >
              <FiUser aria-hidden="true" className="text-base" />
              <span className="sr-only sm:not-sr-only">{labels.about}</span>
            </a>
            <a
              href="#articles"
              className="flex h-11 w-11 sm:w-auto items-center justify-center gap-1.5 hover:text-[#58a6ff] transition-colors sm:px-2.5 rounded-full hover:bg-[#161b22] shrink-0 active:scale-95"
            >
              <FiBookOpen aria-hidden="true" className="text-base" />
              <span className="sr-only sm:not-sr-only">{labels.articles}</span>
            </a>
            <a
              href="#projects"
              className="flex h-11 w-11 sm:w-auto items-center justify-center gap-1.5 hover:text-[#58a6ff] transition-colors sm:px-2.5 rounded-full hover:bg-[#161b22] shrink-0 active:scale-95"
            >
              <FiBookmark aria-hidden="true" className="text-base" />
              <span className="sr-only sm:not-sr-only">{labels.projects}</span>
            </a>
            <a
              href="#metrics"
              className="flex h-11 w-11 sm:w-auto items-center justify-center gap-1.5 hover:text-[#58a6ff] transition-colors sm:px-2.5 rounded-full hover:bg-[#161b22] shrink-0 active:scale-95"
            >
              <FiTrendingUp aria-hidden="true" className="text-base" />
              <span className="sr-only sm:not-sr-only">{labels.metrics}</span>
            </a>
            <a
              href="#experience"
              className="flex h-11 w-11 sm:w-auto items-center justify-center gap-1.5 hover:text-[#58a6ff] transition-colors sm:px-2.5 rounded-full hover:bg-[#161b22] shrink-0 active:scale-95"
            >
              <FiBriefcase aria-hidden="true" className="text-base" />
              <span className="sr-only sm:not-sr-only">{labels.experience}</span>
            </a>
          </div>

          <button
            type="button"
            onClick={toggleLanguage}
            className="group flex h-11 items-center gap-1 rounded-full border border-[#30363d] bg-[#161b22] p-1 pr-1.5 font-mono text-[11px] font-semibold text-[#c9d1d9] shadow-sm transition-colors hover:border-[#58a6ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58a6ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#010409] shrink-0"
            aria-label={labels.switchLanguage}
            title={labels.switchLanguage}
          >
            <FiGlobe className="ml-1 text-sm text-[#58a6ff]" aria-hidden="true" />
            <span className={`rounded-full px-2 py-1 transition-colors ${language === "pt" ? "bg-[#1f6feb] text-white" : "text-[#8b949e] group-hover:text-[#c9d1d9]"}`}>PT</span>
            <span className={`rounded-full px-2 py-1 transition-colors ${language === "en" ? "bg-[#1f6feb] text-white" : "text-[#8b949e] group-hover:text-[#c9d1d9]"}`}>EN</span>
          </button>
        </div>
      </nav>

      {/* Main Content Sections */}
      <main className="w-full overflow-x-hidden">
        <div id="about" className="scroll-mt-20">
          <GitHubProfileHeader />
        </div>

        <div id="articles" className="scroll-mt-20">
          <GitHubArticlesSection />
        </div>

        <div id="projects" className="scroll-mt-20">
          <GitHubProjectsSection />
        </div>

        <div id="metrics" className="scroll-mt-20">
          <GitHubMetricsSection />
        </div>

        <div id="experience" className="scroll-mt-20">
          <GitHubExperienceSection />
        </div>
      </main>

      {/* Minimal Footer */}
      <GitHubFooter />

    </div>
  )
}

export default GitHubPortfolioTemplate
