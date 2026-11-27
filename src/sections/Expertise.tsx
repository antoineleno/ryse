import { Link } from 'react-router-dom'
import {
  HomeImage,
  HomeItem,
  HomeSection,
  HomeStagger,
} from '../components/home/HomeReveal'
import { PageIntro } from '../components/PageIntro'
import { useLanguage } from '../context/LanguageContext'
import { routes } from '../lib/routes'

export function Expertise() {
  const { t } = useLanguage()
  const e = t.expertise

  return (
    <section className="bg-ivory">
      <HomeSection className="border-b border-rule">
        <div className="wrap">
          <PageIntro eyebrow={e.eyebrow} title={e.title} body={e.subtitle} />
        </div>
      </HomeSection>

      {/* Leading practice */}
      <HomeSection className="border-b border-rule bg-sand2">
        <div className="approach-listen">
          <div className="wrap approach-listen__grid">
            <HomeStagger className="approach-listen__intro">
              <HomeItem index={0} as="p" className="eyebrow" tone="soft">
                {e.leadingLabel}
              </HomeItem>
              <HomeItem index={1} as="h2" className="approach-listen__title">
                {e.leadingTitle}
              </HomeItem>
              <HomeItem index={2} as="p" className="approach-listen__body">
                {e.leadingBody}
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
                src="/media/expertise-policy.jpg"
                className="approach-listen__img-wrap"
              />
            </div>

            <HomeStagger as="ol" className="approach-listen__steps">
              <HomeItem index={0} stagger={0.1} as="li" className="approach-listen__step">
                <span className="approach-listen__num">01</span>
                <div>
                  <h3 className="approach-listen__step-title">{e.govTitle}</h3>
                  <p className="approach-listen__step-body">{e.govBody}</p>
                </div>
              </HomeItem>
              <HomeItem index={1} stagger={0.1} as="li" className="approach-listen__step">
                <span className="approach-listen__num">02</span>
                <div>
                  <h3 className="approach-listen__step-title">{e.privateTitle}</h3>
                  <p className="approach-listen__step-body">{e.privateBody}</p>
                </div>
              </HomeItem>
              <HomeItem index={2} stagger={0.1} as="li" className="approach-listen__step">
                <span className="approach-listen__num">03</span>
                <div>
                  <h3 className="approach-listen__step-title">{e.whereHelpLabel}</h3>
                  <ul className="page-help-tags">
                    {e.whereHelp.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </HomeItem>
            </HomeStagger>
          </div>
        </div>
      </HomeSection>

      {/* Practices */}
      <HomeSection className="border-b border-rule bg-ivory">
        <div className="home-focus">
          <div className="wrap home-focus__grid">
            <HomeStagger className="home-focus__intro">
              <HomeItem index={0} as="p" className="eyebrow" tone="soft">
                {e.practicesLabel}
              </HomeItem>
              <HomeItem index={1} as="h2" className="home-focus__title">
                {e.practicesTitle}
              </HomeItem>
              <HomeItem
                index={2}
                as="span"
                tone="rule"
                className="home-focus__rule"
                aria-hidden
              />
            </HomeStagger>
            <HomeStagger as="ol" className="home-focus__list">
              {e.practices.map((practice, i) => (
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

      {/* Clients */}
      <HomeSection className="bg-sand2">
        <div className="page-band">
          <div className="wrap page-band__grid">
            <HomeStagger className="page-band__intro">
              <HomeItem index={0} as="p" className="eyebrow" tone="soft">
                {e.clientsLabel}
              </HomeItem>
              <HomeItem index={1} as="h2" className="page-band__title">
                {e.clientsTitle}
              </HomeItem>
              <HomeItem
                index={2}
                as="span"
                tone="rule"
                className="page-band__rule"
                aria-hidden
              />
              <HomeItem index={3}>
                <Link to={routes.contact} className="page-band__cta">
                  {t.contactCta}
                </Link>
              </HomeItem>
            </HomeStagger>
            <HomeStagger className="page-band__copy">
              <HomeItem index={0} as="p" className="page-band__body">
                {e.clientsBody}
              </HomeItem>
              <HomeItem index={1} as="p" className="page-band__tags">
                {e.clientTypes.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </HomeItem>
            </HomeStagger>
          </div>
        </div>
      </HomeSection>
    </section>
  )
}
