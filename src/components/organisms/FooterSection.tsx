import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

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
  languages,
  email,
  linkedin,
  github,
}: FooterSectionProps) => {
  return (
    <footer className="relative w-full min-h-screen bg-[#cef441] mt-0 rounded-t-[3rem] sm:rounded-t-[5rem] overflow-hidden flex flex-col justify-between pt-12 sm:pt-20 pb-6" id="contato">
      
      {/* Massive Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-full flex justify-center pointer-events-none z-0">
        <h2 className="text-[14vw] sm:text-[16vw] font-black uppercase italic tracking-tighter text-transparent w-[120%] text-center whitespace-nowrap opacity-20" style={{ WebkitTextStroke: "2px rgba(0,0,0,1)" }}>
          ENGINEER
        </h2>
      </div>

      <div className="px-6 md:px-12 w-full max-w-[100rem] mx-auto flex flex-col flex-1">
        {/* Top Action Bar */}
        <div className="relative z-20 flex flex-col md:flex-row items-center justify-between w-full mb-16 md:mb-24 gap-6">
          <span className="text-black font-black text-2xl md:text-3xl uppercase tracking-tighter">
            PEDRO LUCAS REIS
          </span>
          <a href="#" className="flex items-center gap-3 px-6 py-3 bg-transparent border border-black text-black font-bold uppercase tracking-widest text-[10px] md:text-xs rounded-full hover:bg-black hover:text-[#cef441] transition-all">
            Download Resume
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Main Content Area */}
        <div className="relative z-20 flex flex-col md:flex-row justify-between w-full gap-20 md:gap-0 flex-1">
          
          {/* Left: Links */}
          <div className="flex flex-col gap-6 md:gap-10 w-full md:w-auto relative z-20">
            <span className="text-[10px] md:text-xs text-black/50 uppercase tracking-[0.3em] font-mono border-b border-black/10 pb-4">
              Links / Menu
            </span>
            <nav className="flex flex-col gap-1 md:gap-2">
              {[
                { label: "Home", href: "#home" },
                { label: "Resumo", href: "#resumo" },
                { label: "Projetos", href: "#projetos" },
                { label: "Expertise", href: "#competencias" },
                { label: "Contato", href: "#contato" }
              ].map(link => (
                <a key={link.label} href={link.href} className="text-[12vw] sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[6rem] font-black uppercase tracking-tighter text-black hover:text-black/50 hover:pl-4 transition-all duration-300 leading-[0.9]">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Center: Reappearing Portrait */}
          <div className="absolute top-1/4 md:top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-[60%] w-64 h-80 sm:w-80 sm:h-[26rem] md:w-[400px] md:h-[500px] grayscale z-10 pointer-events-none hidden md:block">
            <img 
              src="/eu-profissional.png" 
              alt="Pedro Lucas Reis" 
              className="w-full h-full object-cover object-top mix-blend-multiply opacity-50"
              style={{ WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)", maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)" }} 
            />
          </div>

          {/* Right: Socials */}
          <div className="flex flex-col gap-6 md:gap-10 text-left md:text-right w-full md:w-auto relative z-20">
            <span className="text-[10px] md:text-xs text-black/50 uppercase tracking-[0.3em] font-mono border-b border-black/10 pb-4">
              Connect / Social
            </span>
            <nav className="flex flex-col gap-1 md:gap-2 items-start md:items-end">
              <a href={linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-[12vw] sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[6rem] font-black uppercase tracking-tighter text-black hover:text-black/50 hover:pl-4 md:hover:pr-4 md:hover:pl-0 transition-all duration-300 group leading-[0.9]">
                <ArrowUpRight size={48} className="opacity-0 -translate-x-4 hidden md:block group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none" />
                LinkedIn
              </a>
              <a href={github} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-[12vw] sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[6rem] font-black uppercase tracking-tighter text-black hover:text-black/50 hover:pl-4 md:hover:pr-4 md:hover:pl-0 transition-all duration-300 group leading-[0.9]">
                <ArrowUpRight size={48} className="opacity-0 -translate-x-4 hidden md:block group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none" />
                GitHub
              </a>
              <a href={`mailto:${email}`} className="flex items-center gap-4 text-[12vw] sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[6rem] font-black uppercase tracking-tighter text-black hover:text-black/50 hover:pl-4 md:hover:pr-4 md:hover:pl-0 transition-all duration-300 group leading-[0.9]">
                <ArrowUpRight size={48} className="opacity-0 -translate-x-4 hidden md:block group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none" />
                Email
              </a>
            </nav>
          </div>

        </div>
      </div>

      {/* Marquee & Footer Bottom */}
      <div className="relative z-20 w-full mt-24 flex flex-col">
        {/* Simple Endless Marquee */}
        <div className="flex overflow-hidden border-y border-black/10 py-5 mb-0 bg-[#cef441]">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="flex whitespace-nowrap gap-8 text-2xl md:text-4xl font-black uppercase tracking-widest text-black"
          >
            {[...languages.map(l => l.name), "REACT", "NEXT.JS", "TYPESCRIPT", "NODE.JS", "C#", ...languages.map(l => l.name), "REACT", "NEXT.JS", "TYPESCRIPT", "NODE.JS", "C#"].map((item, i) => (
              <span key={i} className="flex items-center gap-8 italic">
                {item} <span className="w-3 h-3 rounded-full bg-black/50"></span>
              </span>
            ))}
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 px-6 md:px-12">
          <span className="text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase text-black/60 text-center sm:text-left">
            © {new Date().getFullYear()} Pedro Lucas Reis. Building for the future.
          </span>
          <span className="text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase text-black/60 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
            System Online
          </span>
        </div>
      </div>
      
    </footer>
  )
}

export default FooterSection
