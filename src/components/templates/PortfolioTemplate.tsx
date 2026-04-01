import { useState } from "react"
import * as dbPT from "../../data/portfolio"
import * as dbEN from "../../data/portfolio.en"
import FooterSection from "../organisms/FooterSection"
import Header from "../organisms/Header"
import HeroVideoScroll from "../organisms/HeroVideoScroll"
import SkillsSection from "../organisms/SkillsSection"
import SummarySection from "../organisms/SummarySection"
import ProjectsSection from "../organisms/ProjectsSection"
import ExperienceSection from "../organisms/ExperienceSection"

const navPT = [
  { label: "Sobre Mim", href: "#resumo" },
  { label: "Projetos", href: "#projetos" },
  { label: "Expertise", href: "#competencias" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Contato", href: "#contato" },
] as const

const navEN = [
  { label: "About Me", href: "#resumo" },
  { label: "Projects", href: "#projetos" },
  { label: "Expertise", href: "#competencias" },
  { label: "Experience", href: "#experiencia" },
  { label: "Contact", href: "#contato" },
] as const

const PortfolioTemplate = () => {
  const [lang, setLang] = useState<"pt" | "en">("en")
  
  const data = lang === "pt" ? dbPT : dbEN
  const navigation = lang === "pt" ? navPT : navEN

  return (
    <main className="site-shell bg-[#0a0a0a] relative">
      <Header 
        navigation={navigation} 
        lang={lang} 
        toggleLang={() => setLang(l => l === "pt" ? "en" : "pt")} 
      />

      <HeroVideoScroll
        role={data.profile.role}
        email={data.profile.email}
        linkedin={data.profile.linkedin}
        github={data.profile.github}
        website={data.profile.website}
      />

      <SummarySection 
        title={lang === "pt" ? "Sobre Mim" : "About Me"} 
        subtitle={lang === "pt" ? "Identidade / Missão" : "Identity / Mission"}
        statement={lang === "pt" 
          ? "ENGENHARIA DE SOFTWARE COM FOCO EM ESCALA, ARQUITETURA MODERNA E CONSTRUÇÃO DE PRODUTOS SÓLIDOS." 
          : "SOFTWARE ENGINEERING FOCUSED ON SCALE, MODERN ARCHITECTURE, AND BUILDING SOLID PRODUCTS."}
        summary={data.profile.summary}
        stats={data.highlights} 
      />

      <ProjectsSection /> {/* Project section data binding handles internally or can be skipped for now if static */}

      <SkillsSection skills={data.skills} />

      <ExperienceSection 
        experiences={data.experiences} 
      />

      <FooterSection
        lang={lang}
        degree={data.education.degree}
        institution={data.education.institution}
        period={data.education.period}
        languages={data.languages}
        email={data.profile.email}
        phoneHref={data.profile.phoneHref}
        phoneLabel={data.profile.phoneLabel}
        linkedin={data.profile.linkedin}
        github={data.profile.github}
      />
    </main>
  )
}

export default PortfolioTemplate
