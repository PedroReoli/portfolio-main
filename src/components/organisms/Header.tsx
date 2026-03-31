import { useState, useEffect } from "react"
import { Home, User, Briefcase, Layers, Mail, Code2, Trophy } from "lucide-react"

type HeaderProps = {
  navigation: readonly { label: string; href: string }[]
}

const mapIcon = (label: string) => {
  switch(label.toLowerCase()) {
    case 'resumo': return User;
    case 'projetos': return Code2;
    case 'experiência': return Trophy;
    case 'expertise': return Layers;
    case 'formação': return Briefcase;
    case 'contato': return Mail;
    default: return Home;
  }
}

const Header = ({ navigation }: HeaderProps) => {
  const [activeHash, setActiveHash] = useState("#home")

  useEffect(() => {
    // Simple scroll spy logic mapping each section's offset
    const handleScroll = () => {
      const scrollY = window.scrollY
      const sections = ["home", ...navigation.map(n => n.href.replace('#', ''))]
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && scrollY >= el.offsetTop - 300) {
          setActiveHash(`#${sections[i]}`)
          break
        }
      }
    }
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [navigation])

  const navItems = [{ label: "Home", href: "#home" }, ...navigation]

  return (
    <div className="fixed bottom-6 lg:bottom-10 left-1/2 -translate-x-1/2 z-[100] px-4">
      <nav className="flex items-center gap-1 sm:gap-2 bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 p-2 lg:p-2.5 rounded-full shadow-[0_0_50px_rgba(0,0,0,0.8)]">
        
        {navItems.map((item) => {
          const Icon = item.href === "#home" ? Home : mapIcon(item.label)
          const isActive = activeHash === item.href

          return (
            <a
              key={item.href}
              href={item.href}
              aria-label={item.label}
              className={`group relative flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full transition-all outline-none ${
                isActive 
                  ? "bg-[#cef441] text-black shadow-[0_0_20px_rgba(206,244,65,0.4)]" 
                  : "bg-transparent text-zinc-500 hover:text-white"
              }`}
            >
              <Icon size={isActive ? 20 : 22} strokeWidth={isActive ? 2.5 : 1.5} />
              
              {/* Tooltip */}
              <span className="absolute -top-12 scale-0 group-hover:scale-100 transition-transform origin-bottom bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-2 rounded-md whitespace-nowrap shadow-xl pointer-events-none">
                {item.label}
              </span>
            </a>
          )
        })}
      </nav>
    </div>
  )
}

export default Header
