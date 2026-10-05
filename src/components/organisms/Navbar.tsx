import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FiUser, FiLayers, FiBriefcase, FiCpu } from "react-icons/fi"
import { FaWhatsapp } from "react-icons/fa"
import { useLanguage } from "../../i18n/useLanguage"
import * as portfolioPT from "../../data/portfolio"
import * as portfolioEN from "../../data/portfolio.en"

export const Navbar: React.FC = () => {
  const { language, toggleLanguage } = useLanguage()
  const profile = language === "pt" ? portfolioPT.profile : portfolioEN.profile
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "experience", "skills"]
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 200 && rect.bottom >= 150) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const labels = language === "pt"
    ? {
        about: "Sobre",
        projects: "Projetos",
        experience: "Carreira",
        skills: "Stack",
        contactCta: "WhatsApp",
        switchLang: "Mudar idioma (PT / EN)",
      }
    : {
        about: "About",
        projects: "Projects",
        experience: "Career",
        skills: "Stack",
        contactCta: "WhatsApp",
        switchLang: "Switch language (PT / EN)",
      }

  const navItems = [
    { id: "about", label: labels.about, icon: FiUser },
    { id: "projects", label: labels.projects, icon: FiLayers },
    { id: "experience", label: labels.experience, icon: FiBriefcase },
    { id: "skills", label: labels.skills, icon: FiCpu },
  ]

  return (
    <div className="fixed top-3 left-0 right-0 z-50 flex justify-center px-2 sm:px-4 pointer-events-none">
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto mx-auto px-2.5 sm:px-4 py-1.5 rounded-full bg-[#101015]/95 backdrop-blur-2xl border border-white/15 shadow-[0_16px_40px_rgba(0,0,0,0.85)] flex items-center gap-1 sm:gap-2.5 max-w-[96vw]"
      >
        {/* Brand Dot */}
        <a
          href="#about"
          className="flex items-center gap-1.5 text-xs font-heading font-bold text-white hover:text-zinc-300 transition-colors px-2 py-1.5"
          title="Pedro Reoli"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-[#25d366] shadow-[0_0_8px_rgba(37,211,102,0.8)]" />
          <span className="text-xs font-heading font-bold text-white">Pedro<span className="text-zinc-400">Reoli</span></span>
        </a>

        <div className="w-px h-4 bg-white/10 mx-0.5 shrink-0" />

        {/* Compact Nav Icon Buttons */}
        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative flex items-center justify-center w-9 h-9 sm:w-8.5 sm:h-8.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-white text-[#09090b] font-bold shadow-md scale-105"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.08]"
                }`}
                title={item.label}
                aria-label={item.label}
              >
                <Icon className="text-sm" />
              </a>
            )
          })}
        </div>

        <div className="w-px h-4 bg-white/10 mx-0.5 shrink-0" />

        {/* Right Area: Language Switcher + WhatsApp CTA */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Language Switch Button */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="w-9 h-9 sm:w-8.5 sm:h-8.5 rounded-full border border-white/15 bg-[#141419] hover:bg-white/15 text-[11px] font-mono font-bold text-white flex items-center justify-center transition-all shadow-sm active:scale-95"
            title={labels.switchLang}
            aria-label={labels.switchLang}
          >
            {language.toUpperCase()}
          </button>

          {/* WhatsApp Button */}
          <a
            href={profile.phoneHref}
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 sm:w-8.5 sm:h-8.5 rounded-full bg-[#141419] border border-[#25d366]/40 hover:border-[#25d366] text-[#25d366] flex items-center justify-center transition-all shadow-sm hover:scale-105 hover:bg-[#25d366]/15 active:scale-95"
            title={labels.contactCta}
            aria-label={labels.contactCta}
          >
            <FaWhatsapp className="text-base" />
          </a>
        </div>
      </motion.nav>
    </div>
  )
}

export default Navbar
