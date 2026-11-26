import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'gold' | 'dark' | 'ghost'

const styles: Record<Variant, string> = {
  gold: 'bg-gold text-ink hover:bg-gold-deep hover:text-cream',
  dark: 'bg-forest text-cream hover:bg-forest-deep',
  ghost:
    'border border-ink/20 bg-transparent text-ink hover:border-gold hover:text-gold-deep',
}

const base =
  'inline-flex items-center justify-center px-7 py-3.5 text-[0.72rem] font-semibold tracking-[0.18em] uppercase transition-all duration-300'

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
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
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
    <Link to={to} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  )
}
