import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { routes } from '../lib/routes'

export function Hero() {
  const { t } = useLanguage()
  const lines = t.hero.titleLines

  return (
    <section className="relative overflow-hidden bg-forest text-onf">
      <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden="true">
        <svg
          viewBox="0 0 800 420"
          className="absolute right-[-6%] bottom-[-2px] h-auto w-[min(820px,90%)] max-md:right-[-30%] max-md:w-[150%]"
        >
          <g className="horizon-sun">
            <circle className="fill-none stroke-bronzel" cx="520" cy="420" r="120" opacity=".9" strokeWidth="1" />
            <circle className="fill-none stroke-bronzel" cx="520" cy="420" r="190" opacity=".5" strokeWidth="1" />
            <circle className="fill-none stroke-bronzel" cx="520" cy="420" r="270" opacity=".28" strokeWidth="1" />
            <circle className="fill-none stroke-bronzel" cx="520" cy="420" r="360" opacity=".14" strokeWidth="1" />
          </g>
          <line x1="0" y1="419" x2="800" y2="419" className="stroke-bronzel" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="wrap relative z-[2] py-[104px] pb-[116px] max-md:py-16 max-md:pb-[180px]">
        <p className="eyebrow !text-bronzeh">{t.hero.eyebrow}</p>
        <h1 className="mt-[22px] max-w-[14ch] text-[clamp(44px,6.2vw,84px)] leading-[1.02] text-[#F1E9DC]">
          {lines.map((line, i) => (
            <span
              key={line}
              className={`block ${i === 1 ? 'font-semibold italic text-bronzeh' : ''}`}
            >
              {line}
            </span>
          ))}
        </h1>
        <p className="mt-[26px] max-w-[54ch] text-[18px] text-[#D3D6CC]">
          {t.hero.body}
        </p>
        <div className="mt-9 flex flex-wrap gap-3.5">
          <Link to={routes.expertise} className="btn-ryse solid">
            {t.hero.primary}
          </Link>
          <Link to={routes.contact} className="btn-ryse ghost">
            {t.hero.secondary}
          </Link>
        </div>
      </div>
    </section>
  )
}
