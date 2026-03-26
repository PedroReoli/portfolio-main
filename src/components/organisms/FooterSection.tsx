import { motion } from "framer-motion"
import { Mail, Phone, Linkedin, Github } from "lucide-react"

type Language = {
  name: string
  level: string
}

type FooterSectionProps = {
  degree: string
  institution: string
  period: string
  languages: readonly Language[]
  email: string
  phoneHref: string
  phoneLabel: string
  linkedin: string
  github: string
}

const FooterSection = ({
  degree,
  institution,
  period,
  languages,
  email,
  phoneHref,
  phoneLabel,
  linkedin,
  github,
}: FooterSectionProps) => {
  return (
    <footer className="relative z-10 px-6 py-20 pb-32 max-w-7xl mx-auto border-t border-zinc-800/30 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
        {/* Education Panel */}
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col p-8 md:p-10 rounded-3xl border border-zinc-800/40 bg-zinc-900/20 backdrop-blur-xl relative overflow-hidden group hover:border-zinc-700/50 transition-colors"
          id="formacao"
        >
          <div className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] pointer-events-none rounded-3xl" />
          <h2 className="text-zinc-500 font-mono text-xs md:text-sm tracking-[0.2em] uppercase font-semibold mb-6">Formação Acadêmica</h2>
          
          <div className="flex flex-col gap-2">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-100">{degree}</h3>
            <p className="text-zinc-400 font-light">{institution}</p>
            <strong className="inline-block mt-4 text-xs font-mono tracking-widest text-zinc-500 px-3 py-1 rounded-full border border-zinc-800/60 bg-zinc-900 max-w-max">
              {period}
            </strong>
          </div>
        </motion.article>

        {/* Contact & Languages Panel */}
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col p-8 md:p-10 rounded-3xl border border-zinc-800/40 bg-zinc-900/20 backdrop-blur-xl relative overflow-hidden group hover:border-zinc-700/50 transition-colors"
          id="contato"
        >
          <div className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] pointer-events-none rounded-3xl" />
          <h2 className="text-zinc-500 font-mono text-xs md:text-sm tracking-[0.2em] uppercase font-semibold mb-6">Idiomas & Contato</h2>

          <div className="flex flex-col gap-4 border-b border-zinc-800/50 pb-6 mb-6">
            {languages.map((language) => (
              <div className="flex justify-between items-center" key={language.name}>
                <span className="text-zinc-300 font-medium">{language.name}</span>
                <strong className="text-xs font-mono px-3 py-1 rounded-full bg-zinc-800/50 text-zinc-400 border border-zinc-700/30">
                  {language.level}
                </strong>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a 
              href={`mailto:${email}`} 
              className="group/link flex items-center gap-3 p-4 rounded-2xl border border-zinc-800/50 bg-zinc-900/50 hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]"
            >
              <Mail size={16} strokeWidth={1.5} className="group-hover/link:text-black text-zinc-400 transition-colors" />
              <span className="text-sm font-medium tracking-tight truncate">Email</span>
            </a>
            <a 
              href={phoneHref} 
              className="group/link flex items-center gap-3 p-4 rounded-2xl border border-zinc-800/50 bg-zinc-900/50 hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]"
            >
              <Phone size={16} strokeWidth={1.5} className="group-hover/link:text-black text-zinc-400 transition-colors" />
              <span className="text-sm font-medium tracking-tight truncate">{phoneLabel}</span>
            </a>
            <a 
              href={linkedin} target="_blank" rel="noreferrer"
              className="group/link flex items-center gap-3 p-4 rounded-2xl border border-zinc-800/50 bg-zinc-900/50 hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]"
            >
              <Linkedin size={16} strokeWidth={1.5} className="group-hover/link:text-black text-zinc-400 transition-colors" />
              <span className="text-sm font-medium tracking-tight truncate">LinkedIn</span>
            </a>
            <a 
              href={github} target="_blank" rel="noreferrer"
              className="group/link flex items-center gap-3 p-4 rounded-2xl border border-zinc-800/50 bg-zinc-900/50 hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]"
            >
              <Github size={16} strokeWidth={1.5} className="group-hover/link:text-black text-zinc-400 transition-colors" />
              <span className="text-sm font-medium tracking-tight truncate">GitHub</span>
            </a>
          </div>
        </motion.article>
      </div>
    </footer>
  )
}

export default FooterSection
