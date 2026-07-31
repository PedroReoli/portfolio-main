interface NavItem {
  readonly label: string
  readonly href: string
}

interface NavLinksProps {
  items: readonly NavItem[]
  onItemClick?: () => void
}

const NavLinks = ({ items, onItemClick }: NavLinksProps) => {
  return (
    <nav className="flex items-center gap-1 shrink-0">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={onItemClick}
          className="px-3.5 py-1.5 rounded-full text-xs font-bold text-zinc-300 hover:text-white hover:bg-[#00f0ff]/15 hover:border hover:border-[#00f0ff]/40 border border-transparent transition-colors duration-150 flex items-center justify-center shrink-0"
        >
          <span>{item.label}</span>
        </a>
      ))}
    </nav>
  )
}

export default NavLinks
