import { Github, Globe, Linkedin, Mail } from "lucide-react"
import Button from "../atoms/Button"

type HeroSectionProps = {
  role: string
  email: string
  linkedin: string
  github: string
  website: string
}

const HeroSection = ({ role, email, linkedin, github, website }: HeroSectionProps) => {
  return (
    <section className="hero" id="home">
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__content">
        <h1 className="hero__title">
          <span className="hero__title-main">Pedro</span> <span className="hero__title-accent">Reis</span>
        </h1>

        <p className="hero__role">{role}</p>

        <p className="hero__lead">
          Engenheiro de software focado em performance, escalabilidade e construção de aplicações modernas com React,
          Next.js e TypeScript.
        </p>

        <div className="hero__actions">
          <Button href="#resumo" variant="ghost">
            Sobre Mim
          </Button>
        </div>

        <div className="hero__socials" aria-label="Links principais">
          <a href={`mailto:${email}`} aria-label="Email">
            <Mail size={17} strokeWidth={2} />
          </a>
          <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={17} strokeWidth={2} />
          </a>
          <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={17} strokeWidth={2} />
          </a>
          <a href={website} target="_blank" rel="noreferrer" aria-label="Website">
            <Globe size={17} strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
