import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"
import Brand from "../atoms/Brand"
import NavLinks from "../molecules/NavLinks"

interface NavItem {
  readonly label: string
  readonly href: string
}

interface HeaderProps {
  navigation: readonly NavItem[]
  lang: "pt" | "en"
  toggleLang: () => void
}

const Header = ({ navigation, lang, toggleLang }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-4 inset-x-0 mx-auto z-50 w-[95%] max-w-5xl">
      <div className="rounded-full bg-zinc-950/90 backdrop-blur-2xl border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.8)] px-4 md:px-6 py-2.5 flex items-center justify-between gap-3 relative z-50">
        {/* Brand Logo */}
        <Brand />

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <NavLinks items={navigation} />

          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/15 text-xs font-black text-zinc-200 hover:text-white hover:border-emerald-500/50 hover:bg-zinc-800 transition-all duration-150 shadow-md shrink-0"
            title={lang === "pt" ? "Switch to English" : "Mudar para Português"}
          >
            <span className="text-sm">{lang === "pt" ? "🇧🇷" : "🇺🇸"}</span>
            <span className="uppercase tracking-wider font-extrabold">{lang === "pt" ? "PT" : "EN"}</span>
          </button>
        </div>

        {/* Mobile Menu Actions (Language switch + Hamburger toggle) */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 px-3 py-1 rounded-full bg-zinc-900 border border-white/15 text-xs font-bold text-zinc-200"
          >
            <span className="text-xs">{lang === "pt" ? "🇧🇷" : "🇺🇸"}</span>
            <span className="uppercase font-extrabold">{lang === "pt" ? "PT" : "EN"}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-zinc-900 border border-white/15 text-zinc-300 hover:text-emerald-400 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-14 left-0 right-0 mx-auto w-full p-4 rounded-3xl bg-zinc-950/95 backdrop-blur-2xl border border-emerald-500/30 shadow-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200 z-40">
          <nav className="flex flex-col gap-1">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-2xl text-sm font-bold text-zinc-200 hover:text-emerald-400 hover:bg-emerald-500/10 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
