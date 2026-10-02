import React from "react"
import Navbar from "../organisms/Navbar"
import GitHubProfileHeader from "../organisms/GitHubProfileHeader"
import GitHubMetricsSection from "../organisms/GitHubMetricsSection"
import GitHubProjectsSection from "../organisms/GitHubProjectsSection"
import GitHubExperienceSection from "../organisms/GitHubExperienceSection"
import SkillsSection from "../organisms/SkillsSection"
import GitHubFooter from "../organisms/GitHubFooter"
import FloatingSectionNav from "../molecules/FloatingSectionNav"

export const GitHubPortfolioTemplate: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#09090b] text-[#ffffff] font-sans antialiased selection:bg-white selection:text-black overflow-x-hidden relative">
      
      {/* Floating Side Index (Desktop) */}
      <FloatingSectionNav />

      {/* Dynamic Dual-State Navbar (Island at top -> Full width sticky upon scroll) */}
      <Navbar />

      {/* Main Content Sections with Alternating Dark / Light Dual-Tone Surfaces */}
      <main className="w-full overflow-x-hidden">
        {/* Section 1: Hero Profile (Dark) */}
        <div id="about" className="scroll-mt-10">
          <GitHubProfileHeader />
        </div>

        {/* Section 2: Metrics & Impact (Light) */}
        <div id="metrics" className="scroll-mt-10">
          <GitHubMetricsSection />
        </div>

        {/* Section 3: Projects & Flagships (Dark) */}
        <div id="projects" className="scroll-mt-10">
          <GitHubProjectsSection />
        </div>

        {/* Section 4: Experience & Career (Light) */}
        <div id="experience" className="scroll-mt-10">
          <GitHubExperienceSection />
        </div>

        {/* Section 5: Tech Stack & Architecture (Dark) */}
        <div id="skills" className="scroll-mt-10">
          <SkillsSection />
        </div>
      </main>

      {/* Footer / Contact (Dark) */}
      <GitHubFooter />

    </div>
  )
}

export default GitHubPortfolioTemplate
