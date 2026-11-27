import { Link } from 'react-router-dom'
import {
  HomeImage,
  HomeItem,
  HomeSection,
  HomeStagger,
} from '../components/home/HomeReveal'
import { useLanguage } from '../context/LanguageContext'
import { routes } from '../lib/routes'

const mediaFocus = ['22% 30%', '45% 35%', '48% 42%'] as const

export function Sectors() {
  const { t } = useLanguage()
  const s = t.sectors

  return (
    <section className="bg-ivory">
      <HomeSection>
        <div className="sector-stack">
          <div className="wrap">
            <HomeStagger className="sector-stack__head">
              <HomeItem index={0} as="p" className="eyebrow" tone="soft">
                {s.eyebrow}
              </HomeItem>
              <HomeItem index={1} as="h1" className="sector-stack__title">
                {s.title}
              </HomeItem>
              <HomeItem index={2} as="p" className="sector-stack__lede">
                {s.subtitle}
              </HomeItem>
            </HomeStagger>
          </div>

          <div className="sector-stack__list">
            {s.items.map((item, i) => {
              const flip = i % 2 === 1
              return (
                <article
                  key={item.title}
                  className={`sector-block${flip ? ' is-flip' : ''}`}
                >
                  <div className="wrap sector-block__grid">
                    <HomeStagger className="sector-block__copy">
                      <HomeItem
                        index={0}
                        as="p"
                        className="sector-block__num"
                        tone="soft"
                      >
                        {String(i + 1).padStart(2, '0')}.
                        <span className="sector-block__rail" aria-hidden />
                      </HomeItem>
                      <HomeItem index={1} as="h2" className="sector-block__name">
                        {item.title}
                      </HomeItem>
                      <HomeItem index={2} as="p" className="sector-block__body">
                        {item.body}
                      </HomeItem>
                      <HomeItem
                        index={3}
                        as="p"
                        className="sector-block__tagline"
                        tone="soft"
                      >
                        {item.prompt}
                      </HomeItem>
                      <HomeItem index={4} className="sector-block__actions">
                        <Link
                          to={routes.contact}
                          className="btn-ryse solid sector-block__cta"
                        >
                          {s.learnMore}
                        </Link>
                      </HomeItem>
                    </HomeStagger>

                    <div className="sector-block__visual">
                      <span className="sector-block__plate" aria-hidden />
                      <HomeImage
                        src={item.image}
                        className="sector-block__media"
                        objectPosition={mediaFocus[i] ?? '50% 50%'}
                      />
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </HomeSection>

      <HomeSection className="border-t border-rule bg-sand2">
        <div className="page-pair">
          <div className="wrap">
            <HomeStagger className="page-pair__head">
              <HomeItem index={0} as="p" className="eyebrow" tone="soft">
                {s.enablersLabel}
              </HomeItem>
              <HomeItem index={1} as="h2" className="page-pair__head-title">
                {s.enablersTitle}
              </HomeItem>
              <HomeItem
                index={2}
                as="span"
                tone="rule"
                className="page-pair__rule"
                aria-hidden
              />
            </HomeStagger>
            <div className="page-pair__grid page-pair__grid--tight">
              <HomeStagger className="page-pair__item">
                <HomeItem index={0} as="p" className="page-pair__kicker" tone="soft">
                  01
                </HomeItem>
                <HomeItem index={1} as="h3" className="page-pair__title">
                  {s.technology.title}
                </HomeItem>
                <HomeItem index={2} as="p" className="page-pair__body">
                  {s.technology.body}
                </HomeItem>
              </HomeStagger>
              <HomeStagger className="page-pair__item">
                <HomeItem
                  index={0}
                  as="p"
                  className="page-pair__kicker"
                  tone="soft"
                  baseDelay={0.1}
                >
                  02
                </HomeItem>
                <HomeItem
                  index={1}
                  as="h3"
                  className="page-pair__title"
                  baseDelay={0.1}
                >
                  {s.finance.title}
                </HomeItem>
                <HomeItem
                  index={2}
                  as="p"
                  className="page-pair__body"
                  baseDelay={0.1}
                >
                  {s.finance.body}
                </HomeItem>
              </HomeStagger>
            </div>
          </div>
        </div>
      </HomeSection>
    </section>
  )
}
