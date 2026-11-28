import {
  HomeImage,
  HomeItem,
  HomeSection,
  HomeStagger,
} from '../components/home/HomeReveal'
import { useLanguage } from '../context/LanguageContext'

export function Projects() {
  const { t } = useLanguage()
  const p = t.projects
  const f = p.featured

  return (
    <section className="bg-sand2">
      {/* Stillwell reference: right image + overlapping ivory card + italic lead */}
      <section className="project-hero" aria-label={p.title}>
        <div className="project-hero__stage">
          <div className="project-hero__media">
            <HomeImage
              src="/media/project-energy.jpg"
              className="project-hero__photo"
              objectPosition="50% 48%"
              delay={0.08}
            />
          </div>

          <HomeStagger className="project-hero__card">
            <HomeItem index={0} as="h1" className="project-hero__title">
              {p.title}
            </HomeItem>
            <HomeItem
              index={1}
              as="p"
              className="project-hero__support"
              tone="soft"
              baseDelay={0.2}
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
            aria-hidden
          />
          <HomeItem
            index={1}
            as="p"
            className="project-hero__italic"
            tone="soft"
            baseDelay={0.38}
          >
            {p.subtitle}
          </HomeItem>
        </HomeStagger>
      </section>

      {/* Featured mandate */}
      <HomeSection className="border-t border-rule bg-ivory">
        <div className="project-feature">
          <div className="wrap project-feature__grid">
            <HomeStagger className="project-feature__intro">
              <HomeItem index={0} as="p" className="eyebrow" tone="soft">
                {f.tag}
              </HomeItem>
              <HomeItem index={1} as="h2" className="project-feature__title">
                {f.title}
              </HomeItem>
              <HomeItem index={2} as="p" className="project-feature__lede">
                {f.body[0]}
              </HomeItem>
              <HomeItem
                index={3}
                as="span"
                tone="rule"
                className="project-feature__rule"
                aria-hidden
              />
            </HomeStagger>

            <div className="project-feature__media">
              <HomeImage
                src="/media/sector-energy.jpg"
                className="project-feature__frame"
                objectPosition="50% 40%"
              />
            </div>

            <HomeStagger className="project-feature__aside">
              {f.body.slice(1).map((paragraph, i) => (
                <HomeItem
                  key={paragraph.slice(0, 28)}
                  index={i}
                  as="p"
                  className="project-feature__copy"
                >
                  {paragraph}
                </HomeItem>
              ))}
              <HomeItem
                index={f.body.length}
                as="dl"
                className="project-feature__meta"
              >
                {f.meta.map((item) => (
                  <div key={item.label} className="project-feature__row">
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </HomeItem>
            </HomeStagger>
          </div>
        </div>
      </HomeSection>
    </section>
  )
}
