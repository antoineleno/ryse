import { Link } from 'react-router-dom'
import {
  HomeImage,
  HomeItem,
  HomeReveal,
  HomeStagger,
} from '../components/home/HomeReveal'
import { useLanguage } from '../context/LanguageContext'
import { routes } from '../lib/routes'
import { Hero } from '../sections/Hero'

export function Home() {
  const { t } = useLanguage()
  const h = t.home
  const featured = t.projects.featured
  const board = t.board.members

  return (
    <>
      <Hero />

      {/* 1 — Approach */}
      <section className="border-t border-rule bg-ivory">
        <div className="approach-listen">
          <div className="wrap approach-listen__grid">
            <HomeStagger className="approach-listen__intro" stagger={0.08} delay={0.02}>
              <HomeItem as="p" className="eyebrow" tone="soft">
                {h.listeningLabel}
              </HomeItem>
              <HomeItem as="h2" className="approach-listen__title">
                {h.listeningTitle}
              </HomeItem>
              <HomeItem as="p" className="approach-listen__body">
                {h.listeningBody}
              </HomeItem>
              <HomeItem
                as="span"
                tone="rule"
                className="approach-listen__rule"
                aria-hidden
              />
              <HomeItem>
                <Link to={routes.approach} className="approach-listen__cta">
                  {h.listeningCta}
                </Link>
              </HomeItem>
            </HomeStagger>

            <div className="approach-listen__media">
              <HomeImage
                src="/media/approach-listen.jpg"
                className="approach-listen__img-wrap"
              />
            </div>

            <HomeStagger
              as="ol"
              className="approach-listen__steps"
              stagger={0.1}
              delay={0.06}
            >
              {h.listeningSteps.map((step) => (
                <HomeItem key={step.num} as="li" className="approach-listen__step">
                  <span className="approach-listen__num">{step.num}</span>
                  <div>
                    <h3 className="approach-listen__step-title">{step.title}</h3>
                    <p className="approach-listen__step-body">{step.body}</p>
                  </div>
                </HomeItem>
              ))}
            </HomeStagger>
          </div>
        </div>
      </section>

      {/* 2 — Focus */}
      <section className="border-t border-rule bg-sand2">
        <div className="home-focus">
          <div className="wrap home-focus__grid">
            <HomeStagger className="home-focus__intro" stagger={0.08} delay={0.02}>
              <HomeItem as="p" className="eyebrow" tone="soft">
                {h.pillarsLabel}
              </HomeItem>
              <HomeItem as="h2" className="home-focus__title">
                {h.pillarsTitle}
              </HomeItem>
              <HomeItem as="p" className="home-focus__body">
                {h.pillarsBody}
              </HomeItem>
              <HomeItem
                as="span"
                tone="rule"
                className="home-focus__rule"
                aria-hidden
              />
              <HomeItem>
                <Link to={routes.sectors} className="home-focus__cta">
                  {h.pillarsCta}
                </Link>
              </HomeItem>
            </HomeStagger>

            <HomeStagger as="ol" className="home-focus__list" stagger={0.07} delay={0.05}>
              {h.pillars.map((pillar) => (
                <HomeItem key={pillar.num} as="li" className="home-focus__item">
                  <span className="home-focus__num">{pillar.num}</span>
                  <div className="home-focus__copy">
                    <h3 className="home-focus__item-title">{pillar.title}</h3>
                    <p className="home-focus__item-body">{pillar.body}</p>
                  </div>
                </HomeItem>
              ))}
            </HomeStagger>
          </div>
        </div>
      </section>

      {/* 3 — Ground */}
      <section className="border-t border-rule bg-ivory">
        <div className="home-ground">
          <div className="wrap home-ground__grid">
            <HomeStagger className="home-ground__intro" stagger={0.08} delay={0.02}>
              <HomeItem as="p" className="eyebrow" tone="soft">
                {h.mapLabel}
              </HomeItem>
              <HomeItem as="h2" className="home-ground__title">
                {h.mapTitle}
              </HomeItem>
              <HomeItem as="p" className="home-ground__body">
                {h.mapBody}
              </HomeItem>
              <HomeItem
                as="span"
                tone="rule"
                className="home-ground__rule"
                aria-hidden
              />
            </HomeStagger>

            <div className="home-ground__media">
              <HomeImage
                src="/media/project-energy.jpg"
                className="home-ground__img-wrap"
              />
            </div>

            <HomeStagger className="home-ground__aside" stagger={0.07} delay={0.05}>
              <HomeItem as="p" className="home-ground__tag" tone="soft">
                {featured.tag}
              </HomeItem>
              <HomeItem as="h3" className="home-ground__project">
                {featured.title}
              </HomeItem>
              <HomeItem as="p" className="home-ground__project-body">
                {featured.body[0]}
              </HomeItem>
              <HomeItem>
                <dl className="home-ground__stats">
                  {h.mapStats.map((stat) => (
                    <div key={stat.label} className="home-ground__stat">
                      <dt>{stat.label}</dt>
                      <dd>{stat.value}</dd>
                    </div>
                  ))}
                </dl>
              </HomeItem>
              <HomeItem>
                <Link to={routes.projects} className="home-ground__cta">
                  {h.projectCta}
                </Link>
              </HomeItem>
            </HomeStagger>
          </div>
        </div>
      </section>

      {/* 4 — Board */}
      <section className="border-t border-rule bg-sand2">
        <div className="board-home">
          <div className="wrap board-home__grid">
            <HomeStagger className="board-home__intro" stagger={0.08} delay={0.02}>
              <HomeItem as="p" className="eyebrow" tone="soft">
                {h.boardLabel}
              </HomeItem>
              <HomeItem as="h2" className="board-home__title">
                {h.boardTitle}
              </HomeItem>
              <HomeItem as="p" className="board-home__body">
                {h.boardBody}
              </HomeItem>
              <HomeItem
                as="span"
                tone="rule"
                className="board-home__rule"
                aria-hidden
              />
              <HomeItem>
                <Link to={routes.board} className="board-home__cta">
                  {h.boardCta}
                </Link>
              </HomeItem>
            </HomeStagger>

            <HomeStagger className="board-home__people" stagger={0.12} delay={0.05}>
              {board.map((member) => (
                <HomeItem key={member.name}>
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
                      <p className="board-home__snippet">{member.highlights[0]}</p>
                    </div>
                  </Link>
                </HomeItem>
              ))}
            </HomeStagger>
          </div>
        </div>
      </section>

      {/* 5 — Moments */}
      <section className="border-t border-rule bg-ivory">
        <div className="home-moments">
          <div className="wrap home-moments__grid">
            <HomeStagger className="home-moments__intro" stagger={0.08} delay={0.02}>
              <HomeItem as="p" className="eyebrow" tone="soft">
                {h.momentsLabel}
              </HomeItem>
              <HomeItem as="h2" className="home-moments__title">
                {h.momentsTitle}
              </HomeItem>
              <HomeItem as="p" className="home-moments__body">
                {h.momentsBody}
              </HomeItem>
              <HomeItem
                as="span"
                tone="rule"
                className="home-moments__rule"
                aria-hidden
              />
            </HomeStagger>

            <HomeStagger
              as="ol"
              className="home-moments__list"
              stagger={0.08}
              delay={0.05}
            >
              {h.moments.map((moment) => (
                <HomeItem key={moment.num} as="li" className="home-moments__item">
                  <span className="home-moments__num">{moment.num}</span>
                  <div className="home-moments__media">
                    <img src={moment.image} alt="" />
                  </div>
                  <h3 className="home-moments__name">{moment.title}</h3>
                </HomeItem>
              ))}
            </HomeStagger>
          </div>
        </div>
      </section>

      {/* 6 — Insights */}
      <section className="border-t border-rule bg-sand2">
        <div className="home-insights">
          <div className="wrap home-insights__grid">
            <HomeStagger className="home-insights__intro" stagger={0.08} delay={0.02}>
              <HomeItem as="p" className="eyebrow" tone="soft">
                {h.insightsLabel}
              </HomeItem>
              <HomeItem as="h2" className="home-insights__title">
                {h.insightsTitle}
              </HomeItem>
              <HomeItem as="p" className="home-insights__body">
                {h.insightsBody}
              </HomeItem>
              <HomeItem
                as="span"
                tone="rule"
                className="home-insights__rule"
                aria-hidden
              />
            </HomeStagger>

            <HomeStagger className="home-insights__list" stagger={0.09} delay={0.05}>
              {h.insights.map((item) => (
                <HomeItem key={item.title}>
                  <Link to={item.href} className="home-insights__row">
                    <div className="home-insights__thumb">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="home-insights__meta">
                      <h3 className="home-insights__name">{item.title}</h3>
                      <span className="home-insights__more">{t.explore}</span>
                    </div>
                  </Link>
                </HomeItem>
              ))}
            </HomeStagger>
          </div>
        </div>
      </section>

      {/* 7 — Close */}
      <section className="border-t border-rule bg-ivory">
        <div className="home-close">
          <div className="wrap">
            <HomeReveal className="home-close__panel">
              <p className="eyebrow">{h.closeLabel}</p>
              <h2 className="home-close__title">{h.closeTitle}</h2>
              <p className="home-close__body">{h.closeBody}</p>
              <span className="home-close__rule" aria-hidden />
              <div className="home-close__actions">
                <Link to={routes.contact} className="btn-ryse solid !text-ink">
                  {h.ctaTalk}
                </Link>
                <Link to={routes.experts} className="home-close__link">
                  {h.ctaExpertsAction}
                </Link>
              </div>
            </HomeReveal>
          </div>
        </div>
      </section>
    </>
  )
}
