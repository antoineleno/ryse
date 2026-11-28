import { Link } from 'react-router-dom'
import {
  HomeItem,
  HomeReveal,
  HomeStagger,
} from '../components/home/HomeReveal'
import { useLanguage } from '../context/LanguageContext'
import { routes } from '../lib/routes'

export function Projects() {
  const { t } = useLanguage()
  const p = t.projects
  const f = p.featured

  return (
    <div className="projects-page">
      {/* Stillwell-style hero */}
      <section className="project-hero" aria-label={p.title}>
        <div className="project-hero__stage">
          <HomeReveal className="project-hero__media" delay={0.06} tone="media">
            <img
              className="project-hero__photo"
              src="/media/project-energy.jpg"
              alt=""
              aria-hidden="true"
              decoding="async"
              fetchPriority="high"
            />
          </HomeReveal>

          <HomeStagger className="project-hero__card">
            <h1 className="project-hero__title">
              <HomeItem
                index={0}
                as="span"
                className="project-hero__line"
                baseDelay={0.08}
                stagger={0.1}
              >
                {p.titleLines[0]}
              </HomeItem>
              <HomeItem
                index={1}
                as="span"
                className="project-hero__line is-accent"
                baseDelay={0.08}
                stagger={0.1}
              >
                {p.titleLines[1]}
              </HomeItem>
            </h1>
            <HomeItem
              index={2}
              as="p"
              className="project-hero__support"
              tone="soft"
              baseDelay={0.28}
            >
              {p.heroSupport}
            </HomeItem>
          </HomeStagger>
        </div>

        <HomeStagger className="project-hero__below">
          <HomeItem
            index={0}
            as="span"
            className="project-hero__divider"
            tone="rule"
            baseDelay={0.28}
            eager
            aria-hidden
          />
          <HomeItem
            index={1}
            as="p"
            className="project-hero__italic"
            tone="soft"
            baseDelay={0.38}
            eager
          >
            {p.subtitle}
          </HomeItem>
        </HomeStagger>
      </section>

      {/* Single featured mandate — split editorial */}
      <section className="pj-feature" aria-label={f.title}>
        <div className="wrap pj-feature__grid">
          <HomeReveal className="pj-feature__media" delay={0.1} tone="media">
            <img
              className="pj-feature__img"
              src="/media/sector-energy.jpg"
              alt=""
              aria-hidden="true"
              decoding="async"
            />
          </HomeReveal>

          <HomeStagger className="pj-feature__copy">
            <HomeItem
              index={0}
              as="p"
              className="ab-eyebrow"
              tone="soft"
              baseDelay={0.06}
              stagger={0.09}
            >
              {f.tag}
            </HomeItem>
            <HomeItem
              index={1}
              as="h2"
              className="pj-feature__title"
              baseDelay={0.06}
              stagger={0.09}
            >
              {f.title}
            </HomeItem>
            <HomeItem
              index={2}
              as="span"
              className="ab-rule"
              tone="rule"
              baseDelay={0.28}
            />

            {f.body.map((paragraph, i) => (
              <HomeItem
                key={paragraph.slice(0, 28)}
                index={i + 3}
                as="p"
                className="pj-feature__text"
                tone="soft"
                baseDelay={0.08}
                stagger={0.08}
              >
                {paragraph}
              </HomeItem>
            ))}

            <HomeItem index={8} as="dl" className="pj-feature__facts" baseDelay={0.14}>
              {f.meta.map((item) => (
                <div key={item.label} className="pj-feature__row">
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </HomeItem>

            <HomeItem index={9} className="pj-feature__actions" baseDelay={0.22}>
              <Link to={routes.contact} className="btn-ryse solid">
                {f.cta}
              </Link>
            </HomeItem>
          </HomeStagger>
        </div>
      </section>
    </div>
  )
}
