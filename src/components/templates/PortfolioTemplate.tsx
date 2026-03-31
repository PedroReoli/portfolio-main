import { education, experiences, languages, profile, skills } from "../../data/portfolio"
import FooterSection from "../organisms/FooterSection"
import Header from "../organisms/Header"
import HeroVideoScroll from "../organisms/HeroVideoScroll"
import SkillsSection from "../organisms/SkillsSection"
import SummarySection from "../organisms/SummarySection"
import ProjectsSection from "../organisms/ProjectsSection"
import ExperienceSection from "../organisms/ExperienceSection"

const navigation = [
  { label: "Resumo", href: "#resumo" },
  { label: "Projetos", href: "#projetos" },
  { label: "Expertise", href: "#competencias" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Formação", href: "#formacao" },
  { label: "Contato", href: "#contato" },
] as const

const PortfolioTemplate = () => {
  return (
    <main className="site-shell bg-[#0a0a0a] relative">
      <Header navigation={navigation} />

      <HeroVideoScroll
        role={profile.role}
        email={profile.email}
        linkedin={profile.linkedin}
        github={profile.github}
        website={profile.website}
      />

      <SummarySection summary={profile.summary} />

      <ProjectsSection />

      <SkillsSection skills={skills} />

      <ExperienceSection experiences={experiences} />

      <FooterSection
        degree={education.degree}
        institution={education.institution}
        period={education.period}
        languages={languages}
        email={profile.email}
        phoneHref={profile.phoneHref}
        phoneLabel={profile.phoneLabel}
        linkedin={profile.linkedin}
        github={profile.github}
      />
    </main>
  )
}

export default PortfolioTemplate
