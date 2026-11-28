import { Link } from 'react-router-dom'
import {
  HomeImage,
  HomeItem,
  HomeReveal,
  HomeSection,
  HomeStagger,
} from '../components/home/HomeReveal'
import { useLanguage } from '../context/LanguageContext'
import { routes } from '../lib/routes'
import { HomeHero } from '../sections/HomeHero'

export function Home() {
  const { t } = useLanguage()
  const h = t.home
  const about = t.about
  const expertise = t.expertise
  const sectors = t.sectors
  const projects = t.projects
  const experts = t.experts
  const featured = projects.featured

  return (
    <>
      <HomeHero />

      {/* About */}
      <HomeSection className="border-t border-rule bg-ivory" id="about">
        <div className="approach-listen">
          <div className="wrap approach-listen__grid">
            <HomeStagger className="approach-listen__intro">
              <HomeItem index={0} as="p" className="eyebrow" tone="soft">
                {about.eyebrow}
              </HomeItem>
              <HomeItem index={1} as="h2" className="approach-listen__title">
                {about.storyTitle}
              </HomeItem>
              <HomeItem index={2} as="p" className="approach-listen__body">
                {about.body}
              </HomeItem>
              <HomeItem
                index={3}
                as="span"
                tone="rule"
                className="approach-listen__rule"
                aria-hidden
              />
              <HomeItem index={4}>
                <Link to={routes.about} className="approach-listen__cta">
                  {h.aboutCta}
                </Link>
              </HomeItem>
            </HomeStagger>

            <div className="approach-listen__media">
              <HomeImage
                src="/media/home-about.jpg"
                className="approach-listen__img-wrap"
              />
            </div>

            <HomeStagger as="ol" className="approach-listen__steps">
              {about.values.map((value, i) => (
                <HomeItem
                  key={value.title}
                  index={i}
                  stagger={0.1}
                  as="li"
                  className="approach-listen__step"
                >
                  <span className="approach-listen__num">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="approach-listen__step-title">{value.title}</h3>
                    <p className="approach-listen__step-body">{value.body}</p>
                  </div>
                </HomeItem>
              ))}
            </HomeStagger>
          </div>
        </div>
      </HomeSection>

      {/* Expertise */}
      <HomeSection className="border-t border-rule bg-sand2" id="expertise">
        <div className="home-focus">
          <div className="wrap home-focus__grid">
            <HomeStagger className="home-focus__intro">
              <HomeItem index={0} as="p" className="eyebrow" tone="soft">
                {expertise.eyebrow}
              </HomeItem>
              <HomeItem index={1} as="h2" className="home-focus__title">
                {expertise.leadingTitle}
              </HomeItem>
              <HomeItem index={2} as="p" className="home-focus__body">
                {expertise.leadingBody}
              </HomeItem>
              <HomeItem
                index={3}
                as="span"
                tone="rule"
                className="home-focus__rule"
                aria-hidden
              />
              <HomeItem index={4}>
                <Link to={routes.expertise} className="home-focus__cta">
                  {h.expertiseCta}
                </Link>
              </HomeItem>
            </HomeStagger>

            <HomeStagger as="ol" className="home-focus__list">
              {expertise.practices.map((practice, i) => (
                <HomeItem
                  key={practice.title}
                  index={i}
                  stagger={0.09}
                  as="li"
                  className="home-focus__item"
                >
                  <span className="home-focus__num">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="home-focus__copy">
                    <h3 className="home-focus__item-title">{practice.title}</h3>
                    <p className="home-focus__item-body">{practice.body}</p>
                  </div>
                </HomeItem>
              ))}
            </HomeStagger>
          </div>
        </div>
      </HomeSection>

      {/* Sectors */}
      <HomeSection className="border-t border-rule bg-ivory" id="sectors">
        <div className="home-moments">
          <div className="wrap home-moments__grid">
            <HomeStagger className="home-moments__intro">
              <HomeItem index={0} as="p" className="eyebrow" tone="soft">
                {sectors.eyebrow}
              </HomeItem>
              <HomeItem index={1} as="h2" className="home-moments__title">
                {sectors.title}
              </HomeItem>
              <HomeItem index={2} as="p" className="home-moments__body">
                {sectors.subtitle}
              </HomeItem>
              <HomeItem
                index={3}
                as="span"
                tone="rule"
                className="home-moments__rule"
                aria-hidden
              />
              <HomeItem index={4}>
                <Link to={routes.sectors} className="home-focus__cta">
                  {h.sectorsCta}
                </Link>
              </HomeItem>
            </HomeStagger>

            <HomeStagger as="ol" className="home-moments__list">
              {h.sectorCards.map((sector, i) => (
                <HomeItem
                  key={sector.title}
                  index={i}
                  stagger={0.09}
                  as="li"
                  className="home-moments__item"
                >
                  <Link to={routes.sectors} className="home-moments__link">
                    <span className="home-moments__num">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="home-moments__media">
                      <img src={sector.image} alt="" />
                    </div>
                    <h3 className="home-moments__name">{sector.title}</h3>
                  </Link>
                </HomeItem>
              ))}
            </HomeStagger>
          </div>
        </div>
      </HomeSection>

      {/* Projects */}
      <HomeSection className="border-t border-rule bg-sand2" id="projects">
        <div className="home-ground">
          <div className="wrap home-ground__grid">
            <HomeStagger className="home-ground__intro">
              <HomeItem index={0} as="p" className="eyebrow" tone="soft">
                {projects.eyebrow}
              </HomeItem>
              <HomeItem index={1} as="h2" className="home-ground__title">
                {projects.title}
              </HomeItem>
              <HomeItem index={2} as="p" className="home-ground__body">
                {projects.subtitle}
              </HomeItem>
              <HomeItem
                index={3}
                as="span"
                tone="rule"
                className="home-ground__rule"
                aria-hidden
              />
            </HomeStagger>

            <div className="home-ground__media">
              <HomeImage
                src="/media/home-featured.jpg"
                className="home-ground__img-wrap"
              />
            </div>

            <HomeStagger className="home-ground__aside">
              <HomeItem index={0} as="p" className="home-ground__tag" tone="soft">
                {featured.tag}
              </HomeItem>
              <HomeItem index={1} as="h3" className="home-ground__project">
                {featured.title}
              </HomeItem>
              <HomeItem index={2} as="p" className="home-ground__project-body">
                {featured.body[0]}
              </HomeItem>
              <HomeItem index={3}>
                <dl className="home-ground__stats">
                  {featured.meta.slice(0, 3).map((stat) => (
                    <div key={stat.label} className="home-ground__stat">
                      <dt>{stat.label}</dt>
                      <dd>{stat.value}</dd>
                    </div>
                  ))}
                </dl>
              </HomeItem>
              <HomeItem index={4}>
                <Link to={routes.projects} className="home-ground__cta">
                  {h.projectCta}
                </Link>
              </HomeItem>
            </HomeStagger>
          </div>
        </div>
      </HomeSection>

      {/* Experts */}
      <HomeSection className="border-t border-rule bg-ivory" id="experts">
        <div className="home-focus">
          <div className="wrap home-focus__grid">
            <HomeStagger className="home-focus__intro">
              <HomeItem index={0} as="p" className="eyebrow" tone="soft">
                {experts.eyebrow}
              </HomeItem>
              <HomeItem index={1} as="h2" className="home-focus__title">
                {experts.directTitle}
              </HomeItem>
              <HomeItem index={2} as="p" className="home-focus__body">
                {experts.directBody}
              </HomeItem>
              <HomeItem
                index={3}
                as="span"
                tone="rule"
                className="home-focus__rule"
                aria-hidden
              />
              <HomeItem index={4}>
                <Link to={routes.experts} className="home-focus__cta">
                  {h.expertsCta}
                </Link>
              </HomeItem>
            </HomeStagger>

            <HomeStagger as="ol" className="home-focus__list">
              {experts.points.map((point, i) => (
                <HomeItem
                  key={point.label}
                  index={i}
                  stagger={0.09}
                  as="li"
                  className="home-focus__item"
                >
                  <span className="home-focus__num">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="home-focus__copy">
                    <h3 className="home-focus__item-title">{point.label}</h3>
                    <p className="home-focus__item-body">{point.value}</p>
                  </div>
                </HomeItem>
              ))}
            </HomeStagger>
          </div>
        </div>
      </HomeSection>

      {/* Close */}
      <HomeSection className="border-t border-rule bg-sand2">
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
      </HomeSection>
    </>
  )
}
