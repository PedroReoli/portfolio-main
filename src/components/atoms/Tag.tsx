interface TagProps {
  label?: string
  children?: React.ReactNode
}

const Tag = ({ label, children }: TagProps) => {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold bg-zinc-900/90 text-zinc-300 border border-white/10 hover:border-emerald-500/50 hover:text-emerald-400 transition-all shadow-xs">
      {label || children}
    </span>
  )
}

export default Tag
