import { Link } from 'react-router-dom'
import {
  HomeItem,
  HomeReveal,
  HomeStagger,
} from '../components/home/HomeReveal'
import { useLanguage } from '../context/LanguageContext'
import { routes } from '../lib/routes'

export function HomeHero() {
  const { t } = useLanguage()
  const h = t.hero

  return (
    <section className="home-hero" aria-label="RYSE">
      <div className="home-hero__inner">
        <HomeStagger className="home-hero__copy">
          <HomeItem
            index={0}
            as="p"
            className="home-hero__brand"
            tone="soft"
            baseDelay={0.05}
            stagger={0.08}
          >
            RYSE
          </HomeItem>
          <HomeItem
            index={1}
            as="p"
            className="home-hero__eyebrow"
            tone="soft"
            baseDelay={0.05}
            stagger={0.08}
          >
            {h.eyebrow}
          </HomeItem>
          <HomeItem
            index={2}
            as="span"
            className="home-hero__rule"
            tone="rule"
            baseDelay={0.2}
          />
          <h1 className="home-hero__title">
            {h.titleLines.map((line, i) => (
              <HomeItem
                key={line}
                index={i + 3}
                as="span"
                className={`home-hero__line${i === 1 ? ' is-accent' : ''}`}
                baseDelay={0.1}
                stagger={0.09}
              >
                {line}
              </HomeItem>
            ))}
          </h1>
          <HomeItem
            index={6}
            as="p"
            className="home-hero__body"
            tone="soft"
            baseDelay={0.12}
            stagger={0.08}
          >
            {h.body}
          </HomeItem>
          <HomeItem index={7} className="home-hero__actions" baseDelay={0.5}>
            <Link to={routes.contact} className="btn-ryse solid home-hero__cta">
              {h.primary}
            </Link>
            <Link to={routes.approach} className="home-hero__link">
              {h.secondary}
            </Link>
          </HomeItem>
          <HomeItem
            index={8}
            as="p"
            className="home-hero__places"
            tone="soft"
            baseDelay={0.62}
          >
            {h.places}
          </HomeItem>
        </HomeStagger>

        <HomeReveal className="home-hero__media" delay={0.16} tone="media">
          <img
            className="home-hero__img"
            src="/media/guinea.jpg?v=7"
            alt=""
            aria-hidden="true"
            decoding="async"
            fetchPriority="high"
          />
        </HomeReveal>
      </div>
    </section>
  )
}
