import { motion } from "framer-motion"
import { Github, Globe, Linkedin, Mail } from "lucide-react"

type HeroSectionProps = {
  role: string
  email: string
  linkedin: string
  github: string
  website: string
}

const HeroVideoScroll = ({ role, email, linkedin, github, website }: HeroSectionProps) => {
  return (
    <section className="relative w-full min-h-[100svh] bg-[#09090b] flex items-center justify-center overflow-hidden pt-24 pb-8" id="home">
      
      {/* Container perfectly centered  */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-12 flex flex-col justify-center items-center h-full">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center gap-6 w-full"
        >
          <div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-none">
              Pedro <span className="text-zinc-400">Reis</span>
            </h1>
            <p className="mt-4 text-xs sm:text-sm md:text-base text-zinc-400 font-mono tracking-widest uppercase">
              {role}
            </p>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed font-light max-w-2xl">
            Engenheiro de software focado em performance, escalabilidade e construção de aplicações modernas com React, Next.js e TypeScript.
          </p>

          {/* Premium Button & Socials */}
          <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
            <a
              href="#resumo"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-zinc-950 font-semibold tracking-tight rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">Sobre Mim</span>
            </a>

            <div className="flex items-center justify-center gap-3 mt-4 sm:ml-4 sm:mt-0 text-zinc-400">
              <a href={`mailto:${email}`} aria-label="Email" className="p-3 border border-zinc-800 rounded-full bg-zinc-900/80 hover:bg-white hover:text-black hover:scale-110 hover:border-white transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-sm pointer-events-auto">
                <Mail size={20} strokeWidth={1.5} />
              </a>
              <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub" className="p-3 border border-zinc-800 rounded-full bg-zinc-900/80 hover:bg-white hover:text-black hover:scale-110 hover:border-white transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-sm pointer-events-auto">
                <Github size={20} strokeWidth={1.5} />
              </a>
              <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-3 border border-zinc-800 rounded-full bg-zinc-900/80 hover:bg-white hover:text-black hover:scale-110 hover:border-white transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-sm pointer-events-auto">
                <Linkedin size={20} strokeWidth={1.5} />
              </a>
              <a href={website} target="_blank" rel="noreferrer" aria-label="Website" className="p-3 border border-zinc-800 rounded-full bg-zinc-900/80 hover:bg-white hover:text-black hover:scale-110 hover:border-white transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-sm pointer-events-auto">
                <Globe size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default HeroVideoScroll
