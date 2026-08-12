import React from "react"
import { motion } from "framer-motion"
import { profile } from "../../data/portfolio"
import { 
  FiGithub, 
  FiLinkedin, 
  FiMail, 
  FiMapPin, 
  FiPhone, 
  FiCode,
  FiCheckCircle
} from "react-icons/fi"

export const GitHubProfileHeader: React.FC = () => {
  return (
    <header className="border-b border-[#30363d] bg-[#0d1117] pt-10 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Profile Card / Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Real Photo Avatar & Basic Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left justify-between"
          >
            <div className="w-full flex flex-col items-center lg:items-start">
              {/* User Real Photo Avatar */}
              <div className="flex flex-col items-center lg:items-start mb-6">
                <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-gradient-to-tr from-[#1f6feb] via-[#58a6ff] to-[#3fb950] p-[3px] shadow-2xl relative group">
                  <div className="w-full h-full rounded-full bg-[#161b22] border-2 border-[#0d1117] overflow-hidden">
                    <img
                      src="/eu-profissional.png"
                      alt={profile.name}
                      className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500"
                      loading="eager"
                    />
                  </div>
                </div>

                {/* Online / Availability status pill placed cleanly below avatar */}
                <div className="mt-3.5 bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1.5 flex items-center gap-2 shadow-md">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3fb950] animate-pulse"></span>
                  <span className="text-xs font-semibold text-[#c9d1d9] font-mono">🟢 Disponível PJ / Remoto</span>
                </div>
              </div>

              {/* Names & Taglines */}
              <h1 className="text-3xl sm:text-4xl font-bold text-[#f0f6fc] tracking-tight mb-1">
                {profile.name}
              </h1>
              <p className="text-base font-mono text-[#8b949e] mb-2.5">@PedroReoli</p>
              <p className="text-base font-semibold text-[#58a6ff] mb-4">
                {profile.role}
              </p>

              {/* Status box */}
              <div className="w-full bg-[#161b22] border border-[#30363d] rounded-2xl p-4 mb-6 text-sm text-[#c9d1d9] flex items-center gap-3 shadow-md">
                <FiCheckCircle className="text-[#3fb950] shrink-0 text-xl" />
                <span>Focado em Frontend, React, Next.js & IAs operacionais (Claude Code).</span>
              </div>
            </div>

            {/* Social & Contact Links */}
            <div className="w-full space-y-2.5 text-sm text-[#8b949e]">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-[#c9d1d9] hover:text-[#58a6ff] transition-colors py-1.5 px-2 rounded-xl hover:bg-[#161b22]"
              >
                <FiGithub className="text-lg text-[#8b949e]" />
                <span>github.com/PedroReoli</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-[#c9d1d9] hover:text-[#58a6ff] transition-colors py-1.5 px-2 rounded-xl hover:bg-[#161b22]"
              >
                <FiLinkedin className="text-lg text-[#8b949e]" />
                <span>linkedin.com/in/pedro-lucas-reis</span>
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-[#c9d1d9] hover:text-[#58a6ff] transition-colors py-1.5 px-2 rounded-xl hover:bg-[#161b22]"
              >
                <FiMail className="text-lg text-[#8b949e]" />
                <span>{profile.email}</span>
              </a>
              <a
                href={profile.phoneHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-[#c9d1d9] hover:text-[#3fb950] transition-colors py-1.5 px-2 rounded-xl hover:bg-[#161b22]"
              >
                <FiPhone className="text-lg text-[#8b949e]" />
                <span>{profile.phoneLabel}</span>
              </a>
              <div className="flex items-center gap-3 py-1.5 px-2">
                <FiMapPin className="text-lg text-[#8b949e]" />
                <span>{profile.location}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: README.md Style Intro (Full Height & Prominent Space) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-8 flex flex-col justify-between"
          >
            {/* README.md Container */}
            <div className="gh-card p-7 sm:p-9 relative h-full flex flex-col justify-between border-t-4 border-t-[#58a6ff]">
              <div>
                <div className="flex items-center justify-between border-b border-[#30363d] pb-4 mb-6">
                  <div className="flex items-center gap-2.5 text-sm text-[#8b949e] font-mono">
                    <FiCode className="text-[#58a6ff] text-lg" />
                    <span className="font-semibold text-[#f0f6fc]">PedroReoli / README.md</span>
                  </div>
                  <span className="text-xs font-mono text-[#3fb950] bg-[#238636]/10 border border-[#238636]/30 px-3 py-1 rounded-full">
                    Visão Geral
                  </span>
                </div>

                <div className="space-y-5 text-base sm:text-lg text-[#c9d1d9] leading-relaxed">
                  <p className="text-xl sm:text-2xl font-bold text-[#f0f6fc] leading-snug">
                    👋 Olá! Sou Desenvolvedor Full Stack Pleno com especialização em Frontend.
                  </p>
                  {profile.summary.map((paragraph, index) => (
                    <p key={index} className="text-base sm:text-lg text-[#c9d1d9] leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Core Technologies Pills */}
              <div className="mt-8 pt-6 border-t border-[#30363d]">
                <p className="text-xs font-semibold text-[#8b949e] uppercase tracking-wider mb-3.5">
                  Stack Principal & Especialidades
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    "React", "Next.js", "TypeScript", "Node.js", 
                    "Tailwind CSS", "Radix UI", "React Query", 
                    "Express/Fastify", "C# & ASP.NET", "PostgreSQL", 
                    "SQL Server", "Supabase", "Claude Code Skills"
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-[#21262d] text-[#c9d1d9] border border-[#30363d] rounded-full text-xs font-mono font-medium hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </header>
  )
}

export default GitHubProfileHeader
