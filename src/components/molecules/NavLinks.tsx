type NavItem = {
  label: string
  href: string
}

type NavLinksProps = {
  items: readonly NavItem[]
}

const NavLinks = ({ items }: NavLinksProps) => {
  return (
    <nav className="nav" aria-label="Navegação principal">
      {items.map((item) => (
        <a key={item.href} href={item.href}>
          {item.label}
        </a>
      ))}
    </nav>
  )
}

export default NavLinks
