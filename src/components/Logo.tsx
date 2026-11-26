import { Link } from 'react-router-dom'
import { routes } from '../lib/routes'

export function Logo() {
  return (
    <Link
      to={routes.home}
      className="flex items-center gap-3 whitespace-nowrap no-underline"
      aria-label="RYSE, home"
    >
      <img
        src="/media/logo-mark.png"
        alt=""
        className="block h-10 w-auto"
      />
      <span className="flex flex-col items-center leading-none">
        <span className="font-display text-[27px] font-semibold tracking-[0.5em] text-[#E6DCCB] mr-[-0.5em]">
          RYSE
        </span>
        <span className="font-label mt-[7px] text-[8.5px] font-medium tracking-[0.3em] text-[#E6DCCB] uppercase mr-[-0.3em] whitespace-nowrap">
          Strategy & Foresight
        </span>
      </span>
    </Link>
  )
}
