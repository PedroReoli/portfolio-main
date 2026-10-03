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
          if (rect.top <= 250 && rect.bottom >= 250) {
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
    <div className="fixed top-3 sm:top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav
        initial={{ opacity: 0, y: -16, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto mx-auto px-3.5 sm:px-4 py-1.5 rounded-full bg-[#121216]/92 backdrop-blur-2xl border border-white/15 shadow-[0_16px_40px_rgba(0,0,0,0.85)] flex items-center gap-2 sm:gap-3"
      >
        {/* Mini Brand Dot */}
        <a
          href="#about"
          className="flex items-center gap-1.5 text-xs font-heading font-bold text-white hover:text-zinc-300 transition-colors px-1 py-1"
          title="Pedro Reoli"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.9)]" />
          <span className="hidden xs:inline text-xs font-heading font-bold text-white">PedroReoli</span>
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
                className={`relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-white text-black font-bold shadow-md scale-105"
                    : "text-[#a1a1aa] hover:text-white hover:bg-white/[0.08]"
                }`}
                title={item.label}
                aria-label={item.label}
              >
                <Icon className="text-xs" />
              </a>
            )
          })}
        </div>

        <div className="w-px h-4 bg-white/10 mx-0.5 shrink-0" />

        {/* Compact Right Area: Identical Dimensions (w-8 h-8 / 32px) */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Language Switch Button */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="w-8 h-8 rounded-full border border-white/15 bg-[#141419] hover:bg-white/15 text-[11px] font-mono font-bold text-white flex items-center justify-center transition-all shadow-sm hover:scale-105 active:scale-95"
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
            className="w-8 h-8 rounded-full bg-[#141419] border border-[#25d366]/40 hover:border-[#25d366] text-[#25d366] flex items-center justify-center transition-all shadow-sm hover:scale-105 hover:bg-[#25d366]/15 active:scale-95"
            title={labels.contactCta}
            aria-label={labels.contactCta}
          >
            <FaWhatsapp className="text-sm" />
          </a>
        </div>
      </motion.nav>
    </div>
  )
}

export default Navbar
