import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa"
import { FiArrowUpRight, FiHeart } from "react-icons/fi"

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
    title: lang === "pt" ? "VAMOS CONSTRUIR ALGO INCRÍVEL JUNTOS?" : "LET'S BUILD SOMETHING GREAT TOGETHER!",
    subtitle: lang === "pt" ? "Aberto a novas oportunidades, liderança técnica e desenvolvimento de produtos de alto impacto." : "Open for new opportunities, tech leadership and high-impact software engineering.",
    educationTitle: lang === "pt" ? "Formação Acadêmica" : "Academic Education",
    languagesTitle: lang === "pt" ? "Idiomas & Comunidade" : "Languages & Community",
    contactTitle: lang === "pt" ? "Contato Direto" : "Direct Contact",
    rights: lang === "pt" ? "Todos os direitos reservados." : "All rights reserved.",
  }

  return (
    <footer id="contato" className="py-16 px-4 md:px-8 max-w-6xl mx-auto border-t border-zinc-800/80 mt-12">
      {/* Call to Action Card */}
      <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 border border-white/10 text-center space-y-6 mb-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-[120px] pointer-events-none" />

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
          {content.title}
        </h2>
        <p className="text-sm md:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          {content.subtitle}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={phoneHref}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-[#00f0ff] text-zinc-950 font-extrabold text-sm hover:bg-[#38bdf8] shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all flex items-center gap-2"
          >
            <FaWhatsapp className="w-4 h-4" />
            <span>WhatsApp</span>
            <FiArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${email}`}
            className="px-6 py-3 rounded-full bg-zinc-900 border border-white/15 text-white hover:border-[#00f0ff]/50 hover:bg-zinc-800 text-sm font-bold transition-all flex items-center gap-2 shadow-md"
          >
            <FaEnvelope className="w-4 h-4 text-zinc-400" />
            <span>{email}</span>
          </a>
        </div>
      </div>

      {/* 3-Column Footer Grid (Education, Languages, Social) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Education Card */}
        <div className="p-6 rounded-3xl bg-zinc-900/60 backdrop-blur-md border border-white/10 space-y-3">
          <h3 className="text-xs font-black uppercase tracking-wider text-[#00f0ff]">
            {content.educationTitle}
          </h3>
          <div>
            <div className="text-base font-extrabold text-white">{degree}</div>
            <div className="text-xs text-zinc-400 font-medium mt-1">{institution}</div>
            <div className="text-xs text-[#00f0ff] font-bold mt-2">{period}</div>
          </div>
        </div>

        {/* Languages & Community Card */}
        <div className="p-6 rounded-3xl bg-zinc-900/60 backdrop-blur-md border border-white/10 space-y-3">
          <h3 className="text-xs font-black uppercase tracking-wider text-[#00f0ff]">
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

        {/* Social Links Card */}
        <div className="p-6 rounded-3xl bg-zinc-900/60 backdrop-blur-md border border-white/10 space-y-3">
          <h3 className="text-xs font-black uppercase tracking-wider text-[#00f0ff]">
            {content.contactTitle}
          </h3>
          <div className="flex flex-col gap-2">
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs font-bold text-zinc-300 hover:text-[#00f0ff] transition-colors"
            >
              <FaLinkedin className="w-4 h-4 text-[#00f0ff]" />
              <span>linkedin.com/in/pedro-lucas-reis</span>
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs font-bold text-zinc-300 hover:text-[#00f0ff] transition-colors"
            >
              <FaGithub className="w-4 h-4 text-[#00f0ff]" />
              <span>github.com/PedroReoli</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Rights */}
      <div className="text-center text-xs text-zinc-500 font-semibold flex items-center justify-center gap-1.5 pt-6 border-t border-white/5">
        <span>© {new Date().getFullYear()} Pedro Lucas Reis. {content.rights}</span>
        <FiHeart className="w-3.5 h-3.5 text-[#00f0ff]" />
      </div>
    </footer>
  )
}

export default FooterSection
