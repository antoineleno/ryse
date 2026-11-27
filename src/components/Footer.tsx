import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { routes } from '../lib/routes'
import { Logo } from './Logo'

const firmLinks = [
  { id: 'about', path: routes.about },
  { id: 'board', path: routes.board },
  { id: 'experts', path: routes.experts },
] as const

const practiceLinks = [
  { id: 'expertise', path: routes.expertise },
  { id: 'sectors', path: routes.sectors },
  { id: 'projects', path: routes.projects },
] as const

export function Footer() {
  const { t } = useLanguage()
  const f = t.footer
  const label = (id: string) => {
    if (id === 'board') return t.board.eyebrow
    return t.nav.find((n) => n.id === id)?.label ?? id
  }

  return (
    <footer className="border-t border-fline bg-forest text-onf">
      <div className="wrap py-12 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr] lg:gap-10">
          <div className="max-w-sm sm:col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-5 text-[14.5px] leading-relaxed text-onf2 sm:mt-6">
              {f.blurb}
            </p>
          </div>

          <nav aria-label={f.firm}>
            <p className="font-label text-[11px] font-semibold tracking-[2px] text-bronzeh uppercase">
              {f.firm}
            </p>
            <ul className="mt-4 space-y-3 sm:mt-5">
              {firmLinks.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className="font-label text-[12px] tracking-[1.2px] text-onf2 uppercase no-underline transition-colors hover:text-bronzeh"
                  >
                    {label(item.id)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={f.practice}>
            <p className="font-label text-[11px] font-semibold tracking-[2px] text-bronzeh uppercase">
              {f.practice}
            </p>
            <ul className="mt-4 space-y-3 sm:mt-5">
              {practiceLinks.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className="font-label text-[12px] tracking-[1.2px] text-onf2 uppercase no-underline transition-colors hover:text-bronzeh"
                  >
                    {label(item.id)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-label text-[11px] font-semibold tracking-[2px] text-bronzeh uppercase">
              {f.connect}
            </p>
            <dl className="mt-4 space-y-5 sm:mt-5">
              <div>
                <dt className="font-label text-[10.5px] font-semibold tracking-[1.6px] text-onf2/80 uppercase">
                  {f.email}
                </dt>
                <dd className="mt-1.5">
                  <a
                    href="mailto:contact@ryseglobalinc.com"
                    className="break-all text-[14.5px] text-[#F1E9DC] no-underline transition-colors hover:text-bronzeh"
                  >
                    contact@ryseglobalinc.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-label text-[10.5px] font-semibold tracking-[1.6px] text-onf2/80 uppercase">
                  {f.offices}
                </dt>
                <dd className="mt-1.5 space-y-1 text-[14.5px] text-[#F1E9DC]">
                  {f.officeLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div className="border-t border-fline">
        <div className="wrap flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:py-6">
          <p className="text-[12.5px] text-onf2">{f.rights}</p>
          <p className="font-label text-[10.5px] font-medium tracking-[1.4px] text-onf2 uppercase sm:text-[11px] sm:tracking-[1.6px]">
            {f.region}
          </p>
        </div>
      </div>
    </footer>
  )
}
