import { Link } from 'react-router-dom'
import { routes } from '../lib/routes'

export function Logo({
  className = '',
  inverted = false,
}: {
  className?: string
  inverted?: boolean
}) {
  return (
    <Link to={routes.home} className={`group flex items-center gap-3 ${className}`}>
      <svg
        width="34"
        height="40"
        viewBox="0 0 34 40"
        fill="none"
        aria-hidden="true"
        className="shrink-0 transition-transform duration-500 group-hover:-translate-y-0.5"
      >
        <path
          d="M8 36C8 36 5.5 22 14 12C22.5 2 28 1 28 1C28 1 22 11 20 20C18 29 20 36 20 36"
          stroke="#A68966"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M16 36C16 36 14 24 20 16C26 8 31.5 5 31.5 5C31.5 5 27.5 15 25.5 22.5C23.5 30 26 36 26 36"
          stroke="#C4A882"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
      <span className="leading-none">
        <span
          className={`font-display block text-[1.35rem] font-semibold tracking-[0.28em] transition-colors ${
            inverted ? 'text-cream' : 'text-ink'
          }`}
        >
          RYSE
        </span>
        <span
          className={`mt-1 block text-[0.58rem] font-medium tracking-[0.22em] uppercase transition-colors ${
            inverted ? 'text-cream/70' : 'text-ink-muted'
          }`}
        >
          Strategy & Foresight
        </span>
      </span>
    </Link>
  )
}
