import { motion } from "framer-motion"

type Experience = {
  company: string
  role: string
  context: string
  period: string
  location: string
  stack: readonly string[]
  achievements: readonly string[]
}

type ExperienceSectionProps = {
  experiences: readonly Experience[]
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section className="relative z-10 px-6 py-24 lg:py-32 max-w-[90rem] mx-auto min-h-screen flex flex-col justify-center" id="experiencia">
      
      {/* Huge Title */}
      <div className="mb-20 md:mb-32 flex flex-col items-start">
        <h2 className="text-zinc-500 font-mono text-xs sm:text-sm tracking-[0.3em] uppercase mb-4">Track Record</h2>
        <h3 className="text-[12vw] sm:text-7xl lg:text-[8rem] xl:text-[9rem] font-black tracking-tighter uppercase text-white leading-[0.85]">
          CAREER<br/><span className="text-transparent" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.4)" }}>JOURNEY</span>
        </h3>
      </div>

      {/* List */}
      <div className="flex flex-col border-t border-white/10">
        {experiences.map((exp, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            key={`${exp.company}-${idx}`}
            className="flex flex-col lg:flex-row justify-between py-12 lg:py-16 border-b border-white/10 group"
          >
            {/* Left Box (Company & Time) */}
            <div className="w-full lg:w-1/3 flex flex-col gap-4 mb-8 lg:mb-0 relative lg:pr-10">
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">
                {exp.period}
              </span>
              <h4 className="text-4xl sm:text-5xl lg:text-[4rem] font-black uppercase tracking-tighter text-white group-hover:text-[#cef441] transition-colors leading-[0.9]">
                {exp.company}
              </h4>
              <span className="text-[10px] sm:text-xs text-white/50 uppercase tracking-[0.2em] font-mono mt-2">
                {exp.location}
              </span>
            </div>

            {/* Right Box (Role & Body) */}
            <div className="w-full lg:w-2/3 flex flex-col gap-6 lg:pl-12 xl:pl-24">
              <h5 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tighter text-white leading-none">
                {exp.role}
              </h5>
              
              <p className="text-zinc-400 font-light leading-relaxed text-sm sm:text-base max-w-2xl">
                {exp.context}
              </p>

              <ul className="flex flex-col gap-3 py-4">
                {exp.achievements.map((ach, i) => (
                  <li key={i} className="flex items-start gap-4 text-zinc-400 text-sm sm:text-base">
                    <span className="text-[#cef441] mt-[3px] font-mono text-[10px]">&gt;</span>
                    <span className="leading-relaxed">{ach}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4">
                {exp.stack.map(tech => (
                  <span key={tech} className="px-3 py-1.5 border border-white/10 text-white/60 bg-white/5 text-[9px] sm:text-[10px] uppercase font-mono tracking-widest rounded-full group-hover:border-[#cef441]/30 group-hover:bg-[#cef441]/5 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
    </section>
  )
}
