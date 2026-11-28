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
      <HomeReveal className="home-hero__media" delay={0.04} tone="media">
        <img
          className="home-hero__img"
          src="/media/home-landscape.jpg?v=clean1"
          alt="Professionals in a strategic advisory meeting"
          decoding="async"
          fetchPriority="high"
        />
      </HomeReveal>

      <div className="home-hero__rail" aria-hidden="true" />
      <div className="home-hero__plinth" aria-hidden="true" />
      <div className="home-hero__spine" aria-hidden="true" />

      <HomeStagger className="home-hero__copy">
        <HomeItem
          index={0}
          as="p"
          className="home-hero__eyebrow"
          tone="soft"
          baseDelay={0.05}
          stagger={0.07}
          eager
        >
          {h.eyebrow}
        </HomeItem>
        <h1 className="home-hero__title">
          {h.titleLines.map((line, i) => (
            <HomeItem
              key={line}
              index={i + 1}
              as="span"
              className={`home-hero__line${i === 1 ? ' is-accent' : ''}`}
              baseDelay={0.08}
              stagger={0.08}
              eager
            >
              {line}
            </HomeItem>
          ))}
        </h1>
        <HomeItem
          index={4}
          as="p"
          className="home-hero__body"
          tone="soft"
          baseDelay={0.12}
          stagger={0.07}
          eager
        >
          {h.body}
        </HomeItem>
        <HomeItem index={5} className="home-hero__actions" baseDelay={0.4} eager>
          <Link to={routes.contact} className="home-hero__cta">
            {h.primary}
          </Link>
          <Link to={routes.approach} className="home-hero__link">
            {h.secondary}
          </Link>
        </HomeItem>
      </HomeStagger>

      <HomeItem
        index={6}
        as="p"
        className="home-hero__places"
        tone="soft"
        baseDelay={0.5}
        eager
      >
        {h.places}
      </HomeItem>
    </section>
  )
}
