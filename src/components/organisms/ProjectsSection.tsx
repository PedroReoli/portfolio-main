import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { useRef } from "react"

const projects = [
  {
    id: "domusdev",
    name: "DomusDev",
    href: "https://domusdev.com.br/",
    domain: "domusdev.com.br",
    category: "Full Stack",
    description: "Site institucional criado para uma software house especializada na criação de sistemas web sob medida. O projeto visa destacar os serviços, soluções de alta performance e excelência técnica no desenvolvimento.",
  },
  {
    id: "autocom3",
    name: "Autocom3",
    href: "https://autocom3.com.br/",
    domain: "autocom3.com.br",
    category: "Software ERP",
    description: "Site institucional criado para empresa especializada em sistemas ERP para o varejo. A estrutura foi planejada para apresentar soluções, módulos e diferenciais da plataforma de forma clara e objetiva.",
  },
  {
    id: "sivis",
    name: "Sivis",
    href: "https://sivis.com.br/",
    domain: "sivis.com.br",
    category: "Cloud Platform",
    description: "Site institucional criado para empresa especializada em sistemas de gestão para clubes. A estrutura foi pensada para apresentar soluções, diferenciais e módulos do sistema de forma clara e objetiva.",
  },
  {
    id: "nexusbrazil",
    name: "Nexus Brazil",
    href: "https://nexusbrazil.com.br/",
    domain: "nexusbrazil.com.br",
    category: "Corporate",
    description: "Site institucional desenvolvido para empresa de proteção veicular. O projeto destaca planos, benefícios, cobertura e formas de adesão, com foco em confiança, acessibilidade e navegação intuitiva.",
  }
]

export default function ProjectsSection() {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  // Horizontal translate value based on scroll progress. 
  // Adjust the "-60%" to ensure the last item is fully visible at the end of scroll.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"])

  return (
    <section ref={targetRef} className="relative z-10 w-full h-[350vh] bg-[#0a0a0a]" id="projetos">
      
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-20">
        
        {/* Fixed Title inside the sticky container */}
        <div className="mb-10 md:mb-16 flex flex-col items-start px-6 max-w-[90rem] mx-auto w-full">
          <h2 className="text-zinc-500 font-mono text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 text-left">Featured Work</h2>
          <h3 className="text-[12vw] sm:text-7xl lg:text-[8rem] font-black tracking-tighter uppercase text-white leading-none pb-4 text-left">
            LATEST<br/><span className="text-transparent" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.4)" }}>PROJECTS</span>
          </h3>
        </div>

        {/* The Track that moves horizontally */}
        <motion.div style={{ x }} className="flex gap-6 sm:gap-10 px-6 sm:px-12 md:px-24 xl:px-[calc((100vw-90rem)/2+1.5rem)] w-max pr-[20vw]">
          {projects.map((proj, idx) => (
            <div
              key={proj.name}
              className="group flex flex-col relative shrink-0 w-[85vw] md:w-[45vw] lg:w-[32vw] max-w-[450px] bg-[#111] border border-white/5 hover:border-[#cef441]/40 rounded-[2rem] overflow-hidden transition-colors select-none"
            >
              {/* Top Half: Image Container */}
              <a 
                href={proj.href} 
                target="_blank" 
                rel="noreferrer"
                className="relative w-full h-[220px] sm:h-[260px] bg-zinc-900 border-b border-white/10 block overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-[#cef441]/0 group-hover:bg-[#cef441]/10 transition-colors duration-500 z-10 pointer-events-none" />
                
                {/* Decorative Number */}
                <span className="absolute left-6 top-6 text-6xl font-black italic tracking-tighter text-transparent z-30 opacity-30 select-none pointer-events-none" style={{ WebkitTextStroke: "1px rgba(255,255,255,1)" }}>
                  0{idx + 1}
                </span>

                <img 
                  src={`/${proj.id}.jpg`} 
                  alt={proj.name}
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                />
              </a>

              {/* Bottom Half: Content Info */}
              <div className="flex flex-col items-start w-full p-6 sm:p-8 relative z-20">
                <div className="flex items-center justify-between w-full mb-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[9px] text-zinc-500 uppercase tracking-[0.2em] font-mono border border-white/10 px-3 py-1.5 rounded-full">
                      {proj.category}
                    </span>
                    <span className="text-[9px] text-[#cef441] uppercase tracking-[0.2em] font-mono">
                      {proj.domain}
                    </span>
                  </div>
                  
                  <a href={proj.href} target="_blank" rel="noreferrer" className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-white/5 group-hover:bg-[#cef441] text-white group-hover:text-black transition-colors hover:scale-110">
                    <ArrowUpRight size={18} />
                  </a>
                </div>
                
                <h4 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black uppercase tracking-tighter italic leading-none text-white group-hover:text-[#cef441] transition-colors mb-4">
                  {proj.name}
                </h4>
                
                <p className="text-sm text-zinc-400 font-light leading-relaxed">
                  {proj.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      
    </section>
  )
}
