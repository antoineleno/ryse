import { Link } from 'react-router-dom'
import {
  IconEnergy,
  IconExtractive,
  IconFinance,
  IconPolicy,
  IconSecurity,
} from '../components/BrandIcons'
import { Reveal } from '../components/Reveal'
import { useLanguage } from '../context/LanguageContext'
import { routes } from '../lib/routes'
import { Hero } from '../sections/Hero'

const pillarIcons = [
  IconPolicy,
  IconExtractive,
  IconEnergy,
  IconSecurity,
  IconFinance,
] as const

export function Home() {
  const { t } = useLanguage()
  const h = t.home
  const featured = t.projects.featured
  const board = t.board.members

  return (
    <>
      <Hero />

      {/* Approach — Auren-style three column */}
      <section className="border-t border-rule bg-ivory">
        <div className="approach-listen">
          <div className="wrap approach-listen__grid">
            <Reveal className="approach-listen__intro">
              <p className="eyebrow">{h.listeningLabel}</p>
              <h2 className="approach-listen__title">{h.listeningTitle}</h2>
              <p className="approach-listen__body">{h.listeningBody}</p>
              <span className="approach-listen__rule" aria-hidden />
              <Link to={routes.approach} className="approach-listen__cta">
                {h.listeningCta}
              </Link>
            </Reveal>

            <Reveal delay={0.06} className="approach-listen__media">
              <img
                src="/media/approach-listen.jpg"
                alt=""
                className="approach-listen__img"
              />
            </Reveal>

            <Reveal delay={0.1}>
              <ol className="approach-listen__steps">
                {h.listeningSteps.map((step) => (
                  <li key={step.num} className="approach-listen__step">
                    <span className="approach-listen__num">{step.num}</span>
                    <div>
                      <h3 className="approach-listen__step-title">
                        {step.title}
                      </h3>
                      <p className="approach-listen__step-body">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pillars — ivory, not forest */}
      <section className="bg-sand2 py-16 sm:py-20">
        <div className="wrap">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">{h.pillarsLabel}</p>
            <h2 className="mt-4 max-w-[18ch] text-[clamp(28px,4.2vw,44px)] leading-[1.08] text-ink">
              {h.pillarsTitle}
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-8 border-t border-ink/15 pt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:gap-6">
            {h.pillars.map((pillar, i) => {
              const Icon = pillarIcons[i] ?? IconPolicy
              return (
                <Reveal
                  key={pillar.title}
                  delay={i * 0.04}
                  className="min-w-0"
                >
                  <Icon className="h-8 w-8 text-bronzel" />
                  <h3 className="mt-4 font-display text-[22px] leading-tight text-ink">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed break-words text-ink2">
                    {pillar.body}
                  </p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured partnership — photo + light panel */}
      <section className="bg-ivory py-16 sm:py-24">
        <div className="wrap">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">{h.mapLabel}</p>
            <h2 className="mt-4 text-[clamp(28px,4.2vw,44px)] leading-[1.08] text-ink">
              {h.mapTitle}
            </h2>
            <p className="mt-4 max-w-[48ch] text-[16.5px] leading-relaxed text-ink2">
              {h.mapBody}
            </p>
          </Reveal>

          <Reveal className="mt-10 overflow-hidden border border-rule">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
              <div className="relative min-h-[260px] lg:min-h-[380px]">
                <img
                  src="/media/project-energy.jpg"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="bg-cream-soft p-7 sm:p-9">
                <p className="eyebrow">{featured.tag}</p>
                <h3 className="mt-3 font-display text-[clamp(26px,3vw,36px)] text-ink">
                  {featured.title}
                </h3>
                <p className="mt-4 text-[15.5px] leading-relaxed text-ink2">
                  {featured.body[0]}
                </p>
                <dl className="mt-7 space-y-3 border-t border-rule pt-6">
                  {h.mapStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="grid grid-cols-[96px_1fr] gap-3"
                    >
                      <dt className="font-label text-[10.5px] font-semibold tracking-[1.6px] text-bronze uppercase">
                        {stat.label}
                      </dt>
                      <dd className="text-[15px] text-ink">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
                <Link
                  to={routes.projects}
                  className="btn-ryse ink mt-8 inline-block"
                >
                  {h.projectCta}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Board — editorial teaser */}
      <section className="border-t border-rule bg-ivory">
        <div className="board-home">
          <div className="wrap board-home__grid">
            <Reveal className="board-home__intro">
              <p className="eyebrow">{h.boardLabel}</p>
              <h2 className="board-home__title">{h.boardTitle}</h2>
              <p className="board-home__body">{h.boardBody}</p>
              <span className="board-home__rule" aria-hidden />
              <Link to={routes.board} className="board-home__cta">
                {h.boardCta}
              </Link>
            </Reveal>

            <div className="board-home__people">
              {board.map((member, i) => (
                <Reveal key={member.name} delay={0.06 + i * 0.05}>
                  <Link
                    to={routes.board}
                    className="board-home__person"
                    aria-label={`${member.name}, ${member.role}`}
                  >
                    <div className="board-home__photo">
                      <img src={member.image} alt="" />
                    </div>
                    <div className="board-home__meta">
                      <p className="board-home__role">{member.role}</p>
                      <h3 className="board-home__name">{member.name}</h3>
                      <p className="board-home__snippet">
                        {member.highlights[0]}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Moments */}
      <section className="bg-sand2 py-16 sm:py-24">
        <div className="wrap">
          <Reveal className="max-w-2xl">
            <h2 className="text-[clamp(28px,4.2vw,42px)] leading-[1.08] text-ink">
              {h.momentsTitle}
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {h.moments.map((moment, i) => (
              <Reveal key={moment.title} delay={i * 0.04}>
                <article>
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={moment.image}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                    />
                  </div>
                  <h3 className="mt-3.5 font-display text-[22px] text-ink">
                    {moment.title}
                  </h3>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="bg-ivory py-16 sm:py-24">
        <div className="wrap">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">{h.insightsLabel}</p>
            <h2 className="mt-3 text-[clamp(26px,3.8vw,40px)] text-ink">
              {h.insightsTitle}
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {h.insights.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <Link to={item.href} className="group block no-underline">
                  <div className="aspect-[16/11] overflow-hidden">
                    <img
                      src={item.image}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-[22px] leading-snug text-ink transition-colors group-hover:text-bronze sm:text-[24px]">
                    {item.title}
                  </h3>
                  <span className="mt-2.5 inline-block font-label text-[11px] font-semibold tracking-[1.8px] text-bronze uppercase">
                    {t.explore} →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing — sand, not forest (footer is already green) */}
      <section className="border-t border-rule bg-ivory py-16 sm:py-20">
        <div className="wrap max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow justify-center">{h.closeLabel}</p>
            <h2 className="mt-4 text-[clamp(28px,4.2vw,44px)] leading-[1.08] text-ink">
              {h.closeTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-[36ch] text-[16.5px] text-ink2">
              {h.closeBody}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to={routes.contact} className="btn-ryse solid !text-ink">
                {h.ctaTalk}
              </Link>
              <Link
                to={routes.experts}
                className="font-label text-[12px] font-semibold tracking-[1.8px] text-ink uppercase underline decoration-bronzel decoration-[1.5px] underline-offset-[10px] hover:text-bronze"
              >
                {h.ctaExpertsAction}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
