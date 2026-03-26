import type { AnchorHTMLAttributes, ReactNode } from "react"

type ButtonVariant = "primary" | "ghost"

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  variant?: ButtonVariant
}

const Button = ({ children, className = "", variant = "primary", ...props }: ButtonProps) => {
  const classes = ["button", `button--${variant}`, className].filter(Boolean).join(" ")

  return (
    <a className={classes} {...props}>
      {children}
    </a>
  )
}

export default Button
