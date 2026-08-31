import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa"
import { FiArrowDownRight, FiZap, FiMapPin, FiCode } from "react-icons/fi"

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
  return (
    <section
      id="hero"
      className="relative min-h-[88vh] flex items-center justify-center pt-28 pb-16 px-4 md:px-8 overflow-hidden"
    >
      {/* Background ambient lighting - Emerald & Violet accents */}
      <div className="absolute top-1/4 left-5 md:left-10 w-96 h-96 bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-5 md:right-10 w-96 h-96 bg-purple-500/12 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
        {/* Left Column: Core Info */}
        <div className="lg:col-span-8 space-y-6">
          {/* Location & Status Badges */}
          <div className="hero-fade-in flex flex-wrap items-center gap-2.5" style={{ animationDelay: "0s" }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 backdrop-blur-md border border-emerald-500/35 text-xs font-extrabold text-zinc-100 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#10b981]" />
              <span>Disponível PJ / Remoto</span>
            </div>

            {location && (
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-900/60 border border-white/10 text-xs font-semibold text-zinc-400">
                <FiMapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{location}</span>
              </div>
            )}
          </div>

          {/* Name, Title & Tagline */}
          <div className="hero-fade-in space-y-2" style={{ animationDelay: "0.08s" }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-none">
              {name}
            </h1>
            <p className="mt-3 text-lg md:text-2xl font-black tracking-tight flex items-center gap-2 bg-gradient-to-r from-emerald-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">
              <FiZap className="w-6 h-6 text-emerald-400 shrink-0" />
              <span>{role}</span>
            </p>
            {tagline && (
              <p className="text-xs md:text-sm font-bold text-zinc-400 mt-2 tracking-widest uppercase flex items-center gap-2">
                <FiCode className="w-4 h-4 text-purple-400" />
                <span>{tagline}</span>
              </p>
            )}
          </div>

          {/* Summary Paragraph */}
          <div className="hero-fade-in space-y-3 text-zinc-300 text-sm md:text-base leading-relaxed max-w-2xl" style={{ animationDelay: "0.16s" }}>
            {summary.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hero-fade-in flex flex-wrap items-center gap-3 pt-3" style={{ animationDelay: "0.24s" }}>
            <a
              href={phoneHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-emerald-400 text-zinc-950 font-black text-sm hover:bg-emerald-300 shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all duration-150 shrink-0 transform hover:-translate-y-0.5"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>Falar no WhatsApp</span>
            </a>

            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-zinc-900/90 border border-white/15 text-white font-bold text-sm hover:border-emerald-500/50 hover:bg-zinc-800 transition-all duration-150 shadow-md shrink-0"
            >
              <FaEnvelope className="w-4 h-4 text-zinc-400" />
              <span>Email</span>
            </a>

            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-full bg-zinc-900/90 border border-white/15 text-zinc-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-150 shadow-md shrink-0 flex items-center justify-center"
              title="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>

            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-full bg-zinc-900/90 border border-white/15 text-zinc-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-150 shadow-md shrink-0 flex items-center justify-center"
              title="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          </div>

          {/* Stats Mini Grid */}
          <div className="hero-fade-in grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-zinc-800/80 max-w-3xl" style={{ animationDelay: "0.32s" }}>
            {stats.slice(0, 3).map((st, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-zinc-900/60 backdrop-blur-md border border-white/10 hover:border-emerald-500/40 transition-colors duration-150 shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="text-2xl md:text-3xl font-black text-white flex items-baseline gap-1">
                    <span>{st.value}</span>
                    {st.suffix && (
                      <span className="text-xs font-bold text-emerald-400">
                        {st.suffix}
                      </span>
                    )}
                  </div>
                  <div className="text-xs font-extrabold text-zinc-200 mt-1 uppercase tracking-wider group-hover:text-emerald-400 transition-colors">
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

        {/* Right Column: Profile Image Card */}
        <div className="lg:col-span-4 relative flex justify-center lg:justify-end items-end min-h-[340px] lg:min-h-[460px]">
          <div className="relative w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[460px] rounded-[2.5rem] overflow-hidden border border-emerald-500/35 bg-zinc-950/60 shadow-[0_0_40px_rgba(16,185,129,0.15)] group">
            <img
              src="/eu-profissional.png"
              alt={name}
              className="w-full h-full object-cover object-top opacity-85 group-hover:opacity-100 transition-all duration-300 filter grayscale group-hover:grayscale-0 group-hover:scale-105"
            />
            {/* Overlay gradient mask */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080a11] via-transparent to-transparent opacity-90 pointer-events-none" />

            <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-zinc-950/90 backdrop-blur-xl border border-emerald-500/30 text-xs flex items-center justify-between text-zinc-200 shadow-xl pointer-events-none">
              <div className="flex flex-col">
                <span className="font-extrabold text-white text-sm">Pedro Lucas Reis</span>
                <span className="text-[10px] font-bold text-emerald-400">Full Stack Engineer</span>
              </div>
              <FiArrowDownRight className="w-4 h-4 text-emerald-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
