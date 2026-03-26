import type { ReactNode } from "react"

type SectionKickerProps = {
  children: ReactNode
  className?: string
}

const SectionKicker = ({ children, className = "" }: SectionKickerProps) => {
  const classes = ["section-kicker", className].filter(Boolean).join(" ")

  return <p className={classes}>{children}</p>
}

export default SectionKicker
