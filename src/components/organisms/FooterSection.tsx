import { ArrowUpRight, Mail, Phone } from "lucide-react"
import { SiLinkedin, SiGithub } from "react-icons/si"

type Language = {
  name: string
  level: string
}

type FooterSectionProps = {
  lang?: "pt" | "en"
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
  lang = "en",
  degree,
  institution,
  email,
  phoneHref,
  phoneLabel,
  linkedin,
  github,
}: FooterSectionProps) => {
  return (
    <footer className="relative w-full bg-[#0a0a0a] border-t border-white/5 flex flex-col justify-between pt-24 lg:pt-32 pb-24 lg:pb-32" id="contato">
      
      <div className="px-6 md:px-12 w-full max-w-[90rem] mx-auto flex flex-col items-center">
        
        {/* Massive Call To Action */}
        <div className="flex flex-col items-center text-center w-full mb-20 lg:mb-32">
          <span className="w-16 h-16 sm:w-20 sm:h-20 bg-white/5 rounded-full flex flex-col items-center justify-center text-[#cef441] mb-8 border border-white/10 shadow-[0_0_30px_rgba(206,244,65,0.1)]">
            <ArrowUpRight size={32} />
          </span>
          <h2 className="text-[11vw] sm:text-7xl lg:text-[8rem] font-black tracking-tighter uppercase text-white leading-none whitespace-nowrap">
            {lang === "pt" ? "VAMOS TRABALHAR" : "LET'S WORK"} <br/>
            <span className="text-transparent italic" style={{ WebkitTextStroke: "2px #cef441" }}>
              {lang === "pt" ? "JUNTOS." : "TOGETHER."}
            </span>
          </h2>
        </div>

        {/* Links and Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 w-full border-t border-b border-white/5 py-12 lg:py-16 mb-12">
          
          {/* Section 1: Contact Direct */}
          <div className="flex flex-col gap-6">
            <span className="text-[10px] lg:text-xs text-zinc-500 font-mono uppercase tracking-[0.3em]">
              {lang === "pt" ? "CONTATO DIRETO" : "DIRECT CONTACT"}
            </span>
            <div className="flex flex-col gap-4">
              <a href={`mailto:${email}`} className="flex items-center gap-3 text-xs sm:text-sm font-bold font-mono text-zinc-300 hover:text-[#cef441] transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-[#cef441] group-hover:text-black flex items-center justify-center transition-colors border border-white/10 group-hover:border-[#cef441]">
                  <Mail size={16} />
                </div>
                {email}
              </a>
              <a href={phoneHref} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-xs sm:text-sm font-bold font-mono text-zinc-300 hover:text-[#cef441] transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-[#cef441] group-hover:text-black flex items-center justify-center transition-colors border border-white/10 group-hover:border-[#cef441]">
                  <Phone size={16} />
                </div>
                {phoneLabel}
              </a>
            </div>
          </div>

          {/* Section 2: Socials */}
          <div className="flex flex-col gap-6">
            <span className="text-[10px] lg:text-xs text-zinc-500 font-mono uppercase tracking-[0.3em]">
              {lang === "pt" ? "REDES" : "SOCIALS"}
            </span>
            <nav className="flex flex-col gap-4">
              <a href={linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-xs sm:text-sm font-bold font-mono text-zinc-300 hover:text-[#cef441] transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-[#cef441] group-hover:text-black flex items-center justify-center transition-colors border border-white/10 group-hover:border-[#cef441]">
                  <SiLinkedin size={16} />
                </div>
                LinkedIn
              </a>
              <a href={github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-xs sm:text-sm font-bold font-mono text-zinc-300 hover:text-[#cef441] transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-[#cef441] group-hover:text-black flex items-center justify-center transition-colors border border-white/10 group-hover:border-[#cef441]">
                  <SiGithub size={16} />
                </div>
                GitHub
              </a>
            </nav>
          </div>

          {/* Section 3: Navigation */}
          <div className="flex flex-col gap-6">
            <span className="text-[10px] lg:text-xs text-zinc-500 font-mono uppercase tracking-[0.3em]">
              Sitemap
            </span>
            <nav className="flex flex-col gap-2">
              {['Home', 'Resumo', 'Projetos', 'Experiência'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-zinc-300 hover:text-[#cef441] transition-colors leading-[1.1]">
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Section 4: Academic */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] lg:text-xs text-zinc-500 font-mono uppercase tracking-[0.3em] mb-2">
              Base Station
            </span>
            <span className="text-sm font-bold text-white uppercase tracking-wider">{degree}</span>
            <span className="text-xs text-zinc-400 leading-relaxed font-mono uppercase">
              {institution}
            </span>
          </div>

        </div>

        {/* Bottom Small Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-6">
          <span className="text-[10px] sm:text-xs text-zinc-500 font-mono tracking-[0.2em] uppercase text-center sm:text-left">
            © {new Date().getFullYear()} Pedro Lucas Reis. All rights reserved.
          </span>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#cef441] animate-pulse shadow-[0_0_10px_rgba(206,244,65,0.8)]"></span>
            <span className="text-[10px] sm:text-xs text-white font-mono tracking-[0.2em] uppercase">
              System Online
            </span>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default FooterSection
