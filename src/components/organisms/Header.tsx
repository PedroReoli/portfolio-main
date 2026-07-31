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
  return (
    <header className="fixed top-4 inset-x-0 mx-auto z-50 w-[95%] max-w-5xl">
      <div className="rounded-full bg-zinc-950/90 backdrop-blur-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.6)] px-4 md:px-6 py-2 flex items-center justify-between gap-3">
        {/* Brand Logo */}
        <Brand />

        {/* Center/Right Nav Links + Language Switch */}
        <div className="flex items-center gap-2 md:gap-4 shrink-0">
          <NavLinks items={navigation} />

          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/15 text-xs font-black text-zinc-200 hover:text-white hover:border-[#00f0ff]/50 hover:bg-zinc-800 transition-colors duration-150 shadow-md shrink-0"
            title={lang === "pt" ? "Switch to English" : "Mudar para Português"}
          >
            <span className="text-sm">{lang === "pt" ? "🇧🇷" : "🇺🇸"}</span>
            <span className="uppercase tracking-wider font-extrabold">{lang === "pt" ? "PT" : "EN"}</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
