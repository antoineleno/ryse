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
        <div className="page-story">
          <div className="wrap page-story__grid">
            <HomeStagger className="page-story__copy">
              <HomeItem index={0} as="p" className="eyebrow" tone="soft">
                {e.leadingLabel}
              </HomeItem>
              <HomeItem index={1} as="h2" className="page-pair__title">
                {e.leadingTitle}
              </HomeItem>
              <HomeItem
                index={2}
                as="span"
                tone="rule"
                className="page-pair__rule"
                aria-hidden
              />
              <HomeItem index={3} as="p" className="page-story__body">
                {e.leadingBody}
              </HomeItem>
            </HomeStagger>
            <HomeImage
              src="/media/expertise-policy.jpg"
              className="page-story__media"
            />
          </div>
        </div>
      </HomeSection>

      {/* Governments / Private */}
      <HomeSection className="border-b border-rule bg-ivory">
        <div className="page-pair">
          <div className="wrap page-pair__grid">
            <HomeStagger className="page-pair__item">
              <HomeItem index={0} as="p" className="page-pair__kicker" tone="soft">
                01
              </HomeItem>
              <HomeItem index={1} as="h2" className="page-pair__title">
                {e.govTitle}
              </HomeItem>
              <HomeItem
                index={2}
                as="span"
                tone="rule"
                className="page-pair__rule"
                aria-hidden
              />
              <HomeItem index={3} as="p" className="page-pair__body">
                {e.govBody}
              </HomeItem>
            </HomeStagger>
            <HomeStagger className="page-pair__item">
              <HomeItem
                index={0}
                as="p"
                className="page-pair__kicker"
                tone="soft"
                baseDelay={0.12}
              >
                02
              </HomeItem>
              <HomeItem
                index={1}
                as="h2"
                className="page-pair__title"
                baseDelay={0.12}
              >
                {e.privateTitle}
              </HomeItem>
              <HomeItem
                index={2}
                as="span"
                tone="rule"
                className="page-pair__rule"
                baseDelay={0.12}
                aria-hidden
              />
              <HomeItem
                index={3}
                as="p"
                className="page-pair__body"
                baseDelay={0.12}
              >
                {e.privateBody}
              </HomeItem>
            </HomeStagger>
          </div>
        </div>
      </HomeSection>

      {/* Where we help */}
      <HomeSection className="border-b border-rule bg-sand2">
        <div className="page-pair">
          <div className="wrap">
            <HomeStagger className="page-pair__head">
              <HomeItem index={0} as="p" className="eyebrow" tone="soft">
                {e.whereHelpLabel}
              </HomeItem>
              <HomeItem
                index={1}
                as="span"
                tone="rule"
                className="page-pair__rule"
                aria-hidden
              />
            </HomeStagger>
            <HomeStagger as="ul" className="page-help-tags page-help-tags--roomy">
              {e.whereHelp.map((item, i) => (
                <HomeItem key={item} index={i} stagger={0.05} as="li">
                  {item}
                </HomeItem>
              ))}
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
