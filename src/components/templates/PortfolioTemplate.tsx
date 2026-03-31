import { education, experiences, languages, profile, skills } from "../../data/portfolio"
import FooterSection from "../organisms/FooterSection"
import Header from "../organisms/Header"
import HeroVideoScroll from "../organisms/HeroVideoScroll"
import SkillsSection from "../organisms/SkillsSection"
import SummarySection from "../organisms/SummarySection"
import ProjectsSection from "../organisms/ProjectsSection"
import ExperienceSection from "../organisms/ExperienceSection"
import StackedSection from "../organisms/StackedSection"

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

      <StackedSection index={0} total={6}>
        <HeroVideoScroll
          role={profile.role}
          email={profile.email}
          linkedin={profile.linkedin}
          github={profile.github}
          website={profile.website}
        />
      </StackedSection>

      <StackedSection index={1} total={6}>
        <SummarySection summary={profile.summary} />
      </StackedSection>

      <StackedSection index={2} total={6}>
        <ProjectsSection />
      </StackedSection>

      <StackedSection index={3} total={6}>
        <SkillsSection skills={skills} />
      </StackedSection>

      <StackedSection index={4} total={6}>
        <ExperienceSection experiences={experiences} />
      </StackedSection>

      <StackedSection index={5} total={6}>
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
      </StackedSection>
    </main>
  )
}

export default PortfolioTemplate
