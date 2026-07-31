interface TagProps {
  children: React.ReactNode
}

const Tag = ({ children }: TagProps) => {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold bg-zinc-900/90 text-zinc-300 border border-white/10 hover:border-[#00f0ff]/50 hover:text-[#00f0ff] transition-all shadow-xs">
      {children}
    </span>
  )
}

export default Tag
