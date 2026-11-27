import { Link } from 'react-router-dom'
import {
  HomeImage,
  HomeItem,
  HomeSection,
  HomeStagger,
} from '../components/home/HomeReveal'
import { useLanguage } from '../context/LanguageContext'
import { routes } from '../lib/routes'

export function Approach() {
  const { t } = useLanguage()
  const a = t.approach

  return (
    <section className="bg-ivory">
      <HomeSection className="border-b border-rule bg-ivory">
        <div className="approach-listen">
          <div className="wrap approach-listen__grid">
            <HomeStagger className="approach-listen__intro">
              <HomeItem index={0} as="p" className="eyebrow" tone="soft">
                {a.eyebrow}
              </HomeItem>
              <HomeItem index={1} as="h1" className="approach-listen__title">
                {a.title}
              </HomeItem>
              <HomeItem index={2} as="p" className="approach-listen__body">
                {a.subtitle}
              </HomeItem>
              <HomeItem
                index={3}
                as="span"
                tone="rule"
                className="approach-listen__rule"
                aria-hidden
              />
            </HomeStagger>

            <div className="approach-listen__media">
              <HomeImage
                src="/media/approach-listen.jpg"
                className="approach-listen__img-wrap"
              />
            </div>

            <HomeStagger as="ol" className="approach-listen__steps">
              {a.steps.map((step, i) => (
                <HomeItem
                  key={step.num}
                  index={i}
                  stagger={0.1}
                  as="li"
                  className="approach-listen__step"
                >
                  <span className="approach-listen__num">{step.num}</span>
                  <div>
                    <h2 className="approach-listen__step-title">{step.title}</h2>
                    <p className="approach-listen__step-body">{step.body}</p>
                  </div>
                </HomeItem>
              ))}
            </HomeStagger>
          </div>
        </div>
      </HomeSection>

      <HomeSection className="bg-sand2">
        <div className="page-band">
          <div className="wrap page-band__grid">
            <HomeStagger className="page-band__intro">
              <HomeItem index={0} as="p" className="eyebrow" tone="soft">
                {a.networkLabel}
              </HomeItem>
              <HomeItem index={1} as="h2" className="page-band__title">
                {a.networkTitle}
              </HomeItem>
              <HomeItem
                index={2}
                as="span"
                tone="rule"
                className="page-band__rule"
                aria-hidden
              />
              <HomeItem index={3}>
                <Link to={routes.experts} className="page-band__cta">
                  {a.networkCta}
                </Link>
              </HomeItem>
            </HomeStagger>
            <HomeItem index={0} className="page-band__copy" baseDelay={0.1}>
              <p className="page-band__body">{a.networkBody}</p>
            </HomeItem>
          </div>
        </div>
      </HomeSection>
    </section>
  )
}
