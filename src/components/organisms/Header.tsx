import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

type HeaderProps = {
  name: string
  role: string
  navigation: readonly { label: string; href: string }[]
}

const Header = ({ name, role, navigation }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => { document.body.style.overflow = "unset" }
  }, [isOpen])

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#09090b]/80 backdrop-blur-md border-b border-zinc-800/50 py-4" : "bg-transparent py-6 lg:py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-full flex items-center justify-between">
          
          {/* Brand */}
          <a href="#home" className="group flex items-center gap-3 z-50 active:scale-95 transition-transform" onClick={() => setIsOpen(false)}>
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-zinc-950 font-black tracking-tighter text-lg shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:scale-105 transition-transform">
              PR
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold leading-none tracking-tight text-lg">{name}</span>
              <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest leading-none mt-1.5">{role}</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 bg-zinc-900/50 px-6 py-2.5 rounded-full border border-zinc-800/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] backdrop-blur-sm">
            {navigation.map((item) => (
              <a 
                key={item.href} 
                href={item.href}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Toggle Button */}
          <button 
            className="md:hidden text-zinc-400 hover:text-white z-50 p-2 -mr-2 transition-transform active:scale-90"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Alternar menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#09090b]/95 backdrop-blur-xl z-40 transition-all duration-500 ease-[0.22,1,0.36,1] flex flex-col items-center justify-center gap-8 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className={`flex flex-col items-center gap-8 transition-transform duration-500 delay-100 ${
            isOpen ? 'translate-y-0 scale-100' : 'translate-y-12 scale-95'
          }`}
        >
          {navigation.map((item) => (
            <a 
              key={item.href} 
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-bold tracking-tight text-zinc-400 hover:text-white transition-colors active:scale-95"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default Header
