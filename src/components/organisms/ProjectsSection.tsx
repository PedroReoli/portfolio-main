import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: "domusdev",
    name: "DomusDev",
    href: "https://domusdev.com.br/",
    domain: "domusdev.com.br",
    category: "Full Stack",
    description: "Plataforma de software focada em arquitetura moderna e desenvolvimento robusto.",
  },
  {
    id: "autocom3",
    name: "Autocom3",
    href: "https://autocom3.com.br/",
    domain: "autocom3.com.br",
    category: "Software ERP",
    description: "Sistema tecnológico escalável oferecendo grandes soluções voltadas para eficiência.",
  },
  {
    id: "sivis",
    name: "Sivis",
    href: "https://sivis.com.br/",
    domain: "sivis.com.br",
    category: "Cloud Platform",
    description: "Plataforma de alta performance desenvolvida com ecossistema em nuvem.",
  },
  {
    id: "nexusbrazil",
    name: "Nexus Brazil",
    href: "https://nexusbrazil.com.br/",
    domain: "nexusbrazil.com.br",
    category: "Corporate",
    description: "Soluções integradas e inovação digital com foco corporativo.",
  }
]

export default function ProjectsSection() {
  return (
    <section className="relative z-10 px-6 py-24 lg:py-32 max-w-[90rem] mx-auto min-h-screen flex flex-col justify-center" id="projetos">
      <div className="mb-20 md:mb-32 flex flex-col items-center">
        <h2 className="text-zinc-500 font-mono text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 text-center">Featured Work</h2>
        <h3 className="text-[12vw] sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase text-white leading-[0.85] text-center">
          LATEST<br/><span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}>PROJECTS</span>
        </h3>
      </div>

      <div className="flex flex-col gap-32 lg:gap-48">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="group flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 relative"
          >
            {/* Left side content */}
            <div className="flex flex-col items-start w-full lg:w-1/2 order-2 lg:order-1 relative z-10">
              <div className="flex items-center gap-3 sm:gap-4 mb-6 md:mb-10">
                <span className="text-[9px] sm:text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-mono border border-white/10 px-4 py-2 rounded-full">
                  {proj.category}
                </span>
                <span className="text-[9px] sm:text-[10px] text-[#cef441] uppercase tracking-[0.2em] font-mono">
                  {proj.domain}
                </span>
              </div>
              
              <h4 className="text-[10vw] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black uppercase tracking-tighter italic leading-[0.9] text-white group-hover:text-[#cef441] transition-colors mb-6 md:mb-8">
                {proj.name}
              </h4>
              
              <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed max-w-xl mb-8 md:mb-12">
                {proj.description}
              </p>
              
              <a
                href={proj.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-white/5 hover:bg-[#cef441] hover:text-black text-white rounded-full transition-all border border-white/10 hover:border-transparent font-bold uppercase tracking-widest text-[10px] sm:text-xs"
              >
                Visit Website
                <ArrowUpRight size={18} />
              </a>
            </div>

            {/* Right side circular image */}
            <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2">
              {/* Huge Number behind */}
              <span className="absolute left-[5%] lg:left-[-15%] top-1/2 -translate-y-1/2 text-[15rem] lg:text-[20rem] font-black italic tracking-tighter text-transparent z-0 opacity-10 pointer-events-none select-none" style={{ WebkitTextStroke: "2px rgba(255,255,255,1)" }}>
                0{idx + 1}
              </span>
              
              <a 
                href={proj.href} 
                target="_blank" 
                rel="noreferrer"
                className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border border-white/10 group-hover:border-[#cef441]/50 shadow-2xl group-hover:scale-105 transition-all duration-700 block"
              >
                 {/* Gradient overlay */}
                 <div className="absolute inset-0 bg-[#cef441]/0 group-hover:bg-[#cef441]/20 transition-colors duration-500 z-10" />
                 
                 {/* Center play/view button on hover */}
                 <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-50 group-hover:scale-100">
                   <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#cef441] text-black flex flex-col items-center justify-center font-bold uppercase tracking-widest text-[10px] shadow-[0_0_30px_rgba(206,244,65,0.4)]">
                     <ArrowUpRight size={24} className="mb-1" />
                     View
                   </div>
                 </div>

                 {/* Actual Image */}
                 <img 
                   src={`/${proj.id}.jpg`} 
                   alt={proj.name}
                   className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                   loading="lazy"
                 />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
