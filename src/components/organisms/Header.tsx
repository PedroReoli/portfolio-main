import { useState } from "react"
import { Home, User, Briefcase, Layers, Mail, Menu, X } from "lucide-react"

type HeaderProps = {
  navigation: readonly { label: string; href: string }[]
}

const mapIcon = (label: string) => {
  switch(label.toLowerCase()) {
    case 'resumo': return User;
    case 'projetos': return Briefcase;
    case 'expertise': return Layers;
    case 'experiência': return Briefcase;
    case 'formação': return Layers;
    case 'contato': return Mail;
    default: return Home;
  }
}

const Header = ({ navigation }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false)

  // Top navigation for Mobile
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-end p-6 md:hidden">
        <button 
          className="text-white z-50 p-3 bg-[#0a0a0a]/80 backdrop-blur-md rounded-full border border-white/10 active:scale-90 transition-transform"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Floating Pill Navigation for Desktop/Tablet */}
      <div className="hidden md:block fixed bottom-8 left-1/2 -translate-x-1/2 z-[100]">
        <nav className="flex items-center bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 p-1.5 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
          <a
            href="#home"
            className="group relative flex items-center justify-center p-3 sm:px-5 sm:py-3 rounded-full text-zinc-500 hover:text-[#cef441] hover:bg-white/5 transition-all outline-none"
          >
            <Home size={20} className="sm:hidden" />
            <span className="hidden sm:block text-xs font-bold uppercase tracking-widest">Home</span>
          </a>
          
          <div className="w-[1px] h-6 bg-white/10 mx-1"></div>

          {navigation.map((item) => {
            const Icon = mapIcon(item.label)
            return (
              <a
                key={item.href}
                href={item.href}
                aria-label={item.label}
                className="group relative flex items-center justify-center p-3 sm:px-5 sm:py-3 rounded-full text-zinc-500 hover:text-[#cef441] hover:bg-white/5 transition-all outline-none"
              >
                <Icon size={20} className="sm:hidden" />
                <span className="hidden sm:block text-xs font-bold uppercase tracking-widest">{item.label}</span>
                
                {/* Tooltip for Mobile actually it is hidden on desktop anyway */}
                <span className="absolute -top-12 scale-0 group-hover:scale-100 transition-transform origin-bottom bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-2 rounded-lg whitespace-nowrap shadow-xl pointer-events-none sm:hidden">
                  {item.label}
                </span>
              </a>
            )
          })}
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#0a0a0a]/95 backdrop-blur-2xl z-40 transition-all duration-500 ease-[0.22,1,0.36,1] flex flex-col items-center justify-center gap-8 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className={`flex flex-col items-center gap-8 transition-transform duration-500 delay-100 ${
            isOpen ? 'translate-y-0 scale-100' : 'translate-y-12 scale-95'
          }`}
        >
          <a 
            href="#home"
            onClick={() => setIsOpen(false)}
            className="text-2xl font-black uppercase tracking-widest text-[#cef441] transition-transform active:scale-95"
          >
            Home
          </a>
          {navigation.map((item) => (
            <a 
              key={item.href} 
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-black uppercase tracking-widest text-zinc-400 hover:text-white transition-colors active:scale-95"
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
