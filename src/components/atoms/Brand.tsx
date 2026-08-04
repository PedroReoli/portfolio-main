const Brand = () => {
  return (
    <a
      href="#hero"
      className="flex items-center gap-2.5 group cursor-pointer shrink-0"
    >
      {/* Circular Glowing Logo Mark */}
      <div className="relative w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-xs font-black text-emerald-400 group-hover:bg-emerald-400 group-hover:text-zinc-950 transition-colors duration-150 shadow-[0_0_12px_rgba(16,185,129,0.2)]">
        <span>PR</span>
      </div>

      <div className="flex flex-col">
        <span className="text-xs font-black tracking-tight text-white group-hover:text-emerald-400 transition-colors duration-150 leading-none">
          Pedro Lucas
        </span>
        <span className="text-[10px] font-semibold text-zinc-400 flex items-center gap-1 mt-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]" />
          <span>Full-Stack Eng.</span>
        </span>
      </div>
    </a>
  )
}

export default Brand
