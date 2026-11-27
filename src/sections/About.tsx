import { Link } from 'react-router-dom'
import {
  HomeItem,
  HomeReveal,
  HomeStagger,
} from '../components/home/HomeReveal'
import { useLanguage } from '../context/LanguageContext'
import { routes } from '../lib/routes'

export function About() {
  const { t } = useLanguage()
  const a = t.about
  const w = t.where
  const b = t.board

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="ab-hero">
        <HomeStagger className="ab-hero__copy">
          <HomeItem
            index={0}
            as="p"
            className="ab-eyebrow"
            tone="soft"
            baseDelay={0.06}
            stagger={0.11}
          >
            {a.eyebrow}
          </HomeItem>
          <HomeItem
            index={1}
            as="h1"
            className="ab-hero__title"
            baseDelay={0.06}
            stagger={0.11}
          >
            {a.title}
          </HomeItem>
          <HomeItem
            index={2}
            as="p"
            className="ab-hero__body"
            tone="soft"
            baseDelay={0.06}
            stagger={0.11}
          >
            {a.intro}
          </HomeItem>
        </HomeStagger>
        <HomeReveal className="ab-hero__media" delay={0.22} tone="media">
          <img
            className="ab-hero__bg"
            src="/media/about-landscape.jpg?v=4"
            alt=""
            aria-hidden="true"
          />
        </HomeReveal>
      </section>

      {/* Story */}
      <section className="ab-story">
        <div className="wrap ab-story__grid">
          <HomeStagger className="ab-story__copy">
            <HomeItem
              index={0}
              as="p"
              className="ab-eyebrow"
              tone="soft"
              baseDelay={0.05}
              stagger={0.09}
            >
              {a.storyLabel}
            </HomeItem>
            <HomeItem
              index={1}
              as="h2"
              className="ab-story__title"
              baseDelay={0.05}
              stagger={0.09}
            >
              {a.storyTitle}
            </HomeItem>
            <HomeItem
              index={2}
              as="span"
              className="ab-rule"
              tone="rule"
              baseDelay={0.22}
            />
            <HomeItem
              index={3}
              as="p"
              className="ab-story__lead"
              tone="soft"
              baseDelay={0.05}
              stagger={0.09}
            >
              {a.body}
            </HomeItem>
            <HomeItem
              index={4}
              as="p"
              className="ab-story__body"
              tone="soft"
              baseDelay={0.05}
              stagger={0.09}
            >
              {a.body2}
            </HomeItem>
          </HomeStagger>
          <HomeReveal className="ab-story__media" delay={0.16} tone="media">
            <img src="/media/about-texture.jpg?v=4" alt="" />
          </HomeReveal>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="ab-pair" id="mission">
        <div className="wrap">
          <HomeStagger className="ab-pair__head">
            <HomeItem
              index={0}
              as="p"
              className="ab-eyebrow"
              tone="soft"
              baseDelay={0.05}
              stagger={0.09}
            >
              {a.purposeLabel}
            </HomeItem>
            <HomeItem
              index={1}
              as="h2"
              className="ab-pair__heading"
              baseDelay={0.05}
              stagger={0.09}
            >
              {a.purposeTitle}
            </HomeItem>
            <HomeItem
              index={2}
              as="span"
              className="ab-rule"
              tone="rule"
              baseDelay={0.22}
            />
          </HomeStagger>

          <div className="ab-pair__rows">
            <HomeReveal className="ab-pair__row" delay={0.1}>
              <p className="ab-pair__tag">{a.missionLabel}</p>
              <h3 className="ab-pair__title">{a.missionTitle}</h3>
              <p className="ab-pair__body">{a.missionBody}</p>
            </HomeReveal>
            <HomeReveal className="ab-pair__row" delay={0.2}>
              <p className="ab-pair__tag">{a.visionLabel}</p>
              <h3 className="ab-pair__title">{a.visionTitle}</h3>
              <p className="ab-pair__body">{a.visionBody}</p>
            </HomeReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="ab-values" id="values">
        <div className="wrap">
          <HomeStagger className="ab-values__head">
            <HomeItem
              index={0}
              as="p"
              className="ab-eyebrow"
              tone="soft"
              baseDelay={0.05}
              stagger={0.09}
            >
              {a.valuesLabel}
            </HomeItem>
            <HomeItem
              index={1}
              as="h2"
              className="ab-values__title"
              baseDelay={0.05}
              stagger={0.09}
            >
              {a.valuesTitle}
            </HomeItem>
            <HomeItem
              index={2}
              as="span"
              className="ab-rule"
              tone="rule"
              baseDelay={0.22}
            />
          </HomeStagger>
          <ul className="ab-values__list">
            {a.values.map((value, i) => (
              <HomeItem
                key={value.title}
                as="li"
                className="ab-values__item"
                index={i}
                baseDelay={0.08}
                stagger={0.09}
              >
                <h3 className="ab-values__name">{value.title}</h3>
                <p className="ab-values__body">{value.body}</p>
              </HomeItem>
            ))}
          </ul>
        </div>
      </section>

      {/* Why RYSE */}
      <section className="ab-why">
        <div className="wrap ab-why__grid">
          <HomeStagger className="ab-why__intro">
            <HomeItem
              index={0}
              as="p"
              className="ab-eyebrow"
              tone="soft"
              baseDelay={0.05}
              stagger={0.1}
            >
              {a.whyLabel}
            </HomeItem>
            <HomeItem
              index={1}
              as="h2"
              className="ab-why__title"
              baseDelay={0.05}
              stagger={0.1}
            >
              {a.whyTitle}
            </HomeItem>
          </HomeStagger>
          <HomeStagger className="ab-why__aside">
            <HomeItem
              index={0}
              as="p"
              className="ab-why__body"
              tone="soft"
              baseDelay={0.12}
              stagger={0.08}
            >
              {a.whyBody}
            </HomeItem>
            <div className="ab-why__tags">
              {a.whyKeywords.map((k, i) => (
                <HomeItem
                  key={k}
                  as="span"
                  className="ab-why__tag"
                  index={i}
                  tone="soft"
                  baseDelay={0.28}
                  stagger={0.07}
                >
                  {k}
                </HomeItem>
              ))}
            </div>
          </HomeStagger>
        </div>
      </section>

      {/* Expert network */}
      <section className="ab-network" id="network">
        <div className="wrap ab-network__grid">
          <HomeStagger className="ab-network__intro">
            <HomeItem
              index={0}
              as="p"
              className="ab-eyebrow"
              tone="soft"
              baseDelay={0.05}
              stagger={0.09}
            >
              {a.networkLabel}
            </HomeItem>
            <HomeItem
              index={1}
              as="h2"
              className="ab-network__title"
              baseDelay={0.05}
              stagger={0.09}
            >
              {a.networkTitle}
            </HomeItem>
            <HomeItem
              index={2}
              as="span"
              className="ab-rule"
              tone="rule"
              baseDelay={0.22}
            />
            <HomeItem index={3} baseDelay={0.32}>
              <Link to={routes.experts} className="ab-network__cta">
                {a.networkCta}
              </Link>
            </HomeItem>
          </HomeStagger>
          <HomeReveal className="ab-network__copy" delay={0.18} tone="soft">
            <p className="ab-network__body">{a.networkBody}</p>
          </HomeReveal>
        </div>
      </section>

      {/* Board */}
      <section className="ab-board" id="board">
        <div className="wrap">
          <HomeStagger className="ab-board__head">
            <HomeItem
              index={0}
              as="p"
              className="ab-eyebrow"
              tone="soft"
              baseDelay={0.05}
              stagger={0.09}
            >
              {b.eyebrow}
            </HomeItem>
            <HomeItem
              index={1}
              as="h2"
              className="ab-board__title"
              baseDelay={0.05}
              stagger={0.09}
            >
              {b.title}
            </HomeItem>
            <HomeItem
              index={2}
              as="p"
              className="ab-board__lead"
              tone="soft"
              baseDelay={0.05}
              stagger={0.09}
            >
              {b.subtitle}
            </HomeItem>
            <HomeItem
              index={3}
              as="span"
              className="ab-rule"
              tone="rule"
              baseDelay={0.24}
            />
          </HomeStagger>

          <div className="ab-board__profiles">
            {b.members.map((member, i) => (
              <div key={member.name} className="ab-board__profile">
                <HomeReveal
                  className="ab-board__media"
                  delay={0.08 + i * 0.08}
                  tone="media"
                >
                  <img src={member.image} alt="" />
                </HomeReveal>
                <HomeStagger className="ab-board__copy">
                  <HomeItem
                    index={0}
                    as="p"
                    className="ab-board__tag"
                    tone="soft"
                    baseDelay={0.14 + i * 0.08}
                    stagger={0.07}
                  >
                    {member.role}
                  </HomeItem>
                  <HomeItem
                    index={1}
                    as="h3"
                    className="ab-board__name"
                    baseDelay={0.14 + i * 0.08}
                    stagger={0.07}
                  >
                    {member.name}
                  </HomeItem>
                  <HomeItem
                    index={2}
                    as="p"
                    className="ab-board__bio"
                    tone="soft"
                    baseDelay={0.14 + i * 0.08}
                    stagger={0.07}
                  >
                    {member.bio}
                  </HomeItem>
                  <HomeItem
                    index={3}
                    as="ol"
                    className="ab-board__creds"
                    tone="soft"
                    baseDelay={0.14 + i * 0.08}
                    stagger={0.07}
                  >
                    {member.highlights.map((item, j) => (
                      <li key={item}>
                        <span className="ab-board__cred-idx" aria-hidden="true">
                          {String(j + 1).padStart(2, '0')}
                        </span>
                        <span className="ab-board__cred-text">{item}</span>
                      </li>
                    ))}
                  </HomeItem>
                </HomeStagger>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="ab-approach" id="approach">
        <div className="wrap">
          <div className="ab-approach__intro">
            <HomeStagger className="ab-approach__intro-main">
              <HomeItem
                index={0}
                as="p"
                className="ab-eyebrow"
                tone="soft"
                baseDelay={0.05}
                stagger={0.09}
              >
                {a.approachLabel}
              </HomeItem>
              <HomeItem
                index={1}
                as="h2"
                className="ab-approach__title"
                baseDelay={0.05}
                stagger={0.09}
              >
                {a.approachTitle}
              </HomeItem>
              <HomeItem
                index={2}
                as="span"
                className="ab-rule"
                tone="rule"
                baseDelay={0.22}
              />
            </HomeStagger>
            <HomeReveal
              className="ab-approach__intro-aside"
              delay={0.16}
              tone="soft"
            >
              <p className="ab-approach__lead">{a.approachLead}</p>
            </HomeReveal>
          </div>

          <ol className="ab-approach__list">
            {a.approachSteps.map((step, i) => (
              <HomeItem
                key={step.num}
                as="li"
                className="ab-approach__row"
                index={i}
                baseDelay={0.06}
                stagger={0.08}
              >
                <span className="ab-approach__num" aria-hidden="true">
                  {step.num}
                </span>
                <h3 className="ab-approach__name">{step.title}</h3>
                <p className="ab-approach__body">{step.body}</p>
              </HomeItem>
            ))}
          </ol>
        </div>
      </section>

      {/* Where we work */}
      <section className="ab-where" id="where">
        <div className="wrap">
          <HomeStagger className="ab-where__head">
            <HomeItem
              index={0}
              as="p"
              className="ab-eyebrow"
              tone="soft"
              baseDelay={0.05}
              stagger={0.09}
            >
              {w.eyebrow}
            </HomeItem>
            <HomeItem
              index={1}
              as="h2"
              className="ab-where__title"
              baseDelay={0.05}
              stagger={0.09}
            >
              {w.title}
            </HomeItem>
            <HomeItem
              index={2}
              as="p"
              className="ab-where__body"
              tone="soft"
              baseDelay={0.05}
              stagger={0.09}
            >
              {w.subtitle}
            </HomeItem>
            <HomeItem
              index={3}
              as="span"
              className="ab-rule"
              tone="rule"
              baseDelay={0.24}
            />
          </HomeStagger>

          <div className="ab-where__corridor">
            {w.locations.flatMap((loc, i) => {
              const parts = []
              if (i > 0) {
                parts.push(
                  <HomeItem
                    key={`span-${loc.name}`}
                    as="span"
                    className="ab-where__span"
                    aria-hidden="true"
                    tone="rule"
                    index={i}
                    baseDelay={0.16}
                    stagger={0.12}
                  />,
                )
              }
              parts.push(
                <HomeItem
                  key={loc.name}
                  className="ab-where__node"
                  index={i}
                  baseDelay={0.1}
                  stagger={0.16}
                >
                  <p className="ab-where__tag">{loc.meta}</p>
                  <p className="ab-where__node-name">{loc.name}</p>
                </HomeItem>,
              )
              return parts
            })}
          </div>

          <div className="ab-where__profiles">
            {w.locations.map((loc, i) => {
              const flip = i % 2 === 1
              return (
                <div
                  key={loc.name}
                  className={`ab-where__profile${flip ? ' is-flip' : ''}`}
                >
                  <HomeReveal
                    className="ab-where__media"
                    delay={0.08 + i * 0.1}
                    tone="media"
                  >
                    <img src={loc.image} alt="" />
                  </HomeReveal>
                  <HomeStagger className="ab-where__copy">
                    <HomeItem
                      index={0}
                      as="p"
                      className="ab-where__tag"
                      tone="soft"
                      baseDelay={0.14 + i * 0.1}
                      stagger={0.08}
                    >
                      {loc.meta}
                    </HomeItem>
                    <HomeItem
                      index={1}
                      as="h3"
                      className="ab-where__name"
                      baseDelay={0.14 + i * 0.1}
                      stagger={0.08}
                    >
                      {loc.name}
                    </HomeItem>
                    <HomeItem
                      index={2}
                      as="p"
                      className="ab-where__text"
                      tone="soft"
                      baseDelay={0.14 + i * 0.1}
                      stagger={0.08}
                    >
                      {loc.body}
                    </HomeItem>
                  </HomeStagger>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
