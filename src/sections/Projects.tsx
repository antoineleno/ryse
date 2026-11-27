import {
  HomeImage,
  HomeItem,
  HomeSection,
  HomeStagger,
} from '../components/home/HomeReveal'
import { PageIntro } from '../components/PageIntro'
import { useLanguage } from '../context/LanguageContext'

export function Projects() {
  const { t } = useLanguage()
  const p = t.projects
  const f = p.featured

  return (
    <section className="bg-ivory">
      <HomeSection className="border-b border-rule">
        <div className="wrap">
          <PageIntro eyebrow={p.eyebrow} title={p.title} body={p.subtitle} />
        </div>
      </HomeSection>

      <HomeSection className="bg-sand2">
        <div className="home-ground">
          <div className="wrap home-ground__grid">
            <HomeStagger className="home-ground__intro">
              <HomeItem index={0} as="p" className="eyebrow" tone="soft">
                {f.tag}
              </HomeItem>
              <HomeItem index={1} as="h2" className="home-ground__title">
                {f.title}
              </HomeItem>
              <HomeItem index={2} as="p" className="home-ground__body">
                {f.body[0]}
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
                src="/media/project-energy.jpg"
                className="home-ground__img-wrap"
              />
              <HomeItem index={0} as="p" className="home-ground__tag" baseDelay={0.15}>
                {f.tag}
              </HomeItem>
            </div>

            <HomeStagger className="home-ground__aside">
              {f.body.slice(1).map((paragraph, i) => (
                <HomeItem
                  key={paragraph.slice(0, 24)}
                  index={i}
                  as="p"
                  className="home-ground__project-body"
                >
                  {paragraph}
                </HomeItem>
              ))}
              <HomeItem index={f.body.length} as="dl" className="home-ground__stats">
                {f.meta.map((item) => (
                  <div key={item.label} className="home-ground__stat">
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
