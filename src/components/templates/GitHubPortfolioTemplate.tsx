import React from "react"
import Navbar from "../organisms/Navbar"
import GitHubProfileHeader from "../organisms/GitHubProfileHeader"
import GitHubProjectsSection from "../organisms/GitHubProjectsSection"
import GitHubExperienceSection from "../organisms/GitHubExperienceSection"
import SkillsSection from "../organisms/SkillsSection"
import GitHubFooter from "../organisms/GitHubFooter"
import FloatingSectionNav from "../molecules/FloatingSectionNav"

export const GitHubPortfolioTemplate: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#09090b] text-[#ffffff] font-sans antialiased selection:bg-white selection:text-black overflow-x-clip relative">
      
      {/* Floating Side Index (Desktop) */}
      <FloatingSectionNav />

      {/* Floating Compact Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="w-full overflow-x-clip relative bg-[#09090b]">
        
        {/* Section 1: Hero Profile */}
        <div id="about" className="relative z-10 scroll-mt-20">
          <GitHubProfileHeader />
        </div>

        {/* Section 2: Production Flagships & Projects */}
        <div id="projects" className="relative z-20 scroll-mt-20">
          <GitHubProjectsSection />
        </div>

        {/* Section 3: Career & Experience */}
        <div id="experience" className="relative z-20 scroll-mt-20">
          <GitHubExperienceSection />
        </div>

        {/* Section 4: Architecture, Cloud & Tech Stack */}
        <div id="skills" className="relative z-20 scroll-mt-20">
          <SkillsSection />
        </div>

        {/* Footer / Contact */}
        <GitHubFooter />

      </main>

    </div>
  )
}

export default GitHubPortfolioTemplate
