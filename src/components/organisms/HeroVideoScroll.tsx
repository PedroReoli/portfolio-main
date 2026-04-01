import { motion } from "framer-motion"
import { ArrowUpRight, MapPin, Clock, Zap } from "lucide-react"
import { useState, useEffect } from "react"

type HeroSectionProps = {
  role: string
  email: string
  linkedin: string
  github: string
  website: string
}

const LocalTime = ({ format = "full" }: { format?: "full" | "timeOnly" | "short" }) => {
  const [timeStr, setTimeStr] = useState<string>("")
  
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const t = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'America/Sao_Paulo' })
      if (format === "full") {
        setTimeStr(t + " BRT")
      } else if (format === "short") {
        setTimeStr(t.split(' ')[0])
      } else {
        setTimeStr(t)
      }
    }
    updateTime()
    const int = setInterval(updateTime, 1000)
    return () => clearInterval(int)
  }, [format])

  return <>{timeStr}</>
}

export default function HeroVideoScroll({ email }: HeroSectionProps) {

  return (
    <section className="relative w-full min-h-[100svh] bg-[#0a0a0a] flex items-center justify-center overflow-hidden" id="home">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

      {/* Top Corners */}
      <div className="absolute top-8 left-8 z-30 hidden sm:block">
        <div className="text-[#cef441] font-black text-2xl italic tracking-tighter">PR</div>
      </div>
      <div className="absolute top-8 right-8 z-30 hidden sm:block">
        <div className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.3em]">Full Stack Engineer</div>
      </div>

      {/* Bottom Corners */}
      <div className="absolute bottom-8 left-8 z-30 hidden sm:flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#cef441] animate-pulse"></span>
        <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">VR, RJ / <LocalTime /></span>
      </div>
      <div className="absolute bottom-8 right-8 z-30 hidden sm:block">
        <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">LOCAL / <LocalTime format="short" /></span>
      </div>

      {/* Huge Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center pointer-events-none select-none z-0">
        <motion.h1 
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", times: [0, 0.45, 0.55, 0.95, 1] }}
          style={{ WebkitTextStroke: "1px rgba(255,255,255,0.15)" }}
          className="text-[14vw] sm:text-[16vw] font-black tracking-tighter uppercase text-transparent leading-[0.85] text-center w-[120%] whitespace-nowrap"
        >
          FRONTEND
        </motion.h1>
        
        <motion.h1 
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", times: [0, 0.45, 0.55, 0.95, 1] }}
          style={{ WebkitTextStroke: "1px rgba(255,255,255,0.15)" }}
          className="text-[14vw] sm:text-[16vw] font-black tracking-tighter uppercase text-transparent leading-[0.85] text-center w-[120%] whitespace-nowrap mt-4"
        >
          BACKEND
        </motion.h1>
      </div>

      {/* Center Name Typography & Portrait */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Layer 1: Typography Block */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 w-full h-full pb-10 sm:pb-20">
          <motion.h2 
            animate={{ opacity: [1, 1, 0, 0, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", times: [0, 0.45, 0.55, 0.95, 1] }}
            className="text-[17vw] sm:text-[13vw] font-black tracking-tighter uppercase text-zinc-300 leading-[0.85] whitespace-nowrap"
          >
            PEDRO
          </motion.h2>

          <motion.h2 
            animate={{ opacity: [1, 1, 0, 0, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", times: [0, 0.45, 0.55, 0.95, 1] }}
            className="text-[17vw] sm:text-[13vw] font-black tracking-tighter uppercase text-transparent leading-[0.85] whitespace-nowrap" 
            style={{ WebkitTextStroke: "2px #cef441" }}
          >
            REIS
          </motion.h2>
        </div>

        {/* Layer 2: Center Portrait Image overlapping text */}
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="relative z-20 w-[360px] h-[480px] sm:w-[550px] sm:h-[700px] lg:w-[650px] lg:h-[850px] grayscale transition-all duration-700 mx-auto mt-24 sm:mt-32 lg:mt-32"
        >
          <img 
            src="/eu-profissional.png" 
            alt="Pedro Lucas Reis" 
            decoding="async"
            className="w-full h-full object-cover object-top hover:grayscale-0 transition-all duration-500" 
            style={{ WebkitMaskImage: "linear-gradient(to bottom, black 65%, transparent 100%)", maskImage: "linear-gradient(to bottom, black 65%, transparent 100%)" }} 
          />
        </motion.div>
      </div>

      {/* Left Telemetry Card */}
      <motion.div 
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        className="absolute bottom-24 left-4 sm:top-1/2 sm:-translate-y-1/2 sm:left-12 z-40 flex flex-col gap-4 w-[240px]"
      >
        <div className="flex flex-col gap-3 border border-white/10 rounded-2xl p-4 sm:p-5 bg-black/40 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-mono">Telemetry / Active</span>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#cef441] animate-ping absolute"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#cef441] relative"></span>
            </div>
          </div>
          <div className="flex flex-col gap-1.5 mt-2">
            <div className="flex items-center gap-2 text-white/90">
              <MapPin size={14} className="text-[#cef441]" />
              <span className="text-sm font-bold tracking-wide">VOLTA REDONDA, RJ</span>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <Clock size={14} />
              <span className="text-xs font-mono"><LocalTime /></span>
            </div>
          </div>
        </div>
        
        <a href={`mailto:${email}`} className="group flex items-center justify-between px-5 py-4 bg-[#cef441] text-black font-black uppercase tracking-[0.15em] text-xs rounded-2xl transition-all shadow-[0_0_30px_rgba(206,244,65,0.2)] hover:shadow-[0_0_50px_rgba(206,244,65,0.4)] hover:-translate-y-1">
          Start Engine
          <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </motion.div>

      {/* Right Tech Specs Card */}
      <motion.div 
        initial={{ opacity: 0, x: 25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        className="hidden xl:flex absolute top-1/2 -translate-y-1/2 right-12 z-40 flex-col gap-4 w-[260px]"
      >
        <div className="flex flex-col gap-5 border border-white/10 rounded-2xl p-5 bg-black/40 backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-mono">Tech Specs / Load</span>
            <Zap size={14} className="text-[#cef441]" />
          </div>
          
          <div className="flex flex-col gap-4">
            {[
              { label: "FRONTEND / REACT", val: "98%" },
              { label: "BACKEND / NODE", val: "90%" },
              { label: "SYSTEMS / DB", val: "85%" }
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2">
                <div className="flex justify-between text-[10px] font-bold tracking-widest text-white/90">
                  <span>{stat.label}</span>
                  <span className="text-zinc-500 text-[9px]">{stat.val}</span>
                </div>
                <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: stat.val }}
                    transition={{ duration: 1.0, delay: 0.6, ease: "easeOut" }}
                    className="h-full bg-[#cef441]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <a href="#projetos" className="group flex items-center justify-between px-5 py-4 bg-transparent border border-white/20 text-white font-bold uppercase tracking-[0.15em] text-xs rounded-2xl transition-all hover:bg-white/5 hover:-translate-y-1">
          Project Gallery
          <ArrowUpRight size={16} className="text-zinc-400 group-hover:text-white transition-colors" />
        </a>
      </motion.div>

    </section>
  )
}
