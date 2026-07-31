import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa"
import { FiArrowDownRight, FiZap, FiMapPin } from "react-icons/fi"

interface Highlight {
  readonly label: string
  readonly value: string
  readonly suffix?: string
  readonly description: string
}

interface HeroSectionProps {
  name: string
  role: string
  tagline?: string
  location?: string
  summary: readonly string[]
  stats: readonly Highlight[]
  email: string
  linkedin: string
  github: string
  phoneHref: string
}

const HeroSection = ({
  name,
  role,
  tagline,
  location,
  summary,
  stats,
  email,
  linkedin,
  github,
  phoneHref,
}: HeroSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        onComplete: () => {
          // Clear GSAP inline transforms to prevent sub-pixel hover jitter
          gsap.set(
            [".hero-anim-item", imageRef.current],
            { clearProps: "transform,opacity" }
          )
        },
      })

      tl.fromTo(
        ".hero-anim-item",
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.08 }
      )

      if (imageRef.current) {
        tl.fromTo(
          imageRef.current,
          { opacity: 0, x: 20 },
          { opacity: 0.75, x: 0, duration: 0.5 },
          "-=0.3"
        )
      }
    },
    { scope: containerRef }
  )

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-12 px-4 md:px-8 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left Column: Core Info */}
        <div className="lg:col-span-8 space-y-6">
          {/* Location & Status Badges */}
          <div className="hero-anim-item flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 backdrop-blur-md border border-[#00f0ff]/30 text-xs font-bold text-zinc-200 shadow-md">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00f0ff] animate-pulse shadow-[0_0_10px_#00f0ff]" />
              <span>Disponível para Projetos & Engajamentos</span>
            </div>

            {location && (
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-900/60 border border-white/5 text-xs font-medium text-zinc-400">
                <FiMapPin className="w-3.5 h-3.5 text-[#00f0ff]" />
                <span>{location}</span>
              </div>
            )}
          </div>

          {/* Name, Title & Tagline */}
          <div className="hero-anim-item space-y-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-none">
              {name}
            </h1>
            <p className="mt-3 text-lg md:text-xl font-extrabold text-[#00f0ff] tracking-tight flex items-center gap-2">
              <FiZap className="w-5 h-5 text-[#00f0ff] shrink-0" />
              <span>{role}</span>
            </p>
            {tagline && (
              <p className="text-xs md:text-sm font-bold text-zinc-400 mt-1.5 tracking-wider uppercase">
                {tagline}
              </p>
            )}
          </div>

          {/* Summary Paragraph */}
          <div className="hero-anim-item space-y-2.5 text-zinc-300 text-sm md:text-base leading-relaxed max-w-2xl">
            {summary.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Action Buttons (Strictly stable, zero layout shift) */}
          <div className="hero-anim-item flex flex-wrap items-center gap-3 pt-2">
            <a
              href={phoneHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00f0ff] text-zinc-950 font-extrabold text-sm hover:bg-[#38bdf8] shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-colors duration-150 shrink-0"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>Falar no WhatsApp</span>
            </a>

            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-zinc-900/90 border border-white/15 text-white font-bold text-sm hover:border-[#00f0ff]/50 hover:bg-zinc-800 transition-colors duration-150 shadow-md shrink-0"
            >
              <FaEnvelope className="w-4 h-4 text-zinc-400" />
              <span>Email</span>
            </a>

            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-zinc-900/90 border border-white/15 text-zinc-300 hover:text-[#00f0ff] hover:border-[#00f0ff]/50 transition-colors duration-150 shadow-md shrink-0 flex items-center justify-center"
              title="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>

            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-zinc-900/90 border border-white/15 text-zinc-300 hover:text-[#00f0ff] hover:border-[#00f0ff]/50 transition-colors duration-150 shadow-md shrink-0 flex items-center justify-center"
              title="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          </div>

          {/* Stats Mini Grid (3 Cards Only) */}
          <div className="hero-anim-item grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5 border-t border-zinc-800/80 max-w-3xl">
            {stats.slice(0, 3).map((st, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-zinc-900/70 backdrop-blur-md border border-white/10 hover:border-[#00f0ff]/40 transition-colors duration-150 shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl md:text-3xl font-black text-white flex items-baseline gap-1">
                    <span>{st.value}</span>
                    {st.suffix && (
                      <span className="text-xs font-bold text-[#00f0ff]">
                        {st.suffix}
                      </span>
                    )}
                  </div>
                  <div className="text-xs font-bold text-white mt-1 uppercase tracking-wider">
                    {st.label}
                  </div>
                </div>
                <div className="text-xs text-zinc-400 font-medium leading-relaxed mt-2 pt-2 border-t border-white/5">
                  {st.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Decorative Profile Image */}
        <div className="lg:col-span-4 relative flex justify-center lg:justify-end items-end min-h-[320px] lg:min-h-[440px]">
          <div className="relative w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[450px] rounded-[2rem] overflow-hidden border border-[#00f0ff]/30 bg-zinc-950/50 shadow-[0_0_30px_rgba(0,240,255,0.1)]">
            <img
              ref={imageRef}
              src="/eu-profissional.png"
              alt={name}
              className="w-full h-full object-cover object-top opacity-80 hover:opacity-100 transition-opacity duration-200 filter grayscale hover:grayscale-0"
            />
            {/* Overlay gradient mask */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080a11] via-transparent to-transparent opacity-90 pointer-events-none" />

            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-zinc-900/90 backdrop-blur-xl border border-white/15 text-xs flex items-center justify-between text-zinc-200 shadow-lg pointer-events-none">
              <span className="font-bold text-white">Pedro Lucas Reis</span>
              <FiArrowDownRight className="w-4 h-4 text-[#00f0ff]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
