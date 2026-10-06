import React from "react"
import Navbar from "../organisms/Navbar"
import HeroCleanExecutive from "../organisms/HeroCleanExecutive"
import GitHubProjectsSection from "../organisms/GitHubProjectsSection"
import GitHubExperienceSection from "../organisms/GitHubExperienceSection"
import EducationAndLanguagesSection from "../organisms/EducationAndLanguagesSection"
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
        
        {/* Section 1: Executive Clean Hero (Monumental Typography & Focus) */}
        <div id="about" className="relative z-10 scroll-mt-24">
          <HeroCleanExecutive />
        </div>

        {/* Section 2: Flagship Systems (Left Info, Right Previews) & Corporate Modules */}
        <div className="relative z-20 scroll-mt-24">
          <GitHubProjectsSection />
        </div>

        {/* Section 3: Engineering Career & Timeline */}
        <div className="relative z-20 scroll-mt-24">
          <GitHubExperienceSection />
        </div>

        {/* Section 4: Education, Certifications & Languages */}
        <div className="relative z-20 scroll-mt-24">
          <EducationAndLanguagesSection />
        </div>

        {/* Section 5: Architecture, Cloud & Tech Stack */}
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
