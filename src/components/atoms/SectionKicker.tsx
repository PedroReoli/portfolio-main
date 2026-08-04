interface SectionKickerProps {
  children: React.ReactNode
}

const SectionKicker = ({ children }: SectionKickerProps) => {
  return (
    <span className="inline-block text-emerald-400 text-xs font-bold tracking-widest uppercase mb-1">
      {children}
    </span>
  )
}

export default SectionKicker
