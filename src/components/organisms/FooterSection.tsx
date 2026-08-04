import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa"

interface Language {
  readonly name: string
  readonly level: string
}

interface FooterSectionProps {
  lang: "pt" | "en"
  degree: string
  institution: string
  period: string
  languages: readonly Language[]
  email: string
  phoneHref: string
  linkedin: string
  github: string
}

const FooterSection = ({
  lang,
  degree,
  institution,
  period,
  languages,
  email,
  phoneHref,
  linkedin,
  github,
}: FooterSectionProps) => {
  const content = {
    educationTitle: lang === "pt" ? "Formação Acadêmica" : "Academic Education",
    languagesTitle: lang === "pt" ? "Idiomas & Comunidade" : "Languages & Community",
    contactTitle: lang === "pt" ? "Contato Direto" : "Direct Contact",
    rights: lang === "pt" ? "Todos os direitos reservados." : "All rights reserved.",
  }

  return (
    <footer id="contato" className="py-12 px-4 md:px-8 max-w-6xl mx-auto border-t border-zinc-800/80 mt-12">
      {/* 3-Column Footer Grid (Education, Languages, Direct Contact) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Education Card */}
        <div className="p-6 rounded-3xl bg-zinc-900/60 backdrop-blur-md border border-white/10 space-y-3">
          <h3 className="text-xs font-black uppercase tracking-wider text-emerald-400">
            {content.educationTitle}
          </h3>
          <div>
            <div className="text-base font-extrabold text-white">{degree}</div>
            <div className="text-xs text-zinc-400 font-medium mt-1">{institution}</div>
            <div className="text-xs text-emerald-400 font-bold mt-2">{period}</div>
          </div>
        </div>

        {/* Languages & Community Card */}
        <div className="p-6 rounded-3xl bg-zinc-900/60 backdrop-blur-md border border-white/10 space-y-3">
          <h3 className="text-xs font-black uppercase tracking-wider text-emerald-400">
            {content.languagesTitle}
          </h3>
          <div className="space-y-2">
            {languages.map((langItem, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-xs font-bold text-white">{langItem.name}</span>
                <span className="text-xs text-zinc-400">{langItem.level}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Social & Contact Card */}
        <div className="p-6 rounded-3xl bg-zinc-900/60 backdrop-blur-md border border-white/10 space-y-3">
          <h3 className="text-xs font-black uppercase tracking-wider text-emerald-400">
            {content.contactTitle}
          </h3>
          <div className="flex flex-col gap-2.5">
            <a
              href={phoneHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs font-bold text-zinc-300 hover:text-emerald-400 transition-colors duration-150"
            >
              <FaWhatsapp className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp (+55 24 99326-4040)</span>
            </a>
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2.5 text-xs font-bold text-zinc-300 hover:text-emerald-400 transition-colors duration-150"
            >
              <FaEnvelope className="w-4 h-4 text-emerald-400" />
              <span>{email}</span>
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs font-bold text-zinc-300 hover:text-emerald-400 transition-colors duration-150"
            >
              <FaLinkedin className="w-4 h-4 text-emerald-400" />
              <span>linkedin.com/in/pedro-lucas-reis</span>
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs font-bold text-zinc-300 hover:text-emerald-400 transition-colors duration-150"
            >
              <FaGithub className="w-4 h-4 text-emerald-400" />
              <span>github.com/PedroReoli</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Rights Notice */}
      <div className="text-center text-xs text-zinc-500 font-semibold flex items-center justify-center gap-1.5 pt-6 border-t border-white/5">
        <span>© {new Date().getFullYear()} Pedro Lucas Reis. {content.rights}</span>
      </div>
    </footer>
  )
}

export default FooterSection
