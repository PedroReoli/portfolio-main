import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiUser, FiTrendingUp, FiLayers, FiBriefcase, FiCpu, FiGlobe } from "react-icons/fi"
import { FaWhatsapp } from "react-icons/fa"
import { useLanguage } from "../../i18n/useLanguage"
import * as portfolioPT from "../../data/portfolio"
import * as portfolioEN from "../../data/portfolio.en"

export const Navbar: React.FC = () => {
  const { language, toggleLanguage } = useLanguage()
  const profile = language === "pt" ? portfolioPT.profile : portfolioEN.profile
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 70)

      const sections = ["about", "metrics", "projects", "experience", "skills"]
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
        metrics: "Métricas",
        projects: "Projetos",
        experience: "Carreira",
        skills: "Stack",
        contactCta: "WhatsApp",
        switchLang: "Mudar idioma",
      }
    : {
        about: "About",
        metrics: "Metrics",
        projects: "Projects",
        experience: "Career",
        skills: "Stack",
        contactCta: "WhatsApp",
        switchLang: "Switch language",
      }

  const navItems = [
    { id: "about", label: labels.about, icon: FiUser },
    { id: "metrics", label: labels.metrics, icon: FiTrendingUp },
    { id: "projects", label: labels.projects, icon: FiLayers },
    { id: "experience", label: labels.experience, icon: FiBriefcase },
    { id: "skills", label: labels.skills, icon: FiCpu },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4">
        
        <AnimatePresence mode="wait">
          {!isScrolled ? (
            /* ============================================================
               1. Top Hero Navbar State (Expansive & Elegant)
               ============================================================ */
            <motion.nav
              key="top-navbar"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-full mx-auto px-5 sm:px-8 py-3.5 flex items-center justify-between pointer-events-auto bg-[#09090b]/80 backdrop-blur-md border-b border-white/[0.08]"
            >
              {/* Brand Logo */}
              <a
                href="#about"
                className="flex items-center gap-2.5 group shrink-0"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-white group-hover:scale-125 transition-all duration-300 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                <span className="font-heading font-extrabold text-base text-white tracking-tight">
                  PedroReoli <span className="text-[#71717a] font-mono text-xs font-normal">/ dev</span>
                </span>
              </a>

              {/* Navigation Links with labels & icons */}
              <div className="hidden md:flex items-center gap-1.5 font-medium text-xs text-[#a1a1aa]">
                {navItems.map((item) => {
                  const Icon = item.icon
                  const isActive = activeSection === item.id
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                        isActive
                          ? "text-white font-semibold bg-white/[0.1] shadow-sm"
                          : "hover:text-white hover:bg-white/[0.04]"
                      }`}
                    >
                      <Icon className={`text-xs ${isActive ? "text-white" : "text-[#71717a]"}`} />
                      <span>{item.label}</span>
                    </a>
                  )
                })}
              </div>

              {/* Right Action Area */}
              <div className="flex items-center gap-3">
                {/* Language Switcher */}
                <button
                  type="button"
                  onClick={toggleLanguage}
                  className="flex items-center gap-1.5 rounded-full border border-white/10 bg-[#141419] px-3 py-1.5 text-[11px] font-mono font-medium text-[#a1a1aa] hover:text-white hover:border-white/25 transition-all"
                  title={labels.switchLang}
                  aria-label={labels.switchLang}
                >
                  <FiGlobe className="text-xs text-white" />
                  <span className={language === "pt" ? "text-white font-bold" : "opacity-60"}>PT</span>
                  <span className="opacity-30">/</span>
                  <span className={language === "en" ? "text-white font-bold" : "opacity-60"}>EN</span>
                </button>

                {/* Direct WhatsApp CTA Button */}
                <a
                  href={profile.phoneHref}
                  target="_blank"
                  rel="noreferrer"
                  className="motion-button-whatsapp text-xs px-4 py-1.5 flex items-center gap-2"
                >
                  <FaWhatsapp className="text-sm text-[#25d366]" />
                  <span className="hidden sm:inline font-semibold">{labels.contactCta}</span>
                </a>
              </div>
            </motion.nav>
          ) : (
            /* ============================================================
               2. Scrolled Compact Floating Pill State (Centered, Sleek)
               ============================================================ */
            <motion.div
              key="compact-navbar-container"
              initial={{ opacity: 0, y: -16, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.94 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center w-full"
            >
              <nav
                className="mx-auto px-3.5 py-1.5 rounded-full border border-white/15 bg-[#121216]/90 backdrop-blur-xl shadow-[0_12px_36px_rgba(0,0,0,0.7)] flex items-center gap-2 pointer-events-auto"
              >
                {/* Mini Brand Dot */}
                <a
                  href="#about"
                  className="flex items-center gap-1.5 text-xs font-heading font-bold text-white hover:text-zinc-300 transition-colors px-1.5 py-1"
                  title="PedroReoli"
                >
                  <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.9)]" />
                  <span className="hidden sm:inline text-[11px] font-mono text-[#a1a1aa]">/dev</span>
                </a>

                <div className="w-px h-4 bg-white/10 mx-0.5" />

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
                            ? "bg-white text-black shadow-md font-bold scale-105"
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

                <div className="w-px h-4 bg-white/10 mx-0.5" />

                {/* Compact Right Area */}
                <div className="flex items-center gap-1.5 shrink-0">
                  {/* Mini Language Switch */}
                  <button
                    type="button"
                    onClick={toggleLanguage}
                    className="px-2 py-1 rounded-full border border-white/10 bg-white/[0.05] text-[10px] font-mono font-bold text-[#d4d4d8] hover:text-white hover:bg-white/15 transition-all"
                    title={labels.switchLang}
                    aria-label={labels.switchLang}
                  >
                    {language.toUpperCase()}
                  </button>

                  {/* Circular WhatsApp Button */}
                  <a
                    href={profile.phoneHref}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-[#1c1c24] border border-[#25d366]/40 hover:border-[#25d366] text-[#25d366] flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-105 hover:bg-[#25d366]/10"
                    title={labels.contactCta}
                    aria-label={labels.contactCta}
                  >
                    <FaWhatsapp className="text-sm" />
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  )
}

export default Navbar
