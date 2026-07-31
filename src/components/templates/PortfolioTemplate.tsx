import { useState } from "react"
import * as dbPT from "../../data/portfolio"
import * as dbEN from "../../data/portfolio.en"
import Header from "../organisms/Header"
import HeroSection from "../organisms/HeroSection"
import SkillsSection from "../organisms/SkillsSection"
import ProjectsSection from "../organisms/ProjectsSection"
import ExperienceSection from "../organisms/ExperienceSection"
import BlogSection from "../organisms/BlogSection"
import FooterSection from "../organisms/FooterSection"
import WhatsAppFloat from "../atoms/WhatsAppFloat"

const navPT = [
  { label: "Início", href: "#hero" },
  { label: "Stack", href: "#skills" },
  { label: "Projetos", href: "#projetos" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Blog", href: "#blog" },
  { label: "Contato", href: "#contato" },
] as const

const navEN = [
  { label: "Home", href: "#hero" },
  { label: "Stack", href: "#skills" },
  { label: "Projects", href: "#projetos" },
  { label: "Experience", href: "#experiencia" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contato" },
] as const

interface PortfolioTemplateProps {
  onNavigateToBlog?: () => void
}

const PortfolioTemplate = ({ onNavigateToBlog }: PortfolioTemplateProps) => {
  const [lang, setLang] = useState<"pt" | "en">("pt")

  const data = lang === "pt" ? dbPT : dbEN
  const navigation = lang === "pt" ? navPT : navEN

  return (
    <div className="relative min-h-screen bg-[#080a11] text-zinc-100 font-sans selection:bg-[#00f0ff]/30 selection:text-white">
      {/* Background Mesh Grid */}
      <div className="bg-mesh" />

      {/* Main Header */}
      <Header
        navigation={navigation}
        lang={lang}
        toggleLang={() => setLang((l) => (l === "pt" ? "en" : "pt"))}
      />

      {/* Merged Hero + About */}
      <HeroSection
        name={data.profile.name}
        role={data.profile.role}
        tagline={data.profile.tagline}
        location={data.profile.location}
        summary={data.profile.summary}
        stats={data.highlights}
        email={data.profile.email}
        linkedin={data.profile.linkedin}
        github={data.profile.github}
        phoneHref={data.profile.phoneHref}
      />

      {/* Skills / Stack Grid */}
      <SkillsSection skills={data.skills} />

      {/* Projects Section */}
      <ProjectsSection
        projects={data.projects}
        labels={data.projectsLabels}
      />

      {/* Experience Section */}
      <ExperienceSection experiences={data.experiences} />

      {/* Blog Section (strictly 3 items on main page) */}
      <BlogSection
        posts={data.blogPosts}
        lang={lang}
        onViewAllClick={onNavigateToBlog}
      />

      {/* Contact / Footer Section */}
      <FooterSection
        lang={lang}
        degree={data.education.degree}
        institution={data.education.institution}
        period={data.education.period}
        languages={data.languages}
        email={data.profile.email}
        phoneHref={data.profile.phoneHref}
        linkedin={data.profile.linkedin}
        github={data.profile.github}
      />

      {/* Floating Action Button */}
      <WhatsAppFloat
        href={data.profile.phoneHref}
        label={lang === "pt" ? "Falar no WhatsApp" : "Chat on WhatsApp"}
      />
    </div>
  )
}

export default PortfolioTemplate
