type ContactLink = {
  label: string
  href: string
}

type ContactGridProps = {
  links: readonly ContactLink[]
}

const ContactGrid = ({ links }: ContactGridProps) => {
  return (
    <div className="hero__contact-grid">
      {links.map((link) => (
        <a key={link.href} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined}>
          {link.label}
        </a>
      ))}
    </div>
  )
}

export default ContactGrid
