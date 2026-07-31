const Brand = () => {
  return (
    <a href="#hero" className="flex items-center gap-2.5 group shrink-0">
      <div className="w-9 h-9 rounded-full bg-[#cef441]/10 border border-[#cef441]/30 flex items-center justify-center text-[#cef441] font-black text-xs group-hover:bg-[#cef441] group-hover:text-zinc-950 group-hover:shadow-[0_0_15px_rgba(206,244,65,0.4)] transition-all duration-300">
        PR
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-extrabold text-white tracking-tight group-hover:text-[#cef441] transition-colors">
            Pedro Reis
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#cef441] animate-pulse" />
        </div>
        <span className="text-[10px] text-zinc-400 font-semibold tracking-wider uppercase">
          Full-Stack Eng.
        </span>
      </div>
    </a>
  )
}

export default Brand
