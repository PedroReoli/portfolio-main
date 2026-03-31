import { motion } from "framer-motion"

type SummarySectionProps = {
  summary: readonly string[]
}

export default function SummarySection({ summary }: SummarySectionProps) {
  return (
    <section className="relative z-10 px-6 py-24 lg:py-32 max-w-[90rem] mx-auto min-h-screen flex flex-col justify-center" id="resumo">
      <div className="flex flex-col gap-16 lg:gap-24 relative z-10">
        
        {/* Massive Title */}
        <div className="flex flex-col items-start w-full">
          <span className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-[0.3em] font-mono mb-4 text-left">
            Identity / Mission
          </span>
          <h2 className="text-[14vw] lg:text-[10rem] font-black uppercase tracking-tighter text-white leading-[0.85] text-left">
            ABOUT<br/><span className="text-transparent italic" style={{ WebkitTextStroke: "2px #cef441" }}>ME</span>
          </h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row gap-12 lg:gap-24 w-full items-start"
        >
          {/* Main Statement Focus */}
          <div className="w-full lg:w-1/2 flex items-start">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white leading-[1.1] tracking-tighter">
              ENGENHARIA DE SOFTWARE COM FOCO EM ESCALA, ARQUITETURA MODERNA E CONSTRUÇÃO DE <span className="text-[#cef441] italic">PRODUTOS SÓLIDOS</span>.
            </h3>
          </div>

          {/* Paragraphs */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            {summary.map((paragraph, idx) => (
              <p key={idx} className="text-zinc-400 font-light leading-relaxed text-base sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative background element */}
      <span className="absolute right-[-10%] sm:right-0 top-1/2 -translate-y-1/2 text-[15rem] lg:text-[40rem] font-black italic tracking-tighter text-transparent z-0 opacity-10 pointer-events-none select-none" style={{ WebkitTextStroke: "2px rgba(255,255,255,1)" }}>
        V1
      </span>
    </section>
  )
}
