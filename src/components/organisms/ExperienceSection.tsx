import { motion } from "framer-motion"
import { MapPin, Calendar } from "lucide-react"

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

const ExperienceSection = ({ experiences }: ExperienceSectionProps) => {
  return (
    <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto" id="experiencia">
      <div className="mb-16 md:mb-24">
        <h2 className="text-zinc-500 font-mono text-xs md:text-sm tracking-[0.2em] uppercase font-semibold mb-4">Experiência</h2>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-100 max-w-3xl">
          Trajetória em ERP, educação tecnológica, modernização de legado e engenharia de produto.
        </h3>
      </div>

      <div className="flex flex-col gap-12 lg:gap-20">
        {experiences.map((experience, idx) => (
          <motion.article 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-[14rem_1fr] gap-6 md:gap-8 lg:gap-16 items-start group" 
            key={`${experience.company}-${experience.period}`}
          >
            {/* Context/Meta Rail */}
            <div className="sticky top-24 flex flex-col gap-2 pt-1 lg:pt-2">
              <span className="flex items-center gap-2 text-zinc-300 font-semibold tracking-tight text-sm md:text-base">
                <Calendar size={14} className="text-zinc-500" />
                {experience.period}
              </span>
              <strong className="flex items-center gap-2 text-zinc-500 font-normal text-sm">
                <MapPin size={14} />
                {experience.location}
              </strong>
            </div>

            {/* Content Panel */}
            <div className="flex flex-col gap-6 p-6 md:p-8 lg:p-10 rounded-3xl border border-zinc-800/40 bg-zinc-900/20 backdrop-blur-xl relative overflow-hidden transition-colors hover:border-zinc-700/50">
              <div className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] pointer-events-none rounded-3xl" />
              
              <div>
                <p className="text-zinc-500 font-mono text-xs md:text-sm tracking-widest uppercase mb-3">{experience.company}</p>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-4 leading-tight">{experience.role}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm md:text-base max-w-3xl">{experience.context}</p>
              </div>

              <ul className="flex flex-col gap-3 py-4 border-y border-zinc-800/50">
                {experience.achievements.map((achievement, i) => (
                  <motion.li 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + (i * 0.1) }}
                    key={achievement}
                    className="flex items-start gap-3 text-zinc-300 text-sm md:text-base"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-600 flex-shrink-0" />
                    <span className="leading-relaxed">{achievement}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-2">
                {experience.stack.map((item) => (
                  <span 
                    key={item}
                    className="inline-flex items-center px-3 py-1 rounded-full border border-zinc-700/50 bg-zinc-900/80 text-zinc-400 text-xs font-medium cursor-default hover:text-white transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection
