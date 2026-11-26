import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { routes } from '../lib/routes'
import { Logo } from './Logo'

const firmLinks = [
  { id: 'about', path: routes.about },
  { id: 'board', path: routes.board },
  { id: 'where', path: routes.where },
  { id: 'experts', path: routes.experts },
] as const

const practiceLinks = [
  { id: 'expertise', path: routes.expertise },
  { id: 'sectors', path: routes.sectors },
  { id: 'approach', path: routes.approach },
  { id: 'projects', path: routes.projects },
] as const

export function Footer() {
  const { t } = useLanguage()
  const f = t.footer
  const label = (id: string) => t.nav.find((n) => n.id === id)?.label ?? id

  return (
    <footer className="border-t border-fline bg-forest text-onf">
      <div className="wrap py-14 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr_1fr_1fr] lg:gap-10">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-6 text-[14.5px] leading-relaxed text-onf2">
              {f.blurb}
            </p>
            <Link to={routes.contact} className="btn-ryse solid sm mt-7">
              {t.contactCta}
            </Link>
          </div>

          <nav aria-label={f.firm}>
            <p className="font-label text-[11px] font-semibold tracking-[2px] text-bronzeh uppercase">
              {f.firm}
            </p>
            <ul className="mt-5 space-y-3">
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
            <ul className="mt-5 space-y-3">
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
            <dl className="mt-5 space-y-5">
              <div>
                <dt className="font-label text-[10.5px] font-semibold tracking-[1.6px] text-onf2/80 uppercase">
                  {f.email}
                </dt>
                <dd className="mt-1.5">
                  <a
                    href="mailto:contact@ryseglobalinc.com"
                    className="text-[14.5px] text-[#F1E9DC] no-underline transition-colors hover:text-bronzeh"
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
        <div className="wrap flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12.5px] text-onf2">{f.rights}</p>
          <p className="font-label text-[11px] font-medium tracking-[1.6px] text-onf2 uppercase">
            {f.region}
          </p>
        </div>
      </div>
    </footer>
  )
}
