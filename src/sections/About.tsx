import { CorridorMap } from '../components/CorridorMap'
import { IconPin } from '../components/BrandIcons'
import {
  HomeImage,
  HomeItem,
  HomeReveal,
  HomeSection,
  HomeStagger,
} from '../components/home/HomeReveal'
import { PageIntro } from '../components/PageIntro'
import { useLanguage } from '../context/LanguageContext'

export function About() {
  const { t } = useLanguage()
  const a = t.about
  const w = t.where
  const b = t.board

  return (
    <section className="bg-ivory">
      {/* Intro */}
      <HomeSection className="border-b border-rule">
        <div className="wrap">
          <PageIntro eyebrow={a.eyebrow} title={a.title} body={a.intro} />
        </div>
      </HomeSection>

      {/* Story */}
      <HomeSection className="border-b border-rule bg-sand2">
        <div className="page-story">
          <div className="wrap page-story__grid">
            <HomeStagger className="page-story__copy">
              <HomeItem index={0} as="p" className="page-story__lead">
                {a.body}
              </HomeItem>
              <HomeItem index={1} as="p" className="page-story__body">
                {a.body2}
              </HomeItem>
            </HomeStagger>
            <HomeImage
              src="/media/about-landscape.jpg"
              className="page-story__media"
            />
          </div>
        </div>
      </HomeSection>

      {/* Mission / Vision */}
      <HomeSection className="border-b border-rule bg-ivory">
        <div className="page-pair">
          <div className="wrap page-pair__grid">
            <HomeStagger className="page-pair__item">
              <HomeItem index={0} as="p" className="eyebrow" tone="soft">
                {a.missionLabel}
              </HomeItem>
              <HomeItem index={1} as="h2" className="page-pair__title">
                {a.missionTitle}
              </HomeItem>
              <HomeItem
                index={2}
                as="span"
                tone="rule"
                className="page-pair__rule"
                aria-hidden
              />
              <HomeItem index={3} as="p" className="page-pair__body">
                {a.missionBody}
              </HomeItem>
            </HomeStagger>
            <HomeStagger className="page-pair__item">
              <HomeItem index={0} as="p" className="eyebrow" tone="soft" baseDelay={0.12}>
                {a.visionLabel}
              </HomeItem>
              <HomeItem index={1} as="h2" className="page-pair__title" baseDelay={0.12}>
                {a.visionTitle}
              </HomeItem>
              <HomeItem
                index={2}
                as="span"
                tone="rule"
                className="page-pair__rule"
                baseDelay={0.12}
                aria-hidden
              />
              <HomeItem index={3} as="p" className="page-pair__body" baseDelay={0.12}>
                {a.visionBody}
              </HomeItem>
            </HomeStagger>
          </div>
        </div>
      </HomeSection>

      {/* Values */}
      <HomeSection className="border-b border-rule bg-sand2">
        <div className="home-focus">
          <div className="wrap home-focus__grid">
            <HomeStagger className="home-focus__intro">
              <HomeItem index={0} as="p" className="eyebrow" tone="soft">
                {a.valuesLabel}
              </HomeItem>
              <HomeItem index={1} as="h2" className="home-focus__title">
                {a.valuesTitle}
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
              {a.values.map((value, i) => (
                <HomeItem
                  key={value.title}
                  index={i}
                  stagger={0.09}
                  as="li"
                  className="home-focus__item"
                >
                  <span className="home-focus__num">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="home-focus__copy">
                    <h3 className="home-focus__item-title">{value.title}</h3>
                    <p className="home-focus__item-body">{value.body}</p>
                  </div>
                </HomeItem>
              ))}
            </HomeStagger>
          </div>
        </div>
      </HomeSection>

      {/* Board */}
      <HomeSection className="border-b border-rule bg-ivory" id="board">
        <div className="board-pro">
          <div className="wrap">
            <HomeStagger className="board-pro__head">
              <HomeItem index={0} as="p" className="eyebrow" tone="soft">
                {b.eyebrow}
              </HomeItem>
              <HomeItem index={1} as="h2" className="board-pro__title">
                {b.title}
              </HomeItem>
              <HomeItem index={2} as="p" className="board-pro__lead">
                {b.subtitle}
              </HomeItem>
              <HomeItem
                index={3}
                as="span"
                tone="rule"
                className="board-pro__rule"
                aria-hidden
              />
            </HomeStagger>

            <div className="board-pro__list">
              {b.members.map((member, i) => (
                <HomeReveal
                  key={member.name}
                  as="article"
                  className={`board-pro__member${i % 2 === 1 ? ' is-flip' : ''}`}
                  delay={0.04 + i * 0.05}
                >
                  <div className="board-pro__portrait">
                    <img
                      src={member.image}
                      alt=""
                      className="board-pro__img"
                    />
                    <span className="board-pro__index" aria-hidden>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="board-pro__copy">
                    <p className="board-pro__role">{member.role}</p>
                    <h3 className="board-pro__name">{member.name}</h3>
                    <p className="board-pro__bio">{member.bio}</p>
                    <ul className="board-pro__creds">
                      {member.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </HomeReveal>
              ))}
            </div>
          </div>
        </div>
      </HomeSection>

      {/* Where we work */}
      <HomeSection className="border-b border-rule bg-sand2" id="where">
        <div className="page-where">
          <div className="wrap">
            <HomeStagger className="page-where__intro">
              <HomeItem index={0} as="p" className="eyebrow" tone="soft">
                {w.eyebrow}
              </HomeItem>
              <HomeItem index={1} as="h2" className="page-where__title">
                {w.title}
              </HomeItem>
              <HomeItem index={2} as="p" className="page-where__body">
                {w.subtitle}
              </HomeItem>
              <HomeItem
                index={3}
                as="span"
                tone="rule"
                className="page-where__rule"
                aria-hidden
              />
            </HomeStagger>

            <HomeReveal className="page-where__map" delay={0.08}>
              <CorridorMap />
            </HomeReveal>

            <HomeStagger as="ol" className="page-where__list">
              {w.locations.map((loc, i) => (
                <HomeItem
                  key={loc.name}
                  index={i}
                  stagger={0.1}
                  as="li"
                  className="page-where__item"
                >
                  <div className="page-where__media">
                    <img src={loc.image} alt="" />
                  </div>
                  <div className="page-where__meta">
                    <div className="page-where__pin">
                      <IconPin className="h-4 w-4" />
                      <span className="page-where__co">{loc.meta}</span>
                    </div>
                    <h3 className="page-where__name">{loc.name}</h3>
                    <p className="page-where__text">{loc.body}</p>
                  </div>
                </HomeItem>
              ))}
            </HomeStagger>
          </div>
        </div>
      </HomeSection>

      {/* Why */}
      <HomeSection className="bg-ivory">
        <div className="page-band">
          <div className="wrap page-band__grid">
            <HomeStagger className="page-band__intro">
              <HomeItem index={0} as="p" className="eyebrow" tone="soft">
                {a.whyLabel}
              </HomeItem>
              <HomeItem index={1} as="h2" className="page-band__title">
                {a.whyTitle}
              </HomeItem>
              <HomeItem
                index={2}
                as="span"
                tone="rule"
                className="page-band__rule"
                aria-hidden
              />
            </HomeStagger>
            <HomeStagger className="page-band__copy">
              <HomeItem index={0} as="p" className="page-band__body">
                {a.whyBody}
              </HomeItem>
              <HomeItem index={1} as="p" className="page-band__tags">
                {a.whyKeywords.map((k) => (
                  <span key={k}>{k}</span>
                ))}
              </HomeItem>
            </HomeStagger>
          </div>
        </div>
      </HomeSection>
    </section>
  )
}
