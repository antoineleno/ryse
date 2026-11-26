import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'gold' | 'dark' | 'ghost' | 'ink'

const map: Record<Variant, string> = {
  gold: 'btn-ryse solid',
  dark: 'btn-ryse solid',
  ghost: 'btn-ryse ghost',
  ink: 'btn-ryse ink',
}

export function Button({
  children,
  variant = 'gold',
  className = '',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: Variant
}) {
  return (
    <button className={`${map[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

export function LinkButton({
  to,
  children,
  variant = 'gold',
  className = '',
}: {
  to: string
  children: ReactNode
  variant?: Variant
  className?: string
}) {
  return (
    <Link to={to} className={`${map[variant]} ${className}`}>
      {children}
    </Link>
  )
}
