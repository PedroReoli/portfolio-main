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
    <div className="min-h-screen bg-[#07080b] text-[#ffffff] font-sans antialiased selection:bg-white selection:text-black overflow-x-clip relative">
      
      {/* Floating Side Index (Desktop Only) */}
      <FloatingSectionNav />

      {/* Responsive Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="w-full overflow-x-clip relative bg-[#07080b]">
        
        {/* Section 1: Executive Profile Hero */}
        <div id="about" className="relative z-10 scroll-mt-24">
          <GitHubProfileHeader />
        </div>

        {/* Section 2: Flagship Showcase (Alternating Z-Pattern) & Production Systems */}
        <div className="relative z-20 scroll-mt-24">
          <GitHubProjectsSection />
        </div>

        {/* Section 3: Career & Experience */}
        <div className="relative z-20 scroll-mt-24">
          <GitHubExperienceSection />
        </div>

        {/* Section 4: Architecture, Cloud & Tech Stack */}
        <div className="relative z-20 scroll-mt-24">
          <SkillsSection />
        </div>

        {/* Footer / Contact */}
        <GitHubFooter />

      </main>

    </div>
  )
}

export default GitHubPortfolioTemplate
