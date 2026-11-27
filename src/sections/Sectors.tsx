import { useState } from 'react'
import {
  HomeImage,
  HomeItem,
  HomeSection,
  HomeStagger,
} from '../components/home/HomeReveal'
import { PageIntro } from '../components/PageIntro'
import { useLanguage } from '../context/LanguageContext'

export function Sectors() {
  const { t } = useLanguage()
  const s = t.sectors
  const [active, setActive] = useState(0)
  const current = s.items[active] ?? s.items[0]

  return (
    <section className="bg-ivory">
      <HomeSection className="border-b border-rule">
        <div className="wrap">
          <PageIntro eyebrow={s.eyebrow} title={s.title} body={s.subtitle} />
        </div>
      </HomeSection>

      {/* Active sector stage */}
      <HomeSection className="border-b border-rule bg-sand2">
        <div className="page-sector">
          <div className="wrap page-sector__stage">
            <HomeImage
              key={current.image}
              src={current.image}
              className="page-sector__media"
            />
            <HomeStagger className="page-sector__detail" key={current.title}>
              <HomeItem index={0} as="p" className="page-sector__count" tone="soft">
                {String(active + 1).padStart(2, '0')}
                <span aria-hidden> / </span>
                {String(s.items.length).padStart(2, '0')}
              </HomeItem>
              <HomeItem index={1} as="h2" className="page-sector__name">
                {current.title}
              </HomeItem>
              <HomeItem
                index={2}
                as="span"
                tone="rule"
                className="page-sector__rule"
                aria-hidden
              />
              <HomeItem index={3} as="p" className="page-sector__body">
                {current.body}
              </HomeItem>
            </HomeStagger>
          </div>
        </div>
      </HomeSection>

      {/* Sector list */}
      <HomeSection className="border-b border-rule bg-ivory">
        <div className="home-insights">
          <div className="wrap home-insights__grid">
            <HomeStagger className="home-insights__intro">
              <HomeItem index={0} as="p" className="eyebrow" tone="soft">
                {s.indexLabel}
              </HomeItem>
              <HomeItem index={1} as="h2" className="home-insights__title">
                {s.indexTitle}
              </HomeItem>
              <HomeItem
                index={2}
                as="span"
                tone="rule"
                className="home-insights__rule"
                aria-hidden
              />
            </HomeStagger>
            <HomeStagger as="ul" className="home-insights__list page-sector__list">
              {s.items.map((item, i) => (
                <HomeItem key={item.title} index={i} stagger={0.07} as="li">
                  <button
                    type="button"
                    className={`home-insights__row page-sector__row${
                      active === i ? ' is-active' : ''
                    }`}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                  >
                    <span className="page-sector__num">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="home-insights__meta">
                      <span className="home-insights__name">{item.title}</span>
                    </span>
                    <span className="home-insights__more" aria-hidden>
                      →
                    </span>
                  </button>
                </HomeItem>
              ))}
            </HomeStagger>
          </div>
        </div>
      </HomeSection>

      {/* Enablers */}
      <HomeSection className="bg-sand2">
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
