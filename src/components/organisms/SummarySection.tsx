import { motion } from "framer-motion"

type SummarySectionProps = {
  summary: readonly string[]
}

const SummarySection = ({ summary }: SummarySectionProps) => {
  return (
    <section className="relative z-10 px-6 pt-8 pb-16 lg:pt-12 lg:pb-24 max-w-7xl mx-auto" id="resumo">
      <motion.article 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-1 md:grid-cols-[12rem_1fr] lg:grid-cols-[16rem_1fr] gap-8 md:gap-12 lg:gap-20 items-stretch"
      >
        <motion.div 
          whileHover={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="relative w-full aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden border border-zinc-800/50 shadow-2xl shadow-black/50"
        >
          <div className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] z-10 rounded-2xl md:rounded-3xl pointer-events-none" />
          <img src="/eu-pro.png" alt="Pedro Reis" className="w-full h-full object-cover object-top" />
        </motion.div>

        <div className="flex flex-col justify-center space-y-6">
          <div className="space-y-3">
            <h2 className="text-zinc-500 font-mono text-xs md:text-sm tracking-[0.2em] uppercase font-semibold">Resumo Profissional</h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-100 leading-tight">
              Engenharia de software com foco em escala, arquitetura moderna e construção de produtos sólidos.
            </h3>
          </div>
          
          <div className="space-y-4 text-zinc-400 font-light leading-relaxed md:text-lg">
            {summary.map((paragraph, idx) => (
              <motion.p 
                key={paragraph}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </motion.article>
    </section>
  )
}

export default SummarySection
