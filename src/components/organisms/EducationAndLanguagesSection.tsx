import React from "react"
import { motion } from "framer-motion"
import * as portfolioPT from "../../data/portfolio"
import * as portfolioEN from "../../data/portfolio.en"
import { FiBookOpen, FiGlobe, FiAward, FiCheckCircle } from "react-icons/fi"
import { FaWhatsapp } from "react-icons/fa"
import { useLanguage } from "../../i18n/useLanguage"

export const EducationAndLanguagesSection: React.FC = () => {
  const { language } = useLanguage()
  const data = language === "pt" ? portfolioPT : portfolioEN
  const { languages, educationList, profile } = data

  const labels = language === "pt"
    ? {
        kicker: "Base Acadêmica & Comunicação",
        title: "Formação & Idiomas",
        description: "Fundamentos sólidos em Ciência da Computação, especialização técnica contínua e comunicação profissional.",
        educationTitle: "Formação Acadêmica & Certificações",
        languagesTitle: "Idiomas & Comunidade",
        ctaTitle: "Vamos Construir Juntos?",
        ctaDesc: "Aberto a desafios técnicos de alta complexidade, desenvolvimento de ecossistemas corporativos e liderança em engenharia.",
        ctaBtn: "Conversar no WhatsApp",
      }
    : {
        kicker: "Academic Background & Communication",
        title: "Education & Languages",
        description: "Solid foundations in Computer Science, ongoing technical specialization, and professional communication.",
        educationTitle: "Academic Education & Certifications",
        languagesTitle: "Languages & Community",
        ctaTitle: "Let's Build Together",
        ctaDesc: "Open to high-complexity technical challenges, enterprise ecosystems, and senior engineering roles.",
        ctaBtn: "Chat on WhatsApp",
      }

  return (
    <section id="education" className="py-20 sm:py-28 bg-[#07080b] text-[#ffffff] border-b border-white/[0.08] relative overflow-hidden">
      
      {/* Luz ambiente suave */}
      <div 
        className="absolute top-1/2 left-1/3 w-[500px] h-[350px] bg-[#0ea5e9]/[0.025] rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10 w-full">
        
        {/* Cabeçalho da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="mb-14 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#38bdf8] uppercase tracking-wider font-semibold mb-2">
            <FiBookOpen className="text-sm" />
            {labels.kicker}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight">
            {labels.title}
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mt-2 font-body leading-relaxed">
            {labels.description}
          </p>
        </motion.div>

        {/* Grid de 2 Colunas: Formação Acadêmica à Esquerda, Idiomas & Contato à Direita */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LADO ESQUERDO: FORMAÇÃO ACADÊMICA & CERTIFICAÇÕES */}
          <div className="lg:col-span-6 space-y-5">
            <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold flex items-center gap-2">
              <FiAward className="text-[#38bdf8] text-sm" />
              <span>{labels.educationTitle}</span>
            </h3>

            {educationList.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0c0f16] border border-white/[0.08] hover:border-white/20 transition-all shadow-xl"
              >
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="text-xs font-mono text-[#10b981] font-semibold">
                    {item.period} • {item.status}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/[0.04] text-[10px] font-mono text-zinc-400 border border-white/10">
                    Graduação & Certificação
                  </span>
                </div>

                <h4 className="text-lg font-heading font-extrabold text-white leading-snug">
                  {item.degree}
                </h4>

                <p className="text-xs font-mono text-zinc-400 mt-1">
                  {item.institution}
                </p>

                {idx === 0 && (
                  <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-1.5 text-xs text-zinc-300 font-sans">
                    <div className="flex items-start gap-2">
                      <FiCheckCircle className="text-[#10b981] w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <span>Foco em Engenharia de Software, Estrutura de Dados e Bancos de Dados Relacionais.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FiCheckCircle className="text-[#10b981] w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <span>Extensão universitária e mentoria de tecnologia e IA em parceria com o SEBRAE.</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* LADO DIREITO: IDIOMAS, COMUNIDADE E CTA */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold flex items-center gap-2">
              <FiGlobe className="text-[#10b981] text-sm" />
              <span>{labels.languagesTitle}</span>
            </h3>

            {/* Card de Idiomas & Mentoria */}
            <div className="p-6 rounded-2xl bg-[#0c0f16] border border-white/[0.08] space-y-4 shadow-xl">
              {languages.map((lang, lIdx) => (
                <div
                  key={lIdx}
                  className="pb-3 border-b border-white/[0.06] last:border-b-0 last:pb-0"
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-sm font-heading font-bold text-white">
                      {lang.name}
                    </span>
                    <span className="text-xs font-mono text-[#38bdf8] font-medium">
                      {lang.level}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    {lang.info}
                  </p>
                </div>
              ))}
            </div>

            {/* Card de Contato Direto */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#0c0f16] to-[#121622] border border-white/[0.1] shadow-2xl">
              <h4 className="text-base sm:text-lg font-heading font-extrabold text-white mb-2">
                {labels.ctaTitle}
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed mb-5">
                {labels.ctaDesc}
              </p>

              <a
                href={profile.phoneHref}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-5 rounded-xl bg-[#25d366]/20 hover:bg-[#25d366]/30 text-white font-heading font-semibold text-xs sm:text-sm flex items-center justify-center gap-2.5 border border-[#25d366]/40 transition-all shadow-lg"
              >
                <FaWhatsapp className="text-[#25d366] text-lg" />
                <span>{labels.ctaBtn}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default EducationAndLanguagesSection
