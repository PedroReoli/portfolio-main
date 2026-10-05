import React from "react"
import Navbar from "../organisms/Navbar"
import HeroParallax from "../ui/hero-parallax"
import GitHubProjectsSection from "../organisms/GitHubProjectsSection"
import GitHubExperienceSection from "../organisms/GitHubExperienceSection"
import SkillsSection from "../organisms/SkillsSection"
import GitHubFooter from "../organisms/GitHubFooter"
import FloatingSectionNav from "../molecules/FloatingSectionNav"
import * as portfolioPT from "../../data/portfolio"
import * as portfolioEN from "../../data/portfolio.en"
import { useLanguage } from "../../i18n/useLanguage"

export const GitHubPortfolioTemplate: React.FC = () => {
  const { language } = useLanguage()
  const parallaxProducts = language === "pt" ? portfolioPT.parallaxProducts : portfolioEN.parallaxProducts

  return (
    <div className="min-h-screen bg-[#07080b] text-[#ffffff] font-sans antialiased selection:bg-white selection:text-black overflow-x-clip relative">
      
      {/* Floating Side Index (Desktop Only) */}
      <FloatingSectionNav />

      {/* Responsive Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="w-full overflow-x-clip relative bg-[#07080b]">
        
        {/* Section 1: Hero Parallax 3D & Executive Profile */}
        <HeroParallax products={parallaxProducts} />

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
