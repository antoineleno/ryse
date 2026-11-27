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

  return (
    <section className="bg-ivory">
      <HomeSection className="border-b border-rule">
        <div className="wrap">
          <PageIntro eyebrow={s.eyebrow} title={s.title} body={s.subtitle} />
        </div>
      </HomeSection>

      {s.items.map((item, i) => {
        const flip = i % 2 === 1
        return (
          <HomeSection
            key={item.title}
            className={`border-b border-rule ${flip ? 'bg-ivory' : 'bg-sand2'}`}
          >
            <div className="page-sector">
              <div
                className={`wrap page-sector__panel${flip ? ' page-sector__panel--flip' : ''}`}
              >
                <HomeImage src={item.image} className="page-sector__media" />
                <HomeStagger className="page-sector__detail">
                  <HomeItem
                    index={0}
                    as="p"
                    className="page-sector__count"
                    tone="soft"
                  >
                    {String(i + 1).padStart(2, '0')}
                    <span aria-hidden> / </span>
                    {String(s.items.length).padStart(2, '0')}
                  </HomeItem>
                  <HomeItem index={1} as="h2" className="page-sector__name">
                    {item.title}
                  </HomeItem>
                  <HomeItem
                    index={2}
                    as="span"
                    tone="rule"
                    className="page-sector__rule"
                    aria-hidden
                  />
                  <HomeItem index={3} as="p" className="page-sector__body">
                    {item.body}
                  </HomeItem>
                </HomeStagger>
              </div>
            </div>
          </HomeSection>
        )
      })}

      <HomeSection className="bg-ivory">
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
