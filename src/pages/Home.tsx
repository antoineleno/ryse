import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { useLanguage } from '../context/LanguageContext'
import { routes } from '../lib/routes'
import { Hero } from '../sections/Hero'

export function Home() {
  const { t } = useLanguage()
  const h = t.home

  return (
    <>
      <Hero />

      <div className="border-t border-fline bg-forest2">
        <div className="wrap flex items-center gap-[18px] py-4 font-label text-[12px] font-semibold tracking-[2.6px] text-[#F1E9DC] uppercase max-sm:gap-2.5 max-sm:text-[10.5px] max-sm:tracking-[1.6px]">
          <span>{t.where.locations[0].name}</span>
          <div
            className="h-px flex-1 bg-[repeating-linear-gradient(90deg,#A9824F_0_6px,transparent_6px_12px)]"
            aria-hidden
          />
          <span>{t.where.locations[1].name}</span>
          <div
            className="h-px flex-1 bg-[repeating-linear-gradient(90deg,#A9824F_0_6px,transparent_6px_12px)]"
            aria-hidden
          />
          <span>{h.corridorWest}</span>
        </div>
      </div>

      <section className="bg-ivory pt-[88px]">
        <div className="wrap grid items-start gap-4 md:grid-cols-[1fr_1.15fr] md:gap-16">
          <Reveal>
            <div className="border-l-2 border-bronzel pl-7">
              <p className="eyebrow">{h.practiceLabel}</p>
              <h2 className="mt-3.5 max-w-[22ch] text-[clamp(34px,4.6vw,54px)] text-ink">
                {h.practiceTitle}
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lead">{h.practiceBody}</p>
            <p className="meta-line mt-5 mb-6">
              {h.practiceTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </p>
            <Link to={routes.expertise} className="more-link">
              {t.explore}
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory pt-[88px] pb-4">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">{h.sectorsLabel}</p>
          </Reveal>
          <div className="mt-[22px] grid border-t-[1.5px] border-ink sm:grid-cols-2 lg:grid-cols-4">
            {h.sectorCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.04}>
                <Link
                  to={routes.sectors}
                  className={`flex h-full flex-col gap-2.5 py-[22px] no-underline ${
                    i > 0 ? 'sm:border-l sm:border-rule sm:pl-[22px]' : 'sm:pr-[22px]'
                  } ${i % 2 === 1 ? 'sm:pl-[22px]' : ''} border-t border-rule first:border-t-0 sm:border-t-0`}
                >
                  <h3 className="font-display text-[27px] leading-[1.1] font-bold text-ink transition-colors hover:text-bronze">
                    {card.title}
                  </h3>
                  <p className="text-[14.5px] text-ink2">{card.body}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-24 bg-sand py-16">
        <div className="wrap grid gap-7 md:grid-cols-2">
          <Reveal>
            <div className="flex flex-col items-start gap-3.5 border-t-[1.5px] border-ink pt-[18px]">
              <p className="eyebrow">{t.contact.eyebrow}</p>
              <h2 className="m-0 max-w-[22ch] text-[clamp(26px,3vw,36px)] text-ink">
                {t.contact.title}
              </h2>
              <Link to={routes.contact} className="btn-ryse ink">
                {h.ctaTalk}
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex flex-col items-start gap-3.5 border-t-[1.5px] border-ink pt-[18px]">
              <p className="eyebrow">{t.experts.eyebrow}</p>
              <h2 className="m-0 max-w-[22ch] text-[clamp(26px,3vw,36px)] text-ink">
                {h.ctaExpertsTitle}
              </h2>
              <Link to={routes.experts} className="btn-ryse ink">
                {h.ctaExpertsAction}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
